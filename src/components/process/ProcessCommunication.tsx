import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown, ClipboardList, Clock, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { sectionBg, sectionDivider } from "@/lib/section-bg";

// "How we stay in touch" section for /process.
// Pure server component, no client JS: each channel is a native <details> element,
// so all of it is in the HTML and works with the keyboard.

const channels = [
  {
    key: "messaging",
    icon: MessageSquare,
    title: "Updates by email, WhatsApp or Slack",
    badge: "Your choice",
    tag: "Email · WhatsApp · Slack",
    desc: "Pick the tool your team already uses every day, and that's where I'll keep you updated.",
    points: [
      "A shared Slack channel or WhatsApp chat, if you prefer",
      "Short email summaries after each milestone",
      "Quick screen-recorded videos to walk you through designs and builds",
    ],
  },
  {
    key: "tracker",
    icon: ClipboardList,
    title: "A shared project tracker",
    badge: "Always visible",
    tag: "Notion · Trello · ClickUp",
    desc: "A simple board showing what's done, what's in progress and what's next, so you can check in any time.",
    points: [
      "A task board in Notion, Trello or ClickUp",
      "Clear milestones and expected dates",
      "One place for files, feedback and approvals",
    ],
  },
  {
    key: "replies",
    icon: Clock,
    title: "Replies within one business day",
    badge: "Quick replies",
    tag: "Within 1 business day",
    desc: "Questions and feedback get a reply within one business day, so your project never stalls.",
    points: [
      "A reply within one business day, Monday to Friday",
      "Urgent issues around launch handled the same day",
      "Regular progress updates, even when you don't ask",
    ],
  },
];

export function ProcessCommunication() {
  return (
    <section
      id="stay-in-touch"
      aria-labelledby="process-comms-heading"
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

      <div className="relative mx-auto max-w-6xl space-y-16">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
            <MessageSquare className="h-3.5 w-3.5" aria-hidden="true" />
            Communication
          </p>

          <h2
            id="process-comms-heading"
            className="text-balance text-4xl font-black leading-none tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            How we{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              stay in touch
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            Updates by email, WhatsApp or Slack, a shared project tracker, and replies within one business day.
          </p>
        </header>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* Summary card */}
          <div className="relative flex flex-col justify-between space-y-8 overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 shadow-2xl shadow-slate-200/70 lg:col-span-5 dark:bg-slate-900/80 dark:shadow-black/40">
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
            />

            <div className="space-y-4">
              <p className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                No radio silence
              </p>
              <h3 className="text-2xl font-black leading-tight text-slate-900 sm:text-3xl dark:text-white">
                Clear, reliable communication at every step
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                You&apos;ll never have to guess where your project stands. I combine quick messages, short video
                walkthroughs and a shared tracker, so you always know what&apos;s happening.
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-3 border-t border-slate-200 pt-4 dark:border-slate-800">
              <div className="space-y-1 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/80">
                <dt className="font-mono text-[10px] font-bold uppercase text-cyan-700 dark:text-cyan-400">Reply time</dt>
                <dd className="text-xl font-black text-slate-900 dark:text-white">1 business day</dd>
              </div>
              <div className="space-y-1 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/80">
                <dt className="font-mono text-[10px] font-bold uppercase text-cyan-700 dark:text-cyan-400">Progress</dt>
                <dd className="text-xl font-black text-slate-900 dark:text-white">Shared tracker</dd>
              </div>
            </dl>

            <div className="flex items-center gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-50 p-4 dark:bg-slate-950">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-slate-950">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-xs">
                <span className="block font-bold text-slate-900 dark:text-white">Direct access</span>
                <span className="text-[11px] text-slate-600 dark:text-slate-400">
                  You talk to me, the person doing the work
                </span>
              </p>
            </div>
          </div>

          {/* Channels (native accordion) */}
          <div className="flex flex-col justify-center space-y-4 lg:col-span-7">
            {channels.map(({ key, icon: Icon, title, badge, tag, desc, points }, idx) => (
              <details
                key={key}
                open={idx === 0}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-slate-300 open:border-cyan-500 open:shadow-xl open:shadow-cyan-500/10 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-700 dark:open:border-cyan-400 dark:open:bg-slate-900"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-cyan-500 [&::-webkit-details-marker]:hidden">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-cyan-600 transition-colors group-open:border-cyan-300 group-open:bg-cyan-400 group-open:text-slate-950 dark:border-slate-800 dark:bg-slate-950 dark:text-cyan-400 dark:group-open:text-slate-950">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="mb-1 flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                          {badge}
                        </span>
                        <span className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[10px] text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
                          {tag}
                        </span>
                      </p>
                      <h3 className="text-base font-bold text-slate-900 transition-colors group-open:text-cyan-700 sm:text-lg dark:text-white dark:group-open:text-cyan-300">
                        {title}
                      </h3>
                    </div>
                  </div>
                  <span
                    aria-hidden="true"
                    className="shrink-0 rounded-xl border border-slate-200 bg-slate-50 p-2 text-slate-500 transition-transform duration-300 group-open:rotate-180 group-open:border-cyan-500/40 group-open:text-cyan-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400 dark:group-open:text-cyan-400"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </summary>

                <div className="space-y-4 border-t border-slate-100 px-6 pb-6 pt-4 dark:border-slate-800/80">
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{desc}</p>
                  <ul className="space-y-2">
                    {points.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-xs font-medium text-slate-800 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-200"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* CTA */}
        <aside
          aria-labelledby="process-comms-cta-heading"
          className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 text-center shadow-xl sm:p-10 md:flex-row md:text-left dark:bg-slate-900/90 dark:shadow-2xl"
        >
          <div className="space-y-1.5">
            <p className="flex items-center justify-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 md:justify-start dark:text-cyan-400">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Start your project
            </p>
            <h3 id="process-comms-cta-heading" className="text-2xl font-black text-slate-900 sm:text-3xl dark:text-white">
              Want to work with someone who actually replies?
            </h3>
            <p className="max-w-xl text-xs text-slate-600 sm:text-sm dark:text-slate-400">
              Book a free discovery call to talk through your project, timeline and questions.
            </p>
          </div>

          <Link
            href={siteConfig.bookingUrl}
            className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-xs font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:brightness-110 sm:text-sm"
          >
            Book a free discovery call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </aside>
      </div>
    </section>
  );
}