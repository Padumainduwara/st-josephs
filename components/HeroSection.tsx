// components/HeroSection.tsx
"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion"; // <-- 'Variants' import කලා

export default function HeroSection() {
  // 1. Text එක වචන වලට කඩලා animate කරන්න "Stagger" effect එකක්
  const title = "Inspiring Futures at St. Joseph's";
  const titleWords = title.split(" ");

  const subtitle =
    "Nurturing young minds to achieve their full potential and shine bright.";
  const subtitleWords = subtitle.split(" ");

  // 2. Container (parent) එකට animation variants
  const containerVariants: Variants = {
    // <-- Type එක :Variants විදියට set කලා
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // එක වචනෙකින් පස්සෙ 0.1s
        delayChildren: 0.2,
      },
    },
  };

  // 3. Child (word) එකට animation variants
  const wordVariants: Variants = {
    // <-- Type එක :Variants විදියට set කලා
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }, // පොඩි bounce effect එකක්
    },
  };

  const buttonVariants: Variants = {
    // <-- Type එක :Variants විදියට set කලා
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 1.5, ease: "easeOut" }, // පොඩි delay එකක් දැම්මා
    },
  };

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

      {/* 2. Custom Gradient Overlay (globals.css එකෙන් එන style) */}
      <div className="absolute inset-0 z-10 hero-overlay"></div>

      {/* 3. Content (Animated Text & Buttons) */}
      <div className="relative z-20 text-center px-4 max-w-4xl lg:max-w-5xl mx-auto">
        {/* 4. Animated Main Title (වචනෙන් වචනෙ) */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight hero-text-shadow" // Custom shadow class
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }} // වචන ටික එක line එකේ තියන්න
        >
          {titleWords.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="mr-3 md:mr-4"
            >
              {" "}
              {/* වචන අතර පොඩි gap එකක් */}
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* 5. Animated Subtitle (වචනෙන් වචනෙ) */}
        <motion.p
          className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-blue-100 max-w-2xl mx-auto hero-text-shadow" // Custom shadow class
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            transitionDelay: "0.8s",
          }} // පොඩි delay එකක්
        >
          {subtitleWords.map((word, index) => (
            <motion.span key={index} variants={wordVariants} className="mr-2">
              {word}
            </motion.span>
          ))}
        </motion.p>

        {/* Buttons with animation */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <Link
            href="/about"
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Our School
          </Link>
          <Link
            href="/contact"
            className="bg-white text-blue-900 px-8 py-4 rounded-full text-xl font-semibold hover:bg-gray-200 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Admissions
          </Link>
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
        <svg
          className="w-8 h-8 text-white animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </motion.div>
    </div>
  );
}