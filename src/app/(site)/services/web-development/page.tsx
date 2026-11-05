// src/app/(site)/services/web-development/page.tsx
import type { Metadata } from "next";
import { ogImage } from "@/lib/og";
import { siteConfig } from "@/lib/site-config";
import { NextjsHero } from "@/components/services/web-development/NextjsHero";
import { NextjsBuildTypes } from "@/components/services/web-development/NextjsBuildTypes";
import { WhyNextjsSection } from "@/components/services/web-development/WhyNextjsSection";
import { IncludedInEveryBuild } from "@/components/services/web-development/IncludedInEveryBuild";
import { NextjsFaq } from "@/components/services/web-development/NextjsFaq";

const title = "Next.js Development Services | Fast Websites | HR Digital Web";
const description =
  "Next.js development services for fast, SEO-friendly business websites and web apps. Top Core Web Vitals, headless CMS and a fixed quote. Book a free call.";
const path = "/services/web-development";

export const metadata: Metadata = {
  // `absolute` skips any title template in your root layout, so the title is used exactly as written
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { type: "website", url: path, title, description, siteName: siteConfig.name, images: [ogImage("web-development")] },
  twitter: { card: "summary_large_image", title, description, images: [ogImage("web-development").url] },
};

// Fully static: rendered at build time and served from the CDN.
export const dynamic = "force-static";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${siteConfig.url}${path}#service`,
      name: "Next.js development services",
      serviceType: "Web development",
      description,
      url: `${siteConfig.url}${path}`,
      areaServed: "Worldwide",
      provider: { "@type": "ProfessionalService", "@id": `${siteConfig.url}/#business`, name: siteConfig.name },
      // Matches the @id of the business in your home page schema, so Google links them together
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
        { "@type": "ListItem", position: 3, name: "Web development", item: `${siteConfig.url}${path}` },
      ],
    },
  ],
};

export default function WebDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <NextjsHero />
      <NextjsBuildTypes />
      <WhyNextjsSection />
      <IncludedInEveryBuild />
      <NextjsFaq />
    </>
  );
}