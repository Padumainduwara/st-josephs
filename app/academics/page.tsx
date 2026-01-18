"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { 
  BookOpenIcon, 
  PencilSquareIcon, 
  BeakerIcon, 
  MusicalNoteIcon, 
  ComputerDesktopIcon, 
  PuzzlePieceIcon, 
  ArrowDownTrayIcon, 
  CalendarIcon,
  CalculatorIcon,
  BriefcaseIcon,
  LanguageIcon,
  FilmIcon
} from "@heroicons/react/24/solid";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function AcademicsPage() {
  return (
    <main className="overflow-x-hidden bg-gray-50 min-h-screen flex flex-col pt-[80px]">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <div className="relative h-[450px] md:h-[550px] w-full overflow-hidden flex items-center justify-center">
        
        {/* 1. Background Image */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/images/IMG_6152.JPG" 
            alt="Academic Excellence"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* 2. OVERLAY */}
        <div className="absolute inset-0 bg-[#500000]/95 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        
        {/* 3. HERO CONTENT */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl">
              Academic Excellence
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg md:text-2xl lg:text-3xl text-yellow-300 font-serif italic max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              "Nurturing Wisdom & Character to achieve full potential."
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
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
            A Comprehensive Curriculum
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
             From Grade 6 to Grade 13, our dedicated teachers ensure a continuous education journey, building a strong foundation for higher education and life.
          </p>
        </div>

        {/* --- 1. MIDDLE SECTION (Grade 6-9) --- */}
        <div className="mb-20">
            <Card className="bg-white border-l-4 border-l-orange-500 shadow-xl overflow-hidden">
              <CardHeader className="bg-orange-50/50 pb-6 border-b border-orange-100">
                  <div className="flex items-center gap-4">
                     <div className="bg-orange-100 p-3 rounded-full">
                        <PuzzlePieceIcon className="h-8 w-8 text-orange-600" />
                     </div>
                     <div>
                        <CardTitle className="text-2xl md:text-3xl text-gray-900">Middle Section</CardTitle>
                        <p className="text-orange-700 font-medium">Grade 6 - Grade 9</p>
                     </div>
                  </div>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                  <p className="text-gray-700 leading-relaxed text-lg mb-8">
                    At this stage, a good foundation is being built for secondary education. Studies are conducted in the following subjects:
                  </p>
                  
                  {/* Subjects Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      "Sinhala", "Religion (Catholicism, Christianity, Buddhism, Islam)", "English", 
                      "History", "Science", "Mathematics", 
                      "PTS", "Tamil", "Civics Education", "Geography", "Health", 
                      "ICT", "Aesthetic Subjects (Dancing, Drama, Art, Music)"
                    ].map((subject, idx) => (
                       <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-orange-50 transition-colors border border-gray-100">
                          <div className="h-2 w-2 rounded-full bg-orange-400 shrink-0" />
                          <span className="text-gray-800 font-medium text-sm">{subject}</span>
                       </div>
                    ))}
                  </div>
              </CardContent>
            </Card>
        </div>

        {/* --- 2. SECONDARY SECTION (Grade 10-11) --- */}
        <div className="mb-20">
            <Card className="bg-white border-l-4 border-l-blue-600 shadow-xl overflow-hidden">
              <CardHeader className="bg-blue-50/50 pb-6 border-b border-blue-100">
                  <div className="flex items-center gap-4">
                     <div className="bg-blue-100 p-3 rounded-full">
                        <PencilSquareIcon className="h-8 w-8 text-blue-600" />
                     </div>
                     <div>
                        <CardTitle className="text-2xl md:text-3xl text-gray-900">Secondary Section</CardTitle>
                        <p className="text-blue-700 font-medium">Grade 10 - Grade 11 (O/L)</p>
                     </div>
                  </div>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                  <p className="text-gray-700 leading-relaxed text-lg mb-8">
                    At this stage, a good foundation is being built for higher education. Studies are conducted in the following subjects:
                  </p>

                  {/* Core Subjects */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <BookOpenIcon className="h-5 w-5 text-blue-600"/> Core Subjects
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                         {["Sinhala", "Religion", "English", "History", "Science", "Mathematics"].map((sub, i) => (
                             <Badge key={i} variant="secondary" className="px-2 py-2 text-sm md:text-base font-normal justify-center bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-100">
                                {sub}
                             </Badge>
                         ))}
                    </div>
                  </div>

                  {/* Baskets Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      
                      {/* Basket 1 */}
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                          <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                             <BriefcaseIcon className="h-5 w-5 text-gray-500"/> Basket 1
                          </h5>
                          <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                              <li>• Commerce</li>
                              <li>• Japanese (Language)</li>
                              <li>• Civics Education</li>
                              <li>• Geography</li>
                          </ul>
                      </div>

                      {/* Basket 2 */}
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                          <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                             <FilmIcon className="h-5 w-5 text-gray-500"/> Basket 2
                          </h5>
                          <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                              <li>• Dancing / Drama</li>
                              <li>• Eastern / Western Music</li>
                              <li>• Art</li>
                              <li>• English / Sinhala Literature</li>
                          </ul>
                      </div>

                      {/* Basket 3 */}
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                          <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                             <ComputerDesktopIcon className="h-5 w-5 text-gray-500"/> Basket 3
                          </h5>
                          <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                              <li>• ICT</li>
                              <li>• Health</li>
                              <li>• Agriculture</li>
                              <li>• Media / Home Science</li>
                          </ul>
                      </div>

                  </div>
              </CardContent>
            </Card>
        </div>

        {/* --- 3. ADVANCED LEVEL (Grade 12-13) --- */}
        <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">Advanced Level</h3>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
            Ensuring a continuous education of 13 years, our school conducts studies up to Grade 13 under the following streams.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            
            {/* Maths */}
            <Card className="bg-white border-t-4 border-t-red-600 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader className="bg-red-50/50 pb-4">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-red-100 p-4 rounded-full mb-3">
                    <CalculatorIcon className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Maths Stream</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                 <div className="flex flex-wrap justify-center gap-2">
                    {["Combined Mathematics", "Physics", "Chemistry", "ICT"].map((sub, i) => (
                        <Badge key={i} variant="secondary" className="bg-red-50 text-red-800 hover:bg-red-100 text-sm py-1.5 px-4 border border-red-100">
                            {sub}
                        </Badge>
                    ))}
                 </div>
              </CardContent>
            </Card>

            {/* Science */}
            <Card className="bg-white border-t-4 border-t-green-600 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader className="bg-green-50/50 pb-4">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-green-100 p-4 rounded-full mb-3">
                    <BeakerIcon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Science Stream</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                 <div className="flex flex-wrap justify-center gap-2">
                    {["Biology", "Physics", "Chemistry", "Agriculture"].map((sub, i) => (
                        <Badge key={i} variant="secondary" className="bg-green-50 text-green-800 hover:bg-green-100 text-sm py-1.5 px-4 border border-green-100">
                            {sub}
                        </Badge>
                    ))}
                 </div>
              </CardContent>
            </Card>

            {/* Commerce */}
            <Card className="bg-white border-t-4 border-t-yellow-500 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader className="bg-yellow-50/50 pb-4">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-yellow-100 p-4 rounded-full mb-3">
                    <BriefcaseIcon className="h-8 w-8 text-yellow-700" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Commerce Stream</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                 <div className="flex flex-wrap justify-center gap-2">
                    {["Economics", "Business Studies", "Accounting", "ICT"].map((sub, i) => (
                        <Badge key={i} variant="secondary" className="bg-yellow-50 text-yellow-800 hover:bg-yellow-100 text-sm py-1.5 px-4 border border-yellow-100">
                            {sub}
                        </Badge>
                    ))}
                 </div>
              </CardContent>
            </Card>

            {/* Arts */}
            <Card className="bg-white border-t-4 border-t-purple-600 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader className="bg-purple-50/50 pb-4">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-purple-100 p-4 rounded-full mb-3">
                    <LanguageIcon className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Arts Stream</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                 {/* LIST OF MANY ARTS SUBJECTS AS REQUESTED */}
                 <div className="flex flex-wrap justify-center gap-2">
                    {[
                        "History", "Geography", "Political Science", "Logic", 
                        "Economics", "Sinhala Literature", "English Literature", "Home Science",
                        "Drama", "Dancing", "Music (Eastern/Western)", 
                        "Media", "Religious", "Japanese"
                    ].map((sub, i) => (
                        <Badge key={i} variant="secondary" className="bg-purple-50 text-purple-800 hover:bg-purple-100 text-sm py-1.5 px-4 border border-purple-100">
                            {sub}
                        </Badge>
                    ))}
                 </div>
              </CardContent>
            </Card>

        </div>

        {/* --- STUDENT RESOURCES SECTION --- */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Student Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Calendar */}
              <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <CalendarIcon className="h-8 w-8 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800">School Calendar</h4>
                  <p className="text-sm text-gray-500 mb-4 mt-1">Term dates and major events.</p>
                  <Button variant="outline" className="text-brand-primary border-brand-primary hover:bg-brand-primary hover:text-white transition-colors">
                    <ArrowDownTrayIcon className="h-4 w-4 mr-2" /> Download PDF
                  </Button>
                </div>
              </div>

              {/* Book List */}
              <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <BookOpenIcon className="h-8 w-8 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800">Book List 2025</h4>
                  <p className="text-sm text-gray-500 mb-4 mt-1">Required textbooks for all grades.</p>
                  <Button variant="outline" className="text-brand-primary border-brand-primary hover:bg-brand-primary hover:text-white transition-colors">
                    <ArrowDownTrayIcon className="h-4 w-4 mr-2" /> Download List
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}