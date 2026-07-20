// Headline market figures, exactly as shown on the Market Intelligence Report
// capture (public/screens/android/04-market-intelligence-report.png). The
// landing page states these are read off that screen, so they must stay in
// lock-step with the screenshot — if the capture is refreshed, update these
// together with it.
//
// Last verified against the production database on 20 July 2026: exact match
// (45,584 distinct comparatives · avg 3.52 bidders · ₹14,277 Cr summed L1
// value · 9.21% median winning below-estimate). See DECISIONS.md.
export const MARKET_CAPTURE = {
  comparatives: "45,584",
  decidedValue: "₹14,277 Cr",
  avgBidders: "3.5",
  medianDiscount: "9.2%",
} as const;
