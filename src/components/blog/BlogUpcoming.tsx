import { CalendarClock } from "lucide-react";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { getCategory, plannedPosts } from "@/lib/blog";

// "Coming soon": planned posts from src/lib/blog.ts that aren't published yet.
// A topic disappears automatically once a Sanity post with the same slug is live.
// Titles only, no links, so Google never finds pages that don't exist yet.

export function BlogUpcoming({ publishedSlugs }: { publishedSlugs: string[] }) {
  const published = new Set(publishedSlugs);
  const upcoming = plannedPosts.filter((p) => !published.has(p.slug)).slice(0, 6);
  if (upcoming.length === 0) return null;

  return (
    <section
      aria-labelledby="blog-upcoming-heading"
      className={`${sectionBg.alt} ${sectionDivider} px-4 py-16 sm:px-6 lg:px-8 lg:py-20`}
    >
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="mb-1 font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
              Coming soon
            </p>
            <h2 id="blog-upcoming-heading" className="text-2xl font-black text-slate-900 sm:text-3xl dark:text-white">
              Guides I&apos;m writing next
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-600 dark:text-slate-400">
            Each one answers a question business owners ask me before starting a project.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((p) => (
            <li
              key={p.slug}
              className="flex items-start gap-3 rounded-2xl border border-dashed border-slate-300 bg-white/70 p-5 dark:border-slate-700 dark:bg-slate-900/50"
            >
              <CalendarClock className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
              <div className="space-y-1">
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {getCategory(p.category)?.label}
                </p>
                <p className="text-sm font-bold leading-snug text-slate-800 dark:text-slate-200">{p.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}