import Header from "@/components/Global-MainHeader";
import Hero from "@/components/marketing/1-MarketingPage-HeroSection";
import Marquee from "@/components/marketing/2-MarketingPage-ClientMarquee";
import Services from "@/components/marketing/3-MarketingPage-Services";
import Process from "@/components/marketing/4-MarketingPage-WorkProcess";
import Industries from "@/components/marketing/5-MarketingPage-IndustriesServed";
import CTA from "@/components/marketing/6-MarketingPage-CallToAction";
import Footer from "@/components/Global-MainFooter";

export default function MarketingPage() {
  return (
    <main className="bg-whiteSoft min-h-screen flex flex-col">
      <Header>
      </Header>
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Industries />
      <CTA />
      <Footer />
    </main>
  );
}