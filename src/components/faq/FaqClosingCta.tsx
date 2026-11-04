import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

// Full-width "Still have questions?" banner that closes the FAQ page.
// Rendered by <FaqCategorySection closingCta /> on the last category.

export function FaqClosingCta() {
  return (
    <aside
      aria-labelledby="faq-closing-cta-heading"
      className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 text-center shadow-xl shadow-slate-200/70 sm:p-10 md:flex-row md:text-left dark:bg-slate-900/90 dark:shadow-2xl dark:shadow-black/40"
    >
      <div className="space-y-1.5">
        <p className="flex items-center justify-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 md:justify-start dark:text-cyan-400">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          Talk to me directly
        </p>
        <h2 id="faq-closing-cta-heading" className="text-2xl font-black text-slate-900 sm:text-3xl dark:text-white">
          Still have questions?
        </h2>
        <p className="max-w-xl text-xs text-slate-600 sm:text-sm dark:text-slate-300">
          Get honest advice on your tech stack, a website migration or a custom project. You&apos;ll talk to me, the
          person who&apos;d do the work, not a sales team.
        </p>
      </div>

      <Link
        href={siteConfig.bookingUrl}
        className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-xs font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:brightness-110 sm:text-sm"
      >
        Get in touch
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </aside>
  );
}