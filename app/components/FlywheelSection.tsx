import Image from "next/image";
import Reveal from "./Reveal";

export default function FlywheelSection() {
  return (
    <section className="section" id="flywheel">
      <div className="wrap flywheel-grid">
        <Reveal>
          <span className="kicker">how it compounds</span>
          <h2>It gets sharper the more you bid.</h2>
          <p className="sub">
            BOQ+ is built around one loop, and it&rsquo;s the first thing the
            app shows you:
          </p>
          <ol className="loop-list">
            <li>
              <span className="n">1</span>
              <span>
                <b>Track tenders</b> worth your time, with dates, values and
                EMD in one sheet.
              </span>
            </li>
            <li>
              <span className="n">2</span>
              <span>
                <b>Fill your BOQ</b> with BidIQ&rsquo;s winning bands beside
                every item.
              </span>
            </li>
            <li>
              <span className="n">3</span>
              <span>
                <b>Record the outcome</b> when the comparative statement is
                published.
              </span>
            </li>
            <li>
              <span className="n">4</span>
              <span>
                <b>Bid sharper next time</b> — your track record and the market
                report carry the lesson forward.
              </span>
            </li>
          </ol>
          {/* flywheel doodle */}
          <svg className="flywheel-art" viewBox="0 0 200 200" fill="none" aria-hidden="true">
            <circle cx="100" cy="100" r="62" stroke="#94836B" strokeWidth="2.5" strokeDasharray="4 9" strokeLinecap="round" />
            <path d="M100 30 a 70 70 0 0 1 66 48" stroke="#B5502A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <path d="M166 78 l -12 -2 M166 78 l -3 -12" stroke="#B5502A" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M100 170 a 70 70 0 0 1 -66 -48" stroke="#B5502A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <path d="M34 122 l 12 2 M34 122 l 3 12" stroke="#B5502A" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="100" cy="38" r="7" fill="#D9A93F" stroke="#33291D" strokeWidth="2" />
            <circle cx="162" cy="100" r="7" fill="#D9A93F" stroke="#33291D" strokeWidth="2" />
            <circle cx="100" cy="162" r="7" fill="#D9A93F" stroke="#33291D" strokeWidth="2" />
            <circle cx="38" cy="100" r="7" fill="#5C6B45" stroke="#33291D" strokeWidth="2" />
          </svg>
        </Reveal>
        <Reveal className="shot-col">
          <div className="polaroid tilt-r">
            <div className="tape" />
            <Image
              src="/screens/android/07-onboarding-flywheel.png"
              alt="BOQ+ onboarding screen showing the track, fill, record, improve flywheel"
              width={1344}
              height={2992}
            />
          </div>
          <div className="caption">Onboarding — actual app screen.</div>
        </Reveal>
      </div>
    </section>
  );
}
