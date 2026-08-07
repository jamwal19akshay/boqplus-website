// Store listing URLs.
//
// iOS is LIVE. Verified 7 August 2026 against Apple's own lookup API
// (itunes.apple.com/lookup?id=6760415552): trackName "BOQ+", seller Akshay
// Jamwal, version 2.3.0, first released 2026-04-24. Its bundleId
// (com.verkzo.boq) matches public/.well-known/apple-app-site-association, so
// this is definitely the right listing. The region-less form is used
// deliberately — Apple redirects each visitor to their own storefront, which
// matters for a product sold to Indian contractors but linked to from
// anywhere.
export const APP_STORE_URL = "https://apps.apple.com/app/id6760415552";

// Android is NOT live yet: the canonical URL for the package named in
// public/.well-known/assetlinks.json —
// play.google.com/store/apps/details?id=com.verkzo.boq — returns 404 in both
// the default and Indian storefronts as of 7 August 2026.
//
// When the listing goes live, set PLAY_STORE_URL to that canonical URL and
// flip PLAY_STORE_LIVE to true; the badge stops being a dimmed
// "coming soon" placeholder and becomes a real link. Nothing else changes.
export const PLAY_STORE_URL = "#play-store-coming-soon";
export const PLAY_STORE_LIVE = false;
