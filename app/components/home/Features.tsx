import Image from "next/image";
import { DATA_STATS } from "@/lib/stats";

type Feature = {
  label: string;
  title: string;
  body: string;
  src: string;
  alt: string;
  caption: string;
};

const FEATURES: Feature[] = [
  {
    label: "Autofill",
    title: "Fill rates from real rate books",
    body: "Choose CPWD DSR, MES SSR or your state's SOR, and BOQ+ matches each item and fills in its rate. Market rates from tender results fill the gaps. Every rate stays yours to check and change.",
    src: "/screens/ios/boq-filled.png",
    alt: "BOQ+ app showing a priced bill of quantities for a street light installation, with quantity, rate and amount for each item.",
    caption: "Real app screen · sample BOQ",
  },
  {
    label: "BidIQ",
    title: "See what other contractors bid",
    body: "BidIQ reads the published results of tenders like yours — who bid, who won and at what percentage — and shows where your price sits before you submit.",
    src: "/screens/ios/boq-bid-percent.png",
    alt: "BOQ+ app showing a percentage tender BOQ with a Bid % badge reading 11% Above and a BidIQ button, with green and red dots beside each item.",
    caption: "Real app screen · sample BOQ",
  },
  {
    label: "Market rates",
    title: "Know the going rate before you quote",
    body: `Filter ${DATA_STATS.tenderResults} government tender results by portal, department, work type and period, then generate a market report.`,
    src: "/screens/ios/market.png",
    alt: "BOQ+ Market screen with filters for portal, organisation, work type and date range, and a Generate Market Report button.",
    caption: "Real app screen",
  },
  {
    label: "Daily tenders",
    title: "New tenders every day, with alerts",
    body: "Tenders from GePNIC and CPPP portals, refreshed daily. Filter by electrical, civil, roads or plumbing work and get alerts for the work you do.",
    src: "/screens/ios/tenders.png",
    alt: "BOQ+ Tenders screen with a search box, work type filters for electrical, civil, roads and plumbing, and a list of tenders published today.",
    caption: "Real app screen",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-cloud py-[72px] md:py-[120px]">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-[32px] font-semibold leading-tight text-navy-900 md:text-[44px]">
            What BOQ+ does for your bid
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-slate-600 md:text-lg">
            Built for contractors who price government tenders on GePNIC and CPPP portals.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-20 md:mt-20 md:gap-28">
          {FEATURES.map((f, i) => (
            <div
              key={f.label}
              className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
            >
              <div className={i % 2 === 1 ? "md:order-2" : undefined}>
                <div className="h-0.5 w-8 bg-amber" aria-hidden="true" />
                <p className="mt-3 text-[13px] font-semibold uppercase tracking-wide text-amber-dark">
                  {f.label}
                </p>
                <h3 className="mt-3 text-[26px] font-semibold leading-tight text-navy-900 md:text-[32px]">
                  {f.title}
                </h3>
                <p className="mt-4 max-w-[46ch] text-[17px] leading-relaxed text-slate-600 md:text-lg">
                  {f.body}
                </p>
              </div>
              <figure
                className={`flex flex-col items-center rounded-3xl bg-mist px-4 py-8 sm:px-8 sm:py-10 ${
                  i % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                {/* Shows the top of the phone screen, where the content is;
                    the empty lower part of each capture is cropped away. */}
                <div className="relative aspect-[720/1000] w-[70vw] max-w-[300px] overflow-hidden rounded-[28px] border border-navy-800 shadow-lg">
                  <Image
                    src={f.src}
                    alt={f.alt}
                    width={720}
                    height={1564}
                    sizes="(min-width: 1024px) 300px, 70vw"
                    className="absolute inset-x-0 top-0 h-auto w-full"
                  />
                </div>
                <figcaption className="mt-5 text-[13px] text-slate-600">
                  {f.caption}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
