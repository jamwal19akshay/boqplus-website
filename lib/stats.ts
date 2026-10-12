// Headline data figures for the home page. Static, checked values — there is
// no public stats endpoint yet (see docs/WEBSITE_PLAN.md §2, B3).
//
// Source: boqplus-android-backend/docs/DATA_INVENTORY.md, measured with
// read-only SELECTs against the production database on 11 October 2026:
//   rate_observations   2,194,581  quoted line-item rates from tender results
//   tenders with comparatives  69,351
//
// They are QUOTED RATES (one bidder's rate for one BOQ item), not whole bids —
// never label them "bids".
//
// To refresh (monthly is plenty; the results batch has no scheduled refresh):
//   1. Against production, read-only:
//        select count(*) from rate_observations;
//        select count(distinct tender_ref) from comparative_items;
//   2. Round DOWN to the precision below, update the values and `asOf`, push.
export const DATA_STATS = {
  quotedRates: "2,190,000+",
  tenderResults: "69,000+",
  asOf: "11 Oct 2026",
} as const;
