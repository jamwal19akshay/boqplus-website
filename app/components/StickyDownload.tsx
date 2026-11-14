"use client";

import { useEffect, useState } from "react";
import {
  APP_STORE_URL_STICKY,
  PLAY_STORE_URL_STICKY,
} from "@/lib/links";

// Phone-only bar pinned to the bottom of the screen once the visitor has
// scrolled past the hero badges, so a download is always one tap away.
// Hidden on wider screens by CSS. Carries its own campaign tags ("sticky").
export default function StickyDownload() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`sticky-download${show ? " show" : ""}`} aria-hidden={!show}>
      <span>
        <b>BOQ+</b> Your first BOQ opens priced, free
      </span>
      <a
        href={PLAY_STORE_URL_STICKY}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={show ? 0 : -1}
      >
        Google Play
      </a>
      <a
        href={APP_STORE_URL_STICKY}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={show ? 0 : -1}
      >
        App Store
      </a>
    </div>
  );
}
