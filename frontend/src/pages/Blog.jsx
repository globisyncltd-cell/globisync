import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { BLOG } from "@/lib/blog";
import SEO from "@/components/SEO";
import { ArrowUpRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const CATEGORIES = ["All", "Amazon", "Shopify", "SEO", "Paid Ads", "International", "Retail", "Operations"];

export default function Blog() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const posts = useMemo(() => {
    return BLOG.filter((p) => {
      if (cat !== "All" && p.category !== cat) return false;
      if (q && !`${p.title} ${p.excerpt} ${p.category}`.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [q, cat]);

  return (
    <>
      <SEO
        title="Insights · UK Ecommerce Agency"
        description="Playbooks and insights from the GlobiSync desk — Amazon, Shopify, SEO, paid ads, international expansion, and retail."
        path="/blog"
      />
      <section className="bg-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">[ Insights ]</div>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-ink leading-[1.05] break-words">
            Playbooks<br />from the desk.
          </h1>
          <p className="mt-6 max-w-2xl text-muted2 text-lg">
            Practical, opinionated writing on running ecommerce brands well — from Amazon and Shopify
            operations to international expansion and retail entry.
          </p>
        </div>
      </section>

      <section className="pb-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4 border-t border-b border-border py-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted2" />
              <Input
                data-testid="blog-search-input"
                placeholder="Search insights…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="pl-9 rounded-none border-ink"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  data-testid={`blog-filter-${c.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setCat(c)}
                  className={`px-3 py-1 text-xs font-mono uppercase tracking-[0.15em] border transition-all ${
                    cat === c
                      ? "bg-ink text-white border-ink"
                      : "border-border text-muted2 hover:border-ink hover:text-ink"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="py-20 text-center text-muted2">No insights match your search.</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((p) => (
                <Link
                  to={`/blog/${p.slug}`}
                  key={p.slug}
                  data-testid={`blog-card-${p.slug}`}
                  className="group border border-border bg-white hover:border-ink transition-all block"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-secondary">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.15em] text-muted2">
                      <span className="text-amber">{p.category}</span>
                      <span>·</span>
                      <span>{p.readTime}</span>
                    </div>
                    <div className="mt-3 font-serif text-xl font-bold text-ink leading-snug group-hover:text-amber transition-colors">
                      {p.title}
                    </div>
                    <div className="mt-3 text-sm text-muted2 line-clamp-3">{p.excerpt}</div>
                    <div className="mt-5 flex items-center justify-between">
                      <div className="text-xs text-muted2">{new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</div>
                      <ArrowUpRight className="h-4 w-4 text-ink group-hover:text-amber" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
