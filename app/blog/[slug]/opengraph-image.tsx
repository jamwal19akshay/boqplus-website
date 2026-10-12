import { getPost, getPosts } from "@/lib/blog";
import { OG_SIZE, ogCard } from "@/lib/og";

// Per-article share card carrying the article title.
export const runtime = "nodejs";
export const alt = "BOQ+ Blog";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  return ogCard({
    kicker: `BOQ+ BLOG · ${(post?.topic ?? "").toUpperCase()}`,
    title: post?.title ?? "BOQ+ Blog",
  });
}
