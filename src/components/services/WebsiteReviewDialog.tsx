"use client";

import { useActionState, useEffect, useRef } from "react";
import { ArrowRight, CheckCircle2, Globe, Lock, Mail, PhoneCall, Search, Sparkles, User, X } from "lucide-react";
import { requestWebsiteReview, type ReviewState } from "./ReviewActions";

const fieldCls =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-cyan-500 aria-[invalid=true]:border-red-500 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:focus:border-cyan-400";
const labelCls = "mb-1 flex items-center gap-1 text-xs font-semibold text-slate-800 dark:text-slate-200";
const errorCls = "mt-1 text-xs text-red-600 dark:text-red-400";
const iconCls = "h-3 w-3 text-cyan-600 dark:text-cyan-400";

const initialState: ReviewState = { status: "idle" };

// Client island: the CTA button plus the review request form in a native <dialog>.
export function WebsiteReviewDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(requestWebsiteReview, initialState);
  const fieldErrors = state.status === "error" ? state.fieldErrors : undefined;

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  const close = () => dialogRef.current?.close();

  return (
    <>
      <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <button
          type="button"
          onClick={() => dialogRef.current?.showModal()}
          aria-haspopup="dialog"
          className="group flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-9 py-4.5 text-base font-extrabold text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:scale-105 hover:shadow-cyan-500/40 hover:brightness-110 active:scale-95 motion-reduce:hover:scale-100 sm:w-auto"
        >
          <PhoneCall className="h-5 w-5 transition-transform group-hover:rotate-12" aria-hidden="true" />
          Book a free website review
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </button>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="review-dialog-title"
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        className="m-auto w-[calc(100%-2rem)] max-w-lg rounded-3xl border border-slate-200 bg-white p-0 text-left text-slate-900 shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-md dark:border-cyan-900/50 dark:bg-[#0E1A38] dark:text-white"
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
              <h3 id="review-dialog-title" className="text-2xl font-extrabold">
                Review requested
              </h3>
              <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Thanks! I&apos;ll look over your website before we talk and get back to you within 24 hours to book
                your 30-minute call.
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
                  <Search className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 id="review-dialog-title" className="text-xl font-extrabold">
                  Book your free 30-minute website review
                </h3>
              </div>
              <p className="mb-6 text-xs text-slate-600 dark:text-slate-400">
                Share your website so I can look it over before our call.
              </p>

              <form ref={formRef} action={formAction} noValidate className="space-y-4">
                <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
                  <label>
                    Fax
                    <input type="text" name="company_fax" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                <div>
                  <label htmlFor="wr-name" className={labelCls}>
                    <User className={iconCls} aria-hidden="true" /> Your name
                  </label>
                  <input
                    id="wr-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Jane Doe"
                    aria-invalid={!!fieldErrors?.name}
                    aria-describedby={fieldErrors?.name ? "wr-name-error" : undefined}
                    className={fieldCls}
                  />
                  {fieldErrors?.name && <p id="wr-name-error" className={errorCls}>{fieldErrors.name}</p>}
                </div>

                <div>
                  <label htmlFor="wr-email" className={labelCls}>
                    <Mail className={iconCls} aria-hidden="true" /> Email address
                  </label>
                  <input
                    id="wr-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="jane@company.com"
                    aria-invalid={!!fieldErrors?.email}
                    aria-describedby={fieldErrors?.email ? "wr-email-error" : undefined}
                    className={fieldCls}
                  />
                  {fieldErrors?.email && <p id="wr-email-error" className={errorCls}>{fieldErrors.email}</p>}
                </div>

                <div>
                  <label htmlFor="wr-website" className={labelCls}>
                    <Globe className={iconCls} aria-hidden="true" /> Website to review
                  </label>
                  <input
                    id="wr-website"
                    name="website"
                    type="text"
                    inputMode="url"
                    required
                    autoComplete="url"
                    placeholder="yourwebsite.com"
                    aria-invalid={!!fieldErrors?.website}
                    aria-describedby={fieldErrors?.website ? "wr-website-error" : undefined}
                    className={fieldCls}
                  />
                  {fieldErrors?.website && <p id="wr-website-error" className={errorCls}>{fieldErrors.website}</p>}
                </div>

                <div>
                  <label htmlFor="wr-notes" className={labelCls}>
                    <Sparkles className={iconCls} aria-hidden="true" /> Your main challenge or goal (optional)
                  </label>
                  <textarea
                    id="wr-notes"
                    name="notes"
                    rows={3}
                    placeholder="Getting traffic but no leads, the site is slow, I want a CRM set up…"
                    className={fieldCls}
                  />
                </div>

                {state.status === "error" && !fieldErrors && (
                  <p
                    role="alert"
                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-xs text-red-700 dark:border-red-500/30 dark:bg-red-950/30 dark:text-red-300"
                  >
                    {state.message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isPending}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:brightness-110 disabled:cursor-wait disabled:opacity-70"
                >
                  {isPending ? "Sending…" : "Request my free review"}
                  {!isPending && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
                </button>

                <p className="flex items-center justify-center gap-1 text-center text-[11px] text-slate-500">
                  <Lock className="h-3 w-3" aria-hidden="true" /> Free, no hard sell, no pitch deck.
                </p>
              </form>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}