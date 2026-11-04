import { ArrowRight, CheckCircle2, Clock, Sparkles, Target, UploadCloud } from "lucide-react";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { QuoteDialogTrigger } from "@/components/services/quote/ServiceQuoteDialog";

// "How it works" section for /services/reels-video-editing (simple version).
// Pure server component, no client JS. The 4 steps are an ordered list, so the order
// is clear to screen readers and search engines.

const steps = [
  {
    icon: UploadCloud,
    title: "Upload your footage to a shared folder",
    desc: "Drop your raw video files or phone clips into a shared Google Drive or Dropbox folder. No need to trim anything first.",
  },
  {
    icon: Target,
    title: "Share your goal and reference reels",
    desc: "Tell me what each reel is for and share links to a few reels whose style, hooks or captions you like.",
  },
  {
    icon: Clock,
    title: "Get your edits in 48–72 hours",
    desc: "Receive polished 9:16 vertical reels with a strong hook, animated captions, B-roll, music and your end card.",
  },
  {
    icon: CheckCircle2,
    title: "Request changes, then post",
    desc: "Review your edits, ask for any tweaks, then post them to Instagram, TikTok or YouTube Shorts.",
  },
];

export function ReelsHowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="reels-how-heading"
      className={`${sectionBg.alt} ${sectionDivider} relative isolate scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24`}
    >
      {/* Ambient glow: radial gradient instead of a blur filter */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(50%_40%_at_50%_50%,rgba(103,232,249,0.16),transparent_70%)]
          dark:bg-[radial-gradient(50%_40%_at_50%_50%,rgba(6,182,212,0.12),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-5xl space-y-16">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 shadow-lg shadow-cyan-500/10 dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Simple workflow
          </p>

          <h2
            id="reels-how-heading"
            className="text-balance text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-6xl dark:text-white"
          >
            How it{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              works
            </span>
          </h2>

          <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
            4 simple steps to turn your raw clips into reels people watch to the end.
          </p>
        </header>

        <ol className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }, i) => {
            const n = String(i + 1).padStart(2, "0");
            return (
              <li
                key={title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/15 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-slate-800/90 dark:bg-slate-900/60 dark:shadow-black/20 dark:hover:bg-slate-900/90"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-400 text-base font-black text-slate-950 shadow-lg shadow-cyan-400/20 transition-all duration-300 group-hover:rotate-3 group-hover:scale-110 motion-reduce:group-hover:rotate-0 motion-reduce:group-hover:scale-100"
                    >
                      {n}
                    </span>
                    <span className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-cyan-600 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-400/40 motion-reduce:group-hover:scale-100 dark:border-slate-800 dark:bg-slate-950 dark:text-cyan-400 dark:group-hover:text-cyan-300">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>

                  <h3 className="mb-2 text-base font-extrabold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300">
                    {title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600 transition-colors duration-300 dark:text-slate-400 dark:group-hover:text-slate-300">
                    {desc}
                  </p>
                </div>

                <p className="mt-6 border-t border-slate-100 pt-4 font-mono text-[11px] text-slate-500 transition-colors group-hover:text-cyan-700 dark:border-slate-800/80 dark:group-hover:text-cyan-400">
                  Step {n} of 04
                </p>
              </li>
            );
          })}
        </ol>

        <div className="pt-4 text-center">
          <QuoteDialogTrigger className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-9 py-4 text-xs font-black text-slate-950 shadow-xl shadow-cyan-400/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-400/35 hover:brightness-110 motion-reduce:hover:translate-y-0 sm:text-sm">
            Start editing my reels
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </QuoteDialogTrigger>
        </div>
      </div>
    </section>
  );
}