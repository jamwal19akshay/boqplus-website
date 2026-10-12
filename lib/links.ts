// Store listing URLs, both carrying campaign parameters so installs that start
// on boq.co.in are attributable. The website itself runs no tracking scripts;
// attribution happens entirely inside the stores' own consoles.
//
// iOS: generated with App Store Connect → Analytics → Campaigns → "Generate a
// Campaign Link" on 13 October 2026. `pt` is the provider token for the
// account that publishes BOQ+ (Apple ID 6760415552, bundle com.verkzo.boq),
// `ct` names the campaign. Installs show under Analytics → Campaigns once at
// least five Apple Accounts have installed through it.
export const APP_STORE_URL =
  "https://apps.apple.com/app/apple-store/id6760415552?pt=128575647&ct=website-home&mt=8";

// Android: the listing for com.verkzo.boq is public (open testing, open to
// anyone) — verified 13 October 2026, title "BOQ+ — Fill Your Tender BOQ On
// Your Phone". The `referrer` is the URL-encoded UTM string Play hands to the
// Install Referrer API and reports in Play Console's acquisition reports.
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.verkzo.boq&referrer=utm_source%3Dwebsite%26utm_medium%3Dorganic%26utm_campaign%3Dhome";
