import {
  ArrowRight,
  CheckCircle2,
  CheckSquare,
  FileText,
  Layers,
  PackageCheck,
  PenTool,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Terminal,
  UploadCloud,
} from "lucide-react";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { QuoteDialogTrigger } from "@/components/services/quote/ServiceQuoteDialog";
import { ContentStepTabs } from "./ContentStepTabs";

// "How I work" process section for /services/content-marketing.
// Server component; only the step switching is client-side (ContentStepTabs).
// Every step is in the HTML. The window on the right shows an example of what each step
// produces (a keyword shortlist, a brief, real meta tags), labelled as an example.

const steps = [
  {
    key: "research",
    icon: Search,
    title: "Keyword and competitor research",
    heading: "Finding the searches worth winning",
    badge: "Research",
    desc: "I look at what your competitors rank for, how hard each keyword is to win and, most importantly, the intent behind it, so we focus on searches that bring in buyers, not just traffic.",
    output: "A prioritised keyword shortlist",
    file: "keyword-shortlist",
    example: `Keyword                       Intent       Priority
──────────────────────────────────────────────────
emergency roof repair         Commercial   High
roof repair cost              Research     High
how to find a roof leak       Informational Medium
flat roof vs pitched roof     Informational Low`,
  },
  {
    key: "brief",
    icon: FileText,
    title: "Content brief",
    heading: "A clear plan before any writing",
    badge: "Planning",
    desc: "Each piece gets a brief: the target keyword and related terms, the headings it needs, the questions people ask on Google and the internal links that connect it to your service pages.",
    output: "A content brief you can review first",
    file: "content-brief",
    example: `Title:     Roof Repair Cost: What to Expect in 2026
Keyword:   roof repair cost
Length:    1,500 – 2,000 words

H2  What affects the cost of a roof repair?
H2  Typical prices by repair type
H2  Repair or replace? How to decide
FAQ "Does insurance cover roof repairs?"

Links → /services/roof-repair, /contact`,
  },
  {
    key: "writing",
    icon: PenTool,
    title: "Writing and editing",
    heading: "Written for readers, in your voice",
    badge: "Copywriting",
    desc: "I write a clear, benefit-led draft in your brand's tone of voice, then edit it properly for flow, accuracy and readability. Original writing, never spun or copied.",
    output: "A polished, original draft",
    file: "voice-notes",
    example: `Tone:      Friendly, direct, expert
Reader:    Homeowner with a leak, a bit worried
Do:        Short paragraphs, plain words,
           real examples and prices
Avoid:     Jargon, scare tactics, filler
CTA:       "Get a free roof check"`,
  },
  {
    key: "on-page",
    icon: Settings,
    title: "On-page SEO",
    heading: "Optimised for Google",
    badge: "On-page SEO",
    desc: "The title tag, meta description, heading structure, image alt text and internal links are all set up, so Google understands the page and searchers want to click it.",
    output: "Meta title, description and alt text",
    file: "page head",
    example: `<title>Roof Repair Cost: What to Expect in 2026</title>
<meta
  name="description"
  content="Real roof repair prices by job type, what
  affects the cost and when to replace instead."
/>
<img src="roof-repair.webp"
     alt="Roofer replacing damaged tiles" />`,
  },
  {
    key: "review",
    icon: CheckSquare,
    title: "Review and revisions",
    heading: "Your feedback, then sign-off",
    badge: "Approval",
    desc: "You review the draft in Google Docs and leave comments right on the page. I make the changes and send it back for your final sign-off before anything goes live.",
    output: "Content approved by you",
    file: "review",
    example: `1  Draft shared in Google Docs
2  You comment on anything to change
3  I revise and reply to each comment
4  You approve the final version
   ✓ Ready to publish`,
  },
  {
    key: "publishing",
    icon: UploadCloud,
    title: "Publishing",
    heading: "Formatted and published for you",
    badge: "Go live",
    desc: "If you'd like, I'll format and publish the content straight into your site, whether it's WordPress, Sanity or GoHighLevel, with headings, images and callouts looking right.",
    output: "Live, properly formatted pages",
    file: "publish-checklist",
    example: `✓ Headings and formatting
✓ Featured image and alt text
✓ Meta title and description
✓ Internal links added
✓ Category and tags set
✓ Checked on mobile`,
  },
];

export function ContentProcess() {
  return (
    <section
      id="process"
      aria-labelledby="content-process-heading"
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
            <Layers className="h-3.5 w-3.5" aria-hidden="true" />
            From research to published
          </p>

          <h2
            id="content-process-heading"
            className="text-balance text-3xl font-black leading-none tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            How I{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              work
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            Every piece of content follows the same 6 steps, from keyword research to publishing in WordPress, Sanity or
            GoHighLevel.
          </p>
        </header>

        <ContentStepTabs
          steps={steps.map(({ key, title, badge, icon: Icon }) => ({
            key,
            label: title,
            badge,
            icon: <Icon className="h-4 w-4" aria-hidden="true" />,
          }))}
          panels={steps.map((s, i) => (
            <article
              key={s.key}
              aria-labelledby={`content-step-${s.key}-title`}
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
                        id={`content-step-${s.key}-title`}
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
                      Checked for quality at every step
                    </li>
                    <li className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm font-semibold text-slate-800 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200">
                      <ShieldCheck className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                      Publishing available for WordPress, Sanity and GoHighLevel
                    </li>
                  </ul>

                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <QuoteDialogTrigger className="flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition-colors hover:bg-cyan-300">
                      Start my content
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </QuoteDialogTrigger>
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                      Research, writing and SEO in one
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
                    <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-slate-300">
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
          aria-labelledby="content-process-cta-heading"
          className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 shadow-xl sm:p-10 md:flex-row dark:bg-slate-900/80 dark:shadow-2xl"
        >
          <div className="space-y-2 text-center md:text-left">
            <h3
              id="content-process-cta-heading"
              className="flex items-center justify-center gap-2 text-xl font-black text-slate-900 sm:text-2xl md:justify-start dark:text-white"
            >
              <Sparkles className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
              Ready to publish content that ranks?
            </h3>
            <p className="text-xs text-slate-600 sm:text-sm dark:text-slate-400">
              I handle keyword research, briefs, writing, on-page SEO and publishing, so you don&apos;t have to.
            </p>
          </div>

          <QuoteDialogTrigger className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-xs font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:brightness-110 sm:text-sm">
            Get my content quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </QuoteDialogTrigger>
        </aside>
      </div>
    </section>
  );
}