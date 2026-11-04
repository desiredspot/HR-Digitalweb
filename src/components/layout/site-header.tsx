import Link from "next/link";
import { ArrowRight, ChevronDown, Cpu, PhoneCall } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { HeaderShell } from "./header-shell";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";
import { mainNav, serviceHref, services, siteConfig } from "@/lib/site-config";

const navLink =
  "rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800/60 dark:hover:text-white";

// Server component. The mega menu opens on hover AND keyboard focus via CSS
// (group-hover / group-focus-within), so it needs no JavaScript and every
// service link is in the HTML for crawlers.
export function SiteHeader() {
  return (
    <HeaderShell>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded-lg focus:bg-cyan-400 focus:px-4 focus:py-2 focus:font-semibold focus:text-slate-950"
      >
        Skip to content
      </a>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label={`${siteConfig.name} home`} className="rounded-lg focus-visible:outline-2 focus-visible:outline-cyan-400">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Main"
          className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/80 px-3 py-1.5 shadow-inner backdrop-blur-md md:flex dark:border-cyan-900/40 dark:bg-slate-900/70"
        >
          <div className="group relative">
            <Link
              href="/services"
              aria-haspopup="true"
              className={`${navLink} flex items-center gap-1.5 group-hover:bg-cyan-500/10 group-hover:text-cyan-500 group-focus-within:text-cyan-500 dark:group-hover:text-cyan-400`}
            >
              Services
              <ChevronDown
                className="h-4 w-4 text-slate-400 transition-transform duration-200 group-hover:rotate-180 group-hover:text-cyan-400 group-focus-within:rotate-180"
                aria-hidden="true"
              />
            </Link>

            <div
              className="invisible absolute left-1/2 top-full w-[min(760px,90vw)] -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-[opacity,transform,visibility] duration-200
                group-hover:visible group-hover:translate-y-0 group-hover:opacity-100
                group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
            >
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl dark:border-cyan-900/50 dark:bg-[#0E1A38] dark:shadow-black/80">
                <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
                  <div>
                    <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                      <Cpu className="h-3.5 w-3.5" aria-hidden="true" /> Growth &amp; Web Solutions
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                      End-to-end digital services designed to grow revenue
                    </p>
                  </div>
                  <Link href="/services" className="group/all flex items-center gap-1 text-xs font-semibold text-cyan-600 hover:text-cyan-500 dark:text-cyan-400">
                    View all services
                    <ArrowRight className="h-3 w-3 transition-transform group-hover/all:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>

                <ul className="grid grid-cols-2 gap-3">
                  {services.map(({ slug, title, desc, icon: Icon, tone }) => (
                    <li key={slug}>
                      <Link
                        href={serviceHref(slug)}
                        className="group/item flex items-start gap-3 rounded-2xl border border-transparent p-3 transition-colors hover:border-slate-200 hover:bg-slate-50 dark:hover:border-cyan-800/40 dark:hover:bg-slate-800/60"
                      >
                        <span className={`shrink-0 rounded-xl border p-2.5 ${tone}`}>
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <span className="block truncate text-xs font-bold text-slate-800 transition-colors group-hover/item:text-cyan-600 dark:text-slate-100 dark:group-hover/item:text-cyan-400">
                            {title}
                          </span>
                          <span className="mt-1 line-clamp-2 block text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
                            {desc}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-gradient-to-r from-cyan-50 via-blue-50 to-slate-100 p-3.5 dark:border-cyan-800/30 dark:from-cyan-950/40 dark:via-blue-950/40 dark:to-slate-900">
                  <span className="flex items-center gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                    <span className="h-2 w-2 rounded-full bg-cyan-500" aria-hidden="true" />
                    Need a custom growth package or audit?
                  </span>
                  <Link
                    href={siteConfig.bookingUrl}
                    className="rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 px-3.5 py-1.5 text-xs font-bold text-slate-950 shadow-md shadow-cyan-500/20 hover:opacity-90"
                  >
                    Get Free Audit
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className={navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link
            href={siteConfig.bookingUrl}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02] hover:shadow-cyan-500/40 hover:brightness-110 active:scale-[0.98]"
          >
            <PhoneCall className="h-4 w-4 transition-transform group-hover:rotate-12" aria-hidden="true" />
            Book a free call
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle className="rounded-xl p-2" />
          <MobileNav />
        </div>
      </div>
    </HeaderShell>
  );
}