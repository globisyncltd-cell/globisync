import React from "react";
import { Link } from "react-router-dom";
import { SERVICES, SITE } from "@/lib/content";
import { Check, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";

export default function Services() {
  return (
    <>
      <SEO
        title="Services · UK Ecommerce Agency"
        description="Marketplace management, Shopify optimisation, SEO, social, paid ads and full account management from a Birmingham-based UK ecommerce agency."
        path="/services"
      />
      <section className="bg-white pt-20 pb-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">[ Services ]</div>
          <h1 className="mt-3 font-serif text-5xl md:text-6xl font-bold leading-tight text-ink">
            Everything a brand needs<br />to sell online successfully.
          </h1>
          <p className="mt-6 max-w-2xl text-muted2 text-lg">
            Six service pillars. One operator team. Engage us for a single pillar or hand us the whole
            account — most clients start with a 3-month pilot.
          </p>
        </div>
      </section>

      {SERVICES.map((s, idx) => {
        const flip = idx % 2 === 1;
        return (
          <section
            key={s.id}
            id={s.id}
            data-testid={`services-section-${s.id}`}
            className={`py-20 ${idx % 2 === 0 ? "bg-secondary/50" : "bg-white"}`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className={`grid lg:grid-cols-12 gap-10 ${flip ? "lg:[direction:rtl]" : ""}`}>
                <div className="lg:col-span-5 lg:[direction:ltr]">
                  <div className="font-mono text-xs text-muted2">{s.number} / SERVICE</div>
                  <h2 className="mt-2 font-serif text-3xl md:text-4xl font-bold text-ink leading-tight">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-muted2">{s.short}</p>
                  <Link to="/contact">
                    <Button
                      data-testid={`services-cta-${s.id}`}
                      className="mt-6 rounded-none bg-ink text-white hover:bg-amber hover:text-ink border border-ink font-semibold hover:-translate-y-0.5 transition-all"
                    >
                      Discuss this service <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="lg:col-span-7 lg:[direction:ltr] space-y-6">
                  <div className="p-6 border-l-4 border-amber bg-white">
                    <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted2">The problem</div>
                    <p className="mt-2 text-ink font-medium">{s.problem}</p>
                  </div>
                  <div className="p-6 border border-border bg-white">
                    <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted2">Our approach</div>
                    <p className="mt-2 text-ink">{s.approach}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-6 border border-border bg-white">
                      <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted2">What's included</div>
                      <ul className="mt-3 space-y-2">
                        {s.included.map((i) => (
                          <li key={i} className="flex gap-2 text-sm text-ink">
                            <Check className="h-4 w-4 text-amber flex-none mt-1" />
                            {i}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-6 bg-slate950 text-white">
                      <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">Outcome</div>
                      <p className="mt-3 font-serif text-xl leading-snug">{s.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <FAQSection />

      <section className="bg-amber py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink">
            Not sure where to start? That's exactly what a discovery call is for.
          </h2>
          <Link to="/contact">
            <Button
              data-testid="services-final-cta-btn"
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
