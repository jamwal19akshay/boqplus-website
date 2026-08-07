import { MARKET_CAPTURE } from "@/lib/stats";
import { PRICING } from "@/lib/pricing";

export default function OpeningSheet() {
  return (
    <section className="opening-sheet">
      <aside className="folio">
        <span>BOQ+</span>
        <b>
          FILE
          <br />
          NO. 001
        </b>
        <em>UNSEALED</em>
      </aside>

      <div className="opening-main">
        <div className="clearance">
          <span>FOR CONTRACTORS ON GePNIC &amp; STATE PORTALS</span>
          <i>PUBLIC RECORD / PRIVATE EDGE</i>
        </div>
        <h1>
          The bid is won
          <br />
          <span>before the portal</span>
          <br />
          opens.
        </h1>
        <div className="opening-copy">
          <p>
            BOQ+ reads the government&rsquo;s published result trail&mdash;who bid,
            who won, and at what rate&mdash;then puts that intelligence beside the
            BOQ you are pricing tonight.
          </p>
          <div className="opening-actions">
            <a href="#machine" className="seal-button">
              UNSEAL {PRICING.freeBoqs} FREE BOQs <b>↘</b>
            </a>
            <a href="#record" className="underlined">
              Examine the evidence
            </a>
          </div>
        </div>
      </div>

      <div className="hero-figure" aria-hidden="true">
        <span className="l-one">L1</span>
        <div className="crosshair">+</div>
        <div className="result-slip">
          <span>MARKET MEDIAN</span>
          <strong>&minus;{MARKET_CAPTURE.medianDiscount}</strong>
          <small>BELOW ESTIMATE</small>
        </div>
        <div className="result-stamp">
          PUBLISHED
          <br />
          RESULT
        </div>
      </div>

      <div className="hero-ledger">
        <div>
          <span>COMPARATIVES READ</span>
          <strong>{MARKET_CAPTURE.comparatives}</strong>
        </div>
        <div>
          <span>DECIDED VALUE</span>
          <strong>{MARKET_CAPTURE.decidedValue}</strong>
        </div>
        <div>
          <span>AVG. BIDDERS</span>
          <strong>{MARKET_CAPTURE.avgBidders}</strong>
        </div>
        <p>Numbers transcribed from the live Market Report. No invented counters.</p>
      </div>
    </section>
  );
}
