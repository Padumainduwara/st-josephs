"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PrefectsPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="pt-20">
        <div className="bg-primary text-white py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('/images/IMG_6160.JPG')] bg-cover bg-center" />
          <div className="relative z-10 container mx-auto px-4">
            <h1 className="text-5xl font-extrabold mb-4">Prefects' Guild</h1>
            <p className="text-xl text-yellow-300 font-serif italic">"Leadership through Service"</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          
          {/* Head Prefect Section */}
          <div className="flex flex-col items-center mb-20">
            <h2 className="text-3xl font-bold text-primary mb-10 text-center">Top Board 2024/2025</h2>
            
            <div className="grid md:grid-cols-3 gap-10 items-end">
              
              {/* Deputy 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center order-2 md:order-1"
              >
                <div className="w-48 h-64 bg-gray-300 rounded-lg mx-auto mb-4 overflow-hidden relative shadow-lg">
                  <Image src="/images/IMG_6110.JPG" alt="Deputy" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">Name Here</h3>
                <p className="text-gray-500">Deputy Head Prefect</p>
              </motion.div>

              {/* Head Prefect - Center & Larger */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-center order-1 md:order-2"
              >
                <div className="w-64 h-80 bg-gray-300 rounded-xl mx-auto mb-4 overflow-hidden relative shadow-2xl border-4 border-yellow-500">
                  <Image src="/images/IMG_6110.JPG" alt="Head Prefect" fill className="object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Head Prefect Name</h3>
                <p className="text-primary font-bold uppercase tracking-widest">Head Prefect</p>
              </motion.div>

              {/* Deputy 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center order-3"
              >
                <div className="w-48 h-64 bg-gray-300 rounded-lg mx-auto mb-4 overflow-hidden relative shadow-lg">
                  <Image src="/images/IMG_6110.JPG" alt="Deputy" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">Name Here</h3>
                <p className="text-gray-500">Deputy Head Prefect</p>
              </motion.div>

            </div>
          </div>

          {/* Oath Section */}
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg border-l-8 border-primary text-center mb-16">
            <h3 className="text-2xl font-bold mb-4">The Prefects' Oath</h3>
            <p className="text-lg text-gray-700 italic leading-relaxed">
              "I pledge to serve my school with loyalty, honor, and discipline. I will strive to be a role model to my fellow students and uphold the values of St. Joseph's Girls' School at all times."
            </p>
          </div>

          {/* Group Photo Placeholder */}
          <div className="w-full h-[400px] relative rounded-2xl overflow-hidden shadow-xl bg-gray-200 flex items-center justify-center">
             <Image src="/images/IMG_6159.JPG" alt="Group" fill className="object-cover opacity-80" />
             <h2 className="relative z-10 text-white text-4xl font-bold bg-black/50 px-6 py-2 rounded">Guild of 2024</h2>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}