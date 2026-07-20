import Reveal from "./Reveal";

function X() {
  return (
    <svg className="x" viewBox="0 0 26 26" aria-hidden="true">
      <path d="M6 7 Q 13 12 20 20" stroke="#B5502A" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M19 6 Q 13 13 7 19" stroke="#B5502A" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export default function StraightTalk() {
  return (
    <section className="section section--tight" id="straight">
      <div className="wrap">
        <span className="kicker">straight talk</span>
        <h2>What you won&rsquo;t find on this page.</h2>
        <p className="sub">Four things we left out on purpose.</p>

        <Reveal className="nope">
          <div className="diary-label">left out, on purpose</div>
          <ul className="nope-list">
            <li>
              <X />
              <span>
                <b>No testimonials.</b> We don&rsquo;t have real ones yet. When
                a contractor says something kind and lets us print it,
                it&rsquo;ll appear here — and not a day sooner.
              </span>
            </li>
            <li>
              <X />
              <span>
                <b>No invented numbers.</b> A &ldquo;tenders indexed&rdquo;
                ticker we can&rsquo;t stand behind is a number you
                shouldn&rsquo;t have to squint at. Every figure on this page is
                read off an actual screen.
              </span>
            </li>
            <li>
              <X />
              <span>
                <b>No countdowns, no &ldquo;3 spots left&rdquo;.</b> The only
                deadline in your week should be the submission deadline. The
                founding price simply ends when the first 100 seats are taken.
              </span>
            </li>
            <li>
              <X />
              <span>
                <b>No staged mockups.</b> The screenshots are bare phone
                captures, status bars and all. Where one shows sample data, its
                caption says so.
              </span>
            </li>
          </ul>
          <p className="nope-close">
            An app built to read the record straight shouldn&rsquo;t bend it on
            its own website.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
