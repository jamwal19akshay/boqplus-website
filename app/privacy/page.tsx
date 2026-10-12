import type { Metadata } from "next";
import LegalShell from "../components/LegalShell";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy — BOQ+",
  description:
    "How BOQ+ by Verkzo (operated by Akshay Pratap Singh Jamwal) collects, uses, shares and protects your data under India's DPDP Act, 2023.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalShell
      fileNo="P-01"
      title="Privacy Policy"
      updated="13 OCTOBER 2026"
      intro={
        <p>
          This policy explains, in plain language, what the BOQ+ app (Android
          and iOS) and boq.co.in collect, why, who we share it with, and your
          rights under India&apos;s Digital Personal Data Protection Act, 2023
          (&ldquo;DPDP Act&rdquo;).
        </p>
      }
    >
      <h2>01 — Who we are</h2>
      <p>
        BOQ+ by Verkzo, operated by Akshay Pratap Singh Jamwal (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;).
        For the DPDP Act, we are the <strong>Data Fiduciary</strong> for the
        personal data described here and you are the{" "}
        <strong>Data Principal</strong>. For anything in this policy, including
        grievances, write to{" "}
        <a href="mailto:akshay@boq.co.in">akshay@boq.co.in</a>.
      </p>

      <h2>02 — What we collect, and why</h2>
      <div className="legal-table-scroll">
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Where it comes from</th>
              <th>Why</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Account details — email address, name (if your Apple or Google
                account shares it), sign-in identifier, or a guest ID if you
                don&apos;t sign in
              </td>
              <td>You, at sign-in; the app, for guests</td>
              <td>
                Creating and securing your account, restoring purchases, support
              </td>
            </tr>
            <tr>
              <td>
                Firm profile — your state, city (if you add it), and the
                departments and work types you follow
              </td>
              <td>You, in the app</td>
              <td>Showing relevant tenders and alerts, and sensible defaults</td>
            </tr>
            <tr>
              <td>Firm name (optional)</td>
              <td>You, in the app</td>
              <td>
                Printing it on BOQs you export. If you add it, we also look for
                your firm&apos;s bids in public tender results to build your
                private track record (win rate, margin vs L1). Only you see this.
                Remove the firm name to stop it.
              </td>
            </tr>
            <tr>
              <td>BOQ files and comparative statements you upload</td>
              <td>You</td>
              <td>
                We read the file to extract its items, then{" "}
                <strong>delete the file right after reading</strong>. We keep the
                extracted items, the file name and a fingerprint so you can keep
                working on it.
              </td>
            </tr>
            <tr>
              <td>Rates you enter, scenarios, exports, and feedback you send</td>
              <td>You</td>
              <td>Providing the service and answering you</td>
            </tr>
            <tr>
              <td>
                Purchase data — plan, product, purchase and expiry dates, store
                transaction ID
              </td>
              <td>Apple App Store / Google Play</td>
              <td>
                Activating your plan or credits, refunds and disputes. We never
                see card or bank details.
              </td>
            </tr>
            <tr>
              <td>
                App usage events — e.g. app opened, BOQ uploaded, report viewed,
                plans screen viewed, purchase made
              </td>
              <td>The app, automatically</td>
              <td>Understanding what works and fixing what doesn&apos;t</td>
            </tr>
            <tr>
              <td>
                Device identifiers — an install ID, a push-notification token,
                and — only if you allow ad measurement — your device&apos;s
                advertising identifier
              </td>
              <td>The app</td>
              <td>
                Sending notifications, analytics, and (with your permission) ad
                measurement
              </td>
            </tr>
            <tr>
              <td>
                Crash reports — device model, OS and app version, and technical
                error details. No screenshots and no BOQ content.
              </td>
              <td>The app, when it crashes</td>
              <td>Fixing bugs</td>
            </tr>
            <tr>
              <td>
                How you found BOQ+ — on iPhone, Apple&apos;s ad attribution
                token; on Android, the Google Play install referrer
              </td>
              <td>The app, on first launch</td>
              <td>Knowing which campaign or link led to the install</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="legal-callout">
        We do not collect your contacts, SMS, call logs, photos or precise
        location. We never sell your data. We never send your BOQs, rates, firm
        name or email to advertising companies.
      </p>

      <h3>A note on comparative statements</h3>
      <p>
        Comparative statements are documents published by government departments
        after a tender opens. They contain firm names and bid amounts of the
        bidders — information the department has already made public through the
        procurement process. When you upload one, we extract those
        already-published figures into our market index so every user (including
        you) sees accurate rate bands and competition data. Other users can see
        the market data, never <em>who uploaded it</em>, and never your own
        BOQs, rates, or track record.
      </p>

      <h2>03 — Ad measurement</h2>
      <p>
        We advertise BOQ+ on Meta (Facebook and Instagram) and may advertise on
        Apple and Google. To know which ads bring people to BOQ+, and{" "}
        <strong>only if you allow it</strong>, the app sends Meta and Google a few
        events —
        install/app open, BOQ uploaded, plans screen viewed, and purchases (with
        the amount) — together with your device&apos;s advertising identifier.
      </p>
      <ul>
        <li>
          <strong>iPhone:</strong> you choose in Apple&apos;s &ldquo;Allow
          tracking&rdquo; prompt, and can change it any time in iOS Settings →
          Privacy &amp; Security → Tracking.
        </li>
        <li>
          <strong>Android:</strong> you choose in our &ldquo;Allow ad
          measurement&rdquo; prompt, which stays off until you answer, and can
          change it any time in BOQ+ Settings.
        </li>
      </ul>
      <p>
        If you say no, nothing is sent to Meta or Google for ad measurement and
        BOQ+ works
        exactly the same. Separately, Apple&apos;s ad attribution (iPhone) and
        the Google Play install referrer (Android) tell us which campaign led to
        an install. They don&apos;t follow you across other apps.
      </p>

      <h2>04 — Consent and legal basis</h2>
      <p>
        We process your personal data on the consent you give when you start
        using BOQ+ and accept this policy, for the purposes above and no others.
        Ad measurement has its own separate permission (Section 03). Where the
        DPDP Act allows processing for legitimate uses (Section 7), such as data
        you provide voluntarily for a specific purpose or compliance with law, we
        rely on that. You can withdraw consent any time by switching off ad
        measurement or deleting your account (Section 07); withdrawal
        doesn&apos;t affect processing already done, and some records (e.g.
        purchase records) may be kept where law requires.
      </p>

      <h2>05 — Who we share data with</h2>
      <p>
        These companies process data for us, only for the purposes listed:
      </p>
      <ul>
        <li>
          <strong>Meta Platforms</strong> (Facebook SDK) — app events and
          advertising identifier, <strong>only with your permission</strong> —
          ad measurement.
        </li>
        <li>
          <strong>OneSignal</strong> — your BOQ+ user ID and push token — sending
          tender alerts and deadline reminders.
        </li>
        <li>
          <strong>Sentry</strong> — crash reports — fixing crashes.
        </li>
        <li>
          <strong>Google</strong> — Firebase / Google Analytics (usage
          analytics; your advertising identifier and ad measurement only with
          your permission), Google Sign-In, Google Play billing and install
          referrer.
        </li>
        <li>
          <strong>Apple</strong> — Sign in with Apple, App Store purchases, ad
          attribution.
        </li>
        <li>
          <strong>Anthropic</strong> — when our parser can&apos;t read a BOQ
          layout on its own, the column headers and a few sample rows are sent to
          Anthropic&apos;s AI model to identify the columns. Anthropic does not
          use this data to train its models.
        </li>
        <li>
          <strong>TypeSafe</strong> (Jev) — when we fill rates, the descriptions
          of some BOQ items are sent to TypeSafe&apos;s model to decide which
          published tender items they match. Only the item descriptions are sent,
          never your name, firm or rates.
        </li>
        <li>
          <strong>Railway</strong> (servers and database) and{" "}
          <strong>Cloudflare</strong> (storage for PDF reports you generate).
        </li>
        <li>
          <strong>Authorities</strong> — where Indian law, a court order or a
          lawful government request requires it.
        </li>
      </ul>
      <p>
        Some of these companies process data outside India, under contract, as
        the DPDP Act permits. We never share your BOQs, rates or track record
        with other users or with anyone for their own use.
      </p>

      <h2>06 — Storage, security and retention</h2>
      <p>
        Data is encrypted in transit and at rest, with access controls and
        logging. We maintain reasonable security safeguards as Section 8 of the
        DPDP Act requires, and will notify the Data Protection Board of India and
        affected users of a personal data breach as the Act and its rules
        require.
      </p>
      <p>
        Uploaded BOQ files and comparative statements are deleted right after
        they are read. Crash reports are kept for up to 90 days. We keep the rest
        while your account is active. After account deletion, personal data is
        erased or anonymised within 90 days, except records we must keep under
        law (e.g. tax and purchase records). Market-index data from
        government-published comparative statements is kept in de-identified
        form and is not linked to your account.
      </p>

      <h2>07 — Your rights under the DPDP Act</h2>
      <ul>
        <li>
          <strong>Access:</strong> ask for a summary of the personal data we hold
          about you and how it is processed.
        </li>
        <li>
          <strong>Correction and erasure:</strong> correct inaccurate data or ask
          us to delete it. You can edit your firm profile in-app and delete any
          uploaded BOQ yourself.
        </li>
        <li>
          <strong>Account deletion:</strong> delete your account from the
          app&apos;s settings or by emailing us; this removes your BOQs, rates,
          preferences, and profile as described in Section 06.
        </li>
        <li>
          <strong>Ad measurement:</strong> switch it off any time — see Section
          03.
        </li>
        <li>
          <strong>Grievance redressal:</strong> write to{" "}
          <a href="mailto:akshay@boq.co.in">akshay@boq.co.in</a>; we aim to
          respond within 15 days. If you are not satisfied, you may complain to
          the <strong>Data Protection Board of India</strong>.
        </li>
        <li>
          <strong>Nomination:</strong> you may nominate a person to exercise
          these rights on your behalf in case of death or incapacity.
        </li>
      </ul>

      <h2>08 — Children</h2>
      <p>
        BOQ+ is a business tool for contractors and is not directed at children.
        We do not knowingly process the data of anyone under 18.
      </p>

      <h2>09 — Changes to this policy</h2>
      <p>
        If we materially change this policy, we will notify you in the app before
        the change takes effect and update the date above. Continued use after
        notice means acceptance; if you disagree, you can delete your account.
      </p>

      <p>
        <em>
          Questions? Write to{" "}
          <a href="mailto:akshay@boq.co.in">akshay@boq.co.in</a>.
        </em>
      </p>
    </LegalShell>
  );
}
