import FadeUp from "./animations/FadeUp";

function Check({ off = false }: { off?: boolean }) {
  return off ? (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-1 h-4 w-4 shrink-0">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="mt-1 h-4 w-4 shrink-0 text-amber">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function PricingSection() {
  return (
    <section className="bg-white py-24" id="pricing">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-amber">
            05 / Pricing
          </p>
          <h2 className="font-display text-4xl font-bold uppercase leading-tight tracking-tight text-navy md:text-[56px] md:leading-[1.05]">
            One winning tender pays for years of BOQ+
          </h2>
          <p className="mt-4 text-lg text-navy/60">
            Start free. No card required.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mx-auto mt-12 max-w-2xl rounded bg-amber px-6 py-4 text-center">
            <p className="font-mono text-sm font-semibold uppercase tracking-wider text-navy">
              ⚡ Early Bird — 94 of 100 spots remaining
            </p>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-navy/15">
              <div className="h-full rounded-full bg-navy" style={{ width: "6%" }} />
            </div>
          </div>
        </FadeUp>

        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-2">
          <FadeUp delay={0.1}>
            <div className="flex h-full flex-col rounded-[14px] border border-gray-light bg-white p-8 shadow-card">
              <p className="font-mono text-xs uppercase tracking-wider text-navy/50">
                Pay per use
              </p>
              <p className="mt-4 font-display text-5xl font-bold text-navy">
                ₹799
              </p>
              <p className="mt-1 text-navy/60">for 5 BOQs</p>

              <ul className="mt-8 flex-1 space-y-3 text-navy/80">
                <li className="flex gap-3"><Check /> BOQ filling + export</li>
                <li className="flex gap-3"><Check /> Tender discovery</li>
                <li className="flex gap-3"><Check /> All calculators</li>
                <li className="flex gap-3 text-navy/35"><Check off /> BidIQ Intelligence</li>
                <li className="flex gap-3 text-navy/35"><Check off /> Rate suggestions</li>
              </ul>

              <button className="mt-8 rounded border-2 border-navy px-6 py-3.5 font-display font-bold uppercase text-navy hover:bg-navy hover:text-white">
                Buy Tokens
              </button>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="relative flex h-full flex-col rounded-[14px] bg-navy p-8 text-white shadow-card lg:scale-[1.03]">
              <span className="absolute right-6 top-6 rounded bg-amber px-3 py-1 font-mono text-xs font-semibold uppercase text-navy">
                Best Value
              </span>
              <p className="font-mono text-xs uppercase tracking-wider text-white/50">
                Annual Unlimited
              </p>
              <p className="mt-4 font-display text-6xl font-bold text-amber">
                ₹7,999{" "}
                <span className="text-2xl font-normal text-white/40 line-through">
                  ₹11,999
                </span>
              </p>
              <p className="mt-1 text-white/60">per year · early bird price</p>

              <ul className="mt-8 flex-1 space-y-3 text-white/85">
                <li className="flex gap-3"><Check /> Everything in Tokens</li>
                <li className="flex gap-3"><Check /> BidIQ Intelligence</li>
                <li className="flex gap-3"><Check /> Rate suggestions (market data)</li>
                <li className="flex gap-3"><Check /> Competitor tracker</li>
                <li className="flex gap-3"><Check /> Priority template support</li>
                <li className="flex gap-3"><Check /> Price locked forever</li>
              </ul>

              <button className="mt-8 w-full rounded bg-amber px-6 py-4 font-display text-lg font-bold uppercase text-navy hover:brightness-110">
                Get Early Access
              </button>
              <p className="mt-3 text-center text-sm text-white/50">
                Price rises to ₹11,999 after 100 subscribers
              </p>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.2}>
          <p className="mt-12 text-center font-mono text-sm text-navy/50">
            2 BOQs always free · No credit card · Cancel anytime · Instant
            access
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
