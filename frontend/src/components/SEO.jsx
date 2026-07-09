import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, path = "" }) {
  const fullTitle = title
    ? `${title} | GlobiSync — UK Ecommerce & International Commerce Growth`
    : "GlobiSync | UK Ecommerce & International Commerce Growth";

  const desc =
    description ||
    "GlobiSync is a UK-based ecommerce growth and international commerce agency helping brands and Amazon sellers grow across Amazon, online marketplaces, retail channels and global markets.";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <link
        rel="canonical"
        href={`https://www.globisync.com${path}`}
      />
    </Helmet>
  );
}