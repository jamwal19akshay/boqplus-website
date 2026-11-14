import Link from "next/link";
import { DATA_STATS } from "@/lib/stats";

// Store-listing wording for 3.0.2 (figures as of 13 November 2026).
const STEPS = [
  {
    n: "1",
    label: "UPLOAD",
    title: "From WhatsApp, email or Files",
    copy: "Excel (.xls, .xlsx from GePNIC, CPPP and state portals) or PDF, including scanned PDFs. Explore and upload as a guest: no sign-in.",
  },
  {
    n: "2",
    label: "OPENS PRICED",
    title: "Your first BOQ opens priced, free",
    copy: "Where BOQ+ is confident, the line gets a rate marked “Suggested”. You check it, edit it or accept it. Lines without a confident rate are left for you to fill, and Auto-fill can fill the empty lines.",
  },
  {
    n: "3",
    label: "% TENDERS",
    title: "The typical winning percentage range",
    copy: "For percentage tenders, see the typical winning percentage range, above or below the estimate, from similar past tenders. When history is thin the range is labelled “Rough range”.",
  },
  {
    n: "4",
    label: "EXPORT",
    title: "Excel or PDF, shared on WhatsApp",
    copy: "Export the filled BOQ to Excel or PDF and share it on WhatsApp.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-section" id="how">
      <div className="how-head">
        <span>HOW IT WORKS</span>
        <h2>
          From WhatsApp file
          <br />
          to priced BOQ.
        </h2>
        <p>
          BOQ+ prices item rate BOQs and percentage tenders for PWD, CPWD, JKPWD,
          JPDCL, MES, railways, municipal bodies and PSUs.
        </p>
      </div>

      <ol className="how-steps">
        {STEPS.map((s) => (
          <li key={s.n}>
            <b>{s.n}</b>
            <span>{s.label}</span>
            <h3>{s.title}</h3>
            <p>{s.copy}</p>
          </li>
        ))}
      </ol>

      <div className="how-notes">
        <div>
          <span>HOW TO READ A SUGGESTED RATE</span>
          <p>
            Suggested rates are evidence-based estimates from past bids, not
            guesses and not guarantees. BOQ+ does not forecast tender outcomes,
            and the final rate is always your decision. Not every line has enough
            evidence, and BOQ+ leaves those lines for you instead of showing a
            made-up number.
          </p>
        </div>
        <div>
          <span>ALSO INSIDE</span>
          <p>
            A BidIQ tab with rate lookups, calculators and market prices. A daily
            tender feed with alerts. Hindi and English.
          </p>
        </div>
        <div>
          <span>THE DATA, AS OF {DATA_STATS.asOfLong.toUpperCase()}</span>
          <p>
            {DATA_STATS.quotedRates} quoted rates from {DATA_STATS.tenderResults}{" "}
            government tender results (comparative statements);{" "}
            {DATA_STATS.percentageTenders} past tenders with winning (L1)
            percentages; {DATA_STATS.portals} tender portals tracked across about
            40 states and UTs. <Link href="/sources">See the data sources</Link>.
          </p>
        </div>
        <div>
          <span>WHAT BOQ+ IS NOT</span>
          <p>
            BOQ+ is an independent app. It is not affiliated with, endorsed by,
            or representing any government entity. It does not provide GeM, DSC
            or ISO registration.
          </p>
        </div>
      </div>
    </section>
  );
}
