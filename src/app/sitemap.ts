// src/app/sitemap.ts
// Every page on the site plus every published blog post from Sanity.
// Google reads it at /sitemap.xml. Add new pages to `staticPages` below.
import type { MetadataRoute } from "next";
import { serviceHref, services, siteConfig } from "@/lib/site-config";
import { client } from "@/sanity/client";

// Rebuild the sitemap at most once an hour, so new blog posts appear without a redeploy
export const revalidate = 3600;

const staticPages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/portfolio", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/about", priority: 0.7, changeFrequency: "yearly" },
  { path: "/process", priority: 0.7, changeFrequency: "yearly" },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
];

type PostEntry = { slug: string; publishedAt?: string; _updatedAt?: string };

async function getPosts(): Promise<PostEntry[]> {
  try {
    // Give up after 8 seconds and don't retry, so a slow connection never stalls the build
    return await client
      .withConfig({ maxRetries: 0 })
      .fetch<PostEntry[]>(
        `*[_type=="post" && defined(slug.current)]{ "slug": slug.current, publishedAt, _updatedAt }`,
        {},
        { signal: AbortSignal.timeout(8000) },
      );
  } catch (err) {
    // If Sanity is unreachable during a build, the sitemap still works without the posts
    console.error("Sitemap: could not load blog posts from Sanity:", err instanceof Error ? err.message : err);
    return [];
  }
}
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const pages: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: `${base}${p.path === "/" ? "" : p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  // Only services that have their own page (links like /services#seo are skipped)
  const servicePages: MetadataRoute.Sitemap = services
    .map((s) => serviceHref(s.slug))
    .filter((href) => !href.includes("#"))
    .map((href) => ({ url: `${base}${href}`, lastModified: now, changeFrequency: "monthly", priority: 0.9 }));

  const posts = await getPosts();
  const postPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p._updatedAt ?? p.publishedAt ?? now),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...servicePages, ...postPages];
}