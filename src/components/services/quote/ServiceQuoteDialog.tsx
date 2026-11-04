"use client";

import { useActionState, useEffect, useRef, type ReactNode } from "react";
import { ArrowRight, CheckCircle2, FileText, Globe, Lock, Mail, User, X } from "lucide-react";
import { requestServiceQuote, type QuoteState } from "../web-development/QuoteActions";

// Reusable "Get a quote" dialog for every service page.
//
// Usage:
//   <ServiceQuoteDialog service="Next.js web development" title="Request a Next.js development quote">
//     Get a Next.js development quote          <- text of the main button
//   </ServiceQuoteDialog>
//
// Need a second button elsewhere on the page (e.g. a text link)? Use <QuoteDialogTrigger>,
// which opens this same dialog. Only render one ServiceQuoteDialog per page.

export const QUOTE_DIALOG_ID = "service-quote-dialog";

const fieldCls =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-cyan-500 aria-[invalid=true]:border-red-500 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:focus:border-cyan-400";
const labelCls = "mb-1 flex items-center gap-1 text-xs font-semibold text-slate-800 dark:text-slate-200";
const errorCls = "mt-1 text-xs text-red-600 dark:text-red-400";
const iconCls = "h-3 w-3 text-cyan-600 dark:text-cyan-400";

const initialState: QuoteState = { status: "idle" };

export function openQuoteDialog() {
  (document.getElementById(QUOTE_DIALOG_ID) as HTMLDialogElement | null)?.showModal();
}

/** A second button that opens the page's quote dialog. Style it however you like. */
export function QuoteDialogTrigger({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <button type="button" aria-haspopup="dialog" onClick={openQuoteDialog} className={className}>
      {children}
    </button>
  );
}

export function ServiceQuoteDialog({
  service,
  title,
  description = "Tell me about your project and I'll come back with a fixed quote.",
  icon,
  buttonClassName,
  children,
}: {
  service: string; // sent with the lead so you know which page it came from
  title: string; // heading inside the dialog
  description?: string;
  icon?: ReactNode; // optional icon next to the dialog heading
  buttonClassName: string;
  children: ReactNode; // contents of the main trigger button
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(requestServiceQuote, initialState);
  const fieldErrors = state.status === "error" ? state.fieldErrors : undefined;

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => dialogRef.current?.showModal()}
        className={buttonClassName}
      >
        {children}
      </button>

      <dialog
        ref={dialogRef}
        id={QUOTE_DIALOG_ID}
        aria-labelledby="quote-dialog-title"
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
              <h2 id="quote-dialog-title" className="text-2xl font-extrabold">
                Quote request sent
              </h2>
              <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Thanks! I&apos;ll review what you need and reply within 24 hours with next steps and a fixed quote.
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
                {icon && (
                  <span className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-2 text-cyan-600 dark:text-cyan-400">
                    {icon}
                  </span>
                )}
                <h2 id="quote-dialog-title" className="text-xl font-extrabold">
                  {title}
                </h2>
              </div>
              <p className="mb-6 text-xs text-slate-600 dark:text-slate-400">{description}</p>

              <form ref={formRef} action={formAction} noValidate className="space-y-4">
                <input type="hidden" name="service" value={service} />
                <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
                  <label>
                    Fax
                    <input type="text" name="company_fax" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                <div>
                  <label htmlFor="sq-name" className={labelCls}>
                    <User className={iconCls} aria-hidden="true" /> Your name
                  </label>
                  <input
                    id="sq-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Jane Doe"
                    aria-invalid={!!fieldErrors?.name}
                    aria-describedby={fieldErrors?.name ? "sq-name-error" : undefined}
                    className={fieldCls}
                  />
                  {fieldErrors?.name && <p id="sq-name-error" className={errorCls}>{fieldErrors.name}</p>}
                </div>

                <div>
                  <label htmlFor="sq-email" className={labelCls}>
                    <Mail className={iconCls} aria-hidden="true" /> Email address
                  </label>
                  <input
                    id="sq-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="jane@company.com"
                    aria-invalid={!!fieldErrors?.email}
                    aria-describedby={fieldErrors?.email ? "sq-email-error" : undefined}
                    className={fieldCls}
                  />
                  {fieldErrors?.email && <p id="sq-email-error" className={errorCls}>{fieldErrors.email}</p>}
                </div>

                <div>
                  <label htmlFor="sq-website" className={labelCls}>
                    <Globe className={iconCls} aria-hidden="true" /> Current website (if any)
                  </label>
                  <input
                    id="sq-website"
                    name="website"
                    type="text"
                    inputMode="url"
                    autoComplete="url"
                    placeholder="yourwebsite.com"
                    aria-invalid={!!fieldErrors?.website}
                    aria-describedby={fieldErrors?.website ? "sq-website-error" : undefined}
                    className={fieldCls}
                  />
                  {fieldErrors?.website && <p id="sq-website-error" className={errorCls}>{fieldErrors.website}</p>}
                </div>

                <div>
                  <label htmlFor="sq-details" className={labelCls}>
                    <FileText className={iconCls} aria-hidden="true" /> What do you need? (optional)
                  </label>
                  <textarea
                    id="sq-details"
                    name="details"
                    rows={3}
                    placeholder="A few lines about your project, goals and timing."
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
                  {isPending ? "Sending…" : "Request my quote"}
                  {!isPending && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
                </button>

                <p className="flex items-center justify-center gap-1 text-center text-[11px] text-slate-500">
                  <Lock className="h-3 w-3" aria-hidden="true" /> Free, no obligation, no spam.
                </p>
              </form>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}