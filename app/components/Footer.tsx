import Link from "next/link";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/links";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-12 md:flex-row md:items-center">
          <div>
            <p className="font-display text-3xl font-bold uppercase">
              BOQ<span className="text-amber">+</span>
            </p>
            <p className="mt-2 font-mono text-sm text-white/50">
              Find · Fill · Finish
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href={APP_STORE_URL}
              className="rounded border border-white/30 px-5 py-3 font-body text-sm text-white/80 hover:border-white"
            >
              Download on the App Store
            </a>
            <a
              href={PLAY_STORE_URL}
              className="rounded border border-white/30 px-5 py-3 font-body text-sm text-white/80 hover:border-white"
            >
              Get it on Google Play
            </a>
          </div>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-3">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wider text-white/40">
              Product
            </p>
            <ul className="mt-4 space-y-2 text-white/70">
              <li><a href="/#features" className="hover:text-white">Features</a></li>
              <li><a href="/#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="/#features" className="hover:text-white">BidIQ Intelligence</a></li>
              <li><a href="/#features" className="hover:text-white">Calculators</a></li>
            </ul>
          </div>
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wider text-white/40">
              Legal
            </p>
            <ul className="mt-4 space-y-2 text-white/70">
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/support" className="hover:text-white">Support</Link></li>
              <li><Link href="/support" className="hover:text-white">Terms of Use</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wider text-white/40">
              Connect
            </p>
            <ul className="mt-4 space-y-2 text-white/70">
              <li>
                <a href="mailto:support@boq.co.in" className="hover:text-white">
                  support@boq.co.in
                </a>
              </li>
              <li>Made in Jammu, India 🇮🇳</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row md:justify-between">
          <p>© 2026 Verkzo. All rights reserved.</p>
          <p>BOQ+ is not affiliated with NIC or any government portal.</p>
        </div>
      </div>
    </footer>
  );
}
