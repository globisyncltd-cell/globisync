// Menus + rich subservice content (bullets)
const B = {
  amazon: ["Amazon UK / US / EU / ME storefront setup and management", "Sponsored Products, Brands, Display and DSP", "A+ content, Brand Story, Storefront design", "Inventory replenishment and FBA planning", "Case management and brand protection"],
  ebay: ["eBay UK storefront and category-level SEO", "Promoted Listings and store subscriptions", "Cross-listing automation from Shopify / ERP", "Seller performance and Top Rated compliance", "Bulk listing and revision management"],
  etsy: ["Listing SEO across titles, tags and attributes", "Etsy Ads and seasonal campaign calendars", "Shop branding and Star Seller optimisation", "Off-Etsy Pinterest and social traffic funnels", "Category-appropriate photography direction"],
  "ecommerce-strategy": ["Category and competitor deep-dive", "Landed cost and margin modelling", "Marketplace prioritisation matrix", "6 and 12 month growth roadmap", "Owned KPIs and executive scorecard"],
  "ecommerce-account-management": ["Named senior operator on your account", "Weekly ops calls and written readouts", "Monthly performance review", "Quarterly business review with the founder", "One Slack channel, one point of contact"],
  "ecommerce-product-listings": ["Keyword-driven titles and bullets", "Locale-specific SEO for each market", "A+ / EBC / Brand Story production", "Backend attributes and variation strategy", "Compliance and category-specific requirements"],
  "stock-inventory-management": ["Demand forecasting model per SKU", "FBA / MCF / 3PL replenishment planning", "Stockout and slow-mover alerts", "Season and promotion buffer planning", "Multi-marketplace inventory sync"],
  "order-management": ["Unified order dashboard across channels", "SLA-driven fulfilment routing", "Exception handling and returns", "Carrier performance monitoring", "Weekly ops reporting"],
  "ecommerce-training": ["Seller Central and Etsy Shop Manager", "PPC and advertising fundamentals", "Listing SEO and CRO principles", "Marketplace ops discipline", "In-house team upskilling programmes"],
  "marketplace-integration": ["Shopify ↔ marketplace sync", "ERP and PIM integration", "Linnworks, Channel Advisor, custom API", "Inventory dedup across channels", "Order routing and pricing rules"],
  "multi-marketplace-management": ["One team across every platform", "Consolidated P&L reporting", "Cross-channel promo calendar", "Unified brand protection", "Single point of accountability"],
  "marketplace-optimisation": ["Listing CRO with real experiments", "Image and video testing framework", "Buy-box discipline and repricing rules", "Variation strategy tuning", "Search-share tracking and reporting"],

  "facebook-management": ["Organic content strategy and calendar", "Meta Shop and product tagging setup", "Community management and inbox handling", "Group and Page moderation", "Monthly reporting and creator briefs"],
  "instagram-management": ["Feed, Reels and Stories strategy", "Instagram Shopping setup and tagging", "Creator collaborations and seeding", "Community management and DMs", "Highlight and profile architecture"],
  "tiktok-management": ["TikTok organic content strategy", "TikTok Shop enablement and optimisation", "Affiliate programme management", "Live selling planning and enablement", "UGC creator seeding"],
  "social-media-strategy": ["Monthly editorial calendar", "Channel-specific content pillars", "KPI targets tied to commerce", "Competitor and share-of-voice audits", "Quarterly strategy reviews"],
  "social-content-creatives": ["Reels, TikToks and Shorts production", "Static and carousel creative", "UGC sourcing and rights management", "Product photography direction", "Ad-testing creative variants"],
  "community-management": ["Reply and engage across all channels", "Customer service escalation routing", "Sentiment monitoring and reporting", "Crisis response playbooks", "Weekly community pulse"],
  "social-commerce": ["Meta Shop, TikTok Shop, Instagram Shopping", "Product catalogue setup and sync", "Live shopping activation", "Affiliate and creator seeding", "Attribution across platform + web"],

  "performance-marketing": ["Meta, Google, TikTok and Amazon Ads under one team", "Blended MER as the north star", "Creative testing framework", "Weekly optimisation cadence", "Attribution stitched across platforms"],
  "paid-search": ["Google Ads Search, PMax and Shopping", "YouTube upper-funnel and remarketing", "Negative keyword harvesting", "Landing page CRO for paid traffic", "Bid strategy and script management"],
  "paid-social": ["Meta Advantage+ campaigns", "TikTok Ads and TikTok Shop Ads", "Creative variant testing at scale", "Retargeting and CRM audiences", "Placement-native creative production"],
  seo: ["Technical SEO audit and remediation", "Keyword and topic-cluster strategy", "Category and PDP content briefs", "Digital PR and link acquisition", "Marketplace listing SEO"],
  "crm-email-marketing": ["Klaviyo, Mailchimp, Attentive flows", "Welcome, cart, browse and post-purchase", "Winback and VIP tier programmes", "Segmentation and list hygiene", "Deliverability monitoring"],
  "generative-engine-optimisation": ["Optimise for ChatGPT, Perplexity, Gemini", "Structured content and citations", "Entity and knowledge-graph coverage", "Brand-mention monitoring in AI answers", "Prompt-testing framework"],
  "answer-engine-optimisation": ["Featured snippet and PAA targeting", "Voice search and long-tail intent", "Structured data and schema markup", "Question-first content architecture", "SERP feature tracking"],
  "conversion-optimisation": ["Hypothesis-driven experiment programme", "Statistical rigour on tests", "Shopify checkout and PDP CRO", "Landing page A/B testing", "Session replay and heatmap analysis"],
  "organic-search": ["Long-form content production", "Category page enrichment", "Internal linking programme", "Backlink acquisition via digital PR", "Non-brand organic revenue tracking"],
  "facebook-instagram-ads": ["Meta Advantage+ Shopping campaigns", "Creative variant production", "Retargeting and CRM audiences", "Reels and Stories placements", "Attribution and MER reporting"],
  "tiktok-ads": ["TikTok Ads Manager campaigns", "TikTok Shop Ads and affiliate boost", "Creative testing framework", "Spark Ads and creator partnerships", "Full-funnel structure"],
  "google-meta-ads": ["Unified Google + Meta strategy", "Blended MER target", "Creative and audience alignment", "Attribution across platforms", "Weekly cross-channel optimisation"],
  "google-remarketing": ["Google Display remarketing", "YouTube retargeting", "Search remarketing lists", "Dynamic Product Ads", "Audience layering and frequency capping"],
  "google-shopping": ["Merchant Center feed optimisation", "Product titles and descriptions", "Performance Max asset groups", "Standard Shopping campaigns", "Feed rules and supplemental feeds"],

  "product-packaging-design": ["Product photography direction", "Packaging design and unboxing", "A+ / EBC visual production", "Marketplace-ready image sets", "Brand guideline development"],

  "uk-warehouse-storage": ["Free UK storage for launch inventory", "Sample stock and collateral hosting", "First-container buffer for FBA", "3PL partner routing", "Landed-to-shelf coordination"],
  "uk-retail-ecommerce-access": ["Warm introductions to UK retail buyers", "Waitrose, John Lewis, Boots, Ocado", "Amazon UK vendor and seller-side", "Category and buyer targeting", "Meeting prep and follow-up"],
  "pricing-compliance": ["Landed-cost modelling", "UK VAT and EORI registration", "UKCA / CE marking guidance", "Category-specific compliance", "Duty optimisation strategies"],
  "import-customs": ["EORI and IOR setup", "Freight forwarder selection", "Customs classification (HS codes)", "Duty and VAT modelling", "End-to-end paperwork handling"],
  "cross-border-logistics": ["Origin factory to destination FBA / 3PL", "FCL and LCL freight coordination", "Prep centre partnerships", "Duty-optimised routing", "Last-mile carrier selection"],
  "international-brand-positioning": ["Market-specific brand story", "Copy, packaging and price localisation", "Competitive positioning per market", "Local proof and testimonial strategy", "Launch narrative development"],
};

const RETAIL_TO_ECOMMERCE_INTRO = "Whether you are an established retail brand looking to launch online or a marketplace seller wanting to enter physical retail, GlobiSync bridges the gap. We help you build a profitable ecommerce channel alongside your existing retail presence. Connect with us to discover more.";
const RETAIL_DISTRIBUTION_INTRO = "GlobiSync connects brands with the right retail distribution partners across the UK and beyond. We leverage our network of buyers, distributors and retail partners to get your products on shelves and into the right channels. Our team understands both the retail and ecommerce landscape, giving your brand a genuine competitive edge.";
const RETAIL_DISTRIBUTION_BULLETS = [
  "Identify the right retail partners for your category",
  "Support with buyer negotiations and terms",
  "Assist with trade marketing and promotional planning",
  "Advise on retail-ready packaging and compliance",
  "Provide ongoing account management with retail partners",
];

export const MENUS = [
  {
    id: "ecommerce-support",
    label: "Ecommerce Support",
    overview: "Every marketplace and DTC operation we run for our clients — end to end.",
    overviewSlug: "ecommerce",
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
    id: "social-digital",
    label: "Social & Digital Marketing",
    overview: "Content, community and paid growth — under one integrated team.",
    overviewSlug: "social-digital",
    items: [
      { slug: "facebook-management", title: "Facebook Management" },
      { slug: "instagram-management", title: "Instagram Management" },
      { slug: "tiktok-management", title: "TikTok Management" },
      { slug: "social-media-strategy", title: "Social Media Strategy" },
      { slug: "social-content-creatives", title: "Social Media Content & Creatives" },
      { slug: "community-management", title: "Community Management" },
      { slug: "social-commerce", title: "Social Commerce" },
      { slug: "performance-marketing", title: "Performance Marketing" },
      { slug: "paid-search", title: "Paid Search" },
      { slug: "paid-social", title: "Paid Social" },
      { slug: "seo", title: "SEO" },
      { slug: "crm-email-marketing", title: "CRM & Email Marketing" },
      { slug: "generative-engine-optimisation", title: "Generative Engine Optimisation" },
      { slug: "answer-engine-optimisation", title: "Answer Engine Optimisation" },
      { slug: "conversion-optimisation", title: "Conversion Optimisation" },
      { slug: "organic-search", title: "Organic Search" },
      { slug: "facebook-instagram-ads", title: "Facebook & Instagram Ads" },
      { slug: "tiktok-ads", title: "TikTok Ads" },
      { slug: "google-meta-ads", title: "Google & Meta Ads" },
      { slug: "google-remarketing", title: "Google Remarketing" },
      { slug: "google-shopping", title: "Google Shopping" },
    ],
  },
  {
    id: "cross-border",
    label: "Cross Border Ecommerce",
    overview: "For international brands entering the UK — logistics, compliance, distribution.",
    overviewSlug: "cross-border",
    items: [
      { slug: "uk-warehouse-storage", title: "Access to UK Warehouse & Free Storage" },
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
    overview: "Bridging the gap between ecommerce and physical retail.",
    overviewSlug: "retail",
    items: [
      {
        slug: "retail-to-ecommerce",
        title: "Retail to Ecommerce",
        customIntro: RETAIL_TO_ECOMMERCE_INTRO,
        customBullets: null,
      },
      {
        slug: "retail-distribution",
        title: "Retail Distribution",
        customIntro: RETAIL_DISTRIBUTION_INTRO,
        customBullets: RETAIL_DISTRIBUTION_BULLETS,
      },
    ],
  },
  {
    id: "team",
    label: "Team",
    to: "/team",
    items: null,
  },
];

// Short descriptions for subservice pages
const DESC = {
  amazon: "Full-service Amazon selling on UK, US, EU and Middle East marketplaces — from Seller Central setup and A+ content to PPC, DSP, inventory replenishment, and brand protection.",
  ebay: "eBay UK operations end-to-end — storefront design, Promoted Listings, category-level SEO, and cross-listing automation.",
  etsy: "Etsy UK and US selling — listing SEO, Etsy Ads, seasonal campaigns, and off-Etsy traffic funnels.",
  "ecommerce-strategy": "A written 90-day plan that maps channels, pricing, unit economics, and milestones — before you spend a pound on ads or inventory.",
  "ecommerce-account-management": "We become your outsourced ecommerce team. Named senior operator, weekly ops calls, monthly reporting.",
  "ecommerce-product-listings": "Conversion-first listing copy for Amazon, eBay, Etsy and Shopify. Locale-specific keyword sets. A+ / EBC produced in-house.",
  "stock-inventory-management": "Replenishment planning across FBA, MCF, 3PL and DTC — demand forecasting that stops stockouts before ranking loss.",
  "order-management": "One dashboard, all your marketplaces and DTC channels. SLA-driven fulfilment and unified reporting.",
  "ecommerce-training": "In-house training on Seller Central, Etsy Shop Manager, PPC, listing SEO, and marketplace ops discipline.",
  "marketplace-integration": "Connect Shopify, ERP, and your PIM to every marketplace — inventory syncs, no over-selling.",
  "multi-marketplace-management": "Amazon, eBay, Etsy, TikTok Shop, Noon, Lazada, Zalora — operated as a single P&L.",
  "marketplace-optimisation": "Continuous CRO for marketplace listings — imagery, copy, price, variation strategy, buy-box discipline.",
  "facebook-management": "Organic Facebook presence that supports commerce — content, community, and Meta Shop integration.",
  "instagram-management": "Instagram-first content, Reels production, Instagram Shopping setup, and creator collaborations.",
  "tiktok-management": "TikTok organic content, TikTok Shop enablement, creator seeding, and affiliate programme management.",
  "social-media-strategy": "A monthly editorial calendar tied to commerce goals. Content pillars, cadence, KPI targets — not vibes.",
  "social-content-creatives": "In-house production of Reels, TikToks, static creative, and UGC — designed to be tested on paid.",
  "community-management": "Reply, engage, moderate, and route customer questions across all social channels — with SLA targets.",
  "social-commerce": "Meta Shop, TikTok Shop, and Instagram Shopping — set up, optimised, and connected to your product catalogue.",
  "performance-marketing": "Full-funnel paid growth across Meta, Google, TikTok, and Amazon Ads — one team, one MER target.",
  "paid-search": "Google Ads Search, PMax, Shopping, and YouTube — structured for scale and clean attribution.",
  "paid-social": "Meta and TikTok Ads run against blended MER. Advantage+, TikTok Shop ads, creative testing framework.",
  seo: "Technical, on-page, content, and internal linking SEO for ecommerce brands — the compounding channel done properly.",
  "crm-email-marketing": "Klaviyo, Mailchimp and Attentive flows — welcome, cart, browse, post-purchase, winback, VIP.",
  "generative-engine-optimisation": "Optimise your brand's presence in ChatGPT, Perplexity, and Google's AI answers.",
  "answer-engine-optimisation": "Featured snippets, People Also Ask, and voice-search targeting — surface at the moment of question.",
  "conversion-optimisation": "Systematic CRO for Shopify and marketplace listings — hypothesis-driven experiments with real rigour.",
  "organic-search": "Long-form content, category enrichment, digital PR, and internal linking — organic traffic that compounds.",
  "facebook-instagram-ads": "Meta Ads across Feed, Reels, and Stories — placement-native creative, full-funnel structure.",
  "tiktok-ads": "TikTok Ads and TikTok Shop Ads — creative that survives the scroll, affiliate programme layered on top.",
  "google-meta-ads": "One team running Google and Meta against a unified MER target — no more platform-vs-platform blame.",
  "google-remarketing": "Google Display, YouTube, and Search remarketing — bring back the 96% who didn't convert the first time.",
  "google-shopping": "Google Shopping and Performance Max — feed quality, product titles, and asset groups that actually convert.",
  "product-packaging-design": "Product photography direction, packaging design, unboxing experience.",
  "uk-warehouse-storage": "Free storage in our UK warehouse for international brands launching in the UK.",
  "uk-retail-ecommerce-access": "Warm introductions to UK retail buyers and ecommerce partners — Waitrose, John Lewis, Amazon UK, Ocado.",
  "pricing-compliance": "Landed-cost modelling, UK VAT, UKCA/CE marking, product safety, and category-specific compliance.",
  "import-customs": "EORI, IOR, freight forwarding, and customs classification — we handle the paperwork end-to-end.",
  "cross-border-logistics": "Origin factory → destination FBA/3PL. FCL and LCL freight, prep centre partnerships, duty-optimised routing.",
  "international-brand-positioning": "Positioning your brand for a new market — copy, packaging, price, and story.",
};

export const SUBSERVICES = MENUS.flatMap((m) =>
  (m.items || []).map((i) => ({
    slug: i.slug,
    title: i.title,
    parent: m.label,
    parentId: m.id,
    overviewSlug: m.overviewSlug,
    description: i.customIntro || DESC[i.slug] || null,
    bullets: i.customBullets !== undefined ? i.customBullets : (B[i.slug] || []),
  }))
);

export const getSubservice = (slug) => SUBSERVICES.find((s) => s.slug === slug);
export const getOverview = (slug) => MENUS.find((m) => m.overviewSlug === slug);
export const getRelated = (slug, limit = 6) => {
  const cur = getSubservice(slug);
  if (!cur) return [];
  return SUBSERVICES.filter((s) => s.parentId === cur.parentId && s.slug !== slug).slice(0, limit);
};
