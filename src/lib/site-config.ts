import {
  Code,
  Globe,
  Layers,
  Search,
  Zap,
  Mail,
  Video,
  Share2,
  FileText,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "HR DigitalWeb",
  tagline: "Growth & Development",
  // TODO: replace with your live domain
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hrdigitalweb.com",
  description:
    "Freelance web developer and digital marketer building fast Next.js websites, Unbounce landing pages, SEO, GoHighLevel automation, email campaigns and reels for small businesses, coaches, startups and agencies.",
  // Point this at your GoHighLevel calendar or keep /contact
  bookingUrl: "/contact",
};

export type ServiceItem = {
  slug: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  tone: string;
};

export const services: ServiceItem[] = [
  {
    slug: "web-development",
    title: "Next.js & React Web Development",
    desc: "Fast, SEO-optimized custom websites and web apps.",
    icon: Code,
    tone: "border-cyan-500/30 text-cyan-500 bg-cyan-500/10 dark:text-cyan-400",
  },
  {
    slug: "landing-page-design",
    title: "High-Converting Landing Pages",
    desc: "Unbounce and custom sales pages built to turn visitors into leads.",
    icon: Layers,
    tone: "border-teal-500/30 text-teal-600 bg-teal-500/10 dark:text-teal-400",
  },
  {
    slug: "wordpress-development",
    title: "WordPress Website Development",
    desc: "Fast, secure WordPress and WooCommerce sites that are easy to update.",
    icon: Globe,
    tone: "border-sky-500/30 text-sky-600 bg-sky-500/10 dark:text-sky-400",
  },
  {
    slug: "seo",
    title: "SEO Services",
    desc: "Technical SEO audits, on-page optimisation and local SEO that get you found on Google.",
    icon: Search,
    tone: "border-lime-500/30 text-lime-600 bg-lime-500/10 dark:text-lime-400",
  },
  {
    slug: "content-marketing",
    title: "SEO Content & Blog Writing",
    desc: "Keyword-researched blog posts and website copy that rank and convert.",
    icon: FileText,
    tone: "border-emerald-500/30 text-emerald-600 bg-emerald-500/10 dark:text-emerald-400",
  },
  {
    slug: "gohighlevel-crm",
    title: "GoHighLevel & CRM Automation",
    desc: "Lead pipelines, missed-call text-back and sales workflows.",
    icon: Zap,
    tone: "border-blue-500/30 text-blue-600 bg-blue-500/10 dark:text-blue-400",
  },
  {
    slug: "email-marketing",
    title: "Email & SMS Campaigns",
    desc: "Automated follow-up sequences that warm up cold prospects.",
    icon: Mail,
    tone: "border-indigo-500/30 text-indigo-600 bg-indigo-500/10 dark:text-indigo-400",
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    desc: "Branded posts, carousels and content calendars for Instagram, LinkedIn and Facebook.",
    icon: Share2,
    tone: "border-violet-500/30 text-violet-600 bg-violet-500/10 dark:text-violet-400",
  },
  {
    slug: "reels-video-editing",
    title: "Reels & Short-Form Video",
    desc: "Instagram Reels, YouTube Shorts and TikTok edits with strong hooks and captions.",
    icon: Video,
    tone: "border-rose-500/30 text-rose-600 bg-rose-500/10 dark:text-rose-400",
  },
];

// Services that have their own page at /services/<slug>.
// Add a slug here each time you publish a new service page.
const servicesWithPages = new Set<string>([
  "web-development",
  "landing-page-design",
  "wordpress-development",
  "gohighlevel-crm",
  "email-marketing",
  "seo",
  "content-marketing",
  "social-media-marketing",
  "reels-video-editing",
]);

/**
 * The link for a service, used by the mega menu, mobile menu, footer and schema.
 * - Has its own page  → /services/web-development
 * - No page yet       → /services#landing-pages (scrolls to it on the Services page)
 */
export function serviceHref(slug: string) {
  return servicesWithPages.has(slug) ? `/services/${slug}` : `/services#${slug}`;
}

export const mainNav = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];