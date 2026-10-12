import Link from "next/link";
import LegalShell from "../components/LegalShell";
import { formatDate, getPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog — BOQ+",
  description:
    "Practical guides for contractors bidding on Indian government e-tenders: filling BOQs, pricing items and avoiding the mistakes that get bids rejected.",
  path: "/blog",
});

export default function BlogIndex() {
  const posts = getPosts();
  return (
    <LegalShell
      fileNo="B-00"
      title="BOQ+ Blog"
      updated={formatDate(posts[0]?.date ?? "2026-10-13").toUpperCase()}
      clearance={["BOQ+ / FIELD NOTES", "FOR CONTRACTORS, IN PLAIN LANGUAGE"]}
      intro={
        <p>
          Practical guides for contractors who bid on government e-tenders —
          how BOQs work, how to price them, and what gets bids rejected.
        </p>
      }
    >
      <h2>Articles</h2>
      <div className="sample-files">
        {posts.map((p) => (
          <article key={p.slug} className="sample-card">
            <div className="sample-card-meta">
              <span>{p.topic}</span>
              <span>{formatDate(p.date)}</span>
            </div>
            <h3>
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </h3>
            <p>{p.description}</p>
            <Link className="sample-download" href={`/blog/${p.slug}`}>
              Read the guide <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>
    </LegalShell>
  );
}
