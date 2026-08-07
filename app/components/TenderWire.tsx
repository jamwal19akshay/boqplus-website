// The rows below are an illustration of the tenders view, not a live feed.
// The mockup this design came from labelled the section "LIVE OPPORTUNITY
// FEED" with a scan timestamp and a "RECEIVING" indicator against hard-coded
// rows — that would have been a fabricated live feed. The layout is kept; the
// framing is marked as the example it actually is, in line with the rest of
// the page ("No invented counters").
const SAMPLE_ROWS = [
  {
    ref: "JK-PWD / 26-27 / 184",
    work: "Construction of link road, Khaltsi",
    place: "Ladakh",
    value: "₹74,96,34,000",
    closes: "08 AUG",
  },
  {
    ref: "JPDCL / ED-R / 14",
    work: "11kV feeder augmentation — Phase II",
    place: "Rajouri",
    value: "₹74,20,000",
    closes: "10 AUG",
  },
  {
    ref: "JAL-SHAKTI / NG / 48",
    work: "Rural water supply scheme, Nagrota",
    place: "Jammu",
    value: "₹1,16,40,000",
    closes: "12 AUG",
  },
  {
    ref: "PWD / PHC / KTR / 09",
    work: "Construction of PHC building at Katra",
    place: "Reasi",
    value: "₹2,84,00,000",
    closes: "14 AUG",
  },
];

export default function TenderWire() {
  return (
    <section className="tender-wire" id="wire">
      <div className="wire-header">
        <div className="margin-code light">
          <b>03</b>
          <span>THE TENDER WIRE</span>
        </div>
        <div>
          <span>THE OPPORTUNITY FEED</span>
          <i>SAMPLE VIEW · NOT LIVE ROWS</i>
        </div>
        <strong>● INDEXED DAILY</strong>
      </div>

      <div className="wire-title">
        <h2>Work worth opening.</h2>
        <p>
          The portal is where you submit.
          <br />
          This is where you decide.
        </p>
      </div>

      <div className="wire-table">
        <div className="wire-row wire-labels">
          <span>REF.</span>
          <span>WORK</span>
          <span>PLACE</span>
          <span>VALUE</span>
          <span>CLOSES</span>
        </div>
        {SAMPLE_ROWS.map((row, i) => (
          <a className="wire-row" href="#price" key={row.ref}>
            <span>{row.ref}</span>
            <strong>{row.work}</strong>
            <span>{row.place}</span>
            <b>{row.value}</b>
            <em>
              {row.closes} <i>↗</i>
            </em>
            <small>{String(i + 1).padStart(2, "0")}</small>
          </a>
        ))}
      </div>

      <div className="wire-foot">
        <span>FILTERS: CIVIL / ELECTRICAL / WATER / ROADS</span>
        <b>THE REAL WIRE LIVES IN THE APP →</b>
      </div>
    </section>
  );
}
