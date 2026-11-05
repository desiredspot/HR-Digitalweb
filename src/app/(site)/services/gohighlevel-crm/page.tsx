// src/app/(site)/services/gohighlevel-crm/page.tsx
import type { Metadata } from "next";
import { ogImage } from "@/lib/og";
import { siteConfig } from "@/lib/site-config";
import { GhlHero } from "@/components/services/gohighlevel-crm/GhlHero";
import { GhlServices } from "@/components/services/gohighlevel-crm/GhlServices";
import { GhlAutomationSteps } from "@/components/services/gohighlevel-crm/GhlAutomationSteps";
import { GhlFaq } from "@/components/services/gohighlevel-crm/GhlFaq";

const title = "GoHighLevel Expert | GHL CRM Setup & Automation";
const description =
  "GoHighLevel setup done right: pipelines, funnels, calendars, workflows, SMS and email automation that follow up with every lead automatically.";
const path = "/services/gohighlevel-crm";

export const metadata: Metadata = {
  // `absolute` skips any title template in your root layout, so the title is used exactly as written
  title: { absolute: title },
  description,
  keywords: [
    "GoHighLevel expert",
    "GHL CRM setup",
    "GoHighLevel automation",
    "GoHighLevel funnel builder",
    "marketing automation services",
  ],
  alternates: { canonical: path },
  openGraph: { type: "website", url: path, title, description, siteName: siteConfig.name, images: [ogImage("gohighlevel-crm")] },
  twitter: { card: "summary_large_image", title, description, images: [ogImage("gohighlevel-crm").url] },
};

// Fully static: rendered at build time and served from the CDN.
export const dynamic = "force-static";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${siteConfig.url}${path}#service`,
      name: "GoHighLevel CRM setup and automation",
      serviceType: "Marketing automation services",
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
        { "@type": "ListItem", position: 3, name: "GoHighLevel CRM & automation", item: `${siteConfig.url}${path}` },
      ],
    },
  ],
};

export default function GoHighLevelCrmPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <GhlHero />
      <GhlServices />
      <GhlAutomationSteps />
      <GhlFaq />
    </>
  );
}