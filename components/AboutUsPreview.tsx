// components/AboutUsPreview.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SchoolImage from "@/public/school-hero-image.png";

// Aluthen import kala
import { Button } from "@/components/ui/button";

export default function AboutUsPreview() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* 1. Image Side (Wenasak Nehe) */}
          <motion.div
            className="rounded-lg overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image 
              src={SchoolImage}
              alt="About St. Joseph's" 
              width={600} 
              height={400}
              className="w-full h-auto object-cover"
              placeholder="blur"
            />
          </motion.div>

          {/* 2. Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2 mb-4">
              A Legacy of Excellence
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Founded in 1930, St. Joseph's Girls' School has been a beacon of
              knowledge and faith. We are dedicated to empowering young women, 
              fostering academic excellence, and building strong character for generations.
            </p>
            
            {/* 3. ALUTH SHADCN BUTTON EKA */}
            <Button asChild size="lg" className="text-lg transform transition-transform hover:scale-105">
              <Link href="/about">
                Discover Our Story
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}