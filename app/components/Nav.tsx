"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { APP_STORE_URL } from "@/lib/links";

export default function Nav({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid || scrolled ? "bg-navy shadow-card" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="font-display text-2xl font-bold uppercase tracking-tight">
          <span className="text-white">BOQ</span>
          <span className="text-amber">+</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a href="/#features" className="font-body text-sm text-white/80 hover:text-white">
            Features
          </a>
          <a href="/#pricing" className="font-body text-sm text-white/80 hover:text-white">
            Pricing
          </a>
          <a
            href={APP_STORE_URL}
            className="rounded bg-amber px-5 py-2 font-display text-sm font-bold uppercase text-navy hover:brightness-110"
          >
            Download Free
          </a>
        </div>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 bg-navy px-6 pb-6 pt-2 md:hidden">
          <a href="/#features" className="text-white/80" onClick={() => setOpen(false)}>
            Features
          </a>
          <a href="/#pricing" className="text-white/80" onClick={() => setOpen(false)}>
            Pricing
          </a>
          <a
            href={APP_STORE_URL}
            className="rounded bg-amber px-5 py-3 text-center font-display font-bold uppercase text-navy"
          >
            Download Free
          </a>
        </div>
      )}
    </nav>
  );
}
