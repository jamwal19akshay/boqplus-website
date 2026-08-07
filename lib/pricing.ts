// Single source of truth for every price shown on the site.
//
// These must match the in-app paywall exactly. The landing page, Terms,
// Refund Policy and FAQ all read from here rather than hard-coding figures —
// the previous copy drifted out of date (it still described the annual plan as
// "₹7,999 for the first 100 founding members" long after that framing was
// dropped), and separate hard-coded strings are what allowed that.
//
// Current structure, confirmed 7 August 2026:
//   Annual — ₹7,999 for the first year as an introductory price, open to
//   everyone, not capped at a number of seats. ₹11,999 per year from year two.
export const PRICING = {
  freeBoqs: 2,

  annualIntro: "₹7,999",
  annualStandard: "₹11,999",

  quarterly: "₹3,999",

  credits: "₹999",
  creditBoqs: 5,
  creditValidityMonths: 12,
} as const;
