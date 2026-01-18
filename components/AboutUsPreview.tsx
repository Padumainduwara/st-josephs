"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckCircle2 } from "lucide-react";

export default function AboutUsPreview() {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Decorative Background Element (Subtle) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 hidden lg:block pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content - Left Side (Desktop) / Top (Mobile) */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             // CHANGED: 'order-1' දාපු නිසා හැම screen එකකම මේක මුලින්ම පෙන්නනවා
             className="order-1 text-center lg:text-left"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold uppercase tracking-widest mb-4">
              Since 1942
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              A Legacy of <span className="text-primary">Excellence</span> <br/> & Virtue
            </h2>
            
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              St. Joseph's Girls' School has been a beacon of education, guiding young minds with rich ethical values and academic brilliance. From our humble beginnings to becoming a leading institution, we continue to mold empowering women leaders.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-left max-w-lg mx-auto lg:mx-0">
              {['Faith & Discipline', 'Academic Excellence', 'Sports & Aesthetics', 'Leadership'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700 font-medium bg-gray-50 p-2 rounded-lg border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="flex justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all duration-300 rounded-full px-8">
                <Link href="/about" className="flex items-center gap-2">
                  Discover Our History <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Images Grid - Right Side (Desktop) / Bottom (Mobile) */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             // CHANGED: 'order-2' දාපු නිසා හැම screen එකකම මේක දෙවෙනියට පෙන්නනවා
             className="order-2 grid grid-cols-2 gap-3 md:gap-4"
          >
            {/* Column 1 (Offset down) */}
            <div className="space-y-3 md:space-y-4 pt-8 md:pt-12">
               <div className="relative h-32 md:h-48 lg:h-56 rounded-2xl overflow-hidden shadow-md group">
                 <Image 
                   src="/images/school-hero-image.png" 
                   alt="School History" 
                   fill 
                   className="object-cover group-hover:scale-110 transition-transform duration-700" 
                 />
                 <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
               </div>
               <div className="relative h-40 md:h-64 lg:h-72 rounded-2xl overflow-hidden shadow-md group">
                 <Image 
                   src="/images/IMG_6105.JPG" 
                   alt="School Buildings" 
                   fill 
                   className="object-cover group-hover:scale-110 transition-transform duration-700" 
                 />
                 <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
               </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-3 md:space-y-4">
               <div className="relative h-40 md:h-64 lg:h-72 rounded-2xl overflow-hidden shadow-md group">
                 <Image 
                   src="/images/IMG_6152.JPG" 
                   alt="Classroom" 
                   fill 
                   className="object-cover group-hover:scale-110 transition-transform duration-700" 
                 />
                 <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
               </div>
               
               {/* 80+ Years Card */}
               <div className="relative h-32 md:h-48 lg:h-56 rounded-2xl overflow-hidden shadow-lg bg-primary text-white flex flex-col items-center justify-center text-center p-4 border-4 border-white/20">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full -mr-4 -mt-4"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-yellow-500/20 rounded-tr-full -ml-4 -mb-4"></div>
                  
                  <span className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-black text-yellow-400">80+</span>
                  <span className="relative z-10 text-white/90 text-xs md:text-sm font-medium uppercase tracking-wider mt-1">Years of Service</span>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}