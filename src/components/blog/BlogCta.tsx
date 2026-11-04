import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { serviceHref, siteConfig } from "@/lib/site-config";
import { sectionBg, sectionDivider } from "@/lib/section-bg";

// Closing banner on /blog: points readers to the SEO content service and the booking page.

export function BlogCta() {
  return (
    <section aria-labelledby="blog-cta-heading" className={`${sectionBg.base} ${sectionDivider} px-4 py-16 sm:px-6 lg:px-8 lg:py-20`}>
      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 text-center shadow-2xl shadow-slate-200/70 sm:p-12 md:flex-row md:text-left dark:bg-slate-900/90 dark:shadow-black/40">
        <span aria-hidden="true" className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500" />
        <div className="max-w-xl space-y-2">
          <p className="flex items-center justify-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 md:justify-start dark:text-cyan-400">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            SEO content writing
          </p>
          <h2 id="blog-cta-heading" className="text-2xl font-black text-slate-900 sm:text-3xl dark:text-white">
            Want guides like these for your business?
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            I write and publish SEO blog posts that answer your customers&apos; questions and point readers to your
            services.{" "}
            <Link
              href={serviceHref("content-marketing")}
              className="font-bold text-cyan-700 underline decoration-cyan-500/40 underline-offset-4 hover:text-cyan-900 dark:text-cyan-400 dark:hover:text-cyan-300"
            >
              See how it works
            </Link>
          </p>
        </div>
        <Link
          href={siteConfig.bookingUrl}
          className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-xs font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:brightness-110 sm:text-sm"
        >
          Book a free strategy call
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}