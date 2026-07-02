import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Sparkles, Store, Search, Share2, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, SERVICES } from "@/lib/content";
import { BLOG } from "@/lib/blog";
import SEO from "@/components/SEO";
import MarketplaceMarquee from "@/components/MarketplaceMarquee";
import BrandStrip from "@/components/BrandStrip";
import HowItWorks from "@/components/HowItWorks";
import FAQSection from "@/components/FAQSection";
import StructuredData from "@/components/StructuredData";

const ICONS = {
  "marketplace-management": Store,
  "shopify-optimization": Sparkles,
  seo: Search,
  social: Share2,
  "paid-ads": Target,
  "account-management": Users,
};

export default function Home() {
  const featuredPosts = BLOG.slice(0, 3);

  return (
    <>
      <SEO
        title="UK Ecommerce Agency Birmingham"
        description="GlobiSync is a Birmingham-based UK ecommerce agency running marketplace management, Shopify, SEO, social, and paid ads for ambitious brands. Book a discovery call."
      />
      <StructuredData />

      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-amber/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-[420px] w-[420px] rounded-full bg-slate950/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32 relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-ink text-xs font-mono uppercase tracking-[0.2em]" style={{ display: "none" }}>
                <span className="h-2 w-2 bg-amber" /> UK Ecommerce Growth Agency
              </div>
              <h1 className="mt-2 font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight text-ink">
                We help brands<br />
                and Amazon sellers grow{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">online sales</span>
                  <span className="absolute left-0 right-0 bottom-1 h-3 bg-amber -z-0" />
                </span>{" "}
                — end to end.
              </h1>
              <p className="mt-6 text-lg text-muted2 max-w-2xl leading-relaxed">
                Marketplace management, Shopify optimisation, SEO, social, paid ads and full account management.
                One senior team. One monthly report. One number that matters — your growth.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact">
                  <Button
                    data-testid="hero-book-call-btn"
                    className="h-12 px-6 rounded-none bg-ink text-white hover:bg-amber hover:text-ink border border-ink font-semibold hover:-translate-y-0.5 hover:sharp-shadow-amber transition-all"
                  >
                    {SITE.cta} <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/team">
                  <Button
                    data-testid="hero-fee-calc-btn"
                    variant="outline"
                    className="h-12 px-6 rounded-none border-ink hover:bg-ink hover:text-white font-medium"
                  >
                    Meet the team →
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted2">
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-amber" /> Senior operator on every account</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-amber" /> Weekly ops calls</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-amber" /> Retainers from £300/month</div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="relative border-l-4 border-amber pl-6 py-4">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">Operating model</div>
                <div className="mt-3 font-serif text-3xl font-bold text-ink leading-tight">
                  Operators. Not consultants.
                </div>
                <div className="mt-4 text-muted2">
                  Retail brains. Ecommerce hands. A Birmingham desk that runs your online business like our own.
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="p-4 border border-border">
                    <div className="font-serif text-3xl font-bold text-ink">6</div>
                    <div className="text-xs text-muted2 mt-1">Service pillars</div>
                  </div>
                  <div className="p-4 border border-border">
                    <div className="font-serif text-3xl font-bold text-ink">4</div>
                    <div className="text-xs text-muted2 mt-1">Global regions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarketplaceMarquee />
      <BrandStrip />

      {/* SERVICES CARDS */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">[ Services ]</div>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl font-bold text-ink max-w-2xl leading-tight">
                Everything a brand needs to<br />sell online successfully.
              </h2>
            </div>
            <Link to="/team" className="text-sm font-normal text-ink hover:text-amber flex items-center gap-1">
              Meet the team <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => {
              const Icon = ICONS[s.id] || Sparkles;
              return (
                <Link
                  to={`/services#${s.id}`}
                  key={s.id}
                  data-testid={`home-service-card-${s.id}`}
                  className="p-8 border border-border hover:border-ink transition-all hover:-translate-y-1 hover:sharp-shadow group bg-white block"
                >
                  <div className="flex items-start justify-between">
                    <div className="font-mono text-xs text-muted2">{s.number}</div>
                    <Icon className="h-6 w-6 text-amber" />
                  </div>
                  <h3 className="mt-4 font-serif text-2xl font-bold text-ink group-hover:text-amber transition-colors leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-muted2 text-sm leading-relaxed">{s.short}</p>
                  <div className="mt-6 text-sm font-semibold text-ink flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore <ArrowUpRight className="h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* INTERNATIONAL TEASER */}
      <section className="bg-slate950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 grain" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">[ International expansion ]</div>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl font-bold leading-tight">
              Ready to cross borders?<br />We run that too.
            </h2>
            <p className="mt-4 text-white/70 max-w-2xl">
              For brands ready to expand, we launch and operate marketplaces across the UK, US, Middle East,
              and Southeast Asia — and open retail doors from Waitrose to Chalhoub Group.
            </p>
            <Link to="/international-expansion">
              <Button
                data-testid="home-intl-cta"
                className="mt-6 rounded-none bg-amber text-ink hover:bg-white border border-amber font-semibold"
              >
                See our international offer <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {[
              { v: "UK", k: "Amazon · eBay · Etsy · TikTok · Shopify · NOTHS" },
              { v: "US", k: "Amazon · Walmart · Shopify · Etsy · eBay · TikTok" },
              { v: "ME", k: "Noon · Amazon.ae · Amazon.sa · Namshi · TikTok" },
              { v: "SEA", k: "Lazada · Zalora · Shopee · TikTok · Tokopedia" },
            ].map((x, i) => (
              <div key={i} className="p-6 border border-white/20 bg-white/5 backdrop-blur">
                <div className="font-serif text-5xl font-bold text-amber tracking-tight">{x.v}</div>
                <div className="mt-2 text-xs text-white/70 leading-snug">{x.k}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY STRIP */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">[ Our philosophy ]</div>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl font-bold text-ink max-w-3xl leading-tight">
            Retail thinking. Ecommerce hands.
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-0 border-t border-l border-ink">
            {[
              {
                t: "Own it like operators",
                d: "We treat client accounts like our own. Daily P&L ownership. No monthly-deck detachment.",
              },
              {
                t: "Senior on every account",
                d: "You get a named senior operator, not a rotating junior. That's the whole reason we exist.",
              },
              {
                t: "Aligned incentives",
                d: "Fixed retainers, no commission-based deals. Our job is your growth, not your ad spend.",
              },
            ].map((p, i) => (
              <div key={i} className="p-8 border-r border-b border-ink">
                <div className="font-mono text-xs text-muted2">0{i + 1}</div>
                <div className="mt-3 font-serif text-2xl font-bold text-ink">{p.t}</div>
                <div className="mt-3 text-sm text-muted2 leading-relaxed">{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="bg-secondary/40 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">[ Insights ]</div>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl font-bold text-ink">
                Playbooks from the desk.
              </h2>
            </div>
            <Link to="/blog" className="text-sm font-semibold text-ink hover:text-amber flex items-center gap-1">
              All insights <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {featuredPosts.map((p) => (
              <Link
                to={`/blog/${p.slug}`}
                key={p.slug}
                data-testid={`home-blog-card-${p.slug}`}
                className="group border border-border bg-white hover:border-ink transition-all block"
              >
                <div className="aspect-[16/10] overflow-hidden bg-secondary">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted2">{p.category}</div>
                  <div className="mt-2 font-serif text-xl font-bold text-ink leading-snug group-hover:text-amber transition-colors">
                    {p.title}
                  </div>
                  <div className="mt-3 text-sm text-muted2 line-clamp-2">{p.excerpt}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />

      {/* FINAL CTA */}
      <section className="bg-amber py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-ink leading-[1.05]">
            Let's map your growth plan in 30 minutes.
          </h2>
          <p className="mt-4 text-ink/80 text-lg max-w-2xl mx-auto">
            One conversation. One clear next step. No pressure.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact">
              <Button
                data-testid="home-final-cta-btn"
                className="h-12 px-6 rounded-none bg-ink text-white hover:bg-white hover:text-ink border border-ink font-semibold hover:-translate-y-0.5 transition-all"
              >
                {SITE.cta} →
              </Button>
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              data-testid="home-whatsapp-cta"
              className="h-12 px-6 inline-flex items-center bg-white text-ink border border-ink font-semibold hover:bg-ink hover:text-white transition-all"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
