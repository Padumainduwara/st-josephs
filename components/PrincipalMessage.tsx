"use client";

import Image from "next/image";
import { motion } from "framer-motion";
// Placeholder image eka. Public folder ekata 'principal.jpg' dammama meka wenas karanna.
import PrincipalImage from "@/public/school-hero-image.png"; 
import { Card, CardContent } from "@/components/ui/card";

export default function PrincipalMessage() {
  return (
    // Background eka light maroon/gray (neutral) color ekak kala
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* 1. Image Side - Mobile walata 100% width, Desktop walata 1/3 */}
          <motion.div 
            className="w-full md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform hover:scale-105 duration-500">
              <Image
                src={PrincipalImage}
                alt="Principal of St. Joseph's"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-center mt-6">
              {/* Text colors Maroon (primary) walata maru kala */}
              <h3 className="text-2xl font-bold text-primary">Rev. Sr. Sujeewani Perera</h3>
              <p className="text-gray-600 font-medium text-lg">Principal</p>
            </div>
          </motion.div>

          {/* 2. Message Side */}
          <motion.div 
            className="w-full md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center md:text-left">
              Principal's Message
            </h2>
            
            {/* Card eka lassanata content eka highlight karanawa */}
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 md:p-10 text-gray-700 leading-relaxed text-lg space-y-6 font-light">
                <p>
                  "Welcome to St. Joseph's Girls' School. It is my distinct pleasure to welcome you 
                  to our vibrant community where we strive for excellence in every aspect of education."
                </p>
                <p>
                  "Our mission is to empower young women to become leaders of tomorrow, grounded in 
                  faith and values. We believe in holistic education that nurtures not just the 
                  intellect, but also the spirit and character of every student."
                </p>
                <p>
                  "I invite you to explore our website and discover the unique opportunities 
                  that await your child at St. Joseph's."
                </p>
                <div className="mt-8 border-t pt-6 border-gray-100">
                   <p className="font-handwriting text-3xl text-primary opacity-80 font-serif italic">
                     God Bless You.
                   </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}