"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { 
  UserGroupIcon, 
  BuildingOfficeIcon, 
  BanknotesIcon,
  AcademicCapIcon,
  UserIcon,
  PencilSquareIcon,
  StarIcon
} from "@heroicons/react/24/solid";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// --- SDS COMMITTEE DATA ---
const sdsMembers = [
  { name: "Mr. Dulip De Silva", role: "Secretary", year: "2023 - 2024", highlight: true, icon: PencilSquareIcon, color: "from-yellow-400 to-orange-500" },
  { name: "Mr. Naveen Fernando", role: "Committee Member", year: "2023 - 2024", icon: UserIcon, color: "from-blue-400 to-blue-600" },
  { name: "Mrs. Manjula Wasanthi", role: "Committee Member", year: "2023 - 2024", icon: UserIcon, color: "from-purple-400 to-purple-600" },
  { name: "Mrs. Manomi Lasika", role: "Committee Member", year: "2023 - 2024", icon: UserIcon, color: "from-green-400 to-teal-500" },
  { name: "Mrs. Thushanthi Kapuarachchi", role: "Committee Member", year: "2023 - 2024", icon: UserIcon, color: "from-pink-400 to-rose-500" },
  { name: "Mrs. Nilusha Kumari", role: "Committee Member", year: "2023 - 2024", icon: UserIcon, color: "from-indigo-400 to-indigo-600" },
  { name: "Mrs. Liyoni Chandrasekara", role: "Committee Member", year: "2023 - 2024", icon: UserIcon, color: "from-cyan-400 to-blue-500" },
  { name: "Mrs. Ishani Maddumage", role: "Committee Member", year: "2023 - 2024", icon: UserIcon, color: "from-orange-400 to-red-500" },
  { name: "Mr. Ahamed", role: "Committee Member", year: "2023 - 2024", icon: UserIcon, color: "from-teal-400 to-emerald-600" },
];

export default function SDSPage() {
  return (
    <main className="overflow-x-hidden bg-gray-50 min-h-screen flex flex-col pt-[80px]">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden flex items-center justify-center">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/images/IMG_6110.JPG" 
            alt="School Development Society"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-[#500000]/95 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl">
              School Development Society
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg md:text-2xl text-yellow-300 font-serif italic max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              "Building a better future for our children, together."
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
        
        {/* Intro & Objectives */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
                <div className="inline-block p-3 bg-brand-primary/10 rounded-full mb-6">
                    <UserGroupIcon className="h-8 w-8 text-brand-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Role & Vision
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The SDS is a vital body comprising parents, teachers, and well-wishers dedicated to the 
                  upliftment of St. Joseph's Girls' School. We work hand-in-hand with the administration 
                  to improve infrastructure, support student welfare, and organize fundraising events.
                </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
                <Card className="bg-white border border-red-100 hover:shadow-xl transition-all group hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                        <BuildingOfficeIcon className="h-10 w-10 text-brand-primary mb-3 group-hover:scale-110 transition-transform" />
                        <h3 className="font-bold text-brand-primary">Infrastructure</h3>
                        <p className="text-sm text-gray-600 mt-1">Developing school facilities</p>
                    </CardContent>
                </Card>
                <Card className="bg-white border border-yellow-100 hover:shadow-xl transition-all group hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                        <BanknotesIcon className="h-10 w-10 text-yellow-600 mb-3 group-hover:scale-110 transition-transform" />
                        <h3 className="font-bold text-yellow-700">Fundraising</h3>
                        <p className="text-sm text-gray-600 mt-1">Supporting school projects</p>
                    </CardContent>
                </Card>
                <Card className="bg-white border border-blue-100 hover:shadow-xl transition-all sm:col-span-2 group hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                        <AcademicCapIcon className="h-10 w-10 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                        <h3 className="font-bold text-blue-700">Student Welfare</h3>
                        <p className="text-sm text-gray-600 mt-1">Enhancing the learning environment</p>
                    </CardContent>
                </Card>
            </motion.div>
        </div>

        {/* --- COMMITTEE MEMBERS LIST --- */}
        <div className="mb-24">
            {/* Added mb-12 here to create space between Title and Cards */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-wide flex flex-col md:flex-row items-center justify-center gap-y-3 md:gap-x-4 mb-12">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sdsMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                    >
                        <Card className={`h-full bg-white border shadow-md hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 overflow-hidden ${member.highlight ? 'border-t-4 border-t-yellow-500' : 'border-t-4 border-t-brand-primary'}`}>
                            <CardContent className="p-6 flex flex-col items-center text-center relative">
                                
                                {/* Colorful Gradient Avatar Background */}
                                <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-4 shadow-lg bg-gradient-to-br ${member.color} text-white transform group-hover:scale-110 transition-transform duration-500`}>
                                    {/* Icon or Initials */}
                                    <member.icon className="h-10 w-10 opacity-90" />
                                </div>
                                
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">
                                    {member.name}
                                </h3>
                                
                                <Badge variant="outline" className={`mb-3 ${member.highlight ? 'bg-yellow-50 text-yellow-800 border-yellow-200' : 'bg-gray-50 text-gray-700 border-gray-200'}`}>
                                    {member.role}
                                </Badge>
                                
                                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                                    Term: {member.year}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}