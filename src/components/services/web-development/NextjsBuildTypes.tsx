import { ArrowRight, CheckCircle2, Code2, Globe, LayoutDashboard, Network, RefreshCw, Rocket } from "lucide-react";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { QuoteDialogTrigger } from "@/components/services/quote/ServiceQuoteDialog";

// "What we build" section for /services/web-development.
// Server component, no client JS. One <h2>, an <h3> per build type.
// id="whats-included" is the target of the hero's "See what's included" button.
// The banner button opens the same quote dialog as the hero (one dialog per page).

const buildTypes = [
  {
    title: "Business websites with a headless CMS",
    desc: "Business websites with a headless CMS, so your team can edit content without touching code.",
    badge: "Headless CMS",
    icon: Globe,
    gradient: "from-cyan-500 via-teal-400 to-blue-600",
    tagColor: "border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400",
    highlights: ["Sanity, Strapi or headless WordPress", "Easy editing for non-technical teams", "Content changes go live in seconds"],
  },
  {
    title: "Custom web apps and portals",
    desc: "Custom web app development: dashboards, client portals, booking systems and internal tools.",
    badge: "Full-stack apps",
    icon: LayoutDashboard,
    gradient: "from-teal-400 via-emerald-400 to-blue-500",
    tagColor: "border-teal-500/30 bg-teal-500/10 text-teal-700 dark:text-teal-400",
    highlights: ["Dashboards and client portals", "Appointment and booking systems", "Internal tools with secure logins"],
  },
  {
    title: "SaaS marketing sites",
    desc: "SaaS marketing sites with pricing pages, documentation and a blog.",
    badge: "SaaS",
    icon: Rocket,
    gradient: "from-blue-500 via-indigo-500 to-purple-600",
    tagColor: "border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-400",
    highlights: ["Pricing tiers and feature comparison", "Docs and API guides", "Fast SEO blog for inbound traffic"],
  },
  {
    title: "Redesigns and migrations to Next.js",
    desc: "Move your existing site to Next.js with a redesign, while protecting the rankings you already have.",
    badge: "SEO-safe migration",
    icon: RefreshCw,
    gradient: "from-purple-500 via-indigo-500 to-cyan-400",
    tagColor: "border-purple-500/30 bg-purple-500/10 text-purple-700 dark:text-purple-400",
    highlights: [
      "Every old URL mapped with 301 redirects",
      "Titles, meta tags and content carried over",
      "Older code rebuilt as fast React components",
    ],
  },
  {
    title: "Integrations and automation",
    desc: "Connect your site to GoHighLevel, payment gateways, forms and analytics.",
    badge: "Connected tools",
    icon: Network,
    gradient: "from-cyan-400 via-blue-500 to-teal-400",
    tagColor: "border-cyan-400/30 bg-cyan-400/10 text-cyan-700 dark:text-cyan-300",
    highlights: ["GoHighLevel pipelines and form sync", "Stripe and PayPal payments", "GA4, Tag Manager and pixel tracking"],
  },
];

export function NextjsBuildTypes() {
  return (
    <section
      id="whats-included"
      aria-labelledby="build-types-heading"
      className={`${sectionBg.alt} ${sectionDivider} relative isolate scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28`}
    >
      {/* Ambient glow: radial gradient instead of a blur filter */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(55%_45%_at_50%_50%,rgba(94,234,212,0.18),transparent_70%)]
          dark:bg-[radial-gradient(55%_45%_at_50%_50%,rgba(20,184,166,0.14),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
            <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
            Next.js and full-stack development
          </p>

          <h2
            id="build-types-heading"
            className="mb-6 text-balance text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl dark:text-white"
          >
            What We{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              Build
            </span>
          </h2>

          <p className="text-pretty text-base font-normal leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            Custom websites, SaaS marketing sites, web apps and CRM integrations, built with Next.js and React for fast
            load times and strong SEO.
          </p>
        </header>

        {/* 3 cards on the first row, 2 wider cards on the second (large screens) */}
        <ul className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
          {buildTypes.map(({ title, desc, badge, icon: Icon, gradient, tagColor, highlights }, idx) => (
            <li
              key={title}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/80 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-slate-50/80 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-cyan-900/30 dark:bg-slate-900/70 dark:shadow-black/50 dark:hover:border-cyan-500/50 dark:hover:bg-slate-900/95 dark:hover:shadow-cyan-500/10 ${
                idx < 3 ? "lg:col-span-2" : "lg:col-span-3"
              } ${idx === buildTypes.length - 1 ? "md:col-span-2" : ""}`}
            >
              <span
                aria-hidden="true"
                className={`absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r ${gradient} opacity-80 transition-opacity group-hover:opacity-100`}
              />

              <div>
                <div className="mb-6 flex items-center justify-between gap-2">
                  <span className="rounded-2xl border border-cyan-200 bg-cyan-50 p-3.5 text-cyan-600 transition-transform duration-200 group-hover:scale-110 dark:border-cyan-900/50 dark:bg-slate-900 dark:text-cyan-400">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span
                    className={`rounded-full border px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider ${tagColor}`}
                  >
                    {badge}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-black leading-snug text-slate-900 transition-colors group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400">
                  {title}
                </h3>
                <p className="mb-6 text-sm font-normal leading-relaxed text-slate-600 dark:text-slate-300">{desc}</p>
              </div>

              <ul className="space-y-2.5 border-t border-slate-100 pt-4 dark:border-slate-800">
                {highlights.map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Bottom banner */}
        <aside
          aria-labelledby="build-types-cta-heading"
          className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-8 shadow-lg md:flex-row dark:border-cyan-900/40 dark:from-[#0E1A38] dark:via-slate-900 dark:to-[#0E1A38] dark:shadow-2xl"
        >
          <div className="text-center md:text-left">
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
              Custom Next.js and React projects
            </p>
            <h3 id="build-types-cta-heading" className="text-xl font-black text-slate-900 dark:text-white">
              Have a custom build or migration in mind?
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Tell me what you want to build and get a fixed quote within 48 hours.
            </p>
          </div>

          <QuoteDialogTrigger className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-300 px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:brightness-110">
            Request a build quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </QuoteDialogTrigger>
        </aside>
      </div>
    </section>
  );
}