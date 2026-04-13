import Header from "@/components/Global-MainHeader";
import Hero from "@/components/ai/1-ServicesPage-HeroSection";
import Footer from "@/components/Global-MainFooter";
import ServicesSection from "@/components/ai/3-ServicesPage-ServicesList";
import ProcessSection from "@/components/ai/4-ServicesPage-ProcessSection";
import SectorsSection from "@/components/ai/5-ServicesPage-SectorsSection";
import CTASection from "@/components/ai/6-ServicesPage-CallToAction";
import SectionDivider from "@/components/ai/2-ServicesPage-SectionDivider";
import Industries from "@/components/marketing/5-MarketingPage-IndustriesServed";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SectionDivider />
      <ServicesSection />
      <ProcessSection />
      <Industries/>
      <CTASection />
      <Footer />
    </>
  );
}
