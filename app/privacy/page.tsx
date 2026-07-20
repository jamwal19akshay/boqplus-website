import type { Metadata } from "next";
import LegalShell from "../components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy — BOQ+",
  description:
    "How BOQ+ collects, uses, and protects your data under India's DPDP Act, 2023.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      updated="19 July 2026"
      intro={
        <p>
          This policy explains, in plain language, what data the BOQ+ app and
          boq.co.in collect, why, and what rights you have under the Digital
          Personal Data Protection Act, 2023 (&ldquo;DPDP Act&rdquo;).
        </p>
      }
    >
      <h2>1. Who we are</h2>
      <p>
        BOQ+ (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates the BOQ+ mobile
        application for Android and iOS and the website boq.co.in. For the
        purposes of the DPDP Act, we are the <strong>Data Fiduciary</strong> for
        the personal data described below, and you are the{" "}
        <strong>Data Principal</strong>. You can reach us for anything in this
        policy at <a href="mailto:support@boq.co.in">support@boq.co.in</a>.
      </p>

      <h2>2. What we collect, and why</h2>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Where it comes from</th>
            <th>Why we process it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Account details — email address, sign-in identifier</td>
            <td>You, at sign-up</td>
            <td>Creating and securing your account; support</td>
          </tr>
          <tr>
            <td>
              Firm profile — firm name and any registration details you choose
              to add
            </td>
            <td>You, in the app</td>
            <td>
              Matching your firm in comparative statements you upload, to build
              your private track record (win rate, margin vs L1)
            </td>
          </tr>
          <tr>
            <td>BOQ files and the rates you enter</td>
            <td>You, when you upload a tender BOQ and fill rates</td>
            <td>
              Providing the core service — parsing the BOQ, computing totals,
              generating BidIQ analysis for you
            </td>
          </tr>
          <tr>
            <td>Comparative statements you upload</td>
            <td>You, when you upload tender results</td>
            <td>
              Building your track record, and improving the market-intelligence
              index (bidder names, bid amounts, and results as published by the
              procuring department)
            </td>
          </tr>
          <tr>
            <td>
              Tender preferences — departments, locations, value ranges,
              keywords
            </td>
            <td>You, in tender search and filters</td>
            <td>Showing you relevant tenders and closing-date alerts</td>
          </tr>
          <tr>
            <td>
              Purchase data — plan, price, purchase and expiry dates, store
              order ID
            </td>
            <td>Google Play / Apple App Store</td>
            <td>
              Activating your subscription or credits, honouring the 12-month
              credit validity, handling refunds and disputes
            </td>
          </tr>
          <tr>
            <td>
              Device and usage data — device model, OS version, crash logs,
              feature-usage events
            </td>
            <td>Automatically, from the app</td>
            <td>Fixing bugs, keeping the app working on your device</td>
          </tr>
        </tbody>
      </table>
      <p>
        We do <strong>not</strong> collect your card or bank details — payments
        happen entirely inside the Play Store or App Store. We do not collect
        your contacts, SMS, call logs, or precise location. We do not use your
        data for advertising, and we do not sell it to anyone.
      </p>

      <h3>A note on comparative statements</h3>
      <p>
        Comparative statements are documents published by government departments
        after a tender opens. They contain firm names and bid amounts of the
        bidders — information the department has already made public through
        the procurement process. When you upload one, we extract those
        already-published figures into our market index so every user
        (including you) sees accurate rate bands and competition data. Other
        users can see the market data, never <em>who uploaded it</em>, and
        never your own BOQs, rates, or track record.
      </p>

      <h2>3. Consent and legal basis</h2>
      <p>
        We process your personal data on the basis of the consent you give when
        you create an account and accept this policy, for the purposes listed
        above and no others. Where the DPDP Act permits processing for certain
        legitimate uses (Section 7) — for example, data you voluntarily provide
        for a specified purpose, or compliance with law — we rely on that. You
        may withdraw consent at any time by deleting your account (Section 6
        below); withdrawal does not affect processing already done, and some
        records (e.g., purchase records) may be retained where law requires.
      </p>

      <h2>4. Who we share data with</h2>
      <ul>
        <li>
          <strong>Service providers (Data Processors):</strong> cloud hosting
          and database providers, crash-reporting and analytics tooling — bound
          by contract to process data only on our instructions.
        </li>
        <li>
          <strong>Google / Apple:</strong> purchase processing and app
          distribution, under their own privacy policies.
        </li>
        <li>
          <strong>Authorities:</strong> where required by Indian law, court
          order, or a lawful government request.
        </li>
      </ul>
      <p>
        We never share your BOQs, your entered rates, or your firm&apos;s track
        record with other users or with third parties for their own use.
      </p>

      <h2>5. Storage, security, and retention</h2>
      <p>
        Data is stored on cloud infrastructure with encryption in transit and
        at rest, access controls, and logging. We maintain reasonable security
        safeguards as required by Section 8 of the DPDP Act; in the event of a
        personal data breach we will notify the Data Protection Board of India
        and affected users as the Act and its rules require.
      </p>
      <p>
        We keep your data while your account is active. After account deletion,
        personal data is erased or anonymised within 90 days, except records we
        must keep under law (e.g., tax and purchase records). Market-index data
        extracted from government-published comparative statements is retained
        in de-identified form and is not linked to your account.
      </p>

      <h2>6. Your rights under the DPDP Act</h2>
      <ul>
        <li>
          <strong>Access:</strong> ask for a summary of the personal data we
          hold about you and how it is processed.
        </li>
        <li>
          <strong>Correction and erasure:</strong> correct inaccurate data or
          ask us to delete it. You can edit your firm profile in-app and delete
          any uploaded BOQ yourself.
        </li>
        <li>
          <strong>Account deletion:</strong> delete your account from the
          app&apos;s settings or by emailing us; this removes your BOQs, rates,
          preferences, and profile as described in Section 5.
        </li>
        <li>
          <strong>Grievance redressal:</strong> write to{" "}
          <a href="mailto:support@boq.co.in">support@boq.co.in</a>; we aim to
          respond within 15 days. If you are not satisfied, you may complain to
          the <strong>Data Protection Board of India</strong>.
        </li>
        <li>
          <strong>Nomination:</strong> you may nominate a person to exercise
          these rights on your behalf in case of death or incapacity.
        </li>
      </ul>

      <h2>7. Children</h2>
      <p>
        BOQ+ is a business tool for contractors and is not directed at
        children. We do not knowingly process the data of anyone under 18.
      </p>

      <h2>8. Changes to this policy</h2>
      <p>
        If we materially change this policy, we will notify you in the app
        before the change takes effect and update the date above. Continued use
        after notice means acceptance; if you disagree, you can delete your
        account.
      </p>

      <p>
        <em>
          Questions? Write to{" "}
          <a href="mailto:support@boq.co.in">support@boq.co.in</a>.
        </em>
      </p>
    </LegalShell>
  );
}
