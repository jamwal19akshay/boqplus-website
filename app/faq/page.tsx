import type { Metadata } from "next";
import LegalShell from "../components/LegalShell";
import { FAQS } from "@/lib/faq";

export const metadata: Metadata = {
  title: "FAQ — BOQ+",
  description:
    "Straight answers for government tender contractors: data safety, portals supported, credits, refunds, and how BOQ+ works.",
};

export default function FaqPage() {
  return (
    <LegalShell
      fileNo="Q-01"
      title="Frequently Asked Questions"
      updated="13 OCTOBER 2026"
      intro={
        <p>
          The questions careful contractors actually ask before trusting an app
          with their bidding — answered plainly.
        </p>
      }
    >
      {FAQS.map((f, i) => (
        <section key={f.q}>
          <h2>
            {String(i + 1).padStart(2, "0")} — {f.q}
          </h2>
          <p>{f.a}</p>
        </section>
      ))}
    </LegalShell>
  );
}
