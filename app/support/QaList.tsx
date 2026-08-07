"use client";

import { useState } from "react";

export type Qa = { q: string; a: string };

export default function QaList({ items }: { items: Qa[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="qa-list">
      {items.map((item, i) => {
        const open = openIdx === i;
        return (
          <div className="qa-item" key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIdx(open ? null : i)}
              aria-expanded={open}
            >
              <span>{item.q}</span>
              <b>+</b>
            </button>
            {open && <p className="qa-answer">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
