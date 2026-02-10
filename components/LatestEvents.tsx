// components/LatestEvents.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { ArrowRight, CalendarDays } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface EventItem {
  id: string;
  title: string;
  date: string;
  description: string;
  images: string[] | null;
}

export default function LatestEvents() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      // Fetch ONLY latest 4 events
      const { data } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: false })
        .limit(4);
        
      if (data) setEvents(data);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Header --- */}
        <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Latest Events
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Stay informed about the latest events, announcements, and activities at St. Joseph's. 
          </p>
              <div className="h-1 w-24 bg-yellow-400 mx-auto rounded-full" />
            </motion.div>
        </div>

        {/* --- Events Grid (No Carousel) --- */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-[400px] bg-gray-200 rounded-xl animate-pulse border border-gray-300"></div>
            ))}
          </div>
        ) : events.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-200">
            <p className="text-gray-500 font-medium">No upcoming events found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                {/* --- EVENT CARD (Same as Events Page) --- */}
                <Card className="h-full flex flex-col overflow-hidden group hover:shadow-2xl transition-all duration-300 border-gray-200 bg-white">
                  
                  {/* Image Section */}
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    {item.images && item.images.length > 0 ? (
                      <Image
                        src={item.images[0]}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        unoptimized
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-300 bg-gray-100">
                        <span className="text-sm">No Image</span>
                      </div>
                    )}
                    
                    {/* Date Badge */}
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-[#800000] px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm flex items-center gap-1.5 z-10">
                      <CalendarDays className="w-3.5 h-3.5" />
                      {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-5 flex flex-col flex-grow">
                    <CardTitle className="text-lg font-bold text-gray-900 mb-2 leading-tight line-clamp-2 font-serif group-hover:text-[#800000] transition-colors">
                      {item.title}
                    </CardTitle>
                    
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                      {item.description}
                    </p>

                    {/* Button - Links to Full Page */}
                    <div className="mt-auto pt-4 border-t border-gray-100">
                       <Button 
                         asChild 
                         className="w-full bg-white text-[#800000] border border-red-100 hover:bg-[#800000] hover:text-white hover:border-[#800000] transition-all font-bold text-xs uppercase tracking-wider h-10"
                       >
                         <Link href={`/events/${item.id}`}>
                           View Details <ArrowRight className="w-3 h-3 ml-2" />
                         </Link>
                       </Button>
                    </div>
                  </CardContent>
                  
                  {/* Bottom Accent Line */}
                  <div className="h-1 w-full bg-gradient-to-r from-yellow-400 to-[#800000] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* --- View All Button --- */}
        <div className="text-center mt-12">
            <Button asChild className="bg-[#800000] hover:bg-[#600000] text-white px-8 h-12 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all">
              <Link href="/events">View All Events</Link>
            </Button>
        </div>

      </div>
    </section>
  );
}