import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

// Blog articles live as Markdown files in content/blog/<slug>.md, each opening
// with a frontmatter block:
//
//   ---
//   title: How to …
//   description: One or two sentences for search results and the index.
//   date: 2026-10-13            (publication date, YYYY-MM-DD)
//   updated: 2026-11-02         (optional — last substantive edit)
//   author: BOQ+ Team
//   topic: BOQ basics
//   reviewBy: 2027-04-13        (date the article must be re-checked by)
//   campaign: fill-boq-guide    (short code for the App Store link: ct=blog-<campaign>;
//                                Apple caps ct at 30 characters, checked below.
//                                Play uses the full slug as utm_campaign.)
//   draft: true                 (optional — keeps it off the site)
//   sources:                    (optional list, one per line)
//     - Label | https://example.gov.in/page
//   ---
//
// Files are read at build time only; every article page is static HTML.

const DIR = join(process.cwd(), "content/blog");

export type Source = { label: string; url?: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  topic: string;
  reviewBy: string;
  campaign: string;
  sources: Source[];
  body: string;
};

function parse(slug: string, raw: string): Post & { draft: boolean } {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) throw new Error(`content/blog/${slug}.md: missing frontmatter`);
  const fields: Record<string, string> = {};
  const sources: Source[] = [];
  let inSources = false;
  for (const line of m[1].split("\n")) {
    const item = line.match(/^\s+-\s+(.*)$/);
    if (inSources && item) {
      const [label, url] = item[1].split("|").map((s) => s.trim());
      sources.push({ label, url: url || undefined });
      continue;
    }
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (!kv) continue;
    inSources = kv[1] === "sources";
    if (!inSources) fields[kv[1]] = kv[2].trim();
  }
  for (const key of ["title", "description", "date", "author", "topic", "reviewBy", "campaign"]) {
    if (!fields[key]) throw new Error(`content/blog/${slug}.md: missing "${key}"`);
  }
  // App Store Connect truncates campaign tokens to 30 characters, which would
  // silently merge different articles' installs — fail the build instead.
  if (`blog-${fields.campaign}`.length > 30) {
    throw new Error(`content/blog/${slug}.md: campaign "${fields.campaign}" is too long (max 25 characters)`);
  }
  return {
    slug,
    title: fields.title,
    description: fields.description,
    date: fields.date,
    updated: fields.updated || undefined,
    author: fields.author,
    topic: fields.topic,
    reviewBy: fields.reviewBy,
    campaign: fields.campaign,
    sources,
    body: m[2].trim(),
    draft: fields.draft === "true",
  };
}

export function getPosts(): Post[] {
  return readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => parse(f.replace(/\.md$/, ""), readFileSync(join(DIR, f), "utf8")))
    .filter((p) => !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug);
}

// "2026-10-13" → "13 October 2026" (fixed, not locale-dependent).
const MONTHS = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];
export function formatDate(iso: string) {
  const [y, mo, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[mo - 1]} ${y}`;
}
