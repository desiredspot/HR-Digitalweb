import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  ExternalLink,
  Gauge,
  Lightbulb,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { portfolioProjects } from "@/lib/portfolio";
import { PortfolioFilter } from "./PortfolioFilter";

// "Case studies" section for /portfolio.
// Server component; only the concept/client filter is client-side (reuses PortfolioFilter).
// Shows every project in src/lib/portfolio.ts that has a `caseStudy`.
// Concept projects show "What it's designed to do"; only client projects can show a result.

export function PortfolioCaseStudies() {
  const studies = portfolioProjects.filter((p) => p.caseStudy);
  if (studies.length === 0) return null;

  const conceptCount = studies.filter((p) => p.kind === "concept").length;
  const clientCount = studies.filter((p) => p.kind === "client").length;

  const options = [
    { id: "all", label: "All", count: studies.length, icon: <Briefcase className="h-4 w-4" aria-hidden="true" /> },
    { id: "client", label: "Real projects", count: clientCount, icon: <BadgeCheck className="h-4 w-4" aria-hidden="true" /> },
    { id: "concept", label: "Concepts", count: conceptCount, icon: <Lightbulb className="h-4 w-4" aria-hidden="true" /> },
  ].filter((o) => o.count > 0);

  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className={`${sectionBg.alt} ${sectionDivider} relative isolate scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24`}
    >
      {/* Ambient glow + dot grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0
            bg-[radial-gradient(55%_45%_at_50%_30%,rgba(103,232,249,0.16),transparent_70%)]
            dark:bg-[radial-gradient(55%_45%_at_50%_30%,rgba(6,182,212,0.13),transparent_70%)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:28px_28px] dark:bg-[radial-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)]" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-12">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
            <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
            Case studies
          </p>

          <h2
            id="case-studies-heading"
            className="text-balance text-3xl font-black leading-none tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            How each project{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              comes together
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            The problem, what I built and why. Real projects show what happened; concepts show what they&apos;re
            designed to do.
          </p>
        </header>

        <PortfolioFilter options={options}>
          <ul className="space-y-8">
            {studies.map((p) => {
              const cs = p.caseStudy!;
              return (
                <li
                  key={p.id}
                  id={`case-${p.id}`}
                  data-cats={p.kind}
                  className="group relative scroll-mt-24 overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-6 shadow-2xl shadow-slate-200/70 transition-colors duration-300 hover:border-cyan-500 sm:p-10 dark:bg-slate-900/80 dark:shadow-black/40 dark:hover:border-cyan-400"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
                  />

                  <article aria-labelledby={`case-${p.id}-title`} className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
                    {/* Overview */}
                    <div className="space-y-6 lg:col-span-5">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                          {p.industry}
                        </p>
                        {p.kind === "concept" ? (
                          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-xs font-bold text-amber-700 dark:text-amber-400">
                            Concept project
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400">
                            <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                            {p.client ?? "Client project"}
                          </span>
                        )}
                      </div>

                      <h3
                        id={`case-${p.id}-title`}
                        className="text-2xl font-black text-slate-900 transition-colors group-hover:text-cyan-700 sm:text-3xl dark:text-white dark:group-hover:text-cyan-300"
                      >
                        {p.title}
                      </h3>

                      <div className="space-y-2">
                        <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Built with
                        </p>
                        <ul className="flex flex-wrap gap-2">
                          {p.tags.map((t) => (
                            <li
                              key={t}
                              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
                            >
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Result (client) or goal (concept) */}
                      {p.kind === "client" && (p.result || p.lighthouse) ? (
                        <div className="space-y-1 rounded-2xl border border-cyan-500/20 bg-cyan-50 p-4 dark:bg-slate-950">
                          {p.result && (
                            <>
                              <p className="flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                                <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
                                The result
                              </p>
                              <p className="text-sm font-black text-slate-900 dark:text-white">
                                {p.result.value} {p.result.label}
                              </p>
                            </>
                          )}
                          {p.lighthouse && (
                            <p className="mt-2 flex items-center justify-between border-t border-slate-200 pt-2 font-mono text-xs text-emerald-700 dark:border-slate-800 dark:text-emerald-400">
                              <span className="flex items-center gap-1">
                                <Gauge className="h-4 w-4" aria-hidden="true" /> PageSpeed performance
                              </span>
                              <span className="rounded border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-sm font-black">
                                {p.lighthouse} / 100
                              </span>
                            </p>
                          )}
                        </div>
                      ) : cs.goal ? (
                        <div className="space-y-1 rounded-2xl border border-amber-500/20 bg-amber-50 p-4 dark:bg-slate-950">
                          <p className="flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">
                            <Lightbulb className="h-3.5 w-3.5" aria-hidden="true" />
                            What it&apos;s designed to do
                          </p>
                          <p className="text-sm font-bold text-slate-900 dark:text-white">{cs.goal}</p>
                        </div>
                      ) : null}

                      {p.url ? (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition-colors hover:bg-cyan-300"
                        >
                          {p.kind === "concept" ? "View live demo" : "Visit the site"}
                          <ExternalLink className="h-4 w-4" aria-hidden="true" />
                          <span className="sr-only">(opens in a new tab)</span>
                        </a>
                      ) : (
                        <Link
                          href={siteConfig.bookingUrl}
                          className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition-colors hover:bg-cyan-300"
                        >
                          Want something like this?
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      )}
                    </div>

                    {/* Challenge and approach */}
                    <div className="space-y-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left sm:p-8 lg:col-span-7 dark:border-slate-800 dark:bg-slate-950/60">
                      <div className="space-y-2">
                        <h4 className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-rose-700 dark:text-rose-400">
                          <Target className="h-4 w-4" aria-hidden="true" />
                          The challenge
                        </h4>
                        <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{cs.challenge}</p>
                      </div>

                      <div aria-hidden="true" className="h-px w-full bg-slate-200 dark:bg-slate-800/80" />

                      <div className="space-y-2">
                        <h4 className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                          <Sparkles className="h-4 w-4" aria-hidden="true" />
                          What I built
                        </h4>
                        <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{cs.approach}</p>
                      </div>

                      <ul className="grid grid-cols-1 gap-2 pt-2 sm:grid-cols-2">
                        {cs.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2.5 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </PortfolioFilter>

        {/* CTA */}
        <aside
          aria-labelledby="case-studies-cta-heading"
          className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 text-center shadow-xl sm:p-10 md:flex-row md:text-left dark:bg-slate-900/90 dark:shadow-2xl"
        >
          <div className="space-y-1.5">
            <p className="flex items-center justify-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 md:justify-start dark:text-cyan-400">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Your project next
            </p>
            <h3 id="case-studies-cta-heading" className="text-2xl font-black text-slate-900 sm:text-4xl dark:text-white">
              Want a website like this?
            </h3>
            <p className="max-w-xl text-xs text-slate-600 sm:text-sm dark:text-slate-300">
              Let&apos;s talk about your goals, your customers and the best way to bring in more leads.
            </p>
          </div>

          <Link
            href={siteConfig.bookingUrl}
            className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-xs font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:brightness-110 sm:text-sm"
          >
            Let&apos;s talk
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </aside>
      </div>
    </section>
  );
}