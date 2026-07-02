import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TEAM } from "@/lib/team";
import { SITE } from "@/lib/content";
import SEO from "@/components/SEO";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function About() {
  return (
    <>
      <SEO
        title="About · Birmingham-based UK Ecommerce Agency"
        description="GlobiSync is a Birmingham-based UK ecommerce agency. Operators, not consultants — running growth for ambitious UK and international brands."
        path="/about"
      />
      <section className="bg-white pt-20 pb-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">[ About GlobiSync ]</div>
            <h1 className="mt-3 font-serif text-5xl md:text-6xl font-bold text-ink leading-[1.05]">
              Where ambitious brands<br />become serious online businesses.
            </h1>
            <p className="mt-6 text-muted2 text-lg leading-relaxed">
              GlobiSync was founded to build the ecommerce partner most brands can't find — one that combines
              retail thinking with day-to-day operating discipline. We're not consultants who write reports;
              we're operators who run accounts.
            </p>
            <p className="mt-4 text-muted2 leading-relaxed">
              Our home is on Pershore Road in Birmingham — a city with a long trading history and no
              patience for hot air. Our team blends ex-marketplace experts, DTC growth strategists,
              and international-expansion specialists. We put that muscle directly into our clients' accounts.
            </p>
            <p className="mt-4 text-muted2 leading-relaxed">
              We work primarily with UK-based ecommerce brands who are ready to grow — and we run
              international expansion programmes for ambitious brands from anywhere in the world who
              want to sell into the UK, US, Middle East, and Southeast Asia.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 bg-amber -z-10" />
              <img
                src="https://images.pexels.com/photos/29253536/pexels-photo-29253536.jpeg"
                alt="Birmingham UK"
                className="w-full h-[400px] object-cover border border-ink"
                loading="lazy"
              />
            </div>
            <div className="mt-6 border border-ink p-6">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted2">Registered office</div>
              <div className="mt-2 flex items-start gap-2 text-ink">
                <MapPin className="h-4 w-4 flex-none mt-1 text-amber" />
                <div>{SITE.address}</div>
              </div>
              <div className="mt-4 text-xs text-muted2">Registered in England · HMRC</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { k: "Founded", v: SITE.founded },
              { k: "Where we work", v: "UK · US · Middle East · SEA" },
              { k: "Platforms", v: "Amazon · eBay · Etsy · Shopify · TikTok Shop · Noon · Lazada · Zalora" },
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
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">[ Our belief ]</div>
          <h2 className="mt-3 font-serif text-3xl md:text-5xl font-bold text-ink max-w-3xl leading-tight">
            "The best ecommerce agency is the one that acts like an operator. That's the standard we hold ourselves to every day."
          </h2>
          <div className="mt-4 text-muted2">— Shweta Chauhan, Founder & Director</div>
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
