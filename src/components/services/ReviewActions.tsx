"use server";

// Server action for the "Book a free website review" form on the Services page.
// Sends each request as JSON to LEAD_WEBHOOK_URL (the same GoHighLevel/Zapier webhook
// as your other forms). Set it in .env.local and in Vercel's environment variables.

export type ReviewState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string; fieldErrors?: Partial<Record<"name" | "email" | "website", string>> };

export async function requestWebsiteReview(_prev: ReviewState, formData: FormData): Promise<ReviewState> {
  // Honeypot: hidden from people, usually filled in by bots
  if (String(formData.get("company_fax") ?? "").trim() !== "") return { status: "success" };

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const website = String(formData.get("website") ?? "").trim();
  const notes = String(formData.get("notes") ?? "").trim();

  const fieldErrors: NonNullable<Extract<ReviewState, { status: "error" }>["fieldErrors"]> = {};
  if (name.length < 2) fieldErrors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fieldErrors.email = "Enter a valid email address.";
  // Accepts "example.com", "www.example.com" or a full https:// address
  if (!/^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i.test(website)) {
    fieldErrors.website = "Enter your website address, e.g. yourwebsite.com.";
  }
  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Check the highlighted fields.", fieldErrors };
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("LEAD_WEBHOOK_URL is not set, so the website review request was not delivered.");
    return { status: "error", message: "Something went wrong on my side. Please email me instead." };
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "Website: free website review",
        name,
        email,
        website: /^https?:\/\//i.test(website) ? website : `https://${website}`,
        notes: notes.slice(0, 5000),
        submittedAt: new Date().toISOString(),
      }),
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`Webhook responded with ${res.status}`);
    return { status: "success" };
  } catch (err) {
    console.error("Website review request failed:", err);
    return { status: "error", message: "Your request couldn't be sent. Try again, or email me instead." };
  }
}