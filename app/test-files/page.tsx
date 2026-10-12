import type { Metadata } from "next";
import LegalShell from "../components/LegalShell";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Closed Testing — Sample BOQ Files — BOQ+",
    description:
      "Sample BOQ files for BOQ+ closed testers: download one, open BOQ+ and test the workflow.",
    path: "/test-files",
  }),
  // Public so testers can open the link without signing in, but it is a
  // tester handout, not a page we want in search results.
  robots: { index: false, follow: false },
};

// Each file is an unmodified copy of a real, unfilled BOQ workbook published on
// a government e-procurement portal (GePNIC format), chosen because the BOQ+
// parser reads it cleanly. Item counts exclude section headings, matching the
// count the app shows after upload.
const SAMPLES = [
  {
    title: "Sample Item-Rate BOQ",
    href: "/samples/sample-item-rate-boq.xls",
    type: "Excel · .xls",
    items: "18 items",
    size: "298 KB",
    description:
      "A public government tender in the standard Item Rate format — civil protection works (earthwork, concrete, stone masonry, carriage of materials). Every rate is blank, so you price each line yourself. The best file for Start Pricing, entering rates and Auto-fill.",
  },
  {
    title: "Sample Percentage Tender",
    href: "/samples/sample-percentage-tender.xls",
    type: "Excel · .xls",
    items: "7 items",
    size: "293 KB",
    description:
      "A public road-works tender in the Percentage format. The department's estimated rates are already filled in; you quote one percentage above or below them. It works differently from an item-rate BOQ, so test it on its own.",
  },
  {
    title: "Larger Sample BOQ",
    href: "/samples/sample-large-item-rate-boq.xls",
    type: "Excel · .xls",
    items: "104 items",
    size: "300 KB",
    description:
      "A bigger public item-rate tender — electrical sub-station and HT/LT line work in 8 sections. Use it to try search, scrolling, pricing many lines, BidIQ and Market Analysis on a realistic-size BOQ.",
  },
];

export default function TestFilesPage() {
  return (
    <LegalShell
      fileNo="T-01"
      title="BOQ+ Closed Testing — Sample BOQ Files"
      updated="11 SEPTEMBER 2026"
      intro={
        <p>
          Download one or more sample BOQ files below, then open BOQ+ from
          Google Play and test the workflow. No login is required.
        </p>
      }
    >
      <h2>01 — Download a sample BOQ</h2>
      <div className="sample-files">
        {SAMPLES.map((s) => (
          <article key={s.href} className="sample-card">
            <div className="sample-card-meta">
              <span>{s.type}</span>
              <span>{s.items}</span>
              <span>{s.size}</span>
            </div>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
            <a className="sample-download" href={s.href} download>
              Download <span aria-hidden="true">↓</span>
            </a>
          </article>
        ))}
      </div>

      <h2>02 — What to test</h2>
      <ol>
        <li>Download a sample BOQ</li>
        <li>Open BOQ+</li>
        <li>Upload and view the BOQ</li>
        <li>Search/read BOQ items</li>
        <li>
          Tap <strong>Start Pricing</strong>
        </li>
        <li>Enter or edit several rates</li>
        <li>
          Try <strong>Auto-fill</strong> where available
        </li>
        <li>
          Open <strong>BidIQ</strong>
        </li>
        <li>
          Open <strong>Market Analysis</strong>
        </li>
        <li>Save and reopen the BOQ</li>
        <li>Browse tenders and set tender preferences</li>
        <li>Try export/share where available</li>
        <li>Test the Percentage Tender sample separately</li>
        <li>
          Submit private Google Play feedback for any bug, confusing screen, or
          feature that does not work as expected
        </li>
      </ol>

      <p className="legal-callout">
        These sample files are provided only for BOQ+ closed testing.
      </p>
    </LegalShell>
  );
}
