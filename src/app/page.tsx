import Hero from "@/components/home/1-HomePage-HeroSection";
import AboutIntro from "@/components/home/2-HomePage-AboutIntro";
import ServicesOverview from "@/components/home/3-HomePage-ServicesOverview";
import WhyChooseUs from "@/components/home/4-HomePage-WhyChooseUs";
import CTASection from "@/components/home/5-HomePage-CallToAction";
import Header from "@/components/Global-MainHeader";
import Footer from "@/components/Global-MainFooter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
        <AboutIntro />
        <ServicesOverview />
        <WhyChooseUs />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}