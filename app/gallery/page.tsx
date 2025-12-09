// app/gallery/page.tsx

"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

// Oya dunna aluth photos tika methana map karanawa
const galleryImages = [
  { src: "/images/IMG_6105.JPG", alt: "St. Joseph's Statue & Building" },
  { src: "/images/IMG_6110.JPG", alt: "School Entrance Statue" },
  { src: "/images/IMG_6159.JPG", alt: "Historic Bell Tower" },
  { src: "/images/IMG_6160.JPG", alt: "School Bell Close-up" },
  { src: "/images/IMG_6162.JPG", alt: "School Bell Structure" },
  { src: "/images/IMG_6152.JPG", alt: "School Library - Books" },
  { src: "/images/IMG_6154.JPG", alt: "Library Study Area" },
  { src: "/images/IMG_6155.JPG", alt: "Library Interior" },
  { src: "/images/IMG_6165.JPG", alt: "School Nature & Buildings" },
];

export default function GalleryPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6">
              Our Gallery
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              A glimpse into the vibrant life, historic architecture, and serene environment of St. Joseph's Girls' School.
            </p>
          </motion.div>

          {/* Masonry-style Grid for Modern Look */}
          <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <motion.div 
                key={index} 
                className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {image.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}