// Store listing URLs, carrying campaign parameters so installs that start on
// boq.co.in are attributable. The website itself runs no tracking scripts;
// attribution happens entirely inside the stores' own consoles.
//
// iOS: Apple ID 6760415552, bundle com.verkzo.boq (matches
// public/.well-known/apple-app-site-association). Campaign links follow the
// format App Store Connect → Analytics → Campaigns → "Generate a Campaign
// Link" produced on 13 October 2026: `pt` is the provider token of the
// publishing account, `ct` names the campaign. Installs show under Analytics →
// Campaigns once at least five Apple Accounts have installed through a link.
//
// Android: the listing for com.verkzo.boq is public (open testing, open to
// anyone) — verified 13 October 2026, title "BOQ+ — Fill Your Tender BOQ On
// Your Phone". `referrer` is the URL-encoded UTM string Play passes to the
// Install Referrer API and shows in Play Console's acquisition reports.

// Plain listing URLs — for structured data, where tracking tokens mean nothing.
export const APP_STORE_LISTING = "https://apps.apple.com/app/id6760415552";
export const PLAY_STORE_LISTING =
  "https://play.google.com/store/apps/details?id=com.verkzo.boq";

export function appStoreUrl(campaign: string) {
  return `https://apps.apple.com/app/apple-store/id6760415552?pt=128575647&ct=${encodeURIComponent(campaign)}&mt=8`;
}

export function playStoreUrl(source: string, campaign: string, medium = "organic") {
  const referrer = `utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}`;
  return `${PLAY_STORE_LISTING}&referrer=${encodeURIComponent(referrer)}`;
}

// Site-wide badges (home page hero and closing section).
export const APP_STORE_URL = appStoreUrl("website-home");
export const PLAY_STORE_URL = playStoreUrl("website", "home");
export const PLAY_STORE_LIVE = true;
