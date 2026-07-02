import FadeUp from "./animations/FadeUp";
import PhoneMockup from "./PhoneMockup";

const features = [
  "Rate suggestions from market comparatives",
  "Rate history per item",
  "SSR/DSR rate browser built-in",
  "Export PDF + Excel reference copy",
  "Works offline after BOQ is loaded",
];

export default function FillSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <FadeUp className="order-2 lg:order-1" delay={0.1}>
          <PhoneMockup label="BOQ filling screenshot" />
        </FadeUp>

        <div className="order-1 lg:order-2">
          <FadeUp>
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-amber">
              02 / Fill
            </p>
            <h2 className="font-display text-4xl font-bold uppercase leading-tight tracking-tight text-navy md:text-[64px] md:leading-[1.05]">
              Fill 200 BOQ items. On your phone. In 20 minutes.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy/70">
              Open any GePNIC BOQ XLS directly in BOQ+. Smart rate suggestions
              from real market data appear above the keyboard. Auto-calculate
              amounts. Export a bid-ready PDF or Excel reference copy
              instantly.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <ul className="mt-8 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-navy/80">
                  <svg
                    className="mt-1 h-5 w-5 shrink-0 text-amber"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="mt-10 border-l-4 border-amber bg-navy p-6 text-white">
              <p className="text-lg leading-relaxed">
                This is what no competitor offers.
                <br />
                BidAssist finds tenders.
                <br />
                <span className="font-semibold">
                  BOQ+ finds AND fills them.
                </span>
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
