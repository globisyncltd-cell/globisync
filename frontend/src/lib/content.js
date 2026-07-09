// Central site content
export const SITE = {
  name: "GlobiSync",
  tagline: "UK Ecommerce Agency",
  phone: "+44 7309 721673",
  whatsapp: "447309721673",
  email: "hello@globisync.com",
  address: "296 Pershore Road, Birmingham, B5 7SH, United Kingdom",
  city: "Birmingham",
  founded: "2019",
  cta: "Book a Discovery Call",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/international-expansion", label: "International" },
  { to: "/fee-calculator", label: "Fee Calculator" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/blog", label: "Insights" },
  { to: "/contact", label: "Contact" },
];

export const MARKETPLACES = [
  { name: "Amazon", color: "#FF9900" },
  { name: "eBay", color: "#E53238" },
  { name: "Etsy", color: "#F16521" },
  { name: "Shopify", color: "#96BF48" },
  { name: "TikTok Shop", color: "#000000" },
  { name: "Noon", color: "#FEEE00" },
  { name: "Lazada", color: "#0F156D" },
];

// UK-focused primary services
export const SERVICES = [
  {
    id: "marketplace-management",
    number: "01",
    title: "Marketplace Management",
    short:
      "Amazon, eBay and Etsy — daily operator control, not monthly decks. We own listings, buy-box, ads, inventory and cases.",
    problem:
      "Marketplace ops needs a daily rhythm. Most sellers plateau because listings, ads, and inventory are managed by three different people who never talk.",
    approach:
      "A dedicated pod owns your account: listings and A+ content, PPC/DSP, replenishment, brand protection, promo calendar, and executive reporting.",
    included: [
      "Amazon SP/SB/SD & DSP campaigns",
      "eBay Promoted Listings & storefront",
      "Etsy Ads & seasonal calendars",
      "A+ / Brand Story / Storefront design",
      "Weekly performance readouts",
    ],
    outcome:
      "GMV growth with tightening TACoS — the two curves marketplaces actually reward.",
  },
  {
    id: "shopify-optimization",
    number: "02",
    title: "Shopify & Website Optimisation",
    short:
      "Your DTC website should be your best-performing store. We rebuild, tune, and CRO the funnel until it is.",
    problem:
      "Most Shopify stores convert at 1.4%. Great ones sit above 3.5%. The difference is theme quality, speed, and merchandising — none of which happen by accident.",
    approach:
      "We audit the funnel end-to-end, ship a conversion-first theme (or fix yours), and run a monthly CRO backlog with real experiments.",
    included: [
      "Shopify / Shopify Plus builds",
      "Speed & Core Web Vitals",
      "PDP, PLP, cart & checkout CRO",
      "Klaviyo email & SMS flows",
      "Merchandising & upsell strategy",
    ],
    outcome:
      "Higher CVR, higher AOV, higher LTV — measurable in the first quarter.",
  },
  {
    id: "seo",
    number: "03",
    title: "Ecommerce SEO",
    short:
      "The compounding channel. Content, technical, and marketplace SEO working as one system.",
    problem:
      "Ads stop when the budget stops. SEO compounds — but only if technical, on-page, and content moves happen in the same quarter.",
    approach:
      "Full technical audit, keyword mapping, content roadmap, and internal linking programme. Same rigour applied to Amazon and Etsy listings.",
    included: [
      "Technical SEO audit & remediation",
      "Keyword & topic-cluster strategy",
      "Content production (in-house)",
      "Digital PR & link acquisition",
      "Marketplace listing SEO",
    ],
    outcome:
      "Compounding organic revenue — a channel that pays you back for years.",
  },
  {
    id: "social",
    number: "04",
    title: "Social Media Marketing",
    short:
      "Content that builds an audience, not just a feed. Instagram, TikTok, Pinterest — planned and produced.",
    problem:
      "Most brands post because they feel they must. That's not a strategy — and it's why the ROI feels invisible.",
    approach:
      "Monthly editorial calendar, in-house content production, community management, and a paid-social amplification plan tied to commerce goals.",
    included: [
      "Content strategy & calendar",
      "Reels / TikTok / Shorts production",
      "Community management",
      "Influencer / creator partnerships",
      "Social listening & reporting",
    ],
    outcome:
      "A brand that actually shows up — and turns social attention into orders.",
  },
  {
    id: "paid-ads",
    number: "05",
    title: "Paid Advertising",
    short:
      "Meta, Google, TikTok, Amazon Ads — one team, one MER target, weekly optimisation.",
    problem:
      "Paid platforms fight for the same customer. Managed in silos, they cannibalise each other and inflate CAC.",
    approach:
      "One team runs your entire paid stack against a blended MER target — Meta, Google, TikTok, and Amazon PPC — with unified reporting.",
    included: [
      "Meta / Instagram ads",
      "Google Ads (Search, PMax, Shopping)",
      "TikTok Ads & TikTok Shop",
      "Amazon PPC & DSP",
      "Creative testing framework",
    ],
    outcome:
      "Falling CAC. Rising MER. A paid stack you can actually predict.",
  },
  {
    id: "account-management",
    number: "06",
    title: "Full Account Management",
    short:
      "Prefer to hand us the whole thing? We become your outsourced ecommerce team.",
    problem:
      "Founders end up doing customer service on Sunday night. That's the moment to bring in an ops partner.",
    approach:
      "We become your ecommerce team — a senior operator, marketplace expert, marketer, and designer running your accounts day-to-day.",
    included: [
      "Named senior operator",
      "Marketplace + DTC ops",
      "Marketing & content execution",
      "Weekly ops call + written report",
      "Quarterly business review",
    ],
    outcome:
      "You go back to founding. We do the operating.",
  },
];

// International expansion — secondary offer, globally neutral tone
export const REGIONS = [
  {
    code: "UK",
    name: "United Kingdom",
    marketplaces: ["Amazon UK", "eBay UK", "Etsy UK", "TikTok Shop UK", "Shopify", "Not On The High Street"],
    hero:
      "The most mature ecommerce market in Europe — high AOV, high Prime penetration, and a strong test-bed for global brands.",
    playbook: [
      "UK VAT, EORI, IOR registration",
      "UKCA / CE compliance",
      "Amazon FBA / MCF / 3PL setup",
      "PPC & DSP acquisition",
    ],
  },
  {
    code: "SEA",
    name: "Southeast Asia",
    marketplaces: ["Lazada", "Zalora", "Shopee", "TikTok Shop SEA", "Tokopedia"],
    hero:
      "The fastest-growing ecommerce region on earth. Singapore is the anchor; Malaysia, Indonesia, and the Philippines the scale.",
    playbook: [
      "LazMall & Zalora onboarding",
      "SG GST & regional 3PL",
      "Localisation across 4 markets",
      "Regional PPC + KOL launch",
    ],
  },
  {
    code: "ME",
    name: "Middle East",
    marketplaces: ["Noon", "Amazon.ae", "Amazon.sa", "Namshi", "TikTok Shop ME"],
    hero:
      "Premium AOV, Ramadan and White Friday velocity, and a marketplace duopoly that's easy to enter with the right partner.",
    playbook: [
      "Noon Express onboarding",
      "Arabic + English creative",
      "Ramadan / White Friday planning",
      "IOR & FCL logistics setup",
    ],
  },
  {
    code: "US",
    name: "United States",
    marketplaces: ["Amazon US", "Walmart", "Etsy US", "Shopify", "eBay US", "TikTok Shop US"],
    hero:
      "The single largest online market. We enter niche-first with a review-velocity + brand-defence playbook.",
    playbook: [
      "US LLC / sales-tax nexus",
      "FDA / FCC / Prop 65 review",
      "Amazon US launch + DSP",
      "Walmart-ready SKU setup",
    ],
  },
];

export const RETAIL_MARKETS = [
  {
    country: "United Kingdom",
    retailers: ["Selfridges", "John Lewis", "Waitrose", "Boots", "Holland & Barrett", "Fenwick"],
    note: "Buyer intros, distributor selection, EPOS + PIM readiness, UK compliance.",
  },
  {
    country: "Middle East (UAE / KSA)",
    retailers: ["Chalhoub Group", "Landmark Group", "Al-Futtaim", "Lulu Hypermarket", "Carrefour UAE"],
    note: "Duty-free channel entry, Ramadan planning, IOR and Arabic-market packaging.",
  },
  {
    country: "Southeast Asia",
    retailers: ["FairPrice (SG)", "Watsons (regional)", "Sephora SEA", "Guardian", "Robinsons"],
    note: "Distributor structuring, halal / HALAL / MOH clearance where relevant, KOL launch.",
  },
];

// Brands strip (logos only — no descriptions, no metrics)
export const BRANDS = [
  { name: "London RAG" },
  { name: "Shaze" },
  { name: "Livetech" },
  { name: "Tvam" },
  { name: "PlayPanda" },
];

export const HOW_IT_WORKS = [
  {
    n: "01",
    t: "Discovery Call",
    d: "A 30-minute conversation. We understand your product, current channels, and what growth means to you.",
  },
  {
    n: "02",
    t: "Strategy",
    d: "A tailored roadmap — channels, priorities, budget, and 90-day milestones. Delivered in a single working session.",
  },
  {
    n: "03",
    t: "Execution",
    d: "A senior operator and a specialist pod run the work. Weekly ops calls, one Slack channel, no offshored handoffs.",
  },
  {
    n: "04",
    t: "Reporting",
    d: "Written weekly readout. Monthly performance review. Quarterly business review with the founder.",
  },
];

export const FAQ = [
  {
    q: "How do you price your engagements?",
    a: "We run two commercial models: a fixed monthly retainer scaled to scope (starting from £300/month for focused engagements and typically ranging up to £5k/month for full account management), or a fixed-scope project fee for one-off builds. No performance-only or commission-based deals — they misalign incentives.",
  },
  {
    q: "What's the contract length?",
    a: "Retainers begin with a 3-month pilot (fixed fee, fixed scope). After the pilot we move to a rolling monthly agreement with 30 days' notice either side. No 12-month lock-ins.",
  },
  {
    q: "Do you work with brands based outside the UK?",
    a: "Yes. Our primary focus is UK-based brands, but we run international expansion engagements for brands globally — see our International Expansion page. Our team operates across UK, US, Middle East, and Southeast Asia hours.",
  },
  {
    q: "How does getting started actually work?",
    a: "Book a discovery call. If we're a fit, we send a proposal within 3 working days. Signed contract typically leads to a kick-off within 10 working days. We do not push anyone to sign — long relationships start with the right fit.",
  },
  {
    q: "Which platforms and marketplaces do you specialise in?",
    a: "Amazon (UK/US/EU/ME), eBay, Etsy, TikTok Shop, Shopify / Shopify Plus, Noon, Lazada, and Zalora. Ad platforms: Meta, Google, TikTok, Klaviyo, Amazon Ads.",
  },
  {
    q: "Do you do one-off projects or only long-term partnerships?",
    a: "Both. We handle Shopify migrations, marketplace launches, SEO audits, and international expansion projects as fixed-scope engagements. Most clients then move into a retainer for ongoing operations.",
  },
  {
    q: "Where are you based?",
    a: "Our head office is on Pershore Road, Birmingham. We work with clients across the UK and internationally.",
  },
];

