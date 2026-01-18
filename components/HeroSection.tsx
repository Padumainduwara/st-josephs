"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden">
      
      {/* 1. Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-90"
        >
          <source src="/school-hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 2. Custom Gradient Overlay (From Option 1) 
         මෙන්න මේ කොටස තමයි Option 1 එකෙන් ගත්තේ.
         මේකට අදාළ CSS එක ඔබේ globals.css එකේ තිබිය යුතුය.
      */}
      <div className="absolute inset-0 z-10 hero-overlay"></div>

      {/* 3. Content */}
      {/* Overlay එක z-10 නිසා, අපි Content එක z-20 කරනවා */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-yellow-500/20 border border-yellow-500/50 text-yellow-300 text-sm md:text-base font-semibold tracking-wider mb-6 backdrop-blur-md">
            EST. 1942
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight text-white drop-shadow-2xl"
        >
          Inspiring <span className="text-yellow-400">Futures</span>
          <br />
          At St. Joseph's
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl font-light text-gray-200 max-w-3xl mx-auto leading-relaxed"
        >
          Nurturing young minds to achieve their full potential within a framework of 
          <span className="font-semibold text-white"> faith, discipline,</span> and <span className="font-semibold text-white">excellence.</span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Button asChild size="lg" className="bg-[#800000] hover:bg-[#600000] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-transform">
            <Link href="/about">Explore Our School</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-2 border-white text-black hover:bg-white hover:text-black text-lg px-8 py-6 rounded-full backdrop-blur-sm transition-transform hover:scale-105">
            <Link href="/admission">Admissions</Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 z-20"
      >
        <ChevronDown className="w-10 h-10" />
      </motion.div>
    </div>
  );
}