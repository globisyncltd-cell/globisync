// Central site content — edit copy here.
export const SITE = {
  name: "GlobiSync",
  tagline: "UK Ecommerce Agency · Birmingham",
  phone: "+44 7309 721673",
  whatsapp: "447309721673",
  email: "globisyncltd@gmail.com",
  address: "296 Pershore Road, Birmingham, B5 7SH, United Kingdom",
  city: "Birmingham",
  founded: "2019",
};

export const MARKETPLACES = [
  { name: "Amazon", color: "#FF9900" },
  { name: "eBay", color: "#E53238" },
  { name: "Etsy", color: "#F16521" },
  { name: "Lazada", color: "#0F156D" },
  { name: "Zalora", color: "#000000" },
  { name: "Noon", color: "#FEEE00" },
];

export const SERVICES = [
  {
    id: "strategy",
    number: "01",
    title: "Marketplace Strategy & Market Entry",
    short:
      "Which market, which marketplace, which SKU-first? We build the plan before you spend a pound.",
    problem:
      "Brand owners burn six-figure budgets launching on the wrong marketplace with the wrong catalogue. Choosing between Amazon UK, US, Noon, or Lazada is not a gut decision.",
    approach:
      "We audit your product-market fit country-by-country, map competitor pricing, forecast landed unit economics, and hand you a phased entry roadmap with owned KPIs.",
    included: [
      "Category & competitor deep-dive",
      "Landed-cost & margin modelling",
      "Marketplace prioritisation matrix",
      "6 & 12 month growth roadmap",
    ],
    outcome:
      "You launch in the right market first — protecting cash and compounding early reviews into ranking.",
  },
  {
    id: "storefront",
    number: "02",
    title: "Storefront Setup & Listing Optimization",
    short: "Conversion-grade storefronts on Amazon, Etsy, Noon, Lazada, and Zalora.",
    problem:
      "80% of listings under-index on the first three variables buyers see. Sellers lose the sale before it becomes a click.",
    approach:
      "Keyword-driven copy, native SEO for each locale, A+/EBC modules, brand-store builds, and CRO tested with real search impression share.",
    included: [
      "Amazon A+/Brand Story modules",
      "Locale-specific keyword sets (UK, US, SG, HK, GCC)",
      "Studio-grade product imagery direction",
      "Variation strategy & backend attributes",
    ],
    outcome:
      "Higher CTR, higher CVR, lower TACoS — measurable within the first 30 days.",
  },
  {
    id: "management",
    number: "03",
    title: "Full-Service Marketplace Management",
    short:
      "We run the account like operators, not consultants — daily P&L ownership.",
    problem:
      "Marketplace ops needs a daily rhythm — advertising, buy-box, inventory, reviews, cases, promos. It's a full team, not a monthly retainer of decks.",
    approach:
      "A dedicated account team owns your KPIs — advertising, replenishment, promo calendar, brand protection, and weekly executive reporting.",
    included: [
      "PPC & DSP campaign management",
      "Inventory & replenishment planning",
      "Brand-protection & IP enforcement",
      "Buy-box & pricing automation",
      "Weekly performance readouts",
    ],
    outcome:
      "GMV growth with tightening ACoS — the two curves marketplace investors actually reward.",
  },
  {
    id: "logistics",
    number: "04",
    title: "Cross-Border Logistics & Compliance",
    short:
      "India-to-UK, India-to-US, India-to-GCC — the paperwork we've done a hundred times.",
    problem:
      "VAT registration, EORI, IOR partners, product safety marking (UKCA/CE), and FDA labelling stop 40% of Indian brands at the border.",
    approach:
      "We plug you into pre-vetted freight, 3PL, IOR and VAT partners; own the compliance calendar; and de-risk your first shipment door-to-warehouse.",
    included: [
      "UK VAT & EORI registration",
      "US sales-tax & FDA/FCC labelling",
      "FBA / MCF / 3PL selection",
      "UKCA / CE / customs classification",
      "Duty & landed-cost modelling",
    ],
    outcome:
      "First container lands compliant, on time, and stocked into FBA before your ad spend goes live.",
  },
];

export const MARKETS = [
  {
    code: "UK",
    name: "United Kingdom",
    hero:
      "The UK is the most brand-friendly marketplace in Europe — high AOV, mature Prime base, and a proven route for Indian D2C brands to test Europe.",
    stats: [
      { k: "Amazon UK Prime members", v: "~15M" },
      { k: "Avg. category CVR", v: "9–13%" },
      { k: "Typical launch runway", v: "60–90 days" },
    ],
    playbook: [
      "UK VAT & EORI setup (India-based sellers)",
      "UKCA/CE compliance & IOR",
      "Amazon UK, eBay UK, Etsy UK listings",
      "Sponsored Products + DSP for repeat buyers",
    ],
    seoLine:
      "Searching how to sell on Amazon UK from India? We handle VAT, EORI, IOR, freight, listing, PPC — the full stack.",
  },
  {
    code: "US",
    name: "United States",
    hero:
      "The single largest ecommerce economy — but the most competitive. We enter with a niche-first, review-velocity playbook.",
    stats: [
      { k: "Amazon US GMV share", v: "~38%" },
      { k: "Avg. review velocity target", v: "40+/mo" },
      { k: "Typical launch runway", v: "75–120 days" },
    ],
    playbook: [
      "US LLC / sales-tax nexus guidance",
      "FDA / FCC / Prop 65 labelling review",
      "Amazon US, Etsy US, Walmart-ready SKUs",
      "PPC + Amazon DSP retargeting",
    ],
    seoLine:
      "For Indian brands entering the US, our Birmingham team acts as your operating layer from day one.",
  },
  {
    code: "SG",
    name: "Singapore",
    hero:
      "Southeast Asia's testbed — high-income, high-trust, and the perfect entry point for Lazada and Zalora regional expansion.",
    stats: [
      { k: "Digital buyer penetration", v: "~85%" },
      { k: "Cross-border ecommerce share", v: "55%+" },
      { k: "Typical launch runway", v: "45–75 days" },
    ],
    playbook: [
      "Lazada LazMall onboarding",
      "Zalora brand-partner listing",
      "SG GST & customs guidance",
      "Regional 3PL & last-mile setup",
    ],
    seoLine:
      "Selling in Singapore is our springboard for scaling clients into Malaysia, Indonesia, and the Philippines.",
  },
  {
    code: "HK",
    name: "Hong Kong",
    hero:
      "A duty-friendly gateway with disproportionate purchasing power — ideal for premium apparel, beauty, and lifestyle brands.",
    stats: [
      { k: "Ecomm penetration", v: "~78%" },
      { k: "Zero import duty on most SKUs", v: "✓" },
      { k: "Typical launch runway", v: "45–60 days" },
    ],
    playbook: [
      "HKTVmall & Zalora HK onboarding",
      "Local warehousing partners",
      "Traditional Chinese localisation",
      "Meta + KOL launch package",
    ],
    seoLine:
      "Hong Kong lets premium Indian brands earn Western AOV without Western compliance overhead.",
  },
];

export const CASE_STUDIES = [
  {
    slug: "handloom-to-amazon-uk",
    title: "From Handloom Studio to Amazon UK Bestseller",
    industry: "Home & Textiles · India → UK",
    metric: "+312%",
    metricLabel: "GMV in 9 months",
    challenge:
      "A Jaipur-based handloom brand was reaching Indian D2C ceiling. They wanted the UK, but had zero VAT footprint, zero listings, and zero reviews.",
    approach:
      "We handled UK VAT and EORI, shipped a pilot container to Amazon FBA UK, launched 22 SKUs with locale-native copy, and ran a phased Sponsored Products + Vine strategy.",
    outcome:
      "Bestseller badge in two subcategories inside 6 months. TACoS settled at 11.4% by month 9.",
    stack: ["Amazon UK", "FBA", "Vine", "Sponsored Products"],
  },
  {
    slug: "wellness-brand-noon-gcc",
    title: "Ayurvedic Wellness Brand — Noon GCC Launch",
    industry: "Wellness · India → UAE/KSA",
    metric: "6.4x",
    metricLabel: "ROAS in Q1",
    challenge:
      "Founder-led wellness brand had strong Instagram traction in India but no infrastructure to sell in the GCC.",
    approach:
      "Set up Noon Express onboarding, ran locale-specific Arabic + English creatives, and layered Meta paid to Noon landing pages during Ramadan.",
    outcome:
      "6.4x blended ROAS across Ramadan window; 3 SKUs stocked into Noon FCs by month 2.",
    stack: ["Noon", "Meta Ads", "Arabic localisation"],
  },
  {
    slug: "premium-jewellery-etsy-us",
    title: "Premium Silver Jewellery — Etsy US Scale-Up",
    industry: "Jewellery · India → US",
    metric: "+184%",
    metricLabel: "MoM revenue in 4 months",
    challenge:
      "Small Etsy US store stuck at $8k/month for 18 months, poor listing SEO, and no ad strategy.",
    approach:
      "Full listing rebuild, Etsy Ads structuring, seasonal campaign calendar, and off-Etsy Pinterest traffic funnel.",
    outcome:
      "Crossed $22k/month by month 4; conversion rate lifted from 1.9% to 4.7%.",
    stack: ["Etsy", "Etsy Ads", "Pinterest", "Listing SEO"],
  },
];

export const TEAM = [
  {
    name: "Shweta Chauhan",
    role: "Founder & CEO",
    linkedin: "https://www.linkedin.com/in/shwetachauhanuk/",
    bio: "Shweta founded GlobiSync to bridge ambitious Indian brands with global marketplace opportunity. She leads client strategy, partnerships, and the Birmingham operations desk.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sunny Chauhan",
    role: "Lead Consultant · Marketplace Operations",
    linkedin: "https://www.linkedin.com/in/sunnychauhanuk/",
    bio: "Ten-plus years running marketplace P&Ls across Amazon UK, US, and Noon. Sunny owns client account performance, ad efficiency, and inventory strategy.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Zain Alvi",
    role: "Advisor · Cross-Border Growth",
    linkedin: "https://www.linkedin.com/in/zainalvi/",
    bio: "Ecommerce operator and advisor with deep GCC and Southeast Asia expertise. Zain guides market-entry sequencing and premium-brand positioning for our roster.",
    image:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&w=800&q=80",
  },
];

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/markets", label: "Markets" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
];
