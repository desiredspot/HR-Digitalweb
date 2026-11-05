import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  MessageSquare,
  Target,
  TrendingUp,
  XCircle,
  Zap,
} from "lucide-react";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
// SEO notes
// - Server component: every word is in the initial HTML, so crawlers index it without running JS.
// - One <h2> for the section, <h3> for each column. No skipped heading levels after the hero's <h1>.
// - Comparisons are real lists (<ul>/<li>), which search engines and screen readers understand.
// - Pillars are internal links with descriptive anchor text, which spreads link equity to service pages.
// - No blur filters or client JS, so it does not hurt Core Web Vitals.

const disconnectedWay = [
  {
    title: "Multiple agencies and freelancers",
    desc: "A web designer, copywriter, CRM consultant and ad manager all working in silos.",
  },
  {
    title: "Disconnected data and tools",
    desc: "Leads get lost between website forms, separate CRMs and manual spreadsheets.",
  },
  {
    title: "Finger-pointing and delays",
    desc: "When conversions drop or a page breaks, nobody takes full responsibility.",
  },
  {
    title: "Paying again for every tweak",
    desc: "Several retainers and hourly invoices for basic updates and bug fixes.",
  },
];

const connectedWay = [
  {
    title: "One partner for the whole funnel",
    desc: "Strategy, web design, development, CRM automation and content handled together.",
  },
  {
    title: "An automated end-to-end funnel",
    desc: "Your website and landing pages trigger GoHighLevel workflows, follow-up emails and SMS automatically.",
  },
  {
    title: "A single point of accountability",
    desc: "I own the performance of your whole pipeline, from first visit to booked call.",
  },
  {
    title: "Predictable fixed pricing",
    desc: "Clear packages with no surprise fees and no open-ended hourly billing.",
  },
];

// TODO: point these at your real service pages (or remove href to render plain chips)
const pillars = [
  { name: "Next.js & WordPress websites", href: "/services/wordpress-development", icon: Layers, gradient: "from-cyan-500 to-blue-500" },
  { name: "Unbounce landing pages", href: "/services/landing-page-design", icon: Target, gradient: "from-teal-400 to-emerald-500" },
  { name: "GoHighLevel CRM automation", href: "/services/gohighlevel-crm", icon: Zap, gradient: "from-blue-500 to-indigo-500" },
  { name: "Email & SMS follow-up", href: "/services/email-marketing", icon: MessageSquare, gradient: "from-indigo-500 to-purple-500" },
  { name: "SEO content & short reels", href: "/services/content-marketing", icon: TrendingUp, gradient: "from-purple-500 to-cyan-400" },
];

export function OneTeamSection() {
  return (
    <section
      id="why-one-partner"
      aria-labelledby="one-team-heading"
      className={`${sectionBg.alt} ${sectionDivider} relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28`}
    >
      {/* Background glow: radial gradient instead of a blur filter (cheap to paint) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(50%_40%_at_50%_50%,rgba(48, 219, 245, 0.12),transparent_70%)]
          dark:bg-[radial-gradient(50%_40%_at_50%_50%,rgba(12, 185, 216, 0.12),transparent_70%)]"
      />

      <div className="mx-auto w-full max-w-6xl">
        {/* Section header */}
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
            <Cpu className="h-3.5 w-3.5" aria-hidden="true" />
            Integrated digital growth system
          </p>

          <h2
            id="one-team-heading"
            className="mb-6 text-balance text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl dark:text-white"
          >
            One partner for your{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              website, funnels and marketing
            </span>
          </h2>

          <p className="text-pretty text-base leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
            Most small businesses hire a web designer, a copywriter, a CRM consultant and a social media freelancer, and{" "}
            <strong className="font-semibold text-slate-900 dark:text-white">nothing connects</strong>. I build and run
            all of it together. Your website, landing pages, CRM, email marketing and content work as one system with
            one goal:{" "}
            <strong className="font-bold text-cyan-700 dark:text-cyan-400">more enquiries and more sales</strong>.
          </p>
        </header>

        {/* Comparison */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* The disconnected way */}
          <article
            aria-labelledby="disconnected-heading"
            className="rounded-3xl border border-red-200 bg-red-50/50 p-6 shadow-md sm:p-8 dark:border-red-900/30 dark:bg-red-950/10 dark:shadow-xl"
          >
            <div className="mb-6 flex items-center gap-3 border-b border-red-200 pb-4 dark:border-red-900/20">
              <span className="rounded-xl border border-red-500/20 bg-red-500/10 p-2.5 text-red-500 dark:text-red-400">
                <XCircle className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3 id="disconnected-heading" className="text-lg font-bold text-slate-900 dark:text-white">
                  The disconnected way
                </h3>
                <p className="text-xs font-medium text-red-600 dark:text-red-400">
                  Multiple freelancers, zero alignment
                </p>
              </div>
            </div>

            <ul className="space-y-4">
              {disconnectedWay.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-3.5 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800/60 dark:bg-slate-900/40"
                >
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500 dark:text-red-400" aria-hidden="true" />
                  <div>
                    <p className="mb-0.5 text-sm font-bold text-slate-800 dark:text-slate-200">{item.title}</p>
                    <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          {/* The connected way */}
          <article
            aria-labelledby="connected-heading"
            className="relative overflow-hidden rounded-3xl border border-cyan-500/40 bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/30 p-6 shadow-2xl shadow-slate-200/80 sm:p-8 dark:from-[#0E1A38] dark:via-[#0E1A38] dark:to-slate-900 dark:shadow-cyan-950/30"
          >
            <p className="absolute right-0 top-0 rounded-bl-2xl bg-gradient-to-l from-cyan-400 to-teal-300 px-4 py-1 text-[10px] font-black uppercase tracking-widest text-slate-950">
              Recommended
            </p>

            <div className="mb-6 flex items-center gap-3 border-b border-cyan-200 pb-4 dark:border-cyan-900/30">
              <span className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-2.5 text-cyan-600 dark:text-cyan-400">
                <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3 id="connected-heading" className="text-lg font-bold text-slate-900 dark:text-white">
                  The connected way
                </h3>
                <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-400">One system, fully connected</p>
              </div>
            </div>

            <ul className="space-y-4">
              {connectedWay.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-3.5 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm transition-transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-cyan-900/40 dark:bg-slate-900/80 dark:shadow-none dark:hover:border-cyan-500/40"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                  <div>
                    <p className="mb-0.5 text-sm font-bold text-slate-900 dark:text-slate-100">{item.title}</p>
                    <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* Connected pillars */}
        <nav
          aria-labelledby="pillars-heading"
          className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl sm:p-8 dark:border-cyan-900/30 dark:bg-slate-900/70 dark:shadow-none"
        >
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                Connected growth system
              </p>
              <h3 id="pillars-heading" className="text-lg font-black text-slate-900 dark:text-white">
                5 services working together
              </h3>
            </div>

            <ul className="flex flex-wrap items-center justify-center gap-2">
              {pillars.map(({ name, href, icon: Icon, gradient }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-3.5 py-2 text-xs font-bold text-slate-800 transition hover:scale-105 hover:border-cyan-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 motion-reduce:hover:scale-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-cyan-500/40"
                  >
                    <span className={`rounded-md bg-gradient-to-r ${gradient} p-1 text-white`}>
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {name}
                    <ArrowRight
                      className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
}