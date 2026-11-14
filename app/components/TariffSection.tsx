import { PRICING } from "@/lib/pricing";

export default function TariffSection() {
  return (
    <section className="tariff-section" id="price">
      <div className="tariff-head">
        <div className="margin-code">
          <b>04</b>
          <span>THE TARIFF</span>
        </div>
        <h2>
          Priced like a tool.
          <br />
          Not a transformation programme.
        </h2>
        <p>
          Your first BOQ opens priced, free. Pay when BOQ+ earns a permanent
          place in the van.
        </p>
      </div>

      <div className="ticket-roll">
        <article className="ticket">
          <div className="ticket-top">
            <span>FIRST BOQ FREE</span>
            <b>01</b>
          </div>
          <strong>₹0</strong>
          <em>first BOQ opens priced</em>
          <p>
            After that, free previews: a locked BOQ shows the rates already in
            your file and how many lines BOQ+ has rates for. No card.
          </p>
          <a href="#final">
            ISSUE THIS FILE <b>→</b>
          </a>
        </article>

        <article className="ticket">
          <div className="ticket-top">
            <span>SEASON PASS</span>
            <b>02</b>
          </div>
          <strong>{PRICING.quarterly}</strong>
          <em>3 months</em>
          <p>For one active tender season. Renews automatically unless cancelled.</p>
          <a href="#final">
            ISSUE THIS FILE <b>→</b>
          </a>
        </article>

        <article className="ticket featured">
          <span className="intro-year">INTRO YEAR</span>
          <div className="ticket-top">
            <span>ANNUAL FILE</span>
            <b>03</b>
          </div>
          <strong>{PRICING.annualIntro}</strong>
          <em>first year</em>
          <p>
            Introductory offer for your first year, then {PRICING.annualStandard}{" "}
            a year. That&rsquo;s about {PRICING.annualIntroPerDay} a day in the
            first year. Renews automatically unless cancelled.
          </p>
          <a href="#final">
            ISSUE THIS FILE <b>→</b>
          </a>
        </article>

        <article className="ticket">
          <div className="ticket-top">
            <span>CREDIT BOOK</span>
            <b>04</b>
          </div>
          <strong>{PRICING.credits}</strong>
          <em>{PRICING.creditBoqs} BOQs</em>
          <p>
            For one-off bids. Credits never expire.
          </p>
          <a href="#final">
            ISSUE THIS FILE <b>→</b>
          </a>
        </article>
      </div>

      <p className="tariff-note">
        Same figures as the in-app paywall, fine print included. The annual
        introductory price is open to everyone, not a limited number of seats;
        it applies to your first year and renews at {PRICING.annualStandard} a
        year thereafter. Credits never expire. Subscriptions renew automatically
        unless cancelled. All purchases
        happen in the app, through the App Store or Google Play. All prices
        include applicable taxes unless the store states otherwise.
      </p>
    </section>
  );
}
