// components/Testimonials.tsx
"use client";

import { motion, Variants } from "framer-motion"; // <-- 'Variants' import කලා
import React from "react";

// Testimonial data ටික (පස්සෙ Supabase වලින් ගන්න පුළුවන්)
const testimonials = [
  {
    quote:
      "St. Joseph's didn't just give me an education; it gave me a family and the values I live by. I'm forever grateful.",
    name: "Dr. Amani Perera",
    title: "Alumna, Class of 2005",
  },
  {
    quote:
      "The dedication of the teachers is unmatched. They truly care about each student's growth, both academically and personally.",
    name: "Mr. & Mrs. Silva",
    title: "Current Parents",
  },
  {
    quote:
      "I've seen my daughter blossom here. The opportunities in sports, arts, and leadership are simply wonderful.",
    name: "S. Fernando",
    title: "Parent",
  },
  // Data එක double කරලා carousel එක loop වෙන විදියට හදමු
  {
    quote:
      "St. Joseph's didn't just give me an education; it gave me a family and the values I live by. I'm forever grateful.",
    name: "Dr. Amani Perera",
    title: "Alumna, Class of 2005",
  },
  {
    quote:
      "The dedication of the teachers is unmatched. They truly care about each student's growth, both academically and personally.",
    name: "Mr. & Mrs. Silva",
    title: "Current Parents",
  },
  {
    quote:
      "I've seen my daughter blossom here. The opportunities in sports, arts, and leadership are simply wonderful.",
    name: "S. Fernando",
    title: "Parent",
  },
];

// Carousel animation එක
const carouselVariants: Variants = {
  // <-- Type එක :Variants විදියට set කලා
  animate: {
    x: [0, "-100%"], // 0% ඉඳන් -100% (data double කරපු නිසා)
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 40, // තත්පර 40ක් යනවා එක loop එකකට
        ease: "linear",
      },
    },
  },
};

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            What Our Community Says
          </h2>
        </div>

        {/* Auto-scrolling carousel එක */}
        <div className="relative">
          {/* Main scrolling track */}
          <motion.div
            className="flex"
            variants={carouselVariants}
            animate="animate"
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4"
              >
                <div className="bg-gray-50 p-8 rounded-lg shadow-lg h-full">
                  <p className="text-lg text-gray-700 italic mb-6">
                    "{item.quote}"
                  </p>
                  <p className="text-xl font-semibold text-blue-800">
                    - {item.name}
                  </p>
                  <p className="text-gray-500">{item.title}</p>
                </div>
              </div>
            ))}
          </motion.div>
          {/* Gradient එකක් දාමු දකුණු පැත්තෙන් fade වෙන්න */}
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white"></div>
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white"></div>
        </div>
      </div>
    </section>
  );
}