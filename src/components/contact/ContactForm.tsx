"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef } from "react";
import { ArrowRight, Briefcase, CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import { budgetRanges, contactDetails, contactServices, timelines } from "@/lib/contact";
import { sendContactEnquiry, type ContactState } from "./actions";

const initialState: ContactState = { status: "idle" };

const labelCls = "mb-2 block font-mono text-xs font-bold uppercase text-slate-700 dark:text-slate-300";
const fieldCls =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-cyan-500 aria-[invalid=true]:border-red-500 dark:border-slate-800 dark:bg-slate-950/80 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-cyan-400";
const errorCls = "mt-1.5 text-xs text-red-600 dark:text-red-400";
const req = <span className="text-cyan-600 dark:text-cyan-400" aria-hidden="true">*</span>;
const optional = <span className="text-[10px] normal-case text-slate-500">(optional)</span>;

// Client island: the project enquiry form. Sends to the sendContactEnquiry server action.
// Service and budget are real radio buttons styled as pills, so they work with the
// keyboard, screen readers and without JavaScript.
export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactEnquiry, initialState);
  const successRef = useRef<HTMLHeadingElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);

  const fieldErrors = state.status === "error" ? state.fieldErrors : undefined;
  const v = state.status === "error" ? (state.values ?? {}) : {};

  useEffect(() => {
    if (state.status === "success") successRef.current?.focus();
    if (state.status === "error") errorRef.current?.focus();
  }, [state]);

  if (state.status === "success") {
    return (
      <div className="space-y-6 py-6 text-center" role="status">
        <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 shadow-2xl shadow-cyan-500/20 dark:text-cyan-400">
          <CheckCircle2 className="h-10 w-10" aria-hidden="true" />
        </span>
        <h2
          ref={successRef}
          tabIndex={-1}
          className="text-3xl font-black tracking-tight text-slate-900 outline-none sm:text-4xl dark:text-white"
        >
          Thanks{state.firstName ? `, ${state.firstName}` : ""}!
        </h2>
        <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
          Your project details are with me. I&apos;ll read them, look at your current site if you shared one, and
          reply {contactDetails.replyTime} with next steps.
        </p>
        <div className="mx-auto max-w-md space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left dark:border-slate-800 dark:bg-slate-950">
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
            While you wait
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Have a look at the kind of websites, landing pages and GoHighLevel setups I build.
          </p>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-5 py-3 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition-all hover:brightness-110"
          >
            <Briefcase className="h-4 w-4" aria-hidden="true" />
            See my work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-6">
      {/* Honeypot for spam bots: hidden from people and screen readers */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Fax
          <input type="text" name="company_fax" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {state.status === "error" && (
        <p
          ref={errorRef}
          tabIndex={-1}
          role="alert"
          className="rounded-xl border border-red-500/30 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 outline-none dark:bg-red-500/10 dark:text-red-300"
        >
          {state.message}{" "}
          {!fieldErrors && (
            <a href={`mailto:${contactDetails.email}`} className="underline underline-offset-4">
              {contactDetails.email}
            </a>
          )}
        </p>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className={labelCls}>
            Your name {req}
          </label>
          <input
            id="c-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            defaultValue={v.name}
            placeholder="e.g. Alex Morgan"
            aria-invalid={!!fieldErrors?.name}
            aria-describedby={fieldErrors?.name ? "c-name-error" : undefined}
            className={fieldCls}
          />
          {fieldErrors?.name && <p id="c-name-error" className={errorCls}>{fieldErrors.name}</p>}
        </div>
        <div>
          <label htmlFor="c-email" className={labelCls}>
            Email {req}
          </label>
          <input
            id="c-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={v.email}
            placeholder="alex@yourcompany.com"
            aria-invalid={!!fieldErrors?.email}
            aria-describedby={fieldErrors?.email ? "c-email-error" : undefined}
            className={fieldCls}
          />
          {fieldErrors?.email && <p id="c-email-error" className={errorCls}>{fieldErrors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="c-phone" className={labelCls}>
            Phone / WhatsApp {optional}
          </label>
          <input
            id="c-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            defaultValue={v.phone}
            placeholder="+1 555 000 0000"
            className={fieldCls}
          />
        </div>
        <div>
          <label htmlFor="c-website" className={labelCls}>
            Current website {optional}
          </label>
          <input
            id="c-website"
            name="website"
            type="text"
            inputMode="url"
            autoComplete="url"
            defaultValue={v.website}
            placeholder="yourbusiness.com"
            className={fieldCls}
          />
        </div>
      </div>

      <fieldset aria-describedby={fieldErrors?.service ? "c-service-error" : undefined}>
        <legend className={labelCls}>Service needed {req}</legend>
        <div className="flex flex-wrap gap-2">
          {contactServices.map((s) => (
            <label key={s} className="cursor-pointer">
              <input
                type="radio"
                name="service"
                value={s}
                required
                defaultChecked={v.service === s}
                className="peer sr-only"
              />
              <span className="block rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-600 transition-all hover:border-slate-300 hover:text-slate-900 peer-checked:border-cyan-300 peer-checked:bg-cyan-400 peer-checked:text-slate-950 peer-checked:shadow-md peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-cyan-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:text-white dark:peer-checked:text-slate-950">
                {s}
              </span>
            </label>
          ))}
        </div>
        {fieldErrors?.service && <p id="c-service-error" className={errorCls}>{fieldErrors.service}</p>}
      </fieldset>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <fieldset aria-describedby={fieldErrors?.budget ? "c-budget-error" : undefined}>
          <legend className={labelCls}>Budget range {req}</legend>
          <div className="space-y-1.5">
            {budgetRanges.map((b) => (
              <label key={b} className="block cursor-pointer">
                <input
                  type="radio"
                  name="budget"
                  value={b}
                  required
                  defaultChecked={v.budget === b}
                  className="peer sr-only"
                />
                <span className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition-all hover:text-slate-900 peer-checked:border-cyan-500 peer-checked:bg-cyan-50 peer-checked:font-bold peer-checked:text-cyan-800 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-cyan-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400 dark:hover:text-slate-200 dark:peer-checked:border-cyan-400 dark:peer-checked:bg-cyan-500/10 dark:peer-checked:text-cyan-300 [&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100">
                  {b}
                  <CheckCircle2 className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                </span>
              </label>
            ))}
          </div>
          {fieldErrors?.budget && <p id="c-budget-error" className={errorCls}>{fieldErrors.budget}</p>}
        </fieldset>

        <div>
          <label htmlFor="c-timeline" className={labelCls}>
            Timeline
          </label>
          <select
            id="c-timeline"
            name="timeline"
            defaultValue={v.timeline || timelines[timelines.length - 1]}
            className={fieldCls}
          >
            {timelines.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>

          <div className="mt-6 space-y-1 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
            <p className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
              <ShieldCheck className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
              Fixed quote before work starts
            </p>
            <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
              You get a written price for the agreed scope before you pay anything. No hourly billing.
            </p>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="c-message" className={labelCls}>
          Tell me about your project {req}
        </label>
        <textarea
          id="c-message"
          name="message"
          required
          rows={5}
          defaultValue={v.message}
          placeholder="Your main goals, who your customers are, features you need, or websites you like..."
          aria-invalid={!!fieldErrors?.message}
          aria-describedby={fieldErrors?.message ? "c-message-error" : undefined}
          className={`${fieldCls} resize-y`}
        />
        {fieldErrors?.message && <p id="c-message-error" className={errorCls}>{fieldErrors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 py-4 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:brightness-110 disabled:cursor-wait disabled:opacity-60"
      >
        {isPending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            Send my project details
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>
      <p className="text-center text-[11px] text-slate-500 dark:text-slate-400">
        I only use your details to reply to your enquiry. No mailing lists unless you ask.
      </p>
    </form>
  );
}