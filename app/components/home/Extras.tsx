import type { ReactNode } from "react";

type Extra = { title: string; text: string; icon: ReactNode };

const ICON_PROPS = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const EXTRAS: Extra[] = [
  {
    title: "20 site calculators",
    text: "Concrete, steel, bricks, plaster and more, to IS codes",
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M8 7h8M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 16h.01M12 16h.01M15.5 16h.01" />
      </svg>
    ),
  },
  {
    title: "SSR / SOR rate books",
    text: "CPWD DSR, MES SSR, J&K and other state books, or upload your own",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H19v15H6.5A1.5 1.5 0 0 0 5 19.5v-15Z" />
        <path d="M5 19.5A1.5 1.5 0 0 0 6.5 21H19v-3M9 7h6" />
      </svg>
    ),
  },
  {
    title: "PDF and Excel export",
    text: "Send the priced BOQ back in the format you need",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
        <path d="M14 3v5h5M12 17v-6M9.5 13.5 12 11l2.5 2.5" />
      </svg>
    ),
  },
  {
    title: "Tender alerts",
    text: "Get notified when new tenders match your work",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15L6 16Z" />
        <path d="M10 21h4" />
      </svg>
    ),
  },
  {
    title: "Material prices",
    text: "City-wise prices for cement, steel, sand and more",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M3 12V4h8l10 10-8 8L3 12Z" />
        <path d="M7.5 8.5h.01" />
      </svg>
    ),
  },
  {
    title: "Track record",
    text: "Your firm's wins, losses and margins, private to you",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
      </svg>
    ),
  },
];

export default function Extras() {
  return (
    <section id="extras" className="bg-navy-900 py-[72px] md:py-[120px]">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <h2 className="text-[32px] font-semibold leading-tight text-white md:text-[44px]">
          Everything else on site
        </h2>
        <p className="mt-4 text-[17px] text-slate-300 md:text-lg">
          Included in the app, alongside BOQ filling.
        </p>
        <ul className="mt-12 grid grid-cols-2 gap-3 md:mt-16 md:grid-cols-3 md:gap-5">
          {EXTRAS.map((e) => (
            <li
              key={e.title}
              className="rounded-2xl border border-navy-700 p-5 md:p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-800 text-amber">
                {e.icon}
              </div>
              <h3 className="mt-4 text-[17px] font-semibold leading-snug text-white">
                {e.title}
              </h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-slate-300">
                {e.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
