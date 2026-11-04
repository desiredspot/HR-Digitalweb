// src/app/(site)/process/page.tsx
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { ProcessHero } from "@/components/process/ProcessHero";
import { ProcessNeeds } from "@/components/process/ProcessNeeds";
import { ProcessCommunication } from "@/components/process/ProcessCommunication";

const title = "How We Work | Website & Marketing Process | HR Digital Web";
const description =
  "A clear 6-step process for websites, landing pages and marketing projects: discovery, fixed quote, design, build, launch and growth. No surprises.";
const path = "/process";

export const metadata: Metadata = {
  // `absolute` skips any title template in your root layout, so the title is used exactly as written
  title: { absolute: title },
  description,
  keywords: [
    "website development process",
    "web design process",
    "how freelance projects work",
    "digital marketing process",
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
      "@type": "WebPage",
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
        { "@type": "ListItem", position: 2, name: "Process", item: `${siteConfig.url}${path}` },
      ],
    },
  ],
};

export default function ProcessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ProcessHero />
      <ProcessNeeds />
      <ProcessCommunication />
    </>
  );
}