import type { Metadata } from "next";
import { ogImage } from "@/lib/og";
import { Hero } from "@/components/home/hero";
import { OneTeamSection } from "@/components/home/OneTeamSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseSection } from "@/components/home/Whychoosesection";
import { LaunchOfferSection } from "@/components/home/LaunchOfferSection";
import { ProcessSection } from "@/components/home/Processsection";
import { RecentWorkSection } from "@/components/home/Recentworksection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ToolsSection } from "@/components/home/ToolsSection";
import { FreePlanSection } from "@/components/home/FreePlanSection";
import { serviceHref, services, siteConfig } from "@/lib/site-config";

const title = "Freelance Next.js Developer & Digital Marketer | HR DigitalWeb";
const description =
  "Fast, SEO-friendly Next.js websites, Unbounce landing pages, GoHighLevel automation, email campaigns and reels for small businesses, coaches, startups and agencies. Book a free strategy call.";

// Your real social profiles (LinkedIn, Instagram...). Empty entries are left out of the schema.
const socialProfiles: string[] = [];

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    title,
    description,
    images: [ogImage("home")],
  },
  twitter: { card: "summary_large_image", title, description, images: [ogImage("home").url] },
};

// Fully static: rendered at build time and served from the CDN.
export const dynamic = "force-static";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: { "@id": `${siteConfig.url}/#business` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#business`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      // Google needs a real image for the logo (at least 112 × 112 px), not the favicon
      logo: `${siteConfig.url}/logo-w.png`,
      image: `${siteConfig.url}/opengraph-image`,
      areaServed: "Worldwide",
      ...(socialProfiles.length > 0 ? { sameAs: socialProfiles } : {}),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web development & digital marketing services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.desc,
            // Each service's own page (e.g. /services/seo)
            url: `${siteConfig.url}${serviceHref(s.slug)}`,
          },
        })),
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <OneTeamSection />
      <ServicesSection />
      <WhyChooseSection />
      <LaunchOfferSection />
      <ProcessSection />
      <RecentWorkSection />
      <TestimonialsSection />
      <ToolsSection />
      <FreePlanSection />
    </>
  );
}