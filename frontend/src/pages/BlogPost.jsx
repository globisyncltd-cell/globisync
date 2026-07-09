import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { BLOG } from "@/lib/blog";
import { SITE } from "@/lib/content";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

function renderBody(body) {
  // Split on double-newline, treat lines starting with ## as H2
  const blocks = body.split(/\n{2,}/).map((b) => b.trim()).filter(Boolean);
  return blocks.map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="mt-10 mb-4 font-serif text-2xl md:text-3xl font-bold text-ink leading-tight">
          {block.replace(/^##\s+/, "")}
        </h2>
      );
    }
    return (
      <p key={i} className="text-ink/90 leading-[1.8] text-lg mb-5">
        {block}
      </p>
    );
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  const idx = BLOG.findIndex((p) => p.slug === slug);
  const next = BLOG[(idx + 1) % BLOG.length];
  const related = BLOG.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "GlobiSync",
      logo: { "@type": "ImageObject", url: "https://www.globisync.com/logo.png" },
    },
    datePublished: post.date,
    keywords: (post.keywords || []).join(", "),
    mainEntityOfPage: `https://www.globisync.com/blog/${post.slug}`,
  };

  return (
    <>
      <SEO title={`${post.title}`} description={post.excerpt} path={`/blog/${post.slug}`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="bg-white pt-16 pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link to="/blog" className="text-sm text-muted2 hover:text-ink inline-flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" /> All insights
          </Link>
          <div className="mt-8 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.15em]">
            <span className="text-amber">{post.category}</span>
            <span className="text-muted2">·</span>
            <span className="text-muted2">{post.readTime}</span>
            <span className="text-muted2">·</span>
            <span className="text-muted2">{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
          </div>
          <h1 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-[1.1] break-words">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted2 leading-relaxed">{post.excerpt}</p>
        </div>

        <div className="mt-10 max-w-5xl mx-auto px-6 lg:px-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full aspect-[16/9] object-cover border border-ink"
          />
        </div>

        <div className="mt-14 max-w-3xl mx-auto px-6 lg:px-8">
          {renderBody(post.body)}

          <div className="mt-14 p-8 bg-amber">
            <div className="text-xs font-mono uppercase tracking-[0.15em] text-ink/70">Ready to run this in your account?</div>
            <div className="mt-3 font-serif text-2xl md:text-3xl font-bold text-ink leading-snug">
              We do this every day for UK brands. Let's talk about yours.
            </div>
            <Link to="/contact">
              <Button
                data-testid="blog-post-cta"
                className="mt-5 rounded-none bg-ink text-white hover:bg-white hover:text-ink border border-ink font-semibold"
              >
                {SITE.cta} →
              </Button>
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-secondary/40 py-16 border-t border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-xs font-mono uppercase tracking-[0.15em] text-amber">[ Related insights ]</div>
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  data-testid={`blog-related-${r.slug}`}
                  className="group border border-border bg-white p-6 hover:border-ink transition-all"
                >
                  <div className="text-xs font-mono uppercase tracking-[0.15em] text-muted2">{r.category}</div>
                  <div className="mt-2 font-serif text-lg font-bold text-ink group-hover:text-amber leading-snug">{r.title}</div>
                  <div className="mt-3 text-xs text-muted2 flex items-center gap-1">Read <ArrowUpRight className="h-3 w-3" /></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-10 border-t border-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <div className="text-sm text-muted2">Next up</div>
          <Link to={`/blog/${next.slug}`} className="text-right group max-w-md">
            <div className="text-xs font-mono uppercase tracking-[0.15em] text-amber">{next.category}</div>
            <div className="mt-1 font-serif text-lg font-bold text-ink group-hover:text-amber">
              {next.title} →
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
