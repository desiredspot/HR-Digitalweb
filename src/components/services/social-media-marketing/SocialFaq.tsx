import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle2, ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { QuoteDialogTrigger } from "@/components/services/quote/ServiceQuoteDialog";

// FAQ section for /services/social-media-marketing.
// Server component, no client JS: each question is a native <details> element, so every
// answer is in the HTML for Google. FAQPage structured data is included as well.

const faqs = [
  {
    question: "How many posts per month?",
    answer:
      "Plans range from 12 to 30 posts a month, depending on how many platforms you're on and how often you want to show up. I can also build a custom plan around your goals and budget.",
    icon: Calendar,
    badge: "Posting volume",
    link: { href: "/pricing", label: "See pricing" },
  },
  {
    question: "Do you reply to comments and DMs?",
    answer:
      "Community management is available as an add-on. I can reply to comments and messages in your brand voice and pass any sales enquiries straight to you.",
    icon: MessageSquare,
    badge: "Community management",
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

export function SocialFaq() {
  return (
    <section
      id="faq"
      aria-labelledby="social-faq-heading"
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
            Social media questions
          </p>

          <h2
            id="social-faq-heading"
            className="text-balance text-3xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white"
          >
            Frequently asked{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              questions
            </span>
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-400">
            What you need to know about posting volume, plans and managing comments.
          </p>
        </header>

        <div className="space-y-4">
          {faqs.map(({ question, answer, icon: Icon, badge, link }, idx) => (
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
                  <div className="space-y-3">
                    <p>{answer}</p>
                    {link && (
                      <Link
                        href={link.href}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-cyan-700 underline-offset-4 hover:underline dark:text-cyan-400"
                      >
                        {link.label}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>

        {/* CTA banner */}
        <aside
          aria-labelledby="social-faq-cta-heading"
          className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-8 shadow-xl sm:flex-row sm:p-10 dark:from-cyan-950/50 dark:via-slate-900 dark:to-blue-950/50 dark:shadow-2xl"
        >
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
          />

          <div className="space-y-1 text-center sm:text-left">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
              Ready to show up consistently?
            </p>
            <h3 id="social-faq-cta-heading" className="text-xl font-black text-slate-900 sm:text-2xl dark:text-white">
              Get a monthly content plan for your brand
            </h3>
          </div>

          <QuoteDialogTrigger className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/20 transition-all hover:brightness-110">
            Plan my social content
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </QuoteDialogTrigger>
        </aside>
      </div>
    </section>
  );
}