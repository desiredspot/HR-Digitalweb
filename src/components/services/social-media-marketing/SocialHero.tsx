import { ArrowDown, ArrowRight, Calendar, Link2, MousePointerClick, Share2, Users } from "lucide-react";
import { sectionBg } from "@/lib/section-bg";
import { ServiceQuoteDialog } from "@/components/services/quote/ServiceQuoteDialog";
import { SocialPreviewTabs } from "./SocialPreviewTabs";

// Hero for /services/social-media-marketing.
// Server component; only the quote dialog and the platform toggle are client-side.
// Primary keyword "social media marketing services" is in the H1. Secondary keywords
// (social media content creation, Instagram post design, LinkedIn content writing,
// social media management for small business) appear naturally in the intro, preview and cards.

// The section right after this hero should have this id (the second button scrolls to it).
const NEXT_SECTION_ID = "content-plans";

const pillars = [
  {
    icon: Calendar,
    title: "A weekly content plan",
    desc: "A consistent posting schedule built around your brand pillars, offers and the dates that matter to your business.",
  },
  {
    icon: Users,
    title: "Posts that build trust",
    desc: "Helpful, educational social media content creation that shows you know your stuff and gives people a reason to follow.",
  },
  {
    icon: MousePointerClick,
    title: "Traffic to your offers",
    desc: "Clear calls to action that turn scrollers into website visitors, enquiries and bookings.",
  },
];

// What the preview shows: how content is planned for each platform, not invented engagement numbers.
const platforms = [
  {
    name: "LinkedIn",
    formats: "Text posts, PDF carousels, images",
    bestFor: "B2B, consultants and founders",
    tone: "Expert, practical, personal",
    goal: "Authority and enquiries",
    post: "Most small businesses don't have a marketing problem. They have a consistency problem. Here's the simple 3-post weekly plan we use to stay visible without burning out ↓",
  },
  {
    name: "Instagram",
    formats: "Carousels, single images, Stories",
    bestFor: "Local businesses, brands and coaches",
    tone: "Visual, friendly, on-brand",
    goal: "Followers, saves and DMs",
    post: "Swipe for 5 signs your website is costing you customers → Save this for your next website review, and tap the link in bio for a free check.",
  },
  {
    name: "Facebook",
    formats: "Image posts, link posts, events",
    bestFor: "Local services and community audiences",
    tone: "Warm, local, helpful",
    goal: "Bookings and local awareness",
    post: "Booking up fast for November! If you've been putting off that website refresh, now's the time. Comment “INFO” or message us and we'll send you the details.",
  },
];

function PlatformPanel({ p }: { p: (typeof platforms)[number] }) {
  const tiles = [
    { label: "Formats", value: p.formats },
    { label: "Best for", value: p.bestFor },
    { label: "Tone", value: p.tone },
    { label: "Goal", value: p.goal },
  ];

  return (
    <>
      <ul className="grid grid-cols-2 gap-4 pt-6 sm:grid-cols-4">
        {tiles.map((t) => (
          <li
            key={t.label}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800/80 dark:bg-slate-950/80"
          >
            <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400">{t.label}</p>
            <p className="mt-1 text-sm font-black text-slate-900 dark:text-white">{t.value}</p>
          </li>
        ))}
      </ul>

      {/* Example post */}
      <figure className="mt-6 space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
        <figcaption className="flex items-center justify-between gap-3 font-mono text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
            <span className="font-bold text-slate-800 dark:text-slate-200">Example {p.name} post</span>
          </span>
          <span className="font-semibold text-cyan-700 dark:text-cyan-400">Written in your voice</span>
        </figcaption>

        <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">&ldquo;{p.post}&rdquo;</p>

        <p className="flex items-center gap-1.5 border-t border-slate-200 pt-3 text-[11px] font-bold text-cyan-700 dark:border-slate-900 dark:text-cyan-300">
          <Link2 className="h-3.5 w-3.5" aria-hidden="true" />
          Every post ends with a clear next step
        </p>
      </figure>
    </>
  );
}

const primaryBtn =
  "group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:scale-105 hover:brightness-110 active:scale-95 motion-reduce:hover:scale-100 sm:w-auto";

export function SocialHero() {
  return (
    <section
      aria-labelledby="social-hero-heading"
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
          <Share2 className="h-4 w-4" aria-hidden="true" />
          Social media marketing
        </p>

        <h1
          id="social-hero-heading"
          className="mx-auto max-w-5xl text-balance text-4xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white"
        >
          Social media marketing services that build your brand{" "}
          <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
            every week
          </span>
        </h1>

        <p className="mx-auto max-w-3xl text-pretty text-base font-normal leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
          Random posting doesn&apos;t grow a business. A clear content plan does. I create on-brand posts, carousels
          and captions for Instagram, LinkedIn and Facebook that educate your audience, build trust and send people to
          your website and offers. Social media management for small businesses, without the guesswork.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
          <ServiceQuoteDialog
            service="Social media marketing"
            title="Request a social media quote"
            description="Tell me which platforms you use, how often you'd like to post and what you want to promote, and I'll come back with a fixed quote."
            icon={<Share2 className="h-5 w-5" aria-hidden="true" />}
            buttonClassName={primaryBtn}
          >
            Get a social media quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </ServiceQuoteDialog>

          <a
            href={`#${NEXT_SECTION_ID}`}
            className="group flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-bold text-slate-800 transition-all hover:bg-slate-100 sm:w-auto dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            Explore content plans
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
        </div>

        {/* Preview: how content is planned for each platform */}
        <div className="mx-auto max-w-5xl pt-2 text-left">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-6 shadow-2xl shadow-slate-200/70 sm:p-8 dark:bg-slate-900/80 dark:shadow-black/40">
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
            />

            <SocialPreviewTabs
              header={
                <div className="flex items-center gap-3">
                  <span className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-2.5 text-cyan-600 dark:text-cyan-400">
                    <Calendar className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                      Planned for each platform
                    </p>
                    <h2 className="text-base font-bold text-slate-900 sm:text-lg dark:text-white">
                      Your weekly content, platform by platform
                    </h2>
                  </div>
                </div>
              }
              labels={platforms.map((p) => p.name)}
              panels={platforms.map((p) => (
                <PlatformPanel key={p.name} p={p} />
              ))}
            />
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