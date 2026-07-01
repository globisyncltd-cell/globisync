import React from "react";
import { REGIONS, RETAIL_MARKETS, SITE } from "@/lib/content";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { ArrowUpRight, Globe2, Store } from "lucide-react";

const REGION_COLOR = { UK: "#012169", US: "#B22234", SEA: "#ED2939", ME: "#006C35" };

export default function InternationalExpansion() {
  return (
    <>
      <SEO
        title="International Expansion for Ecommerce & Retail Brands"
        description="For ambitious brands from any country: expand into marketplaces and retail across the UK, US, Middle East, and Southeast Asia."
        path="/international-expansion"
      />
      <section className="bg-white pt-20 pb-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">[ International expansion ]</div>
          <h1 className="mt-3 font-serif text-5xl md:text-6xl font-bold text-ink leading-[1.05]">
            Expand your brand<br />across the world's<br />best marketplaces.
          </h1>
          <p className="mt-6 max-w-2xl text-muted2 text-lg">
            For brands from any country ready to sell internationally — via ecommerce marketplaces
            or physical retail. One operator team from Birmingham, running the entry playbook you need.
          </p>
          <div className="mt-8 flex gap-3">
            <Link to="/contact">
              <Button
                data-testid="intl-hero-cta"
                className="h-12 px-6 rounded-none bg-ink text-white hover:bg-amber hover:text-ink border border-ink font-semibold"
              >
                {SITE.cta} <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* MARKETPLACE REGIONS */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Globe2 className="h-5 w-5 text-amber" />
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted2">Marketplace expansion by region</div>
          </div>

          <div className="space-y-6">
            {REGIONS.map((r) => (
              <article
                key={r.code}
                data-testid={`region-card-${r.code.toLowerCase()}`}
                className="border border-border bg-white hover:border-ink transition-all"
              >
                <div className="grid lg:grid-cols-12 gap-0">
                  <div
                    className="lg:col-span-3 p-8 text-white flex flex-col justify-between"
                    style={{ backgroundColor: REGION_COLOR[r.code] || "#0b0f19" }}
                  >
                    <div className="font-mono text-xs uppercase tracking-[0.2em] opacity-80">Region</div>
                    <div>
                      <div className="font-serif text-5xl md:text-6xl font-bold leading-none">{r.code}</div>
                      <div className="mt-2 font-serif text-xl">{r.name}</div>
                    </div>
                  </div>
                  <div className="lg:col-span-9 p-8">
                    <p className="font-serif text-xl md:text-2xl text-ink leading-snug max-w-3xl">{r.hero}</p>

                    <div className="mt-6 grid sm:grid-cols-2 gap-6">
                      <div>
                        <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted2">Marketplaces</div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {r.marketplaces.map((m) => (
                            <span
                              key={m}
                              className="px-3 py-1 border border-ink text-sm font-medium text-ink"
                            >
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted2">Playbook</div>
                        <ul className="mt-3 space-y-1 text-sm text-ink">
                          {r.playbook.map((p) => (
                            <li key={p} className="flex gap-2">
                              <span className="text-amber">▸</span> {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Link to="/contact">
                      <Button
                        data-testid={`region-cta-${r.code.toLowerCase()}`}
                        className="mt-6 rounded-none bg-ink text-white hover:bg-amber hover:text-ink border border-ink font-semibold"
                      >
                        Plan a launch into {r.name} <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RETAIL EXPANSION */}
      <section className="bg-slate950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 grain" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="flex items-center gap-3 mb-6">
            <Store className="h-5 w-5 text-amber" />
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">[ Retail & supermarket expansion ]</div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Beyond marketplaces — physical retail entry for brands ready to scale.
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl">
            For international brands ready for shelf presence — from UK supermarkets to Middle East retail
            groups — we open doors, structure distribution, and manage the compliance stack.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-4">
            {RETAIL_MARKETS.map((m, i) => (
              <div
                key={m.country}
                data-testid={`retail-market-${i}`}
                className="p-6 border border-white/20 bg-white/5 backdrop-blur"
              >
                <div className="font-serif text-xl font-bold text-amber">{m.country}</div>
                <div className="mt-4 text-xs font-mono uppercase tracking-[0.15em] text-white/60">Key retailers</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {m.retailers.map((r) => (
                    <span key={r} className="text-xs px-2 py-1 border border-white/20 text-white/85">
                      {r}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-sm text-white/70 leading-relaxed">{m.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-amber py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink">
            Ambitious brand from anywhere? Let's map your entry plan.
          </h2>
          <Link to="/contact">
            <Button
              data-testid="intl-final-cta"
              className="mt-6 rounded-none h-12 px-6 bg-ink text-white hover:bg-white hover:text-ink border border-ink font-semibold"
            >
              {SITE.cta} →
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
