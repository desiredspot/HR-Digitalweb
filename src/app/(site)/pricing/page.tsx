// src/app/(site)/pricing/page.tsx
import type { Metadata } from "next";
import { ogImage } from "@/lib/og";
import { serviceHref, siteConfig } from "@/lib/site-config";
import { priceToNumber, pricingRows, pricingTiers, tierLabels } from "@/lib/pricing";
import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingLaunchOffer } from "@/components/pricing/PricingLaunchOffer";
import { PricingRetainer } from "@/components/pricing/PricingRetainer";
import { PricingIncludes } from "@/components/pricing/PricingIncludes";
import { PricingPaymentTerms } from "@/components/pricing/PricingPaymentTerms";

const title = "Website & Digital Marketing Packages | HR Digital Web";
const description =
  "Clear starting prices for websites, landing pages, GoHighLevel setup, email marketing, blog content, social media and reels. Fixed quotes, no hidden fees.";
const path = "/pricing";

export const metadata: Metadata = {
  // `absolute` skips any title template in your root layout, so the title is used exactly as written
  title: { absolute: title },
  description,
  keywords: [
    "website design packages",
    "landing page design cost",
    "GoHighLevel setup cost",
    "social media management packages",
  ],
  alternates: { canonical: path },
  openGraph: { type: "website", url: path, title, description, siteName: siteConfig.name, images: [ogImage("pricing")] },
  twitter: { card: "summary_large_image", title, description, images: [ogImage("pricing").url] },
};

// Fully static: rendered at build time and served from the CDN.
export const dynamic = "force-static";

// Offer catalogue built from the same price list, using "starting from" (minPrice) prices in USD.
// Custom-quote tiers are left out because they have no fixed price.
const offers = pricingRows.flatMap((row) =>
  pricingTiers.flatMap((t) => {
    const min = priceToNumber(row[t].usd);
    if (min === null) return [];
    return [
      {
        "@type": "Offer",
        name: `${row.service}: ${tierLabels[t]} (${row[t].details})`,
        url: `${siteConfig.url}${serviceHref(row.slug)}`,
        priceSpecification: { "@type": "PriceSpecification", minPrice: min, priceCurrency: "USD" },
      },
    ];
  }),
);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${path}#webpage`,
      name: title,
      description,
      url: `${siteConfig.url}${path}`,
    },
    {
      "@type": "OfferCatalog",
      "@id": `${siteConfig.url}${path}#catalog`,
      name: "Website and digital marketing packages",
      itemListElement: offers,
      // Matches the @id of the business in your home page schema, so Google links them together
      provider: { "@type": "ProfessionalService", "@id": `${siteConfig.url}/#business`, name: siteConfig.name },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Pricing", item: `${siteConfig.url}${path}` },
      ],
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <PricingHero />
      <PricingLaunchOffer />
      <PricingRetainer />
      <PricingIncludes />
      <PricingPaymentTerms />
    </>
  );
}