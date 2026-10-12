import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import DataStat from "./components/home/DataStat";
import Extras from "./components/home/Extras";
import Features from "./components/home/Features";
import FinalBanner from "./components/home/FinalBanner";
import Hero from "./components/home/Hero";
import HomeFaq from "./components/home/HomeFaq";
import Pricing from "./components/home/Pricing";

// Section order and references: docs/WEBSITE_PLAN.md.
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <Hero />
        <DataStat />
        <Features />
        <Extras />
        <Pricing />
        <HomeFaq />
        <FinalBanner />
      </main>
      <SiteFooter />
    </>
  );
}
