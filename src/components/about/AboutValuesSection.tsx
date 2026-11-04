import Link from "next/link";
import { ArrowRight, CheckCircle2, Compass, Cpu, Eye, ShieldCheck, Zap } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { sectionBg, sectionDivider } from "@/lib/section-bg";

// Server component, no client JS. One <h2> for the section, an <h3> per value.

const values = [
  {
    title: "Speed is a feature.",
    desc: "Fast websites rank better and convert better. Quick load times keep visitors engaged and stop them bouncing.",
    icon: Zap,
    badge: "Performance",
    gradient: "from-cyan-500 to-blue-600",
    tagColor: "border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400",
    highlights: ["Fast page loads on mobile", "PageSpeed score of 90+", "Fewer visitors bouncing"],
  },
  {
    title: "Clarity beats cleverness.",
    desc: "Visitors should understand your offer within five seconds. Clear copy and focused layouts beat clever jargon every time.",
    icon: Eye,
    badge: "5-second rule",
    gradient: "from-teal-400 to-emerald-500",
    tagColor: "border-teal-500/30 bg-teal-500/10 text-teal-700 dark:text-teal-400",
    highlights: ["A clear offer up front", "No confusing jargon", "One obvious next step"],
  },
  {
    title: "Systems beat hustle.",
    desc: "The right CRM follows up with leads while you sleep. Automated workflows turn new enquiries into booked calls around the clock.",
    icon: Cpu,
    badge: "24/7 automation",
    gradient: "from-blue-500 to-indigo-600",
    tagColor: "border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-400",
    highlights: ["Instant SMS replies", "Automated email follow-up", "No lead left waiting"],
  },
  {
    title: "Honest work, honest pricing.",
    desc: "Clear scope, fixed quotes and no lock-in contracts. Your code, content and accounts belong to you.",
    icon: ShieldCheck,
    badge: "Full ownership",
    gradient: "from-indigo-500 to-purple-600",
    tagColor: "border-indigo-500/30 bg-indigo-500/10 text-indigo-700 dark:text-indigo-400",
    highlights: ["Fixed quote before we start", "No lock-in contracts", "You own everything I build"],
  },
];

export function AboutValuesSection() {
  return (
    <section
      id="values"
      aria-labelledby="values-heading"
      className={`${sectionBg.base} ${sectionDivider} relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28`}
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
            <Compass className="h-3.5 w-3.5" aria-hidden="true" />
            Values and principles
          </p>

          <h2
            id="values-heading"
            className="mb-6 text-balance text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl dark:text-white"
          >
            What I{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              believe
            </span>
          </h2>

          <p className="text-pretty text-base font-normal leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            The standards that guide how I build websites, set up sales funnels and work with every client.
          </p>
        </header>

        <ul className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {values.map(({ title, desc, icon: Icon, badge, gradient, tagColor, highlights }) => (
            <li
              key={title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/80 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-slate-50/80 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-cyan-900/30 dark:bg-slate-900/70 dark:shadow-black/50 dark:hover:border-cyan-500/50 dark:hover:bg-slate-900/90 dark:hover:shadow-cyan-500/10"
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

                <h3 className="mb-3 text-xl font-black leading-snug text-slate-900 transition-colors group-hover:text-cyan-600 sm:text-2xl dark:text-white dark:group-hover:text-cyan-400">
                  {title}
                </h3>
                <p className="mb-6 text-sm font-normal leading-relaxed text-slate-600 dark:text-slate-300">{desc}</p>
              </div>

              <ul className="space-y-2 border-t border-slate-100 pt-4 dark:border-slate-800">
                {highlights.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Bottom banner */}
        <aside
          aria-labelledby="values-cta-heading"
          className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-8 shadow-lg md:flex-row dark:border-cyan-900/40 dark:from-[#0E1A38] dark:via-slate-900 dark:to-[#0E1A38] dark:shadow-2xl"
        >
          <div className="text-center md:text-left">
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
              Sound like a good fit?
            </p>
            <h3 id="values-cta-heading" className="text-xl font-black text-slate-900 dark:text-white">
              Let&apos;s build a website and funnel that lives up to these standards.
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Book a free 15-minute discovery call to talk through your goals and get a fixed-price plan.
            </p>
          </div>

          <Link
            href={siteConfig.bookingUrl}
            className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-300 px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:brightness-110"
          >
            Book a discovery call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </aside>
      </div>
    </section>
  );
}