import type { Metadata } from "next";
import LegalShell from "../components/LegalShell";
import { PRICING } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Terms of Service — BOQ+",
  description: "The terms that govern your use of the BOQ+ app and boq.co.in.",
};

export default function TermsPage() {
  return (
    <LegalShell
      fileNo="T-01"
      title="Terms of Service"
      updated="7 AUGUST 2026"
      intro={
        <p>
          These terms are a binding agreement between you and BOQ+ governing the
          BOQ+ mobile app and boq.co.in. By creating an account or using the
          service you accept them. They are governed by Indian law.
        </p>
      }
    >
      <h2>01 — What BOQ+ is, and is not</h2>
      <p>
        BOQ+ is a bid-preparation and market-intelligence tool for contractors
        bidding on Indian government tenders. It lets you fill BOQ (Bill of
        Quantities) files on your phone, browse tenders indexed from public
        e-procurement portals, and see analysis built from government-published
        comparative statements.
      </p>
      <ul>
        <li>
          BOQ+ is <strong>not</strong> a government portal and is not affiliated
          with NIC, GePNIC, CPPP, CPWD, MES, or any department. Bids are always
          prepared, signed, and submitted on the official portal by you.
        </li>
        <li>
          BOQ+ provides{" "}
          <strong>information and analysis, not advice or guarantees</strong>.
          Rate suggestions, Below&nbsp;% bands, win probabilities, and competitor
          profiles are statistical outputs from historical public data. You are
          solely responsible for every rate you submit and every bid decision you
          make.
        </li>
        <li>
          Tender listings are indexed from public portals on a best-effort basis.
          Always verify tender details, corrigenda, EMD requirements, and closing
          times on the official portal before acting.
        </li>
      </ul>

      <h2>02 — Your account</h2>
      <p>
        You must be 18 or older and using BOQ+ for business purposes. Keep your
        credentials secure; you are responsible for activity under your account.
        One account is for one firm&apos;s use — credentials may not be shared
        across firms.
      </p>

      <h2>03 — Plans, credits, and payment</h2>
      <ul>
        <li>
          <strong>Free tier:</strong> {PRICING.freeBoqs} BOQs with rate books,
          offline fill, and export. No card required. We may adjust what the free
          tier includes for new users, but will not retroactively remove BOQs you
          have already created.
        </li>
        <li>
          <strong>Annual subscription:</strong> {PRICING.annualIntro} for your
          first year as an introductory price, then{" "}
          {PRICING.annualStandard} per year from the second year onwards. The
          introductory price is available to every new subscriber and is not
          limited to a fixed number of members. The renewal price is shown to you
          before each renewal.
        </li>
        <li>
          <strong>Quarterly subscription:</strong> {PRICING.quarterly} for 3
          months.
        </li>
        <li>
          Subscriptions unlock unlimited BOQs and full BidIQ intelligence, and
          renew automatically until cancelled in your Play Store / App Store
          settings.
        </li>
        <li>
          <strong>Credits:</strong> {PRICING.credits} buys{" "}
          {PRICING.creditBoqs} BOQ credits, each good for one full BOQ + BidIQ
          run. Credits are valid for {PRICING.creditValidityMonths} months from
          purchase, are consumed when a run is generated, and are
          non-transferable.
        </li>
        <li>
          All prices include applicable taxes unless the store states otherwise.
          Payments are processed by Google Play / Apple; refunds are governed by
          our <a href="/refund">Refund Policy</a>.
        </li>
        <li>
          We may change prices prospectively. An active subscription keeps its
          price until its next renewal, and we will tell you before a price you
          are paying changes.
        </li>
      </ul>

      <h2>04 — Your content</h2>
      <p>
        You retain ownership of BOQs, rates, and documents you upload. You grant
        us a licence to process them to provide the service. When you upload a
        comparative statement, you confirm it is a document published by a
        procuring authority; the already-public bid data in it (bidder names,
        amounts, results) is added to our market index in a form not linked to
        your account, as described in the <a href="/privacy">Privacy Policy</a>.
        Your own BOQs, rates, and track record are never shown to other users.
      </p>

      <h2>05 — Acceptable use</h2>
      <ul>
        <li>No scraping, reselling, or bulk-exporting the market index.</li>
        <li>
          No uploading forged or tampered documents, malware, or content you have
          no right to share.
        </li>
        <li>
          No reverse-engineering the app or using it to build a competing
          dataset.
        </li>
        <li>
          No use in violation of tender conditions or law, including any form of
          bid rigging or cartelisation. BOQ+ shows historical public data; how
          you bid remains your independent commercial decision.
        </li>
      </ul>
      <p>We may suspend accounts that breach these rules.</p>

      <h2>06 — Availability and changes</h2>
      <p>
        We aim for high availability but the service is provided &ldquo;as
        is&rdquo; and &ldquo;as available&rdquo;. We may add, change, or withdraw
        features with reasonable notice for material changes. Offline BOQ fill
        keeps working without connectivity; intelligence features require a
        connection.
      </p>

      <h2>07 — Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, BOQ+ is not liable for lost
        tenders, lost profits, EMD forfeitures, or any indirect or consequential
        loss arising from use of the service, including inaccuracies in indexed
        tender data or analysis. Our total aggregate liability for any claim is
        limited to the amount you paid us in the 12 months before the claim.
        Nothing in these terms limits liability that cannot be limited under
        Indian law.
      </p>

      <h2>08 — Termination</h2>
      <p>
        You can stop using BOQ+ and delete your account at any time. We may
        terminate or suspend access for breach of these terms, with notice where
        practicable. Sections 04, 07, and 09 survive termination.
      </p>

      <h2>09 — Governing law and disputes</h2>
      <p>
        These terms are governed by the laws of India. Subject to any
        non-waivable consumer-forum rights you hold under the Consumer Protection
        Act, 2019, courts at Jammu, Jammu &amp; Kashmir shall have exclusive
        jurisdiction. We prefer to resolve issues directly — write to{" "}
        <a href="mailto:support@boq.co.in">support@boq.co.in</a> first.
      </p>

      <h2>10 — Changes to these terms</h2>
      <p>
        We will notify you in the app of material changes before they take
        effect. Continued use after notice constitutes acceptance.
      </p>
    </LegalShell>
  );
}
