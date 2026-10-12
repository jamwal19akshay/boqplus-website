import { PRICING } from "@/lib/pricing";
import StoreBadges from "../StoreBadges";

export default function FinalBanner() {
  return (
    <section id="download" className="bg-amber py-[72px] md:py-24">
      <div className="container mx-auto max-w-site px-4 text-center sm:px-6">
        <h2 className="mx-auto max-w-3xl text-[32px] font-semibold leading-tight text-navy-950 md:text-[52px]">
          Price your next tender with BOQ+
        </h2>
        <p className="mt-4 text-lg text-navy-900">
          Free to start. {PRICING.freeBoqPreviews} BOQ previews and{" "}
          {PRICING.freeExports} exports on us.
        </p>
        <StoreBadges className="mt-8 justify-center" />
      </div>
    </section>
  );
}
