import Link from "next/link";
import { ArrowRight, CalendarDays, Clock, Mail, MapPin, MessageSquare } from "lucide-react";
import { sectionBg } from "@/lib/section-bg";
import { contactDetails } from "@/lib/contact";
import { ContactForm } from "./ContactForm";

// The whole /contact page: H1, booking button, the enquiry form (client island) and
// a side column with other ways to get in touch and what happens next.
// Contact details live in src/lib/contact.ts.

const steps = [
  {
    title: "I read your message and look at your current site.",
    desc: "If you shared a website, I check its speed, layout and basic SEO before we talk.",
  },
  {
    title: "We have a short call about your goals.",
    desc: "A free 30-minute call to agree on who it's for, what it needs and when you need it.",
  },
  {
    title: "You get a clear plan and fixed quote within 48 hours.",
    desc: "A written list of what's included, the price and the timeline. No obligation.",
  },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export function ContactHero() {
  const { email, whatsapp, whatsappDisplay, location, hours, replyTime, calendarUrl, acceptingProjects } =
    contactDetails;
  const bookingHref = calendarUrl || "#contact-form";
  const bookingExternal = Boolean(calendarUrl);

  const channel = "flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-slate-950";
  const channelIcon = "shrink-0 rounded-xl border p-2.5";
  const channelLabel = "block font-mono text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400";

  return (
    <section
      aria-labelledby="contact-heading"
      className={`${sectionBg.base} relative isolate overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-40`}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0
            bg-[radial-gradient(55%_40%_at_50%_15%,rgba(103,232,249,0.22),transparent_70%)]
            dark:bg-[radial-gradient(55%_40%_at_50%_15%,rgba(6,182,212,0.16),transparent_70%)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_15%,#000_60%,transparent_100%)] dark:bg-[radial-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)]" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-14">
        {/* Status strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 font-mono text-[11px] text-slate-600 shadow-lg backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300">
          {acceptingProjects ? (
            <p className="flex items-center gap-2.5 font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-500" />
              </span>
              Taking on new projects
            </p>
          ) : (
            <span />
          )}
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>
              <strong className="text-cyan-700 dark:text-cyan-400">Reply:</strong> {replyTime}
            </span>
            <span aria-hidden="true" className="hidden text-slate-300 sm:inline dark:text-slate-700">
              •
            </span>
            <span>
              <strong className="text-teal-700 dark:text-teal-300">Fixed quote:</strong> within 48 hours of our call
            </span>
          </p>
        </div>

        {/* Header */}
        <header className="mx-auto max-w-4xl space-y-6 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-cyan-700 shadow-lg shadow-cyan-500/10 sm:text-sm dark:text-cyan-400">
            <MessageSquare className="h-4 w-4" aria-hidden="true" />
            Contact • Hire a web developer
          </p>
          <h1
            id="contact-heading"
            className="text-balance text-4xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white"
          >
            Let&apos;s build something that{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              grows your business
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-pretty text-base leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
            Tell me about your project and I&apos;ll reply {replyTime} with next steps. Prefer to talk? Book a free
            30-minute strategy call.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
            <Link
              href={bookingHref}
              {...(bookingExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:brightness-110 sm:w-auto"
            >
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              Book a free strategy call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
              {bookingExternal ? "or send your project details below" : "send your details below and I'll suggest call times"}
            </span>
          </div>
        </header>

        {/* Form + side column */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          <div
            id="contact-form"
            className="relative scroll-mt-28 overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-6 shadow-2xl shadow-slate-200/70 sm:p-10 lg:col-span-7 dark:bg-slate-900/90 dark:shadow-black/40"
          >
            <span aria-hidden="true" className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500" />
            <div className="mb-8 space-y-1 border-b border-slate-200 pb-5 dark:border-slate-800">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                Project enquiry
              </p>
              <h2 className="text-2xl font-black text-slate-900 sm:text-3xl dark:text-white">Tell me about your project</h2>
            </div>
            <ContactForm />
          </div>

          <div className="space-y-8 lg:col-span-5">
            <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/90">
              <div className="border-b border-slate-200 pb-4 dark:border-slate-800">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                  Direct contact
                </p>
                <h2 className="mt-1 text-xl font-black text-slate-900 sm:text-2xl dark:text-white">Other ways to reach me</h2>
              </div>

              <ul className="space-y-4 text-sm">
                <li className={channel}>
                  <span className={`${channelIcon} border-cyan-500/20 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400`}>
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className={channelLabel}>Email</span>
                    <a href={`mailto:${email}`} className="font-bold text-slate-900 hover:text-cyan-700 dark:text-white dark:hover:text-cyan-400">
                      {email}
                    </a>
                  </span>
                </li>
                {whatsapp && (
                  <li className={channel}>
                    <span className={`${channelIcon} border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400`}>
                      <WhatsAppIcon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className={channelLabel}>WhatsApp</span>
                      <a
                        href={`https://wa.me/${whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-slate-900 hover:text-emerald-700 dark:text-white dark:hover:text-emerald-400"
                      >
                        {whatsappDisplay || `+${whatsapp}`}
                      </a>
                    </span>
                  </li>
                )}
                <li className={channel}>
                  <span className={`${channelIcon} border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400`}>
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className={channelLabel}>Based in</span>
                    <span className="block font-bold text-slate-900 dark:text-white">{location}</span>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400">Working with clients worldwide</span>
                  </span>
                </li>
                <li className={channel}>
                  <span className={`${channelIcon} border-teal-500/20 bg-teal-500/10 text-teal-600 dark:text-teal-300`}>
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className={channelLabel}>Working hours</span>
                    <span className="block font-bold text-slate-900 dark:text-white">{hours}</span>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400">Replies {replyTime}</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="relative space-y-6 overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 shadow-xl dark:bg-slate-900/90">
              <span aria-hidden="true" className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500" />
              <div className="border-b border-slate-200 pb-3 dark:border-slate-800">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                  3 simple steps
                </p>
                <h2 className="mt-1 text-xl font-black text-slate-900 sm:text-2xl dark:text-white">What happens next?</h2>
              </div>
              <ol className="space-y-4">
                {steps.map((s, i) => (
                  <li key={s.title} className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-xs font-black text-cyan-700 dark:text-cyan-400">
                      {i + 1}
                    </span>
                    <div className="text-sm">
                      <h3 className="font-bold text-slate-900 dark:text-white">{s.title}</h3>
                      <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-400">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <Link href="/process" className="inline-flex items-center gap-1 text-xs font-bold text-cyan-700 hover:underline dark:text-cyan-400">
                See the full process
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}