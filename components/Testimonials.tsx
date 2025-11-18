// components/Testimonials.tsx
"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

// Aluthen import kala
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

// Testimonial data (Wenasak nehe)
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
  // Data duplicated for seamless loop
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

// Carousel animation (Wenasak nehe)
const carouselVariants: Variants = {
  animate: {
    x: [0, "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 40,
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

        <div className="relative">
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
                {/* ALUTH SHADCN CARD EKA */}
                <Card className="bg-gray-50 shadow-lg h-full flex flex-col">
                  <CardContent className="flex-grow p-8">
                    <p className="text-lg text-gray-700 italic mb-6">
                      "{item.quote}"
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start p-8 pt-0">
                    <p className="text-xl font-semibold text-blue-800">
                      - {item.name}
                    </p>
                    <p className="text-gray-500">{item.title}</p>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </motion.div>
          {/* Fades (Wenasak nehe) */}
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white"></div>
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white"></div>
        </div>
      </div>
    </section>
  );
}