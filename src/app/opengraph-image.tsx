// src/app/opengraph-image.tsx
// Default share image (used by pages without their own, such as the 404 page).
// Same design as the per-page images in src/app/og/[page]/route.tsx.
import { ogPages } from "@/lib/og";
import { ogSize, renderOgImage } from "@/lib/og-image";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name}: freelance web developer and digital marketer`;
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return renderOgImage(ogPages.home);
}
