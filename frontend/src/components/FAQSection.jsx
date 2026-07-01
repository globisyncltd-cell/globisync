import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/lib/content";

export default function FAQSection() {
  // JSON-LD structured data for FAQ
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section
      data-testid="faq-section"
      className="bg-secondary/40 py-24 border-t border-border"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">[ FAQ ]</div>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl font-bold text-ink leading-tight">
          The questions founders always ask us first.
        </h2>
        <div className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {FAQ.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-ink">
                <AccordionTrigger
                  data-testid={`faq-question-${i}`}
                  className="text-left font-serif text-lg md:text-xl text-ink hover:text-amber hover:no-underline py-6"
                >
                  {f.q}
                </AccordionTrigger>
                <AccordionContent
                  data-testid={`faq-answer-${i}`}
                  className="text-muted2 text-base leading-relaxed pb-6"
                >
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
