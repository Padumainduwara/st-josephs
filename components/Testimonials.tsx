// components/Testimonials.tsx
"use client";

import { motion } from "framer-motion";
import { QuoteIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "St. Joseph's didn't just give me an education; it gave me a family and the values I live by. I'm forever grateful.",
    name: "Dr. Amani Perera",
    title: "Alumna, Class of 2005",
  },
  {
    quote:
      "The dedication of the teachers is unmatched. They truly care about each student's growth, both academically and personally.",
    name: "Mr. & Mrs. Silva",
    title: "Current Parents",
  },
  {
    quote:
      "I've seen my daughter blossom here. The opportunities in sports, arts, and leadership are simply wonderful.",
    name: "S. Fernando",
    title: "Parent",
  },
  {
    quote:
      "The discipline and moral values instilled at St. Joseph's are what set it apart. It is truly a place of holistic development.",
    name: "Mrs. K. Jayawardena",
    title: "Past Teacher",
  },
  {
    quote:
      "From the science lab to the playground, every corner of this school holds a memory of learning and joy.",
    name: "R. De Alwis",
    title: "Student Leader (2024)",
  },
  {
    quote:
      "Choosing St. Joseph's for our child was the best decision we made. The supportive environment is exceptional.",
    name: "Mr. P. Weerasinghe",
    title: "Parent",
  },
];

// Duplicate array for infinite loop
const sliderData = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden relative">
      {/* Decorative Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute right-0 top-0 bg-primary w-96 h-96 rounded-full filter blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 bottom-0 bg-yellow-500 w-64 h-64 rounded-full filter blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* FIX: 'container' eka methanata damma. 
         Dan okkoma content (Heading saha Slider) me container eka athule witharak penawa. 
         Eliyata paninne nehe.
      */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading Section */}
        <div className="mb-12 text-center">
          <h2 className="text-sm font-bold text-yellow-600 uppercase tracking-widest mb-2">
            Voices of Trust
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary">
            What Our Community Says
          </h3>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Infinite Slider Container (Inside Main Container) */}
        <div className="relative w-full overflow-hidden mask-edges">
          
          {/* Left Fade Effect */}
          <div className="absolute left-0 top-0 z-20 h-full w-12 md:w-24 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
          {/* Right Fade Effect */}
          <div className="absolute right-0 top-0 z-20 h-full w-12 md:w-24 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />

          <motion.div
            className="flex gap-6"
            animate={{ x: "-50%" }}
            transition={{
              ease: "linear",
              duration: 120, // <-- SPEED FIX: 40 thibba eka 80 kala (Slow una)
              repeat: Infinity,
            }}
            style={{ width: "fit-content" }}
          >
            {sliderData.map((item, index) => (
              // Width Adjustments:
              // Mobile: w-[85vw] -> 85% of viewport width
              // Tablet: w-[350px] -> Fixed width for better look
              // Desktop: w-[400px] -> Fixed width so 3-4 fit nicely
              <div 
                key={index} 
                className="flex-shrink-0 w-[85vw] sm:w-[350px] md:w-[400px]"
              >
                <Card className="bg-white h-full flex flex-col border-t-4 border-t-primary shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden mx-2">
                  
                  <QuoteIcon className="absolute top-4 right-4 h-12 w-12 text-gray-100 group-hover:text-red-50 transition-colors duration-300" />

                  <CardContent className="flex-grow p-8 relative">
                    <div className="mb-4">
                      <QuoteIcon className="h-8 w-8 text-primary opacity-20 rotate-180" />
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed italic font-light">
                      "{item.quote}"
                    </p>
                  </CardContent>
                  
                  <CardFooter className="p-8 pt-0 border-t border-gray-50 mt-auto">
                    <div className="flex items-center space-x-4 pt-6">
                      <div className="h-12 w-12 rounded-full bg-red-50 flex items-center justify-center text-primary font-bold text-xl border border-red-100 flex-shrink-0">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-primary leading-tight">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-500 font-medium uppercase tracking-wide mt-1">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}