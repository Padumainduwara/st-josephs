"use client"; 

import { Metadata } from "next"; 
import Image from "next/image";
import { motion } from "framer-motion"; // Note: Since this is a client component, we handle metadata carefully.
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VisionMission from "@/components/about/VisionMission";
import SchoolHistory from "@/components/about/SchoolHistory";
import SchoolProfile from "@/components/about/SchoolProfile";
import SchoolIdentity from "@/components/about/SchoolIdentity";
import HouseSystem from "@/components/about/HouseSystem";
import SchoolRules from "@/components/about/SchoolRules";
import PrincipalList from "@/components/about/PrincipalList";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden bg-gray-50 min-h-screen flex flex-col pt-[80px]">
      <Navbar />
      
      {/* --- NEXT LEVEL HERO SECTION --- */}
      <div className="relative h-[450px] md:h-[550px] w-full overflow-hidden flex items-center justify-center">
        
        {/* 1. Background Image with Parallax-like Zoom Effect */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Note: Ensure this image path matches your public folder structure */}
          <Image
            src="/images/IMG_6159.JPG"
            alt="St. Joseph's Legacy"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* 2. UPDATED OVERLAY: Very Dark Maroon & High Opacity */}
        <div className="absolute inset-0 bg-[#500000]/95 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          
          {/* Title Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl">
              About St. Joseph's
            </h1>
          </motion.div>
          
          {/* Subtitle Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg md:text-2xl lg:text-3xl text-yellow-300 font-serif italic max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              "A legacy of excellence, discipline, and faith since 1942."
            </p>
          </motion.div>
          
          {/* Decorative Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 w-24 md:w-32 h-1.5 bg-yellow-400 rounded-full shadow-lg" 
          />
        </div>
      </div>

      {/* Components in Order */}
      <VisionMission />
      <SchoolHistory />
      <SchoolProfile />
      <SchoolIdentity />
      <HouseSystem />
      <SchoolRules />
      <PrincipalList />

      <Footer />
    </main>
  );
}