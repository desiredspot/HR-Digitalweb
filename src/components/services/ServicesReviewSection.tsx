import { HelpCircle, ShieldCheck, TrendingUp, Zap } from "lucide-react";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { WebsiteReviewDialog } from "./WebsiteReviewDialog";

// Closing call to action for the Services page.
// Server component; only the button and its form dialog are client-side.

const reviewHighlights = [
  {
    title: "The 2 or 3 changes that matter most",
    desc: "I'll point out the specific fixes to your speed, copy or lead capture that will make the biggest difference.",
    icon: TrendingUp,
  },
  {
    title: "Speed and mobile check",
    desc: "A look at how fast your pages load, how they work on mobile and how they score on Core Web Vitals.",
    icon: Zap,
  },
  {
    title: "No pressure",
    desc: "Practical advice only. No pushy sales pitch, no obligation to hire me and no jargon.",
    icon: ShieldCheck,
  },
];

export function ServicesReviewSection() {
  return (
    <section
      id="website-review"
      aria-labelledby="review-heading"
      className={`${sectionBg.base} ${sectionDivider} relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:px-8`}
    >
      {/* Ambient glow: radial gradient instead of a blur filter */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(55%_45%_at_50%_50%,rgba(94,234,212,0.20),transparent_70%)]
          dark:bg-[radial-gradient(55%_45%_at_50%_50%,rgba(20,184,166,0.16),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-white via-cyan-50/40 to-white p-8 text-center shadow-xl sm:p-14 dark:border-cyan-500/30 dark:from-[#0E1A38] dark:via-slate-900 dark:to-[#0E1A38] dark:shadow-2xl dark:shadow-cyan-950/50">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
          />

          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
            <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />
            Free website review
          </p>

          <h2
            id="review-heading"
            className="mx-auto mb-6 max-w-3xl text-balance text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Not sure where to{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              start?
            </span>
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-pretty text-base font-normal leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
            Book a free 30-minute call. I&apos;ll review your current website and marketing and recommend the two or
            three changes that will make the biggest difference. No pressure, no hard sell.
          </p>

          <WebsiteReviewDialog />

          <ul className="grid grid-cols-1 gap-4 border-t border-slate-200 pt-8 md:grid-cols-3 dark:border-slate-800">
            {reviewHighlights.map(({ title, desc, icon: Icon }) => (
              <li
                key={title}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left dark:border-slate-800/80 dark:bg-slate-900/40"
              >
                <span className="shrink-0 rounded-xl border border-cyan-200 bg-cyan-50 p-2.5 text-cyan-600 dark:border-cyan-500/20 dark:bg-cyan-500/10 dark:text-cyan-400">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="mb-0.5 text-xs font-bold text-slate-900 dark:text-white">{title}</h3>
                  <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}