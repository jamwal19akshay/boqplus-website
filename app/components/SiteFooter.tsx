import Link from "next/link";
import StoreBadges from "./StoreBadges";
import { APP_STORE_URL_FOOTER, PLAY_STORE_URL_FOOTER } from "@/lib/links";

export default function SiteFooter({ downloads = true }: { downloads?: boolean }) {
  return (
    <footer className="site-footer">
      {downloads && (
        <div className="footer-download">
          <span>GET BOQ+ TENDER BOQ RATES</span>
          <StoreBadges
            className="large"
            appStoreUrl={APP_STORE_URL_FOOTER}
            playStoreUrl={PLAY_STORE_URL_FOOTER}
          />
        </div>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/logo-full-dark.svg" alt="BOQ+" width={115} height={36} loading="lazy" />
      <p>Made in India for the people who build India.</p>
      <nav>
        <Link href="/blog">Blog</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/sources">Sources</Link>
        <Link href="/refund">Refund</Link>
        <Link href="/delete-account">Delete Account</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/support">Support</Link>
      </nav>
      <small className="footer-disclaimer">
        BOQ+ is an independent app. It is not affiliated with, endorsed by, or
        representing any government entity. Data sources are listed on the{" "}
        <Link href="/sources">Sources</Link> page.
      </small>
      <span>&copy; {new Date().getFullYear()}</span>
    </footer>
  );
}
