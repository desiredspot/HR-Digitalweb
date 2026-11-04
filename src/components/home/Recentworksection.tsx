import Link from "next/link";
import { ArrowUpRight, Briefcase, ChevronDown, Code, ExternalLink, Lightbulb, TrendingUp } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
// SEO notes
// - Server component, no client JS. The case study "modal" is a native <details> element,
//   so the full breakdown is in the HTML for Google and opens without any JavaScript.
// - One <h2> for the section, an <h3> per project.
//
// HONESTY RULE (important):
// - kind: "concept" = a demo you designed yourself. Show the brief, what you built and how
//   it works. NO results or metrics, because a concept has no real customers.
// - kind: "client" = real paid work. Only add `results` and `metrics` you can prove with
//   analytics or the client's permission. When you land real clients, switch cards over.

type Metric = { label: string; value: string };

type Project = {
  id: string;
  kind: "concept" | "client";
  title: string;
  industry: string;
  service: string;
  brief: string;
  approach: string[];
  tags: string[];
  accentGradient: string;
  badgeColor: string;
  demoUrl?: string; // live demo or client site, if you have one
  result?: string; // client projects only
  resultDetail?: string; // client projects only
  metrics?: Metric[]; // client projects only
};

const projects: Project[] = [
  {
    id: "apex-vault",
    kind: "concept",
    title: "Apex Vault",
    industry: "SaaS and fintech",
    service: "Next.js web app + GoHighLevel automation",
    brief:
      "A concept website for a wealth-management platform: fast-loading pages, a clear sign-up path and instant follow-up for every new lead.",
    approach: [
      "Server-rendered Next.js pages built to score 90+ on PageSpeed",
      "Booking form connected straight to a GoHighLevel pipeline",
      "Automated SMS and email follow-up within minutes of sign-up",
    ],
    tags: ["Next.js", "Tailwind CSS", "GoHighLevel", "SEO"],
    accentGradient: "from-cyan-500 via-teal-400 to-blue-600",
    badgeColor: "border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400",
  },
  {
    id: "velocity-leadership",
    kind: "concept",
    title: "Velocity Leadership Studio",
    industry: "Executive coaching",
    service: "Unbounce funnel + email campaign",
    brief:
      "A concept lead-generation funnel for an executive coach who wants more discovery calls from corporate clients.",
    approach: [
      "Direct-response Unbounce landing page with one clear call to action",
      "5-part welcome email sequence that builds trust before the call",
      "Calendar booking built into the funnel",
    ],
    tags: ["Unbounce", "Email nurture", "Sales funnel", "Copywriting"],
    accentGradient: "from-teal-400 via-emerald-400 to-blue-500",
    badgeColor: "border-teal-500/30 bg-teal-500/10 text-teal-700 dark:text-teal-400",
  },
  {
    id: "titan-home-services",
    kind: "concept",
    title: "Titan Home Services",
    industry: "Home services",
    service: "WordPress + local SEO + short reels",
    brief:
      "A concept website and local marketing plan for a multi-location home services business that wants more calls from Google.",
    approach: [
      "WordPress site with a page for each service area",
      "LocalBusiness schema and a Google Business Profile checklist",
      "Short-form reel scripts showing real jobs and quick tips",
    ],
    tags: ["WordPress", "Local SEO", "Short reels", "CRM"],
    accentGradient: "from-blue-500 via-indigo-500 to-purple-600",
    badgeColor: "border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-400",
  },
];

export function RecentWorkSection() {
  const hasConcepts = projects.some((p) => p.kind === "concept");

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className={`${sectionBg.base} ${sectionDivider} relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28`}
    >
      {/* Background glow: radial gradient instead of a blur filter */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(50%_40%_at_50%_50%,rgba(34,211,238,0.12),transparent_70%)]
          dark:bg-[radial-gradient(50%_40%_at_50%_50%,rgba(6,182,212,0.12),transparent_70%)]"
      />

      <div className="mx-auto w-full max-w-7xl">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
            <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
            Portfolio
          </p>

          <h2
            id="portfolio-heading"
            className="mb-6 text-balance text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl dark:text-white"
          >
            Recent{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              work
            </span>
          </h2>

          <p className="text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            Websites, funnels and marketing systems I&apos;ve designed and built.
            {hasConcepts &&
              " Projects marked as concepts are demos I built to show how I'd approach each type of business."}
          </p>
        </header>

        <ul className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li
              key={p.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/80 transition duration-300 hover:-translate-y-2 hover:border-cyan-500/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-cyan-900/30 dark:bg-slate-900/70 dark:shadow-black/50 dark:hover:border-cyan-500/50 dark:hover:shadow-cyan-500/10"
            >
              <span aria-hidden="true" className={`h-1.5 w-full bg-gradient-to-r ${p.accentGradient}`} />

              <article aria-labelledby={`${p.id}-title`} className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="mb-4 flex items-center justify-between gap-2">
                  <span
                    className={`rounded-full border px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider ${p.badgeColor}`}
                  >
                    {p.industry}
                  </span>
                  {p.kind === "concept" ? (
                    <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400">
                      Concept project
                    </span>
                  ) : (
                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400">
                      Client project
                    </span>
                  )}
                </div>

                <h3
                  id={`${p.id}-title`}
                  className="mb-2 text-2xl font-black text-slate-900 transition-colors group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400"
                >
                  {p.title}
                </h3>

                <p className="mb-4 flex items-center gap-1.5 text-xs font-semibold text-cyan-700 dark:text-cyan-400">
                  <Code className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  {p.service}
                </p>

                {/* Real results only appear for client projects */}
                {p.kind === "client" && p.result ? (
                  <div className="mb-6 rounded-2xl border border-cyan-200 bg-cyan-50/60 p-4 dark:border-cyan-800/40 dark:bg-cyan-950/30">
                    <p className="mb-1 flex items-center gap-1.5 text-xs font-bold text-cyan-700 dark:text-cyan-400">
                      <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
                      Result
                    </p>
                    <p className="text-sm font-black leading-snug text-slate-900 dark:text-white">{p.result}</p>
                    {p.resultDetail && (
                      <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{p.resultDetail}</p>
                    )}
                  </div>
                ) : (
                  <div className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/60">
                    <p className="mb-1 flex items-center gap-1.5 text-xs font-bold text-cyan-700 dark:text-cyan-400">
                      <Lightbulb className="h-3.5 w-3.5" aria-hidden="true" />
                      The brief
                    </p>
                    <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{p.brief}</p>
                  </div>
                )}

                {p.kind === "client" && p.metrics && p.metrics.length > 0 && (
                  <dl className="mb-6 grid grid-cols-3 gap-2 border-y border-slate-100 py-3 dark:border-slate-800">
                    {p.metrics.map((m) => (
                      <div key={m.label} className="flex flex-col-reverse text-center">
                        <dt className="text-[11px] font-medium leading-tight text-slate-500 dark:text-slate-400">
                          {m.label}
                        </dt>
                        <dd className="text-sm font-black text-cyan-700 dark:text-cyan-400">{m.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                <ul className="mb-6 flex flex-wrap gap-1.5" aria-label="Tools used">
                  {p.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-slate-200 bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                {/* Native expandable breakdown: no JS, fully crawlable */}
                <details className="group/details mt-auto border-t border-slate-100 pt-4 dark:border-slate-800">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-xs font-extrabold text-cyan-700 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300 [&::-webkit-details-marker]:hidden">
                    How I built it
                    <ChevronDown
                      className="h-4 w-4 transition-transform group-open/details:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <ul className="mt-3 space-y-2">
                    {p.approach.map((step) => (
                      <li key={step} className="flex gap-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                        <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                        {step}
                      </li>
                    ))}
                  </ul>
                  {p.demoUrl && (
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 hover:text-cyan-600 dark:text-cyan-400"
                    >
                      {p.kind === "concept" ? "View the live demo" : "Visit the website"}
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}
                </details>
              </article>
            </li>
          ))}
        </ul>

        <aside
          aria-labelledby="portfolio-cta-heading"
          className="flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-8 shadow-lg md:flex-row dark:border-cyan-900/40 dark:from-[#0E1A38] dark:via-slate-900 dark:to-[#0E1A38] dark:shadow-2xl"
        >
          <div className="text-center md:text-left">
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
              Your project next
            </p>
            <h3 id="portfolio-cta-heading" className="text-xl font-black text-slate-900 dark:text-white">
              Let&apos;s build a website that brings in customers.
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Book a free 15-minute call and I&apos;ll review your current website and where it&apos;s losing leads.
            </p>
          </div>

          <Link
            href={siteConfig.bookingUrl}
            className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-300 px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
          >
            Start your project
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </aside>
      </div>
    </section>
  );
}