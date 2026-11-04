// src/lib/leads.ts
// Sends every website form (contact, free plan, newsletter) through EmailJS.
// Runs on the server only (it's imported by "use server" actions), so your keys stay private.
//
// .env.local (and Vercel → Settings → Environment Variables):
//   EMAILJS_SERVICE_ID=service_xxxxxxx
//   EMAILJS_TEMPLATE_ID=template_xxxxxxx            "New website enquiry" email to you
//   EMAILJS_AUTOREPLY_TEMPLATE_ID=template_yyyyyyy  optional thank-you email to the sender
//   EMAILJS_PUBLIC_KEY=your-public-key              Account → General
//   EMAILJS_PRIVATE_KEY=your-private-key            Account → General
//   LEAD_WEBHOOK_URL=https://...                     optional: ALSO send each lead to GoHighLevel/Zapier
//
// In EmailJS → Account → Security, turn on "Allow EmailJS API for non-browser applications".

const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

export type Lead = {
  /** Shown in the email subject and heading, e.g. "Contact form" */
  form: string;
  name?: string;
  email: string;
  /** Label/value rows shown in the email to you; empty values are skipped */
  fields: [label: string, value: string | undefined][];
  /** Text for the thank-you email. Leave out to skip the auto-reply for this form. */
  autoReply?: string;
};

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

// Builds the details table inserted into the template with {{{details_html}}}.
// Every value is escaped, so nothing a visitor types can change the email's HTML.
function detailsHtml(fields: Lead["fields"]) {
  const rows = fields
    .filter(([, v]) => v && v.trim())
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:13px;white-space:nowrap;vertical-align:top">${escapeHtml(
          label,
        )}</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:14px;white-space:pre-wrap">${escapeHtml(
          value!.slice(0, 5000),
        )}</td></tr>`,
    )
    .join("");
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse">${rows}</table>`;
}

// Plain-text version of the same details, available as {{details_text}}
const detailsText = (fields: Lead["fields"]) =>
  fields
    .filter(([, v]) => v && v.trim())
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");

async function sendEmailJs(templateId: string, params: Record<string, string>) {
  const res = await fetch(EMAILJS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: templateId,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      accessToken: process.env.EMAILJS_PRIVATE_KEY,
      template_params: params,
    }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`EmailJS responded with ${res.status}: ${await res.text()}`);
}

/** Sends a lead. Returns true when the email to you was sent. */
export async function deliverLead(lead: Lead): Promise<boolean> {
  const { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_PRIVATE_KEY } = process.env;
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY || !EMAILJS_PRIVATE_KEY) {
    console.error("EmailJS is not configured (EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_PRIVATE_KEY).");
    return false;
  }

  const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "medium", timeStyle: "short" });
  const name = lead.name?.trim() || "";

  try {
    // 1. The enquiry email to you
    await sendEmailJs(EMAILJS_TEMPLATE_ID, {
      form_name: lead.form,
      from_name: name || lead.email,
      reply_to: lead.email,
      details_html: detailsHtml(lead.fields),
      details_text: detailsText(lead.fields),
      submitted_at: `${submittedAt} IST`,
    });
  } catch (err) {
    console.error(`EmailJS: "${lead.form}" email failed:`, err);
    return false;
  }

  // 2. Optional thank-you email to the sender. A failure here never fails the form.
  const autoReplyId = process.env.EMAILJS_AUTOREPLY_TEMPLATE_ID;
  if (autoReplyId && lead.autoReply) {
    try {
      await sendEmailJs(autoReplyId, {
        to_email: lead.email,
        to_name: name.split(/\s+/)[0] || "there",
        form_name: lead.form,
        reply_message: lead.autoReply,
      });
    } catch (err) {
      console.error(`EmailJS: auto-reply for "${lead.form}" failed:`, err);
    }
  }

  // 3. Optional copy to GoHighLevel/Zapier, so leads can still land in your CRM
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: `Website: ${lead.form}`,
          name,
          email: lead.email,
          ...Object.fromEntries(lead.fields.map(([k, v]) => [k, v ?? ""])),
          submittedAt: new Date().toISOString(),
        }),
        cache: "no-store",
      });
    } catch (err) {
      console.error("Lead webhook failed:", err);
    }
  }

  return true;
}