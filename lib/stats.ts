// Corpus counts from the production results database. Source:
// boqplus-android-backend/docs/DATA_INVENTORY.md, read-only SELECTs on
// 11 October 2026: rate_observations = 2,194,581 quoted line-item rates (one
// bidder's rate for one BOQ item — never call them "bids"); 69,351 tenders
// with published comparatives. Rounded down here.
//
// To refresh: run `select count(*) from rate_observations;` and
// `select count(distinct tender_ref) from comparative_items;` against
// production (read-only), round down, update the values and `asOf`.
export const DATA_STATS = {
  quotedRates: "2,190,000+",
  tenderResults: "69,000+",
  asOf: "11 Oct 2026",
} as const;

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
