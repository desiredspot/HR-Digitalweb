// src/app/(site)/about/page.tsx
import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStorySection } from "@/components/about/AboutStorySection";
import { AboutValuesSection } from "@/components/about/AboutValuesSection";
import { AboutAdvantageSection } from "@/components/about/AboutAdvantageSection";
import { AboutAudienceSection } from "@/components/about/AboutAudienceSection";
import { AboutSkillsSection } from "@/components/about/AboutSkillsSection";
import { AboutWorkTogetherSection } from "@/components/about/AboutWorkTogetherSection";

const title = "About HR DigitalWeb | Freelance Next.js Developer & Digital Marketer";
const description =
  "Meet the developer behind HR DigitalWeb: fast Next.js websites, landing pages and GoHighLevel automation built to bring small businesses more leads, bookings and sales.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/about" },
  openGraph: { type: "profile", url: "/about", title, description },
  twitter: { card: "summary_large_image", title, description },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStorySection />
      <AboutValuesSection />
      <AboutAdvantageSection />
      <AboutAudienceSection />
      <AboutSkillsSection />
      <AboutWorkTogetherSection />
      {/* More about-page sections go here */}
    </>
  );
}