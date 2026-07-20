import Reveal from "./Reveal";
import { MARKET_CAPTURE } from "@/lib/stats";

export default function ProblemSection() {
  return (
    <section className="section" id="late-night">
      <div className="wrap">
        <Reveal className="diary-card">
          <div className="diary-label">The 11 o&rsquo;clock problem</div>
          {/* teacup spot */}
          <svg className="spot" viewBox="0 0 150 150" fill="none" aria-hidden="true">
            <path d="M56 34 q -8 -11 0 -22" stroke="#94836B" strokeWidth="3" strokeLinecap="round" />
            <path d="M80 34 q 8 -11 0 -22" stroke="#94836B" strokeWidth="3" strokeLinecap="round" />
            <ellipse cx="68" cy="124" rx="44" ry="8" fill="#EFE4CF" stroke="#33291D" strokeWidth="2.5" />
            <path d="M36 52 H100 L92 104 Q68 114 44 104 Z" fill="#BF5B33" stroke="#33291D" strokeWidth="3" strokeLinejoin="round" />
            <ellipse cx="68" cy="52" rx="32" ry="7" fill="#8A5A2B" stroke="#33291D" strokeWidth="3" />
            <path d="M99 62 q 22 2 16 20 q -5 15 -20 11" stroke="#33291D" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
          <p>
            You walked the site this morning — measured the approach, argued
            about lead distances, noted the soft patch no estimate ever
            mentions. Now the house is quiet, the tea has gone cold twice, and
            a hundred BOQ items are waiting for rates. Meanwhile the answer key
            exists: departments publish comparative statements after every
            award — L1, L2, the exact % below estimate that won. It just was
            never worth the nights it took to read them, portal by portal, PDF
            by PDF. <em>So that&rsquo;s the part we do.</em>
          </p>
        </Reveal>

        <Reveal className="receipts">
          <span className="kicker">here&rsquo;s that part, counted:</span>
          <div className="stat-row">
            <div className="stat-card">
              <div className="stat-num">{MARKET_CAPTURE.comparatives}</div>
              <div className="stat-label">comparative statements read</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">{MARKET_CAPTURE.decidedValue}</div>
              <div className="stat-label">of decided tender value covered</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">{MARKET_CAPTURE.avgBidders}</div>
              <div className="stat-label">average bidders per tender</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">{MARKET_CAPTURE.medianDiscount}</div>
              <div className="stat-label">median winning discount, below estimate</div>
            </div>
          </div>
          <p className="stat-note">
            All four figures are read straight off the Market Report capture
            further down this page &mdash; we&rsquo;d rather show you the
            screen than round you a number.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
