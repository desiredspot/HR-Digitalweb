// src/app/(site)/portfolio/page.tsx
import type { Metadata } from "next";
import { ogImage } from "@/lib/og";
import { siteConfig } from "@/lib/site-config";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { PortfolioCaseStudies } from "@/components/portfolio/PortfolioCaseStudies";

const title = "Portfolio | Websites & Landing Pages | HR Digital Web";
const description =
  "Websites, Next.js web apps, Unbounce landing pages, GoHighLevel funnels and content projects built by HR Digital Web for growing businesses.";
const path = "/portfolio";

export const metadata: Metadata = {
  // `absolute` skips any title template in your root layout, so the title is used exactly as written
  title: { absolute: title },
  description,
  keywords: ["web design portfolio", "landing page examples", "Next.js website examples", "GoHighLevel funnel examples"],
  alternates: { canonical: path },
  openGraph: { type: "website", url: path, title, description, siteName: siteConfig.name, images: [ogImage("portfolio")] },
  twitter: { card: "summary_large_image", title, description, images: [ogImage("portfolio").url] },
};

// Fully static: rendered at build time and served from the CDN.
export const dynamic = "force-static";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${siteConfig.url}${path}#webpage`,
      name: title,
      description,
      url: `${siteConfig.url}${path}`,
      // Matches the @id of the business in your home page schema, so Google links them together
      about: { "@type": "ProfessionalService", "@id": `${siteConfig.url}/#business`, name: siteConfig.name },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Portfolio", item: `${siteConfig.url}${path}` },
      ],
    },
  ],
};

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <PortfolioHero />
      <PortfolioCaseStudies />
    </>
  );
}