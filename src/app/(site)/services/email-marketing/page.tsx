// src/app/(site)/services/email-marketing/page.tsx
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { EmailHero } from "@/components/services/email-marketing/EmailHero";
import { EmailServices } from "@/components/services/email-marketing/EmailServices";
import { EmailPlatforms } from "@/components/services/email-marketing/EmailPlatforms";
import { EmailFaq } from "@/components/services/email-marketing/EmailFaq";

const title = "Email Marketing Services | Sequences & Newsletters";
const description =
  "Email marketing services that turn subscribers into customers: welcome sequences, newsletters, nurture flows and campaigns with copy, design and automation.";
const path = "/services/email-marketing";

export const metadata: Metadata = {
  // `absolute` skips any title template in your root layout, so the title is used exactly as written
  title: { absolute: title },
  description,
  keywords: [
    "email marketing services",
    "email automation",
    "newsletter writing",
    "email sequence copywriting",
    "Mailchimp setup",
    "Klaviyo setup",
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
      name: "Email marketing services",
      serviceType: "Email marketing",
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
        { "@type": "ListItem", position: 3, name: "Email marketing", item: `${siteConfig.url}${path}` },
      ],
    },
  ],
};

export default function EmailMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <EmailHero />
      <EmailServices />
      <EmailPlatforms />
      <EmailFaq />
    </>
  );
}