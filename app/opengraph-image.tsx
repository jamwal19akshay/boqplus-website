import { OG_SIZE, ogCard } from "@/lib/og";

// Default share card for every page that has no card of its own.
export const runtime = "nodejs";
export const alt = "BOQ+ — The bid is won before the portal opens";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    kicker: "GOVT. TENDER OPERATING SYSTEM",
    title: "The bid is won before the portal opens",
  });
}
