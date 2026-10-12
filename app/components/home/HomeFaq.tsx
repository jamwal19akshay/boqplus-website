import { FAQS } from "@/lib/faq";
import HomeFaqJsonLd from "./HomeFaqJsonLd";

export default function HomeFaq() {
  const items = FAQS.filter((f) => f.home);
  return (
    <section id="faq" className="bg-cloud py-[72px] md:py-[120px]">
      <HomeFaqJsonLd />
      <div className="container mx-auto grid max-w-site gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div>
          <h2 className="text-[32px] font-semibold leading-tight text-navy-900 md:text-5xl">
            Questions contractors ask
          </h2>
          <a
            href="/faq"
            className="mt-6 inline-flex min-h-[44px] items-center font-semibold text-navy-900 underline decoration-amber decoration-2 underline-offset-4"
          >
            See all questions →
          </a>
        </div>
        <div className="border-t border-slate-200">
          {items.map((f) => (
            <details key={f.q} className="group border-b border-slate-200">
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-semibold text-navy-900 [&::-webkit-details-marker]:hidden">
                <span>{f.q}</span>
                <span
                  aria-hidden="true"
                  className="text-2xl leading-none text-amber-dark transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-base leading-relaxed text-slate-600 [&_a]:text-navy-900 [&_a]:underline [&_a]:decoration-amber [&_a]:decoration-2 [&_a]:underline-offset-4">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
