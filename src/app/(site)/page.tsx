import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { OneTeamSection } from "@/components/home/OneTeamSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseSection } from "@/components/home/Whychoosesection";
import {  LaunchOfferSection } from "@/components/home/LaunchOfferSection";
import {  ProcessSection } from "@/components/home/Processsection";
import {  RecentWorkSection } from "@/components/home/Recentworksection";
import {  TestimonialsSection } from "@/components/home/TestimonialsSection";
import {  ToolsSection } from "@/components/home/ToolsSection";
import {  FreePlanSection } from "@/components/home/FreePlanSection";
import { services, siteConfig } from "@/lib/site-config";

const title = "Freelance Next.js Developer & Digital Marketer | HR DigitalWeb";
const description =
  "Fast, SEO-friendly Next.js websites, Unbounce landing pages, GoHighLevel automation, email campaigns and reels for small businesses, coaches, startups and agencies. Book a free strategy call.";

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
  },
  twitter: { card: "summary_large_image", title, description },
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
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#business`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      logo: `${siteConfig.url}/favicon.webp`,
      areaServed: "Worldwide",
      // TODO: add your real profiles
      sameAs: [],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web development & digital marketing services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.desc,
            url: `${siteConfig.url}/services#${s.slug}`, 
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
      {/* Next sections (growth funnel, services, portfolio...) go here */}
    </>
  );
}