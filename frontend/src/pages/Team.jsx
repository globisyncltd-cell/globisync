import React from "react";
import { TEAM } from "@/lib/team";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { SITE } from "@/lib/content";

export default function Team() {
  return (
    <>
      <SEO
        title="Team · Ecommerce Experts, Not Consultants"
        description="Meet the GlobiSync team — Shweta Chauhan (Founder & Director), Zain Alvi (Strategic Advisor), Sunny Chauhan (Lead Consultant)."
        path="/team"
      />
      <section className="bg-white pt-16 sm:pt-20 pb-12 sm:pb-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">[ The team ]</div>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-ink leading-[1.05] break-words">
            Senior experts.<br />Growth partners.
          </h1>
          <p className="mt-6 max-w-2xl text-muted2 text-base sm:text-lg">
            A senior team of ecommerce experts, advisors, and specialists — with hands directly in your account.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {TEAM.map((t, i) => (
            <article
              key={t.slug}
              data-testid={`team-card-${i}`}
              className="border border-ink bg-white hover:sharp-shadow transition-all"
            >
              <div className="relative bg-secondary/40">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-amber text-ink text-xs font-mono uppercase tracking-[0.15em] px-2 py-1">
                  0{i + 1}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-ink">{t.name}</h3>
                <div className="mt-1 text-sm text-muted2">{t.role}</div>
                <p className="mt-4 text-sm text-muted2 leading-relaxed">{t.bio}</p>
                <a
                  href={t.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`team-linkedin-${i}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-amber"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 grain" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight">
            Talk to us before you talk to a marketplace.
          </h2>
          <Link to="/contact">
            <Button
              data-testid="team-final-cta"
              className="mt-6 rounded-none h-12 px-6 bg-amber text-ink hover:bg-white border border-amber font-semibold"
            >
              {SITE.cta} →
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
