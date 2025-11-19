// components/StatsSection.tsx

"use client";

import { motion, useInView, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";

// Number Animate wena component eka (Wenasak nehe)
function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  
  const motionValue = useSpring(0, {
    damping: 100,
    stiffness: 100,
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

// Stats Section - UPDATED COLORS
export default function StatsSection() {
  const stats = [
    { value: 1500, label: "Students Enrolled", suffix: "+" },
    { value: 75, label: "Qualified Teachers", suffix: "+" },
    { value: 50, label: "Clubs & Societies", suffix: "+" },
    { value: 1930, label: "Founded In", suffix: "" },
  ];

  return (
    // 1. bg-blue-800 ain karala 'bg-primary' (Maroon) damma
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
              {/* 2. Numbers walata 'text-yellow-400' damma. Maroon ekka yellow supiri contrast ekak denawa */}
              <span className="text-5xl md:text-6xl font-extrabold text-yellow-400">
                <AnimatedNumber value={stat.value} />
                {stat.suffix}
              </span>
              {/* 3. Label eka 'text-white' (Opacity poddak adu karala lassanata) */}
              <span className="mt-3 text-lg md:text-xl font-medium text-blue-50/90 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}