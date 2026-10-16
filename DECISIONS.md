# Decisions Log

## 2026-10-16 — Terms and Support match the 3.0.0 app (Market overview removed)

Branch `content/remove-market-report`.

**Legal — for lawyer review:**
- **Terms (disclaimer, "information and analysis, not advice or guarantees"): "win probabilities, and competitor profiles" → "winning-bid ranges" — for lawyer review.**
  The sentence now reads: "Rate suggestions, Below % bands and winning-bid ranges are statistical outputs from historical public data." Why: the app no longer shows win probabilities or competitor profiles; the free Market overview (named contractors) is removed in app 3.0.0 builds 53 / 9 (founder decision, 16 Oct). BidIQ shows factual winning-bid ranges on similar tenders.

**Support FAQ ("How do I use rate suggestions?"):** the old answer said subscribers see one amber chip with "the market average and typical L1 rate". The 3.0.0 apps show amber chips above the keyboard while editing a rate on a priced BOQ: the selected SoR/SSR book's rate and "Market L1" (typical lowest winning rate, with evidence dots). No "market average" chip exists. Answer rewritten to match (iOS `BoqTableView.swift` rateSuggestionBar; Android `BoqTableScreen.kt` suggestion bar).

## 2026-10-13 — content release 2: app 3.0.0 free tier, prices, accurate data figures

Branch `content/release-2`, stacked on `content/release-1`. Content only, with no
layout or design changes. It deploys when the founder says "submitting 3.0.0",
just before both store builds are submitted, so App Review sees the website,
Terms, Refund and FAQ matching the new free tier and prices.

**Legal — for lawyer review:**
- **Terms (§03, "Free tier" bullet): free-tier wording updated — for lawyer review.**
- **Refund (§01 "Try before you pay"): free-tier wording updated — for lawyer review.**

Both sentences now read `FREE_TIER_SUMMARY` in `lib/pricing.ts`: 3 BOQ previews
and 3 exports, plus calculators, SSR rate books and tender alerts. Nothing else
in either page changed, including the "last updated" dates.

**Free tier everywhere:** `PRICING.freeBoqs` (2) is replaced by `freeBoqPreviews`
(3) and `freeExports` (3). The hero, dispatch line, machine, tariff and closing
CTAs, and the FAQ, all read from it. No "2 free BOQs" text remains.

**Prices:** unchanged in value (Quarterly ₹3,999; Annual ₹7,999 then ₹11,999;
₹999 for 5 BOQs). Credits are now described as "for one-off bids". "All
purchases happen in the app" is added to the tariff note and the FAQ.

**Data figures:**
- The hero ledger used to show July Market Report figures as "live". It now shows
  counts measured on 11 Oct 2026 (`DATA_STATS` in `lib/stats.ts`): 2,190,000+
  quoted rates analysed and 69,000+ government tender results. Source:
  `boqplus-android-backend/docs/DATA_INVENTORY.md`.
- The record-section headline is now "More than sixty-nine thousand decisions."
  The figures that describe the July Market Report screenshot (−9.2% median, the
  45,584 in its alt text) stay, dated "Jul 2026".
## 2026-10-13 — content release 1: privacy operator, store links, blog, search metadata

Branch `content/release-1`, cut from `main`. The current design is kept: content
and metadata only, plus the minimum markup the blog needs.

- **Privacy:** the operator line now reads "BOQ+ by Verkzo, operated by Akshay
  Pratap Singh Jamwal", in the policy and its meta description.
- **Store links (`lib/links.ts`):**
  - App Store links use `pt=128575647` with a `ct` per placement. Home is `website-home`;
    each article is `blog-<campaign>`.
  - **Apple caps `ct` at 30 characters.** App Store Connect's generator truncates
    anything longer, which is why each article carries a short `campaign` code in
    its frontmatter. The build fails if `blog-<campaign>` is longer than 30.
  - Play links use the `utm_source=website|blog` referrer, with `utm_campaign` set
    to `home` or the article slug. The Play badge is live and "coming soon" is gone.
- **Blog:**
  - Articles are Markdown files in `content/blog/` with frontmatter: title,
    description, date, author, topic, reviewBy, campaign and sources.
  - `lib/markdown.tsx` renders them to React elements, never raw HTML.
  - Pages live at `/blog` and `/blog/<slug>`, built statically and styled with
    the legal-page shell.
  - Each article ends with one call to action, "Price your next BOQ with BOQ+".
  - A visible BLOG link sits in the masthead, and Blog is in the footer, on
    every page.
- **Search:**
  - `pageMetadata()` in `lib/seo.ts` gives every page a unique title and
    description, a canonical URL and OG/Twitter cards.
  - Share images are generated at build time (`lib/og.tsx`, in the dossier style).
  - The sitemap includes `/blog` and published articles. `/test-files` stays
    noindex and out of the sitemap.
  - JSON-LD: Organization (Verkzo, brand BOQ+) and MobileApplication (with
    prices only) on the home page, Article on posts, FAQPage on `/faq`.
  - None of this tracks visitors.
- **Search Console:** the DNS has two google-site-verification TXT records, but
  akshayabbu1@gmail.com has no access to either `sc-domain:boq.co.in` or
  `https://boq.co.in/`. The sitemap is not submitted yet; that needs the owning
  account.

## 2026-09-11 — /test-files: sample BOQs for Play closed testers

**What:** a public, no-login page at `/test-files` (`app/test-files/page.tsx`,
built on `LegalShell`) with three downloadable sample BOQs and the closed-test
checklist. Files live in `public/samples/`; `next.config.mjs` serves
`/samples/*.xls` as `application/vnd.ms-excel` with `Content-Disposition:
attachment` so phones save the file to Downloads instead of previewing it.
The page is `noindex` and deliberately left out of the sitemap — it is a
tester handout, not marketing.

**Files — unmodified copies of public GePNIC tender workbooks** (blank bidder
name, no bidder-entered rates, no personal data; each read by the BOQ+ parser
at confidence 0.97 with zero warnings):

- `sample-item-rate-boq.xls` — JKPTCL tower-foundation protection works,
  Item Rate, 18 items / 3 sections, every rate blank.
- `sample-percentage-tender.xls` — SMC Srinagar road macadamisation,
  Percentage, 7 items; the percentage file already used in device QA.
- `sample-large-item-rate-boq.xls` — JPDCL 250 KVA sub-station + HT/LT,
  Item Rate, 104 items / 8 sections; the primary device-QA BOQ.

Excluded on purpose: the two HOLD-set BOQs (`BOQ_1066791`, `NH44_Road_BOQ`),
every workbook or PDF carrying a filled bidder name or quoted rates, and
macro-hidden / variant templates.

**No PDF sample.** No local PDF was both safe and clean-parsing: the only
unfilled government BOQ PDF found (a Percentage BoQ printed from Excel) parses
with one junk "1 2 3 4 5" row per printed page and loses its percentage type;
the others carry the owner's firm name, author metadata or real quoted rates.
Add a PDF card only once a clean public PDF exists.

## 2026-08-07 — store badges: iOS is live, Android is not

**The iOS app is published.** Verified against Apple's lookup API
(`itunes.apple.com/lookup?id=6760415552`): trackName "BOQ+", seller Akshay
Jamwal, version 2.3.0, first released 2026-04-24. Its `bundleId`
(`com.verkzo.boq`) matches `public/.well-known/apple-app-site-association`,
which is what confirms it is our listing and not a name collision. The Apple
ID **6760415552 is correct**, though it appears nowhere in this repo or its
git history — it was verified externally, not read from a doc.

**The Android app is not published.** The canonical URL for the package named
in `assetlinks.json` —
`play.google.com/store/apps/details?id=com.verkzo.boq` — 404s in both the
default and Indian storefronts.

**Consequence for the site:** the App Store badge is a real, working link
(region-less URL so Apple routes each visitor to their own storefront). The
Google Play badge renders greyed out with a "COMING SOON" chip and points at
`#play-store-coming-soon`. Flipping `PLAY_STORE_LIVE` in `lib/links.ts` and
setting the real URL is the whole change needed when Android ships.

Badge art is the official, unmodified asset from each vendor
(`public/badges/`), not a custom-styled button. The Google badge carries 41px
of built-in clear space in a 646×250 canvas; CSS accounts for that so both
badges render at the same ~46px visible height and align on their real edges.
The "COMING SOON" chip is positioned clear of the badge artwork — obscuring
an official badge breaches both vendors' brand guidelines.

Placement follows the design's own CTA convention: the hero (beneath "UNSEAL
2 FREE BOQs") and the closing sheet's existing store slot, which previously
held the text "LISTINGS COMING SOON" and now reads "ANDROID LISTING COMING
SOON" since that is no longer true of iOS.

## 2026-08-07 — pricing copy corrected, and a candidate redesign on a branch

**Pricing (applies to whichever design ships).** The annual plan was described
everywhere as "₹7,999 — Founding Member, first 100", struck against ₹11,999.
That framing is outdated and was not what is actually offered. The real
structure is **₹7,999 for the first year as an introductory price, open to
everyone and not capped at a number of seats, then ₹11,999 per year from year
two.** Corrected on the landing page, in Terms §3, in the Refund Policy §3,
and in the FAQ (the "what happens after the first 100" question is now "what
does the annual plan cost after the first year"). Quarterly ₹3,999, Credits
₹999 / 5 BOQs / 12-month validity are unchanged.

All figures now come from `lib/pricing.ts` rather than being hard-coded per
page. Six separate copies of the same numbers are what let the old framing
survive in four files after it stopped being true — the constant makes the
next change one edit.

**Redesign candidate.** `codex-design-review` branch carries a "dossier"
redesign adapted from a Codex-generated static mockup
(`codex-boq-experiment/website-test/BOQ-plus-exact-html/`). The mockup was
landing-page only — 121 lines of HTML, no inner pages — so the five legal
pages are new work in the same visual language (folio rail, mono section
labels, hard hairlines, amber accent). Legal *content* is unchanged from the
reviewed drafts apart from the pricing corrections above.

Two honesty fixes were made against the mockup as generated: it labelled a
block of hard-coded tender rows as a "LIVE OPPORTUNITY FEED" with a scan
timestamp and a "● RECEIVING" indicator (now marked as a sample view), and it
carried the outdated "FIRST 100" pricing badge.

**Not merged.** Production is untouched pending review of the preview
deployment.

## 2026-08-01 — sitemap.xml and robots.txt

**What:** Added `app/sitemap.ts` and `app/robots.ts` using Next.js's built-in
App Router metadata routes, so both files are generated by the framework and
served as static prerendered routes (`/sitemap.xml`, `/robots.txt`) rather
than hand-maintained files in `public/`. No `robots.txt` existed previously.

**Contents:** the six live pages — `/`, `/faq`, `/support`, `/privacy`,
`/terms`, `/refund` — with `changeFrequency`/`priority` reflecting how each
actually changes (landing weekly/1.0, FAQ + Support monthly/0.7, the three
legal pages yearly/0.3). `robots.txt` allows all crawlers and points to
`https://boq.co.in/sitemap.xml`.

**`lastModified` is a hard-coded constant (`2026-07-20`), not `new Date()`.**
The Next.js docs' `new Date()` idiom stamps build time, which would tell
crawlers every page changed on every unrelated redeploy. The constant needs a
manual bump when page content actually changes — that's the intended
trade-off, and the reason is commented in `app/sitemap.ts`.

**Base URL** is duplicated as a literal in both files rather than imported
from `metadataBase` in `app/layout.tsx`; if the domain ever moves, all three
places need updating.

**Verified in production** (not just locally): `https://boq.co.in/sitemap.xml`
returns 200 as `content-type: application/xml`, is well-formed per `xmllint`,
and lists all six URLs — each of which was fetched and returns 200.
`https://boq.co.in/robots.txt` returns 200 as `text/plain` with the correct
`Sitemap:` line.

**Found while deploying: this project has no working GitHub → Vercel
auto-deploy.** Pushing `d9a46af` to `main` produced no Vercel build, no
GitHub deployment record, and zero check-runs; `/sitemap.xml` stayed 404
until deployed by hand. Every prior production deploy was a manual CLI push
(the previous one carries `gitDirty: "1"`, i.e. deployed from a working tree,
so production was not guaranteed to match committed `main`). This deploy was
made from a clean `git archive` of `d9a46af` specifically to reconcile
production to committed `main`. **A future "just push the fix" will silently
not ship** — wiring up the Vercel GitHub integration is an open TODO.

## 2026-07-20 — Warm-human design ported into the production Next.js app

**What:** `design-explorations/v3-warm-human-v2.html` (the approved final
direction) was ported into the real app, replacing the v2 navy/amber build.
Not a copy-paste: the design system lives in `tailwind.config.ts` (warm
palette, Fraunces/Source Sans 3/Kalam via `next/font`) and `app/globals.css`
(ported component classes + media queries), and the page is componentized to
match the app's structure:

- `Hero` (desk-scene SVG), `ProblemSection` (diary card + hard-numbers
  strip), `FeatureSections` (five taped-polaroid rows with annotations),
  `FlywheelSection`, `StraightTalk` (anti-hype block), `PricingSection`,
  `ClosingSection` + `StoreBadges`, `Nav`, `Footer`, `StickyCTA` (mobile,
  restyled warm), `Reveal` (client component reproducing the design's
  IntersectionObserver reveal, reduced-motion safe).
- Fraunces is loaded with `axes: ["opsz"]` — without the optical-size axis
  the headlines render measurably wider than the approved design.
- Deleted `SocialProof.tsx` (the Straight-talk block now carries the
  no-testimonials stance) and `FaqTeaser.tsx` (FAQ is linked from the
  footer, per the design). The old `getStats()` fetch was removed;
  `lib/stats.ts` now holds the `MARKET_CAPTURE` constants used by the stats
  strip and the Market-feature copy.

**Legal pages (Privacy / Terms / Refund / FAQ / Support):** visual restyle
only — `LegalShell`, `FaqList`, and the `.legal-prose` styles moved to the
warm palette/typography (Fraunces headings, hand-written "Last updated"
line, warm table and link treatments). Every word of the legal copy is
unchanged; the page content files were not edited.

**Hard-numbers strip re-verified against production (20 July 2026):**
queried the live Railway Postgres behind android-api.boq.co.in, replicating
the backend's own definitions (`_market_aggregate` and
`load_percentage_bids` in `app/api/intelligence.py` /
`services/intelligence_engine.py`):

- comparatives = distinct `tender_ref` in `comparative_items` → **45,584**
- avg bidders = mean distinct real bidders per tender (pseudo "quoted
  rate…" rows excluded) → **3.52**
- decided value = Σ L1 `amount` over real rows → **₹14,277 Cr**
- median winning discount = median winner below-% over percentage
  comparatives (valid range −60…99, lowest-total winner per tender,
  n = 36,833) → **9.21%**

All four match the Market Report capture exactly — no drift, no copy
changes needed. The figures stay hardcoded in lock-step with the screenshot
because the page's provenance claim is "read off the capture".

**Verified before review:** `next build` clean; zero horizontal overflow on
all 6 pages at 1440 and 390 (measured, not eyeballed); every internal link
and hash anchor resolves (nav → sections from any page, footer → legal
pages, legal cross-links, wordmark → home); store badges/CTAs consistent
site-wide (in-page CTAs → `/#get`, store buttons → `lib/links.ts`
placeholders, honest "links go live with launch" note kept).

**Review artifacts:** `screenshots/{landing,privacy,terms,refund,faq,support}-desktop-1440.png`
and `…-mobile-390.png`. Not committed pending review.

## 2026-07-20 — v3 warm-human chosen; refined to production candidate (v2)

**What:** `v3-warm-human.html` was chosen as the direction. Refined it into
`design-explorations/v3-warm-human-v2.html` (original kept for comparison).

**Changes in the refinement:**
- Borrowed v4-brutalist's "What you won't find here" anti-hype block,
  rewritten in v3's warm register as a "Straight talk" section (before
  pricing): no testimonials / no invented numbers / no countdowns / no staged
  mockups, closing with "An app built to read the record straight shouldn't
  bend it on its own website."
- Added a "here's that part, counted:" hard-numbers strip after the empathy
  card — 45,584 comparatives, ₹14,277 Cr covered, 3.5 avg bidders, 9.2%
  median winning discount — all four read off the Market Report capture
  (the one screen captioned "actual app screen"), with that provenance
  stated on the page. Same figures repeated in the Market feature copy.
- Illustration tightening: hero-phone histogram now uses a dashed median
  marker (echoing the real report) instead of a pennant flag; removed dead
  SVG path in the closing art.
- Responsive/production fixes: replaced the tenders row's inline 560px grid
  with a `.feature.wide` class so it collapses on mobile; annotation offsets
  pulled in so nothing clips at 1440; `overflow-x:clip`; width/height attrs
  on all screenshots; meta description. Verified zero horizontal overflow at
  1440px and 390px.

**Honesty rules re-verified after edits:** sample-data captions intact
(rate-fill + BidIQ "sample data shown", Track Record "product mockup, empty
state"), every number on the page traceable to a screenshot, no invented
urgency (founding "first 100" is the real cap), store links still honest
placeholders.

**Review artifacts:** `screenshots/v3-warm-human-v2-desktop-1440.png` and
`screenshots/v3-warm-human-v2-mobile-390.png`.

## 2026-07-20 — Design exploration: 5 alternative landing-page directions

**What:** Built 5 competing single-page static HTML prototypes in
`design-explorations/` (not wired into the Next.js app) to explore genuinely
different aesthetic directions before committing to a final design. The
committed site is treated as a functional foundation — its copy honesty and
information architecture carry over, but each prototype has its own type
system, layout philosophy, headline, and section copy.

**The five directions:**
- `v1-editorial-serif.html` — broadsheet/business-magazine longform;
  Fraunces/Newsreader + IBM Plex Mono, ink-on-warm-paper with oxblood accent,
  drop caps, pull-quotes, screenshots as numbered documentary "plates".
- `v2-technical-mono.html` — precision-instrument/terminal aesthetic;
  JetBrains Mono throughout, dark panel with amber signal color, keyed
  sections (§00–§04), spec tables, registration-tick screenshot frames.
- `v3-warm-human.html` — warm/human/illustration-forward; Fraunces +
  Source Sans 3, warm paper palette, hand-authored inline SVG illustrations
  (desk scene, teacup, tape measure), taped-photo screenshot treatment.
- `v4-brutalist.html` — disciplined structural brutalism; Archivo at extreme
  scale, raw black/white, default-styled tables, screenshots as Exhibits A–F,
  zero JS, no radius/shadow/gradient.
- `v5-dashboard-dense.html` — information-dense intelligence terminal; the
  page reads like the product, with an illustrative L1 comparative-statement
  table and discount-band distribution, every invented figure visibly
  labelled SAMPLE/ILLUSTRATIVE.

**Constants across all five:** same real app screenshots (from
`design-explorations/assets/`, android + ios sets, paywall excluded), same
honesty rules (no fabricated stats/testimonials/urgency; 02 rate-fill and
03 BidIQ captioned sample/demo data; 05 track record captioned product
mockup), same exact pricing figures with the credits 12-month expiry
disclosed, `#` store-link placeholders. Each wrote its own hero headline —
none reuse "Know your Below % before you bid" verbatim.

**Review artifacts:** full-page 1440px captures in
`design-explorations/screenshots/v1…v5.png`. No direction has been chosen;
nothing in the committed site was changed.

## 2026-07-19 — Full marketing site rebuild (v2)

**What:** Rebuilt the entire site: landing page + Privacy Policy + Refund
Policy + Terms of Service + FAQ + Support, replacing the v1
"Find·Fill·Finish editorial" build.

**Brand system:** Navy scale (`#070D18 → #F2F5F9`) with amber `#F2A900` as
the only accent, per `boqplus-android-backend/docs/WEBSITE_DESIGN_DECISION.md`.
Typography per the brief for this build: IBM Plex Sans (body), IBM Plex Mono
(all numbers/microlabels, tabular figures site-wide), Playfair Display for
display headlines only. Note: the design doc's spec section names
Inter/Noto Devanagari — the brief's IBM Plex + Playfair system was followed
deliberately as the more recent decision.

**Hero:** "Know your Below % before you bid." (established direction), with a
GePNIC-style L1/L2 financial-evaluation table as the recognition moment
(borrowed from direction D's cold open in the design doc) and the real
Market Report screenshot (winning-discount histogram) as visual proof.

**Trust rules carried from the design doc:** bare, unretouched app
screenshots with status bars (no device bezels/mockups); no stock or AI
imagery, no humans; flat design, hairline borders, no gradients; no
countdown timers, "Most Popular" badges, or exclamation marks; no fabricated
numbers or testimonials; amber used sparingly (CTAs, markers, one accent).

**Screenshots:** Android set from `~/Desktop/boqplus-website-assets/android/`
copied to `public/screens/android/`. Paywall screenshot (08) deliberately
excluded — pricing is a native designed section. BidIQ and rate-fill screens
are captioned as sample/demo data; Track Record is shown in its honest empty
state and captioned as a product mockup, not a real contractor's data.

**Pricing (native section, must stay in sync with the in-app paywall):**
Annual ₹7,999/yr (struck ₹11,999, "Founding Member — first 100"),
Quarterly ₹3,999, Credits ₹999/5 BOQs with 12-month expiry disclosed in the
section itself, in Refund Policy, and in FAQ. No fake spots-remaining
counter (no live number available — per design doc, real number or nothing).

**Social proof:** `SocialProof.tsx` exists but renders nothing
(`SHOW_TESTIMONIALS = false`) — no real testimonials exist yet, and
fabricating them is explicitly banned. Flip the flag only with real,
permissioned quotes.

**Legal pages:** Written as thorough, India-specific drafts — Privacy under
DPDP Act 2023 (data fiduciary framing, actual data collected incl.
comparative-statement handling, DPB grievance path), Refund under Consumer
Protection Act 2019 / E-Commerce Rules 2020 norms (credits 12-month expiry,
store-mediated refunds, service-failure re-credit), Terms with India
governing law (Jammu jurisdiction), free/credits/subscription structure, and
an explicit no-bid-rigging acceptable-use clause. **Pending lawyer review
before publish.**

**Still TODO before launch:**
- ~~Real App Store URL~~ — done 2026-08-07, see below
- Real Play Store URL in `lib/links.ts` (still `#play-store-coming-soon`)
- Official store badge art (currently flat custom buttons)
- OG share image
- Lawyer review of Privacy / Terms / Refund
- Verify hero stats endpoint numbers against prod before publicising

## 2026-10-15 — Credits never expire (supersedes the 12-month credit expiry above)
Founder: "Credits no longer expire (Apple rule)". App Store guideline 3.1.1 says credits bought by in-app purchase may not expire. Terms, Refund, FAQ and pricing now say credits never expire. The apps and the backend get the same change. Also removed the last "Market Analysis" mentions from the test-files page, because BidIQ is now the single report.
