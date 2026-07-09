import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getSubservice, getRelated } from "@/lib/menus";
import { SITE } from "@/lib/content";
import SEO from "@/components/SEO";
import { ArrowUpRight, Check, Target, Users, LineChart, ArrowRight } from "lucide-react";

const BRANDS = ["London RAG", "Shaze", "Livetech", "Tvam", "PlayPanda"];

const APPROACH = [
  {
    icon: Target,
    step: "01",
    title: "Audit & baseline",
    desc: "We map your current position, unit economics, and category dynamics — in writing — before recommending a single change.",
  },
  {
    icon: Users,
    step: "02",
    title: "Named senior expert",
    desc: "A senior specialist owns your account day-to-day. One Slack channel. Weekly ops calls. No offshored handoffs.",
  },
  {
    icon: LineChart,
    step: "03",
    title: "Ship, measure, iterate",
    desc: "We execute against a 90-day plan, review weekly, and reforecast monthly. Written monthly readouts, quarterly business reviews.",
  },
];

export default function SubService() {
  const { slug } = useParams();
  const s = getSubservice(slug);
  if (!s) return <Navigate to="/" replace />;

  const bullets = Array.isArray(s.bullets) ? s.bullets : [];
  const hasBullets = bullets.length > 0;
  const related = getRelated(slug, 6);

  return (
    <>
      <SEO
        title={`${s.title} · ${s.parent}`}
        description={s.description || `${s.title} — get in touch with GlobiSync, a UK ecommerce growth partner.`}
        path={`/services/${s.slug}`}
      />

      {/* HERO */}
      <section className="bg-white pt-20 pb-16 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-amber/10 blur-3xl" />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          <Link
            to={`/${s.overviewSlug}`}
            data-testid="subservice-breadcrumb"
            className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-[0.2em] text-amber hover:text-ink transition-colors"
          >
            ← {s.parent}
          </Link>
          <h1
            data-testid="subservice-title"
            className="mt-4 text-5xl md:text-6xl lg:text-7xl font-light text-ink leading-[1.02] tracking-tight max-w-4xl"
          >
            {s.title}
          </h1>

          {s.description && (
            <p className="mt-6 max-w-3xl text-muted2 text-lg font-light leading-relaxed">
              {s.description}
            </p>
          )}

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact">
              <Button
                data-testid="subservice-cta"
                className="h-12 px-6 rounded-none bg-ink text-white hover:bg-amber hover:text-ink border border-ink font-medium hover:-translate-y-0.5 transition-all"
              >
                Get in touch <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="h-12 px-6 inline-flex items-center bg-white text-ink border border-ink font-medium hover:bg-ink hover:text-white transition-all"
            >
              WhatsApp us
            </a>
          </div>

          {/* Quick-value strip */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-ink max-w-4xl">
            {[
              { k: "Senior", v: "expert on account" },
              { k: "Weekly", v: "ops calls" },
              { k: "Monthly", v: "written readouts" },
              { k: "Rolling", v: "monthly agreement" },
            ].map((x, i) => (
              <div key={i} className="p-4 border-r border-b border-ink">
                <div className="text-xl font-light text-ink">{x.k}</div>
                <div className="text-xs text-muted2 font-mono uppercase tracking-[0.15em] mt-1">{x.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      {hasBullets && (
        <section className="bg-secondary/40 py-20 border-t border-border">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">
                [ What's included ]
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-light text-ink leading-tight">
                The full scope of what we run for you.
              </h2>
              <p className="mt-4 text-muted2 font-light leading-relaxed">
                No hidden extras. No "that's out of scope" surprises three months in.
                What's on this list is what we own end-to-end.
              </p>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-3">
              {bullets.map((p, i) => (
                <div
                  key={i}
                  data-testid={`subservice-bullet-${i}`}
                  className="p-5 bg-white border border-border flex gap-3 hover:border-ink transition-colors"
                >
                  <Check className="h-4 w-4 mt-1 text-amber flex-none" />
                  <div className="text-sm text-ink font-light leading-relaxed">{p}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* HOW WE DELIVER */}
      <section className="bg-white py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">
            [ How we deliver ]
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-light text-ink leading-tight max-w-2xl">
            A rhythm that compounds, not a project that ends.
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-0 border-t border-l border-ink">
            {APPROACH.map((a) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.step}
                  data-testid={`subservice-approach-${a.step}`}
                  className="border-r border-b border-ink p-6 lg:p-8 group hover:bg-amber transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="font-mono text-xs text-muted2 group-hover:text-ink/70">{a.step}</div>
                    <Icon className="h-5 w-5 text-amber group-hover:text-ink transition-colors" />
                  </div>
                  <div className="mt-6 text-2xl font-light text-ink leading-tight">{a.title}</div>
                  <p className="mt-3 text-sm text-muted2 font-light leading-relaxed group-hover:text-ink/80">
                    {a.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="bg-slate950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 grain" />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">
            [ Trusted by ]
          </div>
          <h2 className="mt-3 text-2xl md:text-3xl font-light leading-tight max-w-2xl">
            Ambitious brand teams — SMEs, D2C, emerging labels and enterprise clients.
          </h2>
          <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4">
            {BRANDS.map((b, i) => (
              <div
                key={b}
                data-testid={`subservice-brand-${i}`}
                className="text-lg md:text-xl font-light text-white/60 hover:text-amber transition-colors"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      {related.length > 0 && (
        <section className="bg-white py-20 border-t border-border">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">
                  [ Related services ]
                </div>
                <h2 className="mt-3 text-3xl md:text-4xl font-light text-ink leading-tight">
                  More under {s.parent}.
                </h2>
              </div>
              <Link
                to={`/${s.overviewSlug}`}
                data-testid="subservice-viewall"
                className="text-sm font-medium text-ink hover:text-amber flex items-center gap-1"
              >
                View all {s.parent} services <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-ink">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/services/${r.slug}`}
                  data-testid={`subservice-related-${r.slug}`}
                  className="group block p-6 border-r border-b border-ink bg-white hover:bg-amber transition-colors"
                >
                  <div className="text-lg font-light text-ink leading-snug min-h-[56px]">
                    {r.title}
                  </div>
                  <div className="mt-6 text-sm font-medium text-ink flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="bg-amber py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-light text-ink leading-tight">
            Let's talk about {s.title.toLowerCase()}.
          </h2>
          <p className="mt-4 text-ink/80 font-light max-w-xl mx-auto">
            One 30-minute conversation. One clear next step. No pressure.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact">
              <Button
                data-testid="subservice-final-cta"
                className="rounded-none h-12 px-6 bg-ink text-white hover:bg-white hover:text-ink border border-ink font-medium"
              >
                Get in touch →
              </Button>
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="h-12 px-6 inline-flex items-center bg-white text-ink border border-ink font-medium hover:bg-ink hover:text-white transition-all"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
