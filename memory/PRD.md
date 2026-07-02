# GlobiSync — PRD

## Original Problem Statement
Build the best UK ecommerce agency website for GlobiSync. Primary focus: UK-based brands and Amazon sellers. Services: Marketplace Management, Shopify/website optimisation, SEO, Social, Paid Ads, Full Account Management. Secondary: International expansion (UK/US/ME/SEA marketplaces + retail).

## Architecture
- Backend: FastAPI + MongoDB + Resend (email fire-and-forget)
- Frontend: React 19 SPA (CRA) + Tailwind + Shadcn UI
- SEO: sitemap.xml + robots.txt + JSON-LD structured data + static SEO fallback content in index.html #root so raw HTML response contains H1 + description for crawlers (React hydrates and takes over)

## What's implemented
### V1 — MVP
- 7-page marketing site + WhatsApp FAB + booking + contact forms

### V2 — UK Reposition
- Reworked to UK-first agency positioning; new /international-expansion + /blog (35 SEO posts) + How It Works + FAQ + Brand Strip

### V3 — Current iteration
- Hero copy → "We help brands and Amazon sellers grow online sales — end to end"
- Removed Est. 2019 pill, earth-model image, 3-month rolling contract chip
- Added "Retainers from £300/month" and "Free Fee Calculator" secondary CTA
- Removed Birmingham from title tag + meta description (kept only where physical HQ address is shown)
- Team reordered + real photos: Shweta (Founder & Director), Zain (Strategic Advisor), Sunny (Lead Consultant — MBA UK, 15+ years)
- Brand Strip now uses actual logo images from `/brands/*.png` (London RAG, Shaze, Livetech, Tvam, PlayPanda)
- Footer: removed "Company registration coming soon"; now says "Registered in England · HMRC"
- FAQ pricing starts from £300/month
- Case Studies removed from Nav; `/case-studies` route redirects to Home
- New `/fee-calculator` page (interactive Amazon/eBay/Etsy fee calculator with lead-capture email form)
- International Expansion regions expanded to 5-6 marketplaces each (UK adds Shopify + NOTHS, US adds eBay + TikTok, ME adds Namshi + TikTok, SEA adds TikTok + Tokopedia)
- SSR-lite: injected H1 + hero copy + nav + contact info into `<div id="root">` in public/index.html so crawlers see content in raw HTML response
- "Managers" terminology → "experts" across site
- Testing agent iteration_3: 100% backend / 96%→100% frontend after Middle East region fix

## Deferred / Backlog
- **P0:** Provide **Resend API key** (add to `/app/backend/.env` RESEND_API_KEY=re_xxx and `sudo supervisorctl restart backend`) so contact + booking + fee-calculator lead emails actually deliver to globisyncltd@gmail.com
- P1: True per-route SSR = migrate to Next.js (current SSR-lite injects same content on all routes until React takes over)
- P2: Higher-resolution brand logos (current favicons are 256×256 for LondonRag/PlayPanda/Shaze/Livetech; Tvam has proper 21KB logo)
- P2: Rename actual image files in `/team/` folder so filename matches subject (currently intentionally cross-mapped since asset upload order was mixed)
- P2: OG image, Google Analytics / GTM
- P2: Admin page to view submitted bookings/contacts/fee-calc leads

## Test Credentials
No auth on site.
