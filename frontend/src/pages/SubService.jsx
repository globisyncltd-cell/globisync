import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getSubservice } from "@/lib/menus";
import { SITE } from "@/lib/content";
import SEO from "@/components/SEO";
import { ArrowUpRight, Check } from "lucide-react";

export default function SubService() {
  const { slug } = useParams();
  const s = getSubservice(slug);
  if (!s) return <Navigate to="/" replace />;

  return (
    <>
      <SEO
        title={`${s.title} · ${s.parent}`}
        description={s.description || `${s.title} — get in touch with GlobiSync, a UK ecommerce growth partner.`}
        path={`/services/${s.slug}`}
      />

      <section className="bg-white pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">
            [ {s.parent} ]
          </div>
          <h1 className="mt-4 text-5xl md:text-6xl font-light text-ink leading-[1.05] tracking-tight">
            {s.title}
          </h1>

          {s.minimal ? (
            <p className="mt-6 max-w-2xl text-muted2 text-lg font-light leading-relaxed">
              Connect with us to discover more.
            </p>
          ) : (
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
        </div>
      </section>

      {!s.minimal && (
        <section className="bg-secondary/40 py-16 border-t border-border">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">
              [ How we help ]
            </div>
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              {["Senior operator on the account", "Weekly ops calls", "Written monthly reporting", "Fixed-fee pilot available", "Quarterly business review", "One team, one point of contact"].map((p, i) => (
                <div key={i} className="p-5 bg-white border border-border flex gap-3">
                  <Check className="h-4 w-4 mt-1 text-amber flex-none" />
                  <div className="text-sm text-ink font-light">{p}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-amber py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-ink leading-tight">
            Let's talk about {s.title.toLowerCase()}.
          </h2>
          <Link to="/contact">
            <Button
              data-testid="subservice-final-cta"
              className="mt-6 rounded-none h-12 px-6 bg-ink text-white hover:bg-white hover:text-ink border border-ink font-medium"
            >
              Get in touch →
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
