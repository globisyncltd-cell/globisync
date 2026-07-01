import React from "react";
import { HOW_IT_WORKS } from "@/lib/content";

export default function HowItWorks() {
  return (
    <section
      data-testid="how-it-works"
      className="bg-white py-24 border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">[ How it works ]</div>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl font-bold text-ink max-w-3xl leading-tight">
          A calm, senior, low-risk way to start.
        </h2>
        <p className="mt-4 text-muted2 max-w-2xl">
          Four steps from your first conversation to a compounding growth partnership. No agency-speak in between.
        </p>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-ink">
          {HOW_IT_WORKS.map((s, i) => (
            <div
              key={s.n}
              data-testid={`how-step-${i}`}
              className="p-8 border-r border-b border-ink relative group hover:bg-amber transition-colors"
            >
              <div className="font-mono text-xs text-muted2 group-hover:text-ink">STEP {s.n}</div>
              <h3 className="mt-3 font-serif text-2xl font-bold text-ink leading-snug">{s.t}</h3>
              <p className="mt-3 text-sm text-muted2 group-hover:text-ink leading-relaxed">{s.d}</p>
              <div className="mt-6 font-serif text-6xl font-bold text-amber/40 group-hover:text-ink absolute top-4 right-4 leading-none">
                {s.n}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
