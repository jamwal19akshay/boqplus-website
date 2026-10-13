// Decides where boq.co.in/app sends a visitor: the link in social bios and
// posts, so one URL works for everyone. Pure function of the query string and
// User-Agent so it can be tested without a server. No cookies, no logging —
// the `from` source travels only to the stores' own campaign reports.
import { appStoreUrl, playStoreUrl } from "./links";

export const DEFAULT_SOURCE = "direct";
const SOURCE_PATTERN = /^[a-z0-9-]{1,20}$/;

// Lower-cased so "IG" and "ig" land in the same campaign row. Anything that
// isn't 1–20 letters, digits or hyphens is dropped rather than repaired, so a
// mangled link can never put arbitrary text into a store URL.
export function parseSource(raw: string | null | undefined): string {
  const source = (raw ?? "").trim().toLowerCase();
  return SOURCE_PATTERN.test(source) ? source : DEFAULT_SOURCE;
}

export type Platform = "ios" | "android" | "other";

// iPadOS 13+ Safari sends a desktop Mac User-Agent by default, so those iPads
// are indistinguishable from Macs server-side and get the home page, whose
// badges reach the App Store in one tap.
export function detectPlatform(userAgent: string | null | undefined): Platform {
  const ua = userAgent ?? "";
  if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
  if (/Android/i.test(ua)) return "android";
  return "other";
}

// Returns an absolute store URL, or "/" for the home page.
export function appRedirectTarget(
  rawSource: string | null | undefined,
  userAgent: string | null | undefined,
): string {
  const source = parseSource(rawSource);
  switch (detectPlatform(userAgent)) {
    case "ios":
      // App Store Connect caps `ct` at 30 characters; source is at most 20.
      return appStoreUrl(source);
    case "android":
      return playStoreUrl(source, "bio", "social");
    default:
      return "/";
  }
}
