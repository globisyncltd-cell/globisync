// All subservice items grouped by parent menu
export const MENUS = [
  {
    id: "team",
    label: "Team",
    to: "/team",
    items: null, // direct link, no dropdown
  },
  {
    id: "ecommerce-support",
    label: "Ecommerce Support",
    items: [
      { slug: "amazon", title: "Amazon" },
      { slug: "ebay", title: "eBay" },
      { slug: "etsy", title: "Etsy" },
      { slug: "ecommerce-strategy", title: "Ecommerce Strategy" },
      { slug: "ecommerce-account-management", title: "Ecommerce Account Management" },
      { slug: "ecommerce-product-listings", title: "Ecommerce Product Listings" },
      { slug: "stock-inventory-management", title: "Stock & Inventory Management" },
      { slug: "order-management", title: "Order Management" },
      { slug: "ecommerce-training", title: "Ecommerce Training" },
      { slug: "marketplace-integration", title: "Ecommerce Marketplace Integration" },
      { slug: "multi-marketplace-management", title: "Multi-Marketplace Management" },
      { slug: "marketplace-optimisation", title: "Marketplace Optimisation" },
    ],
  },
  {
    id: "social-management",
    label: "Social Management",
    items: [
      { slug: "facebook", title: "Facebook" },
      { slug: "instagram", title: "Instagram" },
      { slug: "tiktok", title: "TikTok" },
      { slug: "social-media-strategy", title: "Social Media Strategy" },
      { slug: "social-content-creatives", title: "Social Media Content & Creatives" },
      { slug: "community-management", title: "Community Management" },
      { slug: "social-commerce", title: "Social Commerce" },
    ],
  },
  {
    id: "digital-marketing",
    label: "Digital Marketing",
    items: [
      { slug: "performance-marketing", title: "Performance Marketing" },
      { slug: "paid-search", title: "Paid Search" },
      { slug: "paid-social", title: "Paid Social" },
      { slug: "seo", title: "SEO" },
      { slug: "crm-email-marketing", title: "CRM & Email Marketing" },
      { slug: "generative-engine-optimisation", title: "Generative Engine Optimisation" },
      { slug: "answer-engine-optimisation", title: "Answer Engine Optimisation" },
      { slug: "strategy", title: "Strategy" },
      { slug: "conversion-optimisation", title: "Conversion Optimisation" },
      { slug: "organic-search", title: "Organic Search" },
      { slug: "facebook-ads", title: "Facebook Ads" },
      { slug: "instagram-ads", title: "Instagram Ads" },
      { slug: "tiktok-ads", title: "TikTok Ads" },
      { slug: "google-meta-ads", title: "Google & Meta Ads" },
      { slug: "google-remarketing", title: "Google Remarketing" },
      { slug: "google-shopping", title: "Google Shopping" },
    ],
  },
  {
    id: "designing",
    label: "Designing",
    items: [
      { slug: "product-packaging-design", title: "Product & Packaging Design" },
    ],
  },
  {
    id: "cross-border-ecommerce",
    label: "Cross Border Ecommerce",
    items: [
      { slug: "uk-warehouse-storage", title: "Access to our UK Warehouse & Free Storage" },
      { slug: "uk-retail-ecommerce-access", title: "Access to Retail & Ecommerce in UK" },
      { slug: "pricing-compliance", title: "Guidance on Pricing & Compliance" },
      { slug: "import-customs", title: "Import & Customs Support" },
      { slug: "cross-border-logistics", title: "Cross Border Logistics" },
      { slug: "international-brand-positioning", title: "International Brand Positioning" },
    ],
  },
  {
    id: "retail",
    label: "Retail",
    items: [
      { slug: "retail-to-ecommerce", title: "Retail to Ecommerce", minimal: true },
      { slug: "retail-distribution", title: "Retail Distribution", minimal: true },
    ],
  },
];

// Descriptions for each subservice page
const D = {
  amazon: "Full-service Amazon selling on UK, US, EU and Middle East marketplaces — from Seller Central setup and A+ content to PPC, DSP, inventory replenishment, and brand protection.",
  ebay: "eBay UK operations end-to-end — storefront design, Promoted Listings, category-level SEO, seller performance management, and cross-listing automation.",
  etsy: "Etsy UK and US selling — listing SEO, Etsy Ads, seasonal campaign planning, and off-Etsy traffic funnels for handmade, jewellery, and lifestyle brands.",
  "ecommerce-strategy": "A written 90-day plan that maps channels, pricing, unit economics, and milestones — before you spend a pound on ads or inventory.",
  "ecommerce-account-management": "We become your outsourced ecommerce team. Named senior operator, weekly ops calls, monthly reporting, quarterly business reviews.",
  "ecommerce-product-listings": "Conversion-first listing copy for Amazon, eBay, Etsy and Shopify. Locale-specific keyword sets. A+ / EBC / Brand Story modules produced in-house.",
  "stock-inventory-management": "Replenishment planning across FBA, MCF, 3PL and DTC — with demand forecasting that stops stockouts before ranking loss.",
  "order-management": "One dashboard, all your marketplaces and DTC channels. SLA-driven fulfilment, exception handling, and unified reporting.",
  "ecommerce-training": "In-house training for your team on Seller Central, Etsy Shop Manager, PPC, listing SEO, and marketplace ops discipline.",
  "marketplace-integration": "Connect Shopify, ERP, and your PIM to every marketplace via Linnworks, Channel Advisor, or custom API — inventory syncs, no over-selling.",
  "multi-marketplace-management": "One team, one report, every platform. Amazon, eBay, Etsy, TikTok Shop, Noon, Lazada, Zalora — operated as a single P&L.",
  "marketplace-optimisation": "Continuous CRO for marketplace listings — imagery, copy, price, variation strategy, buy-box discipline — tuned against real search share.",

  facebook: "Organic Facebook presence that supports commerce — content calendar, community management, Meta Shop integration.",
  instagram: "Instagram-first content, Reels production, product tagging, Instagram Shopping setup, and creator collaborations.",
  tiktok: "TikTok organic content, TikTok Shop enablement, creator seeding, and affiliate programme management.",
  "social-media-strategy": "A monthly editorial calendar tied to commerce goals. Content pillars, cadence, KPI targets — not vibes.",
  "social-content-creatives": "In-house production of Reels, TikToks, static creative, and UGC — designed to be tested on paid.",
  "community-management": "Reply, engage, moderate, and route customer questions across all social channels — with SLA targets.",
  "social-commerce": "Meta Shop, TikTok Shop, and Instagram Shopping — set up, optimised, and connected to your product catalogue.",

  "performance-marketing": "Full-funnel paid growth across Meta, Google, TikTok, and Amazon Ads — one team, one MER target, weekly optimisation.",
  "paid-search": "Google Ads Search, PMax, Shopping, and YouTube — structured for scale, negative-keyword discipline, and clean attribution.",
  "paid-social": "Meta and TikTok Ads run against blended MER. Advantage+, TikTok Shop ads, creative testing framework.",
  seo: "Technical, on-page, content, and internal linking SEO for ecommerce brands — the compounding channel done properly.",
  "crm-email-marketing": "Klaviyo, Mailchimp and Attentive flows — welcome, cart abandonment, browse abandonment, post-purchase, winback, VIP.",
  "generative-engine-optimisation": "Optimise your brand's presence in ChatGPT, Perplexity, and Google's AI answers — via structured content, citations, and entity coverage.",
  "answer-engine-optimisation": "Featured snippets, People Also Ask, and voice-search targeting — surface your brand at the moment of question, not just query.",
  strategy: "Digital marketing strategy that connects channels to commerce outcomes — not a deck of frameworks.",
  "conversion-optimisation": "Systematic CRO for Shopify and marketplace listings — hypothesis-driven experiments with real statistical rigour.",
  "organic-search": "Long-form content, category page enrichment, digital PR, and internal linking — organic traffic that compounds.",
  "facebook-ads": "Facebook Ads for ecommerce — full-funnel, creative-led, retargeting-tight.",
  "instagram-ads": "Instagram Ads across Feed, Reels, and Stories — placement-native creative, not repurposed.",
  "tiktok-ads": "TikTok Ads and TikTok Shop Ads — creative that survives the scroll, affiliate programme layered on top.",
  "google-meta-ads": "One team running both Google and Meta against a unified MER target — no more platform-vs-platform blame.",
  "google-remarketing": "Google Display, YouTube, and Search remarketing — bring back the 96% who didn't convert the first time.",
  "google-shopping": "Google Shopping and Performance Max — feed quality, product titles, and asset groups that actually convert.",

  "product-packaging-design": "Product photography direction, packaging design, unboxing experience — the physical brand that pays back in reviews and repeat purchase.",

  "uk-warehouse-storage": "Free storage in our UK warehouse for international brands launching in the UK — sample stock, marketing collateral, or first-container buffer.",
  "uk-retail-ecommerce-access": "Warm introductions to UK retail buyers and ecommerce partners — Waitrose, John Lewis, Amazon UK, Ocado, Holland & Barrett, and more.",
  "pricing-compliance": "Landed-cost modelling, UK VAT, UKCA/CE marking, product safety, and category-specific compliance for international brands.",
  "import-customs": "EORI, IOR, freight forwarding, and customs classification — we handle the paperwork end-to-end.",
  "cross-border-logistics": "Origin factory → destination FBA/3PL. FCL and LCL freight, prep centre partnerships, duty-optimised routing.",
  "international-brand-positioning": "Positioning your brand for a new market — copy, packaging, price, and story — so it lands as a local proposition, not a foreign import.",

  "retail-to-ecommerce": null, // minimal
  "retail-distribution": null, // minimal
};

// Build a flat lookup for the /services/:slug router
export const SUBSERVICES = MENUS.flatMap((m) =>
  (m.items || []).map((i) => ({
    slug: i.slug,
    title: i.title,
    parent: m.label,
    parentId: m.id,
    minimal: !!i.minimal,
    description: D[i.slug] || null,
  }))
);

export const getSubservice = (slug) => SUBSERVICES.find((s) => s.slug === slug);
