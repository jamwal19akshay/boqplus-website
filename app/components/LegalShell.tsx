import Masthead from "./Masthead";
import SiteFooter from "./SiteFooter";

export default function LegalShell({
  fileNo,
  title,
  updated,
  intro,
  clearance = ["BOQ+ / OFFICIAL RECORD", "PLAIN LANGUAGE, NO ASTERISKS"],
  children,
}: {
  fileNo: string;
  title: string;
  updated: string;
  intro?: React.ReactNode;
  clearance?: [string, string];
  children: React.ReactNode;
}) {
  return (
    <main id="top">
      <Masthead />

      <div className="legal-head">
        <aside className="legal-folio" aria-hidden="true">
          <span>BOQ+</span>
          <b>
            FILE
            <br />
            NO. {fileNo}
          </b>
        </aside>
        <div className="legal-head-main">
          <div className="legal-clearance">
            <span>{clearance[0]}</span>
            <i>{clearance[1]}</i>
          </div>
          <h1>{title}</h1>
          {intro && <div className="legal-intro">{intro}</div>}
          <div className="legal-updated">LAST UPDATED · {updated}</div>
        </div>
      </div>

      <div className="legal-body">
        <div className="legal-rail" aria-hidden="true" />
        <article className="legal-prose">{children}</article>
      </div>

      <SiteFooter />
    </main>
  );
}
