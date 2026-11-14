// Corpus figures as published in the BOQ+ 3.0.2 store listings, 13 November
// 2026: 2.4 million+ quoted rates from 72,000+ government tender results
// (comparative statements); about 54,000 past tenders with winning (L1)
// percentages; 48 tender portals tracked across about 40 states and UTs.
// A quoted rate is one bidder's rate for one BOQ item, never a "bid".
//
// To refresh, take the numbers from the current store listing (they come from
// read-only counts on the production results database; see
// boqplus-android-backend/docs/DATA_INVENTORY.md), update the values and `asOf`.
export const DATA_STATS = {
  quotedRates: "2.4 million+",
  tenderResults: "72,000+",
  tenderResultsWords: "seventy-two thousand",
  percentageTenders: "about 54,000",
  portals: "48",
  asOf: "13 Nov 2026",
  asOfLong: "13 November 2026",
} as const;

// Headline market figure used on the hero result slip, labelled "JUL 2026".
// Last verified against the production database on 20 July 2026: exact match
// (45,584 distinct comparatives · avg 3.52 bidders · ₹14,277 Cr summed L1
// value · 9.21% median winning below-estimate). See DECISIONS.md.
export const MARKET_CAPTURE = {
  comparatives: "45,584",
  decidedValue: "₹14,277 Cr",
  avgBidders: "3.5",
  medianDiscount: "9.2%",
} as const;
