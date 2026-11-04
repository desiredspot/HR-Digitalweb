# Freelance Web & Digital Marketing Website

Next.js 16 (App Router) + Tailwind CSS 4 + Sanity CMS blog.
Every public page is statically generated, so it loads fast and scores high on Lighthouse.

**Tested Lighthouse scores (production build):**

| | Performance | Accessibility | Best Practices | SEO |
| --- | --- | --- | --- | --- |
| Mobile | 96–99 | 100 | 100 | 100 |
| Desktop | 100 | 100 | 100 | 100 |

---

## 1. Run it locally

Requires Node.js 20.9 or newer.

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

Production check:

```bash
npm run build && npm start
```

## 2. Put in your details (5 minutes)

| What | Where |
| --- | --- |
| Brand name, your name, email, phone, WhatsApp, city, socials, booking link | `src/content/site.ts` |
| Service page copy, FAQs, keywords, meta titles | `src/content/services.ts` |
| Pricing table | `src/app/(site)/pricing/page.tsx` (top of file) |
| Portfolio projects | `src/content/portfolio.ts` |
| Logo | `src/components/Logo.tsx` and `src/app/favicon.webp` |
| Colours and fonts | `src/app/globals.css` (`@theme` block) |

Set `bookingUrl` in `site.ts` to your GoHighLevel calendar link and every "Book a free call" button will open it.

## 3. Connect the Sanity blog

1. Create a free project at <https://www.sanity.io/manage> (or run `npx sanity init --env`).
2. Copy the **Project ID** into `.env.local` as `NEXT_PUBLIC_SANITY_PROJECT_ID`. Dataset: `production`.
3. In Sanity Manage → **API → CORS origins**, add `http://localhost:3000` and your live domain, with **Allow credentials** ticked.
4. Open **`/studio`** on your site, log in, and write posts. The Studio is built in; there's nothing else to host.
5. Optional: import starter categories and an author:
   ```bash
   npx sanity dataset import sanity-seed/starter.ndjson production
   ```

Each post has an **SEO** tab: SEO title, meta description, focus keyword and FAQs (FAQs add rich-result schema automatically).

### Publish instantly (real-time updates)

Pages are static for speed and refresh the moment you publish:

1. Generate a long random string and set it as `SANITY_REVALIDATE_SECRET` in your hosting environment variables.
2. In Sanity Manage → **API → Webhooks → Create webhook**:
   - URL: `https://www.yourdomain.com/api/revalidate`
   - Dataset: `production`
   - Trigger on: Create, Update, Delete
   - Filter: `_type in ["post", "author", "category"]`
   - Projection: `{_type}`
   - Secret: the same value as `SANITY_REVALIDATE_SECRET`
3. Publish a post. The blog, home page and sitemap update within seconds. (Without the webhook, they still refresh every hour.)

## 4. Contact form → GoHighLevel

The form works without JavaScript and posts to `/api/contact`, which forwards the enquiry as JSON to `CONTACT_WEBHOOK_URL`.

In GoHighLevel: **Automation → Workflows → Create** → trigger **Inbound Webhook** → copy its URL into `CONTACT_WEBHOOK_URL`. Map the fields `name`, `email`, `phone`, `website`, `service`, `budget`, `timeline`, `message` to a contact, then add your follow-up SMS/email steps.

Zapier, Make or Formspree webhook URLs work the same way. A hidden honeypot field blocks basic spam bots.

## 5. Deploy (Vercel recommended)

1. Push this folder to a GitHub repository.
2. Import it at <https://vercel.com/new>.
3. Add the environment variables from `.env.example` (set `NEXT_PUBLIC_SITE_URL` to your real domain).
4. Add your domain in Vercel → Settings → Domains.

## 6. After launch: SEO checklist

- [ ] Verify the site in Google Search Console (put the code in `NEXT_PUBLIC_GSC_VERIFICATION`) and submit `https://yourdomain.com/sitemap.xml`.
- [ ] Create a Google Business Profile with the same name, phone and city as `site.ts`.
- [ ] Add Google Analytics 4 if you want it (use `@next/third-parties` so it doesn't slow the page).
- [ ] Publish 1–2 blog posts a week, each linking to its matching service page.
- [ ] Replace portfolio placeholders with real projects and add real testimonials once you have them.
- [ ] Have the privacy policy and terms reviewed for your jurisdiction.

## What's built in

- **Pages:** Home, About, Services, 8 service pages, Process, Portfolio, Pricing, FAQ, Blog, Blog post, Contact, Thank-you, Privacy, Terms, branded 404.
- **SEO:** unique title, description, keywords and canonical URL per page; Open Graph and Twitter cards; auto-generated social image; `sitemap.xml` (includes blog posts); `robots.txt`; web manifest.
- **Structured data (JSON-LD):** ProfessionalService, WebSite, Service, FAQPage, BreadcrumbList, HowTo, OfferCatalog, Blog, BlogPosting, AboutPage, ContactPage.
- **Speed:** static generation, self-hosted variable fonts with metric-matched fallbacks (no layout shift), inlined CSS, modern-browser JS targets, AVIF/WebP images from Sanity, near-zero client JavaScript (the mobile menu uses native HTML).
- **Accessibility:** semantic landmarks, skip link, visible focus states, labelled form fields, reduced-motion support, WCAG AA colour contrast.
- **Security headers:** HSTS, nosniff, frame options, referrer and permissions policy.

## Project structure

```
src/
  app/
    (site)/          public pages (one folder per URL)
    (studio)/studio/ Sanity Studio at /studio
    api/contact/     contact form handler
    api/revalidate/  Sanity webhook for instant updates
    sitemap.ts, robots.ts, opengraph-image.tsx, manifest.ts
  components/        Header, Footer, page blocks, blog grid
  content/           site.ts, services.ts, portfolio.ts  ← edit these
  lib/seo.ts         metadata and schema helpers
  sanity/            client, queries, schemas
sanity.config.ts     Studio configuration
```
