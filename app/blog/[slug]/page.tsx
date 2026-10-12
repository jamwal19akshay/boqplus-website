import { notFound } from "next/navigation";
import LegalShell from "../../components/LegalShell";
import StoreBadges from "../../components/StoreBadges";
import { formatDate, getPost, getPosts } from "@/lib/blog";
import { JsonLd, ORGANIZATION_ID, organization } from "@/lib/jsonld";
import { appStoreUrl, playStoreUrl } from "@/lib/links";
import { Markdown } from "@/lib/markdown";
import { SITE_URL, pageMetadata } from "@/lib/seo";

// Every article is generated at build time; unknown slugs are a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return pageMetadata({
    title: `${post.title} — BOQ+`,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.updated ?? post.date,
    image: `/blog/${post.slug}/opengraph-image`,
  });
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const article = {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "Article",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.updated ?? post.date,
        author: { "@type": "Organization", name: post.author, url: SITE_URL },
        publisher: { "@id": ORGANIZATION_ID },
        mainEntityOfPage: url,
        url,
        image: `${url}/opengraph-image`,
        articleSection: post.topic,
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <LegalShell
      fileNo="B-01"
      title={post.title}
      updated={formatDate(post.updated ?? post.date).toUpperCase()}
      clearance={["BOQ+ / FIELD NOTES", post.topic.toUpperCase()]}
      intro={
        <>
          <p>{post.description}</p>
          <p className="blog-byline">By {post.author}</p>
        </>
      }
    >
      <JsonLd data={article} />
      <Markdown source={post.body} />

      {post.sources.length > 0 && (
        <section className="blog-sources">
          <h2>Sources</h2>
          <ul>
            {post.sources.map((s) => (
              <li key={s.label}>
                {s.url ? (
                  <a href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                ) : (
                  s.label
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* The article's one call to action. Store links are tagged per article
          so installs from each guide are attributable in the store consoles. */}
      <aside className="blog-cta">
        <h2>Price your next BOQ with BOQ+</h2>
        <StoreBadges
          appStoreUrl={appStoreUrl(`blog-${post.campaign}`)}
          playStoreUrl={playStoreUrl("blog", post.slug)}
        />
      </aside>
    </LegalShell>
  );
}
