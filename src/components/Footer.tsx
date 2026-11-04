import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Globe, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { serviceHref, services, siteConfig } from "@/lib/site-config";
import { NewsletterForm } from "./home/NewsletterForm";
// ─── Footer settings ─────────────────────────────────────────────────────────
// TODO: replace with your real details. Social links with an empty href are not shown.
const CONTACT_EMAIL = "hello@hrdigitalweb.com";
const RESPONSE_TIME = "Within 24 hours";
const WORKING_HOURS = "Mon to Fri, 9am to 6pm IST";
const AVAILABILITY = "Accepting new projects";

const socials: { name: string; href: string; icon: (props: { className?: string }) => React.ReactElement }[] = [
  { name: "LinkedIn", href: "", icon: LinkedInIcon },
  { name: "Instagram", href: "", icon: InstagramIcon },
  { name: "X (Twitter)", href: "", icon: XIcon },
  { name: "GitHub", href: "", icon: GitHubIcon },
];

// Root-relative links ("/#process") work from every page, not just the home page.
const companyLinks = [
  { name: "Recent work", href: "/#portfolio" },
  { name: "How I work", href: "/process" },
  { name: "Tools I use", href: "/#tools" },
  { name: "Blog and growth guides", href: "/blog" },
  { name: "Get a free plan", href: "/#contact" },
];

// TODO: create these pages, or remove the links. Never link to "#" placeholders.
const legalLinks = [
  { name: "Privacy policy", href: "/privacy-policy" },
  { name: "Terms of service", href: "/terms" },
];
// ─────────────────────────────────────────────────────────────────────────────

export function Footer() {
  const activeSocials = socials.filter((s) => s.href);

  return (
    <footer className="relative overflow-hidden bg-[#070D1E] text-slate-100">
      {/* Ambient glow: radial gradient instead of a blur filter */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_100%,rgba(6,182,212,0.12),transparent_70%)]"
      />

      {/* Newsletter strip */}
      <div className="relative border-b border-slate-800/80 bg-slate-950/40 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="max-w-xl text-center lg:text-left">
            <p className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-400">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> Monthly growth playbook
            </p>
            <h2 className="text-xl font-black tracking-tight text-white sm:text-2xl">
              Get one practical conversion and SEO tip every month.
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              No daily spam. Just landing page breakdowns, Next.js speed tips and CRM workflow ideas.
            </p>
          </div>

          <NewsletterForm />
        </div>
      </div>

      {/* Main footer grid */}
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Brand */}
          <div className="space-y-6 lg:col-span-2">
            <Link href="/" aria-label={`${siteConfig.name} home`} className="inline-block">
              {/* Your logo from public/logo-1.png. The footer is dark in both themes, so it never changes */}
              <Image
                src="/logo-1.png"
                alt={siteConfig.name}
                width={220}
                height={60}
                className="h-24 w-auto"
              />
            </Link>

            <p className="max-w-md text-sm font-normal leading-relaxed text-slate-400">
              HR DigitalWeb is a freelance web development and digital marketing business. I build fast Next.js
              websites, Unbounce landing pages and GoHighLevel CRM automation, then bring in traffic with SEO
              content, email and reels.
            </p>

            <ul className="grid grid-cols-2 gap-3 pt-2">
              <li className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/50 p-3 text-xs">
                <ShieldCheck className="h-4 w-4 shrink-0 text-cyan-400" aria-hidden="true" />
                <span className="font-semibold text-slate-300">Fixed-price quotes</span>
              </li>
              <li className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/50 p-3 text-xs">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-400" aria-hidden="true" />
                <span className="font-semibold text-slate-300">You own the code</span>
              </li>
            </ul>

            {activeSocials.length > 0 && (
              <div className="pt-2">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-slate-500">Connect with me</p>
                <ul className="flex items-center gap-2">
                  {activeSocials.map(({ name, href, icon: Icon }) => (
                    <li key={name}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer me"
                        aria-label={name}
                        className="flex rounded-xl border border-slate-800 bg-slate-900/80 p-2.5 text-slate-400 transition-all hover:border-cyan-500/40 hover:bg-slate-800 hover:text-cyan-400"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Services */}
          <nav aria-labelledby="footer-services">
            <h2 id="footer-services" className="mb-4 text-xs font-black uppercase tracking-widest text-cyan-400">
              Services
            </h2>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <FooterLink href={serviceHref(s.slug)}>{s.title}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-labelledby="footer-company">
            <h2 id="footer-company" className="mb-4 text-xs font-black uppercase tracking-widest text-cyan-400">
              Company
            </h2>
            <ul className="space-y-2.5 text-sm">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="mb-4 text-xs font-black uppercase tracking-widest text-cyan-400">Contact</h2>

            <address className="space-y-3.5 text-sm not-italic text-slate-400">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" aria-hidden="true" />
                <div>
                  <span className="block text-[11px] font-semibold text-slate-500">Project enquiries</span>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="break-all font-medium text-slate-200 transition-colors hover:text-cyan-400"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" aria-hidden="true" />
                <div>
                  <span className="block text-[11px] font-semibold text-slate-500">Response time</span>
                  <span className="font-medium text-slate-200">{RESPONSE_TIME}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" aria-hidden="true" />
                <div>
                  <span className="block text-[11px] font-semibold text-slate-500">Working hours</span>
                  <span className="font-medium text-slate-200">{WORKING_HOURS}</span>
                </div>
              </div>
            </address>

            <p className="mt-5 flex items-center gap-2 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs font-bold text-emerald-400">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-emerald-400 motion-safe:animate-pulse"
              />
              {AVAILABILITY}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-slate-300">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-cyan-300">
      <ArrowRight
        className="h-3 w-3 shrink-0 text-slate-600 transition-all group-hover:translate-x-0.5 group-hover:text-cyan-400"
        aria-hidden="true"
      />
      {children}
    </Link>
  );
}

// Brand icons (lucide-react no longer ships brand logos, so these are inline SVGs)
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}