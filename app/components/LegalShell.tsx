import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

// Shell for the legal and help pages. Only the frame and typography live
// here; each page's words are its own and are not touched by restyles.
// `fileNo` is kept in the signature so existing pages keep compiling, but the
// dossier-era folio it fed is no longer drawn.
export default function LegalShell({
  title,
  updated,
  intro,
  children,
}: {
  fileNo?: string;
  title: string;
  updated: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <div className="bg-navy-900">
          <div className="mx-auto max-w-site px-4 pb-14 pt-14 sm:px-6 md:pb-20 md:pt-20">
            <h1 className="max-w-3xl text-[34px] font-semibold leading-[1.15] tracking-[-0.01em] text-white md:text-[48px]">
              {title}
            </h1>
            {intro && (
              <div className="mt-5 max-w-2xl text-[17px] leading-relaxed text-slate-300 [&_p]:m-0">
                {intro}
              </div>
            )}
            <p className="mt-6 text-[13px] font-medium uppercase tracking-[0.08em] text-amber-light">
              Last updated · {updated}
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-site px-4 py-14 sm:px-6 md:py-20">
          <article className="legal-prose">{children}</article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
