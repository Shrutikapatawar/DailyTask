import Header from "@/components/Global-MainHeader";
import Footer from "@/components/Global-MainFooter";
import HeroSection from "@/components/business-consulting/1-BusinessConsulting-HeroSection";
import Marquee from "@/components/business-consulting/1-BusinessConsulting-Marquee";
import ServicesGrid from "@/components/business-consulting/2-BusinessConsulting-ServicesGrid";
import QuoteSection from "@/components/business-consulting/3-BusinessConsulting-QuoteSection";
import CallToAction from "@/components/business-consulting/4-BusinessConsulting-CallToAction";
import Industries from "@/components/marketing/5-MarketingPage-IndustriesServed";

export default function BusinessConsultingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <Marquee />
        <ServicesGrid />
        <Industries/>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
