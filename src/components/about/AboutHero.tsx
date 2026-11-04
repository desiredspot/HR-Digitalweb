import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck, Compass, Inbox, PhoneCall, Target, TrendingUp } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { sectionBg } from "@/lib/section-bg";

// ─── About settings ──────────────────────────────────────────────────────────
// TODO: confirm these details. A real photo builds far more trust than a logo,
// so add one when you can (put it in /public, e.g. /public/about/founder.jpg).
const FOUNDER_NAME = "Hasnain Raza";
const FOUNDER_ROLE = "Founder and lead developer";
const FOUNDER_PHOTO = ""; // e.g. "/about/founder.jpg"
// ─────────────────────────────────────────────────────────────────────────────

const outcomes = [
  { title: "Inbound leads", desc: "Forms built to convert", icon: Inbox, color: "text-cyan-600 dark:text-cyan-400" },
  { title: "Direct bookings", desc: "Calendars synced to your CRM", icon: CalendarCheck, color: "text-teal-600 dark:text-teal-400" },
  { title: "Predictable sales", desc: "Automated CRM pipelines", icon: TrendingUp, color: "text-blue-600 dark:text-blue-400" },
];

// Person + AboutPage structured data: helps Google connect you to your business.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: `${siteConfig.url}/about`,
  mainEntity: {
    "@type": "Person",
    name: FOUNDER_NAME,
    jobTitle: FOUNDER_ROLE,
    worksFor: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    ...(FOUNDER_PHOTO ? { image: `${siteConfig.url}${FOUNDER_PHOTO}` } : {}),
  },
};

export function AboutHero() {
  return (
    <section
      aria-labelledby="about-heading"
      className={`${sectionBg.base} relative isolate overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-40`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      {/* Ambient glows: radial gradients instead of blur filters (same look, cheaper to paint) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(60%_50%_at_50%_0%,rgba(103,232,249,0.25),transparent_70%),radial-gradient(30%_30%_at_100%_45%,rgba(94,234,212,0.18),transparent_70%)]
          dark:bg-[radial-gradient(60%_50%_at_50%_0%,rgba(6,182,212,0.18),transparent_70%),radial-gradient(30%_30%_at_100%_45%,rgba(20,184,166,0.10),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-5xl">
        {/* Eyebrow */}
        <div className="mb-6 flex justify-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
            <Compass className="h-3.5 w-3.5" aria-hidden="true" />
            About {siteConfig.name}
          </p>
        </div>

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h1
            id="about-heading"
            className="mb-6 text-balance text-3xl font-black leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            A web developer who{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              thinks like your marketing team
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-pretty text-base font-normal leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
            Hi, I&apos;m <strong className="font-bold text-cyan-700 dark:text-cyan-400">{FOUNDER_NAME}</strong>. I started{" "}
            {siteConfig.name} with a simple idea: a business website should bring in customers, not just look good. I
            build websites, landing pages and marketing systems for businesses that want more leads, bookings and
            sales.
          </p>
        </div>

        {/* Founder card */}
        <div className="relative mb-12 overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl sm:p-10 dark:border-cyan-500/30 dark:bg-gradient-to-br dark:from-[#0E1A38] dark:via-slate-900 dark:to-[#0E1A38] dark:shadow-2xl dark:shadow-cyan-950/40">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
          />

          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
            {/* Founder */}
            <div className="flex flex-col items-center border-b border-slate-200 pb-6 text-center md:items-start md:border-b-0 md:border-r md:pb-0 md:pr-6 md:text-left dark:border-slate-800">
              {FOUNDER_PHOTO ? (
                <Image
                  src={FOUNDER_PHOTO}
                  alt={`${FOUNDER_NAME}, ${FOUNDER_ROLE.toLowerCase()} of ${siteConfig.name}`}
                  width={96}
                  height={96}
                  priority
                  className="h-24 w-24 rounded-2xl object-cover ring-2 ring-cyan-400/60"
                />
              ) : (
                <AboutLogo />
              )}
              <div className="mt-4">
                <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                  {FOUNDER_ROLE}
                </p>
                <p className="mt-0.5 text-lg font-black text-slate-900 dark:text-white">{FOUNDER_NAME}</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Bringing together clean code and marketing that converts.
                </p>
              </div>
            </div>

            {/* Outcomes */}
            <div className="space-y-4 md:col-span-2">
              <h2 className="flex items-center gap-1.5 text-sm font-extrabold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                <Target className="h-4 w-4" aria-hidden="true" /> Built for real business growth
              </h2>

              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {outcomes.map(({ title, desc, icon: Icon, color }) => (
                  <li
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5 text-center dark:border-slate-800 dark:bg-slate-900/60"
                  >
                    <Icon className={`mx-auto mb-1.5 h-5 w-5 ${color}`} aria-hidden="true" />
                    <p className={`text-base font-black ${color}`}>{title}</p>
                    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={siteConfig.bookingUrl}
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-sm font-extrabold text-slate-950 shadow-xl shadow-cyan-500/20 transition-all hover:scale-105 hover:brightness-110 active:scale-95 motion-reduce:hover:scale-100 sm:w-auto"
          >
            <PhoneCall className="h-4 w-4 transition-transform group-hover:rotate-12" aria-hidden="true" />
            Book a free strategy call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>

          <Link
            href="/services"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-bold text-slate-800 transition-all hover:bg-slate-100 sm:w-auto dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-cyan-500/40 dark:hover:bg-slate-800"
          >
            Explore services
          </Link>
        </div>
      </div>
    </section>
  );
}

// HRDW logo, used until you add a founder photo. If you have a shared <Logo /> component, use that instead.
function AboutLogo() {
  return (
    <span className="flex select-none items-center gap-3">
      <svg viewBox="0 0 160 100" className="h-10 w-10" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="hrdwAboutGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="50%" stopColor="#00A8FF" />
            <stop offset="100%" stopColor="#1B4998" />
          </linearGradient>
          <filter id="cyanAboutGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <g stroke="url(#hrdwAboutGlow)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 15,20 L 15,80 M 15,50 L 45,50 M 45,20 L 45,80" />
          <path d="M 15,20 L 45,50 M 15,80 L 45,50" opacity="0.6" strokeWidth="1.5" />
          <path d="M 55,20 L 55,80 M 55,20 L 80,20 C 90,20 90,50 80,50 L 55,50 M 70,50 L 85,80" />
          <path d="M 55,20 L 80,50 M 55,50 L 85,80" opacity="0.6" strokeWidth="1.5" />
          <path d="M 95,20 L 95,80 M 95,20 L 115,20 C 130,20 130,80 115,80 L 95,80" />
          <path d="M 95,20 L 122,50 M 95,80 L 122,50" opacity="0.6" strokeWidth="1.5" />
          <path d="M 130,20 L 138,80 L 148,45 L 155,80 L 160,20" />
          <path d="M 132,90 L 158,10" stroke="#00E5FF" strokeWidth="2" filter="url(#cyanAboutGlow)" />
        </g>
        <circle cx="15" cy="20" r="2.5" fill="#00E5FF" />
        <circle cx="15" cy="80" r="2.5" fill="#00A8FF" />
        <circle cx="45" cy="50" r="2.5" fill="#00E5FF" />
        <circle cx="80" cy="20" r="2.5" fill="#00E5FF" />
        <circle cx="85" cy="80" r="2.5" fill="#1B4998" />
        <circle cx="122" cy="50" r="2.5" fill="#00E5FF" />
        <circle cx="148" cy="45" r="2.5" fill="#00E5FF" />
      </svg>
      <span className="flex flex-col">
        <span className="flex items-center gap-1 leading-none">
          <span className="text-xl font-black tracking-wider text-slate-900 dark:text-white">HR</span>
          <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-xl font-semibold tracking-normal text-transparent">
            DigitalWeb
          </span>
        </span>
        <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400/80">
          Growth &amp; Development
        </span>
      </span>
    </span>
  );
}