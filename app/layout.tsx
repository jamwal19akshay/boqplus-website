import type { Metadata } from "next";
import { Archivo_Black, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
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
  title: "BOQ+ — The bid is won before the portal opens",
  description:
    "BOQ+ reads the comparative statements published on GePNIC and state e-procurement portals and shows the winning discount band, item by item, while you price your BOQ on your phone.",
  keywords: [
    "BOQ",
    "government tender",
    "GePNIC",
    "eTender",
    "CPWD DSR",
    "MES SSR",
    "L1",
    "comparative statement",
    "contractor app India",
  ],
  openGraph: {
    title: "BOQ+ — The bid is won before the portal opens",
    description:
      "BOQ+ reads the comparative statements published on GePNIC and state e-procurement portals and shows the winning discount band, item by item, while you price your BOQ on your phone.",
    url: "https://boq.co.in",
    type: "website",
  },
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
      lang="en"
      className={`${archivoBlack.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
