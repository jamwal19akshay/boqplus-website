import { APP_STORE_URL, PLAY_STORE_LIVE, PLAY_STORE_URL } from "@/lib/links";

// Official, unmodified badge art served from public/badges/:
//   - app-store.svg  — developer.apple.com/assets/elements/badges/
//   - google-play.png — play.google.com/intl/en_us/badges/
//
// The Google badge ships with 41px of built-in clear space inside a 646x250
// canvas (content is 564x168). The negative inline margin in .badge-play
// cancels that horizontal padding so the two badges line up on their actual
// edges; the sizes are chosen so both render at ~46px of visible badge height.
export default function StoreBadges({ className }: { className?: string }) {
  return (
    <div className={className ? `store-badges ${className}` : "store-badges"}>
      <a
        className="store-badge"
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download BOQ+ on the App Store"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="badge-apple"
          src="/badges/app-store.svg"
          alt="Download on the App Store"
          width={120}
          height={40}
        />
      </a>

      <a
        className={PLAY_STORE_LIVE ? "store-badge" : "store-badge is-soon"}
        href={PLAY_STORE_URL}
        aria-label={
          PLAY_STORE_LIVE
            ? "Get BOQ+ on Google Play"
            : "BOQ+ on Google Play — coming soon"
        }
        aria-disabled={PLAY_STORE_LIVE ? undefined : true}
        {...(PLAY_STORE_LIVE
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="badge-play"
          src="/badges/google-play.png"
          alt="Get it on Google Play"
          width={646}
          height={250}
        />
        {!PLAY_STORE_LIVE && <b>COMING SOON</b>}
      </a>
    </div>
  );
}
