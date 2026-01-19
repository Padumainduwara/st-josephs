import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import AboutUsPreview from "@/components/AboutUsPreview";
import SchoolHighlights from "@/components/SchoolHighlights";
import NewsAndEvents from "@/components/NewsAndEvents";
import PrincipalMessage from "@/components/PrincipalMessage";
import StatsSection from "@/components/StatsSection";
import CoreValues from "@/components/CoreValues";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Page Specific Metadata (Overrides Global Layout if needed)
export const metadata: Metadata = {
  title: "Home | St. Joseph's Girls' School Nugegoda",
  description: "Welcome to St. Joseph's Girls' School. Empowering young women through holistic education, sports, and spiritual growth.",
  alternates: {
    canonical: "https://www.stjosephsgirlsschool.com",
  },
};

export default function Home() {
  
  // FAQ Schema for SGE / Voice Search
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is St. Joseph's Girls' School a government school?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, St. Joseph's Girls' School Nugegoda is a 1AB super-grade government school in Sri Lanka."
        }
      },
      {
        "@type": "Question",
        "name": "When was St. Joseph's Girls' School founded?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The school was founded on August 8, 1942."
        }
      },
      {
        "@type": "Question",
        "name": "Where is the school located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The school is located at High Level Road, Nugegoda, Western Province, Sri Lanka."
        }
      }
    ]
  };

  return (
    <main className="flex min-h-screen flex-col">
      {/* Inject FAQ Schema */}
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />
      
      <h1 className="sr-only">St. Joseph's Girls' School - Leading National School in Sri Lanka</h1>      
      <section aria-label="Welcome to St. Joseph's Girls' School">
        <HeroSection />
      </section>
      
      <article>
        <StatsSection />
      </article>
      
      <section className="py-12" aria-label="Message from our Principal">
        <PrincipalMessage />
      </section>
      
      <section className="bg-gray-50 py-16" aria-label="About our School">
        <AboutUsPreview />
      </section>
      
      <section className="py-16" aria-label="Our Core Values">
        <CoreValues />
      </section>
      
      <section className="bg-white py-16" aria-label="School Highlights and Achievements">
        <SchoolHighlights />
      </section>
      
      <section className="py-16 bg-gray-50" id="news" aria-label="Latest News and Upcoming Events">
        <NewsAndEvents />
      </section>

      <Footer />
    </main>
  );
}