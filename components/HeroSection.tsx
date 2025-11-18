// components/HeroSection.tsx
"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button"; // <-- Aluthen import kala

export default function HeroSection() {
  // ... (Obage title, subtitle, variants code okkoma mehema thiyenawa)
  const title = "Inspiring Futures at St. Joseph's";
  const titleWords = title.split(" ");
  const subtitle = "Nurturing young minds to achieve their full potential and shine bright.";
  const subtitleWords = subtitle.split(" ");
  const containerVariants: Variants = { /* ... */ };
  const wordVariants: Variants = { /* ... */ };
  const buttonVariants: Variants = { /* ... */ };
  // ... (Mama code eka copy karanne nehe, obage file eke thiyena nisa)

  return (
    <div className="relative h-screen min-h-[700px] flex items-center justify-center text-white overflow-hidden">
      {/* 1. Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/school-hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 2. Custom Gradient Overlay */}
      <div className="absolute inset-0 z-10 hero-overlay"></div>

      {/* 3. Content (Animated Text & Buttons) */}
      <div className="relative z-20 text-center px-4 max-w-4xl lg:max-w-5xl mx-auto">
        
        {/* 4. Animated Main Title */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight hero-text-shadow"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {titleWords.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="mr-3 md:mr-4"
            >
              {" "}
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* 5. Animated Subtitle */}
        <motion.p
          className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-blue-100 max-w-2xl mx-auto hero-text-shadow"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            transitionDelay: "0.8s",
          }}
        >
          {subtitleWords.map((word, index) => (
            <motion.span key={index} variants={wordVariants} className="mr-2">
              {word}
            </motion.span>
          ))}
        </motion.p>

        {/* 6. ALUTH BUTTONS (MEKA THAMA WENASA) 
          Parana Link tags, shadcn <Button> walin replace kala
        */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <Button asChild size="lg" className="text-xl px-8 py-7 shadow-lg transform transition-transform hover:scale-105">
            <Link href="/about">Explore Our School</Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className="text-xl px-8 py-7 shadow-lg transform transition-transform hover:scale-105">
            {/* Admissions walata link eka damma */}
            <Link href="/admission">Contact Admissions</Link>
          </Button>
        </motion.div>
      </div>

      {/* Optional: Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
          delay: 2.5,
        }}
      >
        {/* ... (scroll indicator SVG eka) ... */}
      </motion.div>
    </div>
  );
}