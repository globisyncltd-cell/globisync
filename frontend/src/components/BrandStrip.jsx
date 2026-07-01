import React from "react";
import { BRANDS } from "@/lib/content";

export default function BrandStrip() {
  return (
    <section
      data-testid="brands-strip"
      className="bg-white py-16 border-t border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">[ Brands we've helped ]</div>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-ink max-w-2xl leading-tight">
          Trusted by ambitious brand teams.
        </h2>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-0 border-t border-l border-border">
          {BRANDS.map((b, i) => (
            <div
              key={b.name}
              data-testid={`brand-logo-${i}`}
              className="aspect-[3/2] flex items-center justify-center border-r border-b border-border p-4 hover:bg-secondary/50 transition-colors group"
            >
              <div className="font-serif text-xl md:text-2xl font-bold text-muted2 group-hover:text-ink transition-colors text-center tracking-tight">
                {b.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
