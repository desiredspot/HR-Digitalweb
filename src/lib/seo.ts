import type { Metadata } from "next";
import { site } from "@/content/site";
import type { Faq } from "@/content/services";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
};

/** Builds complete metadata (title, description, canonical, Open Graph, Twitter) for a page. */
export function pageMetadata({ title, description, path, keywords, type = "website", image, publishedTime, modifiedTime }: PageMeta): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  const images = image ? [{ url: image, width: 1200, height: 630, alt: title }] : undefined;
  return {
    title: { absolute: title.replace(/\[Brand Name\]/g, site.name) },
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: site.name,
      locale: "en_US",
      ...(images && { images }),
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: { card: "summary_large_image", title, description, ...(image && { images: [image] }) },
  };
}

export const absoluteUrl = (path: string) => `${site.url}${path}`;

export const organizationLd = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#business`,
  name: site.name,
  url: site.url,
  description: site.tagline,
  email: site.email,
  telephone: site.phone,
  image: `${site.url}/opengraph-image`,
  logo: `${site.url}/favicon.webp`,
  founder: { "@type": "Person", name: site.person },
  address: { "@type": "PostalAddress", addressLocality: site.city, addressRegion: site.region, addressCountry: site.country },
  areaServed: site.serviceArea.map((name) => ({ "@type": "Country", name })),
  priceRange: "$$",
  sameAs: Object.values(site.socials).filter(Boolean),
  knowsAbout: ["Next.js", "WordPress", "Unbounce", "GoHighLevel", "Email marketing", "SEO content writing", "Social media marketing", "Short-form video editing"],
});

export const websiteLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  publisher: { "@id": `${site.url}/#business` },
  inLanguage: "en",
});

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: absoluteUrl(it.path === "/" ? "" : it.path),
  })),
});

export const faqLd = (faqs: Faq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export const serviceLd = (s: { name: string; description: string; path: string }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.name,
  serviceType: s.name,
  description: s.description,
  url: absoluteUrl(s.path),
  provider: { "@id": `${site.url}/#business` },
  areaServed: site.serviceArea.map((name) => ({ "@type": "Country", name })),
});
