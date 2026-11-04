import {
  ArrowRight,
  Bot,
  Calendar,
  CheckCircle2,
  Clock,
  MessageSquare,
  RotateCcw,
  Sparkles,
  Star,
  UserCheck,
  Zap,
} from "lucide-react";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { QuoteDialogTrigger } from "@/components/services/quote/ServiceQuoteDialog";
import { GhlStepTabs } from "./GhlStepTabs";

// "Automations that pay for themselves" section for /services/gohighlevel-crm.
// Server component; only the step switching is client-side (GhlStepTabs).
// Every step is in the HTML. The message preview uses real GoHighLevel merge fields
// and is labelled as an example.

const steps = [
  {
    key: "speed-to-lead",
    icon: MessageSquare,
    title: "Instant reply",
    heading: "Instant lead follow-up",
    badge: "Speed to lead",
    desc: "A new lead gets a personal SMS and email within a minute, while they're still thinking about you, not hours later when they've already called someone else.",
    trigger: "Form submitted, ad lead received or call missed",
    channel: "SMS",
    message: `Hi {{contact.first_name}}, thanks for getting in touch! Have you got 2 minutes for a quick chat today?`,
  },
  {
    key: "booking",
    icon: Calendar,
    title: "Booking and reminders",
    heading: "Booking without the back-and-forth",
    badge: "Scheduling",
    desc: "They book straight into your calendar, and SMS and email reminders go out automatically before the call, so fewer people forget to turn up.",
    trigger: "Appointment booked",
    channel: "SMS, 24 hours before",
    message: `Hey {{contact.first_name}}, looking forward to our call tomorrow at {{appointment.start_time}}!`,
  },
  {
    key: "no-show",
    icon: RotateCcw,
    title: "No-show recovery",
    heading: "Friendly rebooking for no-shows",
    badge: "Recovery",
    desc: "If someone misses their call, they get a friendly message with a link to pick a new time, instead of quietly disappearing from your pipeline.",
    trigger: "Appointment marked as no-show",
    channel: "SMS",
    message: `Hey {{contact.first_name}}, sorry we missed you today! Life happens. Grab another time that suits you here: {{appointment.reschedule_link}}`,
  },
  {
    key: "pipeline",
    icon: Zap,
    title: "Pipeline updates",
    heading: "A pipeline that updates itself",
    badge: "Pipeline",
    desc: "Opportunities move stage automatically as leads book, show up and reply, and your team gets a task and an alert at the moment they need to act.",
    trigger: "Opportunity moved to “Qualified”",
    channel: "Task for the assigned rep",
    message: `Review the call notes and send {{contact.first_name}} a proposal within 2 hours.`,
  },
  {
    key: "onboarding-reviews",
    icon: Star,
    title: "Onboarding and reviews",
    heading: "Onboarding and review requests",
    badge: "After the sale",
    desc: "New clients get a welcome sequence with everything they need, then a well-timed request for a Google review once the work is done.",
    trigger: "Opportunity marked as won",
    channel: "Email and SMS",
    message: `Hi {{contact.first_name}}, welcome aboard! Here's everything you need to get started. Once we're done, a quick review would mean a lot: {{custom_values.google_review_link}}`,
  },
];

export function GhlAutomationSteps() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="ghl-steps-heading"
      className={`${sectionBg.base} ${sectionDivider} relative isolate scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24`}
    >
      {/* Ambient glow + dot grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0
            bg-[radial-gradient(55%_45%_at_50%_50%,rgba(103,232,249,0.16),transparent_70%)]
            dark:bg-[radial-gradient(55%_45%_at_50%_50%,rgba(6,182,212,0.13),transparent_70%)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:28px_28px] dark:bg-[radial-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)]" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-14">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
            <Bot className="h-3.5 w-3.5" aria-hidden="true" />
            A 5-step follow-up system
          </p>

          <h2
            id="ghl-steps-heading"
            className="text-balance text-3xl font-black leading-none tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Automations that{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              pay for themselves
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            Here&apos;s how a 5-step GoHighLevel sequence turns new leads into paying clients, without you chasing anyone
            by hand.
          </p>
        </header>

        <GhlStepTabs
          steps={steps.map(({ key, title, badge, icon: Icon }) => ({
            key,
            label: title,
            badge,
            icon: <Icon className="h-4 w-4" aria-hidden="true" />,
          }))}
          panels={steps.map((s, i) => (
            <article
              key={s.key}
              aria-labelledby={`ghl-step-${s.key}-title`}
              className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 shadow-2xl shadow-slate-200/70 sm:p-12 dark:bg-slate-900/80 dark:shadow-black/40"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
              />

              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
                {/* Details */}
                <div className="space-y-6 lg:col-span-7">
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 shadow-lg dark:text-cyan-400">
                      <s.icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                        Step {i + 1} of {steps.length} · {s.badge}
                      </p>
                      <h3
                        id={`ghl-step-${s.key}-title`}
                        className="text-2xl font-black text-slate-900 sm:text-3xl dark:text-white"
                      >
                        {s.heading}
                      </h3>
                    </div>
                  </div>

                  <p className="flex items-start gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-50 px-4 py-3 text-sm dark:bg-slate-950">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                    <span>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Runs when:{" "}
                      </span>
                      <span className="font-bold text-slate-900 dark:text-white">{s.trigger}</span>
                    </span>
                  </p>

                  <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">{s.desc}</p>

                  <ul className="space-y-3 pt-2">
                    <li className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm font-semibold text-slate-800 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                      Built natively inside your GoHighLevel account
                    </li>
                    <li className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm font-semibold text-slate-800 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200">
                      <UserCheck className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                      Personalised SMS, email and pipeline updates
                    </li>
                  </ul>

                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <QuoteDialogTrigger className="flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition-colors hover:bg-cyan-300">
                      Build this workflow
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </QuoteDialogTrigger>
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                      Written in your tone of voice
                    </span>
                  </div>
                </div>

                {/* Example trigger and message (always dark, like an app window) */}
                <figure className="lg:col-span-5">
                  <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl">
                    <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-3 font-mono text-xs text-slate-400">
                      <div className="flex items-center gap-2" aria-hidden="true">
                        <span className="inline-block h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                        <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                        <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="flex items-center gap-1 text-[11px] text-cyan-400">
                        <Zap className="h-3.5 w-3.5" aria-hidden="true" />
                        GHL workflow
                      </span>
                    </div>

                    <div className="space-y-4 p-5 font-mono text-xs leading-relaxed text-slate-300">
                      <div className="space-y-1 rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-slate-400">
                        <p className="text-[10px] font-bold uppercase text-cyan-400">Trigger</p>
                        <p className="text-slate-200">{s.trigger}</p>
                      </div>

                      <div className="rounded-xl border border-cyan-500/20 bg-cyan-950/30 p-4 text-cyan-100">
                        <p className="mb-1 text-[10px] font-bold uppercase text-cyan-400">Action · {s.channel}</p>
                        <p className="leading-normal">{s.message}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-800 bg-slate-900/90 px-4 py-2.5 font-mono text-[11px] text-slate-400">
                      <span className="text-emerald-400">Example</span>
                      <span>Merge fields fill in automatically</span>
                    </div>
                  </div>
                </figure>
              </div>
            </article>
          ))}
        />

        {/* Bottom CTA */}
        <aside
          aria-labelledby="ghl-steps-cta-heading"
          className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 shadow-xl sm:p-10 md:flex-row dark:bg-slate-900/80 dark:shadow-2xl"
        >
          <div className="space-y-2 text-center md:text-left">
            <h3
              id="ghl-steps-cta-heading"
              className="flex items-center justify-center gap-2 text-xl font-black text-slate-900 sm:text-2xl md:justify-start dark:text-white"
            >
              <Sparkles className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
              Want this running in your account?
            </h3>
            <p className="text-xs text-slate-600 sm:text-sm dark:text-slate-400">
              I build custom GoHighLevel workflows that capture, nurture and convert your leads automatically.
            </p>
          </div>

          <QuoteDialogTrigger className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-xs font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:brightness-110 sm:text-sm">
            Get my automation quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </QuoteDialogTrigger>
        </aside>
      </div>
    </section>
  );
}