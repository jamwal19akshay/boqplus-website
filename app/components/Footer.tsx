import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot-grid">
        <Link className="wordmark" href="/">
          BOQ<span className="plus">+</span>
        </Link>
        <nav className="foot-links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/refund">Refund Policy</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/support">Support</Link>
        </nav>
        <div className="foot-tag">
          Made in India, for contractors who price tenders after dinner. &copy;{" "}
          {new Date().getFullYear()} BOQ+
        </div>
      </div>
    </footer>
  );
}
