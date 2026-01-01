"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { 
  UserGroupIcon, 
  CalendarDaysIcon, 
  HeartIcon,
  StarIcon,
  SparklesIcon
} from "@heroicons/react/24/solid";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// --- OGA COMMITTEE DATA ---
const committeeMembers = [
  // Top Board
  { 
    name: "Mrs. Trelene Fox", 
    role: "Vice President", 
    year: "2023 - 2024", 
    image: "/images/oba/trelene.jpg",
    highlight: true 
  },
  { 
    name: "Mrs. Sumedha Guneratne", 
    role: "Secretary", 
    year: "2023 - 2024", 
    image: "/images/oba/sumedha.jpg",
    highlight: true 
  },
  { 
    name: "Mrs. Leyoni Chandresekara", 
    role: "Assistant Secretary", 
    year: "2023 - 2024", 
    image: "/images/oba/leyoni.jpg",
    highlight: true 
  },
  { 
    name: "Mrs. Kumudu Jayawardana", 
    role: "Assistant Treasurer", 
    year: "2023 - 2024", 
    image: "/images/oba/kumudu.jpg",
    highlight: true 
  },
  
  // Committee Members
  { name: "Mrs. Eranga Perera", role: "Committee Member", year: "2023 - 2024", image: "/images/oba/eranga.jpg" },
  { name: "Mrs. Nadeesha Jayawardana", role: "Committee Member", year: "2023 - 2024", image: "/images/oba/nadeesha.jpg" },
  { name: "Mrs. Mitchelle De Kretser", role: "Committee Member", year: "2023 - 2024", image: "/images/oba/mitchelle.jpg" },
  { name: "Mrs. Gayathri Liyanage", role: "Committee Member", year: "2023 - 2024", image: "/images/oba/gayathri.jpg" },
  { name: "Mrs. Shamila Thushari Pallewela", role: "Committee Member", year: "2023 - 2024", image: "/images/oba/shamila.jpg" },
  { name: "Mrs. Ann Nishamane Fernando", role: "Committee Member", year: "2023 - 2024", image: "/images/oba/ann.jpg" },
  { name: "Mrs. Lakshika Ishani Maddumage", role: "Committee Member", year: "2023 - 2024", image: "/images/oba/lakshika.jpg" },
];

export default function AlumniPage() {
  return (
    <main className="overflow-x-hidden bg-gray-50 min-h-screen flex flex-col pt-[80px]">
      <Navbar />

      {/* --- HERO SECTION (Fixed & Animated) --- */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden flex items-center justify-center">
        
        {/* 1. Background Image with Zoom Effect */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/images/IMG_6162.JPG" 
            alt="Old Girls Association"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* 2. OVERLAY: Maroon Gradient */}
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
              Past Pupils' Association
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg md:text-2xl text-yellow-300 font-serif italic max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              "Once a Josephian, Always a Josephian."
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
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-block p-3 bg-brand-primary/10 rounded-full mb-6"
          >
             <UserGroupIcon className="h-8 w-8 text-brand-primary" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-brand-primary mb-6"
          >
            Connecting Generations
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
          >
            The St. Joseph's Girls' School Past Pupils' Association (OGA) plays a vital role 
            in the development of our alma mater. We are a community of proud alumni dedicated 
            to supporting the school's vision and fostering lifelong bonds.
          </motion.p>
        </div>

        {/* --- COMMITTEE SECTION --- */}
        <div className="mb-24">
            
            {/* UPDATED HEADER: Responsive Layout for Mobile/Tablet */}
            <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-wide flex flex-col md:flex-row items-center justify-center gap-y-3 md:gap-x-4">
                    {/* Icon - Top on mobile, Left on desktop */}
                    <StarIcon className="h-10 w-10 text-yellow-500 drop-shadow-sm" /> 
                    
                    {/* Text Container */}
                    <div className="flex flex-col md:flex-row items-center gap-y-1 md:gap-x-3">
                        <span>Executive Committee</span>
                        <span className="text-brand-primary font-extrabold text-2xl md:text-4xl">
                            2023 - 2024
                        </span>
                    </div>
                </h2>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {committeeMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className={`h-full bg-white transition-all duration-300 hover:shadow-2xl group overflow-hidden ${member.highlight ? 'border-t-4 border-t-yellow-500 shadow-lg' : 'border-t-4 border-t-brand-primary shadow-md'}`}>
                            
                            {/* Image Container */}
                            <div className="pt-8 pb-4 flex justify-center bg-gradient-to-b from-gray-50 to-white">
                                <div className={`relative w-32 h-32 rounded-full p-1 ${member.highlight ? 'bg-yellow-400' : 'bg-brand-primary'}`}>
                                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white bg-white">
                                        <Image 
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    {/* Decoration for highlighted members */}
                                    {member.highlight && (
                                        <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-white p-1.5 rounded-full border-2 border-white z-10">
                                            <SparklesIcon className="w-4 h-4" />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <CardContent className="text-center p-6 pt-2">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors min-h-[56px] flex items-center justify-center">
                                    {member.name}
                                </h3>
                                
                                <Badge className={`mb-3 px-3 py-1 ${member.highlight ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200' : 'bg-red-50 text-brand-primary hover:bg-red-100'}`}>
                                    {member.role}
                                </Badge>
                                
                                <p className="text-sm font-medium text-gray-500">
                                    Term: {member.year}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* --- EVENTS & INVOLVEMENT (Animated & Updated Layout) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Upcoming Events Card */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <Card className="h-full border-t-4 border-t-brand-primary hover:shadow-xl transition-all bg-white">
                    <CardHeader className="flex-row items-center space-x-4 pb-4 border-b border-gray-100">
                        <div className="bg-red-50 p-3 rounded-full">
                            <CalendarDaysIcon className="h-8 w-8 text-brand-primary"/>
                        </div>
                        <CardTitle className="text-2xl text-brand-primary font-bold">Upcoming Events</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <ul className="space-y-4">
                            <li className="border-b border-gray-100 pb-3 hover:bg-gray-50 p-2 rounded transition-colors cursor-pointer">
                                <h4 className="font-bold text-gray-800">Annual General Meeting 2025</h4>
                                <p className="text-sm text-gray-500 flex items-center mt-1">
                                    <span className="inline-block w-2 h-2 bg-brand-primary rounded-full mr-2"></span>
                                    March 15, 2025 | School Main Hall
                                </p>
                            </li>
                            <li className="border-b border-gray-100 pb-3 hover:bg-gray-50 p-2 rounded transition-colors cursor-pointer">
                                <h4 className="font-bold text-gray-800">"Back to School" Fiesta</h4>
                                <p className="text-sm text-gray-500 flex items-center mt-1">
                                    <span className="inline-block w-2 h-2 bg-brand-primary rounded-full mr-2"></span>
                                    May 20, 2025 | School Grounds
                                </p>
                            </li>
                            <li className="hover:bg-gray-50 p-2 rounded transition-colors cursor-pointer">
                                <h4 className="font-bold text-gray-800">Christmas Charity Drive</h4>
                                <p className="text-sm text-gray-500 flex items-center mt-1">
                                    <span className="inline-block w-2 h-2 bg-brand-primary rounded-full mr-2"></span>
                                    December 10, 2025
                                </p>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Get Involved Card */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <Card className="h-full border-t-4 border-t-yellow-500 hover:shadow-xl transition-all bg-white">
                    <CardHeader className="flex-row items-center space-x-4 pb-4 border-b border-gray-100">
                        <div className="bg-yellow-50 p-3 rounded-full">
                            <HeartIcon className="h-8 w-8 text-yellow-600"/>
                        </div>
                        <CardTitle className="text-2xl text-brand-primary font-bold">Get Involved</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700">
                            Your support helps us improve school facilities, support needy students, and organize memorable events.
                        </p>
                        <Button className="w-full bg-primary hover:bg-red-900 text-lg py-6">
                            Register as a Member
                        </Button>
                        <Button variant="outline" className="w-full text-lg py-6 border-primary text-primary hover:bg-red-50">
                            Update Your Details
                        </Button>
                    </CardContent>
                </Card>
            </motion.div>

        </div>

      </div>

      <Footer />
    </main>
  );
}