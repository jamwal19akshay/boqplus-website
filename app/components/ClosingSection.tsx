import Reveal from "./Reveal";
import StoreBadges from "./StoreBadges";

export default function ClosingSection() {
  return (
    <section className="closing" id="get">
      <div className="wrap">
        {/* coiled tape closing spot */}
        <svg className="closing-art" viewBox="0 0 220 120" fill="none" aria-hidden="true">
          <ellipse cx="110" cy="106" rx="64" ry="7" fill="rgba(51,41,29,.08)" />
          <rect x="140" y="82" width="42" height="16" rx="5" fill="#EFE4CF" stroke="#33291D" strokeWidth="2.5" />
          <line x1="182" y1="82" x2="182" y2="104" stroke="#33291D" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="104" cy="70" r="36" fill="#D9A93F" stroke="#33291D" strokeWidth="3" />
          <circle cx="104" cy="70" r="14" fill="#FBF6EB" stroke="#33291D" strokeWidth="2.5" />
          <circle cx="104" cy="70" r="3.5" fill="#33291D" />
        </svg>
        <Reveal>
          <h2>
            The next comparative statement will be published either way.
            <br />
            Be on the right line of it.
          </h2>
        </Reveal>
        <Reveal>
          <p className="sub">
            Two BOQs free to start — no card, no commitment. Just your next
            bid, priced with the record open.
          </p>
        </Reveal>
        <Reveal className="mt-[38px]">
          <StoreBadges />
        </Reveal>
        <p className="store-note">
          Store listings are on their way — the links above go live with
          launch.
        </p>
      </div>
    </section>
  );
}
