import { ArrowRight, CheckCircle2, Layers, ShieldCheck, Sparkles, Target, Terminal } from "lucide-react";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { QuoteDialogTrigger } from "@/components/services/quote/ServiceQuoteDialog";
import { SocialPlatformTabs } from "./SocialPlatformTabs";
import { FacebookIcon, InstagramIcon, LinkedInIcon, PinterestIcon, XIcon, YouTubeIcon } from "./PlatformIcons";

// "Platforms" section for /services/social-media-marketing.
// Server component; only the platform switching is client-side (SocialPlatformTabs).
// Every platform panel is in the HTML so Google reads all of them.
// Example posts are labelled as examples; no invented engagement numbers.

const platforms = [
  {
    key: "instagram",
    name: "Instagram",
    category: "Visual and short-form video",
    badge: "Visual",
    Icon: InstagramIcon,
    gradient: "from-pink-500 via-rose-500 to-amber-500",
    bestFor: "Local businesses, brands, coaches and creators",
    desc: "Single-image posts, educational carousels, Stories and edited Reels, designed to look great in the feed and earn saves and shares.",
    features: ["Educational carousels", "Reels editing (add-on)", "Stories and highlight covers"],
    format: "4:5 posts and carousels · 9:16 Reels",
    example: "Slide 1 of 5: 3 simple design rules that make your posts easier to read →",
  },
  {
    key: "facebook",
    name: "Facebook",
    category: "Community and local audiences",
    badge: "Community",
    Icon: FacebookIcon,
    gradient: "from-blue-600 to-cyan-500",
    bestFor: "Local services, events and community groups",
    desc: "Longer posts, blog and offer link shares, event promotion and page updates, scheduled through Meta Business Suite alongside Instagram.",
    features: ["Post and event scheduling", "Blog and offer link posts", "Meta Business Suite set-up"],
    format: "Image posts, link posts and events",
    example: "This month's local spotlight: how one small change helped a neighbourhood café get more bookings online…",
  },
  {
    key: "linkedin",
    name: "LinkedIn",
    category: "B2B and thought leadership",
    badge: "B2B",
    Icon: LinkedInIcon,
    gradient: "from-blue-500 to-indigo-600",
    bestFor: "B2B companies, consultants and founders",
    desc: "Text-first posts, PDF document carousels and founder-led content that builds authority and starts conversations with the right people.",
    features: ["PDF document carousels", "Founder and company page posts", "Calls to action for enquiries"],
    format: "Text posts and PDF carousels",
    example: "A simple 5-step framework for getting more enquiries from your website, without cold outreach.",
  },
  {
    key: "x",
    name: "X (Twitter)",
    category: "Short posts and threads",
    badge: "Threads",
    Icon: XIcon,
    gradient: "from-slate-400 via-slate-300 to-cyan-400",
    bestFor: "Tech, SaaS and personal brands",
    desc: "Short, punchy posts and multi-post threads that share ideas quickly and keep you part of the conversation in your niche.",
    features: ["Multi-post threads", "Short, punchy copy", "Timely, topical posts"],
    format: "Short posts and threads",
    example: "Thread: 7 small edits that make a landing page easier to say yes to 🧵👇",
  },
  {
    key: "pinterest",
    name: "Pinterest",
    category: "Visual search and discovery",
    badge: "Evergreen",
    Icon: PinterestIcon,
    gradient: "from-red-500 to-rose-600",
    bestFor: "E-commerce, home, food, wedding and lifestyle brands",
    desc: "Pin graphics and keyword-rich descriptions that work like a visual search engine, sending traffic to your site for months after you post.",
    features: ["Pin graphics designed to be clicked", "Keyword-rich pin descriptions", "Product pins from your catalogue"],
    format: "2:3 vertical pins",
    example: "The website layout guide: save this pin for your next website refresh.",
  },
  {
    key: "youtube-shorts",
    name: "YouTube Shorts",
    category: "Short video and subscribers",
    badge: "Video",
    Icon: YouTubeIcon,
    gradient: "from-red-600 to-amber-500",
    bestFor: "Educators, experts and businesses with video content",
    desc: "Vertical short videos cut from your clips, with on-screen captions, a strong hook in the first seconds and a reason to subscribe.",
    features: ["Vertical 9:16 edits", "On-screen captions and music", "Hooks that lead to your channel"],
    format: "9:16 short video",
    example: "[0:00–0:03] Stop making this website mistake if you want more enquiries.",
  },
];

export function SocialPlatforms() {
  return (
    <section
      id="platforms"
      aria-labelledby="social-platforms-heading"
      className={`${sectionBg.base} ${sectionDivider} relative isolate scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24`}
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
            <Layers className="h-3.5 w-3.5" aria-hidden="true" />
            Content made for each channel
          </p>

          <h2
            id="social-platforms-heading"
            className="text-balance text-3xl font-black leading-none tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Platforms I{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              create for
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            Instagram, Facebook, LinkedIn, X, Pinterest and YouTube Shorts. Pick a platform to see the formats I create
            and who it works best for.
          </p>
        </header>

        <SocialPlatformTabs
          tabs={platforms.map(({ key, name, category, badge, Icon }) => ({
            key,
            name,
            category,
            badge,
            icon: <Icon className="h-5 w-5" />,
          }))}
          panels={platforms.map((p) => (
            <article
              key={p.key}
              aria-labelledby={`social-platform-${p.key}-title`}
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-6 shadow-2xl shadow-slate-200/70 sm:p-10 dark:bg-slate-900/80 dark:shadow-black/40"
            >
              <span aria-hidden="true" className={`absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r ${p.gradient}`} />

              <div className="space-y-6">
                <div className="flex items-center gap-4 border-b border-slate-200 pb-6 dark:border-slate-800">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-50 text-cyan-600 shadow-lg dark:bg-slate-950 dark:text-cyan-400">
                    <p.Icon className="h-7 w-7" />
                  </span>
                  <div>
                    <p className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                      {p.category}
                    </p>
                    <h3
                      id={`social-platform-${p.key}-title`}
                      className="text-2xl font-black text-slate-900 sm:text-3xl dark:text-white"
                    >
                      {p.name}
                    </h3>
                  </div>
                </div>

                <p className="flex items-start gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-50 px-4 py-3 text-sm dark:bg-slate-950">
                  <Target className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                  <span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Best for:{" "}
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white">{p.bestFor}</span>
                  </span>
                </p>

                <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">{p.desc}</p>

                <div className="space-y-2.5">
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    What I create
                  </p>
                  <ul className="space-y-2.5">
                    {p.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs font-semibold text-slate-800 sm:text-sm dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Example post (always dark, like a phone screen) */}
                <figure className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950 p-4 sm:p-5">
                  <figcaption className="flex items-center justify-between gap-3 font-mono text-xs text-slate-400">
                    <span className="flex items-center gap-2 font-bold text-cyan-400">
                      <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
                      {p.format}
                    </span>
                    <span className="shrink-0 text-[10px] font-bold text-emerald-400">Example</span>
                  </figcaption>
                  <p className="rounded-xl border border-slate-800/80 bg-slate-900/90 p-3 text-xs italic text-slate-300">
                    &ldquo;{p.example}&rdquo;
                  </p>
                </figure>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6 dark:border-slate-800">
                <span className="flex items-center gap-1.5 font-mono text-xs text-slate-500 dark:text-slate-400">
                  <ShieldCheck className="h-4 w-4 text-emerald-700 dark:text-emerald-400" aria-hidden="true" />
                  Copy, design and scheduling
                </span>

                <QuoteDialogTrigger className="flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition-colors hover:bg-cyan-300">
                  Plan my {p.name} content
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </QuoteDialogTrigger>
              </div>
            </article>
          ))}
        />

        {/* Bottom CTA */}
        <aside
          aria-labelledby="social-platforms-cta-heading"
          className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 shadow-xl sm:p-10 md:flex-row dark:bg-slate-900/80 dark:shadow-2xl"
        >
          <div className="space-y-2 text-center md:text-left">
            <h3
              id="social-platforms-cta-heading"
              className="flex items-center justify-center gap-2 text-xl font-black text-slate-900 sm:text-2xl md:justify-start dark:text-white"
            >
              <Sparkles className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
              Not sure which platforms are right for you?
            </h3>
            <p className="text-xs text-slate-600 sm:text-sm dark:text-slate-400">
              You don&apos;t need to be everywhere. I&apos;ll recommend the 1 to 3 platforms where your customers
              actually spend their time.
            </p>
          </div>

          <QuoteDialogTrigger className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-xs font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:brightness-110 sm:text-sm">
            Get a social media proposal
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </QuoteDialogTrigger>
        </aside>
      </div>
    </section>
  );
}