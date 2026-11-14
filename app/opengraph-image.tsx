import { OG_SIZE, ogCard } from "@/lib/og";

// Default share card for every page that has no card of its own.
export const runtime = "nodejs";
export const alt = "BOQ+ — Tender apps list tenders. BOQ+ prices the BOQ.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    kicker: "GOVT. TENDER OPERATING SYSTEM",
    title: "Tender apps list tenders. BOQ+ prices the BOQ.",
  });
}
