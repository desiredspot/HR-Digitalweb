import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Code,
  Cpu,
  ExternalLink,
  FileText,
  Gauge,
  Globe,
  Layout,
  Lightbulb,
  MessageSquare,
  Timer,
  TrendingUp,
  Video,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { sectionBg } from "@/lib/section-bg";
import { portfolioCategories, portfolioProjects, type PortfolioCategory } from "@/lib/portfolio";
import { PortfolioFilter } from "./PortfolioFilter";

// Hero for /portfolio.
// Server component; only the category filter is client-side (PortfolioFilter).
// Projects come from src/lib/portfolio.ts. Concept projects are clearly labelled and
// never show results; client projects only show results you can back up.
// Primary keyword "web design portfolio" is in the H1. Secondary keywords
// (landing page examples, Next.js website examples, GoHighLevel funnel examples) are in the intro.

const categoryIcons: Record<PortfolioCategory, LucideIcon> = {
  websites: Globe,
  "web-apps": Code,
  "landing-pages": Layout,
  gohighlevel: Cpu,
  content: FileText,
  "social-reels": Video,
};

// Honest facts about how you work, instead of invented stats
const facts = [
  { icon: Timer, value: "48 hours", label: "Fixed quote turnaround" },
  { icon: Gauge, value: "90+ target", label: "PageSpeed on every build" },
  { icon: Wrench, value: "Next.js · WordPress", label: "Unbounce · GoHighLevel" },
  { icon: MessageSquare, value: "1 business day", label: "Reply time" },
];

export function PortfolioHero() {
  const hasConcepts = portfolioProjects.some((p) => p.kind === "concept");

  // Only show categories that actually have projects, with real counts
  const options = [
    {
      id: "all",
      label: "All",
      count: portfolioProjects.length,
      icon: <Briefcase className="h-4 w-4" aria-hidden="true" />,
    },
    ...portfolioCategories
      .map((c) => {
        const Icon = categoryIcons[c.id];
        return {
          id: c.id,
          label: c.label,
          count: portfolioProjects.filter((p) => p.categories.includes(c.id)).length,
          icon: <Icon className="h-4 w-4" aria-hidden="true" />,
        };
      })
      .filter((o) => o.count > 0),
  ];

  return (
    <section
      aria-labelledby="portfolio-hero-heading"
      className={`${sectionBg.base} relative isolate overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-40`}
    >
      {/* Ambient glow + dot grid: radial gradients instead of a blur filter */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0
            bg-[radial-gradient(55%_45%_at_50%_25%,rgba(103,232,249,0.25),transparent_70%)]
            dark:bg-[radial-gradient(55%_45%_at_50%_25%,rgba(6,182,212,0.18),transparent_70%)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_60%,transparent_100%)] dark:bg-[radial-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)]" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-12 sm:space-y-16">
        <header className="mx-auto max-w-4xl space-y-6 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-cyan-700 shadow-lg shadow-cyan-500/10 sm:text-sm dark:text-cyan-400">
            <Briefcase className="h-4 w-4" aria-hidden="true" />
            Portfolio
          </p>

          <h1
            id="portfolio-hero-heading"
            className="text-balance text-4xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white"
          >
            Web design portfolio:{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              websites, landing pages and funnels
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-pretty text-base font-normal leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
            Every project starts with a business goal, not just a design brief. Browse Next.js website examples,
            landing page examples and GoHighLevel funnel examples.
            {hasConcepts &&
              " Projects marked “Concept” are demos I designed to show how I'd approach each type of business."}
          </p>
        </header>

        <PortfolioFilter options={options}>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((p) => (
              <li
                key={p.id}
                id={`project-${p.id}`}
                data-cats={p.categories.join(" ")}
                className="group relative flex scroll-mt-24 flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 transition-all duration-300 hover:border-cyan-500/40 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-black/30 dark:hover:bg-slate-900/95"
              >
                <article aria-labelledby={`project-${p.id}-title`} className="flex flex-1 flex-col">
                  {/* Preview panel */}
                  <div
                    className={`relative mb-5 flex h-40 w-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br p-5 transition-colors group-hover:border-cyan-500/30 dark:border-slate-800 ${p.gradient}`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`rounded-full border px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider ${
                          p.kind === "concept"
                            ? "border-amber-500/30 bg-white/90 text-amber-700 dark:bg-slate-950/80 dark:text-amber-400"
                            : "border-emerald-500/30 bg-white/90 text-emerald-700 dark:bg-slate-950/80 dark:text-emerald-400"
                        }`}
                      >
                        {p.kind === "concept" ? "Concept" : (p.client ?? "Client project")}
                      </span>
                      <span className="rounded-full border border-slate-200 bg-white/90 px-3 py-1 font-mono text-[10px] text-slate-600 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-300">
                        {p.industry}
                      </span>
                    </div>

                    {p.kind === "client" && p.result ? (
                      <div className="space-y-0.5">
                        <span className="flex items-center gap-1.5 text-2xl font-black text-slate-900 dark:text-white">
                          <TrendingUp className="h-5 w-5 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                          {p.result.value}
                        </span>
                        <span className="block font-mono text-[11px] text-slate-700 dark:text-slate-300">
                          {p.result.label}
                        </span>
                      </div>
                    ) : (
                      <p className="flex items-start gap-1.5 text-sm font-bold text-slate-800 dark:text-slate-100">
                        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                        {p.service}
                      </p>
                    )}
                  </div>

                  <h2
                    id={`project-${p.id}-title`}
                    className="mb-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300"
                  >
                    {p.title}
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{p.description}</p>

                  <div className="mt-auto space-y-4 border-t border-slate-100 pt-4 dark:border-slate-800/80">
                    <ul aria-label="Tools used" className="flex flex-wrap gap-1.5">
                      {p.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-[10px] text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>

                    {p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-cyan-500/20 bg-slate-50 py-2.5 text-xs font-bold text-cyan-700 transition-all hover:bg-cyan-400 hover:text-slate-950 dark:bg-slate-950 dark:text-cyan-400 dark:hover:text-slate-950"
                      >
                        {p.kind === "concept" ? "View live demo" : "Visit the site"}
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    ) : p.caseStudy ? (
                      <a
                        href={`#case-${p.id}`}
                        className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-cyan-500/20 bg-slate-50 py-2.5 text-xs font-bold text-cyan-700 transition-all hover:bg-cyan-400 hover:text-slate-950 dark:bg-slate-950 dark:text-cyan-400 dark:hover:text-slate-950"
                      >
                        Read the breakdown
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    ) : (
                      <Link
                        href={siteConfig.bookingUrl}
                        className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-cyan-500/20 bg-slate-50 py-2.5 text-xs font-bold text-cyan-700 transition-all hover:bg-cyan-400 hover:text-slate-950 dark:bg-slate-950 dark:text-cyan-400 dark:hover:text-slate-950"
                      >
                        Want something like this?
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </PortfolioFilter>

        {/* How every project is delivered (facts, not invented stats) */}
        <dl className="grid grid-cols-2 gap-4 rounded-3xl border border-cyan-500/30 bg-white p-6 text-center shadow-xl sm:p-8 lg:grid-cols-4 dark:bg-slate-900/80">
          {facts.map(({ icon: Icon, value, label }) => (
            // dt comes first for valid HTML; flex-col-reverse shows the value above the label
            <div key={label} className="flex flex-col-reverse items-center gap-1">
              <dt className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {label}
              </dt>
              <dd className="text-lg font-black text-slate-900 sm:text-2xl dark:text-white">{value}</dd>
              <Icon className="h-5 w-5 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}