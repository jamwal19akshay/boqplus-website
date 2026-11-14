import { DATA_STATS } from "@/lib/stats";

export default function RecordSection() {
  return (
    <section className="record-section no-exhibit" id="record">
      <div className="margin-code">
        <b>01</b>
        <span>THE PUBLIC RECORD</span>
      </div>

      <div className="record-copy">
        <p className="kicker">THE GOVERNMENT ALREADY PUBLISHED THE ANSWER KEY.</p>
        <h2>More than {DATA_STATS.tenderResultsWords} decisions.</h2>
        <p className="big-deck">
          Not forecasts. Not &ldquo;AI confidence&rdquo;. Actual comparative
          statements&mdash;arranged so a contractor can use them before the next
          bid. {DATA_STATS.quotedRates} quoted rates from{" "}
          {DATA_STATS.tenderResults} government tender results, with{" "}
          {DATA_STATS.percentageTenders} past tenders carrying winning percentages, across{" "}
          {DATA_STATS.portals} tender portals in about 40 states and UTs
          (as of {DATA_STATS.asOfLong}).{" "}
          <a href="/sources" className="underlined">
            See the data sources
          </a>
          .
        </p>
        <div className="red-pencil">
          The market has memory.
          <br />
          Now you do too.
        </div>
      </div>
    </section>
  );
}
