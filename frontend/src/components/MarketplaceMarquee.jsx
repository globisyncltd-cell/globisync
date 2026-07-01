import React from "react";
import { MARKETPLACES } from "@/lib/content";

export default function MarketplaceMarquee() {
  const items = [...MARKETPLACES, ...MARKETPLACES, ...MARKETPLACES];
  return (
    <section
      data-testid="marketplace-trust-bar"
      className="border-y border-border bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex items-center gap-8">
        <div className="hidden md:block flex-none text-xs font-mono uppercase tracking-[0.2em] text-muted2 max-w-[160px] leading-tight">
          Platforms<br />we run
        </div>
        <div className="relative flex-1 overflow-hidden marquee-mask">
          <div className="flex gap-14 animate-marquee whitespace-nowrap">
            {items.map((m, i) => (
              <div
                key={i}
                className="flex-none font-serif text-3xl md:text-4xl font-bold tracking-tight text-ink/40 hover:text-ink transition-colors"
              >
                {m.name}
                <span className="mx-6 text-amber">·</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
