import type { Metadata } from "next";
import LegalShell from "../components/LegalShell";
import { pageMetadata } from "@/lib/seo";
import QaList, { Qa } from "./QaList";

export const metadata: Metadata = pageMetadata({
  title: "BOQ+ Support: Upload a BOQ, Suggested Rates, Subscriptions",
  description:
    "How to upload an Excel or scanned PDF BOQ without sign-in, check Suggested rates, upload comparatives, cancel a subscription, and reach a person.",
  path: "/support",
});

const items: Qa[] = [
  {
    q: "How do I upload a BOQ?",
    a: 'No sign-in is needed. Tap the "+" button on the Home screen, then choose a BOQ file from WhatsApp, email or Files. BOQ+ parses the items, units, and quantities automatically — check the parsed result before you check or edit rates. Your first BOQ opens priced, free.',
  },
  {
    q: "What BOQ file formats are supported?",
    a: "Excel (.xls/.xlsx, from GePNIC, CPPP and state portals) and PDF BOQs, including scanned PDFs. Scanned pages are read for you, so check the parsed result against your original file.",
  },
  {
    q: "My BOQ template isn't supported — what do I do?",
    a: "Email akshay@boq.co.in with the tender reference number and the file. We review unsupported templates within 48 hours. If we can't support your template and a credit was consumed, we re-credit it — see the Refund Policy.",
  },
  {
    q: "What is a Suggested rate?",
    a: "Where BOQ+ is confident, a line gets a rate marked \"Suggested\", built from past tender results. Check it, edit it or accept it; lines without a confident rate are left for you to fill, and Auto-fill can fill the empty lines. For percentage tenders you see the typical winning percentage range, labelled \"Rough range\" when history is thin. Suggested rates are estimates from past bids, not guarantees; the final rate is always your decision. When you edit a rate on a priced BOQ, amber chips appear above the keyboard: the matching rate from your selected SoR/SSR book and, where past tender results exist, \"Market L1\" — the typical lowest winning rate for similar items, with dots showing how much evidence it rests on. Tap a chip to fill the rate.",
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
      updated="14 NOVEMBER 2026"
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
