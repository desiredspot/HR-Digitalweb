import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Compass, FileCheck2, Layout, PhoneCall, Rocket } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
// SEO notes
// - Server component: no client JS. The original hover state was never used, so it's gone.
// - The steps are an ordered list (<ol>), which tells search engines and screen readers
//   that the order matters.
// - One <h2> for the section, an <h3> per step.

const steps = [
  {
    title: "Free discovery call",
    timeframe: "15 to 30 minutes",
    desc: "We talk through your goals, target customers, competitors and budget, so the plan fits your business.",
    icon: PhoneCall,
    gradient: "from-cyan-500 to-blue-600",
    highlights: ["Goals and budget", "Target customers", "Competitor review"],
  },
  {
    title: "Plan and fixed quote",
    timeframe: "Within 48 hours",
    desc: "You get a clear proposal with the scope of work, a timeline and a fixed price, before any work starts.",
    icon: FileCheck2,
    gradient: "from-teal-400 to-emerald-500",
    highlights: ["Written scope", "Fixed price", "No surprise fees"],
  },
  {
    title: "Design and build",
    timeframe: "Milestone reviews",
    desc: "I build your website, funnels and CRM workflows. You review and approve each milestone as it's finished.",
    icon: Layout,
    gradient: "from-blue-500 to-indigo-600",
    highlights: ["Milestone previews", "Mobile-friendly design", "SEO built in"],
  },
  {
    title: "Launch and grow",
    timeframe: "After launch",
    desc: "Analytics and tracking are set up and speed is tested before launch. After that, I keep improving what converts.",
    icon: Rocket,
    gradient: "from-indigo-500 to-purple-600",
    highlights: ["Analytics and tracking", "Speed testing", "Ongoing improvements"],
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className={`${sectionBg.tint} ${sectionDivider} relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28`}  >
      {/* Background glow: radial gradient instead of a blur filter */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(50%_40%_at_50%_50%,rgba(34,211,238,0.12),transparent_70%)]
          dark:bg-[radial-gradient(50%_40%_at_50%_50%,rgba(6,182,212,0.12),transparent_70%)]"
      />

      <div className="mx-auto w-full max-w-7xl">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
            <Compass className="h-3.5 w-3.5" aria-hidden="true" />
            A clear, simple process
          </p>

          <h2
            id="process-heading"
            className="mb-6 text-balance text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl dark:text-white"
          >
            How I{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              work
            </span>
          </h2>

          <p className="text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            From the first call to a live website, four clear steps so you always know what&apos;s happening, what
            it costs and what comes next.
          </p>
        </header>

        <ol className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, timeframe, desc, icon: Icon, gradient, highlights }, idx) => (
            <li
              key={title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/80 transition duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-slate-50/80 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7 dark:border-cyan-900/30 dark:bg-slate-900/70 dark:shadow-black/50 dark:hover:border-cyan-500/50 dark:hover:bg-slate-900/90 dark:hover:shadow-cyan-500/10"
            >
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${gradient} opacity-80 transition-opacity group-hover:opacity-100`}
              />

              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="rounded-2xl border border-cyan-200 bg-cyan-50 p-3.5 text-cyan-600 transition-transform duration-200 group-hover:scale-110 dark:border-cyan-900/50 dark:bg-slate-900 dark:text-cyan-400">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  {/* Decorative: the <ol> already numbers the steps for screen readers */}
                  <span
                    aria-hidden="true"
                    className="bg-gradient-to-r from-cyan-500 to-teal-400 bg-clip-text text-3xl font-black text-transparent opacity-60 transition-opacity group-hover:opacity-100 dark:from-cyan-400 dark:to-teal-300"
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mb-3 flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <Clock className="h-3 w-3 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                  {timeframe}
                </p>

                <h3 className="mb-3 text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400">
                  {title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{desc}</p>
              </div>

              <ul className="space-y-2 border-t border-slate-100 pt-4 dark:border-slate-800">
                {highlights.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="text-center">
          <Link
            href={siteConfig.bookingUrl}
            className="group inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-sm font-extrabold text-cyan-700 transition hover:border-cyan-400 hover:bg-cyan-500/20 dark:text-cyan-400"
          >
            Start with a free discovery call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}