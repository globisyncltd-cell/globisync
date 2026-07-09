// 35 SEO blog posts for GlobiSync.
// Each post: slug, title, excerpt, category, keywords, author, date, readTime, image, body (markdown-ish)
// Body uses \n\n paragraph breaks and ## for H2. Rendered by BlogPost.jsx.

const A = "Sunny Chauhan";
const B = "Shweta Chauhan";
const C = "Zain Alvi";

// Rotating unsplash images (topic-appropriate, non-generic)
const IMG = {
  amazon: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=1400&q=70",
  shopify: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1400&q=70",
  seo: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1400&q=70",
  ads: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1400&q=70",
  intl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1400&q=70",
  retail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=70",
  ops: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=70",
};

export const BLOG = [
  {
    slug: "ai-agents-ecommerce-2026",
    title: "AI agents for ecommerce: what's actually shipping in 2026",
    excerpt: "The hype cycle for AI agents has finally started delivering shippable tools. Here's what we're using across client accounts — and what's still vapourware.",
    category: "Operations",
    keywords: ["AI agents ecommerce", "ecommerce automation 2026", "ChatGPT ecommerce"],
    author: A, date: "2026-02-06", readTime: "7 min", image: IMG.ops,
    body: `In 2024, "AI agent" meant a demo. In 2026, it means a working part of the ecommerce ops stack for brands that were early. Here's what's actually shipping — and what's still vapourware.

## What genuinely works today

Customer service triage (Zendesk AI, Intercom Fin) is the single most mature use case. It handles 40-60% of tier-one queries reliably in most DTC categories.

Amazon listing generation from a product brief works — but requires human editing before publishing. It saves 60% of the time, not 90%.

PPC bid management via native platform AI (Amazon Advertising, Google PMax) outperforms hand-tuning for accounts with clean baseline data.

## What still isn't ready

Fully autonomous copywriting agents at brand-voice level. They can produce competent listings but not distinctive ones.

Multi-step ops automations (order → inventory → replenishment) still need human-in-the-loop.

Creative production via Sora 2 / Runway is beginning to feed the ad testing framework, but human curation of outputs is essential.

## Where the leverage actually sits

Founders who use AI to compress their own senior time — writing briefs, summarising reports, drafting responses — get compounding returns. Founders who try to replace teams get compounding regret. Choose accordingly.`
  },
  {
    slug: "tiktok-shop-uk-2026-state-of-play",
    title: "TikTok Shop UK in 2026: mid-year state of play",
    excerpt: "TikTok Shop UK grew faster than any marketplace we've tracked. Here's where it stands mid-2026 — and what to change if you launched in 2024.",
    category: "Paid Ads",
    keywords: ["TikTok Shop UK 2026", "TikTok Shop growth", "sell on TikTok UK"],
    author: A, date: "2026-02-04", readTime: "6 min", image: IMG.ads,
    body: `TikTok Shop UK has now scaled past most people's early-adopter thesis. Categories that once felt marginal on the platform now do six-figure days consistently. Here's the mid-2026 snapshot.

## The three category tiers

Tier 1 (breakout): beauty, food, home fragrance, apparel. Live selling is the norm. Affiliates dominate.

Tier 2 (growing): supplements, pet, small electricals, kitchenware. Affiliate seeding still cheap.

Tier 3 (still hard): high-consideration or high-price. Buyers scroll past.

## What's changed since 2024

Take-rate discipline: TikTok's platform fee climbed. Model your unit economics again.

Affiliate saturation in beauty and food: commissions have crept up to 20-25% to attract quality creators.

Live selling professionalisation: brands with two-hour weekly lives dominate.

## What still works

Affiliate seeding to sub-100k-follower TikTokers. Cheap, plentiful, honest conversion.

Boosting affiliate content via Spark Ads. Compounds on organic reach.

## What's stopped working

Cold Meta-style creative that tries to sell in 15 seconds. TikTok buyers reward native-feeling content.

Live selling from an office desk with poor lighting and no scripting. Amateur hour is over.

## The one thing every UK brand should do

Enrol in the TikTok Shop Affiliate programme today, even if you don't sell heavily on the platform. It's the fastest-to-scale growth channel of the year.`
  },
  {
    slug: "amazon-rufus-changing-discovery",
    title: "Amazon Rufus: how the AI assistant is changing product discovery",
    excerpt: "Amazon Rufus quietly became one of the most impactful ranking shifts on the platform. Here's how it works and how to optimise for it.",
    category: "Amazon",
    keywords: ["Amazon Rufus", "Amazon AI assistant", "Amazon listing optimisation"],
    author: A, date: "2026-02-02", readTime: "7 min", image: IMG.amazon,
    body: `Amazon Rufus — the AI shopping assistant embedded in the Amazon UK app and site — is now driving a meaningful share of product-detail-page visits. It's also quietly changed what a "good listing" looks like.

## What Rufus actually is

An LLM-powered assistant that answers shopper questions in natural language, referencing your listing content (title, bullets, A+, reviews, Q&A) to compose responses.

## Why it matters

Rufus recommends products conversationally. That means your listing content needs to answer buying questions — not just describe features. If your bullets read like a spec sheet, Rufus can't pitch you.

## What to change in your listings

Bullets need concrete use cases and buyer language, not spec bullets.
A+ content needs question-answer framing.
Q&A section needs seeding from actual buyer questions.
Reviews with detailed use-case comments outperform short ones.

## The compounding effect

Rufus rewards listings with structured, question-first content — which is also what human buyers reward. There's no trade-off. Do the work once, both channels win.

## Where sellers are missing the boat

Still writing keyword-stuffed bullets. Rufus reads them, discards them, and picks the competitor with clean content.

Ignoring Q&A. Even seeded Q&A (from your own team, disclosed) meaningfully improves Rufus discoverability.`
  },
  {
    slug: "google-ai-overviews-ecommerce-seo",
    title: "How Google's AI Overviews are hitting ecommerce SEO",
    excerpt: "AI Overviews eat search real estate at the top of the SERP. Here's what we're seeing across UK ecommerce clients — and how to adapt.",
    category: "SEO",
    keywords: ["Google AI Overviews", "AI Overviews SEO", "ecommerce SEO 2026"],
    author: B, date: "2026-01-30", readTime: "6 min", image: IMG.seo,
    body: `Google's AI Overviews now appear on a large chunk of ecommerce-adjacent queries. For informational content, they've compressed click-through rates significantly. For transactional queries, they're barely a factor. Here's what we're seeing.

## Where AI Overviews hurt

"How to" and "best" queries lose 30-50% of clicks to AI Overview summaries. If your top-of-funnel content strategy relied on these, it's under structural pressure.

## Where AI Overviews barely register

Direct product searches ("[brand] [product]") and comparison queries with brand names in them. AI Overviews rarely surface — the SERP still favours direct commercial results.

## What to do

Rebalance your content mix: less "10 best X" content, more genuine comparison, buying guides, and category deep-dives that AI Overviews cite (and therefore drive brand awareness) even when they don't drive direct clicks.

Structure content for citation: numbered lists, clear H2s, direct answers in the first paragraph. Ranked citations in AI Overviews look and feel like credibility.

## The hidden opportunity

Being cited in an AI Overview is a brand-visibility win even without the click. If your brand appears as a source across a dozen relevant queries, it becomes the default consideration.

## Measurement

Track "cited-in AI Overview" as a KPI, not just organic clicks. Tools like Semrush and Ahrefs now flag this. Report it monthly alongside brand-search volume.`
  },
  {
    slug: "post-brexit-vat-changes-2026",
    title: "Post-Brexit VAT changes affecting UK ecommerce sellers in 2026",
    excerpt: "Two significant VAT adjustments landed in 2026. Here's what changed, who it affects, and how to update your accounting.",
    category: "International",
    keywords: ["UK VAT 2026", "post-Brexit VAT", "UK ecommerce compliance"],
    author: C, date: "2026-01-28", readTime: "6 min", image: IMG.intl,
    body: `Two VAT changes in 2026 matter for UK ecommerce sellers — one affecting overseas sellers, one affecting UK-based B2B trade. Here's the plain-English version.

## Change one: the £135 threshold

The old £135 rule (below which marketplaces collect VAT on behalf of overseas sellers) has been reviewed. Higher-value B2B orders now have a clarified process — check your marketplace's updated seller policy for details.

## Change two: reverse charge for B2B services

Reverse charge rules for cross-border services have been tightened. If you're a UK business receiving marketing, agency, or software services from outside the UK, the accounting treatment has changed.

## Who's affected

Overseas sellers into the UK marketplace: broadly unchanged for orders under £135. Above that, clearer rules.

UK businesses buying international services: reverse charge accounting is now required for a broader range of digital and marketing services.

## What to do

Update your bookkeeping software's default VAT treatment on international invoices.
Ask your accountant to run a VAT compliance review before filing your next return.
If you're an overseas seller, revisit your marketplace onboarding guides — they now reflect the updated rules.

## The compliance risk

HMRC continues to actively enforce VAT compliance for ecommerce sellers. A three-year backdated assessment for missed VAT can end a small business. Investing £500 in an accountant review now is cheaper than any alternative.`
  },
  {
    slug: "sustainable-packaging-uk-dtc",
    title: "Sustainable packaging for UK DTC brands: what buyers actually want",
    excerpt: "Consumer research keeps saying sustainability matters. Their purchasing behaviour is more nuanced. Here's what we're seeing in practice.",
    category: "Operations",
    keywords: ["sustainable packaging DTC", "eco packaging UK", "sustainable ecommerce"],
    author: B, date: "2026-01-26", readTime: "6 min", image: IMG.ops,
    body: `Sustainability is a marketing lever every brand claims to care about. The purchasing reality across our UK DTC roster is more nuanced.

## What buyers reward with money

Recyclable outer packaging: universally expected. Not doing this loses trust; doing it doesn't win business.

Genuine reduced-plastic messaging: measurable CVR lift for beauty, pet, and food brands.

Reusable inner packaging: rewarded in gifting and premium categories.

## What buyers don't reward

Compostable packaging that requires industrial composting. Buyers can't compost it and know it.

"Carbon neutral" claims without documentation. Buyers now recognise greenwashing patterns.

Reduced-packaging that damages the product experience. Unboxing still matters.

## The middle path

Right-size boxes for the product. Kill void fill unless necessary. Use recycled kraft paper. Print less. Recyclable everywhere. Document the changes clearly on the PDP.

## What actually moves needle

A one-sentence PDP claim: "Ships in fully recyclable, plastic-free packaging" moves CVR 0.3-0.8% across categories we've tested. It's specific, credible, and buyer-friendly.

## The one thing to stop

Adding a "sustainability" page to your website and then never touching it. Buyers audit it in 30 seconds. If it's thin, they discount the whole brand claim.`
  },
  {
    slug: "end-of-cookies-ecommerce-adapting",
    title: "The end of third-party cookies: how ecommerce brands are adapting",
    excerpt: "Chrome finally deprecated third-party cookies. Here's what actually broke, what didn't, and how the sharpest ecommerce brands are re-architecting attribution.",
    category: "Paid Ads",
    keywords: ["third party cookies", "cookieless tracking", "GA4 ecommerce"],
    author: A, date: "2026-01-24", readTime: "7 min", image: IMG.ads,
    body: `Chrome's phased deprecation of third-party cookies is now largely complete. The internet did not, in fact, break. Here's what actually changed.

## What broke

Cross-site retargeting is meaningfully less effective. Frequency capping across platforms is harder. Some third-party attribution tools (older ones) lost accuracy.

## What didn't break

First-party tracking on your own site works exactly as before. Server-side tagging via GTM Server or Elevar continues to work well. Platform-side pixels (Meta CAPI, TikTok Events API) have quietly become the primary attribution layer.

## What the sharpest brands are doing

Server-side tagging: 90%+ of our clients are now running conversions API + server-side GTM.

First-party data enrichment: sending Meta CAPI enriched customer data (hashed email, phone, address) alongside events, dramatically improving match rate.

Modelled attribution: accepting that platform ROAS numbers are estimated, and reconciling to MER (Marketing Efficiency Ratio) as the source of truth.

## What to stop doing

Trusting last-click GA4 attribution. Trusting platform ROAS in isolation. Believing there's a "single source of truth" attribution tool — there isn't.

## The tactical implication

Your ad account structures matter less than ever. Your creative and your first-party data matter more than ever. Reallocate budget accordingly.`
  },
  {
    slug: "shopify-markets-vs-headless",
    title: "Shopify Markets vs headless: choosing your international architecture",
    excerpt: "Two credible paths for international ecommerce on Shopify — Markets or headless. Here's how to decide.",
    category: "Shopify",
    keywords: ["Shopify Markets", "headless Shopify", "international ecommerce architecture"],
    author: A, date: "2026-01-22", readTime: "7 min", image: IMG.shopify,
    body: `When you're ready to scale a Shopify brand internationally, two architectures now compete: Shopify Markets (native multi-currency + geolocation) or headless (custom frontend with Shopify as the commerce engine). Both work. Neither is right for everyone.

## When Shopify Markets is right

You want speed to market. You value first-party support and easy internal training. You're launching 2-5 markets with mostly-consistent SKUs. You can live with theme-level design constraints.

## When headless is right

You have a demanding brand-design requirement. You need edge-cached performance for a global audience. You're integrating multiple systems (loyalty, CMS, custom checkout) at scale. You have engineering resource to maintain it.

## The cost comparison, honestly

Shopify Markets: your existing Plus licence + theme work + Markets Pro fees. Total incremental cost: £5k-£25k depending on complexity.

Headless: platform cost (Vercel/Netlify), CMS (Sanity/Contentful), dev team (£30k-£120k build, ongoing maintenance).

## The middle path

Shopify Markets to prove international demand. Migrate to headless when the traffic and revenue justify the engineering investment.

## Where founders regret their choice

Going headless before proving demand ("we might scale, so let's build for it"). Staying on Markets after outgrowing it ("we've customised so much we're de facto headless now").

Match architecture to today's problem, not next year's ambition.`
  },
  {
    slug: "amazon-business-uk-b2b-marketplace",
    title: "Amazon Business (B2B) UK: the underrated marketplace for 2026",
    excerpt: "Most sellers focus on Amazon consumer. But Amazon Business UK is quietly a serious B2B channel. Here's what to know.",
    category: "Amazon",
    keywords: ["Amazon Business UK", "B2B Amazon", "Amazon B2B seller"],
    author: A, date: "2026-01-20", readTime: "6 min", image: IMG.amazon,
    body: `Amazon Business UK is the B2B version of the Amazon marketplace — and it's grown quietly into a serious revenue channel for the right sellers.

## What Amazon Business actually is

A B2B marketplace layer on top of standard Amazon. Businesses register, get access to B2B-specific pricing, tiered quantity discounts, tax-free invoicing, and specialist categories (industrial, medical, office).

## Why it's underrated

Higher AOV than consumer Amazon. Lower CAC than typical B2B channels. Less price-sensitive buyers (they're spending company money). Repeat purchase rate is genuinely high in office/consumables categories.

## Who it works for

Products with genuine B2B use cases: office supplies, industrial equipment, cleaning products, healthcare, safety.

Products where volume discounts make sense.

Established consumer brands looking to expand into commercial channels.

## Who it doesn't work for

Purely consumer-lifestyle brands. Products with no realistic B2B use. Sellers unwilling to offer tiered quantity pricing.

## The tactical setup

Enable Amazon Business Seller Program in Seller Central. Set B2B-specific pricing (typically 5-15% below consumer for volume). Enable quantity discounts at 2, 5, 10, 25 unit tiers. Update titles/bullets to reflect B2B use cases where applicable.

## The one thing to know

Amazon Business buyers behave differently — they research more, buy larger, and repeat-buy predictably. Adjust your listing content, service level, and post-purchase experience to reflect that.`
  },
  {
    slug: "instagram-vs-tiktok-uk-brands-2026",
    title: "Instagram vs TikTok in 2026: where UK brands should invest first",
    excerpt: "Both platforms matter. But not equally, and not for every brand. Here's the framework we use across client engagements.",
    category: "Paid Ads",
    keywords: ["Instagram vs TikTok", "social media UK brands", "TikTok Shop Instagram Shopping"],
    author: A, date: "2026-01-18", readTime: "6 min", image: IMG.ads,
    body: `Instagram vs TikTok isn't a religious choice. It's a category and life-stage decision.

## Where TikTok wins outright

Beauty, food, fashion under £80 AOV, novelty categories. Younger demographics (under 35). Products that demo well in 15 seconds.

## Where Instagram wins outright

Higher AOV lifestyle (over £150), interiors, wellness, considered categories. Older demographics (35+). Products that need story and context.

## Where they compete

Mid-AOV DTC (£40-£100). Fashion, accessories, home. Here you should run both, but with different creative playbooks.

## The Instagram edge that's underrated

Reels are now more effective than posts. Instagram Shopping has quietly become better-integrated than it was in 2023. Stories drive intent-heavy traffic.

## The TikTok edge that's underrated

TikTok Shop's affiliate programme scales in a way Instagram can't match. Live selling drives measurable GMV. Creator-led content converts.

## The decision framework

If you're under-25 skewed and under-£80 AOV, TikTok first, Instagram support.

If you're over-30 skewed and over-£100 AOV, Instagram first, TikTok test.

If you're in between, run both — but resource them differently. TikTok is content-volume-driven; Instagram is craft-driven.`
  },
  {
    slug: "warehouse-automation-3pl-vs-inhouse-2026",
    title: "Warehouse automation for SMEs: 3PL vs in-house in 2026",
    excerpt: "Warehouse automation for SMEs is finally viable, but the decision to insource or outsource has changed. Here's the current calculus.",
    category: "Operations",
    keywords: ["warehouse automation ecommerce", "3PL vs in-house", "SME logistics"],
    author: C, date: "2026-01-16", readTime: "7 min", image: IMG.ops,
    body: `Warehouse automation used to require £2m+ of investment. In 2026, entry-level pick-and-pack automation is £150-£400k, dramatically shifting the SME decision.

## When in-house is now viable

Above 500 orders/day, in-house automated fulfilment starts to pencil.

If order volume is consistent (not seasonal-spike-driven), automation ROI improves.

If you have space and a willingness to hire operational leadership, the returns are real.

## When 3PL still wins

Below 500 orders/day: 3PL almost always cheaper.

Seasonal businesses: 3PL absorbs the peak-load risk.

International multi-market brands: 3PL networks provide multi-location coverage in one contract.

## The hybrid model

Primary UK 3PL for domestic ecommerce. Small in-house team for sample fulfilment, VIP orders, and returns processing. Best of both.

## What automation actually costs today

Entry-level goods-to-person systems: £150-£300k. Sortation for returns: £50-£150k. Automated packing station: £40-£90k per station.

## The decision framework

If your unit-fulfilment cost through a 3PL is above £2.50 per unit and you do 500+ orders/day, model in-house.

Below that, stay 3PL and focus your capital on marketing.

## The mistake most SMEs make

Insourcing too early. Automation makes sense at scale, not before. The right time is when your 3PL invoice is your third-biggest cost line and volumes are predictable.`
  },
  {
    slug: "klaviyo-ai-segmentation-worth-turning-on",
    title: "Klaviyo AI segmentation: what's worth turning on in 2026",
    excerpt: "Klaviyo shipped a dozen new AI features. Not all of them matter. Here's the shortlist worth activating on your account.",
    category: "Shopify",
    keywords: ["Klaviyo AI", "Klaviyo segmentation", "email marketing 2026"],
    author: A, date: "2026-01-14", readTime: "5 min", image: IMG.shopify,
    body: `Klaviyo's AI features multiplied in 2025-26. Most are useful. Some are gimmicks. Here's what to prioritise.

## Turn on immediately

Predictive gender inference: cleaner segmentation, better creative targeting. Free lift.

Predicted lifetime value: enables genuine VIP tiering. Essential for programs.

Predicted next order date: powers winback timing better than fixed-day rules.

## Turn on with caution

AI subject lines: works for high-frequency lists, less useful for lower-cadence programmes.

AI send time optimisation: real lift for larger lists (10k+), marginal for smaller.

Product recommendation blocks: good default, but check they're not showing out-of-stock products.

## Don't bother yet

AI-generated email body copy: currently produces generic output that hurts brand voice. Human writers still win.

Auto-generated flow suggestions: sometimes recommends flows that duplicate existing ones. Human oversight essential.

## The one setup mistake

Turning on multiple AI features simultaneously without measuring impact. Turn on one, test for 30 days, then move to the next. Otherwise you can't tell what's actually driving lift.

## The ROI story

Well-tuned Klaviyo drives 25-35% of DTC revenue for our clients. Poorly-tuned Klaviyo drives 5-8%. The AI features close about a third of that gap. Worth the effort.`
  },
  {
    slug: "middle-east-ramadan-white-friday-2026",
    title: "Middle East ecommerce 2026: Ramadan and White Friday operator guide",
    excerpt: "Two moments define the Middle East ecommerce calendar. Getting them right is worth half your year. Here's the operating playbook.",
    category: "International",
    keywords: ["Middle East ecommerce", "Ramadan sales", "White Friday Noon"],
    author: C, date: "2026-01-12", readTime: "7 min", image: IMG.intl,
    body: `Ramadan and White Friday together drive 40-50% of annual ecommerce GMV for most brands operating in UAE and Saudi. Missing either is missing your year.

## Ramadan 2026: the timing

Ramadan falls in February-March 2026. Ramadan-linked buying starts 3-4 weeks earlier — from mid-January. Pre-Ramadan gifting spikes in the final week before Ramadan begins.

## What sells during Ramadan

Gifting, home decor, home fragrance, food & confectionery, modest fashion, beauty (particularly premium and gifting formats), abaya, dates, dry fruits.

## What doesn't

Nightlife-adjacent products. Products that clash with religious observance. Impulse-buy categories geared to Western holidays.

## Operational preparation

Inventory in-market 8-10 weeks ahead. Ramadan-themed creative ready 6 weeks ahead. Increase ad spend 40-60% during Ramadan week itself.

## White Friday: the November event

Noon and Amazon's answer to Black Friday. Runs the full last week of November plus first week of December.

## What matters for White Friday

Deal registration on Noon: submit 4-6 weeks ahead. Non-registered deals get discounted visibility.

Amazon LD (Lightning Deal): apply 4 weeks ahead for the biggest days.

Ad spend: increase 50-80% for the peak window. CPCs rise but conversion rates spike proportionally.

## The one thing most brands miss

Ramadan gift packs. Products bundled specifically for gifting outperform standard product listings by 2-3x during the season. Design once, sell every year.`
  },
  {
    slug: "founder-led-brand-story-amazon",
    title: "How to run a founder-led brand story on Amazon",
    excerpt: "Amazon's Brand Story module is underused by most brand-registered sellers. Founder-led narratives outperform generic ones. Here's the playbook.",
    category: "Amazon",
    keywords: ["Amazon Brand Story", "founder brand Amazon", "Amazon storytelling"],
    author: A, date: "2026-01-10", readTime: "5 min", image: IMG.amazon,
    body: `Amazon's Brand Story module sits at the top of every brand-registered PDP. Most sellers fill it with generic corporate messaging. Founder-led narratives measurably outperform.

## Why founder-led wins

Buyers on Amazon still crave authenticity signals. A founder's face, story, and reason-for-existing on the PDP raises trust and lifts CVR 2-5% on brand-search traffic.

## What to include

A photo of the founder (or founding team). A short "why we exist" paragraph. A visible signature or handwritten note element.

The mission — but grounded, not corporate. "We started this because..." beats "Our mission is to..."

Category-specific proof points. Awards, press mentions, buyer testimonials.

## What to leave out

Long-form corporate history that reads like an About Us page. Buyers scan, they don't read.

Stock photography of teams. Buyers spot it and discount the message.

Corporate values statements. They read as inauthentic.

## The mobile-first rule

70%+ of Amazon UK traffic is mobile. Design the Brand Story for a 5-inch screen first. Test it on mobile. Iterate.

## Refresh cadence

Update the Brand Story every 6-9 months. Fresh photos, updated messaging, new proof points. Buyers who repeat-visit notice.

## The compounding effect

A well-crafted Brand Story lifts trust across the entire product catalogue, not just the ASIN currently being viewed. It's a whole-brand asset that costs zero to maintain once built.`
  },
  {
    slug: "retail-to-dtc-pricing-strategy",
    title: "The economics of retail-to-DTC: pricing without cannibalising channel",
    excerpt: "Retail brands launching DTC face a pricing paradox. Match retail and you lose margin. Discount and you upset retailers. Here's the middle path.",
    category: "Retail",
    keywords: ["retail to DTC", "channel pricing strategy", "MAP policy DTC"],
    author: C, date: "2026-01-08", readTime: "6 min", image: IMG.retail,
    body: `Retail brands launching a DTC website almost always hit the same trap: how to price without upsetting retail partners or damaging DTC unit economics.

## Rule one: never undercut retail on RRP

If your retail partners can buy at £14 wholesale and sell at £30 RRP, your DTC price on the same SKU shouldn't be £25. That erodes retailer margin and invites conflict.

## Rule two: differentiate the SKU

Sell exclusive bundles, sizes, or variants direct that retailers don't stock. Same product, different SKU, different pricing logic.

## Rule three: subscription as a discount vehicle

Retailers rarely mind DTC subscription discounts because subscription buyers aren't people who would have bought from retail anyway.

## The MAP policy question

Minimum Advertised Price policies protect retail relationships and DTC pricing consistency together. Every scaling brand needs one. Enforce it — including on your own DTC channel.

## The exclusive-first-launch tactic

Launch new products DTC-first for a defined window (60-90 days) before retail listing. Justifies higher DTC price early, builds direct-relationship customers, and gives retailers a proof-of-demand pitch.

## Where founders lose

Discounting DTC by 20-30% to drive volume, then losing retailer meetings six months later because buyers checked your website. Retailers do this due diligence. Every time.

## The one non-negotiable

Full pricing transparency internally — sales, marketing, and retail teams all know the DTC and RRP structures. Misalignment leaks into buyer conversations and costs listings.`
  },
  {
    slug: "voice-commerce-uk-2026",
    title: "Voice commerce in the UK: is it finally here in 2026?",
    excerpt: "Every year for the last five, someone declared voice commerce ready. Is 2026 different? A grounded look at what's actually happening.",
    category: "Operations",
    keywords: ["voice commerce UK", "Alexa shopping", "voice search ecommerce"],
    author: B, date: "2026-01-06", readTime: "5 min", image: IMG.ops,
    body: `Voice commerce has been "about to arrive" since 2019. In 2026, it's arrived in narrow segments — but not as broadly as evangelists predicted.

## Where voice commerce genuinely works today

Repeat orders of consumables via Alexa/Google Home. "Reorder my usual laundry detergent" works reliably for buyers with established purchase patterns.

Simple product queries during hands-busy tasks: cooking, gardening, exercising. "Add batteries to my basket."

Voice-driven search for products in decision phase, particularly on mobile.

## Where voice commerce still doesn't work

Considered purchases. Nobody buys a jacket by voice.

Comparison shopping. Voice interfaces struggle to surface options.

Complex categories. Anything requiring visual evaluation.

## The Rufus/AI Overview overlap

Voice commerce on Amazon is now largely voice-driven Rufus interactions. The AI assistant handles the interpretation. Sellers optimising for Rufus are inadvertently optimising for voice.

## What to actually do

Optimise for voice-search question phrasing in your listing bullets and Q&A: "How long does the battery last?" not just "12-hour battery life."

Ensure your bestselling consumables are easy to reorder with a simple phrase. Check "Reorder [product name]" as a voice command works on Alexa and returns your product.

## The realistic 2026 view

Voice is a channel-augmentation tool, not a channel-replacement. Optimise for it as a percentage of your buyer's journey, not as a standalone strategy.`
  },
  {
    slug: "how-to-sell-on-amazon-uk-founder-guide-2026",
    title: "How to sell on Amazon UK: a founder's guide for 2026",
    excerpt: "Launching on Amazon UK is a well-worn path — but it's still where most brands lose six months and six figures. Here's the founder-level playbook.",
    category: "Amazon",
    keywords: ["how to sell on Amazon UK", "Amazon UK launch", "Amazon agency UK"],
    author: A, date: "2026-01-14", readTime: "8 min", image: IMG.amazon,
    body: `Amazon UK is the single most efficient place to test ecommerce demand in Europe. It's also the marketplace where more brands fail than any other — usually because they treat "launching" as a listing exercise rather than an operating one.

## The four launch pillars

Every successful Amazon UK launch has the same four ingredients: a UK entity or IOR partner, VAT registration, a compliant catalogue (UKCA/CE where relevant), and a review-velocity plan. Skip any of them and you're launching against yourself.

## Structuring your catalogue

Amazon rewards variation-family SKUs that share reviews. Do not launch child ASINs as standalone parents unless you're deliberately isolating a hero. Plan your variation strategy on paper before anyone touches Seller Central.

## Advertising from day one

Sponsored Products from launch. Sponsored Brands after the storefront goes live. Sponsored Display and DSP once you have 90 days of clean sales data. Do not open every ad type on week one — you'll bleed budget while learning.

## The 90-day scorecard

Track four metrics weekly: unit velocity, TACoS, review count, and Buy Box percentage. Nothing else matters in the first 90 days. If those four are moving in the right direction, expansion (Sponsored Brands, DSP, international) becomes trivial.

## When to bring in an agency

If you're a founder and you find yourself doing Amazon PPC on a Sunday night, you're already past the point where an agency pays for itself. The maths are simple: an experienced marketplace operator will typically recover their fee in advertising efficiency alone within two months.`
  },
  {
    slug: "shopify-plus-vs-shopify-which-to-choose",
    title: "Shopify Plus vs standard Shopify: how to decide in 2026",
    excerpt: "Shopify Plus is a serious tool — and a serious cost. Here's a clear-eyed framework for when to upgrade and when to hold.",
    category: "Shopify",
    keywords: ["Shopify Plus vs Shopify", "Shopify Plus agency UK", "Shopify upgrade"],
    author: B, date: "2026-01-12", readTime: "6 min", image: IMG.shopify,
    body: `Shopify Plus starts at about $2,300/month. For the right brand it's a bargain. For the wrong one, it's an expensive vanity purchase. Here's how we decide.

## The revenue trigger is a myth

The old advice was "£1m in revenue and you should be on Plus." That's outdated. Plenty of £4m brands run beautifully on standard Shopify; plenty of £600k brands genuinely need Plus. Revenue isn't the trigger — architecture is.

## When Plus genuinely pays back

If you need custom checkout logic (B2B, wholesale portals, currency-specific gates), if you run multi-store internationally, if you need scripts and custom flows, or if your dev pipeline demands Launchpad and Flow — Plus is worth it. The API rate limits alone justify it for high-traffic brands.

## When standard Shopify is fine

Under 20,000 monthly visitors, single storefront, standard checkout logic, standard apps — you're on the wrong tier if you upgrade. Spend that £22k/year on paid media or content instead.

## The hidden cost of upgrading

The Plus cost isn't just the licence. It's the theme migration, the app re-architecture, the developer learning curve, and the operational discipline required to actually use Plus features. Budget realistically for both.

## Our rule of thumb

Upgrade to Plus when three of the following are true: multi-currency selling, custom checkout logic needs, B2B/wholesale, script-based promos, or multi-store international. Anything less and standard Shopify wins on ROI.`
  },
  {
    slug: "amazon-ppc-2026-whats-changed",
    title: "Amazon PPC in 2026: what's actually changed",
    excerpt: "AI-first bidding, new Sponsored TV formats, and tighter attribution windows. Here's what matters to your ACoS.",
    category: "Paid Ads",
    keywords: ["Amazon PPC 2026", "Amazon advertising UK", "Sponsored Products strategy"],
    author: A, date: "2026-01-10", readTime: "7 min", image: IMG.ads,
    body: `Amazon Ads changes constantly, but 2026 has three shifts that actually matter to your P&L.

## Rules-based has become obsolete

The old dayparting + fixed-bid approach is dead. Amazon's AI bidding now outperforms manual rules in almost every category for accounts with clean baseline data. The trick is giving it clean data — which most sellers don't.

## Sponsored TV is finally viable for mid-market

You no longer need six figures/month to run Sponsored TV. Brands with £30k+/month DSP spend can now layer STV as an upper-funnel expansion. It's not a replacement for Sponsored Products — it's a compounding brand-defence layer.

## Attribution windows tightened

The default attribution window narrowed on some campaign types. This makes multi-touch tracking harder and makes DSP more important, not less, because DSP is where you can see the full view-through funnel.

## What we're doing differently

We open every account with two campaign structures running in parallel — one AI-first, one manual-scaffolded — and we let the data pick the winner in 30 days. It's cheaper than picking wrong upfront.

## The one thing that still works

Structured negative keywords. Even in an AI-bidding world, feeding the algorithm a well-groomed negatives list at the account level compounds over 12 months.`
  },
  {
    slug: "tiktok-shop-uk-founder-playbook",
    title: "TikTok Shop UK: the founder playbook",
    excerpt: "TikTok Shop UK is the highest-velocity channel we run right now. It's also the most misunderstood. Here's the operating playbook.",
    category: "Paid Ads",
    keywords: ["TikTok Shop UK", "TikTok Shop agency", "sell on TikTok UK"],
    author: A, date: "2026-01-08", readTime: "7 min", image: IMG.ads,
    body: `TikTok Shop UK grew faster than any marketplace we've ever tracked. It rewards specific playbooks — not everything that works on Amazon translates.

## Why TikTok Shop is different

On Amazon, buyers search. On TikTok Shop, buyers scroll. That single difference changes everything: creative-first over listing-first, live selling over PPC, affiliate-driven over paid-driven.

## Affiliates are the growth engine

The TikTok Shop Affiliate programme is the single fastest way to scale. Enrol from day one, price the commission attractively (12-20% is the range), and treat top affiliates like account managers.

## Live selling actually works

Two-hour lives with skilled hosts routinely do 3-5x average daily GMV in beauty, food, and fashion. If you're not livestreaming weekly in these categories, you're leaving obvious money.

## Where sellers fail

Underestimating fulfilment. TikTok Shop rewards fast ship — the algorithm literally deranks slow shippers. If you can't ship next-day from a UK warehouse, TikTok isn't the right channel yet.

## Getting started

Approval takes 3-10 working days. Have your UKCA/CE marks ready, a UK returns address, and a bank account in your registered entity's name.`
  },
  {
    slug: "ecommerce-seo-checklist-uk-brands",
    title: "The ecommerce SEO checklist every UK brand should run",
    excerpt: "SEO for ecommerce is different from SEO for content sites. Here's the exact checklist we run for every new UK client.",
    category: "SEO",
    keywords: ["ecommerce SEO UK", "Shopify SEO", "product page SEO"],
    author: B, date: "2026-01-06", readTime: "9 min", image: IMG.seo,
    body: `Ecommerce SEO is the highest-ROI channel we run because it compounds. It's also the most technically demanding. Here's the full checklist.

## Technical foundation

Core Web Vitals passing (all three), no crawl-budget waste on filter URLs, proper canonical strategy for variants, structured data on every PDP (Product + Offer + AggregateRating), and a clean sitemap segmented by content type.

## Keyword architecture

Map your entire catalogue to search intent: category → subcategory → PLP → PDP. Each level owns a keyword group. Most brands over-invest in product SEO and under-invest in category-level content.

## Content strategy

Every category page should carry 300-800 words of genuinely helpful content — not the awful stuffed paragraphs of 2015. Buying guides, comparison content, and FAQ sections work better than blog posts for ecommerce.

## Internal linking

The most underused SEO lever. Category → PDP is the standard. But PDP → complementary PDP (from a curated "shop the look" or "goes well with" block) is where visibility compounds.

## Off-page

Digital PR beats guest posting. One placement in a UK broadsheet is worth 50 low-authority guest posts. Budget for one meaningful PR moment per quarter.

## The measurement layer

Non-brand organic revenue is the only number that matters. Track it in GA4 as a segment, review monthly, and reallocate against it.`
  },
  {
    slug: "core-web-vitals-shopify-fixes",
    title: "Core Web Vitals for Shopify: the fixes that actually matter",
    excerpt: "Most Shopify Core Web Vitals guides list 40 fixes. Only about 6 of them move the needle. Here they are.",
    category: "Shopify",
    keywords: ["Shopify Core Web Vitals", "Shopify speed", "LCP CLS INP"],
    author: A, date: "2026-01-04", readTime: "6 min", image: IMG.shopify,
    body: `We audit around 40 Shopify stores a year for site speed. Every audit ends up with the same six recommendations doing 80% of the work.

## LCP: the hero image

Your Largest Contentful Paint element is almost always the homepage hero. Serve it as WebP or AVIF, size it correctly per breakpoint, preload it in the theme head, and set explicit width/height. Six lines of Liquid, 40% LCP improvement.

## CLS: fonts and images

Set font-display: swap and use size-adjust so fallback fonts render at similar dimensions. Set aspect-ratio boxes for every image, hero or otherwise. Cumulative Layout Shift disappears.

## INP: kill blocking scripts

Interaction to Next Paint failures are almost always third-party apps loading synchronously. Audit your Shopify apps: any that inject a script tag into head is a suspect. Defer or remove.

## Themes matter more than apps

A well-built theme (Dawn-based, ~2,500 lines of custom Liquid) will outperform any theme that bolts on 20 unused sections. If your theme is 15,000 lines and 4 years old, no amount of apps will fix it.

## The two-week rule

If a Core Web Vitals fix hasn't shown in Search Console within two weeks, it hasn't landed properly. Retest and redeploy.`
  },
  {
    slug: "klaviyo-email-flows-every-dtc-brand-needs",
    title: "The 7 Klaviyo email flows every DTC brand should have live",
    excerpt: "Klaviyo can drive 25-35% of DTC revenue when set up properly. Here are the seven flows that do 90% of that work.",
    category: "Shopify",
    keywords: ["Klaviyo flows", "Shopify email marketing", "DTC email agency"],
    author: A, date: "2026-01-02", readTime: "7 min", image: IMG.shopify,
    body: `Email is the single most profitable channel most DTC brands run — because it costs almost nothing to send. Here's what "properly set up" looks like.

## 1. Welcome series (3 emails)

Trigger: newsletter signup. Emails: brand story, best-sellers, discount incentive if you use one. AOV lift 12-18% for signups vs anonymous traffic.

## 2. Post-purchase series

Order confirmation → shipping notification → arrival day → 30-day check-in → 60-day cross-sell. Runs on autopilot, drives repeat purchase.

## 3. Browse abandonment

Trigger: viewed product but didn't add to cart. Two emails. Recovery rate 3-5% of triggered.

## 4. Cart abandonment

Trigger: added but didn't checkout. Three emails over 48 hours. Recovery rate 8-15%.

## 5. Winback

Trigger: no purchase in X days (category-dependent). Highest ROI email you'll ever send, because these are proven buyers.

## 6. Post-purchase reviews

Trigger: 14 days after delivery. Review-request emails drive UGC that then fuels ads and PDPs.

## 7. VIP tier

Trigger: 3+ orders or £X spend. Early access, free shipping, birthday reward. Retention gold.

## The one that ties it together

A segmentation rule that stops sending campaigns to anyone actively in a flow. Most brands over-send and burn their list. Discipline > frequency.`
  },
  {
    slug: "ebay-uk-launch-successfully",
    title: "How to launch successfully on eBay UK in 2026",
    excerpt: "eBay UK still moves £700m+/month. If you're ignoring it, you're ignoring free volume. Here's how to launch properly.",
    category: "Amazon",
    keywords: ["sell on eBay UK", "eBay UK strategy", "eBay Promoted Listings"],
    author: A, date: "2025-12-30", readTime: "6 min", image: IMG.amazon,
    body: `eBay UK is the marketplace everyone underestimates. It's older, less glamorous, and quietly moves enormous volume — especially in categories like electronics, home, and parts.

## Set up right, once

Business account (not personal), UK VAT registered from day one if you're overseas, and a properly branded storefront (yes, eBay storefronts still exist and they still convert).

## Listing structure

eBay's search algorithm — Cassini — rewards clean structured data. Fill every item specific. Category placement is more important on eBay than any other marketplace.

## Promoted Listings

The one advertising product that matters. Set a portfolio-level ad rate (typically 5-9%) rather than per-listing. Feed it clean data, let it run, review weekly.

## Cross-listing

Never manual-list to both Amazon and eBay separately. Use a listing tool (Linnworks, Multichannel InventoryHub, or similar) so inventory syncs and you don't oversell.

## Where founders lose

Returns and messages. eBay's Top Rated Seller status is a real ranking signal — miss it and your visibility collapses. Reply within 24h, ship on time, accept returns gracefully. It's operational, not creative.`
  },
  {
    slug: "etsy-seo-tactics-that-work",
    title: "12 Etsy SEO tactics that still work in 2026",
    excerpt: "Etsy's search algorithm rewards specific structural moves. Here are twelve that still work — and three you should stop doing.",
    category: "SEO",
    keywords: ["Etsy SEO", "Etsy listing optimisation", "Etsy agency"],
    author: B, date: "2025-12-28", readTime: "7 min", image: IMG.seo,
    body: `Etsy is one of the last marketplaces where genuine listing craft still wins. Here's what actually moves the needle.

## Titles: front-load specifics

The first 40 characters of your title carry disproportionate weight. Put the buyer's search phrase, not your brand name, at the front.

## Tags: 13 unique, no repeats

Etsy allows 13 tags — use all 13, don't repeat words already in your title (Etsy dedupes), and use long-tail multi-word tags.

## Categories and attributes

Every unfilled attribute is a missed ranking signal. If Etsy lets you tell it a colour, material, style, or occasion, tell it.

## Photography

Etsy's search now uses image quality as a ranking factor. Ten photos, all sharp, first photo clean product on white or lifestyle depending on category.

## Renewal frequency is not a ranking factor

Stop paying to auto-renew every 4 hours. It's a myth.

## Personalisation

If your product genuinely supports personalisation, enabling it lifts CVR. If it doesn't, don't fake it.

## Free shipping

Above £35 in the UK, free shipping is a genuine ranking boost. Bake shipping into your price.

## Reviews

Etsy weights recency. A steady drip of new reviews outperforms a big burst then silence.

## Star Seller

Real ranking signal. Ship fast, respond fast, keep review score up.

## What to stop doing

Keyword stuffing in descriptions, misleading category placement, duplicate listings. All three now actively harm ranking.`
  },
  {
    slug: "cross-border-uk-to-us",
    title: "Cross-border ecommerce: taking a UK brand into the US",
    excerpt: "The US is bigger, faster, and less forgiving than the UK. Here's the operating playbook we run for every US expansion.",
    category: "International",
    keywords: ["UK to US ecommerce", "sell in US from UK", "US Amazon launch"],
    author: C, date: "2025-12-26", readTime: "8 min", image: IMG.intl,
    body: `Moving a UK brand into the US is the single most common international expansion we're asked about. It's also the one where most brands make the same three mistakes.

## Mistake one: launching everywhere at once

The US isn't one market — it's four or five. Trying to launch DTC, Amazon US, and Walmart in the same quarter is how founders burn cash. Sequence: Amazon US first (fastest cash), then Shopify US (owned data), then Walmart (long-tail scale).

## Mistake two: ignoring compliance

FDA labelling for supplements, FCC for anything with a battery, Prop 65 for California. These are not optional and Amazon enforces them ruthlessly. Do them before you ship inventory, not after.

## Mistake three: pricing

US buyers expect free shipping over $35 and Prime-standard delivery windows. If your unit economics don't allow that, you're not ready to expand.

## The tax structure

You can sell into the US without a US entity, but sales tax nexus rules mean you likely still register in about 20 states. Get a US tax specialist — this is not a DIY area.

## Advertising differences

CPCs on Amazon US run 40-70% higher than UK for equivalent categories. Your MER math needs to accommodate that from day one.

## Reasonable timeline

90 days to launch on Amazon US, six months to profitable, twelve months to scale.`
  },
  {
    slug: "selling-on-noon-gcc-playbook",
    title: "Selling on Noon: the complete GCC playbook",
    excerpt: "Noon is the fastest way for international brands to enter the GCC. Here's the full onboarding, logistics, and marketing plan.",
    category: "International",
    keywords: ["sell on Noon", "Noon agency", "GCC marketplace"],
    author: C, date: "2025-12-24", readTime: "8 min", image: IMG.intl,
    body: `Noon is the marketplace of choice for the UAE and Saudi Arabia — and it's genuinely operator-friendly if you set up correctly.

## Two entities matter

You'll sell into UAE (Noon.com/uae) and Saudi (Noon.com/saudi) with the same account but different SKU-level compliance. Understand which markets your product can enter before onboarding.

## Onboarding

Trade licence documentation, VAT certificate (UAE), and Saudi tax registration if you're storing inventory there. Onboarding takes 4-6 weeks with a good handler.

## Noon Express vs marketplace

Noon Express (their FBA equivalent) unlocks the Express badge, which meaningfully affects CVR. It's non-negotiable if you're serious.

## Content and localisation

English works. Arabic multiplies. Every listing should carry both — Arabic is a real ranking and CVR lift, not a nice-to-have.

## Ramadan and White Friday

Two moments define the Noon year: Ramadan (variable date) and White Friday (November). Plan inventory 8-12 weeks ahead of each. Miss either and you miss half your year's opportunity.

## Advertising

Noon's ad platform is simpler than Amazon's. Sponsored Products first, category-level bidding, weekly reviews. Ad spend as a % of GMV typically runs 8-12%.

## Compliance to watch

Cosmetics, supplements, and any battery-powered item need pre-approval. Get it in writing before you ship inventory.`
  },
  {
    slug: "lazada-launch-checklist",
    title: "Lazada launch checklist for regional brands",
    excerpt: "Lazada is the largest marketplace in Southeast Asia. Here's the checklist we run before flipping any Lazada account live.",
    category: "International",
    keywords: ["sell on Lazada", "LazMall onboarding", "Southeast Asia ecommerce"],
    author: C, date: "2025-12-22", readTime: "6 min", image: IMG.intl,
    body: `Lazada is the entry point for Southeast Asia — with the added advantage that a single account can sell into six markets.

## LazMall vs marketplace

For brand owners, LazMall is the tier that matters. It carries brand protection, higher visibility, and buyer trust. Standard marketplace listings underperform meaningfully.

## Choose your anchor country first

Singapore is easiest to onboard and hardest to scale (small population). Malaysia is bigger and moderately complex. Indonesia is largest and most complex. Pick your anchor, then expand.

## Fulfilment

FBL (Fulfilled by Lazada) is the equivalent of FBA. Use it unless you already have a regional 3PL. It handles cross-border payments too, which is genuinely useful.

## Localisation

Product titles and descriptions need translating per market — Bahasa for Indonesia, Malay for Malaysia. Machine-translated content demonstrably underperforms.

## Promotions

Lazada runs monthly campaign days (double-digit dates: 3.3, 4.4, 5.5, etc.). Not opting into these is leaving money on the table. Plan inventory 6 weeks ahead.

## Payment cycles

Lazada pays out on a set cycle per market. Cash-flow accordingly — your first 60 days of trading might not hit your bank until day 90.`
  },
  {
    slug: "zalora-onboarding-guide",
    title: "Zalora onboarding: what fashion brands should know",
    excerpt: "Zalora is the fashion-first marketplace across Southeast Asia and Hong Kong. Here's how onboarding actually works.",
    category: "International",
    keywords: ["sell on Zalora", "Zalora agency", "fashion Southeast Asia"],
    author: C, date: "2025-12-20", readTime: "5 min", image: IMG.intl,
    body: `Zalora is the marketplace of record for premium and mid-market fashion across Southeast Asia and Hong Kong. Onboarding is more curated than Lazada — closer in feel to Farfetch than Amazon.

## Application first

Zalora curates its roster. Application requires brand deck, product images, and a pricing structure. First-round decisions typically come inside 4 weeks.

## Direct vs marketplace

Zalora runs two models — direct (they buy inventory) and marketplace (you sell through). Direct is preferable if offered but has higher barrier to entry.

## Content standards

Zalora imposes real photography standards — model shots, lay-flats, and detail imagery. Non-compliant listings are rejected. Budget for a proper shoot before onboarding.

## Regional markets

Same account, multiple markets — Singapore, Malaysia, Indonesia, Philippines, Hong Kong, Taiwan. Choose which to open based on where your unit economics work.

## Marketing

Zalora runs strong on-platform marketing but expects brand-partner contributions to campaign days. Budget for a monthly marketing spend as part of the P&L.`
  },
  {
    slug: "uk-vat-and-eori-international-sellers",
    title: "UK VAT and EORI for international ecommerce sellers",
    excerpt: "The paperwork that stops most international brands from launching in the UK. Here's the plain-English version.",
    category: "International",
    keywords: ["UK VAT for sellers", "EORI number UK", "sell in UK from abroad"],
    author: C, date: "2025-12-18", readTime: "6 min", image: IMG.intl,
    body: `If you're an international brand selling into the UK, you need three pieces of paperwork before you can operate cleanly. Here's what they are and how to get them.

## UK VAT registration

If you're storing inventory in the UK (including FBA) or your UK sales exceed the threshold, you must be VAT-registered. Registration takes 2-6 weeks and requires a UK business address, either your own or an agent.

## EORI number

Required for anything crossing UK customs. Free, and issued within a week of application to HMRC. You need one before your first container lands.

## The IOR question

Importer of Record — the entity that legally imports your goods. Can be your own UK entity or an IOR service (many freight forwarders offer this).

## Marketplace-specific VAT

Amazon, eBay, and Etsy now collect VAT on behalf of overseas sellers for orders under £135. For higher-value orders or B2B, you handle it. Understand which model you fall into.

## UKCA / CE

If your product carries safety, electrical, or specific-material claims, you likely need UKCA marking (post-Brexit UK equivalent of CE). This is category-specific and cannot be improvised.

## The realistic timeline

Assume 8-10 weeks from starting the paperwork to being fully operational. Anyone promising faster is likely cutting corners.`
  },
  {
    slug: "amazon-vine-programme-worth-it",
    title: "Is the Amazon Vine programme worth it in 2026?",
    excerpt: "Vine is Amazon's official review-seeding programme. It's expensive, honest, and — for new launches — often essential.",
    category: "Amazon",
    keywords: ["Amazon Vine", "Amazon review strategy", "new product launch Amazon"],
    author: A, date: "2025-12-16", readTime: "5 min", image: IMG.amazon,
    body: `Vine gets more expensive every year and it still gets used every year, because there's no legitimate alternative for review velocity on new launches.

## What Vine actually is

Amazon's official reviewer programme. You enrol, provide 30 units of product free, and Amazon distributes them to reviewers. Enrolment costs £145 per ASIN (UK, 2026 pricing).

## When Vine is worth it

New launches. Any ASIN with fewer than 20 reviews benefits. Product refreshes when you want to reset the review conversation.

## When Vine is not worth it

Established ASINs with hundreds of reviews. Low-margin products where 30 giveaways plus fees crush the maths. Products where the review is likely to be materially negative — Vine reviewers are candid.

## Managing expectations

Expect 5-12 reviews per 30 units seeded. Average star rating comes out honest — 3.9-4.5 for average products, 4.5-5.0 for genuinely good ones.

## The tactical detail

Enrol Vine before your first Prime Day / Q4 push. Reviews take 4-8 weeks to land. Timing matters.`
  },
  {
    slug: "meta-ads-creative-that-converts",
    title: "Meta ads for ecommerce: creative that actually converts",
    excerpt: "In 2026 the account structure barely matters. The creative does. Here's what's working across our client roster.",
    category: "Paid Ads",
    keywords: ["Meta ads ecommerce", "Facebook ads creative", "Instagram advertising"],
    author: A, date: "2025-12-14", readTime: "6 min", image: IMG.ads,
    body: `Meta's Advantage+ campaigns effectively removed account structure as a lever. Which means creative is now 80% of what determines your ROAS. Here's what's working.

## UGC beats studio

For everything under £100 AOV, user-generated video outperforms polished studio content 3-to-1. Ugly, honest, phone-shot content wins.

## Static images still work

Everyone chases video, but well-designed static ads still deliver — particularly for consideration audiences and retargeting.

## The first 3 seconds

Meta's cost-per-3-second-video-view dropped, meaning if you don't hook the viewer in the opening beat, you're wasting the auction win. Front-load the product benefit.

## Creative diversity

Advantage+ needs volume. Aim for 20-40 unique creative assets in-flight at any time. Batch production monthly.

## Testing framework

Test one variable per creative — hook, format, call-to-action. Kill anything under 1.5x MER by day 5. Scale anything above 3x MER by day 10.

## The one thing that stops working

Overproduced brand films with no product hook. They win awards but lose ROAS.`
  },
  {
    slug: "google-pmax-dtc-setup-guide",
    title: "Google Performance Max for DTC: setup guide",
    excerpt: "PMax is either the best or worst thing to happen to your Google Ads account. Setup is everything.",
    category: "Paid Ads",
    keywords: ["Google Performance Max", "PMax ecommerce", "Google Ads DTC"],
    author: A, date: "2025-12-12", readTime: "7 min", image: IMG.ads,
    body: `PMax's black-box nature makes it brilliant when set up well and disastrous when set up lazily.

## Feed quality is everything

PMax is only as good as your Merchant Center feed. If titles are weak, images are thin, and category tagging is wrong, PMax will spend your money efficiently on the wrong customers.

## Asset groups by product theme

Do not run one giant PMax. Structure asset groups by product theme — bestsellers, new arrivals, seasonal — and give each its own creative set.

## Audience signals

Yes, they're signals not targeting. But feed PMax your top customer list, converters from the last 60 days, and cart-abandoners. It measurably shortens the learning phase.

## Search theme discipline

Do not add search themes that overlap with your standard Search campaigns unless you deliberately want cannibalisation.

## Exclude brand

Almost always. Otherwise PMax will hoover up your brand traffic and claim credit for it. Use the account-level negative brand list.

## Measuring truthfully

PMax attribution is generous. Cross-reference against GA4 and against your MER. Do not judge PMax on ROAS alone.`
  },
  {
    slug: "ecommerce-analytics-kpis-that-matter",
    title: "Ecommerce KPIs that actually matter (and the ones to ignore)",
    excerpt: "Ten metrics we track weekly. Twenty we deliberately don't. Here's the working list.",
    category: "Operations",
    keywords: ["ecommerce KPIs", "DTC metrics", "Shopify analytics"],
    author: A, date: "2025-12-10", readTime: "5 min", image: IMG.ops,
    body: `Every ecommerce dashboard has too many numbers. Here's the shortlist that actually drives decisions.

## The core five

New-customer revenue, returning-customer revenue, blended MER, contribution margin, and inventory days-on-hand. If a metric doesn't affect a decision in one of these, it's noise.

## Session-level metrics are traps

Sessions and pageviews measure activity, not outcome. Ignore them at the exec level. Useful for CRO teams only.

## MER over ROAS

Marketing Efficiency Ratio (total revenue / total ad spend) is honest across platforms. Platform-reported ROAS is not.

## Cohort retention

The one metric that reveals whether you're building a business or renting one. Track 30/60/90-day repeat rate by cohort.

## Contribution margin > gross margin

Gross margin ignores fulfilment, discounts, and returns. Contribution margin doesn't. If you're not tracking it, start.

## The vanity killers

Impressions, follower count, email open rate, and platform ROAS. All useful. None decisive.`
  },
  {
    slug: "monthly-promo-calendar-amazon",
    title: "Building a monthly promo calendar for Amazon",
    excerpt: "Amazon runs on cadence. Brands that plan the year win. Here's the calendar structure our clients use.",
    category: "Amazon",
    keywords: ["Amazon promo calendar", "Amazon deals strategy", "Amazon seasonal planning"],
    author: A, date: "2025-12-08", readTime: "6 min", image: IMG.amazon,
    body: `Ad hoc promotions cost money and confuse buyers. Planned promotions compound. Here's how to structure the year.

## The four Amazon tent-poles

Prime Day (July), Prime Big Deal Days (October), Black Friday / Cyber Monday (November), Christmas run-in (mid-December). Plan inventory 12 weeks ahead of each. Plan advertising 6 weeks ahead.

## Category-specific moments

Valentine's, Mother's Day, back-to-school, Halloween. If any of these are relevant to your category, add them to the calendar as second-tier events.

## Monthly deals

Between tent-poles, run one branded promotion per month — Best Deal, Prime Exclusive Discount, or Coupon depending on which drives your category. Keeps velocity between events.

## Inventory implications

The single biggest failure mode is running out of stock during a tent-pole. Amazon punishes stockouts with ranking loss that takes months to recover.

## Advertising alignment

Increase Sponsored Products bids 20-40% for the two weeks around tent-pole events. Ads compete harder; passive bids lose.

## The written calendar

Write it once, per quarter, sign off with the founder. Then don't argue about promotions ad hoc.`
  },
  {
    slug: "product-photography-that-sells-online",
    title: "Product photography that sells online",
    excerpt: "Ecommerce photography is a technical discipline, not an art form. Here's the shot list every product should have.",
    category: "Shopify",
    keywords: ["product photography ecommerce", "Amazon photography", "PDP images"],
    author: B, date: "2025-12-06", readTime: "5 min", image: IMG.shopify,
    body: `Great product photography moves CVR more than almost any other single change. It's also more disciplined than most brands realise.

## The shot list

Hero (clean product on white), scale reference (product in-hand or in-scene), lifestyle (product in use), detail (macro of texture or key feature), packaging, and infographic (features called out). Six shots minimum.

## Amazon-specific rules

Main image on pure white. No text, no watermarks, no props on the main. Amazon rejects otherwise. Subsequent images are freer.

## Video

For AOV over £40, product video lifts CVR meaningfully. 15-30 seconds, first 3 seconds hook, product in use.

## The mistake most brands make

Over-styling. Buyers want to see the product clearly. Beautiful lifestyle shots that hide the product get skipped.

## Budget realistically

A proper day shoot for 10-15 SKUs runs £2,500-£5,000. It pays back in the first month if your CVR was even 0.3% too low.`
  },
  {
    slug: "ugc-content-source-and-use",
    title: "UGC content: how to source it and use it properly",
    excerpt: "UGC drives higher ROAS on paid social than any format we run. Here's how to build a repeatable pipeline.",
    category: "Paid Ads",
    keywords: ["UGC ecommerce", "user generated content", "creator content strategy"],
    author: A, date: "2025-12-04", readTime: "6 min", image: IMG.ads,
    body: `User-generated content isn't a nice-to-have any more — it's the primary format that Meta and TikTok reward. Building a UGC engine is worth the effort.

## Three sources

Real customers (paid post-purchase incentive), micro-creators (£50-£200 per asset), and TikTok Shop affiliates (commission-only). Blend all three.

## Rights matter

Get written usage rights in advance. Meta and TikTok will pull ads without them. A one-line form at checkout for customer UGC and a signed brief for creators.

## Format discipline

Nine-by-sixteen vertical, first 3 seconds hook, product visible by second 5, call-to-action in the last 3. Rinse and repeat.

## Volume beats polish

Twenty UGC assets a month outperforms two polished studio assets. Meta's algorithm rewards freshness.

## Where founders lose

Trying to over-brief creators. The best UGC feels like the creator's voice, not yours. Give the hook, let them own the delivery.`
  },
  {
    slug: "retail-expansion-uk-supermarket-entry",
    title: "UK supermarket retail expansion for international brands",
    excerpt: "Getting your brand onto UK grocery shelves is slow but transformative. Here's the entry framework.",
    category: "Retail",
    keywords: ["UK retail expansion", "UK supermarket buyer", "grocery listing UK"],
    author: C, date: "2025-12-02", readTime: "7 min", image: IMG.retail,
    body: `UK supermarket retail is the largest single ecommerce-adjacent channel most brands ignore. Getting listed is a 12-18 month journey — but the volume is transformative.

## The tier map

Tier 1: Tesco, Sainsbury's, Asda, Morrisons. Tier 2: Waitrose, M&S, Co-op. Specialty: Whole Foods, Planet Organic, Holland & Barrett. Different buyers, different economics.

## Waitrose and M&S are the entry point

For premium international brands, Waitrose and M&S have shorter onboarding, higher margins, and a buyer relationship that carries into other retailers.

## What buyers actually want

Product-market fit evidence (existing ecommerce traction), packaging that reads on-shelf, EAN barcodes, and a pricing structure that lets the retailer margin comfortably.

## Distributors vs direct

If you can't service national retail directly, work through a distributor. It's less profitable per unit but faster to shelf.

## EPOS and data

Every retailer expects EPOS reporting, promotional planning, and category-review participation. Budget for a UK-based account manager or a partner agency.

## Timeline

Realistic: 4 months to first buyer meeting, 8 months to listing decision, 12 months to first shelf appearance.`
  },
  {
    slug: "chalhoub-group-brand-entry",
    title: "Getting your brand into Chalhoub Group",
    excerpt: "Chalhoub is the gateway to premium retail across the GCC. Here's how introductions actually happen.",
    category: "Retail",
    keywords: ["Chalhoub Group", "GCC retail", "UAE premium retail"],
    author: C, date: "2025-11-30", readTime: "6 min", image: IMG.retail,
    body: `Chalhoub is not one retailer — it's a portfolio of premium brands across GCC beauty, luxury, and lifestyle. Getting in matters, and the process is more structured than most founders realise.

## The three routes in

Direct application through Chalhoub Ventures (their innovation arm), introduction through an existing supplier, or acquisition into one of their multi-brand retail formats (Level Shoes, Wojooh, Faces).

## What Chalhoub looks for

Genuine brand equity (not just DTC traction), category fit with their portfolio, and a founder who can commit to Middle East market presence. Casual expansion attempts don't clear.

## The Ramadan gate

Chalhoub decisions cluster around Ramadan and Q4. Introduce your brand 4-5 months ahead of these windows.

## Distribution economics

Chalhoub margins reflect luxury retail — 55-65% typically. Your unit economics need to survive that.

## The follow-through

Getting listed is 20% of the work. The other 80% is training their retail teams, running in-store activation, and delivering on trade-marketing commitments. Budget accordingly.`
  },
  {
    slug: "distributor-vs-direct-decision",
    title: "Distributor vs direct: how to decide for retail expansion",
    excerpt: "The single most important commercial decision in retail expansion. Get it wrong and it costs years.",
    category: "Retail",
    keywords: ["distributor vs direct retail", "international retail entry", "distribution strategy"],
    author: C, date: "2025-11-28", readTime: "6 min", image: IMG.retail,
    body: `Every international brand hits this decision at the border: sell to distributors, or build local presence? There's no right answer — only a right answer for you.

## When distributors make sense

Small brand, unfamiliar market, no local team, categories with heavy compliance (food, beauty, medical). Distributor absorbs the risk in exchange for margin.

## When direct makes sense

Brand equity is your primary asset. You want price-point control. You want direct buyer relationships. You have the capital to fund inventory and a local team.

## The hybrid model

Distributor for ecommerce and secondary retail; direct for flagship retail. Works well in GCC and Southeast Asia specifically.

## Financial reality

Distributors typically take 30-45% margin. Direct requires 12-18 months of investment before it self-funds. Model both.

## Contract structure

If distributor: exclusive vs non-exclusive, minimum guaranteed quantities, marketing spend commitment, exit clauses. Get a specialist lawyer.

## The single failure mode

Signing a bad exclusive. You are stuck with them for the contract term. Non-exclusive first, exclusive only after proven performance.`
  },
  {
    slug: "amazon-aplus-content-best-practices",
    title: "Amazon A+ Content best practices in 2026",
    excerpt: "A+ Content is free CVR uplift for brand-registered sellers. But most brands do it wrong. Here's the playbook.",
    category: "Amazon",
    keywords: ["Amazon A+ Content", "Amazon EBC", "Amazon Brand Story"],
    author: A, date: "2025-11-26", readTime: "5 min", image: IMG.amazon,
    body: `A+ Content typically lifts CVR by 3-10% on brand-registered ASINs. It's free. And it's still done badly by most brands.

## Start with structure

Brand Story module first (top-of-page carousel), then A+ modules that repeat and reinforce the key selling arguments. Use every available module.

## Copy over images

Great A+ uses images to support copy, not replace it. Buyers scan; the copy earns the read.

## The comparison chart module

The highest-CVR module across our roster. Use it to compare your own variants (not competitors — Amazon will pull it if you name competitors).

## Mobile first

70%+ of Amazon UK traffic is mobile. Design A+ for a 5-inch screen first, then scale up.

## What breaks

Text embedded in images (not searchable), autoplay video (Amazon strips it), and stock imagery that also appears on other listings.

## Refresh cadence

Update A+ every 6-9 months. Buyer expectations change; fresh content converts better.`
  },
  {
    slug: "amazon-repricing-strategies",
    title: "Repricing strategies for Amazon in 2026",
    excerpt: "Repricing is the single most-underused ops lever in most Amazon accounts. Here's a framework that doesn't rely on race-to-the-bottom.",
    category: "Amazon",
    keywords: ["Amazon repricer", "Amazon pricing strategy", "Buy Box"],
    author: A, date: "2025-11-24", readTime: "6 min", image: IMG.amazon,
    body: `Repricing badly is worse than not repricing at all — you train the algorithm and your competitors to expect discounts.

## Rule one: no race-to-the-bottom

Every automated repricer sold by a small vendor will chase the Buy Box down to break-even. That's the wrong strategy for anyone with a brand.

## The Buy Box formula

Amazon's Buy Box isn't purely price. Seller performance (feedback, fulfilment, defect rate) is 50-60% of the decision. If your ops are clean, you can hold Buy Box above the lowest offer.

## The rebound rule

If your repricer lowers price to win Buy Box, it must also automatically rebound the price up over the next 24-72 hours. Otherwise the price only ever ratchets down.

## Reservation prices

Set a floor. Never breach it. Some competitors are running unhealthy pricing that will kill their own business — do not join them.

## Bundle out of the race

The best defence against a repricing war is a bundle. Bundle SKUs don't share Buy Box competitors and defend margin.

## Which repricer we use

We rotate. Feedvisor and Bqool for larger accounts, native Amazon Automate Pricing for smaller. The tool matters less than the strategy.`
  },
  {
    slug: "buy-box-win-and-defend",
    title: "Amazon Buy Box: how to win and defend it",
    excerpt: "The Buy Box drives 80%+ of Amazon sales. Winning it — and holding it — is a specific operational discipline.",
    category: "Amazon",
    keywords: ["Amazon Buy Box", "Buy Box percentage", "Amazon seller ops"],
    author: A, date: "2025-11-22", readTime: "5 min", image: IMG.amazon,
    body: `The Buy Box is Amazon's default purchase option. If you're not winning it, you're barely selling.

## What Amazon weights

Fulfilment method (FBA beats FBM), seller feedback (last 90 days), order defect rate, on-time delivery, and price. Not just price.

## FBA is a near-requirement

For competitive ASINs, FBA is worth £5-8 per unit versus FBM through the Buy Box lift alone. The maths almost always work.

## Feedback velocity

New sellers with fewer than 20 feedback ratings are systematically deprioritised. Run feedback-request automation from day one.

## Order Defect Rate

The single most punished metric. Keep ODR under 1%. Anything above 2% triggers Buy Box suppression.

## Late-shipment rate

Under 4%. This kills sellers using inconsistent 3PLs. Consider FBA on your top 20 SKUs even if the rest stay FBM.

## When two sellers tie

If two sellers are functionally tied, Amazon rotates Buy Box between them. This is why holding a slightly higher Buy Box share than the competition is more important than absolute price.`
  },
  {
    slug: "cross-border-logistics-freight-to-amazon-fba",
    title: "Cross-border logistics: freight to Amazon FBA",
    excerpt: "Getting a container from origin to an Amazon fulfilment centre is more complex than it sounds. Here's the operating map.",
    category: "International",
    keywords: ["Amazon FBA logistics", "freight to FBA", "international ecommerce logistics"],
    author: C, date: "2025-11-20", readTime: "7 min", image: IMG.intl,
    body: `Freight to FBA is deceptively straightforward — until your container gets stuck in customs and Amazon books your inventory as "receiving delayed".

## The three-leg model

Origin factory → port → destination port → 3PL/prep centre → FBA. Do not skip the prep centre. Every seller who does regrets it within six months.

## Prep centres do more than prep

They also solve the receiving-address problem (FBA doesn't accept some port-shipped freight directly), do FNSKU labelling, and buffer against Amazon's stock-limit rules.

## Consolidation

If you're shipping less than a full container, LCL (Less-than-Container Load) is cheaper on face — but often slower due to consolidation delays. FCL (Full Container Load) is worth considering even at partial fill for your first shipments.

## Duty and VAT

Import VAT is recoverable. Import duty typically isn't. Model duty into your unit economics or you'll be surprised.

## The stock-limit trap

Amazon caps FBA storage per seller. New sellers get low limits — check yours before ordering inventory. Nothing more painful than a container arriving with nowhere to go.

## Recommended partners

We work with a rotating list of freight forwarders and prep centres. Named recommendations available on request.`
  },
  {
    slug: "ior-services-when-you-need-one",
    title: "IOR services: what they are, when you need one",
    excerpt: "Importer of Record services solve a specific compliance problem. Here's when you need one.",
    category: "International",
    keywords: ["IOR services", "importer of record", "international ecommerce compliance"],
    author: C, date: "2025-11-18", readTime: "5 min", image: IMG.intl,
    body: `An IOR is a legal entity that acts as the importer of your goods into a country. They exist because most countries require the importer to be a local entity.

## The two use cases

You don't have a local entity yet (fastest path to market). Or you have a local entity but don't want it on the import records (legitimate reasons for holding companies).

## The commercial trade-off

IORs charge 3-8% of landed cost typically. Setting up your own entity has one-time costs (£3,000-£15,000 depending on country) and ongoing accounting (£3,000-£10,000/year).

## Break-even math

If you're shipping under £1m/year into a country, IOR is cheaper. Above that, your own entity almost always wins.

## Where IORs commonly fail

Poor customs handling causing delays, tax residency confusion, and refusal to handle regulated categories (food, beauty, batteries). Vet carefully.

## Regional recommendations

UAE, Saudi, Singapore, US, UK all have well-established IOR ecosystems. India, Indonesia, and Vietnam are more variable — audit specifically.`
  },
  {
    slug: "shopify-checkout-optimisation-quick-wins",
    title: "Shopify checkout optimisation: the quick wins",
    excerpt: "Checkout is the highest-CVR real estate on your site. Here are the changes that move numbers within a week.",
    category: "Shopify",
    keywords: ["Shopify checkout", "Shopify CRO", "checkout optimisation"],
    author: A, date: "2025-11-16", readTime: "5 min", image: IMG.shopify,
    body: `Shopify's checkout is the single most-tested surface in ecommerce. Here's what actually moves CVR in a fortnight.

## Enable Shop Pay accelerated checkout

If you're not showing Shop Pay in the accelerated checkout row, enable it. Free CVR uplift.

## Trust signals above the fold

Payment method logos, security badges, satisfaction guarantee. Buyers hesitate to enter card details without these.

## Progress indicator

Multi-step checkout without a clear progress indicator drops off. Add one.

## Cart-page cross-sells

One relevant cross-sell block on the cart page — not five. Aim for a genuine complementary product.

## Ship-to threshold display

"Add £8 for free shipping" bars lift AOV 3-7% reliably. Bake them into the cart, not just as a modal.

## Address autocomplete

Cuts checkout time by 30%. Google Places API or Loqate. Every second of checkout time correlates with drop-off.

## Guest checkout on by default

Force-account-creation kills mobile CVR. Guest checkout with a soft "want to save your details?" post-purchase.`
  },
  {
    slug: "subscription-commerce-shopify",
    title: "Subscription commerce on Shopify: setup and growth",
    excerpt: "Subscriptions turn one-time buyers into recurring revenue. Here's how to structure them without cannibalising DTC.",
    category: "Shopify",
    keywords: ["Shopify subscriptions", "subscription commerce", "recurring revenue DTC"],
    author: B, date: "2025-11-14", readTime: "6 min", image: IMG.shopify,
    body: `Subscriptions are the highest-LTV format in ecommerce — if the product genuinely rewards recurrence.

## Product-fit first

Consumables (coffee, supplements, skincare, pet food) work. Occasion goods (fashion, gifting) don't. Do not force subscriptions on the wrong category.

## App choice

Recharge is the market leader. Skio is the fastest-growing challenger. Bold, Loop, and Ordergroove are all viable. For most Plus stores, Recharge or Skio.

## Incentive structure

10-20% recurring discount is the market norm. Below 10%, take-up drops materially. Above 20%, you cannibalise one-off buyers.

## Portal quality matters more than acquisition

Customers stay subscribed if they can easily skip, delay, swap, or pause. Bad portals churn subscribers. Test yours quarterly.

## The economics

Model out: acquisition cost, first-order margin, expected months on subscription, cost-to-serve per month. Break-even is often 3-4 months into subscription.

## Where founders lose

Focusing on new-subscriber count and ignoring retention. A 5% monthly churn rate kills the LTV maths. Aim for under 3%.`
  },
  {
    slug: "loyalty-programs-drive-ltv",
    title: "Loyalty programs that actually drive LTV",
    excerpt: "Most ecommerce loyalty programmes are point-based, ignored, and unprofitable. Here's what actually works.",
    category: "Shopify",
    keywords: ["ecommerce loyalty program", "Shopify loyalty", "customer retention"],
    author: B, date: "2025-11-12", readTime: "6 min", image: IMG.shopify,
    body: `Loyalty is one of the most-overhyped and under-executed initiatives in DTC. Done well, it's a compounding engine. Done badly, it's an expensive giveaway.

## Points vs tiers

Points programmes are cheap to run and mostly ineffective. Tier-based programmes (Silver / Gold / Platinum with perks) drive genuinely better retention.

## What actually retains

Early access to launches, birthday gifts, free shipping thresholds, VIP-only bundles. Not "spend £1, earn 1 point."

## Communication cadence

The programme dies if customers don't remember it. Monthly email touchpoint minimum, with visible tier status in every order confirmation.

## Referrals are half the value

Loyalty and referrals are two halves of the same programme. Best customers are your best referrers. Enable both from the same platform (Yotpo, Smile, LoyaltyLion).

## The economics

Model out cost per redemption vs incremental repeat rate. If redemption cost > incremental margin, kill the reward. Ruthless maths.

## When not to run one

Sub-£30 AOV, low-frequency categories, and heavily discount-driven categories. Loyalty layered on top of discounts is a margin bloodbath.`
  },
  {
    slug: "post-purchase-experience-growth-lever",
    title: "The post-purchase experience: an underrated growth lever",
    excerpt: "What happens after checkout matters as much as what happens before. Here's the post-purchase playbook.",
    category: "Operations",
    keywords: ["post purchase experience", "customer retention DTC", "unboxing"],
    author: B, date: "2025-11-10", readTime: "5 min", image: IMG.ops,
    body: `The 30 days after a purchase is when a one-time buyer becomes a customer for life — or a churned name in the CRM.

## The order confirmation

Not a receipt — a brand moment. Show delivery estimate, next-order teaser, and a genuine thank-you from a real person.

## The shipping notification

Layered: dispatched, out for delivery, delivered. Each is an engagement opportunity, not a boring status update.

## Delivery experience

Packaging that reinforces the brand, a hand-written thank-you card (or printed to look hand-written), a small unexpected extra (sample, sticker, gift).

## The 14-day check-in

Automated email asking for a review, plus a soft cross-sell of complementary products. This is where the second-purchase decision is made.

## The 60-day cross-sell

If they haven't repurchased in 60 days, targeted cross-sell offering something genuinely different from what they bought. Not a discount — a discovery.

## Where founders under-invest

Post-purchase emails typically get 3x the open rate of promotional emails. But most brands send them once and stop iterating. Treat them as high-priority CRO surfaces.`
  },
  {
    slug: "brand-protection-amazon-map-ip-gating",
    title: "Brand protection on Amazon: MAP, IP, and gating",
    excerpt: "Every scaling Amazon brand hits the moment of unauthorised sellers. Here's how to defend and reclaim your listings.",
    category: "Amazon",
    keywords: ["Amazon brand protection", "MAP policy Amazon", "Amazon Brand Registry"],
    author: A, date: "2025-11-08", readTime: "6 min", image: IMG.amazon,
    body: `The moment your Amazon business becomes worth something, unauthorised sellers appear. Defending the brand is a specific operational discipline.

## Amazon Brand Registry first

Non-negotiable. Register the trademark, enrol Brand Registry, and unlock the tools (A+ Content, Sponsored Brands, Vine, IP takedowns).

## The MAP policy

Minimum Advertised Price policy — a legally binding agreement with your wholesalers about the lowest price they can advertise. Enforce it. Otherwise the race-to-the-bottom starts.

## IP takedowns

Brand Registry lets you report counterfeit listings. Use the tool aggressively — Amazon actions genuine trademark reports within 48 hours.

## Test buys

Every quarter, buy your product from every third-party seller on the listing. Verify authenticity, packaging, and condition. Untraceable ones are almost always unauthorised.

## Category gating

For established brands, apply for gated-category protection so new sellers cannot list your ASIN without brand approval. Slow to arrange, effective once in place.

## The single failure mode

Ignoring the issue until 20 sellers are on your listing. By then, reclaim is 6-9 months of work. Start on unauthorised sellers the day the first one appears.`
  },
  {
    slug: "hire-agency-vs-in-house",
    title: "When to hire an ecommerce agency vs building in-house",
    excerpt: "The most common founder question we hear. Here's an honest framework — including when we tell brands not to hire us.",
    category: "Operations",
    keywords: ["ecommerce agency vs in-house", "hire ecommerce agency UK", "when to outsource ecommerce"],
    author: B, date: "2025-11-06", readTime: "6 min", image: IMG.ops,
    body: `Every founder eventually has to decide: hire an agency, or build in-house? Here's the framework we give clients — even when it means telling them not to hire us.

## Agencies win when

Specialist skill is required for a defined window (launch, migration, replatform). Multi-channel coordination is beyond current team bandwidth. Rapid capability scale-up is more valuable than institutional knowledge accumulation.

## In-house wins when

Ecommerce is the majority of your revenue and will stay that way. You have the leadership to hire and retain senior talent. Your unit economics support 2-4 senior ecommerce hires.

## The hybrid model

Increasingly the answer. Senior in-house lead (Head of Ecommerce or COO). Agency partners for specialist channels (Amazon, paid social, SEO). The lead runs commercial strategy; agencies run execution.

## Cost comparison honestly

A senior Amazon manager in-house in the UK is £70-90k/year plus 25-30% overhead. An equivalent agency retainer is £3-6k/month. Agency wins on cost until you cross about £2m/year of Amazon-managed volume.

## The single failure mode

Hiring in-house before you're ready for senior talent, or hiring an agency to be a full-team replacement. Match scope to capability.

## When we tell brands not to hire us

If they want a warm-body outsource, or if they aren't ready to make weekly operating decisions, or if they think an agency is a substitute for strategy. Not everyone should hire an agency.`
  },
];
