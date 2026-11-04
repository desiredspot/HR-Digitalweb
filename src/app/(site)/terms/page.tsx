// src/app/(site)/terms/page.tsx
// Terms for using this website and for projects. Your written proposal for each project
// sets the exact scope, price, timeline and revisions; these terms cover everything else.
// Review every section: anything marked as a default below is a choice you can change.
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { contactDetails } from "@/lib/contact";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";

const UPDATED = "2026-11-04";
const title = "Terms of Service | HR Digital Web";
const description =
  "The terms for using the HR DigitalWeb website and for website, landing page, GoHighLevel and digital marketing projects: quotes, payments, revisions, ownership and support.";
const path = "/terms";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { type: "website", url: path, title, description, siteName: siteConfig.name },
};

export const dynamic = "force-static";

const email = contactDetails.email;

const sections: LegalSection[] = [
  {
    id: "about",
    title: "About these terms",
    body: (
      <>
        <p>
          These terms apply when you use this website and when you hire {siteConfig.name} (&ldquo;I&rdquo;,
          &ldquo;me&rdquo;), a freelance web development and digital marketing business based in{" "}
          {contactDetails.location}, for a project or monthly service. &ldquo;You&rdquo; means the person or business
          using the site or hiring me.
        </p>
        <p>
          Every project starts with a <strong>written proposal</strong> that sets out the scope, price, timeline and
          revision rounds. If the proposal and these terms ever disagree, the proposal wins. By accepting a proposal or
          paying the deposit, you agree to these terms.
        </p>
      </>
    ),
  },
  {
    id: "quotes",
    title: "Quotes and scope",
    body: (
      <>
        <p>
          Prices on the website are starting prices to help you plan. Your actual price is the fixed quote in your
          proposal, which is valid for 30 days.
        </p>
        <p>
          The fixed price covers the scope written in the proposal. If you ask for something outside it, such as extra
          pages, new features or another round of changes, I&apos;ll tell you the cost and timing in writing first and
          only start once you agree. You&apos;ll never be billed for extra work you didn&apos;t approve.
        </p>
      </>
    ),
  },
  {
    id: "payments",
    title: "Payments",
    body: (
      <ul>
        <li>
          <strong>Projects:</strong> 50% deposit to book the project and start work, and 50% on completion, before
          launch or handover. Larger projects may be split into milestones, as stated in the proposal.
        </li>
        <li>
          <strong>Monthly services</strong> (retainers, social media, content, maintenance): billed in advance at the
          start of each month.
        </li>
        <li>
          <strong>Currency and methods:</strong> invoices are in USD or INR. I accept bank transfer, PayPal, Wise and
          Stripe card payments, and UPI for clients in India. Payment provider fees and applicable taxes are shown on the
          invoice.
        </li>
        <li>
          <strong>Due dates:</strong> invoices are due within 7 days. If a payment is late, I may pause work until it&apos;s
          paid, and the timeline moves accordingly.
        </li>
      </ul>
    ),
  },
  {
    id: "your-part",
    title: "What I need from you",
    body: (
      <>
        <p>To keep the project on schedule, you agree to:</p>
        <ul>
          <li>send content, logins, brand files and feedback by the dates we agree;</li>
          <li>give one round of combined feedback at each review point;</li>
          <li>make sure you have the rights to any text, images, logos or data you give me;</li>
          <li>check the final work before you approve it to go live.</li>
        </ul>
        <p>
          Delays in content or feedback move the timeline. If I don&apos;t hear from you for 30 days, I may pause the
          project; we can restart it when you&apos;re ready, subject to my availability.
        </p>
      </>
    ),
  },
  {
    id: "revisions",
    title: "Revisions and approval",
    body: (
      <p>
        Your proposal states the number of revision rounds, usually two at the design stage and two on the preview
        build. A revision round is one set of changes to the agreed scope; new features or a change of direction count as
        extra work. The project is complete when you approve it to launch, or 14 days after I deliver the final version if
        you haven&apos;t raised any issues.
      </p>
    ),
  },
  {
    id: "ownership",
    title: "Ownership",
    body: (
      <>
        <p>
          Once you&apos;ve paid in full, you own the final website code, design and content I create for your project,
          and I hand over all logins and admin access.
        </p>
        <ul>
          <li>
            Third-party tools, themes, plugins, fonts, stock images and platforms (such as WordPress plugins, Unbounce or
            GoHighLevel) stay under their own licences and subscriptions, which are in your name.
          </li>
          <li>
            I keep the right to reuse my general know-how, code snippets and techniques that aren&apos;t specific to your
            business.
          </li>
          <li>
            Until the final payment is made, ownership stays with me and the work is licensed to you only for review.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "third-party-costs",
    title: "Third-party costs",
    body: (
      <p>
        Unless your proposal says otherwise, you pay directly for your domain, hosting, email accounts, software
        subscriptions (such as GoHighLevel, Unbounce or email platforms), paid plugins, stock media and advertising
        spend. I&apos;ll recommend options and help you set them up in your own name, so you&apos;re never locked in to
        working with me.
      </p>
    ),
  },
  {
    id: "support",
    title: "Support after launch",
    body: (
      <p>
        Every project includes 30 days of support after launch to fix bugs in my work and make small tweaks. After that,
        you can choose an optional monthly care plan or pay for changes as you need them. Support doesn&apos;t cover
        problems caused by changes made by you or someone else, third-party updates or outages, or hosting you manage
        yourself.
      </p>
    ),
  },
  {
    id: "results",
    title: "Results",
    body: (
      <p>
        I build every project to current best practice for speed, SEO and conversions, and I&apos;ll always tell you
        honestly what I expect. But search rankings, traffic, leads, sales and social media reach depend on things
        outside my control, such as Google&apos;s algorithms, your market and your competitors. So I can&apos;t
        guarantee specific results, rankings or revenue.
      </p>
    ),
  },
  {
    id: "cancellation",
    title: "Cancelling a project or service",
    body: (
      <ul>
        <li>
          <strong>Projects:</strong> either of us can end a project with written notice. You pay for the work done up to
          that point; the deposit covers the work already started and isn&apos;t refunded. If the work done is worth more
          than the deposit, I&apos;ll invoice the difference; if it&apos;s worth less, I&apos;ll refund the rest. You
          receive the work you&apos;ve paid for.
        </li>
        <li>
          <strong>Monthly services:</strong> cancel any time with 30 days&apos; written notice. The month already paid
          for isn&apos;t refunded.
        </li>
      </ul>
    ),
  },
  {
    id: "portfolio",
    title: "Portfolio",
    body: (
      <p>
        I may show the finished work in my portfolio and on social media after launch, without sharing any confidential
        information. If you&apos;d prefer I don&apos;t, just tell me before we start and I won&apos;t.
      </p>
    ),
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    body: (
      <p>
        I keep your business information, logins and data confidential and only use them to do your project. I handle
        personal data as described in the <Link href="/privacy-policy">privacy policy</Link>. I&apos;m happy to sign
        your NDA before we discuss the project.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Liability",
    body: (
      <p>
        I&apos;ll do the work with reasonable skill and care. To the extent the law allows, my total liability for any
        claim relating to a project is limited to the amount you paid me for that project, and I&apos;m not liable for
        indirect losses such as lost profits, lost data or lost business. Please keep your own backups of important
        content. Nothing in these terms limits liability that can&apos;t be limited by law.
      </p>
    ),
  },
  {
    id: "website-use",
    title: "Using this website",
    body: (
      <>
        <p>
          The articles, guides and other content on this website are for general information only and aren&apos;t
          professional, legal or financial advice. Prices and details can change. You may share links to my content, but
          please don&apos;t copy or republish it without permission.
        </p>
        <p>
          Don&apos;t misuse the website, for example by sending spam through the forms or trying to break its security.
          Links to other websites are provided for convenience; I&apos;m not responsible for their content.
        </p>
      </>
    ),
  },
  {
    id: "law",
    title: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of India. If a disagreement comes up, we&apos;ll first try to sort it out
        together in good faith. If we can&apos;t, the courts in Hyderabad, Telangana have jurisdiction.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <p>
        I may update these terms from time to time. The version in place when you accept a proposal applies to that
        project. Questions? Email <a href={`mailto:${email}`}>{email}</a>.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="The fine print, in plain English"
      title="Terms of service"
      updated={UPDATED}
      intro={
        <p>
          How working with me works: quotes, payments, revisions, ownership and support. Your written proposal covers
          the specifics of each project.
        </p>
      }
      sections={sections}
    />
  );
}