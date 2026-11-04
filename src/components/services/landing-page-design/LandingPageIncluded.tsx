import Link from "next/link";
import { Activity, ArrowUpRight, Boxes, CheckCircle2, FileText, Layers, Smartphone, Sparkles, Split, Webhook } from "lucide-react";
import { serviceHref } from "@/lib/site-config";
import { sectionBg, sectionDivider } from "@/lib/section-bg";

// "What's included" section for /services/landing-page-design.
// Server component, no client JS. One <h2>, an <h3> per deliverable.

const deliverables = [
  {
    title: "Conversion strategy and wireframe",
    description: "A page plan laid out to lead visitors from the headline to your call to action, step by step.",
    icon: Layers,
    badge: "Planning",
  },
  {
    title: "Copywriting or copy editing",
    description: "Persuasive, benefit-led copy that matches your ad headlines and speaks to your audience's problems.",
    icon: FileText,
    badge: "Messaging",
  },
  {
    title: "Desktop and mobile design",
    description: "Clean, fast layouts designed separately for desktop and for easy thumb-tapping on phones.",
    icon: Smartphone,
    badge: "Responsive",
  },
  {
    title: "Form and CRM integration",
    description: "Leads sent straight into your pipeline: GoHighLevel, Mailchimp, your inbox or any tool with a webhook.",
    icon: Webhook,
    badge: "Automation",
  },
  {
    title: "GTM, GA4 and ad pixel tracking",
    description: "Conversion tracking in Google Analytics 4, plus Meta, Google Ads and TikTok pixels, all tested before launch.",
    icon: Activity,
    badge: "Analytics",
  },
  {
    title: "One A/B test variant",
    description: "A second version with a different headline or offer, ready to split test from launch day.",
    icon: Split,
    badge: "Testing",
  },
];

export function LandingPageIncluded() {
  return (
    <section
      id="included"
      aria-labelledby="lp-included-heading"
      className={`${sectionBg.alt} ${sectionDivider} relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24`}
    >
      {/* Ambient glow: radial gradient instead of a blur filter */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(50%_40%_at_50%_50%,rgba(103,232,249,0.16),transparent_70%)]
          dark:bg-[radial-gradient(50%_40%_at_50%_50%,rgba(6,182,212,0.12),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-6xl space-y-16">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Done for you
          </p>

          <h2
            id="lp-included-heading"
            className="text-balance text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            What&apos;s{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              included
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            Every landing page comes with the strategy, copy, design, tracking and integrations it needs to launch.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map(({ title, description, icon: Icon, badge }) => (
            <li
              key={title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-black/40 dark:hover:border-cyan-500/40 dark:hover:bg-slate-900/90"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 opacity-0 transition-opacity group-hover:opacity-100"
              />

              <div>
                <div className="mb-6 flex items-center justify-between gap-2">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-50 text-cyan-600 transition-transform group-hover:scale-110 dark:bg-slate-950 dark:text-cyan-400">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                    {badge}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
              </div>

              <p className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-700 dark:border-slate-800/80 dark:text-slate-300">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                Set up and tested before launch
              </p>
            </li>
          ))}
        </ul>

        {/* Other platforms banner */}
        <aside
          aria-labelledby="lp-platforms-heading"
          className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 shadow-xl sm:p-10 md:flex-row dark:bg-slate-900/80 dark:shadow-2xl"
        >
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
          />

          <div className="flex items-center gap-4 text-center md:text-left">
            <span className="hidden shrink-0 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4 text-cyan-600 sm:flex dark:text-cyan-400">
              <Boxes className="h-8 w-8" aria-hidden="true" />
            </span>
            <div>
              <p className="mb-1 font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                Other platforms
              </p>
              <h3 id="lp-platforms-heading" className="text-lg font-extrabold text-slate-900 sm:text-xl dark:text-white">
                Not on Unbounce?
              </h3>
              <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">
                I also build landing pages in{" "}
                <strong className="font-semibold text-slate-900 dark:text-slate-200">GoHighLevel</strong>,{" "}
                <strong className="font-semibold text-slate-900 dark:text-slate-200">WordPress</strong> and{" "}
                <strong className="font-semibold text-slate-900 dark:text-slate-200">Next.js</strong>.
              </p>
            </div>
          </div>

          <Link
            href={serviceHref("gohighlevel-crm")}
            className="group flex shrink-0 items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-50 px-6 py-3.5 text-sm font-bold text-cyan-700 shadow-lg transition-all hover:border-cyan-400 hover:text-slate-900 dark:bg-slate-950 dark:text-cyan-300 dark:hover:text-white"
          >
            Explore GoHighLevel CRM
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </aside>
      </div>
    </section>
  );
}