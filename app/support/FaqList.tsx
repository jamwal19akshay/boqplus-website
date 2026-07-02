"use client";

import { useState } from "react";

export type Faq = { q: string; a: string };

export default function FaqList({ faqs }: { faqs: Faq[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="divide-y divide-gray-light rounded-[14px] border border-gray-light bg-white shadow-card">
      {faqs.map((faq, i) => {
        const open = openIdx === i;
        return (
          <div key={faq.q}>
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenIdx(open ? null : i)}
              aria-expanded={open}
            >
              <span className="font-semibold text-navy">{faq.q}</span>
              <span
                className={`shrink-0 font-display text-2xl text-amber transition-transform ${
                  open ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {open && (
              <p className="px-6 pb-6 leading-relaxed text-navy/70">{faq.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
