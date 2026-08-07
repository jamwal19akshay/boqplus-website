import StoreBadges from "./StoreBadges";
import { PRICING } from "@/lib/pricing";

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
      <a href="#price" className="seal-button invert">
        START WITH {PRICING.freeBoqs} FREE BOQs <b>↗</b>
      </a>
      <div className="store-line">
        <StoreBadges />
        <small>ANDROID LISTING COMING SOON</small>
      </div>
    </section>
  );
}
