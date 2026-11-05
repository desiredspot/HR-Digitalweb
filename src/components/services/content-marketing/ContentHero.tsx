import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  FileText,
  Globe,
  Link2,
  ListChecks,
  MousePointerClick,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  Type,
  Users,
} from "lucide-react";
import { sectionBg } from "@/lib/section-bg";
import { ServiceQuoteDialog } from "@/components/services/quote/ServiceQuoteDialog";
import { ContentPreviewTabs } from "./ContentPreviewTabs";

// Hero for /services/content-marketing.
// Server component; only the quote dialog and the ranking/conversion toggle are client-side.
// Primary keyword "SEO content writing services" is in the H1. Secondary keywords
// (blog writing services, website copywriting, content marketing services)
// appear naturally in the intro, preview and cards.

// The section right after this hero should have this id (the second button scrolls to it).
const NEXT_SECTION_ID = "what-i-write";

const pillars = [
  {
    icon: Search,
    title: "Keyword research first",
    desc: "Every piece starts with research into what your buyers actually search for, including the high-intent questions they ask before they buy.",
  },
  {
    icon: Users,
    title: "Written for real readers",
    desc: "Clear, human writing that answers the question properly, builds trust and keeps people reading to the end.",
  },
  {
    icon: Target,
    title: "Built to convert",
    desc: "Calls to action woven in naturally, so readers who arrive from Google know exactly what to do next.",
  },
];

// What the preview shows: what goes into each piece, not invented ranking numbers.
const rankingItems = [
  { icon: Search, title: "Keyword research", desc: "Primary and related keywords chosen for intent and difficulty" },
  { icon: ListChecks, title: "Search intent", desc: "Structured to answer what the searcher really wants" },
  { icon: FileText, title: "On-page SEO", desc: "Title, meta description, headings and schema-friendly structure" },
  { icon: Link2, title: "Internal links", desc: "Linked to your service pages so authority flows where it counts" },
];

const conversionItems = [
  { icon: Type, title: "Clear headlines", desc: "Headlines that promise a specific benefit and earn the click" },
  { icon: TrendingUp, title: "Benefit-led copy", desc: "Website copywriting that speaks to outcomes, not just features" },
  { icon: MousePointerClick, title: "Calls to action", desc: "Next steps placed where readers are most ready to act" },
  { icon: ShieldCheck, title: "Proof and trust", desc: "Examples, FAQs and objection handling that remove doubt" },
];

function PreviewGrid({ items }: { items: typeof rankingItems }) {
  return (
    <ul className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map(({ icon: Icon, title, desc }) => (
        <li
          key={title}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800/80 dark:bg-slate-950/80"
        >
          <Icon className="h-5 w-5 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
          <p className="mt-2 text-base font-black text-slate-900 dark:text-white">{title}</p>
          <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{desc}</p>
        </li>
      ))}
    </ul>
  );
}

const primaryBtn =
  "group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:scale-105 hover:brightness-110 active:scale-95 motion-reduce:hover:scale-100 sm:w-auto";

export function ContentHero() {
  return (
    <section
      aria-labelledby="content-hero-heading"
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

      <div className="relative mx-auto max-w-6xl space-y-14 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-cyan-700 shadow-lg shadow-cyan-500/10 sm:text-sm dark:text-cyan-400">
          <FileText className="h-4 w-4" aria-hidden="true" />
          SEO content and copywriting
        </p>

        <h1
          id="content-hero-heading"
          className="mx-auto max-w-5xl text-balance text-4xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white"
        >
          SEO content writing services that{" "}
          <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
            rank and convert
          </span>
        </h1>

        <p className="mx-auto max-w-3xl text-pretty text-base font-normal leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
          Good content does two jobs: it gets found on Google, and it persuades people to act. I offer blog writing
          services, website copywriting and landing page content, all backed by keyword research and written for real
          readers, as part of a content marketing plan that brings in leads month after month.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
          <ServiceQuoteDialog
            service="SEO content writing"
            title="Request a content writing quote"
            description="Tell me about your website, your audience and the content you need, and I'll come back with a fixed quote."
            icon={<FileText className="h-5 w-5" aria-hidden="true" />}
            buttonClassName={primaryBtn}
          >
            Get a content writing quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </ServiceQuoteDialog>

          <a
            href={`#${NEXT_SECTION_ID}`}
            className="group flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-bold text-slate-800 transition-all hover:bg-slate-100 sm:w-auto dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            See what I write
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
        </div>

        {/* Preview: what goes into content built to rank vs content built to convert */}
        <div className="mx-auto max-w-5xl pt-2 text-left">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-6 shadow-2xl shadow-slate-200/70 sm:p-8 dark:bg-slate-900/80 dark:shadow-black/40">
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
            />

            <ContentPreviewTabs
              header={
                <div className="flex items-center gap-3">
                  <span className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-2.5 text-cyan-600 dark:text-cyan-400">
                    <TrendingUp className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                      In every piece
                    </p>
                    <h2 className="text-base font-bold text-slate-900 sm:text-lg dark:text-white">
                      Written to rank and to convert
                    </h2>
                  </div>
                </div>
              }
              labels={["Search ranking", "Conversion"]}
              panels={[
                <PreviewGrid key="ranking" items={rankingItems} />,
                <PreviewGrid key="conversion" items={conversionItems} />,
              ]}
            />

            {/* Example of how a post can look in Google */}
            <figure className="mt-6 space-y-1.5 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
              <figcaption className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Example search result
              </figcaption>
              <p className="flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                <Globe className="h-3.5 w-3.5 shrink-0 text-emerald-700 dark:text-emerald-400" aria-hidden="true" />
                <span className="truncate">yourbrand.com › blog › how-to-choose-a-roofer</span>
              </p>
              <p className="text-sm font-bold text-blue-700 sm:text-base dark:text-cyan-400">
                How to Choose a Roofer: 7 Questions to Ask Before You Hire
              </p>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                Not sure who to trust with your roof? Here are the questions that separate reliable roofers from risky
                ones, plus the red flags to watch for in any quote.
              </p>
            </figure>

            <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
              Title and meta description written for every piece
            </p>
          </div>
        </div>

        <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
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