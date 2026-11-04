// MERGE this into your existing src/app/(site)/layout.tsx.
// Key parts: metadataBase, the theme script in <head>, suppressHydrationWarning,
// SiteHeader above <main id="main">.
import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/lib/site-config";
import "../globals.css";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
// Keep your existing next/font setup (src/fonts) and add its className to <html>.

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B132B" },
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
  ],
};

// Runs before first paint: applies saved theme (default dark) so there's no flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme')||'dark';var d=document.documentElement;d.classList.toggle('dark',t==='dark');d.style.colorScheme=t;}catch(e){document.documentElement.classList.add('dark')}})();`;

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body suppressHydrationWarning className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased selection:bg-cyan-500 selection:text-black dark:bg-[#0B132B] dark:text-slate-100">
        <SiteHeader />
        <main id="main">{children}</main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
