import type { Metadata } from "next";
import LegalShell from "../components/LegalShell";
import { pageMetadata } from "@/lib/seo";
import QaList, { Qa } from "./QaList";

export const metadata: Metadata = pageMetadata({
  title: "Support — BOQ+",
  description:
    "How-to answers for BOQ+: uploading BOQs, supported file formats, rate suggestions, tender results and cancelling a subscription — and how to reach a person.",
  path: "/support",
});

const items: Qa[] = [
  {
    q: "How do I upload a BOQ?",
    a: 'Tap the "+" button on the Home screen, then choose a BOQ file from your phone\'s storage or downloads. BOQ+ parses the items, units, and quantities automatically — check the parsed result before you start filling rates.',
  },
  {
    q: "What BOQ file formats are supported?",
    a: "Excel (.xls/.xlsx) and PDF BOQs are supported. PDFs must contain selectable text — a scanned image-only PDF cannot be parsed automatically.",
  },
  {
    q: "My BOQ template isn't supported — what do I do?",
    a: "Email akshay@boq.co.in with the tender reference number and the file. We review unsupported templates within 48 hours. If we can't support your template and a credit was consumed, we re-credit it — see the Refund Policy.",
  },
  {
    q: "How do I use rate suggestions?",
    a: "When you edit a rate on a priced BOQ, amber chips appear above the keyboard: the matching rate from your selected SoR/SSR book and, where past tender results exist, \"Market L1\" — the typical lowest winning rate for similar items, with dots showing how much evidence it rests on. Tap a chip to fill the rate.",
  },
  {
    q: "How do I upload a comparative statement?",
    a: 'Open the BidIQ tab and tap "Upload another comparative". Every upload where your firm appears also becomes a win/loss entry in My Track Record.',
  },
  {
    q: "How do I cancel my subscription?",
    a: "From your Play Store or App Store subscription settings — not inside the app. You keep access until the end of the paid period.",
  },
];

export default function SupportPage() {
  return (
    <LegalShell
      fileNo="S-01"
      title="Support"
      updated="13 OCTOBER 2026"
      intro={
        <p>
          How-to answers, and a real inbox behind them. We reply to every support
          email within one working day:{" "}
          <a href="mailto:akshay@boq.co.in">akshay@boq.co.in</a>
        </p>
      }
    >
      <QaList items={items} />
      <p style={{ marginTop: "34px" }}>
        For product questions, see the <a href="/faq">FAQ</a>. For refunds and
        cancellations, see the <a href="/refund">Refund Policy</a>.
      </p>
    </LegalShell>
  );
}
