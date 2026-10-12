import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/links";

// Official, unmodified badge art served from public/badges/:
//   - app-store.svg  — developer.apple.com/assets/elements/badges/
//   - google-play.png — play.google.com/intl/en_us/badges/
//
// Apple's badge has no built-in padding, so its rendered height is its visible
// height (44px). Google's ships with 41px of clear space inside a 646×250
// canvas (content 564×168), so it is drawn at 44 × 250/168 ≈ 65px tall with
// the horizontal padding cancelled by a negative margin — both badges then
// show the same 44px of artwork and line up on their real edges. Neither
// badge is ever covered, recoloured or cropped.
export default function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-3 ${className}`}>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download BOQ+ on the App Store"
        className="inline-flex rounded-[9px]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/badges/app-store.svg"
          alt="Download on the App Store"
          width={132}
          height={44}
          className="block h-[44px] w-auto"
        />
      </a>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get BOQ+ on Google Play"
        className="inline-flex rounded-[9px]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/badges/google-play.png"
          alt="Get it on Google Play"
          width={170}
          height={65}
          className="-mx-[10.7px] -my-[10.7px] block h-[65.5px] w-auto max-w-none"
        />
      </a>
    </div>
  );
}
