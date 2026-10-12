import { Fragment, type ReactNode } from "react";

// A deliberately small Markdown renderer for blog articles, producing React
// elements (never raw HTML, so article text can't inject markup). Supports:
//   ## / ### headings · paragraphs (blank-line separated) · "- " lists ·
//   "1. " lists · **bold** · *italic* · [text](url)
// Anything else renders as plain text.

function inline(text: string, keyBase: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\*(.+?)\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const key = `${keyBase}-${i++}`;
    if (m[1] !== undefined) out.push(<strong key={key}>{inline(m[1], key)}</strong>);
    else if (m[2] !== undefined) out.push(<em key={key}>{inline(m[2], key)}</em>);
    else {
      const href = m[4];
      const external = /^https?:\/\//.test(href);
      out.push(
        <a key={key} href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {m[3]}
        </a>,
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function Markdown({ source }: { source: string }) {
  const blocks = source.replace(/\r\n/g, "\n").split(/\n{2,}/);
  return (
    <>
      {blocks.map((block, b) => {
        const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
        if (!lines.length) return null;
        const key = `b${b}`;
        const h = lines[0].match(/^(#{2,3})\s+(.*)$/);
        if (h && lines.length === 1) {
          const Tag = h[1] === "##" ? "h2" : "h3";
          return <Tag key={key}>{inline(h[2], key)}</Tag>;
        }
        if (lines.every((l) => /^-\s+/.test(l))) {
          return (
            <ul key={key}>
              {lines.map((l, i) => (
                <li key={i}>{inline(l.replace(/^-\s+/, ""), `${key}-${i}`)}</li>
              ))}
            </ul>
          );
        }
        if (lines.every((l) => /^\d+\.\s+/.test(l))) {
          return (
            <ol key={key}>
              {lines.map((l, i) => (
                <li key={i}>{inline(l.replace(/^\d+\.\s+/, ""), `${key}-${i}`)}</li>
              ))}
            </ol>
          );
        }
        return (
          <p key={key}>
            {lines.map((l, i) => (
              <Fragment key={i}>
                {i > 0 && " "}
                {inline(l, `${key}-${i}`)}
              </Fragment>
            ))}
          </p>
        );
      })}
    </>
  );
}
