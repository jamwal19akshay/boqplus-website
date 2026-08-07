"use client";

import { useState } from "react";
import { MARKET_CAPTURE } from "@/lib/stats";
import { PRICING } from "@/lib/pricing";

const PLATES = [
  {
    label: "Fill the BOQ",
    image: "fill-rates.png",
    note: "45 / 45 items rated",
    copy: "A hundred empty rates become one controlled working surface. Scenario, estimate, rate and amount stay together.",
  },
  {
    label: "Read the market",
    image: "market-report.png",
    note: `${MARKET_CAPTURE.comparatives} comparatives`,
    copy: "See the centre of the market before you decide where to stand: winning bands, competition and bidder behaviour.",
  },
  {
    label: "Find the work",
    image: "tenders.png",
    note: "GePNIC + state portals",
    copy: "Live opportunities stripped of portal friction. Department, location, value and deadline—before you open the detail.",
  },
  {
    label: "Keep the lesson",
    image: "track-record.png",
    note: "Your record compounds",
    copy: "The next bid should not begin from zero. Wins, losses and margins become your private operating memory.",
  },
];

export default function MachineSection() {
  const [index, setIndex] = useState(0);
  const plate = PLATES[index];
  const ghost = PLATES[(index + 1) % PLATES.length];

  return (
    <section className="machine-section" id="machine">
      <div className="machine-head">
        <div className="margin-code light">
          <b>02</b>
          <span>THE FIELD MACHINE</span>
        </div>
        <h2>
          Four views.
          <br />
          One working evening.
        </h2>
        <p>
          Nothing staged. These are the actual screens contractors carry in their
          pocket.
        </p>
      </div>

      <div className="plate-selector" role="tablist" aria-label="Product views">
        {PLATES.map((p, i) => (
          <button
            key={p.label}
            type="button"
            role="tab"
            aria-selected={i === index}
            className={i === index ? "active" : undefined}
            onClick={() => setIndex(i)}
          >
            <b>{String(i + 1).padStart(2, "0")}</b>
            <span>{p.label}</span>
          </button>
        ))}
      </div>

      <div className="inspection-bench">
        <div className="phone-stand">
          <div className="phone-shell dark">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/screens/app/${plate.image}`}
              alt={`${plate.label} screen in BOQ+`}
            />
          </div>
          <span className="screen-caption">
            PLATE {String(index + 1).padStart(2, "0")} / ANDROID CAPTURE
          </span>
        </div>

        <div className="inspection-notes">
          <span className="note-label">WHAT THIS SCREEN DOES</span>
          <h3>{plate.label}</h3>
          <p>{plate.copy}</p>
          <div className="machine-note">
            <span>FIELD NOTE</span>
            <strong>{plate.note}</strong>
          </div>
          <a href="#price">
            Open {PRICING.freeBoqs} files free <b>↗</b>
          </a>
        </div>

        <div className="ghost-plate" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/screens/app/${ghost.image}`} alt="" />
        </div>
      </div>
    </section>
  );
}
