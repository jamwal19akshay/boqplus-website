import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/logo-full-dark.svg" alt="BOQ+" width={115} height={36} />
      <p>Made in India for the people who build India.</p>
      <nav>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/refund">Refund</Link>
        <Link href="/delete-account">Delete Account</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/support">Support</Link>
      </nav>
      <span>&copy; {new Date().getFullYear()}</span>
    </footer>
  );
}
