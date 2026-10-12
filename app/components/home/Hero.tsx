import StoreBadges from "../StoreBadges";
import styles from "./Hero.module.css";
import HeroPlay from "./HeroPlay";

// Rows are read off public/screens/ios/boq-filled.png (sample tender BOQ).
const ROWS = [
  ["S/E/I/T/C of 6 mtr LED decorative Trianga Pole made round pile duly pol…", "No.", "62", "₹47,234.00", "₹29,28,508.00"],
  ["SITC of FEEDER PILLAR 1 phase 2 wire, 415V, 1nos of 100 Amps incoming S…", "No.", "4", "₹27,021.00", "₹1,08,084.00"],
  ["Supply of 1.1 kV 4C x 16 sq mm Aluminium Unarmoured PVC Cable", "Mtr.", "2100", "₹186.31", "₹3,91,251.00"],
  ["Laying of one number PVC insulated and PVC sheathed / XLPE power c…", "Mtr.", "1328", "₹253.00", "₹3,35,984.00"],
  ["Supplying and making end termination with brass compression gland and a…", "Mtr.", "32", "₹371.00", "₹11,872.00"],
  ["Wiring for circuit/ submain wiring along with earth wire with the following si…", "Mtr.", "600", "₹267.00", "₹1,60,200.00"],
] as const;

const CALLOUTS = [
  { label: "Tender results", side: "left", top: "12%" },
  { label: "State SSR books", side: "left", top: "70%" },
  { label: "CPWD DSR", side: "right", top: "34%" },
  { label: "30+ states & UTs", side: "right", top: "80%" },
] as const;

function Cell({ value, i, cls }: { value: string; i: number; cls: string }) {
  return (
    <span className={styles.cell} style={{ "--i": i } as React.CSSProperties}>
      <span className={styles.ph}>–</span>
      <span className={`${styles.val} ${cls}`}>{value}</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="hero" aria-label="BOQ+ overview" className={styles.section}>
      <div className={styles.grid} aria-hidden="true" />
      <div className="mx-auto grid max-w-site grid-cols-[minmax(0,1fr)] items-center gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-8 lg:pb-24 lg:pt-20">
        <div>
          <h1 className="max-w-[16ch] text-[40px] font-semibold leading-[1.05] tracking-tight text-white sm:text-[52px] lg:text-[60px]">
            Price any tender BOQ in minutes.
          </h1>
          <p className="mt-5 max-w-[34ch] text-lg leading-relaxed text-slate-300 sm:text-xl">
            Real rates and winning bid ranges from government tender results. In your pocket.
          </p>
          <StoreBadges className="mt-8" />
        </div>

        <div className="flex flex-col items-center">
          <div className="relative">
            <div className={styles.glow} aria-hidden="true" />
            <HeroPlay>
              <div className={styles.phone}>
                <p className="sr-only">
                  Animation: the BOQ+ app filling rates into a sample tender BOQ and settling on an 11% above bid.
                </p>
                <div className={styles.screen} aria-hidden="true">
                  <div className={styles.top}>
                    <div className={styles.title}>Installation of Tiranaga Pole…</div>
                    <div className={styles.sub}>17 items · Percentage Tender</div>
                  </div>
                  <div className={styles.cols}>
                    <span>#</span>
                    <span>Description</span>
                    <span className={styles.r}>Qty</span>
                    <span className={styles.r}>Rate</span>
                    <span className={styles.r}>Amount</span>
                  </div>
                  {ROWS.map(([desc, unit, qty, rate, amount], i) => (
                    <div
                      key={i}
                      className={styles.row}
                      style={{ "--i": i } as React.CSSProperties}
                    >
                      <span className={styles.idx}>{i + 1}</span>
                      <span className={styles.desc}>
                        <span className={styles.clamp}>{desc}</span>
                        <span className={styles.unit}>{unit}</span>
                        <span className={styles.dot} />
                      </span>
                      <span className={`${styles.r} ${styles.qty}`}>{qty}</span>
                      <Cell value={rate} i={i} cls={styles.rate} />
                      <Cell value={amount} i={i} cls={styles.amt} />
                    </div>
                  ))}
                  <div className={styles.bar}>
                    <span className={styles.pill}>
                      Bid %: <span data-bid>11</span>% Above
                    </span>
                    <span className={styles.chip}>BidIQ</span>
                  </div>
                </div>

                <ul
                  className="pointer-events-none absolute inset-0 hidden text-[14px] text-slate-300 lg:block"
                  aria-label="Data behind the rates"
                >
                  {CALLOUTS.map((c) => (
                    <li
                      key={c.label}
                      className={`${styles.callout} ${c.side === "left" ? styles.left : styles.right}`}
                      style={{ top: c.top }}
                    >
                      <span className={styles.txt}>{c.label}</span>
                      <span className={styles.line} aria-hidden="true" />
                      <span className={styles.end} aria-hidden="true" />
                    </li>
                  ))}
                </ul>
              </div>
            </HeroPlay>
          </div>

          <ul className="mt-6 flex flex-wrap justify-center gap-2 lg:hidden" aria-label="Data behind the rates">
            {CALLOUTS.map((c) => (
              <li key={c.label} className="rounded-full bg-navy-800 px-3 py-1 text-[13px] text-slate-300">
                {c.label}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[13px] text-slate-300">Recreated from the BOQ+ app. Sample BOQ.</p>
        </div>
      </div>
    </section>
  );
}
