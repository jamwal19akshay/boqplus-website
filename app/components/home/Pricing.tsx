import { PRICING } from "@/lib/pricing";

function Check({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={`mt-[3px] h-5 w-5 shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}

const btnBase =
  "mt-8 inline-flex min-h-[48px] w-full items-center justify-center rounded-full px-6 text-base font-semibold";
const btnSecondary = `${btnBase} border border-navy-900 text-navy-900 hover:bg-cloud`;
const btnPrimary = `${btnBase} bg-amber text-navy-950 hover:bg-amber-light`;

export default function Pricing() {
  const freeItems = [
    `${PRICING.freeBoqPreviews} BOQ previews`,
    `${PRICING.freeExports} exports`,
    "Site calculators",
    "SSR rate books",
    "Tender alerts",
  ];
  const annualItems = [
    "Unlimited BOQs",
    "BidIQ: what other contractors bid",
    "Market rates and reports",
    "PDF and Excel export",
    "Track record and tender alerts",
  ];
  const quarterlyItems = annualItems.slice(0, 4);

  return (
    <section id="pricing" className="bg-white py-[72px] md:py-[120px]">
      <div className="container mx-auto max-w-site px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[32px] font-semibold leading-tight text-navy-900 md:text-5xl">
            Simple pricing. Pay in the app.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Start free. Upgrade inside the app when you&apos;re ready.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-md gap-6 lg:mt-16 lg:max-w-none lg:grid-cols-3 lg:items-center">
          {/* Annual: first in DOM, centre on desktop */}
          <div className="overflow-hidden rounded-3xl bg-navy-900 text-white lg:order-2 lg:py-6 lg:shadow-xl">
            <div className="bg-amber py-2 text-center text-sm font-semibold uppercase tracking-wide text-navy-950">
              Best value
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-xl font-semibold">Annual</h3>
              <p className="mt-4 flex flex-wrap items-baseline gap-x-2">
                <span className="text-5xl font-semibold">{PRICING.annualIntro}</span>
                <span className="text-slate-300">first year</span>
              </p>
              <p className="mt-2 text-slate-300">
                then {PRICING.annualStandard}/year
              </p>
              <p className="mt-4 inline-block rounded-full border border-amber px-3 py-1 text-sm font-medium text-amber">
                Save {PRICING.annualSavingVsQuarterly} vs quarterly in year one
              </p>
              <ul className="mt-6 space-y-3">
                {annualItems.map((t) => (
                  <li key={t} className="flex gap-3">
                    <Check className="text-amber" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <a href="#download" className={btnPrimary}>
                Download BOQ+
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-mist bg-white p-6 sm:p-8 lg:order-1">
            <h3 className="text-xl font-semibold text-navy-900">Free</h3>
            <p className="mt-4 text-5xl font-semibold text-navy-900">₹0</p>
            <p className="mt-2 text-slate-600">No card needed</p>
            <ul className="mt-6 space-y-3 text-navy-900">
              {freeItems.map((t) => (
                <li key={t} className="flex gap-3">
                  <Check className="text-amber-dark" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <a href="#download" className={btnSecondary}>
              Download BOQ+
            </a>
          </div>

          <div className="rounded-3xl border border-mist bg-white p-6 sm:p-8 lg:order-3">
            <h3 className="text-xl font-semibold text-navy-900">Quarterly</h3>
            <p className="mt-4 flex flex-wrap items-baseline gap-x-2">
              <span className="text-5xl font-semibold text-navy-900">
                {PRICING.quarterly}
              </span>
              <span className="text-slate-600">every 3 months</span>
            </p>
            <p className="mt-2 text-slate-600">Same access as Annual</p>
            <ul className="mt-6 space-y-3 text-navy-900">
              {quarterlyItems.map((t) => (
                <li key={t} className="flex gap-3">
                  <Check className="text-amber-dark" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <a href="#download" className={btnSecondary}>
              Download BOQ+
            </a>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-cloud px-5 py-4 text-center sm:px-8">
          <p className="text-navy-900">
            <strong className="font-semibold">
              {PRICING.credits} for {PRICING.creditBoqs} BOQs — for one-off bids.
            </strong>{" "}
            <span className="text-slate-600">
              Credits are valid {PRICING.creditValidityMonths} months.
            </span>
          </p>
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-slate-600">
          Prices include applicable taxes. All purchases happen in the app
          through the App Store or Google Play. Subscriptions renew
          automatically; cancel any time in your store&apos;s subscription
          settings.
        </p>
      </div>
    </section>
  );
}
