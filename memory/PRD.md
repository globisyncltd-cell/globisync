# GlobiSync — Product Requirements Document

## Original Problem Statement
Build the best UK ecommerce agency website for GlobiSync (Birmingham).
Primary focus: UK-based ecommerce brands.
Core services: Marketplace Management (Amazon/eBay/Etsy), Shopify optimisation, SEO,
Social, Paid Ads, Full Account Management.
Secondary International Expansion page for brands from any country: UK, US, Middle East,
Southeast Asia — plus physical retail/supermarket entry.

## Architecture / Stack
- Backend: FastAPI (`/app/backend/server.py`), MongoDB via Motor, Resend SDK for emails
- Frontend: React 19 + React Router 7, Tailwind, Shadcn UI, Playfair Display + Plus Jakarta Sans

## SSR / SEO note
- True SSR requires migration to Next.js (out of scope for incremental update)
- Delivered instead: sitemap.xml (static + /api), robots.txt, JSON-LD structured data
  (Organization, LocalBusiness, FAQPage, BlogPosting), unique meta per route via react-helmet-async,
  semantic HTML, deep content across 35 SEO-optimised blog posts

## What's been implemented
### Iteration 1 (initial MVP)
- 7-page site (Home, Services, Markets, Case Studies, About, Team, Contact)
- Booking + contact forms → MongoDB
- Floating WhatsApp button
- Marketing marquee + trust bar

### Iteration 2 (this iteration — 2026-07)
- Repositioned as UK-first ecommerce agency (removed India-only narrative)
- 6 service pillars: Marketplace Management, Shopify & Website Optimisation, Ecommerce SEO,
  Social Media Marketing, Paid Advertising, Full Account Management
- New /international-expansion page (regions + retail markets + Chalhoub/Waitrose etc.)
- New /blog + /blog/:slug pages with **35 SEO blog posts** across 7 categories
- HowItWorks 4-step section (Discovery Call → Strategy → Execution → Reporting)
- FAQSection accordion with 7 questions (JSON-LD FAQPage schema)
- BrandStrip: London RAG, Shaze, Livetech, Tvam, PlayPanda (names only, no metrics)
- Consistent CTA "Book a Discovery Call" (all "free" language removed)
- Minimal 3-field contact form (name, email, growth challenge)
- Team reordered: Shweta (Founder & Director) → Zain (Strategic Advisor) → Sunny (Lead Consultant)
  with real photos at /team/*
- Logo simplified — removed "UK · Birmingham" subtext
- Footer: removed GlobeSync disclaimer; added company registration line
- SEO: sitemap.xml (43 URLs), robots.txt, JSON-LD (Org, LocalBusiness, FAQPage, BlogPosting)
- Backend endpoints /api/sitemap.xml and /api/robots.txt added
- Booking notification email subject updated to "Discovery Call"

## Deferred / Backlog
- P0: Provide **Resend API key** so contact + booking notifications reach globisyncltd@gmail.com
- P0: Provide **actual company registration number** — currently placeholder in footer
- P1: True SSR — requires Next.js migration (offer as next major upgrade)
- P1: Real client logos (SVG) for the Brand Strip (currently text names)
- P1: Team headshot review — confirm all three photos are correct
- P2: Google Analytics / GTM
- P2: OG image (og.png) referenced in structured data — need actual image
- P2: Blog post images use unsplash placeholders — swap to branded illustrations later
- P2: Admin page to view submissions

## Test Credentials
No auth on site. Backend endpoints unauthenticated.
