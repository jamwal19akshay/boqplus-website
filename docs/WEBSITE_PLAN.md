# BOQ+ home page redesign: plan

Status: **approved 2026-10-13**, with the answers below. Build waits until `session-b/privacy-support` is merged to `main` and the founder confirms. Scope: `/` plus the legal-page shell. Production deploys only on "go live".

## Approved answers (these override anything below)

| # | Decision |
|---|---|
| B1 | **Free tier, everywhere: 3 BOQ previews + 3 exports, plus calculators, SSR rate books and tender alerts.** The site targets app build 3.0.0. No old-tier copy and no switch. `lib/pricing.ts`, the home page, `/faq`, terms and refund all say this. |
| B2 | Big number: **"2,190,000+ quoted rates analysed"**, tagged "as of 11 Oct 2026". Secondary line: **"from 69,000+ government tender results"**. |
| B3 | No "tenders added today". Numbers are fixed with an "as of" date and refreshed using the steps in §2. The public stats endpoint comes later. |
| B4 | No Hindi. The extras grid uses Material prices and Track record. |
| B6 | App Store: `https://apps.apple.com/app/apple-store/id6760415552?pt=128575647&ct=website-home&mt=8`. The provider ID was read from App Store Connect → Analytics → Campaigns → Generate a Campaign Link on 2026-10-13. |
| B7 | Play badge links to the live listing now (open testing is open to anyone): `https://play.google.com/store/apps/details?id=com.verkzo.boq&referrer=utm_source%3Dwebsite%26utm_medium%3Dorganic%26utm_campaign%3Dhome`, with `PLAY_STORE_LIVE = true`. |
| B8 | "Best value" stays on Annual. |
| §9 | Legal pages get the new header, footer and colours. Legal text is unchanged. |
| Branch | Branch from `main` only after the privacy branch is merged. |

---

## 0. What I found, and decisions you need to make

These came out of reading the site, the backend (`boqplus-android-backend`), both app repos and the live store listings. Each blocks part of the brief.

| # | Brief says | What's actually true | My recommendation |
|---|---|---|---|
| **B1** | Free: "3 BOQ previews + 3 exports, calculators, SSR, tender alerts" | The live iOS paywall (`PaywallFlowCopy.swift:245-251`) and the backend (`config.py: free_parses_per_month = 2`, 30-day window) give **2 BOQs in the first 30 days, 1 BidIQ preview, all 20 calculators, tender alerts, track record**. I found no free-export allowance; export requires activating the BOQ. `lib/pricing.ts` says `freeBoqs: 2`. | If the app is about to change to 3 + 3, tell me the release date and I'll ship the page with whatever is live on that date. **Until then the free card states what the app does today: "2 free BOQs in your first 30 days".** All copy reads from `lib/pricing.ts`, so the change is one line. |
| **B2** | "2,190,000+ real bids analysed" | The real figure is **2,194,581 `rate_observations`**: item-level quoted rates from **69,351 tender results** (`DATA_INVENTORY.md`, measured 2026-10-11 against production). These are line-item rates, not whole bids. Calling them "bids" overstates the number about 30× (there are roughly 69k tenders × about 3.5 bidders). | Giant number: **"2,190,000+ quoted rates analysed"**, sub-line "from 69,351 government tender results · as of 11 Oct 2026". |
| **B3** | "X tenders added today" | **No public stats endpoint exists.** `/v1/intelligence/summary` requires login. Tender listings are scraped daily by cron, but a per-day "added today" count has never been measured. A static "today" number would be false by tomorrow. | Phase 3 ships **static, verified values with an "as of" date** in `lib/stats.ts`, plus the secondary line "556,901 tender listings tracked across 46 portals". Optional follow-up (needs your OK, separate backend repo): add a cached, no-auth `GET /v1/public/stats` returning `{rate_observations, tender_results, listings_total, listings_added_24h, as_of}`. The site reads it at build time with daily ISR (`revalidate: 86400`), which is server-side only, so no tracking. Only then does "X tenders added today" appear. |
| **B4** | Extras grid includes **Hindi** | No Hindi localisation exists in either app (no `hi.lproj` in app code, no `values-hi`). | **Drop Hindi** from the grid. Re-add when it ships. |
| **B5** | Extras: "PDF and Excel export" | Confirmed: "Activate this BOQ to export or share PDF and Excel files" (`BoqTableView.swift:1360`). It is a paid feature. | Keep it, but don't list it under Free. |
| **B6** | App Store link with `pt` / `ct` tokens | `pt` is your **App Store Connect provider ID**, which isn't in any repo. | Send me the provider ID (App Store Connect → App Analytics → Campaigns → "Generate a campaign link" shows it). Until then: `ct=website-home` without `pt`. Apple ignores `ct` without `pt`, but the link still works. |
| **B7** | Play badge, "if listing not public yet" | **The Play listing is public now**: `play.google.com/store/apps/details?id=com.verkzo.boq` returns 200, titled "BOQ+ — Fill Your Tender BOQ On Your Phone". `lib/links.ts` still has `PLAY_STORE_LIVE = false` and the site shows "Coming soon". | Flip it live in this build, with the referrer: `…?id=com.verkzo.boq&referrer=utm_source%3Dwebsite%26utm_medium%3Dorganic%26utm_campaign%3Dhome`. Please confirm the listing is in production for all users and not open testing only. |
| B8 | Pricing card "Best value" | `DECISIONS.md` (v2 brief) bans "Most Popular" badges. "Best value" is a factual claim: lowest per-month price. It is not a popularity claim. | Use **"Best value"** as you asked; still no "Most popular". |
| B9 | "Save 50% vs quarterly in year one" | ₹3,999 × 4 = ₹15,996; ₹7,999 is 49.99% of that. True. From year two it's ₹11,999, which is 25% less. | Use the line. The card also states "then ₹11,999/year" so the renewal price isn't hidden. |
| B10 | Hero labels "30+ states" | `portals.py` lists 31 state/UT portals plus central/PSU portals. | Label it **"30+ states & UTs"** so it stays accurate. |

Smaller notes:
- **Branch base.** `main` doesn't include `95cd28b` (truthful privacy policy, on `session-b/privacy-support`). I'll branch from `main` as asked. If that branch should merge first, tell me; otherwise the redesign won't contain the new privacy copy until it does.
- **No tracking.** The site has no third-party scripts today (checked `layout.tsx`, `package.json`). It stays that way: no analytics, no Google Fonts CDN at runtime (`next/font` self-hosts IBM Plex), and store badges served from `/public`.
- **Screenshots.** The 10 new iPhone captures (1320×2868) show real public tender names, which are published data. `IMG_4816` shows "1 credit" and the user's BOQ list. That's fine, but I'll crop to the list.

---

## 1. Design system (applies to every section)

- **Colours: app palette only.** Tokens go in `tailwind.config.ts` and `:root`, replacing the dossier ink/paper palette for the home page:
  - navy-950 `#070D18`, navy-900 `#131F33`, navy-800 `#24324B`, navy-700 `#2E3D57`
  - amber `#F2A900`, amber-light `#FFC233`, amber-dark `#8A5A00`
  - slate-600 `#4E5D78`, slate-500 `#5B6B87`, slate-300 `#AEBBD0`, slate-200 `#C3CFE0`
  - mist `#DCE3EC`, cloud `#E6ECF4`, white `#FFFFFF`
- **Contrast checks** (WCAG AA, body text ≥4.5:1):
  - `#AEBBD0` on `#070D18` = 10.0:1 ✓. `#5B6B87` on `#070D18` = 3.6:1 ✗, so it is used only for large text or hairlines on dark backgrounds.
  - `#4E5D78` on `#FFFFFF` = 6.6:1 ✓ (body text on light sections).
  - Navy `#131F33` on amber `#F2A900` = 8.2:1 ✓ (final banner). White on amber (2.0:1) fails, so it is never used.
- **Type:** IBM Plex Sans only (400/500/600/700) via `next/font`, self-hosted. Archivo Black and Plex Mono are dropped from the home page. Plex Mono stays loaded only if the legal pages still need it (see §9).
- **Rhythm:** dark hero → light features (`#E6ECF4`/white) → dark extras band → light pricing → light FAQ → amber banner → navy footer. Section padding is 72px on mobile and 120px on desktop. The container is 1200px max with a 16px gutter on mobile.
- **Header (new, home only):** sticky, transparent over the hero, turning navy-950 on scroll. It has the logo, the anchors Features · Pricing · FAQ, and a compact "Download" button that scrolls to the store badges. On mobile it shows the logo and "Download" only, with no hamburger.

---

## 2. Hero: Dovetail layout + Browserbase big number

**References** (layout only):
- Dovetail "Real-time customer intelligence" hero: dark field, perspective grid, big headline. https://mobbin.com/sites/sections/2a5e8d2d-b16a-4f4d-9523-6a8b1f673dc9
- Dovetail "The single source of truth": left-aligned headline with the visual to the right. https://mobbin.com/sites/sections/f6f45707-2212-4157-9c1b-f597e9b8ab57
- Browserbase giant counter: one huge tabular number with a small label and an "as of" tag above it. https://mobbin.com/sites/sections/109e6297-d973-4b59-a1d2-3861ec60acd0

**Layout**
- Desktop: two columns (55/45). Left: headline, sub-line, badges. Right: the phone, with callout labels.
- Mobile: headline → sub → badges → phone. The labels become a single wrapped row of chips under the phone, because connector lines don't work at 390px.
- Background: navy-950, with a faint 48px grid drawn by a CSS `linear-gradient` in navy-800 at about 40% opacity and masked to fade at the edges. A soft amber radial glow (`#F2A900` at about 18% opacity, blurred) sits behind the phone. Both are pure CSS, with no images.

**Copy**
- H1 (white, 56/64 desktop, 40/44 mobile, 600): **Price any tender BOQ in minutes.**
- Sub (slate-300): **Real rates and winning bid ranges from government tender results. In your pocket.**
- Badges: official App Store (black, Apple artwork, unmodified) and Google Play (official PNG/SVG, unmodified). They are equal height (40px Apple / matching Play visual height) with the clear space required by each brand guideline. No "coming soon" chip once B7 is confirmed.

**Phone animation**
- **Frame:** a CSS-drawn rounded rectangle with no photographic bezel; DECISIONS bans device bezels. Inside it the screen is built from **real app UI**:
  - The top bar ("Installation of Tiranaga Pole…", "17 items · Percentage Tender") is a cropped strip of `IMG_4817` as a WebP.
  - The rows are HTML that copies the app's table styling, using the **real descriptions, quantities and rates from `IMG_4817`/`IMG_4818`**.
  - Recreating the rows in HTML is what allows them to "fill". It also keeps LCP light: a few kilobytes of HTML instead of an 800 KB PNG.
- **Sequence (about 6s, then holds):**
  1. Rows start with empty Rate and Amount cells.
  2. Each rate types in, a monospaced-digit tick of about 250ms per row. The amount computes, and a small green "SSR" or amber "Market" dot appears, as the app shows.
  3. When the rows are done, the bottom bar's total counts up.
  4. Then the chip "Bid %: 11% Above" (from `IMG_4818`) slides in and the number settles from about 14% to 11% with an ease-out.
- **Implementation:** CSS keyframes with staggered `animation-delay`. A tiny vanilla effect starts it via IntersectionObserver. No framer-motion on this page, so it's removed from the home bundle.
- **`prefers-reduced-motion: reduce`:** the finished state is shown immediately, with no motion.
- **Caption** (DECISIONS requires it): small slate text under the phone, "Recreated from the BOQ+ app. Sample BOQ."

**Callout labels:** four slate-300 text labels at 13px, each joined to the phone edge by a 1px navy-700 line ending in a 4px amber dot. The labels are:
1. Tender results
2. CPWD DSR
3. State SSR books
4. 30+ states & UTs

They are text only, with no emblems or logos. The lines are SVG and `aria-hidden`, and the labels are a real `<ul>` so screen readers get the list.

**Big number band** (full width, below hero, still navy-950, separated by a hairline):
- Overline tag, Browserbase-style: `QUOTED RATES ANALYSED · as of 11 Oct 2026`.
- Number: **2,190,000+** at 96–160px responsive (`clamp`), Plex Sans 600 with `font-variant-numeric: tabular-nums`, white. It counts up once on view; with reduced motion it renders the final value.
- Sub-line: "from 69,351 government tender results" · "556,901 tender listings tracked across 46 portals".
- "X tenders added today" appears **only after** the B3 endpoint exists.
- All values come from `lib/stats.ts`, which has a `source` and an `asOf` comment.

**How to keep the numbers updated (until there's an endpoint):** run the two `SELECT count(*)` queries in `DATA_INVENTORY.md` (rate_observations; tenders) against production. Then edit `lib/stats.ts` (`rateObservations`, `tenderResults`, `listingsTracked`, `asOf`) and push. Monthly is enough; the comparative batch has no scheduled refresh, so that number changes rarely.

---

## 3. Features: Airtable alternating rows (chosen over incident.io tabs)

**Reference:** Airtable alternating text/screenshot rows. https://mobbin.com/sites/sections/05d38a43-8d65-4adc-a735-e626369ecdf4 · incident.io was considered: https://mobbin.com/sites/sections/8a72379c-6480-499b-946d-cdb21b9bc862

**Why alternating rows:**
- All four features stay visible without any interaction, which reads better for contractors scrolling on a phone.
- It needs zero JS.
- It stacks naturally on mobile. Tabs hide three of the four features behind taps and need client JS.

**Layout:**
- Light background (`#E6ECF4`).
- Each row has text on one side and a phone-sized screenshot (about 300px wide, rounded 28px, soft shadow, no bezel) on the other, swapping sides each row.
- Mobile: text first, then the image.
- Each row has an amber 2px overline with a small label.

| # | Label | Heading | Body (claims verified in code) | Screenshot |
|---|---|---|---|---|
| 1 | AUTOFILL | Fill rates from real rate books | Pick CPWD DSR, MES SSR or your state's SOR and BOQ+ matches each item and fills the rate. Market rates from tender results fill the rest. Check every line, change any rate. *(`runAutoFill`, `SsrMatchEngine`)* | `IMG_4817` (filled BOQ table) |
| 2 | BIDIQ | See what other contractors bid | BidIQ reads the published tender results for work like yours: who bid, who won, and at what percentage. Then it shows where your price sits. | `IMG_4819` (BidIQ) + `IMG_4818` chip crop |
| 3 | MARKET RATES | Know the going rate before you quote | Filter by portal, department and work type across 69,351 tender results, and generate a market report. | `IMG_4820` (Market, shows "69,351 tender results available") |
| 4 | TENDERS | New tenders every day, with alerts | Tenders from GePNIC and CPPP portals, refreshed daily. Filter by Civil, Electrical, Roads and Plumbing, and get alerts for the work you do. | `IMG_4824` (Tenders) |

Captions follow DECISIONS: "Real app screen" for each, plus "sample BOQ" where rates are shown.

---

## 4. Extras: PamPam-style icon grid

**Reference:** I couldn't find PamPam's feature-grid section on Mobbin; it only returned their heroes. The closest match to the "icon + short label, generous grid" pattern is Teak's "No limits on" grid (https://mobbin.com/sites/sections/f63fc609-d425-4ec5-8d59-3baec25c5387) and Fibery's labelled icon grid (https://mobbin.com/sites/sections/3f148051-6eff-401c-bc33-113cc1d2e964). If you have a specific PamPam URL, send it and I'll match it.

**Layout:**
- Navy-900 band. A 3×2 grid on desktop and 2-column on mobile.
- Each cell has a 40px navy-800 rounded square with an amber line icon (inline SVG, drawn in-house, no icon font), a white label and a slate-300 one-liner.
- A heading sits above: **"Everything else on site"**.

| Icon | Label | One-liner |
|---|---|---|
| calculator | 20 site calculators | Concrete, steel, bricks, plaster, excavation and more, to IS codes |
| book | SSR / SOR rate books | CPWD DSR, MES SSR, J&K, HP and other state books, plus upload your own |
| file-out | PDF and Excel export | Send the priced BOQ back in the format the portal wants |
| bell | Tender alerts | Get notified about new tenders in your work type |
| tag | Material prices | City-wise cement, steel, sand and more |
| chart | Track record | Your firm's wins, losses and margins, private to you |

Hindi is removed (B4). I added Material prices and Track record because both are real app screens (`IMG_4823`, `IMG_4819`), and six makes an even grid.

---

## 5. Pricing: Contractbook layout + Current's free card

**References:**
- Contractbook three-up cards with a highlighted centre card and a "Best value" top bar: https://mobbin.com/sites/sections/ada173b2-f82d-4e03-b2d8-930efa11df9b
- I couldn't find Current's pricing on Mobbin. Its feature section is https://mobbin.com/sites/sections/518be497-b46d-4e97-8954-34a1fdf1e592. For the "free card" treatment I'll follow the plain, outlined, list-led free card style seen in Hashnode (https://mobbin.com/sites/sections/08702542-b3a9-4ed2-acf4-469ed0f60bba). Send a Current link if you have one in mind.

**Layout:**
- Background is white. Heading: **"Simple pricing. Pay in the app."**
- Desktop has three cards in a row; mobile stacks them as Annual, Free, Quarterly so the best value shows first. Annual is the centre card on desktop.

| Card | Content |
|---|---|
| **Free** (outlined, white) | ₹0 · {B1 value} · 1 BidIQ preview · All 20 calculators · SSR rate books · Tender alerts → **Download BOQ+** (secondary) |
| **Annual** (navy-900 card, amber top bar "Best value") | **₹7,999** first year · then ₹11,999/year · "Save 50% vs quarterly in year one" · Unlimited BOQs · BidIQ · Market intelligence · PDF + Excel export → **Download BOQ+** (amber primary) |
| **Quarterly** (outlined) | **₹3,999** / 3 months · same features as Annual → **Download BOQ+** |

- Below the cards is a slim mist strip: **"₹999 for 5 BOQs, for one-off bids."** · "Credits valid 12 months." The expiry disclosure is required by DECISIONS.
- Fine print: "Prices include applicable taxes. All purchases happen in the app through the App Store or Google Play. Subscriptions renew automatically; cancel any time in your store settings."
- **Buttons:** "Download BOQ+" goes to `#download` (the store badges near the banner). With one destination, there is no platform sniffing JS, and no web checkout.
- All numbers come from `lib/pricing.ts`, which also feeds terms, refund and faq, so they stay in sync.

---

## 6. FAQ

Reuse `app/faq/page.tsx` content. I'll extract the items into `lib/faq.ts` so `/faq` and the home page share one source.
- **Home:** the eight most useful questions in a native `<details>` accordion (no JS), plus a "See all questions →" link to `/faq`.
- **Updates:**
  - The free-tier answer (Q9) gets the B1 value.
  - Prices (Q7, Q8) already match `lib/pricing.ts`.
  - New Q: **"Is BOQ+ on Android?"** Yes, with the Play link (after B7).
- `FAQPage` JSON-LD goes in the page for search results. It is server-rendered and not a tracker.

---

## 7. Final banner: Ditto layout

**Reference:** I couldn't find Ditto's pre-footer CTA on Mobbin; it only returned their hero, which has the bold, flat, saturated-colour feel. The structure (full-bleed solid colour strip, one large line, CTA) follows The Leap's pre-footer: https://mobbin.com/sites/sections/5a5e734d-0b06-4545-8131-5e421c4560be. The Ditto hero I referenced: https://mobbin.com/sites/sections/bf26ae12-cb95-4eb2-86ae-ec15eb27953f

**Layout:**
- `id="download"`. Full-width amber `#F2A900` strip with 96px vertical padding.
- Navy-950 headline **"Price your next tender with BOQ+"** (48/56 desktop, 32 mobile, 600), with both store badges below. Black Apple badge and Play badge both pass guidelines on amber.

---

## 8. Footer

- Navy-950. Logo, plus "Made in India for the people who build India." (existing line).
- Links: Privacy · Terms · Refund · Delete account · Support · FAQ.
- `akshay@boq.co.in` as a `mailto:`.
- **"© 2026 Akshay Jamwal"** (static year as you specified).
- This replaces `SiteFooter`, which **is shared with seven legal pages**. See §9.

---

## 9. Routes, redirects and shared parts (nothing breaks)

- The redirects in `next.config.mjs` stay **untouched**:
  - `/privacy.html`, `/terms.html`, `/refund.html`, `/delete-account.html`, `/support.html` go to their clean URLs.
  - `/contact` and `/contact.html` go to `/support`.
  - The headers for the AASA and `.xls` samples stay.
- `public/.well-known/*` is untouched. No pages are added under `/tender/*`, `/boq/*` or `/upgrade`, which are deep-link paths.
- `/privacy`, `/terms`, `/refund`, `/delete-account`, `/support`, `/faq` and `/test-files` keep their URLs and **legal copy is unchanged** (DECISIONS rule).
- **Recommendation (needs your yes or no):**
  - Give the legal pages the new header and footer and the light palette (white page, navy text, Plex Sans) so the site looks like one product.
  - Only the shell and typography change. No words change.
  - The old dossier CSS (about 1,800 lines in `globals.css`) and the eleven dossier components are then deleted.
  - If you'd rather not touch legal pages yet, they keep the old shell and I scope the new CSS under a `.home` root so the two can't collide.
- Test plan: a script curls every route and redirect on the preview and asserts the status and `Location` (200s and 308s).

---

## 10. Assets

| Asset | Source | Treatment |
|---|---|---|
| Hero top-bar strip | `IMG_4817` | Crop, WebP, about 15 KB |
| Feature screenshots | `IMG_4817`, `4819`, `4820`, `4824` | Resize to 600w and 1200w, WebP/AVIF via `next/image`, lazy-loaded below the fold. Each about 40–90 KB. |
| Extras icons | In-house inline SVG | 6 icons, about 300 B each |
| Store badges | Apple official SVG (existing); Google Play official badge | Use the official SVG for Play if available (the current PNG is 646×250 with padding). Both unmodified. |
| Logo | `public/brand/*.svg` (existing) | Unchanged |
| OG image | New, 1200×630, navy with the headline | Static PNG. This also closes an open TODO. |

Copies of the iPhone screenshots go into `public/screens/ios/`. I'll leave the old `screens/android`/`screens/app` PNGs alone until the cleanup commit.

---

## 11. Performance and accessibility targets

- Lighthouse mobile **≥90 performance**, with 100 for accessibility and best practices.
  - The hero is server-rendered HTML/CSS with no hero image in the LCP path. The LCP element is the H1.
  - `framer-motion` is removed from the home page.
  - The JS is limited to the IntersectionObserver for the animation/counter and header scroll state, under about 3 KB.
  - Below-the-fold images are lazy, with `sizes` set.
- Semantic landmarks, one H1, visible focus rings in amber, 44px tap targets, and `<details>` FAQ.
- Badge links carry `aria-label`s: "Download on the App Store" and "Get it on Google Play".
- Reduced motion is respected everywhere.
- I'll run Lighthouse (mobile preset) on the preview URL and report the scores.

---

## 12. Build plan (Phase 3, after approval)

1. Create the branch `redesign/home-v3` from `main`.
2. Write the foundation myself: tokens, fonts, layout, new Header/Footer, `lib/stats.ts`, `lib/links.ts` (campaign URLs, Play live), `lib/faq.ts`, and screenshot processing.
3. Run parallel subagents, each in an isolated worktree:
   - (a) Hero + phone animation + big number
   - (b) Features rows
   - (c) Extras grid + Pricing
   - (d) FAQ + Banner + legal-shell restyle
4. I review each diff against this plan and the brand rules, merge, then build, lint, check routes, and run Lighthouse.
5. Push the branch to get a Vercel **preview** URL (not production). Capture 390px and 1440px screenshots and send the founder summary.
6. Production happens only when you say "go live", by merging to `main`, which auto-deploys.

## 13. What I need from you to start

1. **B1:** confirm the free-tier wording (today's "2 free BOQs in 30 days", or the date "3 previews + 3 exports" ships).
2. **B2:** OK to label the big number "quoted rates analysed" instead of "bids"?
3. **B3:** static numbers now, and do you want the `/v1/public/stats` endpoint added to the backend for "added today"?
4. **B6:** your App Store Connect provider ID (`pt`).
5. **B7:** confirm the Play listing is in production.
6. **§9:** restyle legal pages' shell (recommended), or leave them as they are?
7. Branch base: should `session-b/privacy-support` merge to `main` first?
