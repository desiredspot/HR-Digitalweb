// src/app/(site)/privacy-policy/page.tsx
// Plain-English privacy policy. Review it against how you actually run the site:
// if you add analytics, ad pixels, chat widgets or new tools, update sections 2 and 4.
import type { Metadata } from "next";
import { ogImage } from "@/lib/og";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { contactDetails } from "@/lib/contact";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";

const UPDATED = "2026-11-04";
const title = "Privacy Policy | HR Digital Web";
const description =
  "How HR DigitalWeb collects, uses and protects the personal data you share through this website's contact, free plan and newsletter forms.";
const path = "/privacy-policy";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { type: "website", url: path, title, description, siteName: siteConfig.name, images: [ogImage("privacy-policy")] },
  twitter: { card: "summary_large_image", title, description, images: [ogImage("privacy-policy").url] },
};

export const dynamic = "force-static";

const email = contactDetails.email;

const sections: LegalSection[] = [
  {
    id: "who-i-am",
    title: "Who I am",
    body: (
      <>
        <p>
          {siteConfig.name} is a freelance web development and digital marketing business run by one person, based in{" "}
          {contactDetails.location}. In this policy, &ldquo;I&rdquo;, &ldquo;me&rdquo; and &ldquo;my&rdquo; mean{" "}
          {siteConfig.name}, and &ldquo;you&rdquo; means anyone who visits this website or contacts me through it.
        </p>
        <p>
          I decide why and how your personal data is used, so I am responsible for it (a &ldquo;data fiduciary&rdquo;
          under India&apos;s Digital Personal Data Protection Act, 2023, and a &ldquo;controller&rdquo; under the EU and
          UK GDPR). You can reach me about anything in this policy at <a href={`mailto:${email}`}>{email}</a>.
        </p>
      </>
    ),
  },
  {
    id: "what-i-collect",
    title: "What personal data I collect",
    body: (
      <>
        <p>I only collect what you choose to send me, plus basic technical data needed to run the website:</p>
        <ul>
          <li>
            <strong>Contact form:</strong> your name, email address, phone or WhatsApp number (optional), current website
            (optional), the service you need, your budget range, timeline and the project details you type.
          </li>
          <li>
            <strong>Free plan form:</strong> your name, email address, website (optional), business type, main goal and
            what you tell me about your business.
          </li>
          <li>
            <strong>Newsletter sign-up:</strong> your email address.
          </li>
          <li>
            <strong>Emails, calls and messages:</strong> anything you share when you email me, book a call or message me
            directly, and the details of any project we work on together.
          </li>
          <li>
            <strong>Technical data:</strong> my hosting provider automatically records standard server logs, such as your
            IP address, browser type, the page requested and the time, to keep the site running and secure.
          </li>
        </ul>
        <p>
          Please don&apos;t send sensitive personal data (such as health, financial account or government ID details)
          through the forms. I don&apos;t need it to quote or deliver a project.
        </p>
      </>
    ),
  },
  {
    id: "how-i-use-it",
    title: "Why I use it",
    body: (
      <>
        <p>I use your personal data only for these purposes:</p>
        <ul>
          <li>to reply to your enquiry, prepare a plan or quote, and arrange calls;</li>
          <li>to deliver, invoice and support a project you&apos;ve agreed to;</li>
          <li>to send the newsletter you signed up for (every email lets you unsubscribe);</li>
          <li>to keep the website secure, prevent spam and fix problems;</li>
          <li>to meet legal, tax and accounting obligations.</li>
        </ul>
        <p>
          My legal basis is your <strong>consent</strong> when you submit a form or subscribe, the steps needed to{" "}
          <strong>enter into or perform a contract</strong> with you, and my <strong>legitimate interest</strong> in
          running a secure website. I don&apos;t sell your data, rent it out or use it for advertising profiles.
        </p>
      </>
    ),
  },
  {
    id: "who-i-share-with",
    title: "Services that process your data",
    body: (
      <>
        <p>
          I use a small number of trusted services to run this website. They process data on my behalf and only for the
          purposes above:
        </p>
        <ul>
          <li>
            <strong>EmailJS</strong>: delivers form submissions to my inbox and sends you a confirmation email.
          </li>
          <li>
            <strong>My email provider</strong>: stores the emails and enquiries I receive.
          </li>
          <li>
            <strong>Vercel</strong>: hosts this website and keeps server logs.
          </li>
          <li>
            <strong>Sanity</strong>: stores the blog content. It doesn&apos;t receive your form data.
          </li>
          <li>
            <strong>GoHighLevel</strong> (if you become a lead or client): my CRM for managing enquiries, bookings and
            follow-ups.
          </li>
        </ul>
        <p>
          Some of these services store data on servers outside India, including in the United States and the European
          Union. I only use reputable providers with their own security and privacy commitments. I may also share data if
          the law requires it, for example with tax authorities or in response to a valid legal request.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and local storage",
    body: (
      <>
        <p>
          This website doesn&apos;t use advertising or tracking cookies. It saves two small settings in your
          browser&apos;s local storage so the site remembers them on your next visit:
        </p>
        <ul>
          <li>your light or dark theme choice;</li>
          <li>your preferred currency (USD or INR) on the pricing page.</li>
        </ul>
        <p>
          These stay on your device, are never sent to me and contain no personal data. You can clear them at any time
          in your browser settings.
        </p>
      </>
    ),
  },
  {
    id: "how-long",
    title: "How long I keep it",
    body: (
      <ul>
        <li>
          <strong>Enquiries that don&apos;t become projects:</strong> up to 12 months after our last contact, then
          deleted.
        </li>
        <li>
          <strong>Client project records and invoices:</strong> as long as Indian tax and accounting law requires
          (generally up to 8 years).
        </li>
        <li>
          <strong>Newsletter:</strong> until you unsubscribe.
        </li>
        <li>
          <strong>Server logs:</strong> kept by my hosting provider for a short period under its own retention settings.
        </li>
      </ul>
    ),
  },
  {
    id: "security",
    title: "How I protect it",
    body: (
      <p>
        The website runs over HTTPS. Form submissions are checked on the server and sent through EmailJS using private
        keys that are never exposed in your browser. I keep my accounts protected with strong passwords and two-factor
        authentication where available, and I only access your data to do the work described above. No online service
        is 100% secure, but if a breach ever affects your data, I&apos;ll tell you and the relevant authorities as the
        law requires.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>Depending on where you live, you have the right to:</p>
        <ul>
          <li>ask what personal data I hold about you and how I use it;</li>
          <li>ask me to correct, update or complete it;</li>
          <li>ask me to delete it, unless I must keep it by law;</li>
          <li>withdraw your consent at any time (this doesn&apos;t affect anything done before you withdrew it);</li>
          <li>unsubscribe from the newsletter using the link in any email;</li>
          <li>nominate someone to exercise your rights if you die or become unable to (under Indian law);</li>
          <li>object to or restrict certain uses, and receive a copy of your data (under the GDPR).</li>
        </ul>
        <p>
          To use any of these rights, email <a href={`mailto:${email}`}>{email}</a>. I&apos;ll reply within 30 days and
          may ask you to confirm your identity first.
        </p>
      </>
    ),
  },
  {
    id: "complaints",
    title: "Questions and complaints",
    body: (
      <>
        <p>
          If you have a concern about how I handle your data, please contact me first at{" "}
          <a href={`mailto:${email}`}>{email}</a> so I can put it right. I act as my own grievance officer and will
          respond within 30 days.
        </p>
        <p>
          If you&apos;re not satisfied, you can complain to the Data Protection Board of India, or, if you live in the EU
          or UK, to your local data protection authority.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        This website and my services are for businesses and adults. I don&apos;t knowingly collect personal data from
        anyone under 18. If you think a child has sent me their details, email me and I&apos;ll delete them.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        I&apos;ll update this page if the way I handle data changes, for example if I add a new tool. The date at the
        top shows the latest version. For big changes that affect you, I&apos;ll tell you by email if I have your
        address. See also the <Link href="/terms">terms of service</Link>.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Your privacy"
      title="Privacy policy"
      updated={UPDATED}
      intro={
        <p>
          This page explains, in plain English, what personal data I collect through this website, why I collect it, who
          helps me process it and the choices you have.
        </p>
      }
      sections={sections}
    />
  );
}