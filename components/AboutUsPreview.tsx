// components/AboutUsPreview.tsx

"use client"; // Animation වලට 'use client' ඕන

import Link from "next/link";
import Image from "next/image"; // <-- Image component එක import කලා
import { motion } from "framer-motion"; // Animation library එක

// ඔයා upload කරපු image එක import කරගන්න
import SchoolImage from "@/public/school-hero-image.png"; 

export default function AboutUsPreview() {
  return (
    // Section එකට animation එක අයින් කරලා, columns වලට දැම්මා
    // overflow-hidden දාන්න ඕන slide-in animation එකට
    <section className="py-16 md:py-24 bg-white overflow-hidden"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* 1. Image Side (වමේ ඉඳන් Slide වෙනවා) */}
          <motion.div
            className="rounded-lg overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -100 }} // වමේ ඉඳන්
            whileInView={{ opacity: 1, x: 0 }} // Screen එකට ආවම පේන්න
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }} // Animation එක එකපාරයි වෙන්නෙ
          >
            {/* Placeholder එක අයින් කරලා, Next.js Image එක දැම්මා */}
            <Image 
              src={SchoolImage} // Import කරපු image එක
              alt="About St. Joseph's" 
              width={600} 
              height={400}
              className="w-full h-auto object-cover" // h-auto දැම්මා aspect ratio එක තියාගන්න
              placeholder="blur" // Image එක load වෙද්දි blur effect එකක්
            />
          </motion.div>

          {/* 2. Text Side (දකුණේ ඉඳන් Slide වෙනවා) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }} // දකුණේ ඉඳන්
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }} // පොඩි delay එකක්
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2 mb-4">
              A Legacy of Excellence
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              {/* StatsSection එකෙන් ගත්ත අවුරුද්ද දැම්මා */}
              Founded in 1930, St. Joseph's Girls' School has been a beacon of
              knowledge and faith. We are dedicated to empowering young women, 
              fostering academic excellence, and building strong character for generations.
            </p>
            <Link
              href="/about"
              className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-200 transform hover:scale-105"
            >
              Discover Our Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}