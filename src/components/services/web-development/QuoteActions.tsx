"use server";

// Shared server action for the "Get a quote" form on every service page.
// Sends each request as JSON to LEAD_WEBHOOK_URL (the same GoHighLevel/Zapier webhook
// as your other forms), tagged with the service it came from.

export type QuoteState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string; fieldErrors?: Partial<Record<"name" | "email" | "website", string>> };

export async function requestServiceQuote(_prev: QuoteState, formData: FormData): Promise<QuoteState> {
  // Honeypot: hidden from people, usually filled in by bots
  if (String(formData.get("company_fax") ?? "").trim() !== "") return { status: "success" };

  const service = String(formData.get("service") ?? "").trim().slice(0, 100) || "General";
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const website = String(formData.get("website") ?? "").trim();
  const details = String(formData.get("details") ?? "").trim();

  const fieldErrors: NonNullable<Extract<QuoteState, { status: "error" }>["fieldErrors"]> = {};
  if (name.length < 2) fieldErrors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fieldErrors.email = "Enter a valid email address.";
  if (website && !/^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i.test(website)) {
    fieldErrors.website = "Enter a valid website address, e.g. yourwebsite.com.";
  }
  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Check the highlighted fields.", fieldErrors };
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("LEAD_WEBHOOK_URL is not set, so the quote request was not delivered.");
    return { status: "error", message: "Something went wrong on my side. Please email me instead." };
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: `Website: quote request (${service})`,
        service,
        name,
        email,
        website: website && !/^https?:\/\//i.test(website) ? `https://${website}` : website,
        details: details.slice(0, 5000),
        submittedAt: new Date().toISOString(),
      }),
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`Webhook responded with ${res.status}`);
    return { status: "success" };
  } catch (err) {
    console.error("Quote request failed:", err);
    return { status: "error", message: "Your request couldn't be sent. Try again, or email me instead." };
  }
}