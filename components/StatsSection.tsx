"use client";

import { motion, useInView, useSpring, Variants } from "framer-motion";
import { useRef, useEffect } from "react";

// --- Icons (Slightly Smaller & Sharper) ---
const Icons = {
  Student: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
  ),
  Teacher: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
  ),
  Club: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
  ),
  History: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>
  ),
};

// --- Animated Number Component ---
function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useSpring(0, {
    damping: 30,
    stiffness: 100,
    duration: 1.5
  });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() =>
    motionValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(0);
      }
    }),
  [motionValue]);

  return <span ref={ref}>0</span>;
}

export default function StatsSection() {
  const stats = [
    { value: 1500, label: "Students", suffix: "+", icon: <Icons.Student /> },
    { value: 99, label: "Teachers", suffix: "+", icon: <Icons.Teacher /> }, // Label shortened for compactness
    { value: 20, label: "Clubs", suffix: "+", icon: <Icons.Club /> },       // Label shortened
    { value: 1942, label: "Founded", suffix: "", icon: <Icons.History /> }, // Label shortened
  ];

  // Fix: Explicitly type the variants using 'Variants' from framer-motion
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <section className="relative py-12 md:py-16 bg-primary border-t border-b border-white/5">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-[-20%] left-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="group relative p-4 md:p-5 rounded-xl bg-white/5 border border-white/5 
                         hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300"
            >
              <div className="flex flex-col items-center justify-center text-center">
                
                {/* Compact Layout: Icon and Number close together */}
                <div className="flex items-center space-x-2 mb-1 md:mb-2">
                  <div className="p-1.5 md:p-2 rounded-lg bg-yellow-500/10 text-yellow-400 group-hover:bg-yellow-400 group-hover:text-primary transition-colors duration-300">
                    {stat.icon}
                  </div>
                </div>

                {/* Number: Smaller font size for sleek look */}
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                  <span className="bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    <AnimatedNumber value={stat.value} />
                    <span className="text-2xl sm:text-3xl md:text-4xl ml-0.5">{stat.suffix}</span>
                  </span>
                </div>

                {/* Label: Small, Uppercase, Elegant */}
                <span className="mt-1 md:mt-2 text-[10px] sm:text-xs md:text-sm font-semibold text-white/60 uppercase tracking-widest group-hover:text-white/90 transition-colors">
                  {stat.label}
                </span>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}