"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Calendar, ArrowLeft, X, ZoomIn } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  images: string[];
}

export default function SingleEventPage() {
  const { id } = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      const { data } = await supabase
        .from('events')
        .select('*')
        .eq('id', id)
        .single();
      
      if (data) setEvent(data);
    };
    if (id) fetchEvent();
  }, [id]);

  if (!event) return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="animate-pulse text-[#800000] font-bold text-xl">Loading Event...</div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col pt-[80px]">
      <Navbar />

      <div className="container mx-auto px-4 py-10 max-w-6xl">
        
        {/* 1. Back Button & Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link href="/events" className="inline-flex items-center text-gray-500 hover:text-[#800000] mb-6 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to All Events
          </Link>

          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center text-[#800000] font-bold bg-red-100 px-4 py-1.5 rounded-full text-sm mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 font-serif leading-tight mb-6">
              {event.title}
            </h1>
            <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full mb-8"></div>
          </div>
        </motion.div>

        {/* 2. Description Section (Centered) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-wrap">
            {event.description}
          </div>
        </motion.div>

        {/* 3. Masonry Gallery (Pinterest Style) */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <ZoomIn className="w-6 h-6 mr-2 text-[#800000]" /> Event Gallery
          </h2>
          
          {/* CSS Columns for Masonry Effect */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {event.images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer bg-gray-200"
                onClick={() => setSelectedImage(img)}
              >
                {/* Image loads with natural aspect ratio */}
                <Image
                  src={img}
                  alt={`Event photo ${idx + 1}`}
                  width={800} // High res width
                  height={600} // Aspect ratio maintains automatically in Masonry
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  unoptimized // Timeout Error fix
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    View Full Size
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* 4. Full Screen Image Modal (Lightbox) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all">
              <X className="w-8 h-8" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            >
              <Image
                src={selectedImage}
                alt="Full View"
                width={1920}
                height={1080}
                className="object-contain max-h-[90vh] w-auto h-auto rounded-md shadow-2xl"
                unoptimized
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}