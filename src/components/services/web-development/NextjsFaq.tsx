import { ArrowRight, ChevronDown, Clock, Edit3, HelpCircle, MessageSquare, TrendingUp } from "lucide-react";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { QuoteDialogTrigger } from "@/components/services/quote/ServiceQuoteDialog";

// FAQ section for /services/web-development.
// Server component, no client JS: each question is a native <details> element, so it
// opens and closes without JavaScript and every answer is in the HTML for Google.
// FAQPage structured data is included too, which helps search and AI tools understand the answers.

const faqs = [
  {
    id: "timeline",
    question: "How long does a Next.js website take?",
    shortAnswer:
      "A typical 5 to 8 page business website takes 2 to 4 weeks. Web apps are scoped and quoted individually.",
    detailedAnswer:
      "Most 5 to 8 page marketing sites are ready in 2 to 4 weeks, depending on how quickly content and feedback come back. For web apps, custom databases or complex integrations, I map out a timeline with milestones during our discovery call, so you know the dates before work starts.",
    icon: Clock,
  },
  {
    id: "cms",
    question: "Can I edit the content myself?",
    shortAnswer: "Yes. I connect a headless CMS such as Sanity, so you can update pages without touching code.",
    detailedAnswer:
      "I pair Next.js with a headless CMS like Sanity. You get a simple editing dashboard to change text, swap images, write blog posts and publish updates yourself, with no coding needed. I'll also show you how to use it before handover.",
    icon: Edit3,
  },
  {
    id: "seo",
    question: "Will a redesign hurt my rankings?",
    shortAnswer:
      "I map every old URL, set up 301 redirects and carry over your metadata, to protect the rankings you already have.",
    detailedAnswer:
      "Before launch, I audit your current URLs, build a full 301 redirect map, keep your page titles and descriptions, and move your structured data across. After launch, I monitor Google Search Console for errors and fix anything that comes up. Rankings can move a little while Google re-crawls a new site, but these steps keep that to a minimum.",
    icon: TrendingUp,
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: `${f.shortAnswer} ${f.detailedAnswer}` },
  })),
};

export function NextjsFaq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className={`${sectionBg.base} ${sectionDivider} relative isolate overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />

      {/* Ambient glow: radial gradient instead of a blur filter */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(50%_40%_at_50%_50%,rgba(103,232,249,0.18),transparent_70%)]
          dark:bg-[radial-gradient(50%_40%_at_50%_50%,rgba(6,182,212,0.14),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-4xl space-y-10">
        <header className="space-y-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
            <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />
            Got questions?
          </p>

          <h2
            id="faq-heading"
            className="text-balance text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl dark:text-white"
          >
            Frequently asked{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              questions
            </span>
          </h2>

          <p className="mx-auto max-w-xl text-pretty text-base text-slate-600 dark:text-slate-400">
            What you need to know about building, migrating and growing your website with Next.js.
          </p>
        </header>

        <div className="space-y-4">
          {faqs.map(({ id, question, shortAnswer, detailedAnswer, icon: Icon }, idx) => (
            <details
              key={id}
              open={idx === 0}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:bg-slate-50 open:border-cyan-500/50 open:shadow-lg open:shadow-cyan-500/10 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:bg-slate-900/80 dark:open:border-cyan-500/50 dark:open:bg-slate-900/90"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-cyan-500 sm:p-8 [&::-webkit-details-marker]:hidden">
                <div className="flex items-center gap-4">
                  <span className="shrink-0 rounded-2xl border border-slate-200 bg-slate-100 p-3 text-slate-600 transition-colors group-open:border-cyan-500/30 group-open:bg-cyan-500/10 group-open:text-cyan-600 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-400 dark:group-open:text-cyan-400">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-bold leading-snug text-slate-900 sm:text-lg dark:text-white">{question}</h3>
                </div>

                <span
                  aria-hidden="true"
                  className="shrink-0 rounded-full border border-slate-200 bg-slate-100 p-2 text-slate-600 transition-transform duration-300 group-open:rotate-180 group-open:border-cyan-500/40 group-open:bg-cyan-500/20 group-open:text-cyan-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:group-open:text-cyan-400"
                >
                  <ChevronDown className="h-4 w-4" />
                </span>
              </summary>

              <div className="space-y-3 border-t border-slate-100 px-6 pb-6 sm:px-8 sm:pb-8 dark:border-slate-800/60">
                <p className="pt-4 text-sm font-semibold text-cyan-700 dark:text-cyan-300">{shortAnswer}</p>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{detailedAnswer}</p>
              </div>
            </details>
          ))}
        </div>

        {/* CTA banner */}
        <aside
          aria-labelledby="faq-cta-heading"
          className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-8 shadow-lg sm:flex-row dark:border-cyan-900/40 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-900 dark:shadow-2xl"
        >
          <div className="space-y-1 text-center sm:text-left">
            <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
              <MessageSquare className="h-3.5 w-3.5" aria-hidden="true" />
              Still have questions?
            </p>
            <h3 id="faq-cta-heading" className="text-lg font-extrabold text-slate-900 dark:text-white">
              Ask me anything about your web project.
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Get a clear plan and a fixed-price estimate, free.
            </p>
          </div>

          <QuoteDialogTrigger className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:brightness-110">
            Get a free website quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </QuoteDialogTrigger>
        </aside>
      </div>
    </section>
  );
}