import FadeUp from "./animations/FadeUp";

const features = [
  {
    title: "22 Calculators",
    body: "IS/IRC coded calculators for electrical, civil, roads, plumbing, and site work. Add results directly to BOQ.",
    icon: <path d="M9 7h6M9 11h6M9 15h2M5 3h14a1 1 0 011 1v16a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z" />,
  },
  {
    title: "SSR/DSR Browser",
    body: "State Schedule of Rates built in. Look up official rates without switching apps.",
    icon: <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 006.5 22H20V2H6.5A2.5 2.5 0 004 4.5v15z" />,
  },
  {
    title: "Material Prices",
    body: "Live prices for cement, steel, copper, aluminium. Know your material cost before you quote.",
    icon: <path d="M23 6l-9.5 9.5-5-5L1 18M17 6h6v6" />,
  },
  {
    title: "XLS + PDF Export",
    body: "Export a reference copy in Excel or PDF. With your filled rates. Instantly.",
    icon: <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />,
  },
  {
    title: "Scenario Comparison",
    body: "Create multiple rate scenarios for the same BOQ. Compare which puts you below estimate.",
    icon: <path d="M8 3H5a2 2 0 00-2 2v14a2 2 0 002 2h3M16 3h3a2 2 0 012 2v14a2 2 0 01-2 2h-3M12 8v8" />,
  },
  {
    title: "In-App Portal Browser",
    body: "Open the portal inside BOQ+. Download the BOQ directly. It opens automatically. No switching apps.",
    icon: <path d="M12 22a10 10 0 100-20 10 10 0 000 20zM2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />,
  },
];

export default function FeatureGrid() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp>
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-amber">
            04 / Features
          </p>
          <h2 className="max-w-3xl font-display text-4xl font-bold uppercase leading-tight tracking-tight text-navy md:text-[56px] md:leading-[1.05]">
            Everything a contractor needs. Nothing they don&apos;t.
          </h2>
        </FadeUp>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FadeUp key={f.title} delay={(i % 3) * 0.1}>
              <div className="h-full rounded-[14px] border border-gray-light bg-white p-6 shadow-card">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-8 w-8 text-amber"
                >
                  {f.icon}
                </svg>
                <h3 className="mt-4 font-display text-lg font-bold uppercase text-navy">
                  {f.title}
                </h3>
                <p className="mt-2 leading-relaxed text-navy/60">{f.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
