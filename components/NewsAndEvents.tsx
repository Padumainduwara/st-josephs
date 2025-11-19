// components/NewsAndEvents.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import NewsCard from "./NewsCard";

import { Button } from "@/components/ui/button";

export default function NewsAndEvents() {
  return (
    <motion.section
      className="py-16 md:py-24 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Heading changed to Primary (Maroon) */}
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Latest News & Events
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Stay updated with our vibrant school life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>

        <div className="text-center mt-12">
          {/* Button styled to Maroon */}
          <Button asChild size="lg" className="text-lg bg-primary hover:bg-red-900 shadow-lg px-8">
            <Link href="/news">
              View All News
            </Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}