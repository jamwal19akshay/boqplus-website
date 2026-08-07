import Masthead from "./components/Masthead";
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

export default function Home() {
  return (
    <main id="top">
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
