import Link from "next/link";
import LegalShell from "./components/LegalShell";

// Replaces Next's bare "404: This page could not be found". Next already adds
// <meta name="robots" content="noindex"> to not-found responses; this page
// only gives a lost visitor somewhere to go.
export const metadata = {
  title: "Page not found — BOQ+",
};

export default function NotFound() {
  return (
    <LegalShell
      fileNo="404"
      title="Page not found"
      updated="—"
      clearance={["BOQ+ / NO SUCH FILE", "CHECK THE ADDRESS"]}
      intro={<p>This page doesn’t exist, or it has moved.</p>}
    >
      <h2>Try one of these</h2>
      <ul>
        <li>
          <Link href="/">BOQ+ home</Link>
        </li>
        <li>
          <Link href="/blog">Blog: guides for contractors</Link>
        </li>
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
        <li>
          <Link href="/support">Support</Link>
        </li>
      </ul>
    </LegalShell>
  );
}
