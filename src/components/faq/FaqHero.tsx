import Link from "next/link";
import { ArrowRight, HelpCircle, ListChecks, MessageSquare } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { sectionBg } from "@/lib/section-bg";
import { faqCategories } from "@/lib/faq";
import { FaqCategoryList } from "./FaqCategoryList";

// Hero for /faq: H1, intro, the first FAQ category and a sticky side panel with
// links to every category plus a booking button.
// Pure server component, no client JS. Questions live in src/lib/faq.ts.
// Primary keyword "hire a web developer FAQ" is reflected in the H1 and intro.

export function FaqHero() {
  const [first] = faqCategories;

  return (
    <section
      aria-labelledby="faq-hero-heading"
      className={`${sectionBg.base} relative isolate overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-40`}
    >
      {/* Ambient glow + dot grid: radial gradients instead of a blur filter */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0
            bg-[radial-gradient(55%_45%_at_50%_20%,rgba(103,232,249,0.22),transparent_70%)]
            dark:bg-[radial-gradient(55%_45%_at_50%_20%,rgba(6,182,212,0.16),transparent_70%)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_20%,#000_60%,transparent_100%)] dark:bg-[radial-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)]" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-12 sm:space-y-16">
        <header className="mx-auto max-w-4xl space-y-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-cyan-700 shadow-lg shadow-cyan-500/10 sm:text-sm dark:text-cyan-400">
            <HelpCircle className="h-4 w-4" aria-hidden="true" />
            Clear answers
          </p>

          <h1
            id="faq-hero-heading"
            className="text-balance text-4xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white"
          >
            Hiring a web developer:{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              your questions answered
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-pretty text-base font-normal leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
            Everything you need to know before you hire a web developer and marketer: how I work, timelines, pricing,
            revisions, ownership, SEO and GoHighLevel.
          </p>
        </header>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* First category */}
          <div className="lg:col-span-8">{first && <FaqCategoryList category={first} openFirst />}</div>

          {/* Sticky side panel */}
          <aside aria-label="FAQ categories and contact" className="space-y-6 lg:sticky lg:top-24 lg:col-span-4">
            {faqCategories.length > 1 && (
              <nav
                aria-labelledby="faq-categories-heading"
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-black/30"
              >
                <p
                  id="faq-categories-heading"
                  className="mb-4 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400"
                >
                  <ListChecks className="h-4 w-4" aria-hidden="true" />
                  Jump to a topic
                </p>
                <ul className="space-y-1.5">
                  {faqCategories.map((c) => (
                    <li key={c.id}>
                      <a
                        href={`#${c.id}`}
                        className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-cyan-50 hover:text-cyan-700 dark:text-slate-300 dark:hover:bg-slate-950 dark:hover:text-cyan-300"
                      >
                        {c.title}
                        <span className="rounded-full bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-600 dark:bg-slate-950 dark:text-slate-400">
                          {c.items.length}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            <div className="relative space-y-4 overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-6 shadow-2xl shadow-slate-200/70 sm:p-8 dark:bg-slate-900/90 dark:shadow-black/40">
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
              />
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                <MessageSquare className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="text-lg font-black text-slate-900 dark:text-white">Still have a question?</h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Book a free 30-minute call and ask me anything about your project. No pressure and no hard sell.
              </p>
              <Link
                href={siteConfig.bookingUrl}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition-all hover:brightness-110"
              >
                Book a free discovery call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}