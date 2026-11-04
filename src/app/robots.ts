import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/studio", "/api/", "/contact/thank-you", "/contact/try-again"] }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
