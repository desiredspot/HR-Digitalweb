/**
 * Sanity Studio lives at /studio — write and publish blog posts here.
 * It is excluded from search engines and loads only on this route,
 * so it adds nothing to the public site's page weight.
 */
import type { Metadata } from "next";
import { NextStudio } from "next-sanity/studio";
import { metadata as studioMetadata } from "next-sanity/studio";
import { siteConfig } from "@/lib/site-config";
import config from "../../../../../sanity.config";

export const dynamic = "force-static";
export { viewport } from "next-sanity/studio";

// Sanity's own Studio settings, plus metadataBase (silences the build warning)
// and noindex so Google never lists your admin page.
export const metadata: Metadata = {
  ...studioMetadata,
  metadataBase: new URL(siteConfig.url),
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  return <NextStudio config={config} />;
}