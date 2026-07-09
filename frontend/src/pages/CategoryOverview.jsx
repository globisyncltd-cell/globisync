import React from "react";
import { useLocation, Link, Navigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getOverview } from "@/lib/menus";
import { SITE } from "@/lib/content";
import SEO from "@/components/SEO";

export default function CategoryOverview() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/+/, "").split("/")[0];
  const menu = getOverview(slug);
  if (!menu || !menu.items) return <Navigate to="/" replace />;

  return (
    <>
      <SEO
        title={`${menu.label} · GlobiSync`}
        description={menu.overview}
        path={`/${menu.overviewSlug}`}
      />

      <section className="bg-white pt-16 sm:pt-20 pb-12 sm:pb-14">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">
            [ {menu.label} ]
          </div>
          <h1
            data-testid="category-overview-title"
            className="mt-4 text-4xl sm:text-5xl md:text-6xl font-light text-ink leading-[1.05] tracking-tight max-w-4xl break-words"
          >
            {menu.label}
          </h1>
          <p className="mt-6 max-w-3xl text-muted2 text-base sm:text-lg font-light leading-relaxed">
            {menu.overview}
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap gap-3">
            <Link to="/contact">
              <Button
                data-testid="category-cta"
                className="h-11 sm:h-12 px-5 sm:px-6 rounded-none bg-ink text-white hover:bg-amber hover:text-ink border border-ink font-medium hover:-translate-y-0.5 transition-all"
              >
                Get in touch <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="h-11 sm:h-12 px-5 sm:px-6 inline-flex items-center bg-white text-ink border border-ink font-medium hover:bg-ink hover:text-white transition-all"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">
            [ Services ]
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-light text-ink leading-tight">
            Everything we do under {menu.label.toLowerCase()}.
          </h2>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-ink">
            {menu.items.map((it, i) => (
              <Link
                key={it.slug}
                to={`/services/${it.slug}`}
                data-testid={`category-item-${it.slug}`}
                className="group block p-6 border-r border-b border-ink bg-white hover:bg-amber transition-colors"
              >
                <div className="font-mono text-xs text-muted2 group-hover:text-ink/70">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-3 text-xl font-light text-ink leading-snug min-h-[56px]">
                  {it.title}
                </div>
                <div className="mt-4 text-sm font-medium text-ink flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore <ArrowUpRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-amber py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-ink leading-tight">
            Let's talk about your {menu.label.toLowerCase()} needs.
          </h2>
          <Link to="/contact">
            <Button
              data-testid="category-final-cta"
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
