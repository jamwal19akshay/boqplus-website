import Reveal from "./Reveal";

export default function PricingSection() {
  return (
    <section className="section pricing" id="pricing">
      <div className="wrap">
        <span className="kicker">what it costs</span>
        <h2>Priced like a tool you keep in the van.</h2>
        <p className="sub">
          Start free, no card. Pay only when it&rsquo;s earning its keep.
        </p>

        <Reveal className="price-grid">
          <div className="price-card">
            <div className="plan-name">Free</div>
            <div className="plan-price">₹0</div>
            <p className="plan-blurb">Your first 2 BOQs, on us. No card needed.</p>
            <a className="btn ghost" href="/#get">
              Start free
            </a>
          </div>

          <div className="price-card">
            <div className="plan-name">Quarterly</div>
            <div className="plan-price">
              ₹3,999 <span className="per">/ quarter</span>
            </div>
            <p className="plan-blurb">Three months of BOQ+, season by season.</p>
            <a className="btn ghost" href="/#get">
              Choose quarterly
            </a>
          </div>

          <div className="price-card featured">
            <div className="founder-tag">Founding Member &mdash; first 100</div>
            <div className="plan-name">Annual</div>
            <div className="plan-price">
              <span className="strike">₹11,999</span>₹7,999{" "}
              <span className="per">/ year</span>
            </div>
            <p className="plan-blurb">
              A full year of tenders with BOQ+ at your side.
            </p>
            <a className="btn" href="/#get">
              Choose annual
            </a>
          </div>

          <div className="price-card">
            <div className="plan-name">Credits</div>
            <div className="plan-price">
              ₹999 <span className="per">/ 5 BOQs</span>
            </div>
            <p className="plan-blurb">
              For the occasional bidder.
              <small>Credits expire 12 months after purchase.</small>
            </p>
            <a className="btn ghost" href="/#get">
              Buy credits
            </a>
          </div>
        </Reveal>
        <p className="price-note">
          Same figures as the in-app paywall, fine print included — no
          asterisks to hunt for.
        </p>
      </div>
    </section>
  );
}
