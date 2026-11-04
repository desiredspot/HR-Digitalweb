import { ArrowRight, BookOpen, CheckCircle2, FileText, Globe, Layers, RefreshCw, ShoppingBag, Target } from "lucide-react";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { QuoteDialogTrigger } from "@/components/services/quote/ServiceQuoteDialog";
import { ContentTypeTabs } from "./ContentTypeTabs";

// "Content I write" section for /services/content-marketing.
// Server component; only the card switching is client-side (ContentTypeTabs).
// Every content type and its details are in the HTML. id="what-i-write" is the target
// of the hero's "See what I write" button. Buttons open the hero's quote dialog.

const contentTypes = [
  {
    key: "seo-blog-posts",
    icon: FileText,
    title: "SEO blog posts",
    badge: "Blog writing",
    summary: "In-depth articles that answer the questions your customers search for.",
    desc: "Human-written blog posts backed by keyword research and a close look at what's already ranking, so each article covers the topic better than the competition and brings in readers who are close to buying.",
    length: "1,000 – 2,500 words",
    deliverables: ["Primary and related keywords", "Meta title and description", "Internal link suggestions"],
  },
  {
    key: "website-copy",
    icon: Globe,
    title: "Website copy",
    badge: "Website copywriting",
    summary: "Clear messaging for your home, about, service and location pages.",
    desc: "Website copywriting that explains what you do, who it's for and why you're the right choice, then guides visitors to the one action you want them to take.",
    length: "Scoped per page",
    deliverables: ["Home, about and service pages", "Local SEO location pages", "Clear calls to action"],
  },
  {
    key: "landing-page-copy",
    icon: Target,
    title: "Landing page copy",
    badge: "Conversion",
    summary: "Single-offer copy that turns ad traffic into leads and sales.",
    desc: "Benefit-first copy for one offer and one action, written to match the headline of the ad or search that brought people to the page.",
    length: "400 – 1,200 words",
    deliverables: ["Message matched to your ads", "Features turned into benefits", "Form and button copy"],
  },
  {
    key: "pillar-pages",
    icon: Layers,
    title: "Pillar pages and topic clusters",
    badge: "Topical authority",
    summary: "Complete guides that show Google you're an authority on your topic.",
    desc: "A comprehensive guide on your core topic, linked to a cluster of supporting articles, so Google sees depth on the subject and readers can find every answer in one place.",
    length: "3,000 – 5,000+ words",
    deliverables: ["Topic and sub-topic plan", "Cluster article map", "Lead magnet opportunities"],
  },
  {
    key: "product-descriptions",
    icon: ShoppingBag,
    title: "Product and category descriptions",
    badge: "E-commerce",
    summary: "Search-friendly product and category copy that helps shoppers buy.",
    desc: "Product descriptions and category pages that answer shoppers' questions, show up in search and give people the confidence to add to cart.",
    length: "150 – 500 words per item",
    deliverables: ["Unique copy, not manufacturer text", "Features turned into benefits", "Structured for product schema"],
  },
  {
    key: "case-studies-refreshes",
    icon: RefreshCw,
    title: "Case studies and content refreshes",
    badge: "Proof and updates",
    summary: "Customer success stories, plus updates to older posts that have slipped.",
    desc: "Case studies that tell the story of a real client result, and refreshes for older blog posts with outdated information, so they can win back rankings they've lost.",
    length: "800 – 1,800 words",
    deliverables: ["Results shared with client approval", "Audit and rewrite of older posts", "New keywords added"],
  },
];

export function ContentTypes() {
  return (
    <section
      id="what-i-write"
      aria-labelledby="content-types-heading"
      className={`${sectionBg.alt} ${sectionDivider} relative isolate scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24`}
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
            <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
            Content for every page
          </p>

          <h2
            id="content-types-heading"
            className="text-balance text-3xl font-black leading-none tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Content I{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              write
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            From SEO blog posts to landing page copy, every piece is planned around your search strategy and written to
            bring in leads.
          </p>
        </header>

        <ContentTypeTabs
          cards={contentTypes.map(({ key, title, badge, summary, length, icon: Icon }) => ({
            key,
            label: title,
            badge,
            summary,
            length,
            icon: <Icon className="h-6 w-6" aria-hidden="true" />,
          }))}
          panels={contentTypes.map((c) => (
            <article
              key={c.key}
              aria-labelledby={`content-${c.key}-title`}
              className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 shadow-2xl shadow-slate-200/70 sm:p-10 dark:bg-slate-900/80 dark:shadow-black/40"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
              />

              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                <div className="space-y-4 lg:col-span-7">
                  <div className="flex items-center gap-3">
                    <span className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-3 text-cyan-600 dark:text-cyan-400">
                      <c.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                        What you get
                      </p>
                      <h3
                        id={`content-${c.key}-title`}
                        className="text-2xl font-black text-slate-900 dark:text-white"
                      >
                        {c.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">{c.desc}</p>

                  <ul className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
                    {c.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col items-center justify-center space-y-4 border-t border-slate-200 pt-6 text-center lg:col-span-5 lg:items-end lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 lg:text-right dark:border-slate-800">
                  <div className="space-y-1">
                    <p className="font-mono text-xs text-slate-500 dark:text-slate-400">Typical length</p>
                    <p className="text-2xl font-black text-slate-900 dark:text-white">{c.length}</p>
                    <p className="font-mono text-xs text-emerald-600 dark:text-emerald-400">Keyword research included</p>
                  </div>

                  <QuoteDialogTrigger className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition-all hover:brightness-110">
                    Get a quote for this
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </QuoteDialogTrigger>
                </div>
              </div>
            </article>
          ))}
        />
      </div>
    </section>
  );
}