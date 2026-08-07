import { MARKET_CAPTURE } from "@/lib/stats";

export default function RecordSection() {
  return (
    <section className="record-section" id="record">
      <div className="margin-code">
        <b>01</b>
        <span>THE PUBLIC RECORD</span>
      </div>

      <div className="record-copy">
        <p className="kicker">THE GOVERNMENT ALREADY PUBLISHED THE ANSWER KEY.</p>
        <h2>Forty-five thousand, five hundred and eighty-four decisions.</h2>
        <p className="big-deck">
          Not forecasts. Not &ldquo;AI confidence&rdquo;. Actual comparative
          statements&mdash;arranged so a contractor can use them before the next
          bid.
        </p>
        <div className="red-pencil">
          The market has memory.
          <br />
          Now you do too.
        </div>
      </div>

      <div className="evidence-phone">
        <span className="evidence-tag">EXHIBIT A · ACTUAL APP SCREEN</span>
        <div className="phone-shell">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/screens/app/market-report.png"
            alt={`BOQ+ Market Report showing ${MARKET_CAPTURE.comparatives} comparative statements, tender value and winning discount distribution`}
          />
        </div>
        <p>Market Intelligence Report · all portals · Jul 2026</p>
      </div>
    </section>
  );
}
