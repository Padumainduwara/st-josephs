"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const allImages = [
  { src: "/images/IMG_6105.JPG", cat: "buildings" },
  { src: "/images/IMG_6110.JPG", cat: "statues" },
  { src: "/images/IMG_6159.JPG", cat: "events" },
  { src: "/images/IMG_6160.JPG", cat: "events" },
  { src: "/images/IMG_6162.JPG", cat: "buildings" },
  { src: "/images/IMG_6152.JPG", cat: "library" },
  { src: "/images/IMG_6154.JPG", cat: "library" },
  { src: "/images/IMG_6155.JPG", cat: "library" },
  { src: "/images/IMG_6165.JPG", cat: "nature" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");

  const filteredImages = filter === "all" 
    ? allImages 
    : allImages.filter(img => img.cat === filter);

  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="pt-24 md:pt-32 pb-16 container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-primary text-center mb-8">
          Our Gallery
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["all", "events", "buildings", "library", "statues"].map((cat) => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-bold uppercase transition-all ${
                        filter === cat ? "bg-primary text-white" : "bg-white text-gray-600 hover:bg-gray-200"
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>

        <motion.div layout className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
            <AnimatePresence>
                {filteredImages.map((image, index) => (
                <motion.div 
                    key={image.src}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                    className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-lg"
                >
                    <Image
                        src={image.src}
                        alt="Gallery Image"
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}