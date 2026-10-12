import Masthead from "./components/Masthead";
import { JsonLd, mobileApplication, organization } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";
import OpeningSheet from "./components/OpeningSheet";
import DispatchLine from "./components/DispatchLine";
import RecordSection from "./components/RecordSection";
import RateRuler from "./components/RateRuler";
import MachineSection from "./components/MachineSection";
import TenderWire from "./components/TenderWire";
import NightShift from "./components/NightShift";
import TariffSection from "./components/TariffSection";
import ClosingSheet from "./components/ClosingSheet";
import SiteFooter from "./components/SiteFooter";

export const metadata = pageMetadata({
  title: "BOQ+ — The bid is won before the portal opens",
  description:
    "BOQ+ reads the comparative statements published on GePNIC and state e-procurement portals and shows the winning discount band, item by item, while you price your BOQ on your phone.",
  path: "/",
});

export default function Home() {
  return (
    <main id="top">
      <JsonLd
        data={{ "@context": "https://schema.org", "@graph": [organization, mobileApplication] }}
      />
      <Masthead />
      <OpeningSheet />
      <DispatchLine />
      <RecordSection />
      <RateRuler />
      <MachineSection />
      <TenderWire />
      <NightShift />
      <TariffSection />
      <ClosingSheet />
      <SiteFooter />
    </main>
  );
}
