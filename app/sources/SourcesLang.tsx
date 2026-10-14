"use client";

import { useEffect, useState } from "react";

type Lang = "en" | "hi";

// Language toggle for /sources. Both languages are rendered into the static
// HTML; CSS shows one. Default is English (no JS needed to read the page);
// after hydration we honour ?lang=, then the saved choice, then the browser
// language. The page is static, so Accept-Language is read client-side.
export default function SourcesLang({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    let next: Lang | null = null;
    try {
      const q = new URLSearchParams(window.location.search).get("lang");
      if (q === "hi" || q === "en") next = q;
      if (!next) {
        const saved = window.localStorage.getItem("boq-sources-lang");
        if (saved === "hi" || saved === "en") next = saved;
      }
    } catch {
      /* storage blocked: fall through */
    }
    if (!next) {
      next = (navigator.languages ?? [navigator.language]).some((l) =>
        l?.toLowerCase().startsWith("hi"),
      )
        ? "hi"
        : "en";
    }
    setLang(next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "hi" ? "hi" : "en";
    return () => {
      document.documentElement.lang = "en";
    };
  }, [lang]);

  function choose(l: Lang) {
    setLang(l);
    try {
      window.localStorage.setItem("boq-sources-lang", l);
      const url = new URL(window.location.href);
      url.searchParams.set("lang", l);
      window.history.replaceState(null, "", url);
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="src-root" data-lang={lang}>
      <div className="src-toggle" role="group" aria-label="Language / भाषा">
        <button
          type="button"
          onClick={() => choose("en")}
          aria-pressed={lang === "en"}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => choose("hi")}
          aria-pressed={lang === "hi"}
          lang="hi"
        >
          हिंदी
        </button>
      </div>
      {children}
    </div>
  );
}
