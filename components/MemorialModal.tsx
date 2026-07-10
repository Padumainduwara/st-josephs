// components/MemorialModal.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

export default function MemorialModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Page එක load වෙලා තත්පර බාගයකින් (500ms) popup එක ලස්සනට එන්න delay එකක් දුන්නා
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Close Button - Responsive Positioning */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-black/50 hover:bg-[#800000] text-white p-2 rounded-full transition-colors duration-300 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[#800000]"
              aria-label="Close popup"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Image Container - Fully Responsive for all devices */}
            <div className="relative w-full h-[55vh] sm:h-[65vh] md:h-[80vh] max-h-[800px] flex items-center justify-center bg-white p-2 sm:p-4">
              <Image
                src="/banner1.jpg"
                alt="In Loving Memory of Mariazelle Goonetilleke"
                fill
                className="object-contain" // object-contain මගින් රූපය කිසිවිටෙකත් crop නොවන බව සහතික කරයි
                priority
                unoptimized // Image එක ඉක්මනට load වෙන්න
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}