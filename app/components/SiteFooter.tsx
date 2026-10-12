import Link from "next/link";

const LEGAL = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Refund", href: "/refund" },
  { label: "Delete account", href: "/delete-account" },
  { label: "Support", href: "/support" },
  { label: "FAQ", href: "/faq" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="mx-auto grid max-w-site gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1fr_auto] md:items-start">
        <div className="space-y-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo-on-navy.svg"
            alt="BOQ+"
            width={116}
            height={26}
            className="h-[26px] w-auto"
          />
          <p className="max-w-xs text-[15px] leading-relaxed">
            Made in India for the people who build India.
          </p>
          <a
            href="mailto:akshay@boq.co.in"
            className="inline-block text-[15px] font-medium text-white underline decoration-amber decoration-2 underline-offset-4 hover:text-amber-light"
          >
            akshay@boq.co.in
          </a>
        </div>
        <nav aria-label="Legal and help">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-1 sm:grid-cols-3">
            {LEGAL.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-[44px] items-center text-[15px] transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-navy-800">
        <p className="mx-auto max-w-site px-4 py-6 text-[14px] sm:px-6">
          © 2026 Akshay Jamwal
        </p>
      </div>
    </footer>
  );
}
