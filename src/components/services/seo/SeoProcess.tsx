import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Compass,
  MapPin,
  PackageCheck,
  Search,
  ShieldCheck,
  Sparkles,
  Terminal,
  Wrench,
} from "lucide-react";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { QuoteDialogTrigger } from "@/components/services/quote/ServiceQuoteDialog";
import { SeoStepTabs } from "./SeoStepTabs";

// "How I work" process section for /services/seo.
// Server component; only the step switching is client-side (SeoStepTabs).
// Every step is in the HTML. The window on the right shows an example of what each step
// produces (audit summary, keyword map, fix log, profile checklist, report), labelled as an example.

const steps = [
  {
    key: "audit",
    icon: Search,
    title: "Audit",
    heading: "Find what's holding you back",
    badge: "Discovery",
    desc: "I crawl your site, review Google Search Console and check speed, indexing and mobile issues, so we start with facts, not guesses.",
    output: "A prioritised list of problems",
    file: "audit summary",
    example: `Pages crawled            86
Indexed in Google        61
Not indexed              25  ← why?
Broken links             9
Slow pages (mobile)      14
Missing titles/meta      18

Top 3 fixes → indexing, speed, titles`,
  },
  {
    key: "strategy",
    icon: Compass,
    title: "Strategy",
    heading: "Pick the right keywords",
    badge: "Keyword mapping",
    desc: "I research the keywords your customers actually use and map each one to the right page, so every page has one clear job.",
    output: "A keyword map and a 90-day plan",
    file: "keyword map",
    example: `Keyword                     Page
───────────────────────────────────────
boiler repair leeds         /services/boiler-repair
emergency plumber leeds     /services/emergency
boiler service cost         /blog/boiler-service-cost
plumber near me             / (home) + GBP`,
  },
  {
    key: "fix",
    icon: Wrench,
    title: "Fix",
    heading: "Fix the foundations",
    badge: "Technical and on-page",
    desc: "Technical issues get fixed first, then titles, headings, internal links and schema, so the rest of your SEO has something solid to build on.",
    output: "A faster, cleaner site Google can trust",
    file: "fix log",
    example: `✓ 25 pages unblocked from indexing
✓ Hero images compressed (WebP)
✓ 9 broken links fixed or redirected
✓ 18 titles and meta descriptions written
✓ LocalBusiness schema added
✓ Internal links to service pages`,
  },
  {
    key: "local",
    icon: MapPin,
    title: "Local and authority",
    heading: "Show up in your area",
    badge: "Local signals",
    desc: "I optimise your Google Business Profile, clean up your business listings and build relevant local signals like reviews and local links.",
    output: "Stronger visibility in your area",
    file: "Google Business Profile",
    example: `✓ Primary and secondary categories
✓ Services and service areas listed
✓ Photos added and named properly
✓ Weekly posts scheduled
✓ Review request link set up
✓ Listings matched to your website`,
  },
  {
    key: "report",
    icon: BarChart3,
    title: "Report and improve",
    heading: "Track, report and improve",
    badge: "Monthly",
    desc: "Every month I track rankings, clicks and leads, explain what changed in plain English, and put more effort into what's working.",
    output: "A plain-English report with next steps",
    file: "monthly report",
    example: `What I did
  Rewrote 4 service page titles
  Added 2 location pages

What changed (Search Console)
  Clicks, impressions, top queries

Next month
  New page: "emergency boiler repair"`,
  },
];

export function SeoProcess() {
  return (
    <section
      id="process"
      aria-labelledby="seo-process-heading"
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
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            A clear process
          </p>

          <h2
            id="seo-process-heading"
            className="text-balance text-3xl font-black leading-none tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            How I{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              work
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            A clear 5-step SEO process to find what&apos;s holding your business back, fix it and keep improving month
            after month.
          </p>
        </header>

        <SeoStepTabs
          steps={steps.map(({ key, title, badge, icon: Icon }) => ({
            key,
            label: title,
            badge,
            icon: <Icon className="h-4 w-4" aria-hidden="true" />,
          }))}
          panels={steps.map((s, i) => (
            <article
              key={s.key}
              aria-labelledby={`seo-step-${s.key}-title`}
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
                        id={`seo-step-${s.key}-title`}
                        className="text-2xl font-black text-slate-900 sm:text-3xl dark:text-white"
                      >
                        {s.heading}
                      </h3>
                    </div>
                  </div>

                  <p className="flex items-start gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-50 px-4 py-3 text-sm dark:bg-slate-950">
                    <PackageCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                    <span>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        You get:{" "}
                      </span>
                      <span className="font-bold text-slate-900 dark:text-white">{s.output}</span>
                    </span>
                  </p>

                  <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">{s.desc}</p>

                  <ul className="space-y-3 pt-2">
                    <li className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm font-semibold text-slate-800 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                      Every change explained, no jargon
                    </li>
                    <li className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm font-semibold text-slate-800 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200">
                      <ShieldCheck className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                      Works on WordPress, Next.js, Shopify and more
                    </li>
                  </ul>

                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <QuoteDialogTrigger className="flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition-colors hover:bg-cyan-300">
                      Get my free SEO check
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </QuoteDialogTrigger>
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                      No-obligation check
                    </span>
                  </div>
                </div>

                {/* Example output (always dark, like an editor) */}
                <figure className="lg:col-span-5">
                  <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl">
                    <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-3 font-mono text-xs text-slate-400">
                      <div className="flex items-center gap-2" aria-hidden="true">
                        <span className="inline-block h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                        <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                        <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="flex items-center gap-1 text-[11px] text-cyan-400">
                        <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
                        {s.file}
                      </span>
                    </div>
                    <pre tabIndex={0} aria-label="Code example" className="overflow-x-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 p-5 font-mono text-xs leading-relaxed text-slate-300">
                      <code>{s.example}</code>
                    </pre>
                    <div className="flex items-center justify-between border-t border-slate-800 bg-slate-900/90 px-4 py-2.5 font-mono text-[11px] text-slate-400">
                      <span className="text-emerald-400">Example</span>
                      <span>
                        Step {i + 1} of {steps.length}
                      </span>
                    </div>
                  </div>
                </figure>
              </div>
            </article>
          ))}
        />

        {/* Bottom CTA */}
        <aside
          aria-labelledby="seo-process-cta-heading"
          className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 shadow-xl sm:p-10 md:flex-row dark:bg-slate-900/80 dark:shadow-2xl"
        >
          <div className="space-y-2 text-center md:text-left">
            <h3
              id="seo-process-cta-heading"
              className="flex items-center justify-center gap-2 text-xl font-black text-slate-900 sm:text-2xl md:justify-start dark:text-white"
            >
              <Sparkles className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
              Ready to climb the Google rankings?
            </h3>
            <p className="text-xs text-slate-600 sm:text-sm dark:text-slate-400">
              Get a free SEO check and I&apos;ll show you the three biggest things holding your site back.
            </p>
          </div>

          <QuoteDialogTrigger className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-xs font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:brightness-110 sm:text-sm">
            Get my free SEO check
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </QuoteDialogTrigger>
        </aside>
      </div>
    </section>
  );
}