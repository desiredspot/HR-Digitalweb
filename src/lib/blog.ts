// src/lib/blog.ts
// Blog categories, which service page each category links to, and the posts you plan to write.
// Posts themselves live in Sanity (see src/sanity/schemaTypes/post.ts).

import { serviceHref } from "./site-config";

export type BlogCategoryId =
  | "web-development"
  | "landing-pages"
  | "gohighlevel"
  | "email-marketing"
  | "seo-content"
  | "social-reels";

export type BlogCategory = {
  id: BlogCategoryId;
  label: string;
  /** Service page this category's posts link to */
  service: string;
  serviceLabel: string;
};

// Keep these ids in sync with the category list in src/sanity/schemaTypes/post.ts
export const blogCategories: BlogCategory[] = [
  { id: "web-development", label: "Web Development", service: "web-development", serviceLabel: "Web development" },
  { id: "landing-pages", label: "Landing Pages", service: "landing-page-design", serviceLabel: "Landing page design" },
  { id: "gohighlevel", label: "GoHighLevel", service: "gohighlevel-crm", serviceLabel: "GoHighLevel CRM" },
  { id: "email-marketing", label: "Email Marketing", service: "email-marketing", serviceLabel: "Email marketing" },
  { id: "seo-content", label: "SEO & Content", service: "content-marketing", serviceLabel: "SEO content writing" },
  { id: "social-reels", label: "Social & Reels", service: "reels-video-editing", serviceLabel: "Reels and video" },
];

const serviceLabels: Record<string, string> = {
  "web-development": "Web development",
  "landing-page-design": "Landing page design",
  "wordpress-development": "WordPress development",
  "gohighlevel-crm": "GoHighLevel CRM",
  "email-marketing": "Email marketing",
  seo: "SEO services",
  "content-marketing": "SEO content writing",
  "social-media-marketing": "Social media marketing",
  "reels-video-editing": "Reels and video",
};

export const getCategory = (id?: string | null) => blogCategories.find((c) => c.id === id);

/** The service page a post links to: its own relatedService if set, otherwise its category's */
export function relatedServiceFor(category?: string | null, relatedService?: string | null) {
  const slug = relatedService || getCategory(category)?.service;
  if (!slug) return null;
  return { href: serviceHref(slug), label: serviceLabels[slug] ?? getCategory(category)?.serviceLabel ?? slug };
}

/** Rough reading time from a word count (about 200 words a minute) */
export const readMinutes = (words?: number | null) => (words ? Math.max(1, Math.round(words / 200)) : null);

export type PlannedPost = {
  /** Use this exact slug in Sanity when you publish it, and it drops off the "Coming soon" list */
  slug: string;
  title: string;
  category: BlogCategoryId;
  /** For your own planning only; never shown on the site */
  targetKeyword: string;
  relatedService?: string;
};

// Your first 12 posts, in publishing order. Shown on /blog as "Coming soon" until published.
export const plannedPosts: PlannedPost[] = [
  { slug: "website-cost-small-business", title: "How much does a website cost for a small business in 2026?", category: "web-development", targetKeyword: "website cost for small business" },
  { slug: "nextjs-vs-wordpress", title: "Next.js vs WordPress: which is better for your business?", category: "web-development", targetKeyword: "Next.js vs WordPress" },
  { slug: "landing-page-best-practices", title: "10 landing page best practices that increase conversions", category: "landing-pages", targetKeyword: "landing page best practices" },
  { slug: "gohighlevel-setup-guide", title: "GoHighLevel for beginners: set up your CRM the right way", category: "gohighlevel", targetKeyword: "GoHighLevel setup guide" },
  { slug: "gohighlevel-automations-service-business", title: "7 GoHighLevel automations every service business needs", category: "gohighlevel", targetKeyword: "GoHighLevel automation ideas" },
  { slug: "unbounce-vs-gohighlevel", title: "Unbounce vs GoHighLevel funnels: which should you use?", category: "landing-pages", targetKeyword: "Unbounce vs GoHighLevel" },
  { slug: "welcome-email-sequence", title: "How to write a welcome email sequence that sells", category: "email-marketing", targetKeyword: "welcome email sequence" },
  { slug: "speed-up-wordpress-site", title: "Why your WordPress site is slow and how to fix it", category: "web-development", targetKeyword: "speed up WordPress site", relatedService: "wordpress-development" },
  { slug: "how-to-write-seo-blog-posts", title: "How to write SEO blog posts that rank on Google", category: "seo-content", targetKeyword: "how to write SEO blog posts" },
  { slug: "reel-ideas-for-business", title: "15 Reel ideas for coaches and service businesses", category: "social-reels", targetKeyword: "reel ideas for business" },
  { slug: "core-web-vitals-explained", title: "Core Web Vitals explained for business owners", category: "web-development", targetKeyword: "Core Web Vitals explained" },
  { slug: "website-redesign-seo-checklist", title: "Website redesign checklist: keep your SEO rankings", category: "web-development", targetKeyword: "website redesign SEO checklist", relatedService: "seo" },
];

// Shown on every post (byline, author box and BlogPosting schema).
// Put your real name and a short bio here: Google and readers trust posts by a named person.
export const blogAuthor = {
  name: "HR DigitalWeb",
  initials: "HR",
  role: "Web developer and digital marketer",
  bio: "I build fast Next.js and WordPress websites, landing pages and GoHighLevel automations for small businesses, coaches and service providers, and write about what works.",
};

/** Turns a heading into an id for the table of contents, e.g. "Hidden fees" -> "hidden-fees" */
export const headingId = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);