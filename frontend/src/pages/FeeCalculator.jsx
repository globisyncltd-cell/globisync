import React, { useState, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Calculator, ArrowUpRight, CheckCircle2, TrendingUp, TrendingDown } from "lucide-react";
import SEO from "@/components/SEO";
import { SITE } from "@/lib/content";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

// UK marketplace fee schedules by category (GBP). Sources: Amazon UK Selling fees,
// eBay UK final value fees, Etsy fee schedule as published in 2026.
const AMAZON_CATEGORIES = [
  { id: "beauty", label: "Beauty & Personal Care", ref: 0.15 },
  { id: "electronics", label: "Consumer Electronics", ref: 0.08 },
  { id: "electronics_acc", label: "Electronics Accessories", ref: 0.15 },
  { id: "computers", label: "Computers", ref: 0.07 },
  { id: "clothing", label: "Clothing & Apparel", ref: 0.17 },
  { id: "shoes", label: "Shoes & Handbags", ref: 0.15 },
  { id: "home", label: "Home & Kitchen", ref: 0.15 },
  { id: "jewellery", label: "Jewellery", ref: 0.20 },
  { id: "watches", label: "Watches", ref: 0.16 },
  { id: "health", label: "Health & Household", ref: 0.15 },
  { id: "baby", label: "Baby Products", ref: 0.15 },
  { id: "toys", label: "Toys & Games", ref: 0.15 },
  { id: "sports", label: "Sports & Outdoors", ref: 0.15 },
  { id: "pet", label: "Pet Supplies", ref: 0.15 },
  { id: "grocery", label: "Grocery & Gourmet", ref: 0.15 },
  { id: "books", label: "Books", ref: 0.15 },
  { id: "automotive", label: "Automotive & Tools", ref: 0.12 },
  { id: "other", label: "Other / Everything Else", ref: 0.15 },
];

const EBAY_CATEGORIES = [
  { id: "general", label: "Most categories", ref: 0.128, perOrder: 0.30 },
  { id: "electronics", label: "Consumer Electronics", ref: 0.128, perOrder: 0.30 },
  { id: "clothing", label: "Clothing / Shoes / Accessories", ref: 0.128, perOrder: 0.30 },
  { id: "books", label: "Books, DVDs, Music, Video Games", ref: 0.144, perOrder: 0.30 },
  { id: "business", label: "Business & Industrial", ref: 0.128, perOrder: 0.30 },
  { id: "watches", label: "Watches", ref: 0.15, perOrder: 0.30 },
  { id: "jewellery", label: "Jewellery & Watches", ref: 0.15, perOrder: 0.30 },
  { id: "trading_cards", label: "Trading Cards & Collectibles", ref: 0.128, perOrder: 0.30 },
];

const ETSY_CATEGORIES = [
  { id: "general", label: "All categories (flat rate)", ref: 0.065, proc: 0.04, perOrder: 0.20 },
];

const MARKETPLACES = {
  amazon: {
    label: "Amazon UK",
    categories: AMAZON_CATEGORIES,
    processingPct: 0.00,
    perOrder: 0.0,
    subscription: 25.00,
    notes: (cat) => `Amazon UK ${cat.label}: referral fee ${(cat.ref * 100).toFixed(1)}%. Payment processing is included in the referral fee. Professional seller subscription £25/month (fixed).`,
  },
  ebay: {
    label: "eBay UK",
    categories: EBAY_CATEGORIES,
    processingPct: 0.00,
    perOrderKey: "perOrder",
    subscription: 0.00,
    notes: (cat) => `eBay UK ${cat.label}: final value fee ${(cat.ref * 100).toFixed(2)}% (includes payment processing) plus £${cat.perOrder.toFixed(2)} per order. Store subscriptions optional.`,
  },
  etsy: {
    label: "Etsy UK",
    categories: ETSY_CATEGORIES,
    processingKey: "proc",
    perOrderKey: "perOrder",
    subscription: 0.00,
    notes: (cat) => `Etsy UK: transaction fee ${(cat.ref * 100).toFixed(1)}%, payment processing ${(cat.proc * 100).toFixed(1)}% + £${cat.perOrder.toFixed(2)} per order, plus £0.20 listing fee (renewed every 4 months).`,
  },
};

function currency(n) { return "£" + n.toFixed(2); }

export default function FeeCalculator() {
  const [marketplaceKey, setMarketplaceKey] = useState("amazon");
  const [categoryId, setCategoryId] = useState("beauty");
  const [cost, setCost] = useState(10);
  const [price, setPrice] = useState(29.99);
  const [shipping, setShipping] = useState(3.5);
  const [leadEmail, setLeadEmail] = useState("");
  const [leadName, setLeadName] = useState("");
  const [leadSent, setLeadSent] = useState(false);
  const [sending, setSending] = useState(false);

  const m = MARKETPLACES[marketplaceKey];
  const category = m.categories.find((c) => c.id === categoryId) || m.categories[0];

  // reset category when marketplace changes
  const handleMarketplaceChange = (v) => {
    setMarketplaceKey(v);
    setCategoryId(MARKETPLACES[v].categories[0].id);
  };

  const calc = useMemo(() => {
    const p = Math.max(0, parseFloat(price) || 0);
    const c = Math.max(0, parseFloat(cost) || 0);
    const s = Math.max(0, parseFloat(shipping) || 0);
    const referralPct = category.ref;
    const processingPct = m.processingKey ? (category[m.processingKey] || 0) : m.processingPct;
    const perOrder = m.perOrderKey ? (category[m.perOrderKey] || 0) : m.perOrder;
    const referral = p * referralPct;
    const processing = p * processingPct;
    const feesTotal = referral + processing + perOrder;
    const grossMargin = p - c - s;
    const netProfit = grossMargin - feesTotal;
    const marginPct = p > 0 ? (netProfit / p) * 100 : 0;
    return { p, c, s, referral, processing, perOrder, feesTotal, grossMargin, netProfit, marginPct, referralPct, processingPct };
  }, [price, cost, shipping, m, category]);

  const isProfit = calc.netProfit >= 0;

  const captureLead = async (e) => {
    e.preventDefault();
    if (!leadEmail || !leadName) {
      toast.error("Please add your name and email.");
      return;
    }
    setSending(true);
    try {
      await axios.post(`${API}/contact`, {
        name: leadName,
        email: leadEmail,
        message: `Fee-calculator lead. Marketplace: ${m.label} · Category: ${category.label}. Cost £${calc.c.toFixed(2)}, price £${calc.p.toFixed(2)}, shipping £${calc.s.toFixed(2)}. Estimated net margin: ${calc.marginPct.toFixed(1)}%.`,
      });
      setLeadSent(true);
      toast.success("Thanks — margin insights are on their way.");
    } catch {
      toast.error("Something went wrong. Please try WhatsApp.");
    } finally { setSending(false); }
  };

  return (
    <>
      <SEO
        title="UK Marketplace Fee Calculator — Amazon, eBay, Etsy"
        description="Free UK marketplace fee calculator for Amazon UK, eBay UK and Etsy UK. Category-specific referral fees, payment processing costs, and net profit per sale."
        path="/fee-calculator"
      />

      <section className="bg-white pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Calculator className="h-5 w-5 text-amber" />
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">[ Free tool for sellers ]</div>
          </div>
          <h1 className="mt-3 font-serif text-4xl md:text-6xl font-bold text-ink leading-[1.05]">
            UK Marketplace<br />Fee Calculator
          </h1>
          <p className="mt-6 max-w-2xl text-muted2 text-lg">
            Estimate referral fees, payment-processing costs, and net profit per sale on Amazon UK, eBay UK,
            and Etsy UK — with category-specific rates.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-6">
          {/* Inputs */}
          <div className="lg:col-span-5 border border-ink p-6 md:p-8 bg-white">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted2">[ Inputs ]</div>
            <div className="mt-6 space-y-4">
              <div>
                <Label>Marketplace</Label>
                <Select value={marketplaceKey} onValueChange={handleMarketplaceChange}>
                  <SelectTrigger data-testid="fc-marketplace" className="mt-1 rounded-none">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="amazon" data-testid="fc-opt-amazon">Amazon UK</SelectItem>
                    <SelectItem value="ebay" data-testid="fc-opt-ebay">eBay UK</SelectItem>
                    <SelectItem value="etsy" data-testid="fc-opt-etsy">Etsy UK</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Category</Label>
                <Select value={categoryId} onValueChange={setCategoryId}>
                  <SelectTrigger data-testid="fc-category" className="mt-1 rounded-none">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="max-h-72">
                    {m.categories.map((c) => (
                      <SelectItem key={c.id} value={c.id} data-testid={`fc-cat-${c.id}`}>
                        {c.label} · {(Math.round(c.ref * 1000) / 10).toFixed(1)}%
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="fc-cost">Product cost (£)</Label>
                <Input id="fc-cost" data-testid="fc-cost" type="number" min="0" step="0.01" value={cost} onChange={(e) => setCost(e.target.value)} className="mt-1 rounded-none" />
              </div>
              <div>
                <Label htmlFor="fc-price">Selling price (£)</Label>
                <Input id="fc-price" data-testid="fc-price" type="number" min="0" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} className="mt-1 rounded-none" />
              </div>
              <div>
                <Label htmlFor="fc-shipping">Your shipping cost per order (£)</Label>
                <Input id="fc-shipping" data-testid="fc-shipping" type="number" min="0" step="0.01" value={shipping} onChange={(e) => setShipping(e.target.value)} className="mt-1 rounded-none" />
              </div>
            </div>
            <div className="mt-6 p-4 bg-secondary/50 border-l-2 border-amber text-xs text-muted2 leading-relaxed">
              {m.notes(category)}
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-7">
            <div className="border border-ink bg-slate950 text-white p-6 md:p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 grain" />
              <div className="relative">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">[ {m.label} · {category.label} · per sale ]</div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-[0.15em] text-white/60">Net profit</div>
                    <div
                      data-testid="fc-net-profit"
                      className={`mt-1 font-serif text-5xl md:text-6xl font-bold leading-none ${
                        isProfit ? "text-amber" : "text-red-400"
                      }`}
                    >
                      {currency(calc.netProfit)}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-[0.15em] text-white/60">Net margin</div>
                    <div
                      data-testid="fc-margin-pct"
                      className={`mt-1 font-serif text-5xl md:text-6xl font-bold leading-none ${
                        isProfit ? "text-amber" : "text-red-400"
                      }`}
                    >
                      {calc.marginPct.toFixed(1)}%
                    </div>
                  </div>
                </div>

                <div className="mt-2 inline-flex items-center gap-1 text-xs text-white/70">
                  {isProfit ? <TrendingUp className="h-3 w-3 text-amber" /> : <TrendingDown className="h-3 w-3 text-red-400" />}
                  {isProfit ? "Profitable per sale" : "Loss per sale — reprice or reduce cost"}
                </div>

                <div className="mt-8 border-t border-white/10 pt-6 space-y-2 text-sm">
                  {[
                    ["Selling price", calc.p, false],
                    ["Product cost", -calc.c, false],
                    ["Shipping cost", -calc.s, false],
                    [`Referral fee (${(calc.referralPct * 100).toFixed(1)}%)`, -calc.referral, true],
                    calc.processingPct > 0 && [`Payment processing (${(calc.processingPct * 100).toFixed(1)}%)`, -calc.processing, true],
                    calc.perOrder > 0 && [`Per-order fee`, -calc.perOrder, true],
                  ].filter(Boolean).map(([label, val, fee], i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className={fee ? "text-white/70" : "text-white"}>{label}</div>
                      <div className={`font-mono ${val < 0 ? "text-white/70" : "text-white"}`}>{currency(val)}</div>
                    </div>
                  ))}
                  <div className="flex items-center justify-between pt-3 mt-3 border-t border-white/10 font-bold">
                    <div>Net profit / sale</div>
                    <div className={`font-mono ${isProfit ? "text-amber" : "text-red-400"}`}>{currency(calc.netProfit)}</div>
                  </div>
                </div>

                {m.subscription > 0 && (
                  <div className="mt-4 text-xs text-white/60">
                    + {m.label} seller subscription {currency(m.subscription)}/month (fixed)
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 p-6 border border-ink bg-amber">
              <div className="font-serif text-xl md:text-2xl font-bold text-ink leading-snug">
                Want help maximising your margins across marketplaces?
              </div>
              <Link to="/contact">
                <Button
                  data-testid="fc-book-call"
                  className="mt-4 rounded-none bg-ink text-white hover:bg-white hover:text-ink border border-ink font-semibold"
                >
                  {SITE.cta} <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">[ How UK marketplace fees work ]</div>
          <h2 className="mt-3 font-serif text-3xl md:text-5xl font-bold text-ink max-w-3xl leading-tight">
            The three fee layers every seller pays.
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {[
              {
                t: "Referral / Commission",
                d: "A percentage of the selling price kept by the marketplace. Amazon UK varies by category from 7% (computers) to 20% (jewellery). eBay UK typically 12.8%. Etsy 6.5% flat.",
              },
              {
                t: "Payment Processing",
                d: "On Amazon and eBay it's baked into the headline fee. On Etsy it's separate at ~4% + £0.20 per order. TikTok Shop and Shopify are structured differently.",
              },
              {
                t: "Subscription / Listing",
                d: "Amazon: £25/month Professional. eBay: optional store fees. Etsy: £0.20 per listing, renewed every 4 months, plus per-order fees.",
              },
            ].map((x, i) => (
              <div key={i} className="p-6 bg-white border border-border">
                <div className="text-xs font-mono uppercase tracking-[0.15em] text-muted2">0{i + 1}</div>
                <div className="mt-2 font-serif text-xl font-bold text-ink">{x.t}</div>
                <p className="mt-3 text-sm text-muted2 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-xs text-muted2">
            Fees shown are indicative UK-published rates as at 2026. FBA / MCF / storage / advertising fees are additional and not modelled by this calculator.
          </div>
        </div>
      </section>

      <section className="bg-white py-16 border-t border-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber">[ Get the full margin playbook ]</div>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-ink leading-tight">
            Want a written breakdown of how to protect margin across Amazon, eBay, and Etsy?
          </h2>
          <p className="mt-3 text-muted2">
            Drop your email — we'll send you our one-page marketplace margin playbook plus category-specific fee tables. No spam, no auto-drip.
          </p>

          {leadSent ? (
            <div data-testid="fc-lead-success" className="mt-6 p-6 border border-ink bg-secondary/50 flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-amber flex-none mt-1" />
              <div>
                <div className="font-serif text-xl font-bold text-ink">Thanks — heading your way.</div>
                <div className="text-sm text-muted2 mt-1">
                  Watch your inbox. If we can help with your margin structure, we'll follow up personally.
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={captureLead} data-testid="fc-lead-form" className="mt-6 grid sm:grid-cols-3 gap-3">
              <Input data-testid="fc-lead-name" placeholder="Your name" value={leadName} onChange={(e) => setLeadName(e.target.value)} required className="rounded-none" />
              <Input data-testid="fc-lead-email" type="email" placeholder="Email" value={leadEmail} onChange={(e) => setLeadEmail(e.target.value)} required className="rounded-none" />
              <Button
                type="submit"
                disabled={sending}
                data-testid="fc-lead-submit"
                className="rounded-none bg-ink text-white hover:bg-amber hover:text-ink border border-ink font-semibold"
              >
                {sending ? "Sending…" : "Send it to me →"}
              </Button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
