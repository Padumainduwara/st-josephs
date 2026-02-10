// components/NewsAndEvents.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  description: string;
  image_url?: string | null;
}

export default function NewsAndEvents() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Popup State
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // AutoPlay Plugin (Delay: 4000ms)
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  useEffect(() => {
    const fetchNews = async () => {
      const { data } = await supabase
        .from('news')
        .select('*')
        .order('date', { ascending: false })
        .limit(8);
        
      if (data) setNews(data);
      setLoading(false);
    };

    fetchNews();
  }, []);

  const openPopup = (item: NewsItem) => {
    setSelectedNews(item);
    setIsDialogOpen(true);
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Header --- */}
        <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Latest News & Updates
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Stay informed about upcoming events, announcements, and activities at St. Joseph's. 
          </p></motion.div>
        </div>

        {/* --- Carousel Section --- */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-[350px] bg-gray-50 rounded-xl animate-pulse border border-gray-100"></div>
            ))}
          </div>
        ) : news.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-200">
            <p className="text-gray-500 font-medium">No recent news updates.</p>
          </div>
        ) : (
          <Carousel
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 pb-4">
              {news.map((item, index) => (
                <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="h-full"
                  >
                    {/* --- CARD DESIGN --- */}
                    <Card className="h-[350px] flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#800000]/30 group border-gray-200 bg-white overflow-hidden relative">
                      
                      <CardHeader className="items-center text-center pb-0 pt-6">
                        {/* Date Circle */}
                        <div className="bg-red-50 w-16 h-16 rounded-full mb-3 group-hover:bg-[#800000] transition-colors duration-500 flex flex-col items-center justify-center border border-red-100 group-hover:border-[#800000] shadow-sm">
                          <span className="text-xs font-bold text-[#800000] group-hover:text-white uppercase leading-none transition-colors duration-300">
                            {new Date(item.date).toLocaleDateString('en-US', { month: 'short' })}
                          </span>
                          <span className="text-xl font-bold text-[#800000] group-hover:text-white leading-none mt-0.5 transition-colors duration-300">
                            {new Date(item.date).toLocaleDateString('en-US', { day: 'numeric' })}
                          </span>
                        </div>

                        {/* Title */}
                        <CardTitle className="text-lg text-[#800000] font-bold leading-tight line-clamp-2 h-[3rem] flex items-center justify-center font-serif px-2">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent className="text-center flex flex-col flex-grow px-4 mt-2">
                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                          {item.description}
                        </p>
                        
                        {/* Read More Button - ALWAYS VISIBLE ("Thada") */}
                        <div className="mt-auto pb-4 w-full">
                           <Button 
                             onClick={() => openPopup(item)}
                             className="w-full text-xs font-bold uppercase tracking-widest h-9 rounded-full transition-all border shadow-sm
                                        bg-red-50 text-[#800000] border-red-100 hover:bg-[#800000] hover:text-white hover:border-[#800000]"
                           >
                             Read Details <ArrowRight className="w-3 h-3 ml-2 transition-transform group-hover:translate-x-1" />
                           </Button>
                        </div>
                      </CardContent>
                      
                      {/* Bottom Color Bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-[#800000] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-end gap-2 mt-2 pr-2">
                <CarouselPrevious className="static translate-y-0 w-8 h-8 border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white" />
                <CarouselNext className="static translate-y-0 w-8 h-8 border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white" />
            </div>
          </Carousel>
        )}

        {/* --- View All Button --- */}
        <div className="text-center mt-10">
            <Button asChild className="bg-[#800000] hover:bg-[#600000] text-white px-6 h-10 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all">
              <Link href="/events">View All Updates</Link>
            </Button>
        </div>

      </div>

      {/* --- POPUP DIALOG --- */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl bg-white p-0 overflow-hidden rounded-xl border-0 shadow-2xl h-[90vh] md:h-auto flex flex-col">
          {selectedNews && (
            <>
              {/* Header / Image Area */}
              <div className="relative">
                {selectedNews.image_url ? (
                  <div className="relative w-full h-48 md:h-64 bg-gray-100">
                    <Image 
                      src={selectedNews.image_url} 
                      alt={selectedNews.title} 
                      fill 
                      className="object-cover"
                      unoptimized 
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  </div>
                ) : (
                  /* Fallback Header */
                  <div className="w-full h-32 bg-[#800000] relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                  </div>
                )}

                {/* Title & Info Overlay */}
                <div className={`absolute bottom-0 left-0 w-full p-6 text-white ${!selectedNews.image_url ? 'h-full flex flex-col justify-end' : ''}`}>
                   <div className="flex items-center gap-3 mb-2 opacity-90">
                      <span className="bg-yellow-500 text-[#800000] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow-sm">
                          News Update
                      </span>
                      <span className="flex items-center gap-1 text-xs font-medium text-gray-100 drop-shadow-md">
                          <Clock className="w-3 h-3" />
                          {new Date(selectedNews.date).toLocaleDateString('en-US', { dateStyle: 'long' })}
                      </span>
                  </div>
                  <DialogTitle className="text-2xl md:text-3xl font-bold font-serif leading-tight drop-shadow-md">
                    {selectedNews.title}
                  </DialogTitle>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 md:p-8 flex-1 overflow-y-auto">
                <DialogDescription className="text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-wrap font-sans">
                  {selectedNews.description}
                </DialogDescription>
              </div>

              {/* Footer */}
              <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end shrink-0">
                <Button 
                    onClick={() => setIsDialogOpen(false)}
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                    Close
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}