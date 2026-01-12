"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { 
  StarIcon, 
  TrophyIcon, 
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PrefectsPage() {
  // --- DEPUTY HEAD PREFECTS DATA ---
  const deputies = [
    { 
      name: "P. M. P. Gomes", 
      role: "Deputy Head Prefect", 
      image: "/images/prefects/gomes.jpg" // Make sure file name matches
    },
    { 
      name: "W. K. O. A. Perera", 
      role: "Deputy Head Prefect", 
      image: "/images/prefects/perera-wkoa.jpg" 
    },
    { 
      name: "S. K. Weerasinghe", 
      role: "Deputy Head Prefect", 
      image: "/images/prefects/weerasinghe.jpg" 
    },
  ];

  return (
    <main className="overflow-x-hidden bg-gray-50 min-h-screen flex flex-col pt-[80px]">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden flex items-center justify-center">
        
        {/* 1. Background Image */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/images/IMG_6160.JPG" 
            alt="Prefects Guild"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* 2. OVERLAY */}
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
              Prefects' Guild
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg md:text-2xl text-yellow-300 font-serif italic max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              "Leadership through Service, Loyalty, and Discipline."
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

        {/* --- TOP BOARD SECTION --- */}
        <div className="mb-24">
            
            {/* Header */}
            <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-wide flex flex-col md:flex-row items-center justify-center gap-y-3 md:gap-x-4">
                    <StarIcon className="h-10 w-10 text-yellow-500 drop-shadow-sm" /> 
                    <div className="flex flex-col md:flex-row items-center gap-y-1 md:gap-x-3">
                        <span>Top Board</span>
                        <span className="text-black font-extrabold text-2xl md:text-4xl">
                            2025 / 2026
                        </span>
                    </div>
                </h2>
            </div>

            {/* HEAD PREFECT - Center Stage */}
            <div className="flex justify-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full max-w-sm"
                >
                    <Card className="text-center bg-white border-t-8 border-t-[#800000] shadow-2xl hover:shadow-3xl transition-all p-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                            <StarIcon className="h-24 w-24 text-[#800000]" />
                        </div>
                        <CardContent className="pt-4 relative z-10">
                            {/* Head Prefect Image */}
                            <div className="w-40 h-40 mx-auto rounded-full mb-6 border-4 border-[#800000] shadow-xl overflow-hidden relative">
                                <Image 
                                    src="/images/prefects/yapa.jpg" // RENAME FILE TO THIS
                                    alt="V. G. D. Yapa"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">V. G. D. Yapa</h3>
                            <Badge className="bg-[#800000] hover:bg-[#600000] text-base px-6 py-1.5 rounded-full shadow-md">
                                Head Prefect
                            </Badge>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>

            {/* DEPUTY HEAD PREFECTS */}
            <h3 className="text-xl md:text-2xl font-bold text-center text-gray-700 mb-10 uppercase tracking-wide">
               Deputy Head Prefects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {deputies.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="text-center h-full bg-white border-t-4 border-t-yellow-500 shadow-lg hover:shadow-xl transition-all p-6 hover:-translate-y-2 duration-300">
                            <CardContent className="pt-4">
                                {/* Deputy Image */}
                                <div className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-yellow-400 shadow-md overflow-hidden relative">
                                    <Image 
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                <p className="text-yellow-700 font-semibold text-sm">{member.role}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* --- GAMES CAPTAINS SECTION --- */}
        <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 uppercase tracking-wide flex items-center justify-center gap-3">
               <TrophyIcon className="h-8 w-8 text-blue-600" /> 
               Games Captains
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                
                {/* Games Captain */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <Card className="text-center h-full bg-white border-t-4 border-t-blue-600 shadow-lg hover:shadow-xl transition-all p-6 hover:-translate-y-2">
                        <CardContent className="pt-4">
                            <div className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-blue-600 shadow-md overflow-hidden relative">
                                <Image 
                                    src="/images/prefects/perera-wasm.jpg" // RENAME FILE TO THIS
                                    alt="W. A. S. M. Perera"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">W. A. S. M. Perera</h3>
                            <Badge className="bg-blue-600 hover:bg-blue-700 text-sm py-1 px-4">Games Captain</Badge>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Vice Games Captain */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <Card className="text-center h-full bg-white border-t-4 border-t-blue-400 shadow-lg hover:shadow-xl transition-all p-6 hover:-translate-y-2">
                        <CardContent className="pt-4">
                             <div className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-blue-400 shadow-md overflow-hidden relative">
                                <Image 
                                    src="/images/prefects/jesni.jpg" // RENAME FILE TO THIS
                                    alt="W. A. D. M. S. Jesni"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">W. A. D. M. S. Jesni</h3>
                            <Badge className="bg-blue-500 hover:bg-blue-600 text-sm py-1 px-4">Vice Games Captain</Badge>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>

        {/* --- OATH SECTION --- */}
        <div className="mb-24">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <Card className="bg-white border-none shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#800000] via-yellow-400 to-[#800000]" />
                    <CardContent className="p-8 md:p-12 text-center">
                        <ShieldCheckIcon className="h-16 w-16 text-[#800000] mx-auto mb-6 opacity-80" />
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Prefects' Oath</h2>
                        
                        <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed font-serif italic max-w-4xl mx-auto">
                            <p>
                                "As a Prefect of St. Joseph's Girls School Nugegoda in Dehiwala division Piliyandala Zone Western Province, 
                                I promise on my honour to work for a strong and morally disciplined women leadership to face the new challenges of school, 
                                being loyal and trustworthy to the principal and to the teachers and work towards the betterment of the school."
                            </p>
                            <p>
                                "I devote to be an exemplary leader and lead others towards good leadership. 
                                And I promise to respect and protect the rules and regulations of the school."
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>

        {/* --- GUILD PHOTO --- */}
        <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 uppercase tracking-wide">
                Prefects' Guild
            </h2>
            <p className="text-black font-bold text-xl mb-8">2025 - 2026</p>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative w-full h-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100"
            >
                <Image 
                    src="/images/prefects/guild.png" 
                    alt="Prefects Guild Group Photo" 
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-700"
                />
                
                 <div className="absolute bottom-0 left-0 w-full p-4 text-white text-center pointer-events-none flex items-end justify-center bg-gradient-to-t from-black/50 to-transparent">
                    <p className="text-lg font-medium opacity-90 drop-shadow-md">Unity is Strength</p>
                </div>
            </motion.div>
        </div>

      </div>

      <Footer />
    </main>
  );
}