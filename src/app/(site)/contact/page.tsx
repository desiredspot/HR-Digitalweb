// src/app/(site)/contact/page.tsx
import type { Metadata } from "next";
import { ogImage } from "@/lib/og";
import { siteConfig } from "@/lib/site-config";
import { contactDetails } from "@/lib/contact";
import { ContactHero } from "@/components/contact/ContactHero";

const title = "Contact | Hire a Web Developer & Digital Marketer | HR Digital Web";
const description =
  "Tell me about your website, landing page, GoHighLevel or marketing project. I reply within 1 business day and send a fixed quote within 48 hours of our call.";
const path = "/contact";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: ["hire a web developer", "contact web developer", "freelance web developer India", "website quote"],
  alternates: { canonical: path },
  openGraph: { type: "website", url: path, title, description, siteName: siteConfig.name, images: [ogImage("contact")] },
  twitter: { card: "summary_large_image", title, description, images: [ogImage("contact").url] },
};

export const dynamic = "force-static";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${siteConfig.url}${path}#webpage`,
      url: `${siteConfig.url}${path}`,
      name: title,
      description,
      about: { "@id": `${siteConfig.url}/#business` },
      mainEntity: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: contactDetails.email,
        ...(contactDetails.whatsapp ? { telephone: `+${contactDetails.whatsapp}` } : {}),
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Contact", item: `${siteConfig.url}${path}` },
      ],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ContactHero />
    </>
  );
}