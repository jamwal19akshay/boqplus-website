import assert from "node:assert/strict";
import { test } from "node:test";
import React, { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

// tsconfig leaves JSX to Next ("preserve"), so tsx compiles markdown.tsx to
// classic React.createElement calls, which need React in scope.
(globalThis as { React?: typeof React }).React = React;
const markdown = import("./markdown");

const render = async (source: string) =>
  renderToStaticMarkup(createElement((await markdown).Markdown, { source }));

test("a pipe table renders as a scrollable table with inline formatting", async () => {
  const html = await render("| State | Median |\n|---|---:|\n| J&K | **-12.4%** |\n| Punjab | [more](/blog) |");
  assert.match(html, /^<div class="legal-table-scroll"><table><thead><tr><th scope="col">State<\/th>/);
  assert.match(html, /<td>J&amp;K<\/td><td><strong>-12.4%<\/strong><\/td>/);
  assert.match(html, /<td><a href="\/blog">more<\/a><\/td>/);
});

test("a stray pipe in prose stays a paragraph", async () => {
  assert.equal(await render("Rates | not a table"), "<p>Rates | not a table</p>");
});

test("pipe lines without a divider row are not a table", async () => {
  assert.doesNotMatch(await render("| a | b |\n| c | d |"), /<table>/);
});
