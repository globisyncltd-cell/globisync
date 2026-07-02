import React from "react";

const BRANDS = [
  { name: "London RAG", logo: "/brands/londonrag.png" },
  { name: "Shaze", logo: "/brands/shaze.png" },
  { name: "Livetech", logo: "/brands/livetech.png" },
  { name: "Tvam", logo: "/brands/tvam.png" },
  { name: "PlayPanda", logo: "/brands/playpanda.png" },
];

export default function BrandStrip() {
  const items = [...BRANDS, ...BRANDS, ...BRANDS];
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

        <div className="mt-10 relative overflow-hidden marquee-mask">
          <div className="flex gap-14 animate-marquee whitespace-nowrap items-center">
            {items.map((b, i) => (
              <div
                key={i}
                data-testid={`brand-logo-${i % BRANDS.length}`}
                className="flex-none flex items-center gap-4 group px-4"
              >
                <img
                  src={b.logo}
                  alt={`${b.name} logo`}
                  className="h-12 md:h-14 w-auto object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
                <div className="font-serif text-xl md:text-2xl font-semibold text-muted2 group-hover:text-ink transition-colors tracking-tight">
                  {b.name}
                </div>
                <span className="ml-6 text-amber font-serif text-2xl">·</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
