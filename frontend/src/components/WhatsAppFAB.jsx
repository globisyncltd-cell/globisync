import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { SITE } from "@/lib/content";

export default function WhatsAppFAB() {
  const msg = encodeURIComponent(
    "Hi GlobiSync — I'd like to explore selling on marketplaces. Can we chat?"
  );
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}?text=${msg}`}
      target="_blank"
      rel="noreferrer"
      data-testid="whatsapp-fab"
      aria-label="Chat with GlobiSync on WhatsApp"
      className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
      <span className="relative flex items-center gap-2 bg-[#25D366] text-white pl-3 pr-4 py-3 rounded-full border-2 border-white shadow-lg hover:scale-105 transition-transform">
        <FaWhatsapp className="h-6 w-6" />
        <span className="hidden md:inline text-sm font-semibold">WhatsApp us</span>
      </span>
    </a>
  );
}
