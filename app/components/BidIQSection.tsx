import FadeUp from "./animations/FadeUp";

const cards = [
  {
    title: "Market Rate Intelligence",
    body: "Upload GePNIC comparative files. See market min, avg, max and L1 typical rate for every item. HIGH/MEDIUM/LOW confidence based on data points.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8">
        <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" />
      </svg>
    ),
  },
  {
    title: "Know Your Rivals",
    body: "Track who bids on your portals. Win rates, typical below %, loss-leader risk flags. Stop being surprised by the same contractors every tender.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "Auto Rate Suggestions",
    body: "Rate suggestion chip appears above keyboard as you fill. Tap to fill. Anchored to L1 typical, not market average. Because average loses.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

export default function BidIQSection() {
  return (
    <section className="bg-navy py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-amber">
            03 / BidIQ Intelligence
          </p>
          <h2 className="font-display text-4xl font-bold uppercase leading-tight tracking-tight text-white md:text-[72px] md:leading-[1.05]">
            Bid at the right Below&nbsp;%
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            Upload past comparatives. See what competitors actually bid. Know
            your market rate before you fill a single cell.
          </p>
          <span className="mt-6 inline-block rounded-full border border-amber px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-amber">
            Annual Plan Only
          </span>
        </FadeUp>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <FadeUp key={c.title} delay={i * 0.1}>
              <div className="h-full rounded-[14px] bg-white p-8 shadow-card">
                <div className="text-amber">{c.icon}</div>
                <h3 className="mt-5 font-display text-xl font-bold uppercase text-navy">
                  {c.title}
                </h3>
                <p className="mt-3 leading-relaxed text-navy/70">{c.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
