"use client";

import Link from "next/link";
import { useState } from "react";

// Section anchors are written as root-relative hashes so the same masthead
// works from the legal pages, where "#record" alone would go nowhere.
const INDEX = [
  { n: "01", label: "The public record", href: "/#record" },
  { n: "02", label: "The field machine", href: "/#machine" },
  { n: "03", label: "The tender wire", href: "/#wire" },
  { n: "04", label: "The tariff", href: "/#price" },
];

export default function Masthead() {
  const [open, setOpen] = useState(false);

  return (
    <header className="masthead">
      <Link href="/" className="brand-mark" aria-label="BOQ+ home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/logo-horizontal.svg" alt="BOQ+" width={142} height={32} />
      </Link>
      <div className="masthead-centre">
        <span>GOVT. TENDER OPERATING SYSTEM</span>
        <b>IND / 2026</b>
      </div>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{open ? "CLOSE" : "INDEX"}</span>
        <b>{open ? "×" : "+"}</b>
      </button>
      <nav className={`file-index${open ? " open" : ""}`} aria-label="Page index">
        {INDEX.map((item) => (
          <Link key={item.n} href={item.href} onClick={() => setOpen(false)}>
            <b>{item.n}</b> {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
