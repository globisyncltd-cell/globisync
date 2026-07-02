import React from "react";
import SEO from "@/components/SEO";
import { SITE } from "@/lib/content";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO title="Privacy Policy" description="GlobiSync privacy policy — how we collect, use, and protect your data." path="/privacy-policy" />
      <section className="bg-white pt-20 pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">[ Privacy Policy ]</div>
          <h1 className="mt-3 text-5xl md:text-6xl font-light text-ink leading-[1.05]">Privacy Policy</h1>
          <p className="mt-6 text-sm text-muted2 font-light">Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>

          <div className="mt-10 space-y-8 text-ink/90 font-light leading-relaxed">
            <div>
              <h2 className="text-2xl font-normal mb-3">1. Who we are</h2>
              <p>GlobiSync Ltd ("we", "our", "us") is a UK ecommerce growth agency registered in England, with its registered office at {SITE.address}. You can contact us at {SITE.email}.</p>
            </div>

            <div>
              <h2 className="text-2xl font-normal mb-3">2. What data we collect</h2>
              <p>When you submit any form on this website (contact form, discovery-call booking, fee calculator, or careers application) we collect the personal data you voluntarily provide — typically your name, email address, phone number, company, and any message or CV you attach.</p>
            </div>

            <div>
              <h2 className="text-2xl font-normal mb-3">3. How we use it</h2>
              <p>We use your data solely to respond to your enquiry, deliver requested content (such as our margin playbook), and evaluate your application where relevant. We do not sell your data. We do not add you to marketing lists without your explicit consent.</p>
            </div>

            <div>
              <h2 className="text-2xl font-normal mb-3">4. Data storage</h2>
              <p>Form submissions are stored in our secure MongoDB database, accessed only by GlobiSync team members on a need-to-know basis. Email notifications are delivered via Resend.com (an SOC 2 Type II compliant provider).</p>
            </div>

            <div>
              <h2 className="text-2xl font-normal mb-3">5. Cookies</h2>
              <p>This site uses essential cookies only. We do not run third-party advertising cookies or trackers.</p>
            </div>

            <div>
              <h2 className="text-2xl font-normal mb-3">6. Your rights</h2>
              <p>Under UK GDPR you have the right to access, correct, delete, or export the personal data we hold about you. Contact us at {SITE.email} to exercise any of these rights.</p>
            </div>

            <div>
              <h2 className="text-2xl font-normal mb-3">7. Contact</h2>
              <p>For any privacy-related questions, email {SITE.email}.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
