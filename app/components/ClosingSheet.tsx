import StoreBadges from "./StoreBadges";

export default function ClosingSheet() {
  return (
    <section className="closing-sheet" id="final">
      <div className="closing-stamp">
        READY
        <br />
        TO RATE
      </div>
      <span className="closing-code">BOQ+ / OPEN FILE / 2026</span>
      <h2>
        The next comparative
        <br />
        statement will publish
        <br />
        <em>either way.</em>
      </h2>
      <p>Be on the right line of it.</p>
      <div className="store-line">
        <StoreBadges className="large" />
        <small>ON ANDROID AND IPHONE &middot; YOUR FIRST BOQ OPENS PRICED, FREE</small>
      </div>
      <a href="#price" className="underlined invert-link">
        See pricing
      </a>
    </section>
  );
}
