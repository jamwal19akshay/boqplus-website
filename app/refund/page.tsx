import type { Metadata } from "next";
import LegalShell from "../components/LegalShell";
import { PRICING } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Refund Policy — BOQ+",
  description:
    "Refund and cancellation terms for BOQ+ subscriptions and credit packs.",
};

export default function RefundPage() {
  return (
    <LegalShell
      fileNo="R-01"
      title="Refund Policy"
      updated="7 AUGUST 2026"
      intro={
        <p>
          BOQ+ sells digital services — subscriptions and credit packs — through
          the Google Play Store and Apple App Store. This policy sets out when
          refunds apply, consistent with what the app enforces and with Indian
          consumer-protection norms for digital goods.
        </p>
      }
    >
      <h2>01 — Try before you pay</h2>
      <p>
        The free tier — {PRICING.freeBoqs} BOQs, with rate books and offline fill
        — exists so you can fully evaluate BOQ+ before paying anything. No card
        is needed. We encourage you to use it before buying a plan or credits.
      </p>

      <h2>02 — How payments work</h2>
      <p>
        All purchases are processed by Google Play or the Apple App Store. We
        never receive your card or bank details. Because of this, refunds are
        issued <strong>through the store you bought from</strong>, under that
        store&apos;s refund mechanism, with the rules below.
      </p>

      <h2>
        03 — Subscriptions (Annual {PRICING.annualIntro} first year ·{" "}
        {PRICING.annualStandard} thereafter · Quarterly {PRICING.quarterly})
      </h2>
      <ul>
        <li>
          <strong>Cancellation:</strong> cancel anytime from your Play Store or
          App Store subscription settings. You keep full access until the end of
          the period you have paid for; no further renewals are charged.
        </li>
        <li>
          <strong>No pro-rata refunds:</strong> we do not refund the unused
          portion of a subscription period, except as required by law or the
          store&apos;s own policy.
        </li>
        <li>
          <strong>Accidental or unauthorised purchase:</strong> request a refund
          from the store (Google Play: within 48 hours via Play refund flow;
          Apple: via reportaproblem.apple.com). If the store window has passed,
          email us within 7 days of the charge at{" "}
          <a href="mailto:support@boq.co.in">support@boq.co.in</a> and we will
          review it in good faith.
        </li>
        <li>
          <strong>The introductory annual price</strong> ({PRICING.annualIntro}{" "}
          for the first year, {PRICING.annualStandard} a year thereafter) applies
          to your first paid year. If a first-year subscription is refunded, that
          introductory year is treated as unused — a later subscription is
          charged at whatever price is then current.
        </li>
      </ul>

      <h2>
        04 — Credit packs ({PRICING.credits} for {PRICING.creditBoqs} BOQs)
      </h2>
      <ul>
        <li>
          <strong>Validity:</strong> credits are valid for{" "}
          <strong>
            {PRICING.creditValidityMonths} months from the date of purchase
          </strong>
          . This is disclosed at the point of purchase, in the app, and on our
          pricing section. Credits unused after{" "}
          {PRICING.creditValidityMonths} months lapse and are not refundable.
        </li>
        <li>
          <strong>Unused packs:</strong> if you have used <strong>none</strong>{" "}
          of the {PRICING.creditBoqs} credits, you may request a full refund
          within 7 days of purchase by emailing us or using the store&apos;s
          refund flow.
        </li>
        <li>
          <strong>Partially used packs</strong> are not refundable — each credit
          delivers its full value (a complete BOQ + BidIQ run) the moment it is
          consumed.
        </li>
        <li>Credits are non-transferable between accounts.</li>
      </ul>

      <h2>05 — Service failures</h2>
      <p>
        If a credit is consumed but the service demonstrably fails — for example,
        a BidIQ report fails to generate for a valid, parseable BOQ — we will
        re-credit your account, or refund that credit&apos;s value if
        re-crediting is not possible. Report failures to{" "}
        <a href="mailto:support@boq.co.in">support@boq.co.in</a> with the BOQ in
        question; we respond within 7 working days.
      </p>

      <h2>06 — What refunds don&apos;t cover</h2>
      <ul>
        <li>
          Dissatisfaction with a tender outcome. BOQ+ provides market data and
          analysis; it does not and cannot guarantee that any bid will win (see
          our <a href="/terms">Terms of Service</a>).
        </li>
        <li>
          Inability to use the app due to device incompatibility that was
          testable on the free tier.
        </li>
        <li>Purchases refunded once already.</li>
      </ul>

      <h2>07 — How to raise a refund request</h2>
      <ol>
        <li>
          Prefer the store&apos;s own flow (Google Play order history / Apple
          &ldquo;Report a Problem&rdquo;) — it is fastest.
        </li>
        <li>
          Or email <a href="mailto:support@boq.co.in">support@boq.co.in</a> with
          your registered email and store order ID. We acknowledge within 48
          hours and resolve within 7 working days.
        </li>
      </ol>
      <p className="legal-callout">
        Nothing in this policy limits your rights under the Consumer Protection
        Act, 2019 and the Consumer Protection (E-Commerce) Rules, 2020.
      </p>
    </LegalShell>
  );
}
