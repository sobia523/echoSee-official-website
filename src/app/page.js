import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProductHighlights from "../components/ProductHighlights";
import HowItWorks from "../components/HowItWorks";

export default function Home() {
  return (
    <main className="bg-[#050816] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProductHighlights />
      <HowItWorks />
    </main>
  );
}
