import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, path = "" }) {
  const fullTitle = title
    ? `${title} | GlobiSync — UK Ecommerce Agency in Birmingham`
    : "GlobiSync | UK Ecommerce Agency in Birmingham — Cross-Border Marketplace Growth";
  const desc =
    description ||
    "GlobiSync is a Birmingham-based UK ecommerce agency helping ambitious brands sell profitably on Amazon, eBay, Etsy, Lazada, Zalora and Noon across the UK, US, Singapore and Hong Kong.";
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
