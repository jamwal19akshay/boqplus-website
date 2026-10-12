import Link from "next/link";

// One header for every page. Section links are root-relative ("/#pricing") so
// they work from the legal pages too. Server-rendered, no client JS: it is
// always navy, so there is no scroll state to track.
const NAV = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-800/80 bg-navy-950/95 backdrop-blur supports-[backdrop-filter]:bg-navy-950/80">
      <div className="mx-auto flex h-16 max-w-site items-center justify-between gap-6 px-4 sm:px-6">
        <Link href="/" aria-label="BOQ+ home" className="flex shrink-0 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo-on-navy.svg"
            alt="BOQ+"
            width={116}
            height={26}
            className="h-[26px] w-auto"
          />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#download"
          className="inline-flex min-h-[40px] items-center rounded-full bg-amber px-5 text-[15px] font-semibold text-navy-950 transition-colors hover:bg-amber-light"
        >
          Download
        </Link>
      </div>
    </header>
  );
}
