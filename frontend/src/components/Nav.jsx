import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { SITE } from "@/lib/content";
import { MENUS } from "@/lib/menus";
import { Button } from "@/components/ui/button";

const Logo = () => (
  <Link to="/" data-testid="nav-logo" className="group flex items-center gap-3">
    <div className="relative h-11 w-11 border-2 border-ink flex items-center justify-center bg-white group-hover:bg-amber transition-colors">
      <span className="font-serif text-2xl font-medium text-ink leading-none">G</span>
      <span className="absolute -top-1.5 -right-1.5 h-2.5 w-2.5 bg-amber border border-ink" />
    </div>
    <div className="leading-tight">
      <div className="text-lg font-medium text-ink tracking-tight">GlobiSync</div>
      <div className="text-[10px] font-light text-muted2 tracking-[0.15em] uppercase">Ecommerce Growth Partner</div>
    </div>
  </Link>
);

function DesktopMenu() {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <nav className="hidden lg:flex items-center gap-1" onMouseLeave={() => setOpenMenu(null)} aria-label="Primary">
      {MENUS.map((m) => {
        const hasItems = m.items && m.items.length > 0;
        if (!hasItems) {
          return (
            <NavLink
              key={m.id}
              to={m.to}
              data-testid={`nav-${m.id}`}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-normal transition-colors ${
                  isActive ? "text-ink" : "text-muted2 hover:text-ink"
                }`
              }
            >
              {m.label}
            </NavLink>
          );
        }
        return (
          <div
            key={m.id}
            className="relative"
            onMouseEnter={() => setOpenMenu(m.id)}
          >
            <button
              data-testid={`nav-${m.id}`}
              className={`px-3 py-2 text-sm font-normal transition-colors inline-flex items-center gap-1 ${
                openMenu === m.id ? "text-ink" : "text-muted2 hover:text-ink"
              }`}
              onClick={() => setOpenMenu(openMenu === m.id ? null : m.id)}
            >
              {m.label}
              <ChevronDown className={`h-3 w-3 transition-transform ${openMenu === m.id ? "rotate-180" : ""}`} />
            </button>
            {openMenu === m.id && (
              <div
                data-testid={`nav-dropdown-${m.id}`}
                className="absolute left-0 top-full mt-0 min-w-[340px] bg-white border border-ink shadow-lg z-50"
              >
                <div className="py-2">
                  {m.items.map((it) => (
                    <Link
                      key={it.slug}
                      to={`/services/${it.slug}`}
                      data-testid={`nav-item-${it.slug}`}
                      onClick={() => setOpenMenu(null)}
                      className="block px-5 py-2.5 text-sm font-light text-muted2 hover:text-ink hover:bg-amber/10 transition-colors"
                    >
                      {it.title}
                    </Link>
                  ))}
                  {m.overviewSlug && (
                    <Link
                      to={`/${m.overviewSlug}`}
                      data-testid={`nav-viewall-${m.overviewSlug}`}
                      onClick={() => setOpenMenu(null)}
                      className="block px-5 py-3 mt-1 text-sm font-medium text-ink border-t border-border bg-amber/5 hover:bg-amber hover:text-ink transition-colors"
                    >
                      View All {m.label} Services →
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}

function MobileMenu({ open, setOpen }) {
  const [expanded, setExpanded] = useState(null);
  const loc = useLocation();
  useEffect(() => { setOpen(false); setExpanded(null); }, [loc.pathname, setOpen]);

  if (!open) return null;

  return (
    <div className="lg:hidden border-t border-border bg-white max-h-[75vh] overflow-y-auto">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col">
        {MENUS.map((m) => {
          const hasItems = m.items && m.items.length > 0;
          if (!hasItems) {
            return (
              <NavLink
                key={m.id}
                to={m.to}
                data-testid={`mobile-nav-${m.id}`}
                className={({ isActive }) =>
                  `px-3 py-3 text-base border-b border-border ${
                    isActive ? "text-ink font-medium" : "text-muted2"
                  }`
                }
              >
                {m.label}
              </NavLink>
            );
          }
          const isExp = expanded === m.id;
          return (
            <div key={m.id} className="border-b border-border">
              <button
                data-testid={`mobile-nav-${m.id}`}
                onClick={() => setExpanded(isExp ? null : m.id)}
                className="w-full flex items-center justify-between px-3 py-3 text-base text-ink"
              >
                {m.label}
                <ChevronDown className={`h-4 w-4 transition-transform ${isExp ? "rotate-180" : ""}`} />
              </button>
              {isExp && (
                <div className="pb-3">
                  {m.items.map((it) => (
                    <Link
                      key={it.slug}
                      to={`/services/${it.slug}`}
                      data-testid={`mobile-nav-item-${it.slug}`}
                      className="block px-5 py-2 text-sm font-light text-muted2 hover:text-ink"
                    >
                      {it.title}
                    </Link>
                  ))}
                  {m.overviewSlug && (
                    <Link
                      to={`/${m.overviewSlug}`}
                      data-testid={`mobile-nav-viewall-${m.overviewSlug}`}
                      className="block mx-3 mt-2 px-3 py-2 text-sm font-medium text-ink border-t border-border bg-amber/10"
                    >
                      View All {m.label} Services →
                    </Link>
                  )}
                </div>
              )}
            </div>
          );
        })}
        <Link to="/contact" className="mt-4">
          <Button
            data-testid="mobile-nav-book-btn"
            className="w-full rounded-none bg-amber text-ink hover:bg-amber-hover border border-ink font-medium"
          >
            {SITE.cta}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full backdrop-blur-xl transition-colors border-b ${
        scrolled ? "bg-white/90 border-border" : "bg-white/70 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        <Logo />
        <DesktopMenu />
        <div className="flex items-center gap-2">
          <Link to="/contact" className="hidden sm:block">
            <Button
              data-testid="nav-book-call-btn"
              className="rounded-none bg-ink text-white hover:bg-amber hover:text-ink border border-ink font-medium h-10"
            >
              {SITE.cta}
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
      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  );
}
