import type { Metadata } from "next";
import LegalShell from "../components/LegalShell";

export const metadata: Metadata = {
  title: "Delete Your Account — BOQ+",
  description:
    "How to delete your BOQ+ account and data — from the app's settings, or by emailing support@boq.co.in.",
};

export default function DeleteAccountPage() {
  return (
    <LegalShell
      fileNo="D-01"
      title="Delete Your Account"
      updated="13 AUGUST 2026"
      intro={
        <p>
          You can delete your BOQ+ account and the data attached to it at any
          time — from inside the app, or by writing to us. This page explains
          both routes, exactly what is erased, and the narrow set of records we
          are required to keep. It restates, in one place, the rights set out in
          our <a href="/privacy">Privacy Policy</a>.
        </p>
      }
    >
      <h2>01 — Delete from the app (fastest)</h2>
      <ol>
        <li>Open BOQ+ and go to your account settings.</li>
        <li>
          Choose <strong>Delete account</strong>.
        </li>
        <li>
          Confirm. The request is recorded immediately and your account is
          closed — you are signed out and can no longer sign in with it.
        </li>
      </ol>
      <p>
        No email, ticket, or reply from us is needed. This is the route we
        recommend, because it verifies it is really you making the request.
      </p>

      <h2>02 — Or ask us by email</h2>
      <p>
        If you cannot reach the in-app option — you have lost access to your
        device, or you can no longer sign in — email{" "}
        <a href="mailto:support@boq.co.in">support@boq.co.in</a> from{" "}
        <strong>the email address registered on the account</strong>, asking us
        to delete it. Writing from the registered address is how we confirm the
        request is yours; if you write from a different address we will ask you
        for something that verifies ownership before we act.
      </p>
      <p>
        We acknowledge within 48 hours and action the deletion within 7 working
        days.
      </p>

      <h2>03 — What deletion removes</h2>
      <p>
        Deleting your account removes the personal data we hold about you and
        your firm:
      </p>
      <ul>
        <li>
          <strong>Account details</strong> — your email address and sign-in
          identifier.
        </li>
        <li>
          <strong>Firm profile</strong> — firm name and any registration details
          you added.
        </li>
        <li>
          <strong>Your BOQs and the rates you entered</strong> — every uploaded
          BOQ, your filled rates, and the totals and BidIQ analysis derived from
          them.
        </li>
        <li>
          <strong>Your track record</strong> — the private win-rate and
          margin-vs-L1 history built from comparative statements matched to your
          firm.
        </li>
        <li>
          <strong>Tender preferences</strong> — saved departments, locations,
          value ranges, keywords, and closing-date alerts.
        </li>
        <li>
          <strong>Device and usage data</strong> tied to your account, including
          crash and feature-usage events.
        </li>
      </ul>
      <p>
        Personal data is erased or anonymised{" "}
        <strong>within 90 days of deletion</strong>. Deleting your account is
        also how you withdraw the consent you gave at sign-up; withdrawal does
        not affect processing already carried out.
      </p>

      <h2>04 — What we must keep, and why</h2>
      <ul>
        <li>
          <strong>Purchase records</strong> — plan, price, purchase and expiry
          dates, and store order ID. Indian tax and accounting law requires us
          to retain these. They are kept for that purpose alone and are not used
          to profile you.
        </li>
        <li>
          <strong>Market-index data</strong> extracted from comparative
          statements. These are figures the procuring department has already
          published — bidder names, bid amounts, and results. They are retained
          in <strong>de-identified</strong> form and are not linked to your
          account, so deleting your account does not withdraw them from the
          index. Other users could never see who uploaded them in the first
          place.
        </li>
      </ul>

      <h2>05 — Deleting your account is not the same as cancelling a plan</h2>
      <p>
        Subscriptions are billed by Google Play or the Apple App Store, not by
        us, so <strong>deleting your account does not cancel them</strong>. If
        you have an active subscription, cancel it in your Play Store or App
        Store subscription settings <em>first</em> — otherwise it may keep
        renewing after your account is gone.
      </p>
      <p className="legal-callout">
        Deletion is permanent. Unused credits and any remaining paid time are
        forfeited when you delete, and cannot be restored or transferred to a
        new account. See our <a href="/refund">Refund Policy</a> for what is and
        is not refundable before you delete.
      </p>

      <h2>06 — If something goes wrong</h2>
      <p>
        If a deletion request is not honoured, write to{" "}
        <a href="mailto:support@boq.co.in">support@boq.co.in</a> — we aim to
        respond within 15 days. If you are not satisfied with our response, you
        may complain to the <strong>Data Protection Board of India</strong>{" "}
        under the Digital Personal Data Protection Act, 2023.
      </p>
    </LegalShell>
  );
}
