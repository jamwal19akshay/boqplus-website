import Masthead from "./Masthead";
import SiteFooter from "./SiteFooter";
import StickyDownload from "./StickyDownload";

export default function LegalShell({
  fileNo,
  title,
  updated,
  intro,
  clearance = ["BOQ+ / OFFICIAL RECORD", "PLAIN LANGUAGE, NO ASTERISKS"],
  downloads = true,
  children,
}: {
  fileNo: string;
  title: string;
  updated: string;
  intro?: React.ReactNode;
  clearance?: [string, string];
  // Store badges in the footer plus the phone sticky bar. Articles turn this
  // off: they end with their own, campaign-tagged call to action.
  downloads?: boolean;
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

      <SiteFooter downloads={downloads} />
      {downloads && <StickyDownload />}
    </main>
  );
}
