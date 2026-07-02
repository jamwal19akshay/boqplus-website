import type { Metadata } from "next";
import { Oswald, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "BOQ+ — Government Tender & BOQ App India",
  description:
    "India's only mobile app to find government tenders AND fill BOQ on your phone. Works with all 46 GePNIC portals. 2 free BOQs, no card required.",
  keywords: [
    "government tender",
    "BOQ",
    "GePNIC",
    "eTender",
    "contractor",
    "CPWD",
    "PWD",
    "JPDCL",
    "mobile app India",
  ],
  openGraph: {
    title: "BOQ+ — Find. Fill. Finish.",
    description:
      "India's only mobile app to find government tenders AND fill BOQ on your phone. Works with all 46 GePNIC portals. 2 free BOQs, no card required.",
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
    <html lang="en">
      <body
        className={`${oswald.variable} ${hanken.variable} ${plexMono.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
