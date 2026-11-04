import { ArrowRight, CheckCircle2, Clock, GraduationCap, Mic, Play, Scissors, ShoppingBag, Sparkles, Tv, Video, Zap } from "lucide-react";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { QuoteDialogTrigger } from "@/components/services/quote/ServiceQuoteDialog";
import { ReelsCategoryTabs } from "./ReelsCategoryTabs";

// "What I edit" section for /services/reels-video-editing.
// Server component; only the card switching is client-side (ReelsCategoryTabs).
// Every category and its details are in the HTML. id="whats-included" is the target
// of the hero's "See what's included" button. Buttons open the hero's quote dialog.
// The phone mockup in each panel is an illustration, not a playable video.

const categories = [
  {
    key: "reels-shorts-tiktoks",
    icon: Tv,
    title: "Reels, Shorts and TikToks",
    badge: "Multi-platform",
    summary: "30 to 60 second vertical videos made for Instagram, Facebook, YouTube and TikTok.",
    desc: "Your raw footage edited into punchy 9:16 videos with a strong opening hook, animated captions, motion graphics and sound effects, sized correctly for each platform.",
    format: "9:16 vertical",
    specs: [
      "Exported for Instagram and Facebook Reels, YouTube Shorts and TikTok",
      "Word-by-word animated captions",
      "Sound effects, zooms and jump cuts",
    ],
    hookLabel: "Watch this",
    headline: "3 editing tricks that keep people watching 🚀",
    caption: "Most viewers decide in the first 3 seconds…",
  },
  {
    key: "talking-head",
    icon: GraduationCap,
    title: "Talking-head and educational reels",
    badge: "Coaches and experts",
    summary: "Clean, engaging edits for coaches, consultants and industry experts.",
    desc: "Turn your to-camera videos into tight, easy-to-follow lessons. I cut the pauses and filler words, add B-roll and on-screen callouts, and keep the pace up.",
    format: "9:16 vertical",
    specs: ["Pauses and filler words removed", "B-roll and icon animations", "Key takeaways highlighted on screen"],
    hookLabel: "Quick tip",
    headline: "How to price your services without guessing 💡",
    caption: "Stop charging by the hour. Here's a simpler way…",
  },
  {
    key: "product-testimonial",
    icon: ShoppingBag,
    title: "Product, service and testimonial videos",
    badge: "Promotional",
    summary: "Show off your products, services and happy customers.",
    desc: "Product demos, service walkthroughs and customer reviews edited into short promotional videos, with on-screen highlights and a clear call to action at the end.",
    format: "9:16 vertical and 1:1 square",
    specs: [
      "Customer quotes highlighted on screen",
      "Product close-ups, stabilised and colour corrected",
      "End screen with your offer and website",
    ],
    hookLabel: "Your review here",
    headline: "Customer story: your client's words on screen ⭐",
    caption: "Their quote, highlighted and captioned…",
  },
  {
    key: "podcast-webinar",
    icon: Mic,
    title: "Podcast and webinar clips",
    badge: "Repurposing",
    summary: "The best moments from long podcasts, interviews and webinars.",
    desc: "Send me your full podcast or webinar recording. I pick the strongest moments, reframe them for vertical screens and turn one recording into a batch of ready-to-post clips.",
    format: "9:16 split-screen",
    specs: ["Best moments picked by hand", "Two-speaker split-screen layout", "Captioned clips ready to share"],
    hookLabel: "Clip",
    headline: "The one change that grew our organic reach 🎙️",
    caption: "From episode 42 of the podcast…",
  },
];

function PhoneMockup({ c }: { c: (typeof categories)[number] }) {
  return (
    <figure className="flex justify-center lg:col-span-5">
      <div
        aria-hidden="true"
        className="relative flex h-[440px] w-64 flex-col justify-between overflow-hidden rounded-[36px] border-4 border-slate-800 bg-slate-950 p-4 shadow-2xl"
      >
        <div className="z-20 flex items-center justify-between font-mono text-[10px] text-white">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/20 px-2 py-0.5 text-cyan-300">{c.format}</span>
          <span className="text-slate-400">1080p</span>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-slate-950/40 via-slate-900/80 to-slate-950 p-6 text-center">
          <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-xl shadow-cyan-400/30">
            <Play className="ml-0.5 h-6 w-6 fill-slate-950" />
          </span>
          <div className="z-10 max-w-full space-y-2">
            <span className="inline-block -rotate-1 rounded bg-yellow-400 px-2.5 py-1 text-xs font-black uppercase tracking-wider text-slate-950 shadow-lg">
              {c.hookLabel}
            </span>
            <p className="text-xs font-black leading-tight text-white drop-shadow-md">{c.headline}</p>
            <p className="line-clamp-2 text-[11px] text-slate-300">&ldquo;{c.caption}&rdquo;</p>
          </div>
        </div>

        <div className="z-20 space-y-1.5">
          <div className="h-1 w-full overflow-hidden rounded-full bg-slate-800">
            <div className="h-full w-1/2 bg-cyan-400" />
          </div>
          <div className="flex items-center justify-between font-mono text-[9px] text-slate-400">
            <span className="flex items-center gap-1 text-cyan-400">
              <Scissors className="h-3 w-3" /> Cut, captioned and mixed
            </span>
            <span>0:22</span>
          </div>
        </div>
      </div>
      <figcaption className="sr-only">Illustration of an edited {c.title.toLowerCase()} example.</figcaption>
    </figure>
  );
}

export function ReelsCategories() {
  return (
    <section
      id="whats-included"
      aria-labelledby="reels-categories-heading"
      className={`${sectionBg.alt} ${sectionDivider} relative isolate scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24`}
    >
      {/* Ambient glow + dot grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0
            bg-[radial-gradient(55%_45%_at_50%_50%,rgba(103,232,249,0.16),transparent_70%)]
            dark:bg-[radial-gradient(55%_45%_at_50%_50%,rgba(6,182,212,0.13),transparent_70%)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:28px_28px] dark:bg-[radial-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)]" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-14">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
            <Video className="h-3.5 w-3.5" aria-hidden="true" />
            Short-form video editing
          </p>

          <h2
            id="reels-categories-heading"
            className="text-balance text-3xl font-black leading-none tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            What I{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              edit
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            Send me raw phone footage, podcast recordings or client interviews. I&apos;ll edit them into 30 to 60
            second reels that are ready to post.
          </p>
        </header>

        <ReelsCategoryTabs
          cards={categories.map(({ key, title, badge, summary, format, icon: Icon }) => ({
            key,
            label: title,
            badge,
            summary,
            footer: format,
            icon: <Icon className="h-6 w-6" aria-hidden="true" />,
          }))}
          panels={categories.map((c) => (
            <article
              key={c.key}
              aria-labelledby={`reels-${c.key}-title`}
              className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 shadow-2xl shadow-slate-200/70 sm:p-12 dark:bg-slate-900/80 dark:shadow-black/40"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
              />

              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
                <div className="space-y-6 lg:col-span-7">
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 shadow-lg dark:text-cyan-400">
                      <c.icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                        {c.badge}
                      </p>
                      <h3
                        id={`reels-${c.key}-title`}
                        className="text-2xl font-black text-slate-900 sm:text-3xl dark:text-white"
                      >
                        {c.title}
                      </h3>
                    </div>
                  </div>

                  <p className="flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-50 p-3.5 text-xs font-semibold text-cyan-800 dark:bg-slate-950 dark:text-cyan-300">
                    <Zap className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                    {c.summary}
                  </p>

                  <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">{c.desc}</p>

                  <div className="space-y-2.5 pt-2">
                    <p className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      What&apos;s included
                    </p>
                    <ul className="space-y-2.5">
                      {c.specs.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs font-semibold text-slate-800 sm:text-sm dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <QuoteDialogTrigger className="flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition-colors hover:bg-cyan-300">
                      Get a quote for this
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </QuoteDialogTrigger>
                    <span className="flex items-center gap-1.5 font-mono text-xs text-slate-500 dark:text-slate-400">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      Delivered in 48–72 hours
                    </span>
                  </div>
                </div>

                <PhoneMockup c={c} />
              </div>
            </article>
          ))}
        />

        {/* Bottom CTA */}
        <aside
          aria-labelledby="reels-categories-cta-heading"
          className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 shadow-xl sm:p-10 md:flex-row dark:bg-slate-900/80 dark:shadow-2xl"
        >
          <div className="space-y-2 text-center md:text-left">
            <h3
              id="reels-categories-cta-heading"
              className="flex items-center justify-center gap-2 text-xl font-black text-slate-900 sm:text-2xl md:justify-start dark:text-white"
            >
              <Sparkles className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
              Got raw footage ready to edit?
            </h3>
            <p className="text-xs text-slate-600 sm:text-sm dark:text-slate-400">
              I turn raw clips, Zoom interviews and podcast recordings into reels people actually watch.
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