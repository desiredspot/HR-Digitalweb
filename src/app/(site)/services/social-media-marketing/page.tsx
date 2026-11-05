// src/app/(site)/services/social-media-marketing/page.tsx
import type { Metadata } from "next";
import { ogImage } from "@/lib/og";
import { siteConfig } from "@/lib/site-config";
import { SocialHero } from "@/components/services/social-media-marketing/SocialHero";
import { SocialIncluded } from "@/components/services/social-media-marketing/SocialIncluded";
import { SocialPlatforms } from "@/components/services/social-media-marketing/SocialPlatforms";
import { SocialFaq } from "@/components/services/social-media-marketing/SocialFaq";

const title = "Social Media Marketing Services | HR Digital Web";
const description =
  "Social media marketing for Instagram, LinkedIn and Facebook: branded posts, carousels, captions and content calendars that grow your audience.";
const path = "/services/social-media-marketing";

export const metadata: Metadata = {
  // `absolute` skips any title template in your root layout, so the title is used exactly as written
  title: { absolute: title },
  description,
  keywords: [
    "social media marketing services",
    "social media content creation",
    "Instagram post design",
    "LinkedIn content writing",
    "social media management for small business",
  ],
  alternates: { canonical: path },
  openGraph: { type: "website", url: path, title, description, siteName: siteConfig.name, images: [ogImage("social-media-marketing")] },
  twitter: { card: "summary_large_image", title, description, images: [ogImage("social-media-marketing").url] },
};

// Fully static: rendered at build time and served from the CDN.
export const dynamic = "force-static";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${siteConfig.url}${path}#service`,
      name: "Social media marketing services",
      serviceType: "Social media marketing",
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
        { "@type": "ListItem", position: 3, name: "Social media marketing", item: `${siteConfig.url}${path}` },
      ],
    },
  ],
};

export default function SocialMediaMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <SocialHero />
      <SocialIncluded />
      <SocialPlatforms />
      <SocialFaq />
    </>
  );
}