import Header from "@/components/Global-MainHeader";
import Footer from "@/components/Global-MainFooter";
import HeroSection from "@/components/devops/1-DevOps-HeroSection";
import Marquee from "@/components/devops/2-DevOps-Marquee";
import ServicesGrid from "@/components/devops/3-DevOps-ServicesGrid";
import FeaturesSection from "@/components/devops/4-DevOps-FeaturesSection";
import QuoteSection from "@/components/devops/5-DevOps-QuoteSection";
import CallToAction from "@/components/devops/6-DevOps-CallToAction";
import Industries from "@/components/marketing/5-MarketingPage-IndustriesServed";

export default function DevOpsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <Marquee />
        <ServicesGrid />
        <FeaturesSection />
        <QuoteSection />
        <Industries/>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
