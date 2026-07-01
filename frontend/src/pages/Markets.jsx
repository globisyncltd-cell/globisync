import React from "react";
import { MARKETS } from "@/lib/content";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { MapPin, ArrowUpRight } from "lucide-react";

const flagColor = {
  UK: "#012169",
  US: "#B22234",
  SG: "#EF3340",
  HK: "#EE1C25",
};

export default function Markets() {
  return (
    <>
      <SEO title="Markets · UK · US · Singapore · Hong Kong" path="/markets" />
      <section className="bg-white pt-20 pb-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">Markets we operate in</div>
          <h1 className="mt-3 font-serif text-5xl md:text-6xl font-bold text-ink leading-[1.05]">
            Four markets.<br />One operator team.
          </h1>
          <p className="mt-6 max-w-2xl text-muted2 text-lg">
            We focus deliberately. Deep expertise in four markets that matter to India-origin brands
            — instead of shallow presence in twelve.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
          {MARKETS.map((m) => (
            <article
              key={m.code}
              data-testid={`market-card-${m.code.toLowerCase()}`}
              className="border border-border bg-white hover:border-ink transition-all"
            >
              <div className="grid lg:grid-cols-12 gap-0">
                <div
                  className="lg:col-span-3 p-8 text-white flex flex-col justify-between"
                  style={{ backgroundColor: flagColor[m.code] }}
                >
                  <div className="font-mono text-xs uppercase tracking-[0.2em] opacity-80">
                    Market · {m.code}
                  </div>
                  <div>
                    <div className="font-serif text-5xl md:text-6xl font-bold leading-none">
                      {m.code}
                    </div>
                    <div className="mt-2 font-serif text-xl">{m.name}</div>
                    <div className="mt-4 flex items-center gap-2 text-xs opacity-90">
                      <MapPin className="h-3 w-3" /> Managed from Birmingham HQ
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-9 p-8">
                  <p className="font-serif text-xl md:text-2xl text-ink leading-snug max-w-3xl">
                    {m.hero}
                  </p>

                  <div className="mt-6 grid sm:grid-cols-3 gap-3">
                    {m.stats.map((s, i) => (
                      <div key={i} className="p-4 border border-border">
                        <div className="font-serif text-2xl font-bold text-ink">{s.v}</div>
                        <div className="mt-1 text-xs text-muted2">{s.k}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted2">Playbook</div>
                      <ul className="mt-2 space-y-1 text-sm text-ink">
                        {m.playbook.map((p) => (
                          <li key={p} className="flex gap-2">
                            <span className="text-amber">▸</span> {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-secondary/50 p-4 border-l-2 border-amber">
                      <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted2">
                        Search intent we serve
                      </div>
                      <p className="mt-2 text-sm text-ink italic">"{m.seoLine}"</p>
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button
                      data-testid={`market-cta-${m.code.toLowerCase()}`}
                      className="mt-6 rounded-none bg-ink text-white hover:bg-amber hover:text-ink border border-ink font-semibold"
                    >
                      Plan a launch into {m.name} <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
