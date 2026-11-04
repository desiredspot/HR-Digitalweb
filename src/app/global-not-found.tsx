import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import { Footer } from "@/components/Footer";
   import { SiteHeader } from "@/components/layout/site-header";
   import "./globals.css";

const display = localFont({ src: "../fonts/bricolage.woff2", variable: "--font-bricolage", weight: "200 800", display: "swap" });
const body = localFont({ src: "../fonts/figtree.woff2", variable: "--font-figtree", weight: "300 900", display: "swap" });

export const metadata: Metadata = { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com"), title: "Page not found", robots: { index: false, follow: true } };

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <SiteHeader />
        <main id="main" className="wrap py-24 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">This page doesn&apos;t exist</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg">The link may be old or mistyped. Try one of these instead.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn btn-primary">Go to the home page</Link>
            <Link href="/services" className="btn btn-ghost">See services</Link>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
