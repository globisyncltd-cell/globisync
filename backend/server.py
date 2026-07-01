from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
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
async def _send_email_async(subject: str, html: str, to_email: str = None):
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
    ("/services", "0.8", "monthly"),
    ("/international-expansion", "0.8", "monthly"),
    ("/case-studies", "0.7", "monthly"),
    ("/about", "0.6", "monthly"),
    ("/team", "0.6", "monthly"),
    ("/blog", "0.8", "weekly"),
    ("/contact", "0.7", "monthly"),
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


@api_router.get("/sitemap.xml")
async def sitemap():
    today = datetime.now(timezone.utc).date().isoformat()
    lines = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for path, prio, freq in _STATIC_ROUTES:
        lines.append(f'  <url><loc>{BASE_URL}{path}</loc><lastmod>{today}</lastmod><changefreq>{freq}</changefreq><priority>{prio}</priority></url>')
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
    # Fire and forget email
    asyncio.create_task(_send_email_async(
        subject=f"New enquiry from {submission.name} — GlobiSync",
        html=_contact_html(submission),
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
    asyncio.create_task(_send_email_async(
        subject=f"New discovery-call booking from {submission.name} — GlobiSync",
        html=_booking_html(submission),
    ))
    return submission


@api_router.get("/bookings", response_model=List[BookingSubmission])
async def list_bookings():
    docs = await db.bookings.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for d in docs:
        if isinstance(d.get('created_at'), str):
            d['created_at'] = datetime.fromisoformat(d['created_at'])
    return docs


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
