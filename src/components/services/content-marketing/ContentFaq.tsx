import { ArrowRight, CheckCircle2, ChevronDown, Clock, HelpCircle, UserCheck } from "lucide-react";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { QuoteDialogTrigger } from "@/components/services/quote/ServiceQuoteDialog";

// FAQ section for /services/content-marketing.
// Server component, no client JS: each question is a native <details> element, so every
// answer is in the HTML for Google. FAQPage structured data is included as well.

const faqs = [
  {
    question: "Is your content written by AI?",
    answer:
      "No. Every piece is researched, written and edited by me, checked for accuracy and matched to your brand voice. You get original content written for your readers, not generic text.",
    icon: UserCheck,
    badge: "Quality",
  },
  {
    question: "How long until posts rank?",
    answer:
      "Usually 3 to 6 months, and sooner for low-competition keywords. It depends on your site's age and authority and how competitive the topic is, which is why I prioritise keywords you can realistically win first.",
    icon: Clock,
    badge: "SEO timeline",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export function ContentFaq() {
  return (
    <section
      id="faq"
      aria-labelledby="content-faq-heading"
      className={`${sectionBg.alt} ${sectionDivider} relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />

      {/* Ambient glow: radial gradient instead of a blur filter */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(50%_40%_at_50%_50%,rgba(103,232,249,0.16),transparent_70%)]
          dark:bg-[radial-gradient(50%_40%_at_50%_50%,rgba(6,182,212,0.12),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-4xl space-y-12">
        <header className="mx-auto max-w-2xl space-y-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
            <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />
            Content questions
          </p>

          <h2
            id="content-faq-heading"
            className="text-balance text-3xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white"
          >
            Frequently asked{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              questions
            </span>
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-400">
            What you need to know about how I write SEO content and how long it takes to rank.
          </p>
        </header>

        <div className="space-y-4">
          {faqs.map(({ question, answer, icon: Icon, badge }, idx) => (
            <details
              key={question}
              open={idx === 0}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:bg-slate-50 open:border-cyan-500/40 open:shadow-xl open:shadow-cyan-500/5 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:bg-slate-900/70 dark:open:bg-slate-900/90"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-cyan-500 sm:p-8 [&::-webkit-details-marker]:hidden">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-cyan-600 transition-colors group-open:border-cyan-300 group-open:bg-cyan-400 group-open:text-slate-950 dark:border-slate-800 dark:bg-slate-950 dark:text-cyan-400 dark:group-open:text-slate-950">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                      {badge}
                    </p>
                    <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-cyan-700 sm:text-xl dark:text-white dark:group-hover:text-cyan-300">
                      {question}
                    </h3>
                  </div>
                </div>

                <span
                  aria-hidden="true"
                  className="shrink-0 rounded-full border border-slate-200 bg-slate-50 p-2 text-slate-500 transition-transform duration-300 group-open:rotate-180 group-open:border-cyan-500/30 group-open:text-cyan-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400 dark:group-open:text-cyan-400"
                >
                  <ChevronDown className="h-5 w-5" />
                </span>
              </summary>

              <div className="border-t border-slate-100 px-6 pb-6 text-sm leading-relaxed text-slate-700 sm:px-8 sm:pb-8 sm:text-base dark:border-slate-800/60 dark:text-slate-300">
                <div className="flex items-start gap-3 pt-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                  <p>{answer}</p>
                </div>
              </div>
            </details>
          ))}
        </div>

        {/* CTA banner */}
        <aside
          aria-labelledby="content-faq-cta-heading"
          className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-8 shadow-xl sm:flex-row sm:p-10 dark:from-cyan-950/50 dark:via-slate-900 dark:to-blue-950/50 dark:shadow-2xl"
        >
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
          />

          <div className="space-y-1 text-center sm:text-left">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
              Ready to grow your organic traffic?
            </p>
            <h3 id="content-faq-cta-heading" className="text-xl font-black text-slate-900 sm:text-2xl dark:text-white">
              Get a keyword strategy and content plan for your business
            </h3>
          </div>

          <QuoteDialogTrigger className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/20 transition-all hover:brightness-110">
            Get a content plan
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </QuoteDialogTrigger>
        </aside>
      </div>
    </section>
  );
}