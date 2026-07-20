"use client";

import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-hairline bg-paper/95 px-5 py-3 backdrop-blur sm:hidden">
      <a href="/#get" className="btn block w-full text-center">
        Start free — 2 BOQs, no card
      </a>
    </div>
  );
}
