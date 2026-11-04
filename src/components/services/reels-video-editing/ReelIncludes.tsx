import { ArrowRight, Flame, Music, Scissors, Smartphone, Sparkles, Subtitles, Tv } from "lucide-react";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { QuoteDialogTrigger } from "@/components/services/quote/ServiceQuoteDialog";
import { ReelIncludesTabs } from "./ReelIncludesTabs";

// "Every reel includes" section for /services/reels-video-editing.
// Server component; the step switching and the illustrative preview are client-side (ReelIncludesTabs).
// Every step's details are in the HTML.

const steps = [
  {
    key: "hook",
    icon: Flame,
    title: "A hook in the first 3 seconds",
    badge: "Scroll stopper",
    timing: "0:00–0:03",
    summary: "Bold on-screen text and motion right at the start, so people stop scrolling.",
    desc: "The first 3 seconds decide whether someone keeps watching. I open every reel with bold text, movement and a reason to stay, often pulling your strongest line to the very start.",
  },
  {
    key: "captions",
    icon: Subtitles,
    title: "Animated on-brand captions",
    badge: "Sound-off ready",
    timing: "Throughout",
    summary: "Word-by-word captions in your brand fonts and colours.",
    desc: "Lots of people scroll with the sound off. Word-by-word captions in your brand fonts and colours, with high contrast and the odd emoji, make sure your message lands either way.",
  },
  {
    key: "b-roll",
    icon: Scissors,
    title: "B-roll, zooms and transitions",
    badge: "Pacing",
    timing: "Throughout",
    summary: "Jump cuts, punch-in zooms and relevant B-roll to keep the energy up.",
    desc: "I cut pauses and filler, add punch-in zooms on key moments and drop in relevant B-roll, so the pace never drags and every second earns its place.",
  },
  {
    key: "music",
    icon: Music,
    title: "Royalty-free music",
    badge: "Licensed audio",
    timing: "Throughout",
    summary: "Background music and sound effects that are safe to use commercially.",
    desc: "Background tracks from royalty-free libraries plus subtle sound effects (whooshes, pops and clicks), mixed so your voice always stays clear.",
  },
  {
    key: "end-card",
    icon: Tv,
    title: "A branded end card with a CTA",
    badge: "Call to action",
    timing: "Last 3–5 sec",
    summary: "Your logo, handle and one clear next step at the end of every video.",
    desc: "Every reel ends with a clean branded card showing your logo, handle and a clear call to action, like “Follow for weekly tips” or “Book a call, link in bio”.",
  },
  {
    key: "export",
    icon: Smartphone,
    title: "9:16 export",
    badge: "Ready to post",
    timing: "Delivery",
    summary: "1080 × 1920 vertical export with text kept clear of app buttons.",
    desc: "Delivered as a full-HD vertical video (1080 × 1920), with captions and text placed inside the safe zone so they're never hidden behind likes, comments or your profile name.",
  },
];

export function ReelIncludes() {
  return (
    <section
      id="every-reel"
      aria-labelledby="reel-includes-heading"
      className={`${sectionBg.base} ${sectionDivider} relative isolate scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24`}
    >
      {/* Ambient glow + dot grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0
            bg-[radial-gradient(55%_45%_at_50%_35%,rgba(103,232,249,0.16),transparent_70%)]
            dark:bg-[radial-gradient(55%_45%_at_50%_35%,rgba(6,182,212,0.13),transparent_70%)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:32px_32px] dark:bg-[radial-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)]" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-14">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            No extras to pay for
          </p>

          <h2
            id="reel-includes-heading"
            className="text-balance text-3xl font-black leading-none tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Every reel{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              includes
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            A hook in the first 3 seconds, animated on-brand captions, B-roll and zooms, royalty-free music, a branded
            end card and a 9:16 export. All of it, on every video.
          </p>
        </header>

        <ReelIncludesTabs
          steps={steps.map(({ key, title, badge, summary, timing, icon: Icon }, i) => ({
            key,
            step: String(i + 1).padStart(2, "0"),
            title,
            badge,
            summary,
            timing,
            icon: <Icon className="h-5 w-5" aria-hidden="true" />,
          }))}
          panels={steps.map((s) => (
            <div key={s.key} className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{s.desc}</p>
              </div>

              <QuoteDialogTrigger className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition-colors hover:bg-cyan-300">
                Start editing my reels
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </QuoteDialogTrigger>
            </div>
          ))}
        />

        {/* Bottom CTA */}
        <aside
          aria-labelledby="reel-includes-cta-heading"
          className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 shadow-xl sm:p-10 md:flex-row dark:bg-slate-900/80 dark:shadow-2xl"
        >
          <div className="space-y-2 text-center md:text-left">
            <h3
              id="reel-includes-cta-heading"
              className="flex items-center justify-center gap-2 text-xl font-black text-slate-900 sm:text-2xl md:justify-start dark:text-white"
            >
              <Sparkles className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
              Ready to turn raw clips into scroll-stopping reels?
            </h3>
            <p className="text-xs text-slate-600 sm:text-sm dark:text-slate-400">
              Hooks, captions, B-roll, music, end cards and 9:16 exports, all handled for you.
            </p>
          </div>

          <QuoteDialogTrigger className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-xs font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:brightness-110 sm:text-sm">
            Start editing my reels
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </QuoteDialogTrigger>
        </aside>
      </div>
    </section>
  );
}