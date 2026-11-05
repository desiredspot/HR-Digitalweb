// src/lib/og.ts
// Share images (Open Graph / X) for every page. Each page gets its own 1200 × 630 image with
// its headline, made at build time by src/app/og/[page]/route.tsx and served at /og/<key>.
// To change the words on an image, edit it here. To add a page, add a key and use
// ogImage("your-key") in that page's metadata.

export type OgPage = { eyebrow: string; title: string };

export const ogPages = {
  home: { eyebrow: "Freelance web developer & digital marketer", title: "Websites that load fast, rank higher and turn visitors into customers" },
  services: { eyebrow: "Services", title: "Web development and digital marketing under one roof" },
  "web-development": { eyebrow: "Next.js development", title: "Fast, SEO-friendly websites built with Next.js" },
  "landing-page-design": { eyebrow: "Landing pages", title: "High-converting landing pages built in Unbounce" },
  "wordpress-development": { eyebrow: "WordPress", title: "WordPress websites that are fast, secure and easy to manage" },
  seo: { eyebrow: "SEO services", title: "SEO for small businesses that gets you found on Google" },
  "content-marketing": { eyebrow: "SEO content writing", title: "Blog posts and website copy that rank and convert" },
  "gohighlevel-crm": { eyebrow: "GoHighLevel CRM", title: "GoHighLevel setup and automation that follows up for you" },
  "email-marketing": { eyebrow: "Email marketing", title: "Email sequences and newsletters that turn subscribers into customers" },
  "social-media-marketing": { eyebrow: "Social media marketing", title: "Social content that builds your brand every week" },
  "reels-video-editing": { eyebrow: "Reels & short-form video", title: "Reels and short-form video that stop the scroll" },
  contact: { eyebrow: "Contact", title: "Let's build something that grows your business" },
  portfolio: { eyebrow: "Portfolio", title: "Websites, landing pages and funnels" },
  pricing: { eyebrow: "Pricing", title: "Website and digital marketing packages with fixed quotes" },
  about: { eyebrow: "About", title: "A web developer who thinks like your marketing team" },
  process: { eyebrow: "How I work", title: "A simple, transparent process from first call to launch" },
  blog: { eyebrow: "Blog", title: "Web development and digital marketing tips that actually work" },
  faq: { eyebrow: "FAQ", title: "Hiring a web developer: your questions answered" },
  "privacy-policy": { eyebrow: "Legal", title: "Privacy policy" },
  terms: { eyebrow: "Legal", title: "Terms of service" },
} satisfies Record<string, OgPage>;

export type OgKey = keyof typeof ogPages;

/** Use in a page's metadata: openGraph: { images: [ogImage("seo")] }, twitter: { images: [ogImage("seo").url] } */
export function ogImage(key: OgKey) {
  return { url: `/og/${key}`, width: 1200, height: 630, alt: ogPages[key].title };
}
