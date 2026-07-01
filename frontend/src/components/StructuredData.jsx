import React from "react";

export default function StructuredData() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GlobiSync",
    alternateName: "GlobiSync Ltd",
    url: "https://www.globisync.com",
    logo: "https://www.globisync.com/logo.png",
    description:
      "GlobiSync is a UK ecommerce agency based in Birmingham, helping ambitious brands grow across Amazon, eBay, Etsy, Shopify, TikTok Shop and international marketplaces.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "296 Pershore Road",
      addressLocality: "Birmingham",
      postalCode: "B5 7SH",
      addressCountry: "GB",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+44-7309-721673",
      contactType: "customer support",
      email: "globisyncltd@gmail.com",
      areaServed: ["GB", "US", "AE", "SA", "SG", "MY"],
    },
    sameAs: [
      "https://www.linkedin.com/in/shwetachauhanuk/",
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.globisync.com/#business",
    name: "GlobiSync",
    image: "https://www.globisync.com/og.png",
    telephone: "+44-7309-721673",
    email: "globisyncltd@gmail.com",
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      streetAddress: "296 Pershore Road",
      addressLocality: "Birmingham",
      postalCode: "B5 7SH",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.4614,
      longitude: -1.9036,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
    </>
  );
}
