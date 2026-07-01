import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Sparkles, Globe2, Boxes, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, SERVICES } from "@/lib/content";
import SEO from "@/components/SEO";
import MarketplaceMarquee from "@/components/MarketplaceMarquee";

const StatCard = ({ v, k, i }) => (
  <div
    data-testid={`stat-card-${i}`}
    className="p-6 border border-border hover:border-ink transition-all group"
  >
    <div className="font-serif text-5xl md:text-6xl font-bold text-ink tracking-tight">
      {v}
    </div>
    <div className="mt-2 text-sm text-muted2 leading-snug">{k}</div>
  </div>
);

const ServiceIcon = ({ id }) => {
  const cls = "h-6 w-6 text-amber";
  if (id === "strategy") return <Sparkles className={cls} />;
  if (id === "storefront") return <Boxes className={cls} />;
  if (id === "management") return <LineChart className={cls} />;
  return <Globe2 className={cls} />;
};

export default function Home() {
  return (
    <>
      <SEO
        title="UK Ecommerce Agency Birmingham"
        description="GlobiSync — a Birmingham-based UK ecommerce agency scaling ambitious brands across Amazon, eBay, Etsy, Lazada, Zalora and Noon in the UK, US, Singapore and Hong Kong."
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-amber/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-[420px] w-[420px] rounded-full bg-slate950/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32 relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-ink text-xs font-mono uppercase tracking-[0.2em]">
                <span className="h-2 w-2 bg-amber" /> UK · Birmingham · Est. 2019
              </div>
              <h1 className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight text-ink">
                We scale ambitious brands<br />
                across{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">global marketplaces</span>
                  <span className="absolute left-0 right-0 bottom-1 h-3 bg-amber -z-0" />
                </span>{" "}
                — the hands-on way.
              </h1>
              <p className="mt-6 text-lg text-muted2 max-w-2xl leading-relaxed">
                GlobiSync is the UK ecommerce agency for founder-led Indian brands entering Amazon, eBay, Etsy,
                Lazada, Zalora and Noon in the UK, US, Singapore and Hong Kong. We don't hand you a deck —
                we run your account.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact">
                  <Button
                    data-testid="hero-book-call-btn"
                    className="h-12 px-6 rounded-none bg-ink text-white hover:bg-amber hover:text-ink border border-ink font-semibold hover:-translate-y-0.5 hover:sharp-shadow-amber transition-all"
                  >
                    Book a Free Strategy Call <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button
                    data-testid="hero-see-services-btn"
                    variant="outline"
                    className="h-12 px-6 rounded-none border-ink hover:bg-ink hover:text-white font-semibold"
                  >
                    See what we do
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted2">
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-amber" /> 4 markets · 6 marketplaces</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-amber" /> India-to-West specialists</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-amber" /> Fixed-fee pilots</div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 bg-amber -z-10 hidden lg:block" />
                <img
                  src="https://images.unsplash.com/photo-1684610529682-553625a1ffed"
                  alt="Abstract global commerce"
                  className="w-full h-[420px] lg:h-[520px] object-cover border border-ink"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur border border-ink p-4">
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted2">Live client outcome</div>
                  <div className="mt-1 font-serif text-2xl font-bold text-ink">+312% GMV in 9 months</div>
                  <div className="text-xs text-muted2">Home & textiles brand · India → Amazon UK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarketplaceMarquee />

      {/* SERVICES CARDS */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">What we do</div>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl font-bold text-ink max-w-2xl">
                Marketplace growth, end-to-end.
              </h2>
            </div>
            <Link to="/services" className="text-sm font-semibold text-ink hover:text-amber flex items-center gap-1">
              Every service in detail <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {SERVICES.map((s) => (
              <Link
                to={`/services#${s.id}`}
                key={s.id}
                data-testid={`home-service-card-${s.id}`}
                className="p-8 border border-border hover:border-ink transition-all hover:-translate-y-1 hover:sharp-shadow group bg-white block"
              >
                <div className="flex items-start justify-between">
                  <div className="font-mono text-xs text-muted2">{s.number}</div>
                  <ServiceIcon id={s.id} />
                </div>
                <h3 className="mt-4 font-serif text-2xl font-bold text-ink group-hover:text-amber transition-colors">
                  {s.title}
                </h3>
                <p className="mt-3 text-muted2 leading-relaxed">{s.short}</p>
                <div className="mt-6 text-sm font-semibold text-ink flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore <ArrowUpRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-slate950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 grain" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-6">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">The Proof</div>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl font-bold leading-tight">
                Numbers investors actually reward.
              </h2>
              <p className="mt-4 text-white/70 max-w-xl">
                We don't ship monthly PowerPoints. We ship compounding GMV, tightening TACoS, and a review flywheel.
                Here's what happens when we own the account.
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-2 gap-3">
              {[
                { v: "+312%", k: "GMV lift · UK textile brand · 9 mo", i: 0 },
                { v: "6.4x", k: "Blended ROAS · Noon Ramadan window", i: 1 },
                { v: "-38%", k: "TACoS reduction · avg. across roster", i: 2 },
                { v: "45d", k: "Time-to-first-sale · UK VAT included", i: 3 },
              ].map((s) => (
                <div key={s.i} className="p-6 border border-white/20 bg-white/5 backdrop-blur">
                  <div className="font-serif text-4xl md:text-5xl font-bold text-amber tracking-tight">
                    {s.v}
                  </div>
                  <div className="mt-2 text-xs text-white/70 leading-snug">{s.k}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY US STRIP */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">Why GlobiSync</div>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl font-bold text-ink">
                Operators, not consultants.
              </h2>
              <p className="mt-4 text-muted2">
                We are a Birmingham-based team of ex-marketplace operators. We've launched Indian brands into
                the UK, US, Singapore, Hong Kong and the GCC. We own the P&L with you.
              </p>
              <Link
                to="/about"
                data-testid="home-about-link"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-ink hover:text-amber"
              >
                Meet the team <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                { t: "Fixed-fee pilots", d: "First 90 days at a defined price. No surprise invoices." },
                { t: "Weekly ops calls", d: "You get a real operator on Zoom every Wednesday." },
                { t: "In-market payment rails", d: "UK VAT/EORI, US LLC/nexus — we've done the paperwork." },
                { t: "Amazon, Noon, Lazada, Zalora, Etsy", d: "One team, six platforms, four countries." },
              ].map((x, i) => (
                <div key={i} className="p-6 border-l-2 border-amber bg-secondary/50">
                  <div className="font-serif text-xl font-bold text-ink">{x.t}</div>
                  <div className="mt-1 text-sm text-muted2">{x.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-amber py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-ink leading-[1.05]">
            Let's map your marketplace roadmap in 30 minutes.
          </h2>
          <p className="mt-4 text-ink/80 text-lg max-w-2xl mx-auto">
            Free, no obligation. If we can't help, we'll tell you who can.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact">
              <Button
                data-testid="home-final-cta-btn"
                className="h-12 px-6 rounded-none bg-ink text-white hover:bg-white hover:text-ink border border-ink font-semibold hover:-translate-y-0.5 transition-all"
              >
                Book Your Free Call →
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
