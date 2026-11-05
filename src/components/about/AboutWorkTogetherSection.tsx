import { CheckCircle2, Clock, Globe, MessageSquare, UserCheck } from "lucide-react";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { ProjectInquiryDialog } from "./ProjectInquiryDialog";

// Server component. Only the CTA button and its form dialog are client-side.

const regions = [
  { name: "India", code: "IN", timeZone: "IST" },
  { name: "United States", code: "US", timeZone: "EST / PST" },
  { name: "United Kingdom", code: "UK", timeZone: "GMT / BST" },
  { name: "Australia", code: "AU", timeZone: "AEST" },
  { name: "Middle East", code: "ME", timeZone: "GST" },
];

const workflow = [
  {
    title: "Clear timelines",
    desc: "Milestones planned up front with agreed dates, so your launch stays on schedule.",
    icon: Clock,
    badge: "On-time delivery",
  },
  {
    title: "Regular updates",
    desc: "Progress updates and short video walkthroughs keep you informed without endless meetings.",
    icon: MessageSquare,
    badge: "No surprises",
  },
  {
    title: "One point of contact",
    desc: "No account managers and no hand-offs. You speak directly to me, the person doing the work.",
    icon: UserCheck,
    badge: "Direct access",
  },
];

export function AboutWorkTogetherSection() {
  return (
    <section
      id="work-together"
      aria-labelledby="work-together-heading"
      className={`${sectionBg.base} ${sectionDivider} relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:px-8`}
    >
      {/* Ambient glow: radial gradient instead of a blur filter */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(55%_45%_at_50%_50%,rgba(94,234,212,0.20),transparent_70%)]
          dark:bg-[radial-gradient(55%_45%_at_50%_50%,rgba(20,184,166,0.16),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-white via-cyan-50/40 to-white p-8 shadow-xl sm:p-14 dark:border-cyan-500/30 dark:from-[#0E1A38] dark:via-slate-900 dark:to-[#0E1A38] dark:shadow-2xl dark:shadow-cyan-950/50">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
          />

          {/* Header */}
          <header className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
              <Globe className="h-3.5 w-3.5" aria-hidden="true" />
              Remote, wherever you are
            </p>

            <h2
              id="work-together-heading"
              className="mb-6 text-balance text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
            >
              Working{" "}
              <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
                together
              </span>
            </h2>

            <p className="text-pretty text-base font-normal leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
              I work remotely with businesses in{" "}
              <strong className="font-bold text-cyan-700 dark:text-cyan-400">
                India, the US, the UK, Australia and the Middle East
              </strong>
              . You get clear timelines, regular updates and one point of contact, from the first call to launch and
              beyond.
            </p>
          </header>

          {/* Regions */}
          <div className="mb-12">
            <h3 className="mb-4 text-center text-[11px] font-extrabold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
              Regions and time zones I work with
            </h3>
            <ul className="flex flex-wrap items-center justify-center gap-3">
              {regions.map((r) => (
                <li
                  key={r.code}
                  className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 shadow-md transition-all hover:scale-105 hover:border-cyan-500 motion-reduce:hover:scale-100 dark:border-cyan-900/40 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-cyan-400"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-6 w-7 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400 to-teal-300 text-[10px] font-black text-slate-950"
                  >
                    {r.code}
                  </span>
                  {r.name}
                  <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-cyan-700 dark:bg-slate-800 dark:text-cyan-400">
                    {r.timeZone}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Workflow pillars */}
          <ul className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {workflow.map(({ title, desc, icon: Icon, badge }) => (
              <li
                key={title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-white motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none dark:hover:border-cyan-500/40 dark:hover:bg-slate-900/90"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <span className="rounded-xl border border-cyan-200 bg-cyan-50 p-3 text-cyan-600 dark:border-cyan-500/20 dark:bg-cyan-500/10 dark:text-cyan-400">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                      {badge}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{desc}</p>
                </div>

                <p className="mt-4 flex items-center gap-1.5 border-t border-slate-200 pt-3 text-[11px] font-semibold text-emerald-700 dark:border-slate-800 dark:text-emerald-400">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  Included in every project
                </p>
              </li>
            ))}
          </ul>

          <ProjectInquiryDialog />

          <p className="mt-6 text-center text-xs font-medium text-slate-500 dark:text-slate-400">
            Reply within 24 hours • Fixed-price quotes
          </p>
        </div>
      </div>
    </section>
  );
}