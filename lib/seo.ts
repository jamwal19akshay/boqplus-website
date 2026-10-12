import type { Metadata } from "next";

// Search metadata helpers. Everything here is static markup read by search
// engines and link previews — nothing runs in the visitor's browser and
// nothing is tracked, so the privacy policy's "no tracking on the website"
// stays true.

export const SITE_URL = "https://boq.co.in";
export const SITE_NAME = "BOQ+";

// One call per page gives it a unique title and description, a canonical URL,
// and matching Open Graph / Twitter cards. `image` defaults to the site-wide
// card (app/opengraph-image.tsx); articles pass their own. It has to be set
// explicitly: a page that defines its own openGraph doesn't inherit the root
// card.
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  modifiedTime,
  image = "/opengraph-image",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  image?: string;
}): Metadata {
  const images = [{ url: image, width: 1200, height: 630, alt: title }];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_IN",
      type,
      images,
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}
