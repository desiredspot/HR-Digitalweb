import Link from "next/link";
import { AlertTriangle, ArrowRight, CheckCircle2, Compass, FileText, Mail, Search, Target, Video, Zap } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { sectionBg, sectionDivider } from "@/lib/section-bg";

// Server component, no client JS. One <h2> for the section, <h3> for each card.

const commonTrap = [
  "Websites built to look impressive, but slow to load and poor on Core Web Vitals.",
  "No search visibility, so there's little traffic and the budget goes to waste.",
  "Landing pages without persuasive copy, so visitors leave without becoming leads.",
];

const combinedApproach = [
  "Next.js and WordPress websites built for speed and SEO from the start.",
  "Copy that converts, email campaigns and instant GoHighLevel follow-up.",
  "One partner focused on one outcome: more leads, bookings and sales.",
];

const skills = [
  { name: "SEO and organic growth", icon: Search, color: "border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400" },
  { name: "Copywriting", icon: FileText, color: "border-teal-500/30 bg-teal-500/10 text-teal-600 dark:text-teal-400" },
  { name: "Email marketing", icon: Mail, color: "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400" },
  { name: "CRM automation", icon: Zap, color: "border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400" },
  { name: "Short-form video", icon: Video, color: "border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400" },
];

export function AboutStorySection() {
  return (
    <section
      id="story"
      aria-labelledby="story-heading"
      className={`${sectionBg.alt} ${sectionDivider} relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28`}
    >
      {/* Ambient glow: radial gradient instead of a blur filter */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(50%_40%_at_50%_50%,rgba(103,232,249,0.18),transparent_70%)]
          dark:bg-[radial-gradient(50%_40%_at_50%_50%,rgba(6,182,212,0.14),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-5xl">
        {/* Header and story */}
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
            <Compass className="h-3.5 w-3.5" aria-hidden="true" />
            My story and mission
          </p>

          <h2
            id="story-heading"
            className="mb-6 text-balance text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl dark:text-white"
          >
            Why I started{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              {siteConfig.name}
            </span>
          </h2>

          <p className="text-pretty text-base font-normal leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
            I began as a web developer, building sites in WordPress and later in Next.js. Again and again I saw the same
            problem:{" "}
            <strong className="font-semibold text-cyan-700 dark:text-cyan-400">good-looking websites that nobody visited</strong>
            , and{" "}
            <strong className="font-semibold text-cyan-700 dark:text-cyan-400">landing pages that never converted</strong>. So I
            learned the other half of the job: SEO, copywriting, email marketing, CRM automation and short-form video.
          </p>

          <p className="mt-6 text-pretty text-base font-semibold leading-relaxed text-slate-800 sm:text-lg dark:text-slate-200">
            Now I combine both. Every project starts with one question:{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-teal-500 bg-clip-text font-black text-transparent dark:from-cyan-400 dark:to-teal-300">
              what does this need to achieve for your business?
            </span>
          </p>
        </header>

        {/* Problem vs approach */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <article
            aria-labelledby="trap-heading"
            className="relative overflow-hidden rounded-3xl border border-amber-200 bg-amber-50/60 p-8 text-slate-700 dark:border-amber-500/20 dark:bg-amber-950/10 dark:text-slate-300"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="shrink-0 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-3 text-amber-600 dark:text-amber-400">
                <AlertTriangle className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                  The common trap
                </p>
                <h3 id="trap-heading" className="text-lg font-bold text-slate-900 dark:text-white">
                  The &ldquo;pretty website&rdquo; problem
                </h3>
              </div>
            </div>

            <ul className="space-y-3 text-sm">
              {commonTrap.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article
            aria-labelledby="approach-heading"
            className="relative overflow-hidden rounded-3xl border border-cyan-300 bg-gradient-to-br from-white via-cyan-50/40 to-white p-8 shadow-xl dark:border-cyan-500/40 dark:from-[#0E1A38] dark:via-slate-900 dark:to-[#0E1A38] dark:shadow-2xl dark:shadow-cyan-950/40"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="shrink-0 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-3 text-cyan-600 dark:text-cyan-400">
                <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                  My combined approach
                </p>
                <h3 id="approach-heading" className="text-lg font-bold text-slate-900 dark:text-white">
                  Development + growth marketing
                </h3>
              </div>
            </div>

            <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
              {combinedApproach.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* Skills strip */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl sm:p-8 dark:border-cyan-900/30 dark:bg-slate-900/70 dark:shadow-none">
          <div className="mb-6 text-center">
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
              The other half of the job
            </p>
            <h3 className="text-lg font-black text-slate-900 dark:text-white">
              5 marketing skills built into every project
            </h3>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-3">
            {skills.map(({ name, icon: Icon, color }) => (
              <li
                key={name}
                className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-bold text-slate-800 transition-transform hover:scale-105 motion-reduce:hover:scale-100 dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-200"
              >
                <span className={`rounded-xl border p-1.5 ${color}`}>
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {name}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href={siteConfig.bookingUrl}
            className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-sm font-extrabold text-slate-950 shadow-xl shadow-cyan-500/20 transition-all hover:scale-105 hover:brightness-110 active:scale-95 motion-reduce:hover:scale-100"
          >
            <Target className="h-4 w-4" aria-hidden="true" />
            Discuss your project goals
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}