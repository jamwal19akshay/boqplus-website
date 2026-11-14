import type { Metadata } from "next";
import { Archivo_Black, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://boq.co.in"),
  title: "Tender BOQ Rates App: Upload a BOQ, It Opens Priced | BOQ+",
  description:
    "Upload a tender BOQ, even a scanned PDF, no sign-in. It opens priced with rates from 72,000+ past tender results you check and edit. % tenders: typical winning range.",
  keywords: [
    "tender BOQ rates app",
    "BOQ rate analysis app",
    "percentage tender winning percentage",
    "CPWD DSR rates app",
    "GePNIC BOQ",
    "government tender",
    "eTender",
    "MES SSR",
    "L1",
    "comparative statement",
    "contractor app India",
  ],
  // Per-page title, description, canonical URL and share cards come from
  // pageMetadata() in lib/seo.ts; these are only the fallbacks.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // The font variables must land on <html>, not <body>: globals.css defines
    // --display/--sans/--mono on :root in terms of them, and a variable scoped
    // to <body> is not visible to a :root rule.
    <html
      lang="en-IN"
      className={`${archivoBlack.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
