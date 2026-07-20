import type { Metadata } from "next";
import LegalShell from "../components/LegalShell";

export const metadata: Metadata = {
  title: "FAQ — BOQ+",
  description:
    "Straight answers for government tender contractors: data safety, portals supported, credits, refunds, and how BOQ+ works.",
};

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "Is my BOQ and rate data safe? Will other contractors see my rates?",
    a: (
      <>
        No one else sees your rates. Your BOQs, the rates you enter, and your
        track record are private to your account. What is shared into the
        market index is only data that government departments have{" "}
        <em>already published</em> in comparative statements — bidder names and
        bid amounts after tender opening. Details in the{" "}
        <a href="/privacy">Privacy Policy</a>.
      </>
    ),
  },
  {
    q: "Does BOQ+ replace the official portal?",
    a: (
      <>
        No, and it doesn&apos;t try to. You still log in to GePNIC or your
        state portal with your DSC and submit there, exactly as before. BOQ+ is
        where you <em>prepare</em> the bid — fill the BOQ, check market rates,
        decide your Below&nbsp;% — then you enter the final figures on the
        portal.
      </>
    ),
  },
  {
    q: "Which portals and departments do you support?",
    a: (
      <>
        Tender discovery covers GePNIC-based portals — the central CPPP and
        state e-procurement portals built on it — across departments like PWD,
        PDD/electricity distribution, irrigation, and rural development. The
        BOQ filler itself works with any portal&apos;s Excel BOQ (.xlsx/.xls),
        uploaded exactly as downloaded.
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
        <a href="mailto:support@boq.co.in">support@boq.co.in</a> — SOR coverage
        is driven by user requests.
      </>
    ),
  },
  {
    q: "Where do BidIQ's numbers come from? Are they guesses?",
    a: (
      <>
        From comparative statements — the sheets departments publish after
        tender opening showing every bidder and every amount. BOQ+ reads
        thousands of them and turns them into rate bands, winning-discount
        distributions, and competitor profiles. Where the data is thin for your
        department or item, the app says so on screen instead of inventing a
        number.
      </>
    ),
  },
  {
    q: "Will BOQ+ guarantee I win as L1?",
    a: (
      <>
        No, and be suspicious of anyone who promises that. BOQ+ shows you what
        the market has actually been bidding so your Below&nbsp;% is a decision
        made with data instead of a guess. The bid, and the result, are yours.
      </>
    ),
  },
  {
    q: "What happens when my credits expire?",
    a: (
      <>
        Credits (₹999 for 5 BOQs) are valid for 12 months from purchase — this
        is stated at purchase and on the pricing section, not hidden. Unused
        credits lapse after 12 months. A completely unused pack can be refunded
        within 7 days of purchase; see the <a href="/refund">Refund Policy</a>.
      </>
    ),
  },
  {
    q: "Will money be deducted automatically?",
    a: (
      <>
        The free tier needs no card at all. If you buy a subscription, it
        renews through your Play Store / App Store account until you cancel —
        cancellation is in the store&apos;s subscription settings and takes two
        taps. We never hold your card details.
      </>
    ),
  },
  {
    q: "Does it work without internet?",
    a: (
      <>
        BOQ filling works fully offline — at site, in the bus, wherever. You
        need a connection once to fetch a tender or generate BidIQ analysis,
        and things sync when network returns.
      </>
    ),
  },
  {
    q: "What does uploading my tender results actually get me?",
    a: (
      <>
        Two things. Your private track record — real win rate and typical
        margin vs L1 — starts building. And the recommendations you see get
        tuned to your firm&apos;s pattern instead of a market average. The
        honest trade: BOQ+ runs on real results, and contractors who feed it
        theirs get the sharpest numbers.
      </>
    ),
  },
  {
    q: "What happens after the first 100 Founding Members?",
    a: (
      <>
        The Annual price goes to the standard ₹11,999. Founding Members keep
        ₹7,999 locked for their continuous renewals.
      </>
    ),
  },
  {
    q: "Who is behind BOQ+? How do I reach a human?",
    a: (
      <>
        BOQ+ is an independent Indian product, not tied to any government body.
        Email <a href="mailto:support@boq.co.in">support@boq.co.in</a> — real
        replies, usually within a working day.
      </>
    ),
  },
];

export default function FaqPage() {
  return (
    <LegalShell
      title="Frequently Asked Questions"
      updated="19 July 2026"
      intro={
        <p>
          The questions careful contractors actually ask before trusting an app
          with their bidding — answered plainly.
        </p>
      }
    >
      {faqs.map((f) => (
        <section key={f.q}>
          <h2>{f.q}</h2>
          <p>{f.a}</p>
        </section>
      ))}
    </LegalShell>
  );
}
