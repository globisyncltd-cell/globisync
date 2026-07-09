import React from "react";
import { Link } from "react-router-dom";
import { SITE } from "@/lib/content";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const FOOTER_LINKS = [
  { to: "/about", label: "About" },
  { to: "/blog", label: "Insights" },
  { to: "/blog", label: "Blogs" },
  { to: "/contact", label: "Contact" },
  { to: "/careers", label: "Careers" },
  { to: "/privacy-policy", label: "Privacy Policy" },
];

const SOCIALS = [
  { icon: FaLinkedin, url: "https://www.linkedin.com/company/globisync/", label: "LinkedIn" },
  { icon: FaInstagram, url: "https://www.instagram.com/globisync/", label: "Instagram" },
  { icon: FaFacebook, url: "https://www.facebook.com/globisync/", label: "Facebook" },
  { icon: FaTiktok, url: "https://www.tiktok.com/@globisync", label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate950 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-40 grain" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="text-3xl md:text-4xl font-light leading-tight">
              Ready to grow your ecommerce brand — <span className="text-amber">the right way?</span>
            </div>
            <p className="mt-4 text-white/70 max-w-md font-light">
              Book a discovery call with our Birmingham team. No decks, no fluff — just a clear next step.
            </p>
            <Link
              to="/contact"
              data-testid="footer-cta-book-btn"
              className="inline-flex items-center gap-2 mt-6 bg-amber text-ink font-medium px-6 py-3 border border-amber hover:bg-white hover:border-white transition-all hover:-translate-y-0.5"
            >
              {SITE.cta} →
            </Link>

            <div className="mt-8 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`footer-social-${s.label.toLowerCase()}`}
                  aria-label={s.label}
                  className="h-9 w-9 border border-white/30 grid place-items-center hover:bg-amber hover:text-ink hover:border-amber transition-all"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">Explore</div>
            <ul className="mt-4 space-y-2 text-white/80 font-light">
              {FOOTER_LINKS.map((n) => (
                <li key={n.label}>
                  <Link
                    to={n.to}
                    data-testid={`footer-link-${n.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-amber transition-colors"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/team"
                  data-testid="footer-link-team"
                  className="hover:text-amber transition-colors"
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">Birmingham HQ</div>
            <ul className="mt-4 space-y-3 text-white/80 text-sm font-light">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 flex-none mt-1 text-amber" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 flex-none mt-1 text-amber" />
                <div className="flex flex-col gap-1">
                  <a href={`mailto:${SITE.email}`} className="hover:text-amber">{SITE.email}</a>
                  <a href="mailto:hello@globisync.com" className="hover:text-amber">hello@globisync.com</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 flex-none mt-1 text-amber" />
                <a href={`tel:${SITE.phone.replace(/\s+/g, "")}`} className="hover:text-amber">{SITE.phone}</a>
              </li>
              <li className="flex gap-3">
                <FaWhatsapp className="h-4 w-4 flex-none mt-1 text-amber" />
                <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-amber">Chat on WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Services section removed per user request */}

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-white/50 font-mono uppercase tracking-[0.15em]">
          <div>© {new Date().getFullYear()} GlobiSync Ltd · UK Ecommerce Growth Partner</div>
          <div className="flex items-center gap-4">
            <Link to="/careers" data-testid="footer-careers-link" className="hover:text-amber transition-colors">
              Careers · We're hiring
            </Link>
            <span>Registered in England · HMRC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
