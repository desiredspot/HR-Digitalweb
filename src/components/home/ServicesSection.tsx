"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Code,
  Cpu,
  Globe,
  Layers,
  Mail,
  Search,
  Share2,
  Video,
  Zap,
} from "lucide-react";
import { sectionBg, sectionDivider } from "@/lib/section-bg";

type FilterTab = { id: string; label: string };

function ServicesFilter({ tabs, children }: { tabs: FilterTab[]; children: ReactNode }) {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="services-filter" data-filter={activeFilter}>
      <div className="mb-8 flex flex-wrap justify-center gap-2" aria-label="Filter services">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            aria-pressed={activeFilter === tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              activeFilter === tab.id
                ? "border-cyan-500 bg-cyan-500 text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-cyan-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {children}
    </div>
  );
}

// SEO notes
// - Server component: all 8 service cards are in the initial HTML. The filter only
//   hides cards with CSS, so nothing disappears from what Google crawls.
// - One <h2> for the section and an <h3> per service, following the hero's <h1>.
// - Each card links to its own service page with descriptive anchor text.
// - JSON-LD OfferCatalog tells search engines exactly which services you offer.

// TODO: set your real domain and business name
const SITE_URL = "https://www.example.com";
const BUSINESS_NAME = "HR DigitalWeb";

type Category = "development" | "funnels" | "automation" | "marketing";

const tabs: FilterTab[] = [
  { id: "all", label: "All services" },
  { id: "development", label: "Web development" },
  { id: "funnels", label: "Landing pages & funnels" },
  { id: "automation", label: "CRM & automation" },
  { id: "marketing", label: "Marketing & content" },
];

// TODO: point each href at your real service page
const services: {
  id: string;
  title: string;
  category: Category;
  desc: string;
  linkText: string;
  href: string;
  icon: typeof Code;
  badge: string;
  gradient: string;
  tagColor: string;
}[] = [
  {
    id: "web-development",
    title: "Next.js Web Development",
    category: "development",
    desc: "Custom websites and web apps built for speed, Core Web Vitals and technical SEO.",
    linkText: "Explore Next.js web development",
    href: "/services/web-development",
    icon: Code,
    badge: "High performance",
    gradient: "from-cyan-500 to-blue-600",
    tagColor: "border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400",
  },
  {
    id: "landing-pages",
    title: "Unbounce Landing Pages",
    category: "funnels",
    desc: "Conversion-focused landing pages for Google Ads, Meta Ads and product launches.",
    linkText: "Explore landing page design",
    href: "/services/landing-pages",
    icon: Layers,
    badge: "High conversion",
    gradient: "from-teal-400 to-emerald-500",
    tagColor: "border-teal-500/30 bg-teal-500/10 text-teal-700 dark:text-teal-400",
  },
  {
    id: "wordpress",
    title: "WordPress Websites",
    category: "development",
    desc: "Easy-to-edit WordPress sites, speed optimisation and ongoing maintenance.",
    linkText: "Explore WordPress development",
    href: "/services/wordpress",
    icon: Globe,
    badge: "CMS & maintenance",
    gradient: "from-blue-500 to-indigo-600",
    tagColor: "border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-400",
  },
  {
    id: "gohighlevel",
    title: "GoHighLevel CRM & Automation",
    category: "automation",
    desc: "Sales pipelines, booking calendars, funnels and instant lead follow-up.",
    linkText: "Explore GoHighLevel automation",
    href: "/services/gohighlevel-automation",
    icon: Zap,
    badge: "Lead automation",
    gradient: "from-indigo-500 to-purple-600",
    tagColor: "border-indigo-500/30 bg-indigo-500/10 text-indigo-700 dark:text-indigo-400",
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    category: "marketing",
    desc: "Welcome sequences, newsletters and nurture flows that turn subscribers into buyers.",
    linkText: "Explore email marketing",
    href: "/services/email-marketing",
    icon: Mail,
    badge: "Retention & sales",
    gradient: "from-purple-500 to-pink-500",
    tagColor: "border-purple-500/30 bg-purple-500/10 text-purple-700 dark:text-purple-400",
  },
  {
    id: "seo-content",
    title: "SEO Content & Blogs",
    category: "marketing",
    desc: "Keyword-researched blog posts and website copy written to rank on Google.",
    linkText: "Explore SEO content writing",
    href: "/services/seo-content",
    icon: Search,
    badge: "Organic traffic",
    gradient: "from-emerald-400 to-teal-500",
    tagColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    category: "marketing",
    desc: "On-brand posts, carousels and monthly content calendars.",
    linkText: "Explore social media marketing",
    href: "/services/social-media",
    icon: Share2,
    badge: "Brand awareness",
    gradient: "from-cyan-400 to-teal-400",
    tagColor: "border-cyan-400/30 bg-cyan-400/10 text-cyan-700 dark:text-cyan-300",
  },
  {
    id: "reels-video",
    title: "Reels & Short-Form Video",
    category: "marketing",
    desc: "30 to 60 second reels with strong hooks and on-screen captions.",
    linkText: "Explore reels and video editing",
    href: "/services/reels-video",
    icon: Video,
    badge: "Engagement",
    gradient: "from-sky-400 to-blue-500",
    tagColor: "border-sky-400/30 bg-sky-400/10 text-sky-700 dark:text-sky-300",
  },
];

// CSS-only filtering: hide cards whose category doesn't match the active tab.
const categories = [...new Set(services.map((s) => s.category))];
const filterCss = categories
  .map(
    (c) =>
      `.services-filter[data-filter="${c}"] [data-category]:not([data-category="${c}"]){display:none}`,
  )
  .join("");

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Web development and digital marketing services",
  itemListElement: services.map((s, i) => ({
    "@type": "Offer",
    position: i + 1,
    itemOffered: {
      "@type": "Service",
      name: s.title,
      description: s.desc,
      url: `${SITE_URL}${s.href}`,
      provider: { "@type": "Organization", name: BUSINESS_NAME, url: SITE_URL },
    },
  })),
};

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className={`${sectionBg.base} ${sectionDivider} relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28`}
    >
      <style dangerouslySetInnerHTML={{ __html: filterCss }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Background glow: radial gradient instead of a blur filter */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(50%_40%_at_50%_50%,rgba(34,211,238,0.12),transparent_70%)]
          dark:bg-[radial-gradient(50%_40%_at_50%_50%,rgba(6,182,212,0.12),transparent_70%)]"
      />

      <div className="mx-auto w-full max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
            <Cpu className="h-3.5 w-3.5" aria-hidden="true" />
            Web development &amp; digital marketing
          </p>

          <h2
            id="services-heading"
            className="mb-6 text-balance text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl dark:text-white"
          >
            Web development and{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              digital marketing services
            </span>
          </h2>

          <p className="text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            Everything you need to build, automate and market your business online, from one partner with clear
            fixed pricing.
          </p>
        </header>

        <ServicesFilter tabs={tabs}>
          <ul id="services-grid" className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ id, title, category, desc, linkText, href, icon: Icon, badge, gradient, tagColor }) => (
              <li
                key={id}
                data-category={category}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/80 transition duration-300 hover:-translate-y-1.5 hover:border-cyan-500/40 hover:bg-slate-50/80 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-cyan-900/30 dark:bg-slate-900/70 dark:shadow-black/50 dark:hover:border-cyan-500/50 dark:hover:bg-slate-900/90 dark:hover:shadow-cyan-500/10"
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${gradient} opacity-80 transition-opacity group-hover:opacity-100`}
                />

                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <span className="rounded-2xl border border-cyan-200 bg-cyan-50 p-3 text-cyan-600 transition-transform duration-200 group-hover:scale-110 dark:border-cyan-900/50 dark:bg-slate-900 dark:text-cyan-400">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span
                      className={`rounded-full border px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider ${tagColor}`}
                    >
                      {badge}
                    </span>
                  </div>

                  <h3 className="mb-2 text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400">
                    {title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{desc}</p>
                </div>

                <div className="border-t border-slate-100 pt-4 dark:border-slate-800">
                  <Link
                    href={href}
                    className="group/link inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 transition-colors hover:text-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300"
                  >
                    {linkText}
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </ServicesFilter>

        {/* Custom package CTA */}
        <aside
          aria-labelledby="custom-package-heading"
          className="flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-8 shadow-lg md:flex-row dark:border-cyan-900/40 dark:from-[#0E1A38] dark:via-slate-900 dark:to-[#0E1A38] dark:shadow-2xl"
        >
          <div className="text-center md:text-left">
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
              Custom growth packages
            </p>
            <h3 id="custom-package-heading" className="text-xl font-black text-slate-900 dark:text-white">
              Need a custom bundle of web development and marketing?
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              I combine development, CRM workflows and monthly content into one predictable fixed monthly package.
            </p>
          </div>

          <Link
            href="/contact"
            className="flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-300 px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
          >
            Discuss your project
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </aside>
      </div>
    </section>
  );
}