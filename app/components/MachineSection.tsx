"use client";

import { useState } from "react";

// Screens are 900px-wide WebP copies of the PNG captures beside them (the
// phone shell is at most 370px wide, so 900px covers 2.4x displays at a third
// of the PNG weight). Both images sit below the fold: loading="lazy" also
// stops React preloading them ahead of the hero.
const PLATES = [
  {
    label: "Fill the BOQ",
    image: "fill-rates.webp",
    note: "45 / 45 items rated",
    copy: "Upload a BOQ and it opens priced. Lines with a confident rate carry a Suggested rate you check, edit or accept; the rest are left for you to fill, with Auto-fill for the empty lines.",
  },
  {
    label: "Find the work",
    image: "tenders.webp",
    note: "GePNIC + state portals",
    copy: "Live opportunities stripped of portal friction. Department, location, value and deadline—before you open the detail.",
  },
  {
    label: "Keep the lesson",
    image: "track-record.webp",
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
          Three views.
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
              width={900}
              height={2004}
              loading="lazy"
              decoding="async"
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
            Price your first BOQ free <b>↗</b>
          </a>
        </div>

        <div className="ghost-plate" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/screens/app/${ghost.image}`} alt="" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}
