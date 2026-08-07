"use client";

import { useState } from "react";

// Illustrative band for the worked example below — not a live figure.
const BAND_LOW = 7.5;
const BAND_HIGH = 11.0;

export default function RateRuler() {
  const [discount, setDiscount] = useState(9.2);
  const inBand = discount >= BAND_LOW && discount <= BAND_HIGH;

  return (
    <section className="rate-ruler" aria-label="Interactive winning discount example">
      <div className="ruler-title">
        <span>BIDIQ / RATE POSITIONING TEST</span>
        <h2>
          Move the bid.
          <br />
          Watch the line.
        </h2>
      </div>

      <div className="ruler-control">
        <div className="ruler-readout">
          <span>YOUR POSITION</span>
          <strong>{discount.toFixed(1)}%</strong>
          <em>BELOW ESTIMATE</em>
        </div>
        <input
          aria-label="Winning discount"
          type="range"
          min={2}
          max={18}
          step={0.1}
          value={discount}
          onChange={(e) => setDiscount(Number(e.target.value))}
        />
        <div className="ruler-scale">
          <span>0</span>
          <span>5</span>
          <span>10</span>
          <span>15</span>
          <span>20</span>
        </div>
        <div className="verdict">
          <span className={inBand ? "active" : undefined}>
            HISTORIC WINNING BAND
            <br />
            <b>
              {BAND_LOW.toFixed(1)}&mdash;{BAND_HIGH.toFixed(1)}% BELOW
            </b>
          </span>
          <p>Illustrative item · 400 KVA distribution transformer</p>
        </div>
      </div>
    </section>
  );
}
