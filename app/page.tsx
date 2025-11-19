// app/page.tsx

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutUsPreview from "@/components/AboutUsPreview";
import StatsSection from "@/components/StatsSection";
import CoreValues from "@/components/CoreValues";     // <-- අලුතෙන් Import කලා
import Testimonials from "@/components/Testimonials"; // <-- අලුතෙන් Import කලා
import NewsAndEvents from "@/components/NewsAndEvents";
import Footer from "@/components/Footer";
import PrincipalMessage from "@/components/PrincipalMessage";

export default function Home() {
  return (
    <main>
      
      {/* 1. Navigation Bar */}
      <Navbar />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. About Us Preview */}
      <AboutUsPreview />

      <PrincipalMessage />

      {/* 4. "Wow" Stats Section */}
      <StatsSection />

      {/* 5. Core Values (අලුතෙන් Add කරපු Section එක) */}
      <CoreValues />
      
      {/* 6. Testimonials (අලුතෙන් Add කරපු Section එක) */}
      <Testimonials />

      {/* 7. News & Events Section */}
      <NewsAndEvents />

      {/* 8. World Class Footer */}
      <Footer />

    </main>
  );
}