import Nav from "./Nav";
import Footer from "./Footer";

export default function LegalShell({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <main>
      <Nav />
      <div className="border-b border-hairline bg-paper-deep">
        <div className="mx-auto max-w-3xl px-5 py-14">
          <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="hand mt-3 rotate-[-0.5deg] text-[1.05rem] text-ink-soft">
            Last updated: {updated}
          </p>
          {intro && (
            <div className="mt-5 max-w-[36em] text-[1.08rem] text-ink-soft">
              {intro}
            </div>
          )}
        </div>
      </div>
      <div className="bg-paper">
        <article className="legal-prose mx-auto max-w-3xl px-5 py-12 text-[16.5px]">
          {children}
        </article>
      </div>
      <Footer />
    </main>
  );
}
