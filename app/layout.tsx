import type { Metadata } from "next";
import { Fraunces, Source_Sans_3, Kalam } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  style: ["normal", "italic"],
});

const kalam = Kalam({
  subsets: ["latin"],
  variable: "--font-kalam",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://boq.co.in"),
  title: "BOQ+ — The winning number, in your hand",
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
    title: "BOQ+ — The winning number, in your hand",
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
    <html lang="en">
      <body
        className={`${fraunces.variable} ${sourceSans.variable} ${kalam.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
