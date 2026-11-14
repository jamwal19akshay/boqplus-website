// Single source of truth for every price shown on the site.
//
// These must match the in-app paywall exactly. The landing page, Terms,
// Refund Policy and FAQ all read from here rather than hard-coding figures —
// the previous copy drifted out of date (it still described the annual plan as
// "₹7,999 for the first 100 founding members" long after that framing was
// dropped), and separate hard-coded strings are what allowed that.
//
// Free tier is the app 3.0.2 tier (founder request, 14 November 2026): the
// first BOQ opens priced, free; after that, free previews. It replaces the
// 3.0.0 tier of 3 previews + 3 exports. This release ships with 3.0.2.
//
// Current structure, confirmed 7 August 2026:
//   Annual — ₹7,999 for the first year as an introductory price, open to
//   everyone, not capped at a number of seats. ₹11,999 per year from year two.
export const PRICING = {
  annualIntro: "₹7,999",
  annualStandard: "₹11,999",
  // ₹7,999 / 365 = ₹21.9. Shown only in small print below the billed price.
  annualIntroPerDay: "₹22",

  quarterly: "₹3,999",

  credits: "₹999",
  creditBoqs: 5,
} as const;

// The free tier in one phrase, for places that describe it in a sentence.
export const FREE_TIER_SUMMARY =
  "your first BOQ opens priced, free; after that, free previews that show the rates already in your file and how many lines BOQ+ has rates for";
