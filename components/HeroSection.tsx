// components/HeroSection.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden bg-[#0a0a0a]">
      
      {/* 1. SEAMLESS NATIVE VIDEO BACKGROUND (ZERO LAG & NO POSTER IMAGE NEEDED) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline // අනිවාර්යයි (Mobile වල ඉබේ Play වෙන්න)
          preload="auto" // Video එක ඉක්මනට Load කරගන්න
          className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
        >
          {/* ⚠️ THE PRO HACK: #t=0.1 (This forces the browser to load the first frame immediately, preventing black screens without needing a separate image) */}
          <source src="/school-hero-video.mp4#t=0.1" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* 2. CUSTOM GRADIENT OVERLAY */}
      <div className="absolute inset-0 z-10 hero-overlay pointer-events-none"></div>

      {/* 3. MAIN CONTENT (z-20) */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-yellow-500/20 border border-yellow-500/50 text-yellow-300 text-sm md:text-base font-semibold tracking-wider mb-6 backdrop-blur-md shadow-lg">
            EST. 1942
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight text-white drop-shadow-2xl"
        >
          Inspiring <span className="text-yellow-400 drop-shadow-lg">Futures</span>
          <br />
          At St. Joseph's
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl font-light text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
        >
          Nurturing young minds to achieve their full potential within a framework of 
          <span className="font-semibold text-white"> faith, discipline,</span> and <span className="font-semibold text-white">excellence.</span>
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <Button asChild size="lg" className="bg-[#800000] hover:bg-[#600000] text-white text-lg px-8 py-6 rounded-full shadow-xl hover:scale-105 transition-transform w-full sm:w-auto">
            <Link href="/about">Explore Our School</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-2 border-white/80 bg-black/10 text-white hover:bg-white hover:text-black text-lg px-8 py-6 rounded-full backdrop-blur-sm transition-transform hover:scale-105 shadow-xl w-full sm:w-auto">
            <Link href="/admission">Admissions</Link>
          </Button>
        </motion.div>
      </div>

      {/* 4. SCROLL INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 text-white/70 z-20 pointer-events-none"
      >
        <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10" />
      </motion.div>
    </div>
  );
}