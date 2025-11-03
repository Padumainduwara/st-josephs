// components/StatsSection.tsx

"use client";

import { motion, useInView, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";

// Number එක Animate කරන පොඩි component එකක්
function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  
  // Spring animation එකක් use කරමු (smooth effect)
  const motionValue = useSpring(0, {
    damping: 100,
    stiffness: 100,
  });

  // User ගෙ screen එකට ආවද කියලා බලන්න
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value); // Screen එකට ආවම number එකට animate වෙන්න
    }
  }, [motionValue, isInView, value]);

  useEffect(() =>
    motionValue.on("change", (latest) => {
      if (ref.current) {
        // Number එක දශමස්ථාන නැතුව පෙන්නන්න
        ref.current.textContent = latest.toFixed(0);
      }
    }),
  [motionValue]);

  return <span ref={ref}>0</span>;
}

// Stats පෙන්නන ප්‍රධාන Section එක
export default function StatsSection() {
  const stats = [
    { value: 1500, label: "Students Enrolled", suffix: "+" },
    { value: 75, label: "Qualified Teachers", suffix: "+" },
    { value: 50, label: "Clubs & Societies", suffix: "+" },
    { value: 1930, label: "Founded In", suffix: "" },
  ];

  return (
    <section className="py-16 md:py-24 bg-blue-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-bold text-yellow-400">
                <AnimatedNumber value={stat.value} />
                {stat.suffix}
              </span>
              <span className="mt-2 text-lg text-blue-100">{stat.label}</span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}