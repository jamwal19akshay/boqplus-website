// Single source of truth for every price shown on the site.
//
// These must match the in-app paywall exactly. The landing page, Terms,
// Refund Policy and FAQ all read from here rather than hard-coding figures —
// the previous copy drifted out of date (it still described the annual plan as
// "₹7,999 for the first 100 founding members" long after that framing was
// dropped), and separate hard-coded strings are what allowed that.
//
// Free tier is the app 3.0.0 tier (founder decision, 13 October 2026). This
// release ships only once 3.0.0 is live on both stores.
//
// Current structure, confirmed 7 August 2026:
//   Annual — ₹7,999 for the first year as an introductory price, open to
//   everyone, not capped at a number of seats. ₹11,999 per year from year two.
export const PRICING = {
  freeBoqPreviews: 3,
  freeExports: 3,

  annualIntro: "₹7,999",
  annualStandard: "₹11,999",

  quarterly: "₹3,999",

  credits: "₹999",
  creditBoqs: 5,
} as const;

// The free tier in one phrase, for places that describe it in a sentence.
export const FREE_TIER_SUMMARY = `${PRICING.freeBoqPreviews} BOQ previews and ${PRICING.freeExports} exports, plus calculators, SSR rate books and tender alerts`;
