# GlobiSync PRD

## Original Problem Statement
Build and iteratively redesign the website for **GlobiSync**, a UK-based cross-border ecommerce growth partner. The site must be professional, engaging, and conversion-focused — acting as an ecommerce growth partner rather than a consultancy. Aesthetic must be inspired by havasmarket.co.uk (clean, white + amber, DM Sans, grid layouts, no popups on nav dropdowns).

## Core Requirements
- 5-item consolidated nav: Ecommerce Support, Social & Digital Marketing, Cross Border Ecommerce, Retail, Team
- Dropdowns link to full standalone pages with "View All [Category] Services →" links
- Category overview pages at `/ecommerce`, `/social-digital`, `/cross-border`, `/retail`
- Retail subpages with exact custom intro text (Retail to Ecommerce, Retail Distribution)
- 3-role Careers portal with CV upload → email (Marketplace Manager, Marketing Ninja, Social Media Management)
- Contact + Booking + Careers forms routed via Resend to `globisyncltd@gmail.com`
- WhatsApp FAB, dynamic SEO (sitemap + raw HTML injection), programmatic subservice pages

## Tech Stack
- **Frontend**: React (CRA), Tailwind, Shadcn UI, DM Sans (light/medium weights only)
- **Backend**: FastAPI + MongoDB
- **Email**: Resend (domain-verified, key in backend/.env)

## What's Implemented (as of Feb 2026)
- ✅ Full site structure with SEO-friendly routing (dynamic /services/:slug + 4 category overviews)
- ✅ Resend email delivery for Contact, Booking, Playbook Lead Magnet, and Careers CV upload
- ✅ WhatsApp FAB + full contact panel
- ✅ 3-role Careers portal with 8MB CV upload → email attachment
- ✅ Nav with hover dropdowns (scrollable), sticky "View All" button, mobile menu
- ✅ 4-card homepage category grid (Ecommerce Support, Social & Digital, Cross Border, Retail)
- ✅ "Brands at every stage" audience strip (SMEs, Startups/D2C, Emerging, Enterprise)
- ✅ Footer consolidated — no "+N more" hidden links, all footer links clickable, service section shows 4 category overview cards only
- ✅ Contact page displays both `globisyncltd@gmail.com` and `growth@globisync.com`
- ✅ Hero updated: no kicker, tighter tagline ("Marketplaces. Social. Paid Media. Cross-Border. One team. One goal — your growth.")
- ✅ "operators" → "experts" language throughout Careers + Home

## Data Model (MongoDB)
- `contacts`: { id, name, email, message, created_at }
- `bookings`: { id, name, email, company, phone, preferred_date, preferred_time, timezone_name, notes, created_at }
- `applications`: { id, name, email, position, cv_filename, created_at }

## Key API Endpoints
- `POST /api/contact` — send contact message
- `POST /api/bookings` — book a discovery call
- `POST /api/careers/apply` — multipart CV upload → email
- `POST /api/lead-magnet` — playbook delivery
- `GET /api/sitemap.xml` — programmatic sitemap
- `GET /api/health` — health check

## Priority Backlog

### P0 (Done)
- ✅ Havas-inspired redesign + 5-item nav
- ✅ Category overview pages
- ✅ Retail subpages with exact copy
- ✅ Homepage: 4-card grid, remove HowItWorks, add "Brands at every stage"
- ✅ 3-role Careers, no locations/salary
- ✅ Footer cleanup
- ✅ Add growth@globisync.com to Contact
- ✅ Hero updates (kicker removed, tagline updated, "expert" language)
- ✅ Social & Digital dropdown scrollable with sticky View All

### P1 (Next)
- Enrich SubService pages further (rich content sections, testimonials, related services) to fully match havas amazon-support depth
- Add case studies / testimonials section to homepage
- Delete deprecated pages (InternationalExpansion.jsx if unused, Fee Calculator remnants)

### P2 (Backlog)
- Structured data enhancement for local SEO (Birmingham)
- Blog article expansion for programmatic SEO
- A/B test the homepage hero variants

## Integrations
- **Resend** (domain-verified) — Contact, Booking, Careers CV, Lead Magnet emails all route to globisyncltd@gmail.com

## Assets & Docs
- Test credentials file: N/A (no auth in site)
- Test reports: `/app/test_reports/iteration_1.json` → `iteration_8.json`
