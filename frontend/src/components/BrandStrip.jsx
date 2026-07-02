import React from "react";

const BRANDS = [
  { name: "London RAG", logo: "/brands/londonrag.png", url: "https://londonrag.com" },
  { name: "Shaze", logo: "/brands/shaze.png", url: null },
  { name: "Livetech", logo: "/brands/livetech.png", url: "https://live-tech.in" },
  { name: "Tvam", logo: "/brands/tvam.png", url: "https://tvamnaturals.com" },
  { name: "PlayPanda", logo: "/brands/playpanda.png", url: "https://playpandatoys.in" },
];

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
              className="aspect-[3/2] flex flex-col items-center justify-center gap-3 border-r border-b border-border p-6 hover:bg-secondary/40 transition-colors group"
            >
              <img
                src={b.logo}
                alt={`${b.name} logo`}
                className="max-h-12 md:max-h-14 w-auto object-contain grayscale group-hover:grayscale-0 transition-all"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="font-serif text-sm md:text-base font-semibold text-muted2 group-hover:text-ink transition-colors text-center tracking-tight">
                {b.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
