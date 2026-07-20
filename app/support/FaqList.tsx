"use client";

import { useState } from "react";

export type Faq = { q: string; a: string };

export default function FaqList({ faqs }: { faqs: Faq[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="divide-y divide-hairline overflow-hidden rounded-[14px] border-[1.5px] border-hairline bg-card shadow-warm">
      {faqs.map((faq, i) => {
        const open = openIdx === i;
        return (
          <div key={faq.q}>
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenIdx(open ? null : i)}
              aria-expanded={open}
            >
              <span className="font-semibold text-ink">{faq.q}</span>
              <span
                className={`hand shrink-0 text-2xl text-terracotta transition-transform ${
                  open ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {open && (
              <p className="px-6 pb-6 leading-relaxed text-ink-soft">{faq.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
