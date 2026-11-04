import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle2, CreditCard, FileCheck, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { sectionBg, sectionDivider } from "@/lib/section-bg";

// "Payment terms" section for /pricing.
// Pure server component, no client JS. With only two schedules, both are shown side by side
// instead of hidden behind tabs, so visitors (and Google) see the full terms at a glance.
// Keep these terms TRUE: they should match your proposals and invoices.

const schedules = [
  {
    key: "projects",
    icon: CreditCard,
    title: "One-off projects",
    badge: "50% / 50%",
    headline: "50% to start and 50% on completion",
    summary: "For websites, landing pages, funnels and other one-off builds, payment is split into two simple milestones.",
    steps: [
      { label: "50%", phase: "Deposit", detail: "Books your project in and covers discovery, design and copy." },
      { label: "50%", phase: "On completion", detail: "Invoiced once your project is built, tested and ready to launch." },
    ],
  },
  {
    key: "monthly",
    icon: CalendarDays,
    title: "Monthly services and retainers",
    badge: "Billed in advance",
    headline: "Monthly services are billed in advance",
    summary: "For ongoing SEO, content, email, social media and CRM support, you're invoiced at the start of each month.",
    steps: [
      { label: "Monthly", phase: "Invoice in advance", detail: "Sent at the start of each month so work carries on without interruption." },
      { label: "30 days", phase: "Notice to change or pause", detail: "No long-term contracts: pause, change or cancel with 30 days' notice." },
    ],
  },
];

const assurances = [
  "A written fixed price before any work starts",
  "Invoices in USD ($) or INR (₹)",
  "No surprise invoices or extra hours",
];

export function PricingPaymentTerms() {
  return (
    <section
      id="payment-terms"
      aria-labelledby="payment-terms-heading"
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
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Simple, clear terms
          </p>

          <h2
            id="payment-terms-heading"
            className="text-balance text-3xl font-black leading-none tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Payment{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              terms
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            50% to start and 50% on completion for projects. Monthly services are billed in advance.
          </p>
        </header>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          {/* The two schedules */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8">
            {schedules.map(({ key, icon: Icon, title, badge, headline, summary, steps }) => (
              <article
                key={key}
                aria-labelledby={`terms-${key}-title`}
                className="relative flex flex-col space-y-5 overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-6 shadow-2xl shadow-slate-200/70 sm:p-8 dark:bg-slate-900/80 dark:shadow-black/40"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
                />

                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 shadow-lg dark:text-cyan-400">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                      {badge}
                    </p>
                    <h3 id={`terms-${key}-title`} className="text-xl font-black text-slate-900 dark:text-white">
                      {title}
                    </h3>
                  </div>
                </div>

                <p className="rounded-2xl border border-cyan-500/20 bg-cyan-50 p-4 text-base font-extrabold text-slate-900 dark:bg-slate-950 dark:text-white">
                  {headline}
                </p>

                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{summary}</p>

                <ol className="mt-auto grid grid-cols-1 gap-3 pt-2">
                  {steps.map((s, i) => (
                    <li
                      key={s.phase}
                      className="space-y-1.5 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/90"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-black text-cyan-700 dark:text-cyan-400">{s.label}</span>
                        <span className="rounded border border-slate-200 bg-white px-2 py-0.5 font-mono text-[10px] uppercase text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
                          Step {i + 1}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">{s.phase}</h4>
                      <p className="text-xs leading-normal text-slate-600 dark:text-slate-400">{s.detail}</p>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>

          {/* Quote box */}
          <aside
            aria-labelledby="terms-quote-heading"
            className="flex flex-col justify-between space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-left shadow-xl sm:p-8 lg:col-span-4 dark:border-slate-800 dark:bg-slate-950"
          >
            <div className="space-y-4">
              <p className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-700 dark:text-cyan-400">
                <FileCheck className="h-4 w-4" aria-hidden="true" />
                Fixed scope and price
              </p>
              <h3 id="terms-quote-heading" className="text-lg font-black leading-tight text-slate-900 dark:text-white">
                Ready for a written fixed quote?
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                You get an itemised written proposal in USD or INR, with clear delivery dates and no hidden fees.
              </p>
              <ul className="space-y-2 border-t border-slate-200 pt-4 dark:border-slate-800">
                {assurances.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={siteConfig.bookingUrl}
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 py-4 text-xs font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:brightness-110 sm:text-sm"
            >
              Get a custom quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}