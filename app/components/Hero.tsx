"use client";

import { motion } from "framer-motion";
import Counter from "./animations/Counter";
import PhoneMockup from "./PhoneMockup";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/links";
import type { Stats } from "@/lib/stats";

export default function Hero({ stats }: { stats: Stats }) {
  return (
    <section className="relative flex min-h-screen items-center bg-navy pb-20 pt-28">
      <div className="mx-auto grid w-full max-w-7xl gap-16 px-6 lg:grid-cols-[3fr_2fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-6 font-mono text-sm uppercase tracking-[0.2em] text-amber">
            India&apos;s #1 Mobile BOQ App
          </p>

          <h1 className="font-display text-[52px] font-bold uppercase leading-[0.95] tracking-[-0.02em] text-white md:text-[96px]">
            Know your
            <br />
            Below&nbsp;%
            <br />
            before you bid
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-relaxed text-[#B9C0CC]">
            Find government tenders. Fill BOQ on your phone. Export bid-ready
            files. No laptop. No cyber café. Ever.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={APP_STORE_URL}
              className="rounded bg-amber px-8 py-4 font-display text-lg font-bold uppercase text-navy hover:brightness-110"
            >
              Download Free
            </a>
            <a
              href={PLAY_STORE_URL}
              className="rounded border border-white px-8 py-4 font-display text-lg font-bold uppercase text-white hover:bg-white/10"
            >
              View on Play Store
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-10">
            {[
              { value: stats.tenders, suffix: " tenders", label: "active today" },
              { value: stats.portals, suffix: " portals", label: "all India" },
              { value: 0, suffix: "", label: "no card required", fixed: "₹0 to start" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-mono text-2xl font-semibold text-amber">
                  {s.fixed ?? <Counter target={s.value} suffix={s.suffix} />}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-white/50">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block"
        >
          <PhoneMockup label="App screenshot — coming tomorrow" caption="iPhone 16 Pro" />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-amber"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </motion.div>
    </section>
  );
}
