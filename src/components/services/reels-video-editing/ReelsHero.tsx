import { ArrowDown, ArrowRight, CheckCircle2, Clock, Flame, Play, Scissors, Subtitles, Timer, Video } from "lucide-react";
import { sectionBg } from "@/lib/section-bg";
import { ServiceQuoteDialog } from "@/components/services/quote/ServiceQuoteDialog";

// Hero for /services/reels-video-editing.
// Server component; only the quote button and dialog are client-side.
// Primary keyword "Instagram Reels editing" is in the H1 and intro. Secondary keywords
// (short-form video editing, reels editor for hire, YouTube Shorts editing, 1 minute reels)
// appear naturally in the intro, preview and cards.
// The phone mockup is an illustration of an edited reel, not a playable video.

// The section right after this hero should have this id (the second button scrolls to it).
const NEXT_SECTION_ID = "whats-included";

const pillars = [
  {
    icon: Flame,
    title: "Hooks that stop the scroll",
    desc: "The first 3 seconds are edited to grab attention, so people stop and watch instead of swiping past.",
  },
  {
    icon: Subtitles,
    title: "Clean animated captions",
    desc: "Easy-to-read, on-brand captions, so your reels work for the many people who watch with the sound off.",
  },
  {
    icon: Scissors,
    title: "Fast, professional pacing",
    desc: "Tight jump cuts, zooms, B-roll and sound effects that keep the energy up from start to finish.",
  },
];

const included = [
  "Raw clip clean-up, audio levelling and colour correction",
  "Animated captions, B-roll, music and sound effects",
  "Hook-first editing for the first 3 seconds",
];

const primaryBtn =
  "group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:scale-105 hover:brightness-110 active:scale-95 motion-reduce:hover:scale-100 sm:w-auto";

export function ReelsHero() {
  return (
    <section
      aria-labelledby="reels-hero-heading"
      className={`${sectionBg.base} relative isolate flex min-h-[85vh] items-center justify-center overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-40`}
    >
      {/* Ambient glow + dot grid: radial gradients instead of a blur filter */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0
            bg-[radial-gradient(55%_45%_at_50%_30%,rgba(103,232,249,0.25),transparent_70%)]
            dark:bg-[radial-gradient(55%_45%_at_50%_30%,rgba(6,182,212,0.18),transparent_70%)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_60%,transparent_100%)] dark:bg-[radial-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)]" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-14 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-cyan-700 shadow-lg shadow-cyan-500/10 sm:text-sm dark:text-cyan-400">
          <Video className="h-4 w-4" aria-hidden="true" />
          Reels and short-form video
        </p>

        <h1
          id="reels-hero-heading"
          className="mx-auto max-w-5xl text-balance text-4xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white"
        >
          Instagram Reels editing and short-form video that{" "}
          <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
            stops the scroll
          </span>
        </h1>

        <p className="mx-auto max-w-3xl text-pretty text-base font-normal leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
          Short video is one of the fastest ways to reach new people. You record, I edit. As your reels editor for
          hire, I turn raw clips into polished 30 to 60 second reels, from 1 minute reels for Instagram to YouTube
          Shorts editing, with strong hooks, clean captions and pacing that keeps people watching.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
          <ServiceQuoteDialog
            service="Reels and short-form video editing"
            title="Request a reels editing quote"
            description="Tell me how many videos you'd like each month, which platforms they're for and the style you want, and I'll come back with a fixed quote."
            icon={<Video className="h-5 w-5" aria-hidden="true" />}
            buttonClassName={primaryBtn}
          >
            Start editing my reels
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </ServiceQuoteDialog>

          <a
            href={`#${NEXT_SECTION_ID}`}
            className="group flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-bold text-slate-800 transition-all hover:bg-slate-100 sm:w-auto dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            See what&apos;s included
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
        </div>

        {/* Preview: phone mockup + what you get */}
        <div className="mx-auto max-w-4xl pt-2 text-left">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-6 shadow-2xl shadow-slate-200/70 sm:p-8 dark:bg-slate-900/80 dark:shadow-black/40">
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
            />

            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
              {/* 9:16 phone mockup (illustration, always dark like a phone screen) */}
              <figure className="flex justify-center md:col-span-5">
                <div
                  aria-hidden="true"
                  className="relative flex h-[440px] w-64 flex-col justify-between overflow-hidden rounded-[36px] border-4 border-slate-800 bg-slate-950 p-4 shadow-2xl"
                >
                  <div className="z-20 flex items-center justify-between font-mono text-[10px] text-white">
                    <span className="flex items-center gap-1 rounded-full border border-cyan-500/30 bg-cyan-500/20 px-2 py-0.5 text-cyan-300">
                      9:16 vertical
                    </span>
                    <span className="text-slate-400">30–60 sec</span>
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-slate-950/40 via-slate-900/80 to-slate-950 p-6 text-center">
                    <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-xl shadow-cyan-400/30">
                      <Play className="ml-0.5 h-6 w-6 fill-slate-950" />
                    </span>
                    <div className="z-10 space-y-1.5">
                      <span className="inline-block -rotate-1 rounded bg-yellow-400 px-2 py-1 text-xs font-black uppercase tracking-wider text-slate-950 shadow-lg">
                        Wait for it
                      </span>
                      <p className="text-sm font-extrabold leading-tight text-white drop-shadow-md">
                        &ldquo;The one edit that makes people watch to the end&hellip;&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="z-20 space-y-1">
                    <div className="h-1 w-full overflow-hidden rounded-full bg-slate-800">
                      <div className="h-full w-2/5 bg-cyan-400" />
                    </div>
                    <div className="flex items-center justify-between font-mono text-[9px] text-slate-400">
                      <span>0:18</span>
                      <span>0:45</span>
                    </div>
                  </div>
                </div>
                <figcaption className="sr-only">
                  Illustration of an edited vertical reel with an on-screen hook and animated captions.
                </figcaption>
              </figure>

              {/* What you get */}
              <div className="space-y-5 md:col-span-7">
                <p className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 font-mono text-xs font-bold text-cyan-700 dark:text-cyan-400">
                  You record, I edit
                </p>

                <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl dark:text-white">
                  Polished short videos for every platform
                </h2>

                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Short-form video editing exported and sized for{" "}
                  <span className="font-semibold text-cyan-700 dark:text-cyan-400">Instagram Reels</span>,{" "}
                  <span className="font-semibold text-cyan-700 dark:text-cyan-400">TikTok</span> and{" "}
                  <span className="font-semibold text-cyan-700 dark:text-cyan-400">YouTube Shorts</span>.
                </p>

                <dl className="grid grid-cols-2 gap-3 pt-2">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-slate-950">
                    <dt className="flex items-center gap-1.5 font-mono text-[10px] uppercase text-slate-500 dark:text-slate-400">
                      <Timer className="h-3 w-3" aria-hidden="true" />
                      Video length
                    </dt>
                    <dd className="mt-0.5 text-xl font-black text-slate-900 dark:text-white">30–60 sec</dd>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-slate-950">
                    <dt className="flex items-center gap-1.5 font-mono text-[10px] uppercase text-slate-500 dark:text-slate-400">
                      <Clock className="h-3 w-3" aria-hidden="true" />
                      Turnaround
                    </dt>
                    <dd className="mt-0.5 text-xl font-black text-slate-900 dark:text-white">48–72 hours</dd>
                  </div>
                </dl>

                <ul className="space-y-2 pt-1">
                  {included.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 sm:text-sm dark:text-slate-300"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <li
              key={title}
              className="group space-y-3 rounded-3xl border border-slate-200 bg-white/80 p-6 text-left shadow-xl shadow-slate-200/50 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-black/20 dark:hover:bg-slate-900/90"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-50 text-cyan-600 transition-transform group-hover:scale-110 motion-reduce:group-hover:scale-100 dark:bg-slate-950 dark:text-cyan-400">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300">
                {title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}