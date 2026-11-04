// src/app/(site)/services/wordpress-development/page.tsx
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { WordPressHero } from "@/components/services/wordpress-development/WordPressHero";
import { WordPressServices } from "@/components/services/wordpress-development/WordPressServices";
import { WordPressSeoSection } from "@/components/services/wordpress-development/WordPressSeoSection";
import { WordPressControlSection } from "@/components/services/wordpress-development/WordPressControlSection";
import { WordPressFaq } from "@/components/services/wordpress-development/WordPressFaq";

const title = "WordPress Website Development | HR Digital Web";
const description =
  "Fast, secure WordPress websites that are easy to update. Elementor builds, WooCommerce, speed optimisation, fixes and monthly maintenance. Free quote.";
const path = "/services/wordpress-development";

export const metadata: Metadata = {
  // `absolute` skips any title template in your root layout, so the title is used exactly as written
  title: { absolute: title },
  description,
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
      name: "WordPress website development",
      serviceType: "Web development",
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
        { "@type": "ListItem", position: 3, name: "WordPress development", item: `${siteConfig.url}${path}` },
      ],
    },
  ],
};

export default function WordPressDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <WordPressHero />
      <WordPressServices />
      <WordPressSeoSection />
      <WordPressControlSection />
      <WordPressFaq />
    </>
  );
}