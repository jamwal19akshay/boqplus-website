import FadeUp from "./animations/FadeUp";
import Counter from "./animations/Counter";
import PhoneMockup from "./PhoneMockup";
import type { Stats } from "@/lib/stats";

export default function FindSection({ stats }: { stats: Stats }) {
  const cards = [
    { value: stats.portals, display: null, label: "Portals integrated" },
    { value: null, display: "77K+", label: "Active tenders" },
    { value: stats.organisations, display: null, label: "Organisations" },
  ];

  return (
    <section className="bg-paper py-24" id="features">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <FadeUp>
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-amber">
              01 / Find
            </p>
            <h2 className="font-display text-4xl font-bold uppercase leading-tight tracking-tight text-navy md:text-[64px] md:leading-[1.05]">
              Every tender. Every portal. All India.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy/70">
              Live tenders from 46 government portals — JPDCL, CPWD, PWD, MES,
              BRO and every state GePNIC portal. Filter by state, work type,
              and deadline. Never miss a relevant tender again.
            </p>
          </FadeUp>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {cards.map((c, i) => (
              <FadeUp key={c.label} delay={i * 0.1}>
                <div className="rounded-[14px] bg-white p-5 shadow-card">
                  <p className="font-display text-4xl font-bold text-amber md:text-5xl">
                    {c.display ?? <Counter target={c.value!} />}
                  </p>
                  <p className="mt-2 text-sm text-navy/60">{c.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.2}>
            <p className="mt-8 font-mono text-xs text-navy/50">
              Works with: JPDCL · CPWD · PWD · MES · BRO · HP PWD · J&amp;K PWD
              · and 39 more
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.1}>
          <PhoneMockup label="Tender feed screenshot" />
        </FadeUp>
      </div>
    </section>
  );
}
