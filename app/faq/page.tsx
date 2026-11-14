import type { Metadata } from "next";
import LegalShell from "../components/LegalShell";
import { pageMetadata } from "@/lib/seo";
import { JsonLd, faqPage } from "@/lib/jsonld";
import { FREE_TIER_SUMMARY, PRICING } from "@/lib/pricing";

export const metadata: Metadata = pageMetadata({
  title: "BOQ+ FAQ: Tender BOQ Rates, Percentage Tenders, Pricing",
  description:
    "Answers on uploading a BOQ without sign-in, Suggested rates, winning percentage ranges, GePNIC and CPWD DSR data, prices (5 credits ₹999, Quarterly, Annual) and refunds.",
  path: "/faq",
});

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "Do I have to sign in to upload a BOQ?",
    a: (
      <>
        No. You can explore and upload as a guest, with no sign-in. Upload a
        tender BOQ from WhatsApp, email or Files: Excel (.xls or .xlsx, as
        downloaded from GePNIC, CPPP and state portals) or PDF, including
        scanned PDFs.
      </>
    ),
  },
  {
    q: "What does BOQ+ do with my BOQ? What is a Suggested rate?",
    a: (
      <>
        Your first BOQ opens priced, free. Where BOQ+ is confident, the line
        gets a rate marked &ldquo;Suggested&rdquo;, built from past government
        tender results. You check it, edit it or accept it. Lines without a
        confident rate are left for you to fill, and Auto-fill can fill the
        empty lines. Suggested rates are evidence-based estimates from past
        bids, not guesses and not guarantees, and the final rate is always your
        decision.
      </>
    ),
  },
  {
    q: "What is the winning percentage in a percentage tender, and how does BOQ+ show it?",
    a: (
      <>
        In a percentage tender you quote one figure, a percentage above or below
        the department&apos;s estimate, and the lowest (L1) bidder wins. For
        these tenders BOQ+ shows the typical winning percentage range, above or
        below the estimate, from similar past tenders (about 54,000 past tenders
        with winning percentages, as of 13 November 2026). When history is thin
        the range is labelled &ldquo;Rough range&rdquo;.
      </>
    ),
  },
  {
    q: "Can BOQ+ price a GePNIC BOQ? Does it have CPWD DSR rates?",
    a: (
      <>
        Yes to both. BOQ+ reads the Excel BOQ from GePNIC, CPPP and state
        portals, as downloaded. It carries CPWD DSR, MES SSR and state SOR rate
        books, and builds Suggested rates from 2.4 million+ quoted rates in
        72,000+ government tender results across 48 tender portals (as of 13
        November 2026). See <a href="/sources">Data sources</a> for the
        official sources behind it.
      </>
    ),
  },
  {
    q: "Is my BOQ and rate data safe? Will other contractors see my rates?",
    a: (
      <>
        No one else sees your rates. Your BOQs, the rates you enter, and your
        track record are private to your account. What is shared into the market
        index is only data that government departments have{" "}
        <em>already published</em> in comparative statements — bidder names and
        bid amounts after tender opening — and an uploaded statement is added
        only if you choose to share it. Details in the{" "}
        <a href="/privacy">Privacy Policy</a>.
      </>
    ),
  },
  {
    q: "Does BOQ+ replace the official portal?",
    a: (
      <>
        No, and it doesn&apos;t try to. You still log in to GePNIC or your state
        portal with your DSC and submit there, exactly as before. BOQ+ is where
        you <em>prepare</em> the bid — fill the BOQ, check market rates, decide
        your Below&nbsp;% — then you enter the final figures on the portal.
      </>
    ),
  },
  {
    q: "Can I upload the BOQ+ export to the portal?",
    a: (
      <>
        No. The export (Excel on Android, CSV on iPhone, plus PDF) is a
        reference copy. Copy your final rates into the portal&apos;s own BOQ file
        and upload that.
      </>
    ),
  },
  {
    q: "Which portals and departments do you support?",
    a: (
      <>
        Tender discovery covers GePNIC-based portals — the central CPPP and state
        e-procurement portals built on it — across departments like PWD,
        PDD/electricity distribution, irrigation, and rural development. The BOQ
        filler itself works with any portal&apos;s Excel BOQ (.xlsx/.xls),
        uploaded exactly as downloaded, and with PDF BOQs, including scanned
        PDFs.
      </>
    ),
  },
  {
    q: "Which rate books are built in?",
    a: (
      <>
        CPWD DSR, MES SSR, and state SORs (e.g., JK PWD SOR), so you can rate
        items against the schedule while you fill. If your state&apos;s SOR is
        missing, tell us at{" "}
        <a href="mailto:akshay@boq.co.in">akshay@boq.co.in</a> — SOR coverage
        is driven by user requests.
      </>
    ),
  },
  {
    q: "Where do BidIQ's numbers come from? Are they guesses?",
    a: (
      <>
        From comparative statements — the sheets departments publish after tender
        opening showing every bidder and every amount. BOQ+ reads thousands of
        them and turns them into rate bands and the winning-bid ranges on similar
        tenders. Where the data is thin for your department or item,
        the app says so on screen instead of inventing a number.
      </>
    ),
  },
  {
    q: "Does BOQ+ promise I will win as L1?",
    a: (
      <>
        No, and be suspicious of anyone who promises that. BOQ+ shows you what
        the market has actually been bidding so your Below&nbsp;% is a decision
        made with data instead of a guess. BOQ+ does not forecast tender outcomes. The bid, and the result, are yours.
      </>
    ),
  },
  {
    q: "What can I use for free, and what do plans cost?",
    a: (
      <>
        Free: {FREE_TIER_SUMMARY}. No card needed. To price more BOQs:{" "}
        {PRICING.creditBoqs} BOQ credits {PRICING.credits} (credits never
        expire, good for one-off bids); Quarterly {PRICING.quarterly}; or
        Annual {PRICING.annualIntro} for the first year (introductory offer),
        then {PRICING.annualStandard} a year. All purchases happen in the
        app, through the App Store or Google Play.
      </>
    ),
  },
  {
    q: "What does the annual plan cost after the first year?",
    a: (
      <>
        The annual plan is {PRICING.annualIntro} for your first year as an
        introductory price, and {PRICING.annualStandard} a year from the second
        year onwards. The introductory price is open to everyone signing up — it
        is not capped at a number of seats — and the renewal price is shown to
        you before you are charged for it.
      </>
    ),
  },
  {
    q: "Do credits expire?",
    a: (
      <>
        No. Credits ({PRICING.credits} for {PRICING.creditBoqs} BOQs, for
        one-off bids) never expire — use them whenever you need them. A
        completely unused pack can be refunded within 7 days of purchase; see
        the{" "}
        <a href="/refund">Refund Policy</a>.
      </>
    ),
  },
  {
    q: "Will money be deducted automatically?",
    a: (
      <>
        The free tier needs no card at all. If you buy a subscription — all
        purchases happen in the app — it renews
        through your Play Store / App Store account until you cancel —
        cancellation is in the store&apos;s subscription settings and takes two
        taps. We never hold your card details.
      </>
    ),
  },
  {
    q: "Does it work without internet?",
    a: (
      <>
        Partly. Rate-book autofill and the calculators work without internet.
        Opening a BOQ, fetching tenders, uploading a BOQ (including scanned PDFs,
        which are read online), BidIQ and live market rates need a connection. Each rate you enter is saved to your account as
        you go. If the signal drops, the app keeps trying to save; keep it open
        until it reconnects, or unsaved rates can be lost.
      </>
    ),
  },
  {
    q: "What does uploading my tender results actually get me?",
    a: (
      <>
        Your private track record — your win rate and how far you were from L1
        — builds from the results you add. You also choose whether a result
        helps improve BOQ+ market rates for everyone, or is used only for your
        own BidIQ. Your BOQs, rates and track record stay private to your
        account.
      </>
    ),
  },
  {
    q: "Who is behind BOQ+? How do I reach a human?",
    a: (
      <>
        BOQ+ is an independent app. It is not affiliated with, endorsed by, or
        representing any government entity.
        Email <a href="mailto:akshay@boq.co.in">akshay@boq.co.in</a> — real
        replies, within one working day.
      </>
    ),
  },
];

export default function FaqPage() {
  return (
    <LegalShell
      fileNo="Q-01"
      title="Frequently Asked Questions"
      updated="14 NOVEMBER 2026"
      intro={
        <p>
          The questions careful contractors actually ask before trusting an app
          with their bidding — answered plainly.
        </p>
      }
    >
      <JsonLd data={faqPage(faqs)} />
      {faqs.map((f, i) => (
        <section key={f.q}>
          <h2>
            {String(i + 1).padStart(2, "0")} — {f.q}
          </h2>
          <p>{f.a}</p>
        </section>
      ))}
    </LegalShell>
  );
}
