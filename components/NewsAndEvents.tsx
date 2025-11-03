// components/NewsAndEvents.tsx

"use client";

import Link from "next/link"; // <-- මෙන්න Fix එක!
import { motion } from "framer-motion";
import NewsCard from "./NewsCard"; // උඩින් හදපු Card එක

export default function NewsAndEvents() {
  return (
    <motion.section
      className="py-16 md:py-24 bg-gray-50" // පොඩි background-color එකක්
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Latest News & Events
          </h2>
          <p className="text-lg text-gray-700 mt-2">
            Stay updated with our vibrant school life.
          </p>
        </div>

        {/* පස්සෙ Supabase වලින් data ගත්තම, මේක 'map' කරලා ඇතුලෙ data දාන්න.
          දැනට අපි 3 පාරක් Card එක පෙන්නමු
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>

        <div className="text-center mt-12">
          <Link
            href="/news"
            className="bg-gray-800 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-black transition duration-200"
          >
            View All News
          </Link>
        </div>
      </div>
    </motion.section>
  );
}