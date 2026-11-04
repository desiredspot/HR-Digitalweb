import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  KeyRound,
  MessagesSquare,
  Receipt,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { sectionBg, sectionDivider } from "@/lib/section-bg";

// SEO notes
// - Server component: all copy is in the initial HTML, no client JS.
// - One <h2> for the section, an <h3> per reason, following the hero's <h1>.
// - Highlights are real lists, so crawlers and screen readers read them as lists.
// - No blur filters, so nothing here hurts Core Web Vitals.

const BRAND = "HR DigitalWeb";

const reasons = [
  {
    id: "developer-marketer",
    title: "A developer who thinks like a marketer",
    desc: "Every page is built to convert, not just to look good. I combine clean engineering with direct-response copy and layout to turn visitors into enquiries.",
    icon: Code2,
    badge: "Conversion first",
    gradient: "from-cyan-500 to-blue-600",
    tagColor: "border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400",
    highlights: ["Direct-response page layouts", "UX built around one clear action", "User journey mapping"],
  },
  {
    id: "seo-built-in",
    title: "SEO from the first line of code",
    desc: "Clean HTML structure, schema markup, fast load times and keyword-led copy are built into the site from day one, not bolted on after launch.",
    icon: SearchCheck,
    badge: "Rank faster",
    gradient: "from-teal-400 to-emerald-500",
    tagColor: "border-teal-500/30 bg-teal-500/10 text-teal-700 dark:text-teal-400",
    highlights: ["PageSpeed score of 90+", "Schema and Open Graph tags", "Keyword-structured headings"],
  },
  {
    id: "direct-access",
    title: "You talk to the person doing the work",
    desc: "No account managers and no hand-offs. You deal directly with me, the person designing and building your project, and get a reply within 24 hours.",
    icon: MessagesSquare,
    badge: "Direct access",
    gradient: "from-blue-500 to-indigo-600",
    tagColor: "border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-400",
    highlights: ["No middlemen", "Replies within 24 hours", "Clear, plain-English updates"],
  },
  {
    id: "fixed-pricing",
    title: "Fixed prices, clear scope",
    desc: "You know the exact cost before work starts. A detailed proposal up front, with no surprise invoices, hidden charges or creeping hourly bills.",
    icon: Receipt,
    badge: "Transparent pricing",
    gradient: "from-indigo-500 to-purple-600",
    tagColor: "border-indigo-500/30 bg-indigo-500/10 text-indigo-700 dark:text-indigo-400",
    highlights: ["Fixed quote before we start", "Scope agreed in writing", "No unexpected bills"],
  },
  {
    id: "full-ownership",
    title: "You own everything",
    desc: "Code, content, graphics, domains, CRM and hosting accounts are all yours. No lock-in contracts and no code held hostage.",
    icon: KeyRound,
    badge: "Zero lock-in",
    gradient: "from-purple-500 to-cyan-400",
    tagColor: "border-purple-500/30 bg-purple-500/10 text-purple-700 dark:text-purple-400",
    highlights: ["Full code handover", "Accounts in your name", "Cancel any time"],
  },
];

export function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      aria-labelledby="why-choose-heading"
      className={`${sectionBg.tint} ${sectionDivider} relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28`}
    >
      {/* Background glow: radial gradient instead of a blur filter (cheap to paint) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(50%_40%_at_50%_50%,rgba(34,211,238,0.12),transparent_70%)]
          dark:bg-[radial-gradient(50%_40%_at_50%_50%,rgba(6,182,212,0.12),transparent_70%)]"
      />

      <div className="mx-auto w-full max-w-7xl">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            The {BRAND} advantage
          </p>

          <h2
            id="why-choose-heading"
            className="mb-6 text-balance text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl dark:text-white"
          >
            Why small businesses choose{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              {BRAND}
            </span>
          </h2>

          <p className="text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            I combine web development and marketing in one place, so you get a website that brings in customers,
            without the overhead or hand-offs of a typical agency.
          </p>
        </header>

        {/* 3 cards on top, 2 centred underneath on large screens */}
        <ul className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {reasons.map(({ id, title, desc, icon: Icon, badge, gradient, tagColor, highlights }, idx) => (
            <li
              key={id}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/80 transition duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-slate-50/80 motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:col-span-2 dark:border-cyan-900/30 dark:bg-slate-900/70 dark:shadow-black/50 dark:hover:border-cyan-500/50 dark:hover:bg-slate-900/90 dark:hover:shadow-cyan-500/10 ${
                idx === 3 ? "lg:col-start-2" : ""
              } ${idx === reasons.length - 1 ? "md:col-span-2 lg:col-span-2" : ""}`}
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
                  <span
                    className={`rounded-full border px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider ${tagColor}`}
                  >
                    {badge}
                  </span>
                </div>

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
        </ul>

        {/* Closing CTA */}
        <aside
          aria-labelledby="why-choose-cta-heading"
          className="flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-8 shadow-lg md:flex-row dark:border-cyan-900/40 dark:from-[#0E1A38] dark:via-slate-900 dark:to-[#0E1A38] dark:shadow-2xl"
        >
          <div className="text-center md:text-left">
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
              Clear scope, fixed price
            </p>
            <h3 id="why-choose-cta-heading" className="text-xl font-black text-slate-900 dark:text-white">
              Want a website partner who delivers on time and on budget?
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Book a free 15-minute intro call to talk through your goals and get a fixed estimate.
            </p>
          </div>

          <Link
            href={siteConfig.bookingUrl}
            className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-300 px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
          >
            Book a free intro call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </aside>
      </div>
    </section>
  );
}