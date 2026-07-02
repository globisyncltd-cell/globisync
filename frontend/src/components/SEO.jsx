import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, path = "" }) {
  const fullTitle = title
    ? `${title} | GlobiSync — UK Ecommerce Agency`
    : "GlobiSync | UK Ecommerce Agency — Marketplace, Shopify & SEO Growth";
  const desc =
    description ||
    "GlobiSync is a UK ecommerce agency helping brands and Amazon sellers grow across Amazon, eBay, Etsy, Shopify, TikTok Shop and international marketplaces.";
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <link rel="canonical" href={`https://www.globisync.com${path}`} />
    </Helmet>
  );
}
