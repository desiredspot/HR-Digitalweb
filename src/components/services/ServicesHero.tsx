import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Code,
  Cpu,
  Globe,
  Layers,
  Mail,
  PhoneCall,
  Search,
  Share2,
  Sparkles,
  Video,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { services, siteConfig } from "@/lib/site-config";
import { sectionBg } from "@/lib/section-bg";

// Server component, no client JS. The H1 is plain text, so it paints immediately (good LCP).
//
// The "jump to" pills are built from the `services` list in site-config, so they always
// match your real services. Each one links to #<slug>, so give each service section on
// this page id={slug}. That's the same link format the footer uses (/services#slug).

// The section below the hero that lists every service should have this id.
const SERVICES_LIST_ID = "services-list";

// Picks an icon from keywords in the service slug. Unknown slugs get a sparkle icon.
const iconRules: [RegExp, LucideIcon][] = [
  [/next|react|web-dev|development/, Code],
  [/landing|unbounce|funnel/, Layers],
  [/wordpress|wp/, Globe],
  [/gohighlevel|ghl|crm|automation/, Zap],
  [/email|sms/, Mail],
  [/seo|content|blog/, Search],
  [/social/, Share2],
  [/reel|video/, Video],
];
const iconFor = (slug: string) => iconRules.find(([re]) => re.test(slug))?.[1] ?? Sparkles;

const highlights = [
  { label: "One point of contact", sub: "No juggling several freelancers" },
  { label: "Everything connected", sub: "Website, CRM and marketing working as one" },
  { label: "Fixed price up front", sub: "No surprise hourly invoices" },
];

export function ServicesHero() {
  return (
    <section
      aria-labelledby="services-hero-heading"
      className={`${sectionBg.base} relative isolate overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-40`}
    >
      {/* Ambient glows: radial gradients instead of blur filters (same look, cheaper to paint) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(60%_50%_at_50%_0%,rgba(103,232,249,0.25),transparent_70%),radial-gradient(30%_30%_at_0%_40%,rgba(94,234,212,0.18),transparent_70%)]
          dark:bg-[radial-gradient(60%_50%_at_50%_0%,rgba(6,182,212,0.18),transparent_70%),radial-gradient(30%_30%_at_0%_40%,rgba(20,184,166,0.10),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Eyebrow */}
        <div className="mb-6 flex justify-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
            <Cpu className="h-3.5 w-3.5" aria-hidden="true" />
            All services in one place
          </p>
        </div>

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <h1
            id="services-hero-heading"
            className="mb-6 text-balance text-3xl font-black leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Web development and digital marketing services{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              under one roof
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-pretty text-base font-normal leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
            Your website, funnels, CRM and content should work together. {siteConfig.name} covers everything you
            need to attract visitors, capture leads and turn them into customers, without managing five different
            freelancers.
          </p>
        </div>

        {/* Jump-to links */}
        <nav aria-labelledby="jump-to-heading" className="mb-12">
          <h2
            id="jump-to-heading"
            className="mb-4 text-center text-[11px] font-extrabold uppercase tracking-widest text-cyan-700 dark:text-cyan-400"
          >
            Jump to a service
          </h2>
          <ul className="flex flex-wrap items-center justify-center gap-2.5">
            {services.map((s) => {
              const Icon = iconFor(s.slug);
              return (
                <li key={s.slug}>
                  <a
                    href={`#${s.slug}`}
                    className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-800 shadow-md transition-all hover:scale-105 hover:border-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 motion-reduce:hover:scale-100 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-white"
                  >
                    <Icon className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                    {s.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Highlights card */}
        <div className="relative mb-10 overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl sm:p-10 dark:border-cyan-500/30 dark:bg-gradient-to-br dark:from-[#0E1A38] dark:via-slate-900 dark:to-[#0E1A38] dark:shadow-2xl dark:shadow-cyan-950/40">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
          />
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {highlights.map((h) => (
              <li
                key={h.label}
                className="flex items-start gap-3.5 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800/80 dark:bg-slate-900/60"
              >
                <span className="mt-0.5 shrink-0 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-2 text-cyan-600 dark:text-cyan-400">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="mb-0.5 text-sm font-extrabold text-slate-900 dark:text-white">{h.label}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{h.sub}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={siteConfig.bookingUrl}
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-sm font-extrabold text-slate-950 shadow-xl shadow-cyan-500/20 transition-all hover:scale-105 hover:brightness-110 active:scale-95 motion-reduce:hover:scale-100 sm:w-auto"
          >
            <PhoneCall className="h-4 w-4 transition-transform group-hover:rotate-12" aria-hidden="true" />
            Book a free strategy call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>

          <a
            href={`#${SERVICES_LIST_ID}`}
            className="group flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-bold text-slate-800 transition-all hover:bg-slate-100 sm:w-auto dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-cyan-500/40 dark:hover:bg-slate-800"
          >
            Explore all services
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}