// src/app/(site)/services/seo/page.tsx
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { SeoHero } from "@/components/services/seo/SeoHero";
import { SeoServices } from "@/components/services/seo/SeoServices";
import { SeoProcess } from "@/components/services/seo/SeoProcess";
import { SeoIncluded } from "@/components/services/seo/SeoIncluded";

const title = "SEO Services for Small Businesses | Technical & Local SEO";
const description =
  "SEO services that get you found on Google: technical SEO audits, on-page optimisation, local SEO and Google Business Profile setup, with clear monthly reports.";
const path = "/services/seo";

export const metadata: Metadata = {
  // `absolute` skips any title template in your root layout, so the title is used exactly as written
  title: { absolute: title },
  description,
  keywords: [
    "SEO services for small businesses",
    "technical SEO audit",
    "local SEO services",
    "on-page SEO",
    "Google Business Profile optimisation",
    "SEO consultant",
  ],
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
      name: "SEO services for small businesses",
      serviceType: "Search engine optimisation",
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
        { "@type": "ListItem", position: 3, name: "SEO services", item: `${siteConfig.url}${path}` },
      ],
    },
  ],
};

export default function SeoServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <SeoHero />
      <SeoServices />
      <SeoProcess />
      <SeoIncluded />
    </>
  );
}