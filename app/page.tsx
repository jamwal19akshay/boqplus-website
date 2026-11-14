import Masthead from "./components/Masthead";
import { JsonLd, mobileApplication, organization, website } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";
import OpeningSheet from "./components/OpeningSheet";
import DispatchLine from "./components/DispatchLine";
import RecordSection from "./components/RecordSection";
import RateRuler from "./components/RateRuler";
import MachineSection from "./components/MachineSection";
import TenderWire from "./components/TenderWire";
import NightShift from "./components/NightShift";
import TariffSection from "./components/TariffSection";
import HowItWorks from "./components/HowItWorks";
import StickyDownload from "./components/StickyDownload";
import ClosingSheet from "./components/ClosingSheet";
import SiteFooter from "./components/SiteFooter";

export const metadata = pageMetadata({
  title: "Tender BOQ Rates App: Upload a BOQ, It Opens Priced | BOQ+",
  description:
    "Upload a tender BOQ, even a scanned PDF, no sign-in. It opens priced with rates from 72,000+ past tender results you check and edit. % tenders: typical winning range.",
  path: "/",
});

export default function Home() {
  return (
    <main id="top">
      <JsonLd
        data={{ "@context": "https://schema.org", "@graph": [organization, website, mobileApplication] }}
      />
      <Masthead />
      <OpeningSheet />
      <DispatchLine />
      <HowItWorks />
      <RecordSection />
      <RateRuler />
      <MachineSection />
      <TenderWire />
      <NightShift />
      <TariffSection />
      <ClosingSheet />
      <SiteFooter />
      <StickyDownload />
    </main>
  );
}
