import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutUsPreview from "@/components/AboutUsPreview";
import StatsSection from "@/components/StatsSection";
import CoreValues from "@/components/CoreValues"; 
import Testimonials from "@/components/Testimonials";
import NewsAndEvents from "@/components/NewsAndEvents";
import Footer from "@/components/Footer";
import PrincipalMessage from "@/components/PrincipalMessage";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutUsPreview />
      <PrincipalMessage />
      <StatsSection />
      <CoreValues />
      <Testimonials />
      <NewsAndEvents />
      <Footer />
    </main>
  );
}