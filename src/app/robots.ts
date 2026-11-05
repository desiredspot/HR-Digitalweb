import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// Tells search engines what to crawl. /studio is your Sanity admin and /api/ is server code,
// so both stay out of Google. Everything else is open.
export default function robots(): MetadataRoute.Robots {
  const base = siteConfig.url.replace(/\/$/, "");
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/studio", "/api/"] }],
    sitemap: `${base}/sitemap.xml`,
  };
}