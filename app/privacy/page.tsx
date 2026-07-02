import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — BOQ+",
  description: "How BOQ+ collects, uses, and protects your information.",
};

const thirdParties = [
  ["Adapty", "Subscription and entitlement management"],
  ["OneSignal", "Push notifications"],
  ["Facebook", "Ad attribution and measurement (iOS gated behind App Tracking Transparency)"],
  ["Sentry", "Crash and performance reporting"],
  ["Cloudflare R2", "BOQ file storage"],
  ["Railway", "Backend application hosting (India region)"],
];

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 font-display text-2xl font-bold uppercase text-navy">
      {children}
    </h2>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Nav solid />
      <main className="bg-paper pb-24 pt-32">
        <article className="mx-auto max-w-3xl px-6 leading-relaxed text-navy/80">
          <h1 className="font-display text-4xl font-bold uppercase text-navy md:text-5xl">
            BOQ+ Privacy Policy
          </h1>
          <p className="mt-4 font-mono text-sm text-navy/50">
            Last updated: 2 July 2026
          </p>

          <p className="mt-8">
            This Privacy Policy explains how BOQ+ (&quot;the App&quot;,
            &quot;we&quot;, &quot;us&quot;) collects, uses, and protects your
            information. BOQ+ is operated by{" "}
            <strong>Verkzo (Akshay Jamwal)</strong>, a sole proprietorship
            based in Jammu, Jammu &amp; Kashmir, India.
          </p>

          <H2>1. Introduction</H2>
          <p className="mt-4">
            BOQ+ helps contractors discover government tenders and fill Bills
            of Quantities (BOQs) on their phone. This policy applies to the
            BOQ+ Android and iOS apps and any related services. By using BOQ+,
            you agree to the collection and use of information as described
            here.
          </p>

          <H2>2. Information We Collect</H2>
          <ul className="mt-4 list-disc space-y-3 pl-6">
            <li>
              <strong>Account information</strong> — email address and name,
              collected when you sign in with Google or Apple Sign-In.
            </li>
            <li>
              <strong>Usage information</strong> — BOQ files you upload, the
              rates you fill, and the tenders you view.
            </li>
            <li>
              <strong>Device information</strong> — device ID, OS version, and
              app version, used for compatibility and support.
            </li>
            <li>
              <strong>Crash data</strong> — crash and performance diagnostics,
              collected via Sentry.
            </li>
            <li>
              <strong>Purchase history</strong> — subscription and purchase
              records, processed via Adapty and the App Store / Google Play.
            </li>
          </ul>

          <H2>3. How We Use Information</H2>
          <ul className="mt-4 list-disc space-y-3 pl-6">
            <li>To provide BOQ filling and tender discovery functionality.</li>
            <li>
              To generate rate suggestions. These are built from{" "}
              <strong>anonymized, k-anonymized aggregates only</strong> — an
              aggregate rate is only ever shown if it draws from a minimum of
              5 contributors, so no individual contractor&apos;s rate can be
              reverse-identified.
            </li>
            <li>
              To send push notifications for tender alerts and deadline
              reminders.
            </li>
            <li>
              For crash reporting and performance monitoring, so we can fix
              bugs quickly.
            </li>
            <li>
              For ad measurement (Facebook SDK, SKAdNetwork on iOS), to
              understand which channels bring useful installs.
            </li>
          </ul>

          <H2>4. Data Sharing</H2>
          <p className="mt-4">
            We do not sell your personal information. We share limited data
            with the following third-party service providers, each acting on
            our behalf:
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-navy">
                  <th className="py-3 pr-6 font-display uppercase">Third party</th>
                  <th className="py-3 font-display uppercase">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {thirdParties.map(([name, purpose]) => (
                  <tr key={name} className="border-b border-gray-light">
                    <td className="py-3 pr-6 font-mono text-sm">{name}</td>
                    <td className="py-3">{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H2>5. Data Storage</H2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Our backend runs on Railway.</li>
            <li>Uploaded BOQ files are stored in Cloudflare R2.</li>
            <li>Your data is retained for as long as your account is active.</li>
            <li>
              If you delete your account, your data is permanently deleted
              within 30 days.
            </li>
          </ul>

          <H2>6. Your Rights</H2>
          <p className="mt-4">
            You can access, correct, or delete your data at any time. To
            exercise these rights, or for any privacy question, contact us at{" "}
            <a href="mailto:support@boq.co.in" className="font-semibold text-navy underline">
              support@boq.co.in
            </a>
            .
          </p>

          <H2>7. Children</H2>
          <p className="mt-4">
            BOQ+ is intended for adults (18+) who work in government
            contracting and tendering. It is not directed at children, and we
            do not knowingly collect data from anyone under 18.
          </p>

          <H2>8. Contact</H2>
          <p className="mt-4">
            Verkzo
            <br />
            Jammu, Jammu &amp; Kashmir, India
            <br />
            <a href="mailto:support@boq.co.in" className="font-semibold text-navy underline">
              support@boq.co.in
            </a>
          </p>

          <H2>9. Changes to This Policy</H2>
          <p className="mt-4">
            If we make material changes to this policy, we will notify you via
            an in-app notification before the changes take effect.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
