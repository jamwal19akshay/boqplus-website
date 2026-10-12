import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Link-preview cards (WhatsApp, LinkedIn, X…) in the site's dossier look:
// paper ground, ink type, Archivo Black headline, mono labels, amber accent.
// Rendered at build time into static PNGs. The fonts are the official Google
// Fonts TTFs (SIL OFL) in app/fonts — ImageResponse can't read next/font's woff2.

export const OG_SIZE = { width: 1200, height: 630 };

const font = (file: string) => readFile(join(process.cwd(), "app/fonts", file));

export async function ogCard({ kicker, title }: { kicker: string; title: string }) {
  const [archivo, mono] = await Promise.all([
    font("ArchivoBlack-Regular.ttf"),
    font("IBMPlexMono-Medium.ttf"),
  ]);
  const size = title.length > 60 ? 64 : title.length > 40 ? 76 : 92;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f2efe6",
          color: "#0b1424",
          padding: "64px 72px",
          borderLeft: "28px solid #f2a900",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "Mono",
            fontSize: 22,
            letterSpacing: 2,
            borderBottom: "2px solid #0b1424",
            paddingBottom: 18,
          }}
        >
          <span>{kicker}</span>
          <span style={{ color: "#c03b30" }}>BOQ.CO.IN</span>
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Archivo",
            fontSize: size,
            lineHeight: 1.02,
            letterSpacing: -1,
            textTransform: "uppercase",
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "#0b1424",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", width: 11, height: 36, background: "#f2a900" }} />
            <div style={{ position: "absolute", width: 36, height: 11, background: "#f2a900" }} />
          </div>
          <span style={{ fontFamily: "Archivo", fontSize: 40 }}>BOQ+</span>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Archivo", data: archivo, weight: 400, style: "normal" },
        { name: "Mono", data: mono, weight: 500, style: "normal" },
      ],
    },
  );
}
