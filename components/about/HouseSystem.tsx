"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const houses = [
  { name: "Gonzaga", color: "bg-red-600", image: "/images/houses/gonzaga.png", textColor: "text-red-600" },
  { name: "Annemarie", color: "bg-green-600", image: "/images/houses/annemarie.png", textColor: "text-green-600" },
  { name: "Sebastian", color: "bg-yellow-500", image: "/images/houses/sebastian.png", textColor: "text-yellow-600" },
  { name: "Leonid", color: "bg-blue-600", image: "/images/houses/leonid.png", textColor: "text-blue-600" },
];

export default function HouseSystem() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16">House System</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {houses.map((house, index) => (
            <motion.div
              key={house.name}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col items-center p-6 md:p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-20 h-20 md:w-28 md:h-28 rounded-full ${house.color} bg-opacity-10 mb-4 md:mb-6 flex items-center justify-center relative p-3`}>
                 <Image 
                    src={house.image} 
                    alt={house.name} 
                    width={90} 
                    height={90} 
                    className="object-contain w-full h-full drop-shadow-md"
                 /> 
              </div>
              <h3 className={`text-lg md:text-xl font-bold ${house.textColor} uppercase tracking-wider`}>{house.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}