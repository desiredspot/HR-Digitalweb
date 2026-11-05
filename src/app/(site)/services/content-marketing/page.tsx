// src/app/(site)/services/content-marketing/page.tsx
import type { Metadata } from "next";
import { ogImage } from "@/lib/og";
import { siteConfig } from "@/lib/site-config";
import { ContentHero } from "@/components/services/content-marketing/ContentHero";
import { ContentTypes } from "@/components/services/content-marketing/ContentTypes";
import { ContentProcess } from "@/components/services/content-marketing/ContentProcess";
import { ContentFaq } from "@/components/services/content-marketing/ContentFaq";

const title = "SEO Content Writing Services | Blogs & Website Copy";
const description =
  "SEO content writing services: keyword-researched blog posts, website copy and landing page content that ranks on Google and turns readers into leads.";
const path = "/services/content-marketing";

export const metadata: Metadata = {
  // `absolute` skips any title template in your root layout, so the title is used exactly as written
  title: { absolute: title },
  description,
  keywords: [
    "SEO content writing services",
    "blog writing services",
    "website copywriting",
    "content marketing services",
  ],
  alternates: { canonical: path },
  openGraph: { type: "website", url: path, title, description, siteName: siteConfig.name, images: [ogImage("content-marketing")] },
  twitter: { card: "summary_large_image", title, description, images: [ogImage("content-marketing").url] },
};

// Fully static: rendered at build time and served from the CDN.
export const dynamic = "force-static";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${siteConfig.url}${path}#service`,
      name: "SEO content writing services",
      serviceType: "Content marketing services",
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
        { "@type": "ListItem", position: 3, name: "SEO content writing", item: `${siteConfig.url}${path}` },
      ],
    },
  ],
};

export default function ContentMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ContentHero />
      <ContentTypes />
      <ContentProcess />
      <ContentFaq />
    </>
  );
}