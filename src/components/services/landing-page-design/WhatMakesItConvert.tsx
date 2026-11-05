import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Lightbulb,
  MousePointerClick,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { QuoteDialogTrigger } from "@/components/services/quote/ServiceQuoteDialog";
import { ConversionTabs } from "./ConversionTabs";

// "What makes a landing page convert" section for /services/landing-page-design.
// Server component; only the tab switching is client-side (ConversionTabs). All five
// breakdown panels are in the HTML. The quote button opens the hero's quote dialog.
//
// The right-hand window shows a short "before / after" example for each pillar,
// which shows a client exactly what changes on their page.

const pillars = [
  {
    key: "message-match",
    icon: Target,
    title: "Message match",
    summary: "The headline mirrors the ad",
    tag: "Relevance",
    desc: "Visitors expect the page to continue the story from the ad they clicked. When your headline repeats the promise from the ad or search term, people know they're in the right place and stay to read.",
    whatIDo: "Match each page headline to its ad group and keywords",
    whyItMatters: "Fewer instant bounces and better ad relevance",
    exampleLabel: "Ad → page headline",
    before: 'Ad: "Emergency plumber in Austin, 30-min response"\nPage: "Welcome to Smith & Sons Plumbing"',
    after: 'Ad: "Emergency plumber in Austin, 30-min response"\nPage: "Emergency plumber in Austin, at your door in 30 minutes"',
  },
  {
    key: "one-cta",
    icon: MousePointerClick,
    title: "One call to action",
    summary: "No menus or competing links",
    tag: "Focus",
    desc: "Every extra link is a way to leave. Removing the main menu, footer links and side offers keeps attention on the one action you paid for: the form, the call or the booking.",
    whatIDo: "Remove navigation and repeat a single call to action",
    whyItMatters: "Visitors aren't pulled away before converting",
    exampleLabel: "Page structure",
    before: "Menu with 6 links\nHero: \"Learn more\" + \"Contact us\" + \"See pricing\"\nFooter with 20 links",
    after: "Logo only, no menu\nHero: \"Get my free quote\"\nSame button repeated after each section",
  },
  {
    key: "benefit-copy",
    icon: FileText,
    title: "Benefit-led copy",
    summary: "What the visitor gets, not just what you do",
    tag: "Persuasion",
    desc: "People buy outcomes, not features. Copy that talks about the result they want, the problem it removes and why it's easy to start connects with both logic and emotion.",
    whatIDo: "Rewrite feature lists as clear outcomes for the visitor",
    whyItMatters: "Visitors see themselves in the offer",
    exampleLabel: "Feature → benefit",
    before: "\"24/7 cloud-based booking system with SMS integration\"",
    after: "\"Clients book themselves at 2 a.m. and get a text reminder, so no-shows drop\"",
  },
  {
    key: "proof",
    icon: ShieldCheck,
    title: "Proof where doubt appears",
    summary: "Reviews, logos and guarantees in the right places",
    tag: "Trust",
    desc: "Doubt peaks right before someone fills in a form. Placing reviews, ratings, client logos and any guarantee you offer right next to the form or button answers the question \"can I trust them?\" at that moment.",
    whatIDo: "Place your real reviews and guarantees beside the form",
    whyItMatters: "Removes hesitation at the point of action",
    exampleLabel: "Next to the form",
    before: "Form on its own\nReviews hidden at the bottom of the page",
    after: "Form with your star rating and a short review beside it\n\"No spam, unsubscribe any time\" under the button",
  },
  {
    key: "mobile",
    icon: Smartphone,
    title: "Fast and mobile-first",
    summary: "Most ad traffic is on phones",
    tag: "Speed",
    desc: "Most social and search ad clicks happen on phones, often on slower connections. Pages need to load quickly, with big tap targets and short forms that are easy to fill in with a thumb.",
    whatIDo: "Design mobile first, compress images and shorten forms",
    whyItMatters: "Fewer people give up while the page loads",
    exampleLabel: "On a phone",
    before: "Large hero video, 8-field form, small buttons",
    after: "Compressed hero image, 3-field form, full-width buttons",
  },
];

export function WhatMakesItConvert() {
  return (
    <section
      id="what-converts"
      aria-labelledby="converts-heading"
      className={`${sectionBg.base} ${sectionDivider} relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24`}
    >
      {/* Ambient glow: radial gradients instead of blur filters */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(55%_45%_at_50%_50%,rgba(103,232,249,0.2),transparent_70%),radial-gradient(25%_25%_at_90%_10%,rgba(167,139,250,0.12),transparent_70%)]
          dark:bg-[radial-gradient(55%_45%_at_50%_50%,rgba(6,182,212,0.16),transparent_70%),radial-gradient(25%_25%_at_90%_10%,rgba(147,51,234,0.12),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-6xl space-y-16">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Conversion principles
          </p>

          <h2
            id="converts-heading"
            className="text-balance text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            What makes a landing page{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              convert
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            The five principles I build into every page to reduce drop-off and get more from every ad click. Pick one
            to see a before-and-after example.
          </p>
        </header>

        <ConversionTabs
          tabs={pillars.map(({ key, icon: Icon, title, summary, tag }) => ({
            key,
            content: (
              <>
                <span className="mb-3 flex items-center justify-between gap-2">
                  <span className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-500 transition-colors group-hover:text-cyan-600 group-data-[active=true]:border-cyan-300 group-data-[active=true]:bg-cyan-400 group-data-[active=true]:text-slate-950 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400 dark:group-hover:text-cyan-400">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-600 group-data-[active=true]:border group-data-[active=true]:border-cyan-400/30 group-data-[active=true]:bg-cyan-400/20 group-data-[active=true]:text-cyan-700 dark:bg-slate-950 dark:group-data-[active=true]:text-cyan-300 dark:text-slate-400">
                    {tag}
                  </span>
                </span>
                <span className="block">
                  <span className="block text-sm font-bold leading-snug">{title}</span>
                  <span className="mt-0.5 block text-[11px] text-slate-500 lg:truncate">{summary}</span>
                </span>
              </>
            ),
          }))}
          panels={pillars.map((p) => (
            <article
              key={p.key}
              aria-labelledby={`convert-${p.key}-title`}
              className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-6 shadow-2xl shadow-slate-200/70 sm:p-10 dark:bg-slate-900/80 dark:shadow-black/40"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
              />

              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                {/* Explanation */}
                <div className="space-y-6 lg:col-span-7">
                  <div className="flex items-center gap-3">
                    <span className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-3 text-cyan-600 dark:text-cyan-400">
                      <p.icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                        Principle breakdown
                      </p>
                      <h3
                        id={`convert-${p.key}-title`}
                        className="text-2xl font-black text-slate-900 sm:text-3xl dark:text-white"
                      >
                        {p.title}
                      </h3>
                    </div>
                  </div>

                  <p className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-cyan-700 dark:border-slate-800/80 dark:bg-slate-950/80 dark:text-cyan-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                    {p.summary}
                  </p>

                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">{p.desc}</p>

                  <dl className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
                      <dt className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                        <Wrench className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" aria-hidden="true" /> What I do
                      </dt>
                      <dd className="mt-2 text-sm font-bold text-slate-900 dark:text-slate-100">{p.whatIDo}</dd>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
                      <dt className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                        <Lightbulb className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" aria-hidden="true" /> Why it matters
                      </dt>
                      <dd className="mt-2 text-sm font-bold text-slate-900 dark:text-slate-100">{p.whyItMatters}</dd>
                    </div>
                  </dl>
                </div>

                {/* Before / after example window (always dark, like an editor) */}
                <figure className="lg:col-span-5">
                  <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl">
                    <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-3 font-mono text-xs text-slate-400">
                      <div className="flex items-center gap-2" aria-hidden="true">
                        <span className="inline-block h-3 w-3 rounded-full bg-rose-500/80" />
                        <span className="inline-block h-3 w-3 rounded-full bg-amber-500/80" />
                        <span className="inline-block h-3 w-3 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[11px] text-cyan-400">{p.exampleLabel}</span>
                    </div>

                    <div className="space-y-4 p-5 font-mono text-xs leading-relaxed">
                      <div>
                        <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-rose-400">Before</p>
                        <p className="whitespace-pre-line text-slate-400">{p.before}</p>
                      </div>
                      <div className="border-t border-slate-800 pt-4">
                        <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-400">After</p>
                        <p className="whitespace-pre-line text-slate-200">{p.after}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-800/80 bg-slate-900/90 px-5 py-3 font-mono text-[11px] text-slate-400">
                      <span className="text-cyan-400">Built in Unbounce</span>
                      <span>Illustrative example</span>
                    </div>
                  </div>
                </figure>
              </div>
            </article>
          ))}
        />

        {/* Bottom banner */}
        <aside
          aria-labelledby="converts-cta-heading"
          className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-8 shadow-xl sm:flex-row sm:p-10 dark:from-cyan-950/40 dark:via-slate-900 dark:to-blue-950/40 dark:shadow-2xl"
        >
          <div className="space-y-2 text-center sm:text-left">
            <h3 id="converts-cta-heading" className="text-xl font-black text-slate-900 sm:text-2xl dark:text-white">
              Ready to turn more ad clicks into leads?
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              I design, build and improve landing pages matched to your ad campaigns.
            </p>
          </div>

          <QuoteDialogTrigger className="flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/20 transition-all hover:brightness-110">
            Get a landing page quote
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </QuoteDialogTrigger>
        </aside>
      </div>
    </section>
  );
}