import Header from "@/components/Global-MainHeader";
import Footer from "@/components/Global-MainFooter";
import HeroSection from "@/components/business-support/1-BusinessSupport-HeroSection";
import Marquee from "@/components/business-support/2-BusinessSupport-Marquee";
import ServicesGrid from "@/components/business-support/3-BusinessSupport-ServicesGrid";
import FeaturesSection from "@/components/business-support/4-BusinessSupport-FeaturesSection";
import BenefitsSection from "@/components/business-support/5-BusinessSupport-BenefitsSection";
import CallToAction from "@/components/business-support/6-BusinessSupport-CallToAction";

export default function BusinessSupportPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col pt-[64px] sm:pt-[88px]">
        <HeroSection />
        <Marquee />
        <ServicesGrid />
        <FeaturesSection />
        <BenefitsSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
