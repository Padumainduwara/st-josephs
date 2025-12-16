"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { UserIcon } from "@heroicons/react/24/solid";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

const StaffCard = ({ name, role, section }: { name: string, role: string, section?: string }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3 }}
  >
    <Card className="text-center hover:shadow-lg transition-all border-none shadow-md bg-white h-full">
      <CardContent className="pt-6">
        <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4 border-2 border-primary/20">
          <UserIcon className="h-12 w-12 text-gray-400" />
        </div>
        <h3 className="text-xl font-bold text-primary">{name}</h3>
        <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mt-1">{role}</p>
        {section && <p className="text-xs text-gray-500 mt-1">{section}</p>}
      </CardContent>
    </Card>
  </motion.div>
);

export default function StaffPage() {
  const [activeTab, setActiveTab] = useState("academic");

  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-16 container mx-auto px-4">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary text-center mb-8">
          Our Dedicated Staff
        </h1>

        {/* Custom Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-full shadow-md inline-flex">
            {["admin", "academic", "non-academic"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${
                  activeTab === tab 
                    ? "bg-primary text-white shadow-sm" 
                    : "text-gray-500 hover:text-primary hover:bg-gray-100"
                }`}
              >
                {tab === "non-academic" ? "Non-Academic" : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            
            {/* ADMINISTRATION TAB */}
            {activeTab === "admin" && (
              <motion.div 
                key="admin"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="max-w-4xl mx-auto"
              >
                <div className="flex flex-col items-center justify-center gap-8">
                  {/* Principal */}
                  <div className="w-full md:w-2/3">
                    <Card className="text-center shadow-2xl border-t-8 border-t-primary">
                      <CardContent className="pt-8 pb-8">
                        <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <UserIcon className="h-16 w-16 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary">Rev. Sr. Sujeewani Perera</h3>
                        <p className="text-lg font-medium text-gray-600">Principal</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    <StaffCard name="Mrs. Deputy One" role="Deputy Principal" section="Admin" />
                    <StaffCard name="Mrs. Deputy Two" role="Deputy Principal" section="Academics" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* ACADEMIC TAB */}
            {activeTab === "academic" && (
              <motion.div 
                key="academic"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Sectional Heads & Teachers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                   <StaffCard name="Mrs. Head Primary" role="Sectional Head" section="Primary" />
                   <StaffCard name="Mrs. Head Middle" role="Sectional Head" section="Grade 6-9" />
                   <StaffCard name="Mrs. Head Upper" role="Sectional Head" section="Grade 10-11" />
                   <StaffCard name="Mrs. Head AL" role="Sectional Head" section="A/L" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                   {Array.from({ length: 8 }).map((_, i) => (
                      <StaffCard key={i} name={`Teacher ${i+1}`} role="Teacher" />
                   ))}
                </div>
              </motion.div>
            )}

            {/* NON-ACADEMIC TAB */}
            {activeTab === "non-academic" && (
              <motion.div 
                key="non-academic"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Support Staff</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                   <StaffCard name="Mr. Office Clerk" role="Clerk" section="Office" />
                   <StaffCard name="Mr. Lab Assistant" role="Lab Assistant" section="Science Lab" />
                   <StaffCard name="Mrs. Library Asst" role="Librarian" section="Library" />
                   <StaffCard name="Mr. Security" role="Security" section="Gate" />
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </main>
  );
}