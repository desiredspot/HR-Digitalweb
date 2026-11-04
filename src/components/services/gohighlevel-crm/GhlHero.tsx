import { ArrowDown, ArrowRight, Bot, Clock, Workflow } from "lucide-react";
import { sectionBg } from "@/lib/section-bg";
import { ServiceQuoteDialog } from "@/components/services/quote/ServiceQuoteDialog";

// Hero for /services/gohighlevel-crm.
// Server component; only the quote button and dialog are client-side.
// Primary keyword "GoHighLevel expert" is in the intro and eyebrow; the H1 carries
// "GoHighLevel CRM setup and automation". Secondary keywords (GHL CRM setup,
// GoHighLevel automation, GoHighLevel funnel builder, marketing automation services)
// appear naturally in the intro and cards.

// The section right after this hero should have this id (the second button scrolls to it).
const NEXT_SECTION_ID = "automations";

const pillars = [
  {
    icon: Clock,
    title: "Instant lead follow-up",
    desc: "Automatic replies by SMS, email and WhatsApp within moments of a form, call or message, while the lead is still interested.",
  },
  {
    icon: Bot,
    title: "Nurture and booking",
    desc: "GoHighLevel automation and AI chat that answer common questions, qualify leads and book calls straight into your calendar.",
  },
  {
    icon: Workflow,
    title: "End-to-end GHL CRM setup",
    desc: "Pipelines, funnels, calendars, phone numbers, trigger links and CRM migration, set up cleanly and documented.",
  },
];

const primaryBtn =
  "group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:scale-105 hover:brightness-110 active:scale-95 motion-reduce:hover:scale-100 sm:w-auto";

export function GhlHero() {
  return (
    <section
      aria-labelledby="ghl-hero-heading"
      className={`${sectionBg.base} relative isolate flex min-h-[85vh] items-center justify-center overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-40`}
    >
      {/* Ambient glow + dot grid: radial gradients instead of a blur filter */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0
            bg-[radial-gradient(55%_45%_at_50%_30%,rgba(103,232,249,0.25),transparent_70%)]
            dark:bg-[radial-gradient(55%_45%_at_50%_30%,rgba(6,182,212,0.18),transparent_70%)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_60%,transparent_100%)] dark:bg-[radial-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)]" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-12 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-cyan-700 shadow-lg shadow-cyan-500/10 sm:text-sm dark:text-cyan-400">
          <Workflow className="h-4 w-4" aria-hidden="true" />
          GoHighLevel expert
        </p>

        <h1
          id="ghl-hero-heading"
          className="mx-auto max-w-5xl text-balance text-4xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white"
        >
          GoHighLevel CRM setup and automation that{" "}
          <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
            follows up for you
          </span>
        </h1>

        <p className="mx-auto max-w-3xl text-pretty text-base font-normal leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
          Leads go cold in minutes. GoHighLevel can capture, nurture and book them automatically, but only when
          it&apos;s set up properly. As a GoHighLevel expert, I configure your account end to end, from GHL CRM setup
          and pipelines to funnels, calendars and SMS and email workflows, so every lead gets a fast reply and nothing
          slips through.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
          <ServiceQuoteDialog
            service="GoHighLevel CRM and automation"
            title="Request a GoHighLevel quote"
            description="Tell me how you get leads today and what you want automated, and I'll come back with a fixed quote."
            icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
            buttonClassName={primaryBtn}
          >
            Set up my GHL automation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </ServiceQuoteDialog>

          <a
            href={`#${NEXT_SECTION_ID}`}
            className="group flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-bold text-slate-800 transition-all hover:bg-slate-100 sm:w-auto dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            Explore the automations
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
        </div>

        <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-6 pt-8 sm:grid-cols-3">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <li
              key={title}
              className="group space-y-3 rounded-3xl border border-slate-200 bg-white/80 p-6 text-left shadow-xl shadow-slate-200/50 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-black/20 dark:hover:bg-slate-900/90"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-50 text-cyan-600 transition-transform group-hover:scale-110 motion-reduce:group-hover:scale-100 dark:bg-slate-950 dark:text-cyan-400">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300">
                {title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}