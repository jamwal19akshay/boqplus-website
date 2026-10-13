import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/blog";

const BASE_URL = "https://boq.co.in";

// Hard-coded rather than `new Date()` so an unrelated redeploy doesn't claim
// every page changed. Bump when a page's content actually changes.
const LAST_MODIFIED = "2026-10-13";

const routes: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
  { path: "/support", changeFrequency: "monthly", priority: 0.7 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/delete-account", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/refund", changeFrequency: "yearly", priority: 0.3 },
];

// /test-files is deliberately absent: it is a noindex tester handout. So is
// /app, a noindex device redirect for social bio links.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = routes.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency,
    priority,
  }));
  // Published articles only — drafts never reach getPosts().
  const articles = getPosts().map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: p.updated ?? p.date,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...pages, ...articles];
}
