import Image from "next/image";
import Reveal from "./Reveal";
import { MARKET_CAPTURE } from "@/lib/stats";

function Polaroid({
  src,
  alt,
  tilt = false,
  cornerTape = false,
}: {
  src: string;
  alt: string;
  tilt?: boolean;
  cornerTape?: boolean;
}) {
  return (
    <div className={`polaroid${tilt ? " tilt-r" : ""}`}>
      {cornerTape ? (
        <>
          <div className="tape tl" />
          <div className="tape tr" />
        </>
      ) : (
        <div className="tape" />
      )}
      <Image src={src} alt={alt} width={1344} height={2992} />
    </div>
  );
}

export default function FeatureSections() {
  return (
    <section className="section section--tight" id="inside">
      <div className="wrap">
        <span className="kicker">inside the app</span>
        <h2>The published record, arranged for a working evening.</h2>
        <p className="sub">
          Bare screens from the app itself — no dressing up. Where a screen
          shows sample data, the caption says so.
        </p>

        {/* Feature 1 : fill rates */}
        <Reveal className="feature">
          <div className="feature-copy">
            {/* pencil spot */}
            <svg className="spot" viewBox="0 0 72 72" fill="none" aria-hidden="true">
              <g transform="rotate(-32 36 32)">
                <rect x="8" y="26" width="42" height="12" rx="4" fill="#D9A93F" stroke="#33291D" strokeWidth="2.5" />
                <path d="M50 26 l 14 6 l -14 6 z" fill="#EFE4CF" stroke="#33291D" strokeWidth="2.5" strokeLinejoin="round" />
                <path d="M61 30.7 l 4 1.3 l -4 1.3 z" fill="#33291D" />
              </g>
              <path d="M10 62 q 16 6 30 0 t 22 0" stroke="#B5502A" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
            <h3>Fill your BOQ where you actually are.</h3>
            <p>
              Enter rates item by item on your phone — at the kitchen table, in
              the car outside the department office, wherever the evening finds
              you. No laptop, no portal timeouts, no retyping from a paper
              printout.
            </p>
            <p>
              And every item carries its intelligence one tap away, so
              you&rsquo;re never pricing blind.
            </p>
          </div>
          <div className="shot-col">
            <Polaroid
              src="/screens/android/02-boq-fill-rates.png"
              alt="BOQ+ rate-filling screen with a list of BOQ items and rate entry fields"
            />
            <div className="caption">Rate-filling screen — sample data shown.</div>
          </div>
        </Reveal>

        {/* Feature 2 : BidIQ */}
        <Reveal className="feature flip">
          <div className="shot-col">
            <div className="annot" style={{ top: "6%", left: "-160px" }}>
              the band that actually wins &mdash; from published results
              <svg width="110" height="42" viewBox="0 0 110 42" fill="none">
                <path d="M6 6 Q 55 36 96 22" stroke="#B5502A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M96 22 l -10 -3 M96 22 l -7 8" stroke="#B5502A" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <Polaroid
              src="/screens/android/03-bidiq-intelligence.png"
              alt="BidIQ per-item intelligence screen showing winning discount information for a BOQ item"
              tilt
              cornerTape
            />
            <div className="caption">BidIQ item intelligence — sample data shown.</div>
          </div>
          <div className="feature-copy">
            {/* magnifier spot */}
            <svg className="spot" viewBox="0 0 72 72" fill="none" aria-hidden="true">
              <circle cx="30" cy="28" r="19" fill="#FBF6EB" stroke="#33291D" strokeWidth="3" />
              <rect x="21" y="28" width="5" height="8" rx="1.5" fill="#D9A93F" stroke="#33291D" strokeWidth="1.5" />
              <rect x="28" y="22" width="5" height="14" rx="1.5" fill="#B5502A" stroke="#33291D" strokeWidth="1.5" />
              <rect x="35" y="26" width="5" height="10" rx="1.5" fill="#D9A93F" stroke="#33291D" strokeWidth="1.5" />
              <line x1="44" y1="42" x2="60" y2="58" stroke="#33291D" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <h3>BidIQ — for every item, the number that won last time.</h3>
            <p>
              For each BOQ item, BidIQ shows the winning discount band drawn
              from real comparative statements: how far below the estimated
              cost the winning rates actually landed. Not a rule of thumb
              passed around the site office — the published record, sorted so
              you can use it at speed.
            </p>
          </div>
        </Reveal>

        {/* Feature 3 : Market Intelligence Report */}
        <Reveal className="feature">
          <div className="feature-copy">
            {/* histogram spot */}
            <svg className="spot" viewBox="0 0 72 72" fill="none" aria-hidden="true">
              <line x1="10" y1="60" x2="64" y2="60" stroke="#33291D" strokeWidth="3" strokeLinecap="round" />
              <rect x="14" y="42" width="9" height="18" rx="2" fill="#D9A93F" stroke="#33291D" strokeWidth="2" />
              <rect x="27" y="26" width="9" height="34" rx="2" fill="#B5502A" stroke="#33291D" strokeWidth="2" />
              <rect x="40" y="34" width="9" height="26" rx="2" fill="#D9A93F" stroke="#33291D" strokeWidth="2" />
              <rect x="53" y="48" width="9" height="12" rx="2" fill="#D9A93F" stroke="#33291D" strokeWidth="2" />
              <line x1="31.5" y1="20" x2="31.5" y2="8" stroke="#5C6B45" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 6" />
            </svg>
            <h3>See the whole market before you commit a rate.</h3>
            <p>
              The Market Intelligence Report lays out winning discounts as a
              histogram — where bids cluster, where the median sits, where the
              outliers went to die. The capture here reads{" "}
              <b>{MARKET_CAPTURE.comparatives} comparatives</b> covering{" "}
              <b>₹14,277 crore</b> of decided work, with the median winning bid
              at <b>{MARKET_CAPTURE.medianDiscount} below estimate</b>.
            </p>
            <p>
              Estimates start from CPWD DSR or MES SSR; the market decides what
              wins. Now you can see the market before it sees you.
            </p>
          </div>
          <div className="shot-col">
            <div className="annot" style={{ bottom: "16%", right: "-160px" }}>
              where the winners cluster
              <svg width="100" height="38" viewBox="0 0 100 38" fill="none" style={{ transform: "scaleX(-1)" }}>
                <path d="M6 8 Q 50 34 90 18" stroke="#B5502A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M90 18 l -10 -2 M90 18 l -6 8" stroke="#B5502A" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <Polaroid
              src="/screens/android/04-market-intelligence-report.png"
              alt="Market Intelligence Report with a histogram of winning discounts, 45,584 comparatives, and a median of 9.2% below estimate"
            />
            <div className="caption">Market Intelligence Report — actual app screen.</div>
          </div>
        </Reveal>

        {/* Feature 4 : tenders (duo) */}
        <Reveal className="feature flip wide">
          <div className="shot-col" style={{ maxWidth: "560px" }}>
            <div className="duo">
              <Polaroid
                src="/screens/android/06a-tenders-list.png"
                alt="Live tenders list in BOQ+"
              />
              <Polaroid
                src="/screens/android/06b-tender-detail-sheet.png"
                alt="Tender detail sheet showing dates, value and EMD"
              />
            </div>
            <div className="caption" style={{ marginTop: "34px" }}>
              Tenders list and detail sheet — actual app screens.
            </div>
          </div>
          <div className="feature-copy">
            {/* list/bell spot */}
            <svg className="spot" viewBox="0 0 72 72" fill="none" aria-hidden="true">
              <rect x="8" y="12" width="42" height="50" rx="6" fill="#FBF6EB" stroke="#33291D" strokeWidth="2.5" />
              <line x1="16" y1="26" x2="42" y2="26" stroke="#94836B" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="16" y1="37" x2="38" y2="37" stroke="#94836B" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="16" y1="48" x2="42" y2="48" stroke="#94836B" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M50 44 q 0 -10 8 -10 t 8 10 l 3 8 h -22 z" fill="#D9A93F" stroke="#33291D" strokeWidth="2.5" strokeLinejoin="round" />
              <circle cx="58" cy="57" r="3" fill="#33291D" />
            </svg>
            <h3>Live tenders, without wrestling the portal.</h3>
            <p>
              Browse live tenders in a clean list, open a detail sheet with the
              dates, values and EMD in one place, and shortlist the ones worth
              your evening.
            </p>
            <p>The portal is where you submit. This is where you decide.</p>
          </div>
        </Reveal>

        {/* Feature 5 : track record */}
        <Reveal className="feature">
          <div className="feature-copy">
            {/* ledger spot */}
            <svg className="spot" viewBox="0 0 72 72" fill="none" aria-hidden="true">
              <rect x="12" y="10" width="48" height="54" rx="5" fill="#E8DCC4" stroke="#33291D" strokeWidth="2.5" />
              <line x1="22" y1="10" x2="22" y2="64" stroke="#33291D" strokeWidth="2" />
              <line x1="30" y1="26" x2="52" y2="26" stroke="#94836B" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="30" y1="38" x2="48" y2="38" stroke="#94836B" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M30 50 l 5 5 l 10 -11" stroke="#5C6B45" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3>Your bids, remembered honestly.</h3>
            <p>
              My Track Record keeps your bidding history in one place — what
              you bid, at what % below estimate, and how it went — so next
              season&rsquo;s pricing starts from your own experience instead of
              a fresh guess.
            </p>
            <p>
              It starts empty, like the one shown here. It fills with your
              work, and only your work.
            </p>
          </div>
          <div className="shot-col">
            <Polaroid
              src="/screens/android/05-my-track-record.png"
              alt="My Track Record screen in its empty starting state"
              tilt
              cornerTape
            />
            <div className="caption">
              My Track Record — product mockup, shown in a new account&rsquo;s
              empty state.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
