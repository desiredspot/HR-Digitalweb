import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Code2, Globe, Hammer, Layers, Tag } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { sectionBg, sectionDivider } from "@/lib/section-bg";

// Services page, part 1 of the services list: "Build".
// Server component, no client JS. One <h2> for the section, an <h3> per service.
//
// IMPORTANT: each `slug` must match the slug of the same service in your site-config
// `services` list. The hero's "Jump to a service" pills and the footer link to
// /services#<slug>, and this card's id is that slug, so the link scrolls right to it.
//
// `href` is the "learn more" link. Point it at a dedicated service page if you have one
// (e.g. /services/nextjs-development), or remove `href` to hide the link.

const buildServices: {
  slug: string;
  title: string;
  badge: string;
  desc: string;
  linkText: string;
  href?: string;
  icon: typeof Code2;
  gradient: string;
  tagColor: string;
  highlights: string[];
}[] = [
  {
    slug: "web-development", // TODO: match your site-config slug
    title: "Next.js web development",
    badge: "Fast custom builds",
    desc: "Fast custom websites and web apps with clean, SEO-friendly code.",
    linkText: "More about Next.js development",
    href: "/services/web-development",
    icon: Code2,
    gradient: "from-cyan-500 to-blue-600",
    tagColor: "border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400",
    highlights: [
      "Server-side rendering for fast page loads",
      "Optimised for Core Web Vitals",
      "Clean, scalable TypeScript and React code",
    ],
  },
  {
    slug: "landing-pages", // TODO: match your site-config slug
    title: "Unbounce landing pages",
    badge: "Built to convert",
    desc: "Campaign pages designed for one goal: turning ad clicks into leads.",
    linkText: "More about landing pages",
    href: "/services/landing-pages",
    icon: Layers,
    gradient: "from-teal-400 to-emerald-500",
    tagColor: "border-teal-500/30 bg-teal-500/10 text-teal-700 dark:text-teal-400",
    highlights: ["Direct-response headlines and layout", "Ready for A/B testing", "Matched to your Meta and Google ads"],
  },
  {
    slug: "wordpress", // TODO: match your site-config slug
    title: "WordPress websites",
    badge: "Easy to manage",
    desc: "Flexible sites your team can update without needing a developer.",
    linkText: "More about WordPress",
    href: "/services/wordpress",
    icon: Globe,
    gradient: "from-blue-500 to-indigo-600",
    tagColor: "border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-400",
    highlights: ["Simple drag-and-drop editing", "Speed fixes and plugin clean-up", "Ongoing security updates and backups"],
  },
];

export function ServicesBuildSection() {
  return (
    <section
      id="services-list"
      aria-labelledby="build-heading"
      className={`${sectionBg.alt} ${sectionDivider} relative isolate scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28`}
    >
      {/* Ambient glow: radial gradient instead of a blur filter */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(50%_40%_at_50%_50%,rgba(103,232,249,0.18),transparent_70%)]
          dark:bg-[radial-gradient(50%_40%_at_50%_50%,rgba(6,182,212,0.14),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
            <Hammer className="h-3.5 w-3.5" aria-hidden="true" />
            Step 1: Build
          </p>

          <h2
            id="build-heading"
            className="mb-6 text-balance text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl dark:text-white"
          >
            Websites, web apps and{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              landing pages
            </span>
          </h2>

          <p className="text-pretty text-base font-normal leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            Websites built to load fast, rank on Google and turn visitors into paying customers.
          </p>
        </header>

        <ul className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {buildServices.map(({ slug, title, badge, desc, linkText, href, icon: Icon, gradient, tagColor, highlights }) => (
            <li
              key={slug}
              id={slug}
              className="group relative flex scroll-mt-28 flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/80 transition-all duration-300 target:ring-2 target:ring-cyan-400 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-slate-50/80 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-cyan-900/30 dark:bg-slate-900/70 dark:shadow-black/50 dark:hover:border-cyan-500/50 dark:hover:bg-slate-900/90 dark:hover:shadow-cyan-500/10"
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

              <div>
                <ul className="mb-6 space-y-2 border-t border-slate-100 pt-4 dark:border-slate-800">
                  {highlights.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
                  {href ? (
                    <Link
                      href={href}
                      className="group/link inline-flex items-center gap-1.5 text-xs font-extrabold text-cyan-700 transition-colors hover:text-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300"
                    >
                      {linkText}
                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  ) : (
                    <span />
                  )}
                  <span className="flex shrink-0 items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    <Tag className="h-3 w-3" aria-hidden="true" /> Fixed price
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Bottom banner */}
        <aside
          aria-labelledby="build-cta-heading"
          className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-8 shadow-lg md:flex-row dark:border-cyan-900/40 dark:from-[#0E1A38] dark:via-slate-900 dark:to-[#0E1A38] dark:shadow-2xl"
        >
          <div className="text-center md:text-left">
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
              Not sure which to choose?
            </p>
            <h3 id="build-cta-heading" className="text-xl font-black text-slate-900 dark:text-white">
              Next.js, WordPress or Unbounce: which one is right for you?
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Book a free 15-minute call and I&apos;ll help you pick the right option for your goals and budget.
            </p>
          </div>

          <Link
            href={siteConfig.bookingUrl}
            className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-300 px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:brightness-110"
          >
            Book a free call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </aside>
      </div>
    </section>
  );
}