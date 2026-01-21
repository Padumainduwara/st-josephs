import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";

// Components
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; 

const inter = Inter({ subsets: ["latin"] });

// --- 1. WORLD CLASS / MASTERS LEVEL SEO CONFIGURATION ---
export const metadata: Metadata = {
  metadataBase: new URL("https://www.stjosephsgirlsschool.com"),
  
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
    "School Admission Sri Lanka 2026",
    "St. Joseph's Nugegoda History",
    "St. Joseph's Convent History",
    "Prefects Guild SJGS",
    "Top academic schools Sri Lanka",
    "STEM education girls",
    "Sports Achievements Schools Sri Lanka",
    "Advanced Level Science Arts Commerce Maths"
],
  
  authors: [{ name: "St. Joseph's Girls' School Media Unit", url: "https://www.stjosephsgirlsschool.com" }],
  creator: "St. Joseph's Girls' School",
  publisher: "St. Joseph's Girls' School",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Modern SEO: Instructions for AI Bots (SGE/AEO/ChatGPT)
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

  // Trust & Authority (E-E-A-T) & Canonical URLs
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/en-US',
      'si-LK': '/si-LK',
    },
  },

  // Social Media Optimization (Visual SEO - OG Tags)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.stjosephsgirlsschool.com",
    siteName: "St. Joseph's Girls' School",
    title: "St. Joseph's Girls' School | Excellence in Education",
    description: "Empowering the next generation of women leaders through faith, discipline, and knowledge. A prestigious 1AB National School.",
    images: [
      {
        url: "/images/og-school-cover.jpg", // Ensure this image is high quality (1200x630)
        width: 1200,
        height: 630,
        alt: "St. Joseph's Girls' School Main Building",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter / X Optimization
  twitter: {
    card: "summary_large_image",
    title: "St. Joseph's Girls' School Nugegoda",
    description: "Official website. Excellence in Education, Sports & Leadership.",
    images: ["/images/og-school-cover.jpg"],
    creator: "@stjosephsnugegoda",
    site: "@stjosephsnugegoda",
  },

  // Verification for Search Consoles (Essential for indexing)
  verification: {
    google: "vM8UmgBLRCpDduwl2McnYhAQhdx9XNARwO86fAPPFMU", // Your GSC Code
    yandex: "yandex-verification-code",
    other: {
      "bing-site-verification": "bing-code-here",
      "facebook-domain-verification": "fb-code-here",
    },
  },

  other: {
    "geo.region": "LK-1", // Western Province
    "geo.placename": "Nugegoda",
    "geo.position": "6.8705;79.8807", // Exact Coordinates
    "ICBM": "6.8705, 79.8807",
  },

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
  // This helps Google's Knowledge Graph understand everything about the school.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "School", // Highly specific type
    "@id": "https://www.stjosephsgirlsschool.com/#school",
    "name": "St. Joseph's Girls' School",
    "alternateName": ["SJGS Nugegoda", "St. Joseph's Convent Nugegoda", "Nugegoda Girls School"],
    "url": "https://www.stjosephsgirlsschool.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.stjosephsgirlsschool.com/Scl_logo.png",
      "width": 512,
      "height": 512
    },
    "image": "https://www.stjosephsgirlsschool.com/images/og-school-cover.jpg",
    "description": "A prestigious 1AB government girls' school in Nugegoda, Sri Lanka, offering education from Grade 1 to 13.",
    "foundingDate": "1942-08-08",
    "slogan": "Glory to God Alone",
    
    // Local SEO: Address & Map
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "High Level Road",
      "addressLocality": "Nugegoda",
      "addressRegion": "Western Province",
      "postalCode": "10250",
      "addressCountry": "LK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 6.8705, 
      "longitude": 79.8807
    },
    "hasMap": "https://maps.app.goo.gl/eh6XY9AMpNYbJ5DKA", // Add real Google Maps link
    
    // Contact Points
    "telephone": "+94-11-2822238",
    "email": "info@stjosephsgirlsschool.sch.lk",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+94-11-2822238",
      "contactType": "admissions",
      "areaServed": "LK",
      "availableLanguage": ["English", "Sinhala"]
    },

    // Knowledge Graph Connections
    "sameAs": [
      "https://www.facebook.com/stjosephsgirlsschool",
      "https://www.instagram.com/stjosephsgirlsschool",
      "https://www.youtube.com/@stjosephsgirlsschool",
      "https://en.wikipedia.org/wiki/St._Joseph%27s_Girls%27_School"
    ],
    
    // Organizational Structure (E-E-A-T)
    "alumni": {
      "@type": "Organization",
      "name": "St. Joseph's Girls' School Past Pupils' Association",
      "url": "https://www.stjosephsgirlsschool.com/alumni"
    },
    "department": [
      {
        "@type": "Organization",
        "name": "Primary Section",
        "url": "https://www.stjosephsgirlsschool.com/academics"
      },
      {
        "@type": "Organization",
        "name": "Science Section",
        "url": "https://www.stjosephsgirlsschool.com/academics"
      }
    ]
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