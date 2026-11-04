// src/app/(site)/services/landing-page-design/page.tsx
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { LandingPageHero } from "@/components/services/landing-page-design/LandingPageHero";
import { LandingPageTypes } from "@/components/services/landing-page-design/LandingPageTypes";
import { WhatMakesItConvert } from "@/components/services/landing-page-design/WhatMakesItConvert";
import { LandingPageIncluded } from "@/components/services/landing-page-design/LandingPageIncluded";
import { LandingPageFaq } from "@/components/services/landing-page-design/LandingPageFaq";

const title = "Unbounce Landing Page Designer | HR Digital Web";
const description =
  "High-converting Unbounce landing pages for Google Ads, Meta Ads and launches. Persuasive copy, mobile design, tracking and A/B testing. Get a free quote.";
const path = "/services/landing-page-design";

export const metadata: Metadata = {
  // `absolute` skips any title template in your root layout, so the title is used exactly as written
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { type: "website", url: path, title, description, siteName: siteConfig.name },
  twitter: { card: "summary_large_image", title, description },
};

// Fully static: rendered at build time and served from the CDN.
export const dynamic = "force-static";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${siteConfig.url}${path}#service`,
      name: "Unbounce landing page design",
      serviceType: "Landing page design",
      description,
      url: `${siteConfig.url}${path}`,
      areaServed: "Worldwide",
      // Matches the @id of the business in your home page schema, so Google links them together
      provider: { "@type": "ProfessionalService", "@id": `${siteConfig.url}/#business`, name: siteConfig.name },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
        { "@type": "ListItem", position: 3, name: "Landing page design", item: `${siteConfig.url}${path}` },
      ],
    },
  ],
};

export default function LandingPageDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <LandingPageHero />
      <LandingPageTypes />
      <WhatMakesItConvert />
      <LandingPageIncluded />
      <LandingPageFaq />
    </>
  );
}