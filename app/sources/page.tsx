import type { Metadata } from "next";
import LegalShell from "../components/LegalShell";
import SourcesLang from "./SourcesLang";
import { pageMetadata } from "@/lib/seo";
// Build-time copy of backend data/public/data_sources.json (commit df5f9b7).
import data from "@/data/data_sources.json";

export const dynamic = "force-static";

const DISCLAIMER_EN =
  "BOQ+ is an independent app. It is not affiliated with, endorsed by, or representing any government entity.";
const DISCLAIMER_HI =
  "BOQ+ एक स्वतंत्र ऐप है। यह किसी भी सरकारी संस्था से संबद्ध नहीं है, उसके द्वारा समर्थित नहीं है और उसका प्रतिनिधित्व भी नहीं करता।";

export const metadata: Metadata = pageMetadata({
  title: "Data sources | BOQ+",
  description: `${DISCLAIMER_EN} Every official source of government information shown in BOQ+, with links.`,
  path: "/sources",
});

type Source = {
  id: string;
  name: string;
  name_hi: string | null;
  body: string;
  category: string;
  category_label: string;
  category_label_hi: string;
  used_for_label: string;
  used_for_label_hi: string;
  url: string;
  url_status: string;
  verified_at: string;
  enabled: boolean;
};

// Group order and intro lines per the sources plan.
const GROUPS: { key: string; en: string; hi: string }[] = [
  {
    key: "tender_portal",
    en: "These government e-procurement portals feed the Tenders tab, BidIQ and autofill with public tender notices and results.",
    hi: "ये सरकारी ई-प्रोक्योरमेंट पोर्टल Tenders टैब, BidIQ और ऑटोफ़िल के लिए सार्वजनिक टेंडर सूचनाएँ और रिज़ल्ट देते हैं।",
  },
  {
    key: "tender_results",
    en: "The central portal for published tender status and award results, used for BidIQ and autofill.",
    hi: "प्रकाशित टेंडर की स्थिति और रिज़ल्ट का केंद्रीय पोर्टल, BidIQ और ऑटोफ़िल के लिए इस्तेमाल होता है।",
  },
  {
    key: "cpwd",
    en: "CPWD's published Delhi Schedule of Rates, Building Cost Index and circulars feed the Prices tab and rate-book autofill.",
    hi: "CPWD के प्रकाशित दिल्ली शेड्यूल ऑफ़ रेट्स, बिल्डिंग कॉस्ट इंडेक्स और सर्कुलर Prices टैब और रेट-बुक ऑटोफ़िल को आधार देते हैं।",
  },
  {
    key: "rate_book",
    en: "State and department schedules of rates used for rate-book autofill in your BOQ.",
    hi: "राज्य और विभागों की शेड्यूल ऑफ़ रेट्स, जो आपके BOQ में रेट-बुक ऑटोफ़िल के लिए इस्तेमाल होती हैं।",
  },
];

const MONTHS_EN = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const MONTHS_HI = ["जनवरी","फ़रवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितंबर","अक्टूबर","नवंबर","दिसंबर"];

// verified_at is UTC ("2026-10-14T21:29Z"); show the date in India time.
function istDate(iso: string) {
  const d = new Date(new Date(iso).getTime() + 5.5 * 3600 * 1000);
  return { d: d.getUTCDate(), m: d.getUTCMonth(), y: d.getUTCFullYear() };
}

function display(url: string) {
  try {
    const u = new URL(url);
    return (u.host + u.pathname + u.search).replace(/\/$/, "");
  } catch {
    return url;
  }
}

const sources = (data.sources as Source[]).filter((s) => s.enabled && s.url);
const newest = sources.reduce(
  (a, s) => (s.verified_at > a ? s.verified_at : a),
  "",
);
const nd = istDate(newest);

export default function SourcesPage() {
  return (
    <LegalShell
      fileNo="S-01"
      title="Data sources"
      updated={`${nd.d} ${MONTHS_EN[nd.m].toUpperCase()} ${nd.y}`}
      clearance={["BOQ+ / OFFICIAL SOURCES", "PUBLIC DATA, NAMED AT SOURCE"]}
      intro={
        <>
          <p lang="en" className="src-en">
            {DISCLAIMER_EN}
          </p>
          <p lang="hi" className="src-hi">
            {DISCLAIMER_HI}
          </p>
        </>
      }
    >
      <SourcesLang>
        <p className="src-en" lang="en">
          The information below is published by the bodies named; BOQ+
          reproduces public data and does not own it.
        </p>
        <p className="src-hi" lang="hi">
          नीचे दी गई जानकारी नामित संस्थाओं द्वारा प्रकाशित है; BOQ+ सार्वजनिक डेटा दोहराता है और उसका स्वामी नहीं है।
        </p>
        <p className="src-meta">
          <span className="src-en" lang="en">
            Last verified: {nd.d} {MONTHS_EN[nd.m]} {nd.y}
          </span>
          <span className="src-hi" lang="hi">
            अंतिम जाँच: {nd.d} {MONTHS_HI[nd.m]} {nd.y}
          </span>{" "}
          · <span title={newest}>list version {data.version}</span>
        </p>

        {GROUPS.map((g) => {
          const rows = sources.filter((s) => s.category === g.key);
          if (rows.length === 0) return null;
          return (
            <section key={g.key} aria-labelledby={`src-${g.key}`}>
              <h2 id={`src-${g.key}`}>
                <span className="src-en" lang="en">
                  {rows[0].category_label} ({rows.length})
                </span>
                <span className="src-hi" lang="hi">
                  {rows[0].category_label_hi} ({rows.length})
                </span>
              </h2>
              <p className="src-en" lang="en">
                {g.en}
              </p>
              <p className="src-hi" lang="hi">
                {g.hi}
              </p>
              <table className="src-table">
                <caption className="src-caption">
                  <span className="src-en" lang="en">
                    {rows[0].category_label}: {rows.length} official sources
                  </span>
                  <span className="src-hi" lang="hi">
                    {rows[0].category_label_hi}: {rows.length} आधिकारिक स्रोत
                  </span>
                </caption>
                <thead>
                  <tr>
                    <th scope="col">
                      <span className="src-en" lang="en">Name</span>
                      <span className="src-hi" lang="hi">नाम</span>
                    </th>
                    <th scope="col">
                      <span className="src-en" lang="en">Body</span>
                      <span className="src-hi" lang="hi">संस्था</span>
                    </th>
                    <th scope="col">
                      <span className="src-en" lang="en">Used for</span>
                      <span className="src-hi" lang="hi">इनके लिए इस्तेमाल</span>
                    </th>
                    <th scope="col">
                      <span className="src-en" lang="en">Link</span>
                      <span className="src-hi" lang="hi">लिंक</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((s) => (
                    <tr key={s.id}>
                      <td
                        data-l-en="Name"
                        data-l-hi="नाम"
                      >
                        <span className="src-en" lang="en">{s.name}</span>
                        <span className="src-hi" lang="hi">
                          {s.name_hi ?? s.name}
                        </span>
                      </td>
                      <td data-l-en="Body" data-l-hi="संस्था">
                        {s.body}
                      </td>
                      <td data-l-en="Used for" data-l-hi="इनके लिए इस्तेमाल">
                        <span className="src-en" lang="en">{s.used_for_label}</span>
                        <span className="src-hi" lang="hi">{s.used_for_label_hi}</span>
                      </td>
                      <td data-l-en="Link" data-l-hi="लिंक">
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={s.url}
                        >
                          <span className="src-en" lang="en">Open</span>
                          <span className="src-hi" lang="hi">खोलें</span>
                        </a>
                        <small className="src-url">{display(s.url)}</small>
                        {s.url_status === "could_not_verify_from_here" && (
                          <small className="src-note">
                            <span className="src-en" lang="en">
                              Link not verified from our servers; open in a browser if it does not load.
                            </span>
                            <span className="src-hi" lang="hi">
                              हमारे सर्वर से लिंक जाँचा नहीं जा सका; न खुले तो ब्राउज़र में खोलें।
                            </span>
                          </small>
                        )}
                        <small className="src-verified" title={s.verified_at}>
                          <span className="src-en" lang="en">
                            Verified {istDate(s.verified_at).d} {MONTHS_EN[istDate(s.verified_at).m]} {istDate(s.verified_at).y}
                          </span>
                          <span className="src-hi" lang="hi">
                            जाँच: {istDate(s.verified_at).d} {MONTHS_HI[istDate(s.verified_at).m]} {istDate(s.verified_at).y}
                          </span>
                        </small>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          );
        })}

        <p className="src-en" lang="en">
          Corrections: <a href="mailto:akshay@boq.co.in">akshay@boq.co.in</a>{" "}
          or <a href="/support">boq.co.in/support</a> · list version{" "}
          {data.version}
        </p>
        <p className="src-hi" lang="hi">
          सुधार के लिए: <a href="mailto:akshay@boq.co.in">akshay@boq.co.in</a>{" "}
          या <a href="/support">boq.co.in/support</a> · सूची संस्करण {data.version}
        </p>
      </SourcesLang>
    </LegalShell>
  );
}
