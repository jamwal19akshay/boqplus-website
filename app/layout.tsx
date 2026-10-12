import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

// Self-hosted by next/font at build time: no request to Google at runtime.
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

const TITLE = "BOQ+ — Price any tender BOQ in minutes";
const DESCRIPTION =
  "Real rates and winning bid ranges from government tender results, in your pocket. Fill your tender BOQ from CPWD DSR and state SSR rate books, see what other contractors bid, and find new tenders daily.";

export const metadata: Metadata = {
  metadataBase: new URL("https://boq.co.in"),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "BOQ",
    "government tender",
    "GePNIC",
    "eTender",
    "CPWD DSR",
    "MES SSR",
    "SOR",
    "L1",
    "comparative statement",
    "contractor app India",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://boq.co.in",
    siteName: "BOQ+",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#070D18",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // The font variable must land on <html>, not <body>: globals.css reads it
    // from body and :root-level rules, and a variable scoped to <body> is not
    // visible to a :root rule.
    <html lang="en" className={plexSans.variable}>
      <body>{children}</body>
    </html>
  );
}
