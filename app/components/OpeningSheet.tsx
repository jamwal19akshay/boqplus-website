import StoreBadges from "./StoreBadges";
import { DATA_STATS, MARKET_CAPTURE } from "@/lib/stats";
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
              UNSEAL {PRICING.freeBoqPreviews} FREE BOQ PREVIEWS <b>↘</b>
            </a>
            <a href="#record" className="underlined">
              Examine the evidence
            </a>
          </div>
        </div>
        <div className="opening-store">
          <span>GET THE APP</span>
          <StoreBadges />
        </div>
      </div>

      <div className="hero-figure" aria-hidden="true">
        <span className="l-one">L1</span>
        <div className="crosshair">+</div>
        <div className="result-slip">
          <span>MARKET MEDIAN</span>
          <strong>&minus;{MARKET_CAPTURE.medianDiscount}</strong>
          <small>BELOW ESTIMATE · JUL 2026</small>
        </div>
        <div className="result-stamp">
          PUBLISHED
          <br />
          RESULT
        </div>
      </div>

      <div className="hero-ledger">
        <div>
          <span>QUOTED RATES ANALYSED</span>
          <strong>{DATA_STATS.quotedRates}</strong>
        </div>
        <div>
          <span>GOVT. TENDER RESULTS</span>
          <strong>{DATA_STATS.tenderResults}</strong>
        </div>
        <div>
          <span>AS OF</span>
          <strong>{DATA_STATS.asOf}</strong>
        </div>
        <p>Counted in the BOQ+ results database. No invented counters.</p>
      </div>
    </section>
  );
}
