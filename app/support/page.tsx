import type { Metadata } from "next";
import LegalShell from "../components/LegalShell";
import QaList, { Qa } from "./QaList";

export const metadata: Metadata = {
  title: "Support — BOQ+",
  description: "How-to answers and support contact for BOQ+.",
};

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
    a: "Email support@boq.co.in with the tender reference number and the file. We review unsupported templates within 48 hours. If we can't support your template and a credit was consumed, we re-credit it — see the Refund Policy.",
  },
  {
    q: "How do I use rate suggestions?",
    a: "On the BOQ table screen, subscribers see an amber chip above the keyboard showing the market average and typical L1 rate for that item. Tap the chip to fill the rate automatically.",
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
      updated="19 JULY 2026"
      intro={
        <p>
          How-to answers, and a real inbox behind them. We respond to all support
          emails within 24 hours:{" "}
          <a href="mailto:support@boq.co.in">support@boq.co.in</a>
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
