"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { 
  UserGroupIcon, 
  SparklesIcon,
  ArrowTopRightOnSquareIcon
} from "@heroicons/react/24/solid";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// --- CLUB DATA ---
// Images are mapped to the folder: /public/images/clubs/
const clubs = [
  {
    title: "Astronomy Club",
    image: "/images/clubs/astronomy.jpg",
    category: "Science & Tech",
    description: "Exploring the universe, organizing observation camps, and studying celestial bodies.",
  },
  {
    title: "Chess Club",
    image: "/images/clubs/chess.jpg",
    category: "Sports & Strategy",
    description: "Mastering strategy, hosting tournaments, and building critical thinking skills.",
  },
  {
    title: "Environment Society",
    image: "/images/clubs/environment.jpg",
    category: "Nature",
    description: "Promoting sustainability, green projects, and protecting our natural heritage.",
  },
  {
    title: "ICT Society",
    image: "/images/clubs/it.jpg",
    category: "Technology",
    description: "Empowering students with digital literacy, coding skills, and tech innovation.",
  },
  {
    title: "Media Unit",
    image: "/images/clubs/media.jpg",
    category: "Media",
    description: "The voice of the school. Covering events, announcing, and photography.",
  },
  {
    title: "Saukyadana Unit",
    image: "/images/clubs/saukyadana.jpg",
    category: "Health",
    description: "First aid services, health awareness campaigns, and community care.",
  },
  {
    title: "Science Society",
    image: "/images/clubs/science.jpg",
    category: "Academic",
    description: "Fostering scientific curiosity through experiments, exhibitions, and research.",
  },
  {
    title: "Web Development Team",
    image: "/images/clubs/web.jpg",
    category: "Technology",
    description: "The creators behind the digital presence of St. Joseph's Girls' School.",
  },
];

export default function ClubsPage() {
  return (
    <main className="overflow-x-hidden bg-gray-50 min-h-screen flex flex-col pt-[80px]">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden flex items-center justify-center">
        
        {/* 1. Background Image (Parallax) */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Using a general school image or specific activity image */}
          <Image
            src="/images/IMG_6162.JPG" 
            alt="Student Life"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* 2. OVERLAY: Deep Maroon Branding */}
        <div className="absolute inset-0 bg-[#500000]/95 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        
        {/* 3. HERO CONTENT */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl">
              Student Life & Clubs
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg md:text-2xl text-yellow-300 font-serif italic max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              &quot;A vibrant space to explore passions, build leadership, and create memories.&quot;
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

      {/* --- MAIN CONTENT --- */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block p-3 bg-brand-primary/10 rounded-full mb-6">
             <UserGroupIcon className="h-8 w-8 text-brand-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
            Active Clubs & Societies
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Beyond the classroom, St. Joseph&apos;s offers a wide range of co-curricular activities. 
            Our clubs provide students with opportunities to develop new skills, leadership qualities, 
            and teamwork.
          </p>
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {clubs.map((club, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-300 border-none shadow-md group bg-white">
                
                {/* Image Container */}
                {/* White background added to handle transparent/dark logos uniformly */}
                <div className="relative h-64 w-full bg-white flex items-center justify-center p-6 border-b border-gray-100 group-hover:bg-gray-50 transition-colors">
                  <div className="relative h-full w-full">
                    <Image
                      src={club.image}
                      alt={club.title}
                      fill
                      className="object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Category Badge - FIXED COLOR ISSUE HERE */}
                  <div className="absolute top-4 right-4">
                     <Badge className="bg-black/80 hover:bg-black text-white shadow-md backdrop-blur-md border border-white/20">
                       {club.category}
                     </Badge>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
                    {club.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-grow">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {club.description}
                  </p>
                </CardContent>

                <CardFooter className="pt-0 pb-6">
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-200 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-primary/5 transition-all group-hover:border-brand-primary"
                  >
                    <span className="mr-2">View Activities</span>
                    <SparklesIcon className="h-4 w-4" />
                  </Button>
                </CardFooter>

              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 max-w-4xl mx-auto bg-gradient-to-r from-gray-200 to-gray-300 rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
           
           <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 relative z-10">
             Want to start a new club?
           </h3>
           <p className="text-black mb-8 max-w-2xl mx-auto relative z-10">
             Students are encouraged to take initiative. If you have a passion that isn&apos;t represented, 
             speak to the Deputy Principal about forming a new society.
           </p>
           <Button className="bg-[#800000] hover:bg-[#600000] text-white font-bold px-8 py-6 text-lg rounded-xl shadow-lg relative z-10">
             Contact Administration <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
           </Button>
        </div>

      </div>

      <Footer />
    </main>
  );
}