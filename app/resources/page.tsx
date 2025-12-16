"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowDownTrayIcon, AcademicCapIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";

export default function ResourcesPage() {
  return (
    <main className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-24 pb-12 md:pt-32 md:pb-16 container mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-8 md:mb-12">
          Student Zone & Resources
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
            {/* Exam Results Card */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-between h-full">
                <div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-yellow-100 p-3 rounded-full flex-shrink-0">
                            <AcademicCapIcon className="h-6 w-6 md:h-8 md:w-8 text-yellow-600"/>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-800">Exam Results</h2>
                    </div>
                    <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed">
                        Check your G.C.E. O/L and A/L results directly via the Department of Examinations official portal.
                    </p>
                </div>

                {/* Updated Button Section: Using Grid instead of Flex */}
                {/* grid-cols-1 (Mobile: Stacked) -> sm:grid-cols-2 (PC/Tablet: Side-by-Side 1 Row) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                    <Button asChild className="w-full bg-primary hover:bg-red-900 h-12 text-base">
                        <Link href="https://www.doenets.lk" target="_blank">
                            Check O/L Results
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 h-12 text-base">
                        <Link href="https://www.doenets.lk" target="_blank">
                            Check A/L Results
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Downloads Card */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                    <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                        <ArrowDownTrayIcon className="h-6 w-6 md:h-8 md:w-8 text-blue-600"/>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800">Downloads</h2>
                </div>
                
                <div className="space-y-3">
                    {[
                        "Grade 6-9 Term Test Schedule", 
                        "Grade 10 Assignment List", 
                        "School Application Form (2025)", 
                        "Past Papers - Science Stream"
                    ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center p-3 md:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer border border-transparent hover:border-gray-200 group">
                            <span className="text-gray-700 font-medium text-sm md:text-base truncate pr-4">
                                {item}
                            </span>
                            <ArrowDownTrayIcon className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0"/>
                        </div>
                    ))}
                </div>
            </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}