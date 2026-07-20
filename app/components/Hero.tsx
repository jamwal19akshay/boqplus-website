export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">
            For contractors on GePNIC &amp; state e-procurement portals
          </div>
          <h1>
            The winning number was always public.
            <br />
            Now it&rsquo;s{" "}
            <span className="uline">
              in your hand
              <svg viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
                <path
                  d="M2 8 Q 50 2, 100 7 T 198 6"
                  fill="none"
                  stroke="#C98C1F"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </h1>
          <p className="lede">
            Every financial evaluation ends in a comparative statement — who
            bid, who came L1, and how far below the estimate the winner landed.
            BOQ+ reads those published results and shows you the discount band
            that actually wins, item by item, while you fill your BOQ on your
            phone.
          </p>
          <div className="hero-ctas">
            <a className="btn" href="/#get">
              Start free — your first 2 BOQs
            </a>
            <a className="quiet" href="/#inside">
              See it working
            </a>
          </div>
          <div className="chips">
            <span className="chip">Android &amp; iOS</span>
            <span className="chip">GePNIC + state portals</span>
            <span className="chip">No card for the free tier</span>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          {/* Hand-drawn midnight desk scene */}
          <svg viewBox="0 0 560 440" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* wall clock at 11 */}
            <g>
              <circle cx="262" cy="72" r="27" fill="#FBF6EB" stroke="#33291D" strokeWidth="2.5" />
              <circle cx="262" cy="72" r="2.5" fill="#33291D" />
              <line x1="262" y1="72" x2="253" y2="59" stroke="#33291D" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="262" y1="72" x2="262" y2="54" stroke="#B5502A" strokeWidth="2" strokeLinecap="round" />
              <line x1="262" y1="47" x2="262" y2="51" stroke="#6E5F4B" strokeWidth="2" strokeLinecap="round" />
              <line x1="262" y1="93" x2="262" y2="97" stroke="#6E5F4B" strokeWidth="2" strokeLinecap="round" />
              <line x1="237" y1="72" x2="241" y2="72" stroke="#6E5F4B" strokeWidth="2" strokeLinecap="round" />
              <line x1="283" y1="72" x2="287" y2="72" stroke="#6E5F4B" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* night window */}
            <g>
              <rect x="42" y="34" width="168" height="168" rx="10" fill="#463C2E" stroke="#33291D" strokeWidth="2.5" />
              <line x1="126" y1="36" x2="126" y2="200" stroke="#33291D" strokeWidth="2.5" />
              <line x1="44" y1="118" x2="208" y2="118" stroke="#33291D" strokeWidth="2.5" />
              <circle cx="88" cy="78" r="21" fill="#F1E1BC" />
              <circle cx="81" cy="72" r="4" fill="#DEC898" />
              <circle cx="95" cy="84" r="3" fill="#DEC898" />
              <circle cx="165" cy="62" r="2.2" fill="#E9D9B4" />
              <circle cx="186" cy="90" r="2.2" fill="#E9D9B4" />
              <circle cx="152" cy="146" r="2.2" fill="#E9D9B4" />
              <circle cx="70" cy="160" r="2.2" fill="#E9D9B4" />
              <rect x="32" y="200" width="188" height="12" rx="4" fill="#EFE4CF" stroke="#33291D" strokeWidth="2.5" />
            </g>

            {/* pinned site note on wall */}
            <g transform="rotate(3 470 100)">
              <rect x="424" y="66" width="94" height="72" rx="4" fill="#FBF6EB" stroke="#DECFB4" strokeWidth="2" />
              <circle cx="471" cy="72" r="5" fill="#B5502A" stroke="#33291D" strokeWidth="1.5" />
              <line x1="438" y1="90" x2="504" y2="90" stroke="#94836B" strokeWidth="2" strokeLinecap="round" />
              <line x1="438" y1="104" x2="496" y2="104" stroke="#94836B" strokeWidth="2" strokeLinecap="round" />
              <line x1="438" y1="118" x2="486" y2="118" stroke="#94836B" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* desk */}
            <line x1="14" y1="342" x2="546" y2="342" stroke="#33291D" strokeWidth="3" strokeLinecap="round" />
            <line x1="58" y1="344" x2="58" y2="408" stroke="#33291D" strokeWidth="3" strokeLinecap="round" />
            <line x1="502" y1="344" x2="502" y2="408" stroke="#33291D" strokeWidth="3" strokeLinecap="round" />

            {/* soft shadows on desk */}
            <ellipse cx="120" cy="338" rx="52" ry="6" fill="rgba(51,41,29,.08)" />
            <ellipse cx="228" cy="338" rx="58" ry="6" fill="rgba(51,41,29,.08)" />
            <ellipse cx="352" cy="338" rx="60" ry="6" fill="rgba(51,41,29,.08)" />
            <ellipse cx="470" cy="338" rx="58" ry="6" fill="rgba(51,41,29,.08)" />

            {/* measuring tape */}
            <g transform="translate(120 300)">
              <rect x="24" y="-8" width="34" height="14" rx="4" fill="#EFE4CF" stroke="#33291D" strokeWidth="2" />
              <line x1="58" y1="-8" x2="58" y2="10" stroke="#33291D" strokeWidth="3" strokeLinecap="round" />
              <circle cx="0" cy="4" r="30" fill="#D9A93F" stroke="#33291D" strokeWidth="2.5" />
              <circle cx="0" cy="4" r="11" fill="#FBF6EB" stroke="#33291D" strokeWidth="2" />
              <circle cx="0" cy="4" r="3" fill="#33291D" />
            </g>

            {/* steaming cup of tea */}
            <g transform="translate(196 246)">
              <path d="M14 -32 q -9 -13 0 -26 q 8 -11 1 -22" stroke="#94836B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M42 -36 q 9 -13 0 -26 q -8 -11 -1 -22" stroke="#94836B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <ellipse cx="30" cy="86" rx="46" ry="8" fill="#EFE4CF" stroke="#33291D" strokeWidth="2" />
              <path d="M-4 -14 H64 L56 52 Q30 64 4 52 Z" fill="#BF5B33" stroke="#33291D" strokeWidth="2.5" strokeLinejoin="round" />
              <ellipse cx="30" cy="-14" rx="34" ry="7" fill="#8A5A2B" stroke="#33291D" strokeWidth="2.5" />
              <path d="M63 0 q 24 2 17 22 q -5 16 -21 12" stroke="#33291D" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </g>

            {/* phone with histogram */}
            <g transform="translate(302 152)">
              <rect x="0" y="0" width="102" height="184" rx="15" fill="#FBF6EB" stroke="#33291D" strokeWidth="2.5" />
              <rect x="9" y="12" width="84" height="150" rx="7" fill="#F6EFE2" stroke="#DECFB4" strokeWidth="1.5" />
              <line x1="41" y1="172" x2="61" y2="172" stroke="#33291D" strokeWidth="2.5" strokeLinecap="round" />
              {/* bars */}
              <rect x="18" y="118" width="11" height="34" rx="2.5" fill="#D9A93F" stroke="#33291D" strokeWidth="1.5" />
              <rect x="33" y="96" width="11" height="56" rx="2.5" fill="#D9A93F" stroke="#33291D" strokeWidth="1.5" />
              <rect x="48" y="74" width="11" height="78" rx="2.5" fill="#B5502A" stroke="#33291D" strokeWidth="1.5" />
              <rect x="63" y="102" width="11" height="50" rx="2.5" fill="#D9A93F" stroke="#33291D" strokeWidth="1.5" />
              <rect x="78" y="126" width="11" height="26" rx="2.5" fill="#D9A93F" stroke="#33291D" strokeWidth="1.5" />
              {/* median marker over the winning band, like the real report */}
              <line x1="61" y1="64" x2="61" y2="152" stroke="#5C6B45" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 6" />
              {/* header lines */}
              <line x1="18" y1="28" x2="70" y2="28" stroke="#94836B" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="18" y1="40" x2="52" y2="40" stroke="#DECFB4" strokeWidth="2.5" strokeLinecap="round" />
            </g>

            {/* site diary + pencil */}
            <g transform="rotate(-4 486 312)">
              <rect x="426" y="278" width="116" height="62" rx="6" fill="#E8DCC4" stroke="#33291D" strokeWidth="2.5" />
              <line x1="440" y1="278" x2="440" y2="340" stroke="#33291D" strokeWidth="2" />
              <circle cx="440" cy="290" r="3" fill="#33291D" />
              <circle cx="440" cy="308" r="3" fill="#33291D" />
              <circle cx="440" cy="326" r="3" fill="#33291D" />
              <line x1="452" y1="296" x2="524" y2="296" stroke="#94836B" strokeWidth="2" strokeLinecap="round" />
              <line x1="452" y1="310" x2="516" y2="310" stroke="#94836B" strokeWidth="2" strokeLinecap="round" />
              <line x1="452" y1="324" x2="500" y2="324" stroke="#94836B" strokeWidth="2" strokeLinecap="round" />
            </g>
            <g transform="rotate(8 470 356)">
              <rect x="430" y="352" width="66" height="9" rx="4" fill="#D9A93F" stroke="#33291D" strokeWidth="2" />
              <path d="M496 352 l 14 4.5 l -14 4.5 z" fill="#EFE4CF" stroke="#33291D" strokeWidth="2" strokeLinejoin="round" />
              <path d="M508.5 355.5 l 3.5 1 l -3.5 1 z" fill="#33291D" />
            </g>
          </svg>
          <div className="hero-note hand">still at it at eleven &mdash; we know.</div>
        </div>
      </div>
    </section>
  );
}
