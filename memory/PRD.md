# GlobiSync — Product Requirements Document

## Original Problem Statement
Build a professional, WOW marketing website for GlobiSync, a Birmingham (UK) cross-border ecommerce
agency helping India-origin brands sell on Amazon, eBay, Etsy, Lazada, Zalora, Noon across the UK,
US, Singapore and Hong Kong. Positioning: hands-on growth partner (not a passive consultancy).
Design: clean, modern, trustworthy — Amazon-orange used tastefully as accent. Must include WhatsApp
floating chat, book-a-consultation flow, contact form, and full multi-page structure.

## Architecture / Stack
- Backend: FastAPI (`/app/backend/server.py`), MongoDB via Motor, Resend SDK (email — fire-and-forget)
- Frontend: React 19 + React Router 7, Tailwind, Shadcn UI, Playfair Display + Plus Jakarta Sans fonts
- Deployment target: existing Kubernetes preview; `REACT_APP_BACKEND_URL` used for API base

## User Personas
1. Indian D2C founder — wants a UK/US/GCC launch partner, needs VAT/EORI/FDA help
2. Marketplace-fatigued brand owner — GMV plateaued, needs an operator, not a deck
3. Advisor/investor scanning cross-border ops partners for portfolio brands

## Core Requirements (static)
- Multi-page: Home, Services, Markets, Case Studies, About, Team, Contact
- Trust bar with Amazon, eBay, Etsy, Lazada, Zalora, Noon
- Sticky "Book a Strategy Call" CTA on every page
- Floating WhatsApp button → wa.me/447309721673
- In-house date/time booking form (persisted to MongoDB)
- Contact form (persisted to MongoDB, email to globisyncltd@gmail.com when Resend key set)
- SEO with "UK ecommerce agency" and "Birmingham" in titles/descriptions
- Mobile-responsive; sharp editorial typography

## What's been implemented (2026-01)
- Full 7-page site with editorial serif hero, marketplace marquee, sharp Amazon-orange accents
- Backend endpoints: `POST/GET /api/contact`, `POST/GET /api/bookings`, `GET /api/health`
- Custom booking form (date input + Radix Select time slots) and Contact form both persist to Mongo
- Floating WhatsApp CTA with animated ping ring
- Team page with Shweta/Sunny/Zain and LinkedIn links
- SEO meta tags via react-helmet-async; canonical to globisync.com
- Testing agent iteration_1.json — 100% pass on backend + frontend flows

## Deferred / Backlog
- P0: Add real Resend API key so contact + booking emails actually deliver to globisyncltd@gmail.com
- P1: Auto-send confirmation email to the visitor (currently only internal notification is wired)
- P1: Replace placeholder team headshots with actual photos of Shweta/Sunny/Zain
- P1: Real case-study logos & anonymised client quotes
- P2: Blog / insights section for SEO (Birmingham ecommerce agency long-tail queries)
- P2: Google Analytics / GTM tag
- P2: Simple admin page to view submitted bookings/contacts
- P2: Multi-language (Hindi teaser for India-based visitors)

## Test Credentials
No auth on site. Backend endpoints unauthenticated. No credentials needed.
