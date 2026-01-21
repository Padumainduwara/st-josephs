import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import AboutUsPreview from "@/components/AboutUsPreview";
import SchoolRules from "@/components/about/SchoolRules";
import NewsAndEvents from "@/components/NewsAndEvents";
import PrincipalMessage from "@/components/PrincipalMessage";
import StatsSection from "@/components/StatsSection";
import CoreValues from "@/components/CoreValues";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Home | St. Joseph's Girls' School Nugegoda",
  description: "Welcome to St. Joseph's Girls' School. Empowering young women through holistic education, sports, and spiritual growth.",
  alternates: {
    canonical: "https://www.stjosephsgirlsschool.com",
  },
};

export default function Home() {
  
  // --- AEO / SGE / VIDEO SEO OPTIMIZATION SCHEMA ---
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. WebSite Schema (For Sitelinks Search Box)
      {
        "@type": "WebSite",
        "@id": "https://www.stjosephsgirlsschool.com/#website",
        "url": "https://www.stjosephsgirlsschool.com",
        "name": "St. Joseph's Girls' School Official Web",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.stjosephsgirlsschool.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      // 2. VideoObject Schema (For the Hero Video to appear in Google Video Search)
      {
        "@type": "VideoObject",
        "name": "Life at St. Joseph's Girls' School",
        "description": "A glimpse into the vibrant student life, academics, and culture at St. Joseph's Girls' School Nugegoda.",
        "thumbnailUrl": "https://www.stjosephsgirlsschool.com/images/og-school-cover.jpg",
        "uploadDate": "2025-01-01",
        "contentUrl": "https://www.stjosephsgirlsschool.com/school-hero-video.mp4",
        "embedUrl": "https://www.stjosephsgirlsschool.com",
        "duration": "PT1M30S", // Duration: 1 Minute 30 Seconds (Adjust if needed)
        "hasPart": []
      },
      // 3. FAQ Schema (For Voice Search & Featured Snippets - AEO)
      {
        "@type": "FAQPage",
        "@id": "https://www.stjosephsgirlsschool.com/#faq",
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
              "text": "The school was founded on August 8, 1942, starting as St. Joseph's Convent."
            }
          },
          {
            "@type": "Question",
            "name": "Where is the school located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The school is located at High Level Road, Nugegoda, Western Province, Sri Lanka, easily accessible from Colombo."
            }
          },
          {
            "@type": "Question",
            "name": "Does the school have Advanced Level classes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer Advanced Level streams in Science (Bio/Maths), Commerce, Arts, and Technology."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="flex min-h-screen flex-col">
      {/* Inject Advanced Schema */}
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Navbar />
      
      {/* Semantic HTML5 Structure for SEO Bots to Read Better */}
      <h1 className="sr-only">St. Joseph's Girls' School - Leading National School in Sri Lanka</h1>      
      
      <section aria-label="Welcome to St. Joseph's Girls' School" role="banner">
        <HeroSection />
      </section>

      <section className="bg-gray-50 py-16" aria-label="About our School History and Legacy">
        <AboutUsPreview />
      </section>
      
      <section className="py-0" aria-label="Message from our Principal">
        <PrincipalMessage />
      </section>
            
      <article aria-label="School Statistics">
        <StatsSection />
      </article>
      
      <section className="py-0" aria-label="Our Core Values and Ethics">
        <CoreValues />
      </section>
      
      <section className="py-0 bg-gray-50" id="news" aria-label="Latest News and Upcoming Events">
        <NewsAndEvents />
      </section>

      <section className="py-0" aria-label="School Rules and Regulations">
        <SchoolRules />
      </section>

      <Footer />
    </main>
  );
}