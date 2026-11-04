import { CheckCircle2, FolderOpen, KeyRound, Lightbulb, Lock, MessageSquare, Sparkles } from "lucide-react";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { NeedsTabs } from "./NeedsTabs";

// "What I need from you" section for /process.
// Server component; only the card switching is client-side (NeedsTabs).
// Every item, checklist and sharing tip is in the HTML.

const needs = [
  {
    key: "brand-files",
    icon: FolderOpen,
    title: "Logo and brand files",
    badge: "Assets",
    summary: "Your logo, colours, fonts and any brand guidelines or photos you already have.",
    footer: "Before design starts",
    why: "So your new website or campaign looks like your brand on every screen, from the first mock-up.",
    checklist: [
      "Logo as SVG, AI or a high-resolution PNG",
      "Brand colours (hex codes, if you have them)",
      "Font names or font files",
      "Photos, images or brand guidelines you already use",
    ],
    share: [
      "Drop everything into a shared Google Drive or Dropbox folder",
      "No logo yet? Tell me and we'll plan for it",
      "Missing something? I'll suggest good alternatives",
    ],
  },
  {
    key: "account-access",
    icon: KeyRound,
    title: "Access to your accounts",
    badge: "Access",
    summary: "Your domain, hosting, analytics, CRM or email platform, if you already have them.",
    footer: "Before build and launch",
    why: "So I can connect your domain, analytics and CRM without delays on launch day.",
    checklist: [
      "Domain registrar (GoDaddy, Namecheap, Cloudflare, etc.)",
      "Web hosting, if you have it",
      "Google Analytics and Search Console",
      "CRM or email marketing platform",
    ],
    share: [
      "Invite me as a user or delegate where the platform allows it",
      "Never send passwords by plain email",
      "You can remove my access once the project is finished",
    ],
  },
  {
    key: "timely-feedback",
    icon: MessageSquare,
    title: "Timely feedback",
    badge: "Collaboration",
    summary: "Clear feedback at each milestone: wireframes, designs, copy and the final preview.",
    footer: "At each milestone",
    why: "Quick, clear feedback keeps the project on schedule and means you get exactly what you want.",
    checklist: [
      "Feedback on wireframes and designs within 1 to 2 working days",
      "One set of combined notes from all decision makers",
      "Copy and content approved before development",
      "Final sign-off on the preview before launch",
    ],
    share: [
      "Comment right on the preview link or the Google Doc",
      "Screenshots with notes are perfect",
      "Not sure about something? Ask, I'm happy to explain",
    ],
  },
];

export function ProcessNeeds() {
  return (
    <section
      id="what-i-need"
      aria-labelledby="process-needs-heading"
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

      <div className="relative mx-auto max-w-6xl space-y-14">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Smooth onboarding
          </p>

          <h2
            id="process-needs-heading"
            className="text-balance text-3xl font-black leading-none tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            What I need{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              from you
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            Your logo and brand files, access to your existing accounts (domain, hosting, CRM), and timely feedback at
            each milestone. That&apos;s it.
          </p>
        </header>

        <NeedsTabs
          cards={needs.map(({ key, title, badge, summary, footer, icon: Icon }) => ({
            key,
            label: title,
            badge,
            summary,
            footer,
            icon: <Icon className="h-6 w-6" aria-hidden="true" />,
          }))}
          panels={needs.map((n) => (
            <article
              key={n.key}
              aria-labelledby={`needs-${n.key}-title`}
              className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-6 shadow-2xl shadow-slate-200/70 sm:p-10 dark:bg-slate-900/80 dark:shadow-black/40"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
              />

              <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
                {/* What to have ready */}
                <div className="space-y-6 lg:col-span-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                      <n.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                        Preparation guide
                      </p>
                      <h3 id={`needs-${n.key}-title`} className="text-2xl font-extrabold text-slate-900 dark:text-white">
                        {n.title}
                      </h3>
                    </div>
                  </div>

                  <p className="flex items-start gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-50 p-4 text-sm dark:bg-slate-950/80">
                    <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                    <span>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Why it matters:{" "}
                      </span>
                      <span className="font-medium text-slate-800 dark:text-slate-200">{n.why}</span>
                    </span>
                  </p>

                  <div className="space-y-2.5">
                    <p className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Good to have ready
                    </p>
                    <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {n.checklist.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs font-semibold text-slate-800 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-200"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* How to share it */}
                <aside
                  aria-label={`How to share: ${n.title}`}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:col-span-5 dark:border-slate-800 dark:bg-slate-950"
                >
                  <p className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                    <Lock className="h-4 w-4" aria-hidden="true" />
                    How to share it
                  </p>
                  <ul className="mt-4 space-y-3">
                    {n.share.map((tip) => (
                      <li key={tip} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500 dark:bg-cyan-400"
                        />
                        {tip}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 border-t border-slate-200 pt-4 font-mono text-[11px] text-slate-500 dark:border-slate-800 dark:text-slate-400">
                    Everything you share stays private.
                  </p>
                </aside>
              </div>
            </article>
          ))}
        />
      </div>
    </section>
  );
}