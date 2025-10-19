import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import Navbar from "../components/Navbar";
import PricePlan from "../components/PricePlan";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Testimonials />
      <PricePlan />
      <Footer />
    </div>
  );
}
