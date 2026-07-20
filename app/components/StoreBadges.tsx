import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/links";

// Warm hand-drawn store buttons from the approved design. Swap hrefs in
// lib/links.ts for the real store URLs at launch (currently "#").
export default function StoreBadges() {
  return (
    <div className="store-row">
      <a
        className="store-btn"
        href={PLAY_STORE_URL}
        aria-label="Get BOQ+ on Google Play (link coming soon)"
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 3.5 v17 L14.5 12 Z" fill="#F6EFE2" />
          <path d="M4 3.5 L17 9.5 L14.5 12 Z" fill="#D9A93F" />
          <path d="M4 20.5 L17 14.5 L14.5 12 Z" fill="#B5502A" />
          <path d="M17 9.5 l 3.4 1.6 a1 1 0 0 1 0 1.8 L17 14.5 L14.5 12 Z" fill="#5C6B45" />
        </svg>
        <span className="lines">
          <small>ANDROID</small>
          <b>Google Play</b>
        </span>
      </a>
      <a
        className="store-btn"
        href={APP_STORE_URL}
        aria-label="Get BOQ+ on the App Store (link coming soon)"
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M15.8 12.6c0-2.4 2-3.5 2.1-3.6-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.9-1.6 0-3.2 1-4 2.5-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3.1 2.4 1.2 0 1.7-.8 3.2-.8s1.9.8 3.2.8c1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.6-1-2.7-4zM13.4 5.6c.7-.8 1.1-1.9 1-3.1-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.4z"
            fill="#F6EFE2"
          />
        </svg>
        <span className="lines">
          <small>iOS</small>
          <b>App Store</b>
        </span>
      </a>
    </div>
  );
}
