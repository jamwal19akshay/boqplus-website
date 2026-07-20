import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import FeatureSections from "./components/FeatureSections";
import FlywheelSection from "./components/FlywheelSection";
import StraightTalk from "./components/StraightTalk";
import PricingSection from "./components/PricingSection";
import ClosingSection from "./components/ClosingSection";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <hr className="divider" />
      <ProblemSection />
      <FeatureSections />
      <hr className="divider" />
      <FlywheelSection />
      <StraightTalk />
      <PricingSection />
      <ClosingSection />
      <Footer />
      <StickyCTA />
    </main>
  );
}
