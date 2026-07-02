import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Store, Share2, Globe, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/content";
import { MENUS } from "@/lib/menus";
import { BLOG } from "@/lib/blog";
import SEO from "@/components/SEO";
import MarketplaceMarquee from "@/components/MarketplaceMarquee";
import BrandStrip from "@/components/BrandStrip";
import HowItWorks from "@/components/HowItWorks";
import FAQSection from "@/components/FAQSection";
import StructuredData from "@/components/StructuredData";

const CATEGORY_ICONS = {
  "ecommerce-support": Store,
  "social-digital": Share2,
  "cross-border": Globe,
  retail: ShoppingBag,
};

const CATEGORY_KICKERS = {
  "ecommerce-support": "01 / Marketplaces & DTC",
  "social-digital": "02 / Content · Community · Paid",
  "cross-border": "03 / International into UK",
  retail: "04 / Physical retail bridge",
};

export default function Home() {
  const featuredPosts = BLOG.slice(0, 3);
  const categories = MENUS.filter((m) => m.items && m.items.length > 0);

  return (
    <>
      <SEO
        title="UK Ecommerce Growth Partner · Birmingham"
        description="GlobiSync is a UK ecommerce growth partner running marketplace management, social & digital marketing, cross-border ecommerce and retail distribution for ambitious brands."
      />
      <StructuredData />

      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-amber/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-[420px] w-[420px] rounded-full bg-slate950/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-20 lg:pt-28 lg:pb-24 relative">
          <div className="max-w-4xl animate-fade-up">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">
              [ UK Ecommerce Growth Partner ]
            </div>
            <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.02] tracking-tight text-ink">
              We help brands and Amazon sellers grow{" "}
              <span className="relative inline-block">
                <span className="relative z-10">online sales</span>
                <span className="absolute left-0 right-0 bottom-1 h-3 bg-amber -z-0" />
              </span>{" "}
              — end to end.
            </h1>
            <p className="mt-6 text-lg text-muted2 max-w-2xl font-light leading-relaxed">
              Marketplaces, DTC, social, paid media, cross-border logistics and retail distribution.
              One senior team. One monthly report. One number that matters — your growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact">
                <Button
                  data-testid="hero-book-call-btn"
                  className="h-12 px-6 rounded-none bg-ink text-white hover:bg-amber hover:text-ink border border-ink font-medium hover:-translate-y-0.5 transition-all"
                >
                  {SITE.cta} <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/team">
                <Button
                  data-testid="hero-team-btn"
                  variant="outline"
                  className="h-12 px-6 rounded-none border-ink hover:bg-ink hover:text-white font-medium"
                >
                  Meet the team →
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted2 font-light">
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-amber" /> Senior operator on every account</div>
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-amber" /> Weekly ops calls</div>
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-amber" /> Retainers from £300/month</div>
            </div>
          </div>
        </div>
      </section>

      <MarketplaceMarquee />
      <BrandStrip />

      {/* CATEGORY GRID — 4 cards */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">[ What we do ]</div>
              <h2 className="mt-3 text-4xl md:text-5xl font-light text-ink max-w-2xl leading-tight">
                Four pillars.<br />One growth partner.
              </h2>
            </div>
            <Link to="/contact" className="text-sm font-medium text-ink hover:text-amber flex items-center gap-1">
              Talk to us <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-0 border-t border-l border-ink">
            {categories.map((cat) => {
              const Icon = CATEGORY_ICONS[cat.id] || Store;
              return (
                <Link
                  to={`/${cat.overviewSlug}`}
                  key={cat.id}
                  data-testid={`home-category-card-${cat.id}`}
                  className="group p-8 lg:p-10 border-r border-b border-ink bg-white hover:bg-amber transition-colors block"
                >
                  <div className="flex items-start justify-between">
                    <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted2 group-hover:text-ink/70">
                      {CATEGORY_KICKERS[cat.id]}
                    </div>
                    <Icon className="h-6 w-6 text-amber group-hover:text-ink transition-colors" />
                  </div>
                  <h3 className="mt-6 text-3xl md:text-4xl font-light text-ink leading-tight">
                    {cat.label}
                  </h3>
                  <p className="mt-4 text-muted2 group-hover:text-ink/80 font-light leading-relaxed">
                    {cat.overview}
                  </p>
                  <div className="mt-8 flex items-center justify-between">
                    <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted2 group-hover:text-ink/70">
                      {cat.items.length} services
                    </div>
                    <div className="text-sm font-medium text-ink flex items-center gap-1 group-hover:gap-2 transition-all">
                      View all <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* BLOG TEASER */}
      <section className="bg-secondary/40 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">[ Insights ]</div>
              <h2 className="mt-3 text-4xl md:text-5xl font-light text-ink leading-tight">
                Playbooks from the desk.
              </h2>
            </div>
            <Link to="/blog" className="text-sm font-medium text-ink hover:text-amber flex items-center gap-1">
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
                  <div className="mt-2 text-xl font-light text-ink leading-snug group-hover:text-amber transition-colors">
                    {p.title}
                  </div>
                  <div className="mt-3 text-sm text-muted2 line-clamp-2 font-light">{p.excerpt}</div>
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
          <h2 className="text-4xl md:text-6xl font-light text-ink leading-[1.05]">
            Let's map your growth plan in 30 minutes.
          </h2>
          <p className="mt-4 text-ink/80 text-lg max-w-2xl mx-auto font-light">
            One conversation. One clear next step. No pressure.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact">
              <Button
                data-testid="home-final-cta-btn"
                className="h-12 px-6 rounded-none bg-ink text-white hover:bg-white hover:text-ink border border-ink font-medium hover:-translate-y-0.5 transition-all"
              >
                {SITE.cta} →
              </Button>
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              data-testid="home-whatsapp-cta"
              className="h-12 px-6 inline-flex items-center bg-white text-ink border border-ink font-medium hover:bg-ink hover:text-white transition-all"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
