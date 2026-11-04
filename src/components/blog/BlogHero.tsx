import Link from "next/link";
import { BookOpen, Search, Sparkles, X } from "lucide-react";
import { sectionBg } from "@/lib/section-bg";
import { blogCategories } from "@/lib/blog";

// Hero for /blog: H1, intro, search box and category filter.
// No client JS: search is a normal GET form and the categories are links (?q= and ?category=),
// so it works without JavaScript and every category view has its own URL.

export function blogHref(category: string, page = 1, q = "") {
  const params = new URLSearchParams();
  if (category) params.set("category", category);
  if (q) params.set("q", q);
  if (page > 1) params.set("page", String(page));
  const s = params.toString();
  return s ? `/blog?${s}` : "/blog";
}

export function BlogHero({ category, q, total }: { category: string; q: string; total: number }) {
  const pill =
    "flex shrink-0 items-center gap-2 whitespace-nowrap rounded-2xl border px-4 py-2.5 text-xs font-bold transition-all sm:text-sm";
  const active = "border-cyan-300 bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/25";
  const idle =
    "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:text-white";

  return (
    <section
      aria-labelledby="blog-hero-heading"
      className={`${sectionBg.base} relative isolate overflow-hidden px-4 pb-12 pt-32 sm:px-6 lg:px-8 lg:pt-40`}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0
            bg-[radial-gradient(55%_45%_at_50%_20%,rgba(103,232,249,0.22),transparent_70%)]
            dark:bg-[radial-gradient(55%_45%_at_50%_20%,rgba(6,182,212,0.16),transparent_70%)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_20%,#000_60%,transparent_100%)] dark:bg-[radial-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)]" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-12">
        <header className="mx-auto max-w-4xl space-y-6 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-cyan-700 shadow-lg shadow-cyan-500/10 sm:text-sm dark:text-cyan-400">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            The HR Digital Web blog
          </p>

          <h1
            id="blog-hero-heading"
            className="text-balance text-3xl font-black leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Web development and digital marketing tips that{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              actually work
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-pretty text-base leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
            Practical, no-fluff guides for business owners who want a website and marketing system that brings in
            customers.
          </p>

          <form role="search" action="/blog" method="get" className="relative mx-auto max-w-xl pt-2">
            {category && <input type="hidden" name="category" value={category} />}
            <label htmlFor="blog-search" className="sr-only">
              Search articles
            </label>
            <Search
              className="pointer-events-none absolute left-4 top-1/2 mt-1 h-5 w-5 -translate-y-1/2 text-cyan-600 dark:text-cyan-400"
              aria-hidden="true"
            />
            <input
              id="blog-search"
              type="search"
              name="q"
              defaultValue={q}
              maxLength={80}
              placeholder="Search topics, e.g. website cost, GoHighLevel, SEO"
              className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-28 text-sm text-slate-900 shadow-xl shadow-slate-200/60 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-100 dark:shadow-black/30 dark:placeholder:text-slate-500 dark:focus:border-cyan-400 dark:focus:ring-cyan-400"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 mt-1 -translate-y-1/2 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-4 py-2.5 text-xs font-bold text-slate-950 transition hover:brightness-110"
            >
              Search
            </button>
          </form>
        </header>

        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4 dark:border-slate-800/80">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
              Browse by topic{" "}
              <span className="font-normal normal-case tracking-normal text-slate-500">
                ({total} {total === 1 ? "article" : "articles"}
                {q ? ` for “${q}”` : ""})
              </span>
            </p>
            {(q || category) && (
              <Link
                href="/blog"
                className="flex items-center gap-1 text-xs font-bold text-slate-600 underline-offset-4 hover:text-cyan-700 hover:underline dark:text-slate-400 dark:hover:text-cyan-300"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
                Clear
              </Link>
            )}
          </div>

          <nav aria-label="Blog categories">
            <ul className="flex gap-2 overflow-x-auto pb-2 pt-1">
              <li>
                <Link href={blogHref("", 1, q)} aria-current={!category ? "page" : undefined} className={`${pill} ${!category ? active : idle}`}>
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                  All articles
                </Link>
              </li>
              {blogCategories.map((c) => {
                const isActive = category === c.id;
                return (
                  <li key={c.id}>
                    <Link
                      href={blogHref(c.id, 1, q)}
                      aria-current={isActive ? "page" : undefined}
                      className={`${pill} ${isActive ? active : idle}`}
                    >
                      {c.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}