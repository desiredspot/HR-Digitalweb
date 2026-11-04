import Link from "next/link";
import { ArrowRight, MousePointerClick, Sparkles, Target, TrendingUp, Zap } from "lucide-react";
import { sectionBg } from "@/lib/section-bg";
import { ServiceQuoteDialog } from "@/components/services/quote/ServiceQuoteDialog";

// Hero for /services/landing-page-design.
// Server component; only the quote button and dialog are client-side.
// Primary keyword "Unbounce landing page designer" is in the eyebrow and intro (and the
// page title); "high-converting landing pages" is in the H1; "PPC landing page design" and
// "lead generation landing page" appear naturally in the copy.

const pillars = [
  { label: "Persuasive copywriting", icon: MousePointerClick },
  { label: "Clean, focused design", icon: Zap },
  { label: "A/B testing built in", icon: TrendingUp },
];

const primaryBtn =
  "group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:scale-105 hover:brightness-110 active:scale-95 motion-reduce:hover:scale-100 sm:w-auto";

export function LandingPageHero() {
  return (
    <section
      aria-labelledby="lp-hero-heading"
      className={`${sectionBg.base} relative isolate flex min-h-[85vh] items-center justify-center overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-40`}
    >
      {/* Ambient glow + faint grid: radial gradient instead of a blur filter */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0
            bg-[radial-gradient(55%_45%_at_50%_25%,rgba(103,232,249,0.25),transparent_70%)]
            dark:bg-[radial-gradient(55%_45%_at_50%_25%,rgba(6,182,212,0.18),transparent_70%)]"
        />
        <div
          className="absolute inset-0 bg-[size:4rem_4rem]
            bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)]
            [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]
            dark:bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)]"
        />
      </div>

      <div className="relative mx-auto w-full max-w-5xl space-y-10 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-cyan-700 shadow-lg shadow-cyan-500/10 sm:text-sm dark:text-cyan-400">
          <Target className="h-4 w-4" aria-hidden="true" />
          Unbounce landing page designer
        </p>

        <h1
          id="lp-hero-heading"
          className="mx-auto max-w-4xl text-balance text-4xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white"
        >
          High-converting landing pages built in{" "}
          <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
            Unbounce
          </span>
        </h1>

        <p className="mx-auto max-w-3xl text-pretty text-base font-normal leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
          You pay for every click. Your landing page decides whether that click becomes a lead or wasted budget. As an
          Unbounce landing page designer, I build PPC landing pages for Google Ads, Meta Ads and launches, each focused
          on one goal, with persuasive copy, clean design and testing built in.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
          <ServiceQuoteDialog
            service="Unbounce landing pages"
            title="Request a landing page quote"
            description="Tell me about your offer and ad campaign, and I'll come back with a fixed quote for your landing page."
            icon={<Target className="h-5 w-5" aria-hidden="true" />}
            buttonClassName={primaryBtn}
          >
            Get a landing page quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </ServiceQuoteDialog>

          <Link
            href="/portfolio"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-bold text-slate-800 transition-all hover:bg-slate-100 sm:w-auto dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <Sparkles className="h-4 w-4 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
            See landing page examples
          </Link>
        </div>

        <ul className="mx-auto grid max-w-3xl grid-cols-1 gap-4 pt-10 sm:grid-cols-3">
          {pillars.map(({ label, icon: Icon }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 dark:border-slate-800 dark:bg-slate-900/60"
            >
              <Icon className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}