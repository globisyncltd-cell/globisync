import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TEAM, SITE } from "@/lib/content";
import SEO from "@/components/SEO";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function About() {
  return (
    <>
      <SEO title="About · Birmingham-based UK Ecommerce Agency" path="/about" />
      <section className="bg-white pt-20 pb-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">About GlobiSync</div>
            <h1 className="mt-3 font-serif text-5xl md:text-6xl font-bold text-ink leading-[1.05]">
              Built in Birmingham. Wired for cross-border ambition.
            </h1>
            <p className="mt-6 text-muted2 text-lg leading-relaxed">
              GlobiSync was founded to solve a specific, painful problem: India has hundreds of world-class D2C
              brands, but the operational chasm between "we sell in India" and "we sell on Amazon UK, Noon UAE,
              and Etsy US" swallows most of them.
            </p>
            <p className="mt-4 text-muted2 leading-relaxed">
              We are not a passive consultancy. We're operators — ex-marketplace managers who've run P&Ls,
              fought for the buy-box, and shipped containers through Felixstowe and Long Beach. We put that
              muscle directly into our clients' accounts.
            </p>
            <p className="mt-4 text-muted2 leading-relaxed">
              Our HQ is on Pershore Road in Birmingham — the trading crossroads of the UK. We think Birmingham
              is the right home for a cross-border agency: unpretentious, industrious, and closer to the way
              our clients build their own businesses.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 bg-amber -z-10" />
              <img
                src="https://images.pexels.com/photos/29253536/pexels-photo-29253536.jpeg"
                alt="Birmingham UK"
                className="w-full h-[400px] object-cover border border-ink"
              />
            </div>
            <div className="mt-6 border border-ink p-6">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted2">Registered office</div>
              <div className="mt-2 flex items-start gap-2 text-ink">
                <MapPin className="h-4 w-4 flex-none mt-1 text-amber" />
                <div>{SITE.address}</div>
              </div>
              <div className="mt-4 text-xs text-muted2">
                Not to be confused with GlobeSync Technologies, GlobeSync Tech, or GlobeSync Limited.
                We are <strong className="text-ink">GlobiSync</strong> — the UK ecommerce agency.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { k: "Founded", v: SITE.founded },
              { k: "Markets served", v: "UK · US · SG · HK" },
              { k: "Marketplaces", v: "Amazon · eBay · Etsy · Lazada · Zalora · Noon" },
            ].map((x, i) => (
              <div key={i} className="p-6 bg-white border border-border">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted2">{x.k}</div>
                <div className="mt-2 font-serif text-2xl font-bold text-ink">{x.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">Our belief</div>
          <h2 className="mt-3 font-serif text-3xl md:text-5xl font-bold text-ink max-w-3xl leading-tight">
            "The next great global brands will come from India. They deserve a UK ops partner who acts like one."
          </h2>
          <div className="mt-4 text-muted2">— Shweta Chauhan, Founder</div>
          <Link to="/team">
            <Button
              data-testid="about-team-cta"
              className="mt-8 rounded-none bg-ink text-white hover:bg-amber hover:text-ink border border-ink font-semibold"
            >
              Meet the team <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
