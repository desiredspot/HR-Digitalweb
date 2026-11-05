import { ArrowRight, BarChart3, Calendar, CheckCircle2, Hash, Palette, Sparkles, Target, Video } from "lucide-react";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { QuoteDialogTrigger } from "@/components/services/quote/ServiceQuoteDialog";
import { SocialIncludedTabs } from "./SocialIncludedTabs";

// "What's included" section for /services/social-media-marketing.
// Server component; only the card switching is client-side (SocialIncludedTabs).
// Every deliverable and its details are in the HTML. id="content-plans" is the target
// of the hero's "Explore content plans" button. Buttons open the hero's quote dialog.

const included = [
  {
    key: "content-pillars",
    icon: Target,
    title: "Content pillars and strategy",
    badge: "Strategy",
    summary: "Audience research, topic pillars and a clear posting plan.",
    desc: "I research your audience and competitors, pick the 3 to 5 topics your brand should be known for, and turn them into a posting plan that builds authority and sends people to your offers.",
    footer: "Included in every plan",
    cadence: "Set up at the start, reviewed quarterly",
    highlights: ["Audience and competitor research", "3 to 5 core content pillars", "Offers and promotions built into the plan"],
  },
  {
    key: "monthly-calendar",
    icon: Calendar,
    title: "Monthly content calendar",
    badge: "Planning",
    summary: "Every post planned, written and approved before the month starts.",
    desc: "No more last-minute posting. You get a full month of content laid out with dates, topics, formats and visuals, ready for you to review and approve in advance.",
    footer: "Included in every plan",
    cadence: "Delivered before each month",
    highlights: ["Dates, topics and formats for every post", "Time to review and request changes", "Holidays and promotions included"],
  },
  {
    key: "post-design",
    icon: Palette,
    title: "Post and carousel design",
    badge: "Design",
    summary: "On-brand graphics and multi-slide carousels that stop the scroll.",
    desc: "Instagram post design and LinkedIn carousels made in your brand colours and fonts, so your feed looks consistent and professional and every post is instantly recognisable as yours.",
    footer: "Included in every plan",
    cadence: "Designed for every post in the calendar",
    highlights: ["Your brand colours, fonts and logo", "Educational multi-slide carousels", "Sized for Instagram, LinkedIn and Facebook"],
  },
  {
    key: "captions-hashtags",
    icon: Hash,
    title: "Captions and hashtags",
    badge: "Copywriting",
    summary: "Captions in your voice, with hashtags and a clear call to action.",
    desc: "LinkedIn content writing and Instagram captions that sound like you, lead with value and end with a clear next step, plus relevant hashtags researched for your niche.",
    footer: "Included in every plan",
    cadence: "Written for every post",
    highlights: ["Captions written in your brand voice", "Relevant, researched hashtags", "Calls to action to your website or offers"],
  },
  {
    key: "reels-video",
    icon: Video,
    title: "Reels and short-form video",
    badge: "Video",
    summary: "Edited Reels and short videos with captions and strong hooks.",
    desc: "Short-form video editing from your raw clips, with on-screen captions, a strong opening hook, music and clean transitions, ready for Instagram Reels, TikTok and YouTube Shorts.",
    footer: "Optional add-on",
    cadence: "Added to your plan when you want it",
    highlights: ["Animated on-screen captions", "Hook-first editing and music", "Exported for Reels, TikTok and Shorts"],
  },
  {
    key: "scheduling-reporting",
    icon: BarChart3,
    title: "Scheduling and monthly reports",
    badge: "Reporting",
    summary: "Posts scheduled for you, plus a clear monthly report.",
    desc: "I schedule every approved post across your platforms and send a plain-English monthly report on reach, engagement, profile visits and website clicks, with what we'll change next month.",
    footer: "Included in every plan",
    cadence: "Scheduled weekly, reported monthly",
    highlights: ["Posts scheduled across your platforms", "Reach, engagement and website clicks tracked", "Monthly review and next steps"],
  },
];

export function SocialIncluded() {
  return (
    <section
      id="content-plans"
      aria-labelledby="social-included-heading"
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
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Done-for-you social media
          </p>

          <h2
            id="social-included-heading"
            className="text-balance text-3xl font-black leading-none tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            What&apos;s{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              included
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            Everything you need for a consistent, professional social media presence, planned, created and scheduled
            for you.
          </p>
        </header>

        <SocialIncludedTabs
          cards={included.map(({ key, title, badge, summary, footer, icon: Icon }) => ({
            key,
            label: title,
            badge,
            summary,
            footer,
            icon: <Icon className="h-6 w-6" aria-hidden="true" />,
          }))}
          panels={included.map((c) => (
            <article
              key={c.key}
              aria-labelledby={`social-${c.key}-title`}
              className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 shadow-2xl shadow-slate-200/70 sm:p-10 dark:bg-slate-900/80 dark:shadow-black/40"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
              />

              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                <div className="space-y-4 lg:col-span-7">
                  <div className="flex items-center gap-3">
                    <span className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-3 text-cyan-600 dark:text-cyan-400">
                      <c.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                        What you get
                      </p>
                      <h3
                        id={`social-${c.key}-title`}
                        className="text-2xl font-black text-slate-900 dark:text-white"
                      >
                        {c.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">{c.desc}</p>

                  <ul className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
                    {c.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col items-center justify-center space-y-4 border-t border-slate-200 pt-6 text-center lg:col-span-5 lg:items-end lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 lg:text-right dark:border-slate-800">
                  <div className="space-y-1">
                    <p className="font-mono text-xs text-slate-500 dark:text-slate-400">How often</p>
                    <p className="text-xl font-black text-slate-900 dark:text-white">{c.cadence}</p>
                    <p className="font-mono text-xs text-emerald-700 dark:text-emerald-400">{c.footer}</p>
                  </div>

                  <QuoteDialogTrigger className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition-all hover:brightness-110">
                    Get a social media quote
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </QuoteDialogTrigger>
                </div>
              </div>
            </article>
          ))}
        />
      </div>
    </section>
  );
}