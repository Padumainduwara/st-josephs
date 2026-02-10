// app/events/page.tsx
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CalendarDays, ArrowRight, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  images: string[];
}

const EVENTS_PER_PAGE = 24;

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Data Fetching with Pagination
  const fetchEvents = async (pageNumber: number) => {
    setLoading(true);
    
    // Calculate Range for Pagination (0-23, 24-47, etc.)
    const from = (pageNumber - 1) * EVENTS_PER_PAGE;
    const to = from + EVENTS_PER_PAGE - 1;

    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('date', { ascending: false }) // Latest First
      .range(from, to);

    if (!error && data) {
      setEvents(data);
      // If we got fewer events than requested, it means we reached the end
      if (data.length < EVENTS_PER_PAGE) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchEvents(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const handleNextPage = () => {
    if (hasMore) setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col pt-[80px]">
      <Navbar />
      
      {/* --- HERO SECTION (Matched with About/Contact Pages) --- */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden flex items-center justify-center">
        
        {/* 1. Background Image (Parallax Effect) */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* You can change this image to a specific events cover image */}
          <Image
            src="/images/school-hero-image.png" // Use a valid image path here
            alt="School Events"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </motion.div>

        {/* 2. OVERLAY: Deep Maroon Branding (Same as About Page) */}
        <div className="absolute inset-0 bg-[#500000]/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        
        {/* 3. HERO CONTENT */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl">
              School Events
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg md:text-2xl text-yellow-300 font-serif italic max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              &quot;Celebrating our students' talents, achievements, and memorable moments.&quot;
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 w-24 md:w-32 h-1.5 bg-yellow-400 rounded-full shadow-lg" 
          />
        </div>
      </div>

      {/* --- EVENTS GRID SECTION --- */}
      <section className="container mx-auto px-4 py-16 flex-grow">
        {loading ? (
          <div className="flex flex-col justify-center items-center h-64">
             <Loader2 className="w-10 h-10 text-[#800000] animate-spin mb-4" />
             <p className="text-gray-500 font-medium">Loading Events...</p>
          </div>
        ) : events.length === 0 ? (
           <div className="text-center py-20">
              <p className="text-2xl text-gray-400 font-semibold">No events found.</p>
           </div>
        ) : (
          <>
            {/* Responsive Grid:
               - Mobile: 1 Column
               - Tablet (md): 2 Columns
               - Large (lg): 3 Columns
               - Extra Large (xl): 4 Columns (As requested)
            */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }} // Faster stagger
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col h-full border border-gray-100"
                >
                  {/* Cover Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                    {event.images && event.images.length > 0 ? (
                        <Image
                        src={event.images[0]} // Show first image
                        alt={event.title}
                        fill
                        unoptimized // Prevents timeout error
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-400 bg-gray-100">
                            No Image
                        </div>
                    )}
                    
                    {/* Date Badge */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[#800000] px-3 py-1 rounded-md text-xs font-bold shadow-sm border border-gray-100 flex items-center gap-1">
                      <CalendarDays className="w-3 h-3" />
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-grow flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#800000] transition-colors line-clamp-2 leading-tight">
                      {event.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-grow leading-relaxed">
                      {event.description}
                    </p>
                    
                    <Button asChild variant="outline" className="w-full mt-auto border-red-100 text-[#800000] hover:bg-[#800000] hover:text-white transition-all group-hover:border-[#800000]">
                      <Link href={`/events/${event.id}`} className="flex items-center justify-center">
                        View Gallery <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* --- PAGINATION CONTROLS --- */}
            <div className="mt-16 flex justify-center items-center gap-4">
              <Button
                variant="outline"
                onClick={handlePrevPage}
                disabled={page === 1 || loading}
                className="w-32"
              >
                <ChevronLeft className="w-4 h-4 mr-2" /> Previous
              </Button>
              
              <span className="text-gray-600 font-medium px-4">
                Page {page}
              </span>

              <Button
                variant="outline"
                onClick={handleNextPage}
                disabled={!hasMore || loading}
                className="w-32"
              >
                Next <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </>
        )}
      </section>

      <Footer />
    </main>
  );
}