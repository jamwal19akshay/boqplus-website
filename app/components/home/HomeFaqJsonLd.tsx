import type { ReactNode } from "react";
import { FAQS } from "@/lib/faq";

// Flattens a React node tree (strings, arrays, elements) to plain text.
function nodeToText(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeToText).join("");
  if (typeof node === "object" && "props" in node) {
    return nodeToText((node.props as { children?: ReactNode }).children);
  }
  return "";
}

export function faqPlainText(node: ReactNode): string {
  return nodeToText(node).replace(/\s+/g, " ").trim();
}

// Server-rendered structured data for search engines; not a tracker.
export default function HomeFaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.filter((f) => f.home).map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: faqPlainText(f.a) },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
