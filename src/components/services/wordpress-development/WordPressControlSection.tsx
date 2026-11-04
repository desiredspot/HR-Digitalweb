import { ArrowRight, BookOpen, FileEdit, Image as ImageIcon, Monitor, Play, ShieldCheck, Sparkles, Video } from "lucide-react";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { QuoteDialogTrigger } from "@/components/services/quote/ServiceQuoteDialog";

// "You stay in control" section for /services/wordpress-development.
// Pure server component, no client JS.
// The video frame is an illustration of the walkthrough each client receives after launch
// (recorded on their own site), so it isn't a playable video and claims no fixed length.

const walkthroughItems = [
  {
    icon: FileEdit,
    title: "Editing page content",
    desc: "Change text, headlines and buttons in the page editor without touching any code.",
  },
  {
    icon: BookOpen,
    title: "Adding blog posts",
    desc: "Write and publish new posts, add headings and set a featured image.",
  },
  {
    icon: ImageIcon,
    title: "Swapping images",
    desc: "Upload new photos, with resizing and compression handled for you.",
  },
  {
    icon: ShieldCheck,
    title: "Editing without breaking the design",
    desc: "Layouts, spacing and styles are locked into reusable blocks, so content changes don't knock the design out of place.",
  },
];

export function WordPressControlSection() {
  return (
    <section
      id="you-stay-in-control"
      aria-labelledby="wp-control-heading"
      className={`${sectionBg.alt} ${sectionDivider} relative isolate scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24`}
    >
      {/* Ambient glow + dot grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0
            bg-[radial-gradient(55%_45%_at_50%_50%,rgba(103,232,249,0.16),transparent_70%)]
            dark:bg-[radial-gradient(55%_45%_at_50%_50%,rgba(6,182,212,0.13),transparent_70%)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)]" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-12">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
            <Video className="h-3.5 w-3.5" aria-hidden="true" />
            No developer lock-in
          </p>

          <h2
            id="wp-control-heading"
            className="text-balance text-3xl font-black leading-none tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            You stay in{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              control
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            When your site launches, I hand over a short video walkthrough showing how to edit pages, add blog posts and
            change images without breaking the design.
          </p>
        </header>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Video walkthrough illustration (always dark, like a screen) */}
          <figure className="lg:col-span-7">
            <div className="overflow-hidden rounded-3xl border border-cyan-500/30 bg-slate-900 shadow-2xl shadow-slate-300/60 dark:shadow-black/40">
              <div className="flex items-center justify-between gap-3 border-b border-slate-800 bg-slate-950 px-5 py-3.5">
                <div className="flex items-center gap-2" aria-hidden="true">
                  <span className="inline-block h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="inline-block h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="inline-block h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="flex min-w-0 items-center gap-2 font-mono text-xs text-slate-400">
                  <Monitor className="h-3.5 w-3.5 shrink-0 text-cyan-400" aria-hidden="true" />
                  <span className="truncate">your-site-walkthrough.mp4</span>
                </span>
                <span className="hidden shrink-0 rounded border border-cyan-500/30 bg-cyan-500/20 px-2 py-0.5 font-mono text-[10px] text-cyan-300 sm:inline">
                  Recorded for you
                </span>
              </div>

              <div className="relative flex aspect-video flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 text-center">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15)_0,transparent_70%)]"
                />

                {/* Faint editor outline behind the play button */}
                <div aria-hidden="true" className="absolute inset-6 hidden gap-4 opacity-25 sm:flex">
                  <div className="w-1/5 space-y-2 rounded-lg border border-slate-700 p-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="h-2 rounded bg-slate-700" />
                    ))}
                  </div>
                  <div className="flex-1 space-y-3 rounded-lg border border-slate-700 p-4">
                    <div className="h-4 w-2/3 rounded bg-slate-600" />
                    <div className="h-2 w-full rounded bg-slate-700" />
                    <div className="h-2 w-5/6 rounded bg-slate-700" />
                    <div className="h-20 w-full rounded bg-slate-800" />
                  </div>
                </div>

                <span
                  aria-hidden="true"
                  className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-teal-300 text-slate-950 shadow-2xl shadow-cyan-400/40"
                >
                  <Play className="ml-1 h-9 w-9 fill-slate-950" />
                </span>

                <div className="relative z-10 mt-6 space-y-1">
                  <p className="text-lg font-extrabold text-white">A walkthrough of your own site</p>
                  <p className="font-mono text-xs text-slate-400">Recorded after launch · Yours to keep and rewatch</p>
                </div>
              </div>
            </div>
            <figcaption className="sr-only">
              Example of the video walkthrough each client receives after their WordPress site launches.
            </figcaption>
          </figure>

          {/* What the walkthrough covers */}
          <div className="lg:col-span-5">
            <h3 className="sr-only">What the walkthrough covers</h3>
            <ul className="space-y-4">
              {walkthroughItems.map(({ icon: Icon, title, desc }) => (
                <li
                  key={title}
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-slate-800 dark:bg-slate-900/60"
                >
                  <span className="shrink-0 rounded-xl border border-cyan-500/20 bg-cyan-50 p-3 text-cyan-600 transition-transform group-hover:scale-105 dark:bg-slate-950 dark:text-cyan-400">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 transition-colors group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300">
                      {title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-slate-400">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <aside
          aria-labelledby="wp-control-cta-heading"
          className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 shadow-xl sm:p-10 md:flex-row dark:bg-slate-900/80 dark:shadow-2xl"
        >
          <div className="space-y-2 text-center md:text-left">
            <h3
              id="wp-control-cta-heading"
              className="flex items-center justify-center gap-2 text-xl font-black text-slate-900 sm:text-2xl md:justify-start dark:text-white"
            >
              <Sparkles className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
              Your site, your logins, your content.
            </h3>
            <p className="text-xs text-slate-600 sm:text-sm dark:text-slate-400">
              Run the site yourself after launch, and get in touch whenever you want a hand with something bigger.
            </p>
          </div>

          <QuoteDialogTrigger className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-xs font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:brightness-110 sm:text-sm">
            Start your build
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </QuoteDialogTrigger>
        </aside>
      </div>
    </section>
  );
}