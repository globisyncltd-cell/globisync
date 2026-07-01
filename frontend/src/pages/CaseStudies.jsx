import React from "react";
import { CASE_STUDIES } from "@/lib/content";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

export default function CaseStudies() {
  return (
    <>
      <SEO title="Case Studies · Client Outcomes" path="/case-studies" />
      <section className="bg-white pt-20 pb-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">Client outcomes</div>
          <h1 className="mt-3 font-serif text-5xl md:text-6xl font-bold text-ink leading-[1.05]">
            Real accounts.<br />Real numbers.
          </h1>
          <p className="mt-6 max-w-2xl text-muted2 text-lg">
            Three stories from our roster. Names anonymised on request — but the numbers, timelines,
            and playbook are exactly what we ran.
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
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">
                    Case Study · 0{i + 1}
                  </div>
                  <div className="mt-8 font-serif text-7xl md:text-8xl font-bold text-amber leading-none">
                    {c.metric}
                  </div>
                  <div className="mt-3 text-sm text-white/80">{c.metricLabel}</div>
                </div>
                <div className="mt-10 flex flex-wrap gap-2">
                  {c.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-mono px-2 py-1 border border-white/30 text-white/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-8 p-10">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted2">
                  {c.industry}
                </div>
                <h2 className="mt-2 font-serif text-3xl md:text-4xl font-bold text-ink leading-tight">
                  {c.title}
                </h2>
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
          <h2 className="font-serif text-3xl md:text-5xl font-bold">
            Your account could be case study #04.
          </h2>
          <Link to="/contact">
            <Button
              data-testid="case-studies-final-cta"
              className="mt-6 rounded-none h-12 px-6 bg-amber text-ink hover:bg-white border border-amber font-semibold"
            >
              Start with a strategy call →
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
