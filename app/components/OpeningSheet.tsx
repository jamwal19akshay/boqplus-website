import StoreBadges from "./StoreBadges";
import { DATA_STATS, MARKET_CAPTURE } from "@/lib/stats";

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
          Tender apps list tenders.
          <br />
          <span>BOQ+ prices the BOQ.</span>
        </h1>
        <div className="opening-store">
          <span>GET THE APP &middot; YOUR FIRST BOQ OPENS PRICED, FREE</span>
          <StoreBadges className="large" />
        </div>
        <div className="opening-copy">
          <p>
            Got a tender BOQ on WhatsApp and a deadline? Upload it, even a
            scanned PDF, with no sign-in. It opens priced on your phone, with{" "}
            <em>Suggested</em> rates built from {DATA_STATS.tenderResults} past
            government tender results. You check, edit or accept every rate.
          </p>
          <div className="opening-actions">
            <a href="#how" className="underlined">
              See how it works
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
