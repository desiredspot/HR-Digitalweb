// src/app/(site)/faq/page.tsx
import type { Metadata } from "next";
import { ogImage } from "@/lib/og";
import { siteConfig } from "@/lib/site-config";
import { allFaqs } from "@/lib/faq";
import { FaqHero } from "@/components/faq/FaqHero";
import { FaqCategorySection } from "@/components/faq/FaqCategorySection";

const title = "FAQ | Hiring a Web Developer & Marketer | HR Digital Web";
const description =
  "Answers about timelines, pricing, revisions, ownership, SEO and GoHighLevel when you hire HR Digital Web for your website and digital marketing.";
const path = "/faq";

export const metadata: Metadata = {
  // `absolute` skips any title template in your root layout, so the title is used exactly as written
  title: { absolute: title },
  description,
  keywords: ["hire a web developer FAQ", "web developer questions", "website project FAQ"],
  alternates: { canonical: path },
  openGraph: { type: "website", url: path, title, description, siteName: siteConfig.name, images: [ogImage("faq")] },
  twitter: { card: "summary_large_image", title, description, images: [ogImage("faq").url] },
};

// Fully static: rendered at build time and served from the CDN.
export const dynamic = "force-static";

// FAQPage schema built from EVERY question in src/lib/faq.ts, so it always matches the page.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}${path}#faq`,
      url: `${siteConfig.url}${path}`,
      name: title,
      mainEntity: allFaqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "FAQ", item: `${siteConfig.url}${path}` },
      ],
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <FaqHero />
      <FaqCategorySection categoryId="projects-timelines" tone="alt" />
      <FaqCategorySection categoryId="pricing-payments" tone="base" />
      <FaqCategorySection categoryId="ownership-seo-tools" tone="alt" closingCta />
    </>
  );
}