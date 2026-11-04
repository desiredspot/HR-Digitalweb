import { Clock, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { FreePlanDialog } from "./FreePlanDialog";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
// Server component. Only the button and the form dialog are client-side (FreePlanDialog).

const guarantees = [
  {
    title: "Delivered in 48 hours",
    desc: "No long wait. Your plan lands in your inbox within 2 business days.",
    icon: Clock,
  },
  {
    title: "Free, no obligation",
    desc: "No pressure, no spam and no pushy sales pitch. Just practical advice.",
    icon: ShieldCheck,
  },
  {
    title: "A plan made for you",
    desc: "A clear breakdown for your website, CRM and traffic goals, not a template.",
    icon: Zap,
  },
];

export function FreePlanSection() {
  return (
    <section
      id="contact"
      aria-labelledby="free-plan-heading"
      className={`${sectionBg.base} ${sectionDivider} relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:px-8`}
    >
      {/* Ambient glow: radial gradient instead of a blur filter (same look, cheaper to paint) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(55%_45%_at_50%_50%,rgba(94,234,212,0.22),transparent_70%)]
          dark:bg-[radial-gradient(55%_45%_at_50%_50%,rgba(20,184,166,0.18),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-white via-cyan-50/40 to-white p-8 text-center shadow-xl transition-all duration-300 sm:p-14 dark:border-cyan-500/30 dark:from-[#0E1A38] dark:via-slate-900 dark:to-[#0E1A38] dark:shadow-2xl dark:shadow-cyan-950/50">
          {/* Top accent bar */}
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
          />

          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Take the first step
          </p>

          <h2
            id="free-plan-heading"
            className="mx-auto mb-6 max-w-4xl text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Ready to grow your business{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              online?
            </span>
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-base font-normal leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
            Tell me about your business. Within 48 hours you&apos;ll get a free, no-obligation plan for your website
            and marketing.
          </p>

          <FreePlanDialog />

          {/* Trust pillars */}
          <ul className="grid grid-cols-1 gap-4 border-t border-slate-200/80 pt-8 md:grid-cols-3 dark:border-slate-800">
            {guarantees.map(({ title, desc, icon: Icon }) => (
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