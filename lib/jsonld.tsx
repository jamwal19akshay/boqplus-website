import type { ReactNode } from "react";
import { APP_STORE_LISTING, PLAY_STORE_LISTING } from "./links";
import { PRICING } from "./pricing";
import { SITE_URL } from "./seo";

// schema.org structured data, server-rendered as <script type="application/ld+json">.
// Read by search engines only; it is not a tracker and runs nothing.

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // "<" is escaped so no string in the data can close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const organization = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Verkzo",
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo-horizontal.svg`,
  email: "akshay@boq.co.in",
  founder: { "@type": "Person", name: "Akshay Pratap Singh Jamwal" },
  brand: { "@type": "Brand", name: "BOQ+" },
  sameAs: [APP_STORE_LISTING, PLAY_STORE_LISTING],
};

const rupees = (price: string) => price.replace(/[^0-9]/g, "");

// Offers carry prices only — never free-tier limits — so this stays true
// whichever app build is current.
export const mobileApplication = {
  "@type": "MobileApplication",
  name: "BOQ+ Tender BOQ Rates",
  alternateName: "BOQ+",
  url: SITE_URL,
  description:
    "Upload a tender BOQ, even a scanned PDF, with no sign-in. It opens priced with Suggested rates from 72,000+ past government tender results, which you check and edit. Percentage tenders show the typical winning range. Not affiliated with any government entity.",
  operatingSystem: "iOS, Android",
  applicationCategory: "BusinessApplication",
  inLanguage: "en-IN",
  downloadUrl: [APP_STORE_LISTING, PLAY_STORE_LISTING],
  publisher: { "@id": ORGANIZATION_ID },
  offers: [
    {
      "@type": "Offer",
      name: "Free: first BOQ opens priced",
      price: "0",
      priceCurrency: "INR",
    },
    { "@type": "Offer", name: "Quarterly", price: rupees(PRICING.quarterly), priceCurrency: "INR" },
    { "@type": "Offer", name: "Annual (first year)", price: rupees(PRICING.annualIntro), priceCurrency: "INR" },
    {
      "@type": "Offer",
      name: `${PRICING.creditBoqs} BOQ credits`,
      price: rupees(PRICING.credits),
      priceCurrency: "INR",
    },
  ],
};

// Flattens JSX (strings, arrays, elements) to plain text, for FAQ answers.
export function nodeToText(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeToText).join("");
  if (typeof node === "object" && "props" in node) {
    return nodeToText((node.props as { children?: ReactNode }).children);
  }
  return "";
}

export function faqPage(items: { q: string; a: ReactNode }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: nodeToText(f.a).replace(/\s+/g, " ").trim(),
      },
    })),
  };
}

export const WEBSITE_ID = `${SITE_URL}/#website`;

export const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "BOQ+",
  url: SITE_URL,
  inLanguage: "en-IN",
  publisher: { "@id": ORGANIZATION_ID },
};

// Trail from the home page to the current page, e.g. Home › Blog › Article.
// The last crumb is the page itself.
export function breadcrumbList(crumbs: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}
