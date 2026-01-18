"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Trophy } from "lucide-react";

const highlights = [
  {
    title: "Academic Excellence",
    description: "Empowering minds through a comprehensive curriculum and dedicated staff.",
    icon: <BookOpen className="w-8 h-8 text-[#800000]" />,
    image: "/images/academics-bg.jpg", // Add a relevant image here
    link: "/academics",
    color: "bg-blue-50"
  },
  {
    title: "Student Leadership",
    description: "The Prefects' Guild stands as a beacon of discipline, loyalty, and service.",
    icon: <Users className="w-8 h-8 text-[#800000]" />,
    image: "/images/prefects/guild.png", // Using your existing guild image
    link: "/prefects",
    color: "bg-yellow-50"
  },
  {
    title: "Sports & Activities",
    description: "Building character and teamwork through diverse clubs and sports achievements.",
    icon: <Trophy className="w-8 h-8 text-[#800000]" />,
    image: "/images/sports-bg.jpg", // Add a relevant image here
    link: "/clubs",
    color: "bg-red-50"
  }
];

export default function SchoolHighlights() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Experience St. Joseph's</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Beyond the classroom, we offer a world of opportunities for growth, leadership, and discovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Image Area */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 ${item.color} opacity-20 z-10`} />
                {/* Fallback color box if image is missing, or use Next Image */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    {/* Placeholder for real images - replace src with item.image */}
                     <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        // Handle error if image doesn't exist yet
                        onError={(e) => { e.currentTarget.style.display = 'none' }}
                     />
                     <div className="z-0 absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400">
                        {item.icon}
                     </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-4 p-3 bg-gray-50 rounded-lg w-fit group-hover:bg-[#800000] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-6 flex-1">{item.description}</p>
                
                <Link href={item.link} className="inline-flex items-center text-[#800000] font-bold group-hover:translate-x-2 transition-transform">
                  Read More <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}