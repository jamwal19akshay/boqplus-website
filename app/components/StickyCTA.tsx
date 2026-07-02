import { APP_STORE_URL } from "@/lib/links";

export default function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-3 md:hidden">
      <a
        href={APP_STORE_URL}
        className="block w-full rounded bg-amber py-4 text-center font-display text-lg font-bold uppercase text-navy shadow-card"
      >
        Download Free — BOQ+
      </a>
    </div>
  );
}
