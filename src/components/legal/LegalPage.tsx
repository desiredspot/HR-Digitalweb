import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, FileText, ListOrdered, Mail } from "lucide-react";
import { sectionBg } from "@/lib/section-bg";
import { contactDetails } from "@/lib/contact";

export type LegalSection = { id: string; title: string; body: ReactNode };

// Shared layout for /privacy-policy and /terms: H1, last-updated date, contents list,
// numbered sections and a contact box. Server component, no client JS.
export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  /** ISO date, e.g. "2026-11-04" */
  updated: string;
  sections: LegalSection[];
}) {
  const updatedLabel = new Intl.DateTimeFormat("en-GB", { dateStyle: "long", timeZone: "UTC" }).format(new Date(updated));

  return (
    <section
      aria-labelledby="legal-heading"
      className={`${sectionBg.base} relative isolate overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-40`}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-x-0 top-0 h-[600px]
            bg-[radial-gradient(55%_45%_at_50%_10%,rgba(103,232,249,0.18),transparent_70%)]
            dark:bg-[radial-gradient(55%_45%_at_50%_10%,rgba(6,182,212,0.12),transparent_70%)]"
        />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-12">
        <header className="mx-auto max-w-3xl space-y-5 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
            <FileText className="h-3.5 w-3.5" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 id="legal-heading" className="text-balance text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            {title}
          </h1>
          <div className="text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">{intro}</div>
          <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
            Last updated: <time dateTime={updated}>{updatedLabel}</time>
          </p>
        </header>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          <nav
            aria-labelledby="legal-contents"
            className="rounded-3xl border border-slate-200 bg-white p-6 lg:sticky lg:top-24 lg:col-span-4 dark:border-slate-800 dark:bg-slate-900/80"
          >
            <p
              id="legal-contents"
              className="mb-3 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400"
            >
              <ListOrdered className="h-4 w-4" aria-hidden="true" />
              Contents
            </p>
            <ol className="space-y-1 text-sm">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="flex gap-2 rounded-xl px-3 py-1.5 text-slate-600 transition-colors hover:bg-cyan-50 hover:text-cyan-700 dark:text-slate-400 dark:hover:bg-slate-950 dark:hover:text-cyan-300"
                  >
                    <span className="font-mono text-xs text-slate-400">{i + 1}.</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="min-w-0 space-y-10 lg:col-span-8">
            {sections.map((s, i) => (
              <article key={s.id} id={s.id} className="scroll-mt-28 space-y-4">
                <h2 className="border-b border-slate-200 pb-3 text-xl font-black text-slate-900 sm:text-2xl dark:border-slate-800 dark:text-white">
                  <span className="mr-2 font-mono text-base text-cyan-600 dark:text-cyan-400">{i + 1}.</span>
                  {s.title}
                </h2>
                <div className="space-y-4 text-[15px] leading-7 text-slate-700 dark:text-slate-300 [&_a]:font-semibold [&_a]:text-cyan-700 [&_a]:underline [&_a]:decoration-cyan-500/40 [&_a]:underline-offset-4 dark:[&_a]:text-cyan-400 [&_li]:pl-1 [&_strong]:font-bold [&_strong]:text-slate-900 dark:[&_strong]:text-white [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:marker:text-cyan-500">
                  {s.body}
                </div>
              </article>
            ))}

            <aside className="flex flex-col items-start justify-between gap-4 rounded-3xl border border-cyan-500/30 bg-white p-6 sm:flex-row sm:items-center dark:bg-slate-900/90">
              <div className="space-y-1">
                <p className="font-bold text-slate-900 dark:text-white">Questions about this page?</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Email{" "}
                  <a href={`mailto:${contactDetails.email}`} className="font-semibold text-cyan-700 underline underline-offset-4 dark:text-cyan-400">
                    {contactDetails.email}
                  </a>{" "}
                  and I&apos;ll reply {contactDetails.replyTime}.
                </p>
              </div>
              <Link
                href="/contact"
                className="flex shrink-0 items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 px-5 py-2.5 text-xs font-extrabold text-slate-950 transition-all hover:brightness-110"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                Contact me
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}