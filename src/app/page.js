import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProductHighlights from "../components/ProductHighlights";
import AboutUs from "../components/AboutUs";
import ProductPage from "../components/ProductPage";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import Impact from "../components/Impact";
import PreOrder from "../components/PreOrder";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="w-full flex-1 bg-[#050816] text-white overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <HeroSection />
      <ProductHighlights />
      <AboutUs />
      <ProductPage />
      <HowItWorks />
      <Pricing />
      <Impact />
      <PreOrder />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  );
}
