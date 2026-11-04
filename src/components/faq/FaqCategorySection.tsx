import Link from "next/link";
import { ArrowRight, HelpCircle, Sparkles } from "lucide-react";
import { FaqClosingCta } from "./FaqClosingCta";
import { siteConfig } from "@/lib/site-config";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { faqCategories } from "@/lib/faq";
import { FaqCategoryList } from "./FaqCategoryList";

// A full-width FAQ section for one category from src/lib/faq.ts.
// Pure server component, no client JS. Use one per category after the hero, e.g.
//   <FaqCategorySection categoryId="projects-timelines" tone="alt" />
// Alternate tone="alt" and tone="base" so neighbouring sections look different.

export function FaqCategorySection({
  categoryId,
  tone = "alt",
  ctaLabel,
  closingCta = false,
}: {
  categoryId: string;
  tone?: "base" | "alt";
  /** Overrides the button text; otherwise the category's cta.label or a default is used */
  ctaLabel?: string;
  /** Show the full-width "Still have questions?" banner under this section (use on the last one) */
  closingCta?: boolean;
}) {
  const category = faqCategories.find((c) => c.id === categoryId);
  if (!category) return null;

  // Side panel text: set per category in src/lib/faq.ts (cta), or fall back to this default
  const cta = category.cta ?? {
    eyebrow: "Fixed proposal",
    title: "Want exact dates for your project?",
    text: "Book a free 30-minute call and you'll get a written plan with the timeline, revision rounds and a fixed price within 48 hours.",
    label: "Get your project scoped in 48 hours",
  };

  const headingId = `${category.id}-heading`;

  return (
    <section
      id={category.id}
      aria-labelledby={headingId}
      className={`${sectionBg[tone]} ${sectionDivider} relative isolate scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24`}
    >
      {/* Ambient glow + dot grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0
            bg-[radial-gradient(55%_45%_at_50%_30%,rgba(103,232,249,0.16),transparent_70%)]
            dark:bg-[radial-gradient(55%_45%_at_50%_30%,rgba(6,182,212,0.13),transparent_70%)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)]" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-12">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
            <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />
            {category.eyebrow ?? "FAQ"}
          </p>
          <h2
            id={headingId}
            className="text-balance text-3xl font-black leading-none tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            {category.title}
          </h2>
          {category.intro && (
            <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              {category.intro}
            </p>
          )}
        </header>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <FaqCategoryList category={category} openFirst showHeading={false} />
          </div>

          <aside
            aria-label={cta.title}
            className="relative space-y-4 overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-6 shadow-2xl shadow-slate-200/70 sm:p-8 lg:sticky lg:top-24 lg:col-span-4 dark:bg-slate-900/90 dark:shadow-black/40"
          >
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
            />
            <p className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              {cta.eyebrow}
            </p>
            <p className="text-lg font-black text-slate-900 dark:text-white">{cta.title}</p>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{cta.text}</p>
            <Link
              href={siteConfig.bookingUrl}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition-all hover:brightness-110"
            >
              {ctaLabel ?? cta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </aside>
        </div>

        {closingCta && <FaqClosingCta />}
      </div>
    </section>
  );
}