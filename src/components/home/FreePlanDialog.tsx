"use client";

import { useActionState, useEffect, useRef } from "react";
import { ArrowRight, Building2, CheckCircle2, Globe, HelpCircle, Lock, Mail, Send, User, X, Zap } from "lucide-react";
import { requestFreePlan, type FreePlanState } from "./Actions";

const businessTypes = [
  "Small business / local service",
  "Coach / consultant",
  "SaaS / tech startup",
  "Agency / marketing partner",
  "E-commerce store",
];

const goals = [
  "Complete growth funnel (web + CRM + marketing)",
  "Fast Next.js or WordPress website",
  "Unbounce landing page and ad conversions",
  "GoHighLevel CRM and instant lead follow-up",
  "SEO content, reels and organic traffic",
];

const fieldCls =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-cyan-500 aria-[invalid=true]:border-red-500 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:focus:border-cyan-400";
const labelCls = "mb-1 flex items-center gap-1 text-xs font-semibold text-slate-800 dark:text-slate-200";
const errorCls = "mt-1 text-xs text-red-600 dark:text-red-400";

const initialState: FreePlanState = { status: "idle" };

// Client island: the CTA button and the request form inside a native <dialog>.
// <dialog> gives focus trapping, Esc to close and a backdrop for free.
export function FreePlanDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(requestFreePlan, initialState);

  const fieldErrors = state.status === "error" ? state.fieldErrors : undefined;

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  return (
    <>
      <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <button
          type="button"
          onClick={open}
          aria-haspopup="dialog"
          className="group flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-9 py-4.5 text-base font-extrabold text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:scale-105 hover:shadow-cyan-500/40 hover:brightness-110 active:scale-95 motion-reduce:hover:scale-100 sm:w-auto"
        >
          Get my free plan
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </button>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="free-plan-dialog-title"
        onClick={(e) => {
          // Close when the backdrop (outside the panel) is clicked
          if (e.target === dialogRef.current) close();
        }}
        className="m-auto w-[calc(100%-2rem)] max-w-xl rounded-3xl border border-slate-200 bg-white p-0 text-left text-slate-900 shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-md dark:border-cyan-900/50 dark:bg-[#0E1A38] dark:text-white"
      >
        <div className="relative max-h-[90vh] overflow-y-auto p-6 sm:p-8">
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800/40 dark:hover:text-white"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          {state.status === "success" ? (
            <div className="space-y-4 py-8 text-center" role="status">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400 bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                <CheckCircle2 className="h-10 w-10" aria-hidden="true" />
              </div>
              <h3 id="free-plan-dialog-title" className="text-2xl font-extrabold">
                Plan requested
              </h3>
              <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Thanks, I&apos;ve got your details. I&apos;ll review your business and email your free{" "}
                <strong>website and marketing plan</strong> within 48 hours.
              </p>
              <button
                type="button"
                onClick={close}
                className="mt-4 rounded-full bg-cyan-400 px-6 py-2.5 text-xs font-bold text-slate-950 shadow-lg transition-colors hover:bg-cyan-300"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="mb-2 flex items-center gap-2 pr-10">
                <span className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-2 text-cyan-600 dark:text-cyan-400">
                  <Send className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 id="free-plan-dialog-title" className="text-xl font-extrabold">
                  Get your free 48-hour growth plan
                </h3>
              </div>

              <p className="mb-6 text-xs text-slate-600 dark:text-slate-400">
                A few quick details about your business so I can put together a plan that fits.
              </p>

              <form ref={formRef} action={formAction} noValidate className="space-y-4">
                {/* Honeypot field for spam bots: hidden from people and screen readers */}
                <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
                  <label>
                    Fax
                    <input type="text" name="company_fax" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fp-name" className={labelCls}>
                      <User className="h-3 w-3 text-cyan-600 dark:text-cyan-400" aria-hidden="true" /> Your name
                    </label>
                    <input
                      id="fp-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Alex Morgan"
                      aria-invalid={!!fieldErrors?.name}
                      aria-describedby={fieldErrors?.name ? "fp-name-error" : undefined}
                      className={fieldCls}
                    />
                    {fieldErrors?.name && <p id="fp-name-error" className={errorCls}>{fieldErrors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="fp-email" className={labelCls}>
                      <Mail className="h-3 w-3 text-cyan-600 dark:text-cyan-400" aria-hidden="true" /> Email address
                    </label>
                    <input
                      id="fp-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="alex@company.com"
                      aria-invalid={!!fieldErrors?.email}
                      aria-describedby={fieldErrors?.email ? "fp-email-error" : undefined}
                      className={fieldCls}
                    />
                    {fieldErrors?.email && <p id="fp-email-error" className={errorCls}>{fieldErrors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fp-website" className={labelCls}>
                      <Globe className="h-3 w-3 text-cyan-600 dark:text-cyan-400" aria-hidden="true" /> Current website
                      (if any)
                    </label>
                    <input
                      id="fp-website"
                      name="website"
                      type="text"
                      inputMode="url"
                      autoComplete="url"
                      placeholder="www.yourcompany.com"
                      className={fieldCls}
                    />
                  </div>

                  <div>
                    <label htmlFor="fp-business" className={labelCls}>
                      <Building2 className="h-3 w-3 text-cyan-600 dark:text-cyan-400" aria-hidden="true" /> Business
                      type
                    </label>
                    <select id="fp-business" name="businessType" defaultValue={businessTypes[0]} className={fieldCls}>
                      {businessTypes.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="fp-goal" className={labelCls}>
                    <Zap className="h-3 w-3 text-cyan-600 dark:text-cyan-400" aria-hidden="true" /> Main goal
                  </label>
                  <select id="fp-goal" name="goal" defaultValue={goals[0]} className={fieldCls}>
                    {goals.map((g) => (
                      <option key={g}>{g}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="fp-message" className={labelCls}>
                    <HelpCircle className="h-3 w-3 text-cyan-600 dark:text-cyan-400" aria-hidden="true" /> Tell me
                    about your business and customers
                  </label>
                  <textarea
                    id="fp-message"
                    name="message"
                    rows={3}
                    required
                    placeholder="What you sell, who your customers are, and what you'd like to improve."
                    aria-invalid={!!fieldErrors?.message}
                    aria-describedby={fieldErrors?.message ? "fp-message-error" : undefined}
                    className={fieldCls}
                  />
                  {fieldErrors?.message && <p id="fp-message-error" className={errorCls}>{fieldErrors.message}</p>}
                </div>

                {state.status === "error" && !fieldErrors && (
                  <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-xs text-red-700 dark:border-red-500/30 dark:bg-red-950/30 dark:text-red-300">
                    {state.message}
                  </p>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:brightness-110 disabled:cursor-wait disabled:opacity-70"
                  >
                    {isPending ? "Sending…" : "Send request and get my free plan"}
                    {!isPending && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
                  </button>
                </div>

                <p className="flex items-center justify-center gap-1 text-center text-[11px] text-slate-500">
                  <Lock className="h-3 w-3" aria-hidden="true" /> Free, confidential and no spam.
                </p>
              </form>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}