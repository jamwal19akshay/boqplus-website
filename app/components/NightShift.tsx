const STEPS = [
  {
    n: "1",
    label: "SHORTLIST",
    copy: "Keep only the work worth your bid security and your evening.",
  },
  {
    n: "2",
    label: "RATE",
    copy: "Fill line by line with the winning record one tap away.",
  },
  {
    n: "3",
    label: "RETURN",
    copy: "When the result publishes, put it back into your private record.",
  },
  {
    n: "4",
    label: "COMPOUND",
    copy: "Next season starts with what this season taught you.",
  },
];

export default function NightShift() {
  return (
    <section className="night-shift">
      <div className="night-copy">
        <span>THE NIGHT-SHIFT PROTOCOL</span>
        <h2>
          Track.
          <br />
          Price.
          <br />
          Record.
          <br />
          <em>Improve.</em>
        </h2>
      </div>
      <ol>
        {STEPS.map((step) => (
          <li key={step.n}>
            <b>{step.n}</b>
            <span>{step.label}</span>
            <p>{step.copy}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
