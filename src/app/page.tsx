import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import NudgifyFeaturesSection from "@/components/NudgifyFeaturesSection";
import NudgeTypesSection from "@/components/NudgeTypesSection";
import LiveCounterSection from "@/components/LiveCounterSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";

export default function Home() {
  return (
    <ScrollRevealProvider>
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <NudgifyFeaturesSection />
        <NudgeTypesSection />
        <LiveCounterSection />
        <HowItWorksSection />
        <FeaturesSection />
        <IntegrationsSection />
        <PricingSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </ScrollRevealProvider>
  );
}
