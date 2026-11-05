import {
  ArrowLeftRight,
  ArrowRight,
  Calendar,
  CheckCircle2,
  GitBranch,
  Layers,
  Layout,
  Settings,
  Sparkles,
  Target,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { QuoteDialogTrigger } from "@/components/services/quote/ServiceQuoteDialog";
import { GhlServiceTabs } from "./GhlServiceTabs";

// "GoHighLevel services" section for /services/gohighlevel-crm.
// Server component; only the pill switching is client-side (GhlServiceTabs).
// Every service panel is in the HTML. id="automations" is the target of the hero's
// "Explore the automations" button. Buttons open the hero's quote dialog.
//
// GHL workflows are built visually, so the "code" window shows each setup the way it's
// configured (DNS records, workflow steps, field mapping), labelled as examples.

const ghlServices = [
  {
    key: "account-setup",
    icon: Settings,
    title: "Account setup and deliverability",
    badge: "Foundation",
    bestFor: "New GHL accounts or ones that were never set up properly",
    desc: "The technical foundation: your branding and custom domains, LC Phone or Twilio numbers, LC Email and the SPF, DKIM and DMARC records that help your emails reach the inbox.",
    highlights: [
      "Custom domains for funnels, emails and links",
      "SPF, DKIM and DMARC records set up and verified",
      "Phone numbers and A2P 10DLC registration for US texting",
    ],
    file: "DNS records",
    code: `# Sending domain for LC Email
mg.yourdomain.com       TXT  "v=spf1 include:mailgun.org ~all"
pic._domainkey.mg...    TXT  "k=rsa; p=MIGfMA0GCSqG..."

# DMARC policy for your main domain
_dmarc.yourdomain.com   TXT  "v=DMARC1; p=quarantine; rua=mailto:dmarc@yourdomain.com"`,
  },
  {
    key: "pipelines",
    icon: GitBranch,
    title: "Sales pipelines",
    badge: "Sales process",
    bestFor: "Teams losing track of deals and follow-ups",
    desc: "Pipelines mapped to how your team actually sells, with opportunities that move stage automatically, deal values you can report on and alerts when a lead goes quiet.",
    highlights: [
      "Stages and opportunity values that match your sales process",
      "Automatic stage changes and follow-up tasks",
      "Alerts for deals that have gone quiet",
    ],
    file: "workflow: proposal-follow-up",
    code: `Trigger:  Pipeline stage changed
          Discovery call → Proposal sent

Action:   Internal notification → assigned rep
Action:   Wait 2 days
If/else:  Still in "Proposal sent"?
  Yes →   Create task "Follow up on proposal"
          Send SMS check-in to contact`,
  },
  {
    key: "funnels",
    icon: Layout,
    title: "Funnels and booking pages",
    badge: "Funnels",
    bestFor: "Businesses running ads or offers that need somewhere to send people",
    desc: "GoHighLevel funnel builder pages: landing pages, opt-in forms, multi-step funnels and booking pages, built inside GHL and tracked properly.",
    highlights: [
      "Custom landing pages and multi-step funnels",
      "Forms, surveys and pop-ups that feed straight into the CRM",
      "Mobile-friendly booking pages",
    ],
    file: "funnel step → tracking code",
    code: `<!-- Added to the thank-you step's footer code,
     so ad platforms only count real opt-ins -->
<script>
  fbq('track', 'Lead');
  gtag('event', 'generate_lead');
</script>`,
  },
  {
    key: "calendars",
    icon: Calendar,
    title: "Calendars and reminders",
    badge: "Scheduling",
    bestFor: "Service businesses that rely on booked appointments",
    desc: "Round-robin and team calendars, SMS and email reminders before every appointment, and a follow-up workflow that rebooks people who don't show.",
    highlights: [
      "Round-robin and collective team calendars",
      "SMS and email reminder sequences",
      "Automatic rebooking messages for no-shows",
    ],
    file: "workflow: appointment-reminders",
    code: `Trigger:  Appointment booked

24h before → SMS:
  "Hi {{contact.first_name}}, see you tomorrow
   at {{appointment.start_time}}!"

1h before  → SMS:
  "Quick reminder, here's your link:
   {{appointment.meeting_location}}"`,
  },
  {
    key: "workflows",
    icon: Workflow,
    title: "Automation workflows",
    badge: "Automation",
    bestFor: "Anyone whose leads wait hours (or days) for a reply",
    desc: "GoHighLevel automation that does the follow-up for you: instant replies to new leads, long-term email nurture, Google review requests and missed-call text-back.",
    highlights: [
      "Instant SMS and email replies to new leads",
      "Missed-call text-back",
      "Google review requests after each job",
    ],
    file: "workflow: missed-call-text-back",
    code: `Trigger:  Call status → missed / no answer

Action:   Wait 1 minute
Action:   Send SMS
  "Hi {{contact.first_name}}, sorry we missed
   your call! How can we help?"
Action:   Add tag "missed-call"
Action:   Notify team in the GHL app`,
  },
  {
    key: "integrations",
    icon: Zap,
    title: "Integrations and webhooks",
    badge: "Connections",
    bestFor: "Businesses using several tools that don't talk to each other",
    desc: "GoHighLevel connected to the rest of your stack: Stripe, Facebook and Google lead forms, Zapier, Make and your own website.",
    highlights: [
      "Facebook and Google lead forms synced into GHL",
      "Stripe payments that trigger workflows",
      "Inbound webhooks and API connections",
    ],
    file: "inbound webhook",
    code: `# Your website or app sends a new lead to a
# GHL workflow's "Inbound webhook" trigger
POST https://services.leadconnectorhq.com/hooks/
     {locationId}/webhook-trigger/{triggerId}
Content-Type: application/json

{ "email": "lead@hrdigitalweb.com", "source": "website" }`,
  },
  {
    key: "migrations",
    icon: ArrowLeftRight,
    title: "CRM migrations",
    badge: "Migration",
    bestFor: "Businesses moving off HubSpot, ClickFunnels, Calendly or spreadsheets",
    desc: "Your contacts, tags, custom fields and pipeline data moved into GoHighLevel, mapped carefully and checked before you switch over.",
    highlights: [
      "Imports from HubSpot, ActiveCampaign, Salesforce and spreadsheets",
      "ClickFunnels and WordPress pages rebuilt in GHL",
      "Contacts deduplicated and fields mapped",
    ],
    file: "field mapping",
    code: `Old CRM field            →  GoHighLevel
──────────────────────────────────────────
Lifecycle stage          →  Pipeline stage
Lead source              →  Contact source
Industry                 →  Custom field: industry
List membership          →  Tags`,
  },
  {
    key: "snapshots",
    icon: Layers,
    title: "Agency snapshots",
    badge: "For agencies",
    bestFor: "Agencies setting up the same system for many clients",
    desc: "Packaged GHL snapshots with your funnels, workflows, email templates, pipelines and custom fields ready to load into each new client sub-account.",
    highlights: [
      "Niche-specific account templates",
      "Ready-made workflows and email templates",
      "Faster onboarding for every new sub-account",
    ],
    file: "snapshot contents",
    code: `Snapshot: "Home services starter"
├─ Pipelines   Leads, Estimates
├─ Workflows   Speed to lead, Missed call,
│              Review request, Reactivation
├─ Funnels     Quote request, Booking page
├─ Calendars   Estimates (round-robin)
└─ Fields      Service type, Property size`,
  },
];

export function GhlServices() {
  return (
    <section
      id="automations"
      aria-labelledby="ghl-services-heading"
      className={`${sectionBg.alt} ${sectionDivider} relative isolate scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24`}
    >
      {/* Ambient glow + dot pattern: radial gradients instead of a blur filter */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0
            bg-[radial-gradient(55%_45%_at_50%_50%,rgba(103,232,249,0.18),transparent_70%)]
            dark:bg-[radial-gradient(55%_45%_at_50%_50%,rgba(6,182,212,0.14),transparent_70%)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)]" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-12">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            End-to-end GHL setup
          </p>

          <h2
            id="ghl-services-heading"
            className="text-balance text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            GoHighLevel{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              services
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            From account setup and pipelines to funnels, workflows and agency snapshots. Pick a service to see
            what&apos;s involved.
          </p>
        </header>

        <GhlServiceTabs
          tabs={ghlServices.map(({ key, title, icon: Icon }) => ({
            key,
            label: title,
            icon: <Icon className="h-4 w-4" aria-hidden="true" />,
          }))}
          panels={ghlServices.map((s) => (
            <article
              key={s.key}
              aria-labelledby={`ghl-${s.key}-title`}
              className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 shadow-2xl shadow-slate-200/70 sm:p-12 dark:bg-slate-900/80 dark:shadow-black/40"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
              />

              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
                {/* Details */}
                <div className="space-y-6 lg:col-span-7">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 shadow-lg dark:text-cyan-400">
                        <s.icon className="h-7 w-7" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                          {s.badge}
                        </p>
                        <h3
                          id={`ghl-${s.key}-title`}
                          className="text-2xl font-black text-slate-900 sm:text-3xl dark:text-white"
                        >
                          {s.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="flex items-start gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-50 px-4 py-3 text-sm dark:bg-slate-950">
                    <Target className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                    <span>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Best for:{" "}
                      </span>
                      <span className="font-bold text-slate-900 dark:text-white">{s.bestFor}</span>
                    </span>
                  </p>

                  <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">{s.desc}</p>

                  <div className="space-y-2.5 pt-2">
                    <p className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      What&apos;s involved
                    </p>
                    <ul className="space-y-2.5">
                      {s.highlights.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm font-semibold text-slate-800 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <QuoteDialogTrigger className="flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition-colors hover:bg-cyan-300">
                      Build my GHL system
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </QuoteDialogTrigger>
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400">Tested and handed over with a walkthrough</span>
                  </div>
                </div>

                {/* Code example (always dark, like an editor) */}
                <figure className="lg:col-span-5">
                  <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl">
                    <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-3 font-mono text-xs text-slate-400">
                      <div className="flex items-center gap-2" aria-hidden="true">
                        <span className="inline-block h-3 w-3 rounded-full bg-rose-500/80" />
                        <span className="inline-block h-3 w-3 rounded-full bg-amber-500/80" />
                        <span className="inline-block h-3 w-3 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="flex items-center gap-1.5 text-[11px] text-cyan-400">
                        <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
                        {s.file}
                      </span>
                    </div>
                    <pre tabIndex={0} aria-label="Code example" className="overflow-x-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 p-5 font-mono text-xs leading-relaxed text-slate-300">
                      <code>{s.code}</code>
                    </pre>
                    <div className="flex items-center justify-between border-t border-slate-800 bg-slate-900/90 px-4 py-2.5 font-mono text-[11px] text-slate-400">
                      <span className="text-emerald-400">Example</span>
                      <span>GoHighLevel</span>
                    </div>
                  </div>
                </figure>
              </div>
            </article>
          ))}
        />

        {/* Bottom CTA */}
        <aside
          aria-labelledby="ghl-services-cta-heading"
          className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 shadow-xl sm:p-10 md:flex-row dark:bg-slate-900/80 dark:shadow-2xl"
        >
          <div className="space-y-2 text-center md:text-left">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
              Free GoHighLevel call
            </p>
            <h3 id="ghl-services-cta-heading" className="text-xl font-black text-slate-900 sm:text-2xl dark:text-white">
              Ready to automate your lead follow-up?
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Tell me about your GHL account, migration or snapshot, and get a fixed quote.
            </p>
          </div>

          <QuoteDialogTrigger className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:brightness-110">
            Get a GoHighLevel quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </QuoteDialogTrigger>
        </aside>
      </div>
    </section>
  );
}