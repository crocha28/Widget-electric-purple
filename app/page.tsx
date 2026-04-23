import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import IntroSection from "@/components/intro-section";
import HowItWorks from "@/components/how-it-works";
import DreamSelector from "@/components/dream-selector";
import CompetitionCta from "@/components/competition-cta";
import ProductShowcase from "@/components/product-showcase";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <HowItWorks />
      <DreamSelector />
      <CompetitionCta />
      <ProductShowcase />
      <Footer />
    </main>
  );
}
