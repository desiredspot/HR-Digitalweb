// src/app/(site)/services/page.tsx
import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesBuildSection } from "@/components/services/ServicesBuildSection";
import { ServicesAutomateSection } from "@/components/services/ServicesAutomateSection";
import { ServicesAttractSection } from "@/components/services/ServicesAttractSection";
import { ServicesReviewSection } from "@/components/services/ServicesReviewSection";

const title = "Web Development & Digital Marketing Services | HR DigitalWeb";
const description =
  "Next.js and WordPress websites, Unbounce landing pages, GoHighLevel CRM automation, email marketing, SEO content and reels, all from one freelance partner with fixed pricing.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/services" },
  openGraph: { type: "website", url: "/services", title, description },
  twitter: { card: "summary_large_image", title, description },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesBuildSection />
      <ServicesAutomateSection />
      <ServicesAttractSection />
      <ServicesReviewSection />
    </>
  );
}