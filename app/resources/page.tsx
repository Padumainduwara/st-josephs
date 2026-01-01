"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowDownTrayIcon, 
  AcademicCapIcon, 
  DocumentTextIcon,
  ClipboardDocumentCheckIcon 
} from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ResourcesPage() {
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
          {/* Using a library or classroom image fits resources well */}
          <Image
            src="/images/IMG_6162.JPG" 
            alt="Student Resources"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* 2. OVERLAY: Deep Maroon to match brand */}
        <div className="absolute inset-0 bg-[#800000]/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        
        {/* 3. HERO CONTENT */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl">
              Student Zone & Resources
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg md:text-2xl text-yellow-300 font-serif italic max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              "Access your results, download learning materials, and stay updated."
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
        
        {/* Intro Text */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Academic Resources</h2>
          <p className="text-gray-600 text-lg">
            Everything you need to succeed in your academic journey is available here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            
            {/* 1. EXAM RESULTS CARD */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-full"
            >
              <Card className="h-full bg-white border-t-8 border-t-[#800000] shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-yellow-50 p-4 rounded-full flex-shrink-0 border border-yellow-100 group-hover:bg-yellow-100 transition-colors">
                            <AcademicCapIcon className="h-8 w-8 text-yellow-600"/>
                        </div>
                        <div>
                           <h2 className="text-2xl font-bold text-gray-900">Exam Results</h2>
                           <p className="text-sm text-yellow-600 font-medium">G.C.E. O/L & A/L</p>
                        </div>
                    </div>
                    
                    <p className="text-gray-600 mb-8 text-base leading-relaxed flex-grow">
                        Check your G.C.E. Ordinary Level and Advanced Level examination results directly via the Department of Examinations official government portal.
                    </p>

                    {/* Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                        <Button asChild className="w-full bg-[#800000] hover:bg-[#600000] h-12 text-base shadow-md">
                            <Link href="https://www.doenets.lk" target="_blank">
                                Check O/L Results
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="w-full border-[#800000] text-[#800000] hover:bg-[#800000]/5 h-12 text-base">
                            <Link href="https://www.doenets.lk" target="_blank">
                                Check A/L Results
                            </Link>
                        </Button>
                    </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 2. DOWNLOADS CARD */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-full"
            >
              <Card className="h-full bg-white border-t-8 border-t-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-blue-50 p-4 rounded-full flex-shrink-0 border border-blue-100 group-hover:bg-blue-100 transition-colors">
                            <ArrowDownTrayIcon className="h-8 w-8 text-blue-600"/>
                        </div>
                         <div>
                           <h2 className="text-2xl font-bold text-gray-900">Downloads</h2>
                           <p className="text-sm text-blue-600 font-medium">Learning Materials</p>
                        </div>
                    </div>
                    
                    <div className="space-y-3 flex-grow">
                        {[
                            { name: "Grade 6-9 Term Test Schedule", type: "PDF" }, 
                            { name: "Grade 10 Assignment List", type: "PDF" }, 
                            { name: "School Application Form (2025)", type: "DOC" }, 
                            { name: "Past Papers - Science Stream", type: "ZIP" }
                        ].map((item, i) => (
                            <div key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer border border-gray-100 hover:border-blue-200 group/item">
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <DocumentTextIcon className="h-5 w-5 text-gray-400 group-hover/item:text-blue-500 shrink-0" />
                                    <span className="text-gray-700 font-medium text-sm md:text-base truncate group-hover/item:text-blue-700 transition-colors">
                                        {item.name}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 shrink-0">
                                   <Badge variant="secondary" className="text-xs text-gray-500 bg-white border-gray-200">{item.type}</Badge>
                                   <ArrowDownTrayIcon className="h-5 w-5 text-gray-300 group-hover/item:text-blue-600 transition-colors"/>
                                </div>
                            </div>
                        ))}
                    </div>

                     <div className="mt-8 text-center">
                        <p className="text-sm text-gray-400 italic">More resources are updated weekly.</p>
                     </div>
                </CardContent>
              </Card>
            </motion.div>

        </div>

        {/* --- EXTRA SECTION: IMPORTANT LINKS (Optional but makes it 'Supiri') --- */}
        <div className="mt-20">
             <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Quick Access</h3>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {[
                    { name: "Ministry of Education", url: "https://moe.gov.lk/" },
                    { name: "E-Thaksalawa", url: "https://www.e-thaksalawa.moe.gov.lk/" },
                    { name: "Edex", url: "#" },
                    { name: "Nie.lk", url: "http://nie.lk/" }
                 ].map((link, idx) => (
                    <Button key={idx} variant="outline" asChild className="h-auto py-4 border-gray-200 hover:border-[#800000] hover:text-[#800000] bg-white">
                        <Link href={link.url} target="_blank" className="flex flex-col gap-1">
                            <span className="font-semibold">{link.name}</span>
                            <span className="text-xs text-gray-400 font-normal">External Link</span>
                        </Link>
                    </Button>
                 ))}
             </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}