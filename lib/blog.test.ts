import assert from "node:assert/strict";
import { test } from "node:test";
import { getPosts, lastBlogUpdate, relatedPosts } from "./blog";

test("relatedPosts never returns the article itself", () => {
  for (const p of getPosts()) {
    assert.ok(relatedPosts(p.slug).every((r) => r.slug !== p.slug));
    assert.ok(relatedPosts(p.slug).length <= 3);
  }
});

test("lastBlogUpdate is the newest publication or edit date", () => {
  const dates = getPosts().map((p) => p.updated ?? p.date);
  assert.equal(lastBlogUpdate(), [...dates].sort().at(-1));
});

// Founder rule (1 Nov 2026): no "government" in blog titles.
test("no blog title contains the word government", () => {
  for (const p of getPosts()) assert.doesNotMatch(p.title, /government/i, p.slug);
});
