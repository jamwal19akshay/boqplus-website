import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SocialProofBar from "./components/SocialProofBar";
import FindSection from "./components/FindSection";
import FillSection from "./components/FillSection";
import BidIQSection from "./components/BidIQSection";
import FeatureGrid from "./components/FeatureGrid";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";
import { getStats } from "@/lib/stats";

export default async function Home() {
  const stats = await getStats();

  return (
    <main>
      <Nav />
      <Hero stats={stats} />
      <SocialProofBar />
      <FindSection stats={stats} />
      <FillSection />
      <BidIQSection />
      <FeatureGrid />
      <PricingSection />
      <Footer />
      <StickyCTA />
    </main>
  );
}
