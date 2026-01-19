import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";

// Components
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; 

const inter = Inter({ subsets: ["latin"] });

// --- 1. WORLD CLASS SEO CONFIGURATION (GLOBAL) ---
export const metadata: Metadata = {
  metadataBase: new URL("https://www.stjosephsgirlsschool.com"), // Oya gaththa domain eka
  
  title: {
    default: "St. Joseph's Girls' School | Nugegoda | Premier Government School",
    template: "%s | St. Joseph's Girls' School Nugegoda",
  },
  
  description: "St. Joseph's Girls' School Nugegoda is a leading 1AB super-grade government school in Sri Lanka, fostering academic excellence, Catholic values, and women leadership since 1942.",
  
  keywords: [
    "St. Joseph's Girls' School",
    "St. Joseph's Girls' School Nugegoda",
    "SJGS Nugegoda",
    "Nugegoda Girls School",
    "Best Girls School Colombo",
    "Girls schools in Colombo Western Province",
    "Sri Lanka Government Girls School",
    "National Schools Sri Lanka",
    "Catholic Girls Schools Sri Lanka",
    "Education in Nugegoda",
    "School Admission Sri Lanka",
    "St. Joseph's Nugegoda History",
    "Prefects Guild SJGS",
    "Top academic schools Sri Lanka",
    "STEM education girls",
    "Sports Achievements Schools",
    "Advanced Level Arts Commerce Science Maths"
  ],
  authors: [{ name: "St. Joseph's Girls' School Media Unit" }],
  creator: "St. Joseph's Girls' School",
  publisher: "St. Joseph's Girls' School",
  
  // Modern SEO: Instructions for AI Bots (SGE/AEO)
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Trust & Authority (E-E-A-T)
  alternates: {
    canonical: "/",
  },

  // Social Media Optimization (Visual SEO)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.stjosephsgirlsschool.com",
    siteName: "St. Joseph's Girls' School",
    title: "St. Joseph's Girls' School | Excellence in Education",
    description: "Empowering the next generation of women leaders through faith, discipline, and knowledge.",
    images: [
      {
        url: "/images/og-school-cover.jpg", // Make sure this image exists in public folder (1200x630px)
        width: 1200,
        height: 630,
        alt: "St. Joseph's Girls' School Main Building",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "St. Joseph's Girls' School Nugegoda",
    description: "Official website. Excellence in Education, Sports & Leadership.",
    images: ["/images/og-school-cover.jpg"],
    creator: "@stjosephsnugegoda", // Twitter handle ekak hadala methanata danna
  },

  // Verification for Search Consoles
  verification: {
    google: "google-site-verification-code-here", // GSC code eka danna
    yandex: "yandex-verification-code",
    other: {
      "bing-site-verification": "bing-code-here",
    },
  },

  // App Specific
  applicationName: "SJGS Web Portal",
  category: "Education",
};

export const viewport: Viewport = {
  themeColor: "#800000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // --- 2. ADVANCED SCHEMA.ORG (JSON-LD) FOR AEO/SGE ---
  // Meka thama AI SEO rahas. Google ta api kelinma data denawa structured widiyata.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "School", // Specific Type
    "@id": "https://www.stjosephsgirlsschool.com/#school",
    "name": "St. Joseph's Girls' School",
    "alternateName": ["SJGS Nugegoda", "St. Joseph's Convent Nugegoda"],
    "url": "https://www.stjosephsgirlsschool.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.stjosephsgirlsschool.com/Scl_logo.png",
      "width": 512,
      "height": 512
    },
    "image": "https://www.stjosephsgirlsschool.com/images/og-school-cover.jpg",
    "description": "A prestigious 1AB government girls' school in Nugegoda, Sri Lanka.",
    "foundingDate": "1942-08-08",
    "slogan": "Glory to God Alone",
    
    // E-E-A-T: Trust Signals
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "High Level Road",
      "addressLocality": "Nugegoda",
      "addressRegion": "Western Province",
      "postalCode": "10250",
      "addressCountry": "LK"
    },
    // Local SEO: Geo Coordinates (Check exact coords on Google Maps)
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 6.8705, 
      "longitude": 79.8807
    },
    "telephone": "+94-11-2822238",
    "email": "info@stjosephsgirlsschool.sch.lk",
    
    // Knowledge Graph Connections
    "sameAs": [
      "https://www.facebook.com/stjosephsgirlsschool",
      "https://www.instagram.com/stjosephsgirlsschool",
      "https://www.youtube.com/@stjosephsgirlsschool",
      "https://en.wikipedia.org/wiki/St._Joseph%27s_Girls%27_School" // Wikipedia thiyenawanm danna
    ],
    
    // Organization Details
    "alumni": {
      "@type": "Organization",
      "name": "St. Joseph's Girls' School Past Pupils' Association"
    }
  };

  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Inject JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}