import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV, SITE } from "@/lib/content";
import { Button } from "@/components/ui/button";

const Logo = () => (
  <Link to="/" data-testid="nav-logo" className="group flex items-center gap-2">
    <div className="relative h-9 w-9 border border-ink flex items-center justify-center bg-white group-hover:bg-amber transition-colors">
      <span className="font-serif text-xl font-bold text-ink">G</span>
      <span className="absolute -top-1 -right-1 h-2 w-2 bg-amber border border-ink" />
    </div>
    <div className="leading-none">
      <div className="font-serif text-xl font-bold text-ink tracking-tight">GlobiSync</div>
    </div>
  </Link>
);

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full backdrop-blur-xl transition-colors border-b ${
        scrolled ? "bg-white/85 border-border" : "bg-white/60 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-0" aria-label="Primary">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              data-testid={`nav-${n.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-ink" : "text-muted2 hover:text-ink"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/contact" className="hidden sm:block">
            <Button
              data-testid="nav-book-call-btn"
              className="rounded-none bg-ink text-white hover:bg-amber hover:text-ink border border-ink transition-all hover:-translate-y-0.5 hover:sharp-shadow font-semibold"
            >
              {SITE.cta} <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
          <button
            data-testid="nav-mobile-toggle"
            className="lg:hidden p-2 border border-ink"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                data-testid={`mobile-nav-${n.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={({ isActive }) =>
                  `px-3 py-3 text-base border-b border-border last:border-0 ${
                    isActive ? "text-ink font-semibold" : "text-muted2"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Link to="/contact" className="mt-3">
              <Button
                data-testid="mobile-nav-book-btn"
                className="w-full rounded-none bg-amber text-ink hover:bg-amber-hover border border-ink font-semibold"
              >
                {SITE.cta}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
