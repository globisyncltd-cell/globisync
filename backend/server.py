from fastapi import FastAPI, APIRouter, HTTPException, UploadFile, File, Form
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import base64
import asyncio
import logging
import resend
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend
RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '').strip()
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
CONTACT_EMAIL = os.environ.get('CONTACT_EMAIL', 'globisyncltd@gmail.com')
if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

app = FastAPI(title="GlobiSync API")
api_router = APIRouter(prefix="/api")

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


# ---------- Models ----------
class ContactSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    company: Optional[str] = None
    phone: Optional[str] = None
    marketplace: Optional[str] = None
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    company: Optional[str] = None
    phone: Optional[str] = None
    marketplace: Optional[str] = None
    message: str


class BookingSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    company: Optional[str] = None
    phone: Optional[str] = None
    preferred_date: str  # YYYY-MM-DD
    preferred_time: str  # HH:MM
    timezone_name: Optional[str] = None
    marketplace: Optional[str] = None
    notes: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class BookingCreate(BaseModel):
    name: str
    email: EmailStr
    company: Optional[str] = None
    phone: Optional[str] = None
    preferred_date: str
    preferred_time: str
    timezone_name: Optional[str] = None
    marketplace: Optional[str] = None
    notes: Optional[str] = None


# ---------- Helpers ----------
async def _send_email_async(subject: str, html: str, to_email: str = None, attachments: list = None):
    """Send email via Resend. Silently no-op if API key not configured."""
    if not RESEND_API_KEY:
        logger.info("RESEND_API_KEY not set; skipping email send.")
        return None
    target = to_email or CONTACT_EMAIL
    try:
        params = {
            "from": SENDER_EMAIL,
            "to": [target],
            "subject": subject,
            "html": html,
        }
        if attachments:
            params["attachments"] = attachments
        result = await asyncio.to_thread(resend.Emails.send, params)
        logger.info(f"Email sent: {result}")
        return result
    except Exception as e:
        logger.error(f"Email send failed: {e}")
        return None


def _contact_html(payload: ContactSubmission) -> str:
    return f"""
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#0b0f19">
      <h2 style="border-bottom:2px solid #FF9900;padding-bottom:8px">New Contact Enquiry — GlobiSync</h2>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:6px 0;font-weight:600">Name</td><td>{payload.name}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600">Email</td><td>{payload.email}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600">Company</td><td>{payload.company or '-'}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600">Phone</td><td>{payload.phone or '-'}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600">Marketplace Interest</td><td>{payload.marketplace or '-'}</td></tr>
      </table>
      <h3 style="margin-top:16px">Message</h3>
      <p style="white-space:pre-wrap;background:#f8f9fa;padding:12px;border-left:3px solid #FF9900">{payload.message}</p>
      <p style="color:#4B5563;font-size:12px;margin-top:24px">Submitted at {payload.created_at.isoformat()}</p>
    </div>
    """


def _booking_html(payload: BookingSubmission) -> str:
    return f"""
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#0b0f19">
      <h2 style="border-bottom:2px solid #FF9900;padding-bottom:8px">New Discovery Call Booking — GlobiSync</h2>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:6px 0;font-weight:600">Name</td><td>{payload.name}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600">Email</td><td>{payload.email}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600">Company</td><td>{payload.company or '-'}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600">Phone</td><td>{payload.phone or '-'}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600">Preferred Date</td><td>{payload.preferred_date}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600">Preferred Time</td><td>{payload.preferred_time} {payload.timezone_name or ''}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600">Marketplace</td><td>{payload.marketplace or '-'}</td></tr>
      </table>
      <h3 style="margin-top:16px">Notes</h3>
      <p style="white-space:pre-wrap;background:#f8f9fa;padding:12px;border-left:3px solid #FF9900">{payload.notes or '-'}</p>
      <p style="color:#4B5563;font-size:12px;margin-top:24px">Submitted at {payload.created_at.isoformat()}</p>
    </div>
    """


# ---------- Auto-response templates (to submitter) ----------
def _thank_you_html(name: str) -> str:
    return f"""
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#0b0f19">
      <div style="background:#0b0f19;color:#fff;padding:24px">
        <div style="font-size:12px;letter-spacing:3px;color:#FF9900;text-transform:uppercase">GlobiSync</div>
        <div style="font-size:22px;font-weight:700;margin-top:8px">Thanks, {name} — we've got your message.</div>
      </div>
      <div style="padding:24px">
        <p>A senior operator from our Birmingham desk will reply within one working day.</p>
        <p>In the meantime, if it's time-sensitive, WhatsApp us on <a href="https://wa.me/447309721673" style="color:#0b0f19;font-weight:600">+44 7309 721673</a>.</p>
        <p style="margin-top:24px">— The GlobiSync team</p>
        <hr style="border:none;border-top:1px solid #eee;margin:24px 0" />
        <p style="color:#4B5563;font-size:12px">
          GlobiSync Ltd · 296 Pershore Road, Birmingham, B5 7SH · United Kingdom<br />
          <a href="mailto:growth@globisync.com" style="color:#4B5563">growth@globisync.com</a>
        </p>
      </div>
    </div>
    """


def _booking_confirmation_html(payload: BookingSubmission) -> str:
    return f"""
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#0b0f19">
      <div style="background:#0b0f19;color:#fff;padding:24px">
        <div style="font-size:12px;letter-spacing:3px;color:#FF9900;text-transform:uppercase">GlobiSync · Discovery Call</div>
        <div style="font-size:22px;font-weight:700;margin-top:8px">Thanks {payload.name} — your call request is in.</div>
      </div>
      <div style="padding:24px">
        <p>We've received your discovery-call request for:</p>
        <table style="width:100%;background:#f8f9fa;padding:16px;border-left:3px solid #FF9900;margin:16px 0">
          <tr><td style="padding:4px 0"><strong>Date:</strong></td><td>{payload.preferred_date}</td></tr>
          <tr><td style="padding:4px 0"><strong>Time:</strong></td><td>{payload.preferred_time} {payload.timezone_name or ''}</td></tr>
        </table>
        <p>A senior operator will send you a calendar invite within one working day to confirm the slot.</p>
        <p style="margin-top:24px">Any questions? Reply to this email or WhatsApp us on <a href="https://wa.me/447309721673" style="color:#0b0f19;font-weight:600">+44 7309 721673</a>.</p>
        <p style="margin-top:24px">— The GlobiSync team</p>
        <hr style="border:none;border-top:1px solid #eee;margin:24px 0" />
        <p style="color:#4B5563;font-size:12px">
          GlobiSync Ltd · 296 Pershore Road, Birmingham, B5 7SH · United Kingdom<br />
          <a href="mailto:growth@globisync.com" style="color:#4B5563">growth@globisync.com</a>
        </p>
      </div>
    </div>
    """


def _playbook_html(name: str) -> str:
    return f"""
    <div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#0b0f19">
      <div style="background:#0b0f19;color:#fff;padding:28px">
        <div style="font-size:12px;letter-spacing:3px;color:#FF9900;text-transform:uppercase">GlobiSync · Margin Playbook</div>
        <div style="font-size:24px;font-weight:700;margin-top:8px">Your UK Marketplace Margin Playbook</div>
      </div>
      <div style="padding:28px">
        <p>Hi {name},</p>
        <p>As promised — a one-page breakdown of how to protect margin across Amazon UK, eBay UK, and Etsy UK, plus category-specific fee tables.</p>

        <h3 style="color:#0b0f19;border-bottom:2px solid #FF9900;padding-bottom:6px;margin-top:28px">The three fee layers every UK seller pays</h3>
        <ol style="line-height:1.8">
          <li><strong>Referral / commission</strong> — a % of the selling price. Amazon UK: 7-20% by category. eBay UK: usually 12.8%. Etsy: 6.5% flat.</li>
          <li><strong>Payment processing</strong> — baked into Amazon and eBay's headline fee. Etsy charges ~4% + £0.20 per transaction separately.</li>
          <li><strong>Subscription / listing</strong> — Amazon Professional £25/month, Etsy £0.20 per listing (renewed every 4 months), eBay optional store fees.</li>
        </ol>

        <h3 style="color:#0b0f19;border-bottom:2px solid #FF9900;padding-bottom:6px;margin-top:28px">Amazon UK referral rates by category</h3>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr style="background:#f8f9fa"><th style="text-align:left;padding:8px;border-bottom:1px solid #eee">Category</th><th style="text-align:right;padding:8px;border-bottom:1px solid #eee">Rate</th></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee">Computers</td><td style="text-align:right;padding:8px;border-bottom:1px solid #eee">7%</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee">Consumer Electronics</td><td style="text-align:right;padding:8px;border-bottom:1px solid #eee">8%</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee">Automotive &amp; Tools</td><td style="text-align:right;padding:8px;border-bottom:1px solid #eee">12%</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee">Beauty · Home · Health · Toys · Sports · Grocery · Pet · Baby</td><td style="text-align:right;padding:8px;border-bottom:1px solid #eee">15%</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee">Watches</td><td style="text-align:right;padding:8px;border-bottom:1px solid #eee">16%</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee">Clothing &amp; Apparel</td><td style="text-align:right;padding:8px;border-bottom:1px solid #eee">17%</td></tr>
          <tr><td style="padding:8px">Jewellery</td><td style="text-align:right;padding:8px">20%</td></tr>
        </table>

        <h3 style="color:#0b0f19;border-bottom:2px solid #FF9900;padding-bottom:6px;margin-top:28px">Five margin-protection moves that work</h3>
        <ol style="line-height:1.8">
          <li><strong>Bundle out of the buy-box race.</strong> Bundle SKUs don't share Buy Box competitors and defend margin.</li>
          <li><strong>Set repricer floors and rebound rules.</strong> Never let automation ratchet price down permanently.</li>
          <li><strong>Structure listings for A+ / Enhanced Content.</strong> Higher CVR at the same price = higher effective margin.</li>
          <li><strong>Layer subscription / Subscribe &amp; Save.</strong> On Amazon, S&amp;S buyers pay slightly less but repurchase 3-4x more — LTV lift outweighs unit-margin dilution.</li>
          <li><strong>Move on shipping costs, not price.</strong> Free-shipping thresholds lift AOV without eroding % margin.</li>
        </ol>

        <div style="margin-top:36px;padding:20px;background:#FF9900">
          <div style="font-weight:700;font-size:18px">Want us to run this on your account?</div>
          <div style="margin-top:6px">We can audit your unit economics across Amazon UK, eBay UK, Etsy, and Shopify — and give you a written margin roadmap.</div>
          <a href="https://www.globisync.com/contact" style="display:inline-block;margin-top:12px;background:#0b0f19;color:#fff;padding:12px 20px;text-decoration:none;font-weight:600">Book a Discovery Call →</a>
        </div>

        <p style="margin-top:24px">— The GlobiSync team</p>
        <hr style="border:none;border-top:1px solid #eee;margin:24px 0" />
        <p style="color:#4B5563;font-size:12px">
          GlobiSync Ltd · 296 Pershore Road, Birmingham, B5 7SH · United Kingdom<br />
          <a href="mailto:growth@globisync.com" style="color:#4B5563">growth@globisync.com</a>
        </p>
      </div>
    </div>
    """


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "GlobiSync API — cross-border ecommerce growth"}


@api_router.get("/health")
async def health():
    return {"status": "ok", "email_configured": bool(RESEND_API_KEY)}


# ---------- Sitemap / SEO helpers ----------
from fastapi.responses import Response

_STATIC_ROUTES = [
    ("/", "1.0", "weekly"),
    ("/international-expansion", "0.8", "monthly"),
    ("/careers", "0.7", "weekly"),
    ("/about", "0.6", "monthly"),
    ("/team", "0.6", "monthly"),
    ("/blog", "0.8", "weekly"),
    ("/contact", "0.7", "monthly"),
    ("/privacy-policy", "0.3", "yearly"),
]

_BLOG_SLUGS = [
    "how-to-sell-on-amazon-uk-founder-guide-2026","shopify-plus-vs-shopify-which-to-choose",
    "amazon-ppc-2026-whats-changed","tiktok-shop-uk-founder-playbook",
    "ecommerce-seo-checklist-uk-brands","core-web-vitals-shopify-fixes",
    "klaviyo-email-flows-every-dtc-brand-needs","ebay-uk-launch-successfully",
    "etsy-seo-tactics-that-work","cross-border-uk-to-us",
    "selling-on-noon-gcc-playbook","lazada-launch-checklist",
    "zalora-onboarding-guide","uk-vat-and-eori-international-sellers",
    "amazon-vine-programme-worth-it","meta-ads-creative-that-converts",
    "google-pmax-dtc-setup-guide","ecommerce-analytics-kpis-that-matter",
    "monthly-promo-calendar-amazon","product-photography-that-sells-online",
    "ugc-content-source-and-use","retail-expansion-uk-supermarket-entry",
    "chalhoub-group-brand-entry","distributor-vs-direct-decision",
    "amazon-aplus-content-best-practices","amazon-repricing-strategies",
    "buy-box-win-and-defend","cross-border-logistics-freight-to-amazon-fba",
    "ior-services-when-you-need-one","shopify-checkout-optimisation-quick-wins",
    "subscription-commerce-shopify","loyalty-programs-drive-ltv",
    "post-purchase-experience-growth-lever","brand-protection-amazon-map-ip-gating",
    "hire-agency-vs-in-house",
]

BASE_URL = "https://www.globisync.com"


_SUBSERVICE_SLUGS = [
    "amazon","ebay","etsy","ecommerce-strategy","ecommerce-account-management",
    "ecommerce-product-listings","stock-inventory-management","order-management",
    "ecommerce-training","marketplace-integration","multi-marketplace-management",
    "marketplace-optimisation","facebook","instagram","tiktok","social-media-strategy",
    "social-content-creatives","community-management","social-commerce",
    "performance-marketing","paid-search","paid-social","seo","crm-email-marketing",
    "generative-engine-optimisation","answer-engine-optimisation","strategy",
    "conversion-optimisation","organic-search","facebook-ads","instagram-ads",
    "tiktok-ads","google-meta-ads","google-remarketing","google-shopping",
    "product-packaging-design","uk-warehouse-storage","uk-retail-ecommerce-access",
    "pricing-compliance","import-customs","cross-border-logistics",
    "international-brand-positioning","retail-to-ecommerce","retail-distribution",
]


@api_router.get("/sitemap.xml")
async def sitemap():
    today = datetime.now(timezone.utc).date().isoformat()
    lines = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for path, prio, freq in _STATIC_ROUTES:
        lines.append(f'  <url><loc>{BASE_URL}{path}</loc><lastmod>{today}</lastmod><changefreq>{freq}</changefreq><priority>{prio}</priority></url>')
    for slug in _SUBSERVICE_SLUGS:
        lines.append(f'  <url><loc>{BASE_URL}/services/{slug}</loc><lastmod>{today}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>')
    for slug in _BLOG_SLUGS:
        lines.append(f'  <url><loc>{BASE_URL}/blog/{slug}</loc><lastmod>{today}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>')
    lines.append('</urlset>')
    return Response(content='\n'.join(lines), media_type='application/xml')


@api_router.get("/robots.txt")
async def robots():
    body = f"User-agent: *\nAllow: /\n\nSitemap: {BASE_URL}/sitemap.xml\n"
    return Response(content=body, media_type='text/plain')


@api_router.post("/contact", response_model=ContactSubmission)
async def create_contact(payload: ContactCreate):
    submission = ContactSubmission(**payload.model_dump())
    doc = submission.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.contact_submissions.insert_one(doc)
    # 1) Admin notification (to CONTACT_EMAIL)
    asyncio.create_task(_send_email_async(
        subject=f"New enquiry from {submission.name} — GlobiSync",
        html=_contact_html(submission),
    ))
    # 2) Auto-response to submitter. If it's a fee-calculator lead, send the margin playbook.
    is_fee_calc_lead = submission.message.strip().lower().startswith("fee-calculator lead")
    if is_fee_calc_lead:
        asyncio.create_task(_send_email_async(
            subject="Your UK Marketplace Margin Playbook — GlobiSync",
            html=_playbook_html(submission.name),
            to_email=submission.email,
        ))
    else:
        asyncio.create_task(_send_email_async(
            subject="Thanks — we've received your message · GlobiSync",
            html=_thank_you_html(submission.name),
            to_email=submission.email,
        ))
    return submission


@api_router.get("/contact", response_model=List[ContactSubmission])
async def list_contacts():
    docs = await db.contact_submissions.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for d in docs:
        if isinstance(d.get('created_at'), str):
            d['created_at'] = datetime.fromisoformat(d['created_at'])
    return docs


@api_router.post("/bookings", response_model=BookingSubmission)
async def create_booking(payload: BookingCreate):
    submission = BookingSubmission(**payload.model_dump())
    doc = submission.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.bookings.insert_one(doc)
    # 1) Admin notification (to CONTACT_EMAIL)
    asyncio.create_task(_send_email_async(
        subject=f"New discovery-call booking from {submission.name} — GlobiSync",
        html=_booking_html(submission),
    ))
    # 2) Confirmation to the submitter
    asyncio.create_task(_send_email_async(
        subject="Your discovery-call request · GlobiSync",
        html=_booking_confirmation_html(submission),
        to_email=submission.email,
    ))
    return submission


@api_router.get("/bookings", response_model=List[BookingSubmission])
async def list_bookings():
    docs = await db.bookings.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for d in docs:
        if isinstance(d.get('created_at'), str):
            d['created_at'] = datetime.fromisoformat(d['created_at'])
    return docs


# ---------- Careers ----------
MAX_CV_BYTES = 8 * 1024 * 1024  # 8 MB
ALLOWED_CV_TYPES = {"application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"}


def _career_admin_html(name: str, email: str, phone: str, position: str, linkedin: str, cover_letter: str, cv_filename: str) -> str:
    return f"""
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#0b0f19">
      <h2 style="border-bottom:2px solid #FF9900;padding-bottom:8px">New Job Application — GlobiSync</h2>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:6px 0;font-weight:600">Name</td><td>{name}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600">Email</td><td>{email}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600">Phone</td><td>{phone or '-'}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600">Position</td><td>{position}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600">LinkedIn</td><td>{linkedin or '-'}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600">CV attached</td><td>{cv_filename}</td></tr>
      </table>
      <h3 style="margin-top:16px">Cover letter</h3>
      <p style="white-space:pre-wrap;background:#f8f9fa;padding:12px;border-left:3px solid #FF9900">{cover_letter or '-'}</p>
    </div>
    """


def _career_ack_html(name: str, position: str) -> str:
    return f"""
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#0b0f19">
      <div style="background:#0b0f19;color:#fff;padding:24px">
        <div style="font-size:12px;letter-spacing:3px;color:#FF9900;text-transform:uppercase">GlobiSync · Careers</div>
        <div style="font-size:22px;font-weight:700;margin-top:8px">Thanks, {name} — application received.</div>
      </div>
      <div style="padding:24px">
        <p>We've received your application for <strong>{position}</strong>. Our team will review it within 5 working days and get in touch if there's a fit.</p>
        <p>In the meantime, feel free to look through what we do at <a href="https://www.globisync.com" style="color:#0b0f19;font-weight:600">globisync.com</a>.</p>
        <p style="margin-top:24px">— The GlobiSync team</p>
        <hr style="border:none;border-top:1px solid #eee;margin:24px 0" />
        <p style="color:#4B5563;font-size:12px">
          GlobiSync Ltd · 296 Pershore Road, Birmingham, B5 7SH · United Kingdom<br />
          <a href="mailto:growth@globisync.com" style="color:#4B5563">growth@globisync.com</a>
        </p>
      </div>
    </div>
    """


class CareerApplication(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: Optional[str] = None
    position: str
    linkedin: Optional[str] = None
    cover_letter: Optional[str] = None
    cv_filename: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


@api_router.post("/careers/apply", response_model=CareerApplication)
async def careers_apply(
    name: str = Form(...),
    email: EmailStr = Form(...),
    phone: str = Form(""),
    position: str = Form(...),
    linkedin: str = Form(""),
    cover_letter: str = Form(""),
    cv: UploadFile = File(...),
):
    # Validate CV
    if cv.content_type not in ALLOWED_CV_TYPES:
        raise HTTPException(status_code=400, detail="CV must be a PDF or Word document (.pdf, .doc, .docx).")
    cv_bytes = await cv.read()
    if len(cv_bytes) == 0:
        raise HTTPException(status_code=400, detail="CV file is empty.")
    if len(cv_bytes) > MAX_CV_BYTES:
        raise HTTPException(status_code=400, detail=f"CV file exceeds {MAX_CV_BYTES // (1024*1024)} MB limit.")

    application = CareerApplication(
        name=name, email=email, phone=phone or None, position=position,
        linkedin=linkedin or None, cover_letter=cover_letter or None,
        cv_filename=cv.filename or "cv",
    )
    doc = application.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.career_applications.insert_one(doc)

    # Encode CV once for attachment
    cv_b64 = base64.b64encode(cv_bytes).decode()
    attachment = [{"filename": cv.filename or "cv.pdf", "content": cv_b64}]

    # 1) Admin notification with CV attached
    asyncio.create_task(_send_email_async(
        subject=f"New job application: {application.position} — {application.name}",
        html=_career_admin_html(application.name, application.email, application.phone or "", application.position, application.linkedin or "", application.cover_letter or "", application.cv_filename),
        attachments=attachment,
    ))
    # 2) Acknowledgement to applicant
    asyncio.create_task(_send_email_async(
        subject="Application received — GlobiSync",
        html=_career_ack_html(application.name, application.position),
        to_email=application.email,
    ))
    return application


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
