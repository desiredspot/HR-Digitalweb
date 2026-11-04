"use client";

import { useActionState } from "react";
import { CheckCircle2, Lock, Mail, Send } from "lucide-react";
import { subscribeToNewsletter, type NewsletterState } from "./NewsletterActions";

const initialState: NewsletterState = { status: "idle" };

export function NewsletterForm() {
  const [state, formAction, isPending] = useActionState(subscribeToNewsletter, initialState);

  return (
    <div className="w-full lg:w-auto lg:min-w-[420px]">
      {state.status === "success" ? (
        <p
          role="status"
          className="flex items-center gap-3 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-4 text-xs font-bold text-cyan-300"
        >
          <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400" aria-hidden="true" />
          You&apos;re subscribed. The next playbook will land in your inbox.
        </p>
      ) : (
        <form action={formAction} noValidate className="flex flex-col gap-2 sm:flex-row">
          {/* Honeypot for spam bots */}
          <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
            <label>
              Fax
              <input type="text" name="company_fax" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <div className="relative flex-1">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <Mail
              className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
              aria-hidden="true"
            />
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              aria-invalid={state.status === "error"}
              aria-describedby={state.status === "error" ? "newsletter-error" : undefined}
              className="w-full rounded-2xl border border-slate-800 bg-slate-900/90 py-3 pl-10 pr-4 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400 aria-[invalid=true]:border-red-500"
            />
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-teal-300 px-6 py-3 text-xs font-extrabold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:brightness-110 disabled:cursor-wait disabled:opacity-70"
          >
            {isPending ? "Subscribing…" : "Subscribe"}
            {!isPending && <Send className="h-3.5 w-3.5" aria-hidden="true" />}
          </button>
        </form>
      )}

      {state.status === "error" && (
        <p id="newsletter-error" role="alert" className="mt-2 text-center text-xs text-red-400 lg:text-left">
          {state.message}
        </p>
      )}

      <p className="mt-2 flex items-center justify-center gap-1 text-center text-[11px] text-slate-500 lg:justify-start lg:text-left">
        <Lock className="h-3 w-3 text-slate-600" aria-hidden="true" /> Unsubscribe any time in one click. No spam.
      </p>
    </div>
  );
}