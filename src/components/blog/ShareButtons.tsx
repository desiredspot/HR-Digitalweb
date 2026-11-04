"use client";

import { useState } from "react";
import { Check, Link2 } from "lucide-react";

// Copy-link button plus LinkedIn and X share links for a blog post.
export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard blocked: fall back to the native share sheet if there is one
      if (navigator.share) navigator.share({ title, url }).catch(() => {});
    }
  };

  const btn =
    "flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600 transition-colors hover:border-cyan-500/50 hover:text-cyan-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-cyan-400";

  return (
    <div className="flex items-center gap-2">
      <button type="button" onClick={copy} className={btn}>
        {copied ? (
          <Check className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
        ) : (
          <Link2 className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
        )}
        <span aria-live="polite">{copied ? "Link copied" : "Copy link"}</span>
      </button>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btn} px-2`}
        aria-label="Share on LinkedIn"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.63 1.63 0 1 0 1.63 1.63 1.63 1.63 0 0 0-1.63-1.63z" />
        </svg>
      </a>
      <a
        href={`https://x.com/intent/post?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btn} px-2`}
        aria-label="Share on X"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
    </div>
  );
}