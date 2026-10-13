import { test } from "node:test";
import assert from "node:assert/strict";
import { appRedirectTarget, detectPlatform, parseSource } from "./appRedirect";

const IPHONE =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1";
const IPAD =
  "Mozilla/5.0 (iPad; CPU OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1";
const INSTAGRAM_IOS =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 340.0.0.22.109";
const ANDROID =
  "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Mobile Safari/537.36";
const INSTAGRAM_ANDROID =
  "Mozilla/5.0 (Linux; Android 13; RMX3381 Build/TP1A.220905.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/129.0.6668.81 Mobile Safari/537.36 Instagram 340.0.0.22.109 Android";
const MAC =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15";
const WINDOWS =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36";

test("source: valid values pass through, lower-cased", () => {
  assert.equal(parseSource("instagram"), "instagram");
  assert.equal(parseSource("IG-Reel-01"), "ig-reel-01");
  assert.equal(parseSource("a".repeat(20)), "a".repeat(20));
});

test("source: missing or invalid falls back to direct", () => {
  for (const raw of [null, undefined, "", "   ", "a".repeat(21), "ig_reel", "ig reel", "x&ct=evil", "<script>", "ig%20x", "इंस्टा"]) {
    assert.equal(parseSource(raw), "direct", `input ${JSON.stringify(raw)}`);
  }
});

test("platform detection", () => {
  assert.equal(detectPlatform(IPHONE), "ios");
  assert.equal(detectPlatform(IPAD), "ios");
  assert.equal(detectPlatform(INSTAGRAM_IOS), "ios");
  assert.equal(detectPlatform(ANDROID), "android");
  assert.equal(detectPlatform(INSTAGRAM_ANDROID), "android");
  assert.equal(detectPlatform(MAC), "other");
  assert.equal(detectPlatform(WINDOWS), "other");
  assert.equal(detectPlatform(""), "other");
  assert.equal(detectPlatform(null), "other");
});

test("iPhone and iPad go to the App Store campaign link", () => {
  const expected =
    "https://apps.apple.com/app/apple-store/id6760415552?pt=128575647&ct=instagram&mt=8";
  assert.equal(appRedirectTarget("instagram", IPHONE), expected);
  assert.equal(appRedirectTarget("instagram", IPAD), expected);
  assert.equal(
    appRedirectTarget(null, IPHONE),
    "https://apps.apple.com/app/apple-store/id6760415552?pt=128575647&ct=direct&mt=8",
  );
});

test("App Store ct never exceeds 30 characters", () => {
  const url = new URL(appRedirectTarget("z".repeat(20), IPHONE));
  assert.ok(url.searchParams.get("ct")!.length <= 30);
  const tooLong = new URL(appRedirectTarget("z".repeat(40), IPHONE));
  assert.equal(tooLong.searchParams.get("ct"), "direct");
});

test("Android goes to Play with a social/bio referrer", () => {
  const url = new URL(appRedirectTarget("youtube", ANDROID));
  assert.equal(url.origin + url.pathname, "https://play.google.com/store/apps/details");
  assert.equal(url.searchParams.get("id"), "com.verkzo.boq");
  assert.equal(
    url.searchParams.get("referrer"),
    "utm_source=youtube&utm_medium=social&utm_campaign=bio",
  );
  assert.equal(
    new URL(appRedirectTarget(undefined, INSTAGRAM_ANDROID)).searchParams.get("referrer"),
    "utm_source=direct&utm_medium=social&utm_campaign=bio",
  );
});

test("everything else goes to the home page", () => {
  assert.equal(appRedirectTarget("instagram", MAC), "/");
  assert.equal(appRedirectTarget("instagram", WINDOWS), "/");
  assert.equal(appRedirectTarget(null, null), "/");
});
