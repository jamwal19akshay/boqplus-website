import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { DATA_STATS } from "@/lib/stats";

// Share card for links to boq.co.in (WhatsApp, X, LinkedIn…). Rendered once at
// build time into a static PNG; app colours and IBM Plex Sans only. The font
// file is the official Google Fonts TTF (SIL OFL), kept in app/fonts because
// ImageResponse can't read the woff2 that next/font serves.
export const runtime = "nodejs";
export const alt = "BOQ+ — Price any tender BOQ in minutes.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const plex = await readFile(
    join(process.cwd(), "app/fonts/IBMPlexSans-SemiBold.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#070D18",
          backgroundImage:
            "linear-gradient(#24324B8C 1px, transparent 1px), linear-gradient(90deg, #24324B8C 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          fontFamily: "Plex",
          color: "#FFFFFF",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "#24324B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", width: 12, height: 40, background: "#F2A900" }} />
            <div style={{ position: "absolute", width: 40, height: 12, background: "#F2A900" }} />
          </div>
          <div style={{ fontSize: 44, letterSpacing: -0.5 }}>BOQ+</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, letterSpacing: -1.5, maxWidth: 900 }}>
            Price any tender BOQ in minutes.
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.35, color: "#AEBBD0", maxWidth: 900 }}>
            Real rates and winning bid ranges from government tender results. In
            your pocket.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "#AEBBD0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 14, height: 14, background: "#F2A900" }} />
            {`${DATA_STATS.quotedRates} quoted rates analysed · as of ${DATA_STATS.asOf}`}
          </div>
          <div style={{ color: "#FFC233" }}>boq.co.in</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Plex", data: plex, weight: 600, style: "normal" }],
    },
  );
}
