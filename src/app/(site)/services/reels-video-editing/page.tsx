// src/app/(site)/services/reels-video-editing/page.tsx
import type { Metadata } from "next";
import { ogImage } from "@/lib/og";
import { siteConfig } from "@/lib/site-config";
import { ReelsHero } from "@/components/services/reels-video-editing/ReelsHero";
import { ReelsCategories } from "@/components/services/reels-video-editing/ReelsCategories";
import { ReelIncludes } from "@/components/services/reels-video-editing/ReelIncludes";
import { ReelsHowItWorks } from "@/components/services/reels-video-editing/ReelsHowItWorks";
import { ReelsFaq } from "@/components/services/reels-video-editing/ReelsFaq";

const title = "Instagram Reels Editing & Short-Form Video | HR Digital Web";
const description =
  "Reels and shorts editing for Instagram, YouTube and TikTok. Strong hooks, captions, B-roll and music in 30–60 second videos, delivered in 48–72 hours.";
const path = "/services/reels-video-editing";

export const metadata: Metadata = {
  // `absolute` skips any title template in your root layout, so the title is used exactly as written
  title: { absolute: title },
  description,
  keywords: [
    "Instagram Reels editing",
    "short-form video editing",
    "reels editor for hire",
    "YouTube Shorts editing",
    "1 minute reels",
  ],
  alternates: { canonical: path },
  openGraph: { type: "website", url: path, title, description, siteName: siteConfig.name, images: [ogImage("reels-video-editing")] },
  twitter: { card: "summary_large_image", title, description, images: [ogImage("reels-video-editing").url] },
};

// Fully static: rendered at build time and served from the CDN.
export const dynamic = "force-static";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${siteConfig.url}${path}#service`,
      name: "Instagram Reels editing and short-form video",
      serviceType: "Video editing",
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
        { "@type": "ListItem", position: 3, name: "Reels and short-form video", item: `${siteConfig.url}${path}` },
      ],
    },
  ],
};

export default function ReelsVideoEditingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ReelsHero />
      <ReelsCategories />
      <ReelIncludes />
      <ReelsHowItWorks />
      <ReelsFaq />
    </>
  );
}