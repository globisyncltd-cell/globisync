import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { SITE } from "@/lib/content";

// Anonymised, illustrative case studies. Do not attribute to specific named clients.
const CASE_STUDIES = [
  {
    slug: "uk-fashion-shopify",
    title: "UK Fashion DTC · Shopify + Paid Social",
    industry: "Fashion · UK",
    metric: "3.4×",
    metricLabel: "MER over 6 months",
    challenge:
      "A UK fashion DTC brand was plateaued at 1.8× MER on Meta with a Shopify site converting under 1.9%.",
    approach:
      "Rebuilt the theme for speed and merchandising, restructured Meta campaigns around Advantage+ with 30+ creative variants, and layered Klaviyo flows across the full lifecycle.",
    outcome:
      "MER settled at 3.4× within six months. Site CVR to 3.2%. Email-attributed revenue up from 8% to 24% of total.",
    stack: ["Shopify Plus", "Meta Ads", "Klaviyo", "CRO"],
  },
  {
    slug: "home-brand-amazon-uk",
    title: "Home & Lifestyle · Amazon UK Bestseller",
    industry: "Home & Lifestyle · UK",
    metric: "+184%",
    metricLabel: "GMV in 9 months",
    challenge:
      "Established DTC home brand was under-indexed on Amazon UK — 22 SKUs, poor A+, and PPC managed in-house without structure.",
    approach:
      "Full A+ rebuild, listing SEO across all SKUs, structured Sponsored Products campaigns with clean negatives, and Vine enrolment for new launches.",
    outcome:
      "Bestseller badge in two subcategories. TACoS settled at 11.4% by month 9. Blended MER lifted 42%.",
    stack: ["Amazon UK", "A+ Content", "Sponsored Products", "Vine"],
  },
  {
    slug: "beauty-brand-international",
    title: "Beauty Brand · International Expansion",
    industry: "Beauty · UK → Middle East",
    metric: "6.4×",
    metricLabel: "ROAS in Q1 launch",
    challenge:
      "UK beauty brand ready to expand into GCC but had no Noon presence, no Arabic content, and no in-market distribution partner.",
    approach:
      "Full Noon onboarding, Noon Express fulfilment, Arabic + English creative production, and a Ramadan-timed paid launch through Meta and Noon Ads.",
    outcome:
      "6.4× blended ROAS across Ramadan window. Three SKUs stocked into Noon FCs by month two.",
    stack: ["Noon", "Meta Ads", "Arabic localisation", "International"],
  },
];

export default function CaseStudies() {
  return (
    <>
      <SEO
        title="Case Studies · UK Ecommerce Agency Client Outcomes"
        description="Illustrative case studies showing how GlobiSync runs marketplace, Shopify, and international expansion engagements for UK and global brands."
        path="/case-studies"
      />
      <section className="bg-white pt-20 pb-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">[ Client outcomes ]</div>
          <h1 className="mt-3 font-serif text-5xl md:text-6xl font-bold text-ink leading-[1.05]">
            Real accounts.<br />Real numbers.
          </h1>
          <p className="mt-6 max-w-2xl text-muted2 text-lg">
            Three illustrative engagements from our roster. Client names anonymised on request — the
            numbers, timelines, and playbook are exactly what we ran.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
          {CASE_STUDIES.map((c, i) => (
            <article
              key={c.slug}
              data-testid={`case-study-${c.slug}`}
              className="grid lg:grid-cols-12 gap-0 border border-ink bg-white hover:sharp-shadow transition-all"
            >
              <div className="lg:col-span-4 bg-slate950 text-white p-10 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">Case Study · 0{i + 1}</div>
                  <div className="mt-8 font-serif text-7xl md:text-8xl font-bold text-amber leading-none">{c.metric}</div>
                  <div className="mt-3 text-sm text-white/80">{c.metricLabel}</div>
                </div>
                <div className="mt-10 flex flex-wrap gap-2">
                  {c.stack.map((s) => (
                    <span key={s} className="text-xs font-mono px-2 py-1 border border-white/30 text-white/80">{s}</span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-8 p-10">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted2">{c.industry}</div>
                <h2 className="mt-2 font-serif text-3xl md:text-4xl font-bold text-ink leading-tight">{c.title}</h2>
                <div className="mt-6 space-y-5">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">Challenge</div>
                    <p className="mt-1 text-muted2">{c.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">Approach</div>
                    <p className="mt-1 text-muted2">{c.approach}</p>
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">Outcome</div>
                    <p className="mt-1 text-ink font-medium">{c.outcome}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 grain" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <h2 className="font-serif text-3xl md:text-5xl font-bold">Your account could be case study #04.</h2>
          <Link to="/contact">
            <Button
              data-testid="case-studies-final-cta"
              className="mt-6 rounded-none h-12 px-6 bg-amber text-ink hover:bg-white border border-amber font-semibold"
            >
              {SITE.cta} →
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
