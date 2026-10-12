import { DATA_STATS } from "@/lib/stats";

export default function DataStat() {
  return (
    <section id="data" aria-label="Data behind BOQ+" className="border-t border-navy-800 bg-navy-950">
      <div className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:py-24">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="h-2 w-2 bg-amber" aria-hidden="true" />
          <span className="text-[12px] font-medium uppercase tracking-wider text-slate-300 sm:text-[13px]">
            Quoted rates analysed
          </span>
          <span className="rounded bg-navy-800 px-2 py-0.5 text-[12px] text-slate-300 sm:text-[13px]">
            as of {DATA_STATS.asOf}
          </span>
        </div>
        <p className="mt-6 text-[clamp(56px,13vw,168px)] font-semibold leading-[0.95] tracking-[-0.04em] text-white tabular-nums">
          {DATA_STATS.quotedRates}
        </p>
        <p className="mt-6 text-lg text-slate-300">
          from {DATA_STATS.tenderResults} government tender results
        </p>
      </div>
    </section>
  );
}
