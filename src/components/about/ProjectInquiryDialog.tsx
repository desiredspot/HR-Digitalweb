"use client";

import { useActionState, useEffect, useRef } from "react";
import { ArrowRight, Building2, CheckCircle2, Lock, Mail, MapPin, PhoneCall, Send, User, X } from "lucide-react";
import { sendProjectInquiry, type InquiryState } from "./InquiryActions";
import { inquiryRegions, inquiryScopes } from "./InquiryOptions";

const fieldCls =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-cyan-500 aria-[invalid=true]:border-red-500 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:focus:border-cyan-400";
const labelCls = "mb-1 flex items-center gap-1 text-xs font-semibold text-slate-800 dark:text-slate-200";
const errorCls = "mt-1 text-xs text-red-600 dark:text-red-400";
const iconCls = "h-3 w-3 text-cyan-600 dark:text-cyan-400";

const initialState: InquiryState = { status: "idle" };

// Client island: the big CTA button plus the enquiry form in a native <dialog>
// (focus trapping, Esc to close and backdrop come built in).
export function ProjectInquiryDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(sendProjectInquiry, initialState);
  const fieldErrors = state.status === "error" ? state.fieldErrors : undefined;

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  const close = () => dialogRef.current?.close();

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <button
          type="button"
          onClick={() => dialogRef.current?.showModal()}
          aria-haspopup="dialog"
          className="group flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-9 py-4.5 text-base font-extrabold text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:scale-105 hover:shadow-cyan-500/40 hover:brightness-110 active:scale-95 motion-reduce:hover:scale-100 sm:w-auto"
        >
          <PhoneCall className="h-5 w-5 transition-transform group-hover:rotate-12" aria-hidden="true" />
          Let&apos;s talk about your project
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </button>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="inquiry-dialog-title"
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
              <h3 id="inquiry-dialog-title" className="text-2xl font-extrabold">
                Message sent
              </h3>
              <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Thanks, I&apos;ve got your project details. I&apos;ll review them and reply within 24 hours to set up a
                discovery call.
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
                <h3 id="inquiry-dialog-title" className="text-xl font-extrabold">
                  Tell me about your project
                </h3>
              </div>
              <p className="mb-6 text-xs text-slate-600 dark:text-slate-400">
                Share where you&apos;re based and what you need, and I&apos;ll come back with a fixed quote.
              </p>

              <form ref={formRef} action={formAction} noValidate className="space-y-4">
                <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
                  <label>
                    Fax
                    <input type="text" name="company_fax" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                <div>
                  <label htmlFor="pi-name" className={labelCls}>
                    <User className={iconCls} aria-hidden="true" /> Your name
                  </label>
                  <input
                    id="pi-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Jane Doe"
                    aria-invalid={!!fieldErrors?.name}
                    aria-describedby={fieldErrors?.name ? "pi-name-error" : undefined}
                    className={fieldCls}
                  />
                  {fieldErrors?.name && <p id="pi-name-error" className={errorCls}>{fieldErrors.name}</p>}
                </div>

                <div>
                  <label htmlFor="pi-email" className={labelCls}>
                    <Mail className={iconCls} aria-hidden="true" /> Email address
                  </label>
                  <input
                    id="pi-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="jane@company.com"
                    aria-invalid={!!fieldErrors?.email}
                    aria-describedby={fieldErrors?.email ? "pi-email-error" : undefined}
                    className={fieldCls}
                  />
                  {fieldErrors?.email && <p id="pi-email-error" className={errorCls}>{fieldErrors.email}</p>}
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="pi-region" className={labelCls}>
                      <MapPin className={iconCls} aria-hidden="true" /> Where you&apos;re based
                    </label>
                    <select id="pi-region" name="region" defaultValue="United States" className={fieldCls}>
                      {inquiryRegions.map((r) => (
                        <option key={r}>{r}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="pi-scope" className={labelCls}>
                      <Building2 className={iconCls} aria-hidden="true" /> What you need
                    </label>
                    <select id="pi-scope" name="scope" defaultValue={inquiryScopes[0]} className={fieldCls}>
                      {inquiryScopes.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="pi-message" className={labelCls}>
                    Project goals and timing
                  </label>
                  <textarea
                    id="pi-message"
                    name="message"
                    rows={3}
                    required
                    placeholder="Your business goals, who your customers are, and when you'd like to launch."
                    aria-invalid={!!fieldErrors?.message}
                    aria-describedby={fieldErrors?.message ? "pi-message-error" : undefined}
                    className={fieldCls}
                  />
                  {fieldErrors?.message && <p id="pi-message-error" className={errorCls}>{fieldErrors.message}</p>}
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
                  {isPending ? "Sending…" : "Send enquiry"}
                  {!isPending && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
                </button>

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