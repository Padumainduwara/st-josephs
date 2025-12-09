import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import SchoolImage from "@/public/school-hero-image.png"; 
import { BookOpenIcon, PencilSquareIcon, BeakerIcon, MusicalNoteIcon, ComputerDesktopIcon, PuzzlePieceIcon, ArrowDownTrayIcon, CalendarIcon } from "@heroicons/react/24/solid";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AcademicsPage() {
  return (
    <main className="bg-white">
      <Navbar />

      <div className="pt-20">
        
        {/* Header Section */}
        <div className="relative h-[400px] w-full">
          <Image
            src={SchoolImage}
            alt="Academics"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-red-900/80 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white text-center drop-shadow-2xl">
              Academic Excellence
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          
          {/* Intro */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Nurturing Wisdom & Character
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              St. Joseph's offers a comprehensive curriculum from Primary to Advanced Level, 
              ensuring every student reaches her full potential.
            </p>
          </div>

          {/* Primary & Middle School Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
             <Card className="bg-green-50 border-none hover:shadow-lg">
                <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                   <div className="bg-green-100 p-3 rounded-full">
                     <PuzzlePieceIcon className="h-8 w-8 text-green-700" />
                   </div>
                   <CardTitle className="text-2xl text-green-800">Primary Section (Grades 1-5)</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 leading-relaxed">
                   <p>
                     Our Primary section focuses on activity-based learning, fostering creativity, 
                     and building a strong foundation in literacy and numeracy. We create a 
                     loving environment where every child feels safe to explore.
                   </p>
                   <ul className="mt-4 list-disc list-inside font-medium text-green-900">
                     <li>English, Sinhala, Tamil, Math, Environment</li>
                     <li>Religious Education</li>
                     <li>Aesthetic Activities</li>
                   </ul>
                </CardContent>
             </Card>

             <Card className="bg-orange-50 border-none hover:shadow-lg">
                <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                   <div className="bg-orange-100 p-3 rounded-full">
                     <PencilSquareIcon className="h-8 w-8 text-orange-700" />
                   </div>
                   <CardTitle className="text-2xl text-orange-800">Middle School (Grades 6-9)</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 leading-relaxed">
                   <p>
                     The Middle School acts as a bridge, introducing subject-specific learning 
                     and critical thinking. Students are encouraged to participate in clubs 
                     and sports alongside their studies.
                   </p>
                   <ul className="mt-4 list-disc list-inside font-medium text-orange-900">
                     <li>Science & Mathematics</li>
                     <li>Information Technology</li>
                     <li>Life Skills & Civics</li>
                   </ul>
                </CardContent>
             </Card>
          </div>

          {/* A/L Streams Section */}
          <h3 className="text-3xl font-bold text-center text-primary mb-12">Advanced Level Streams</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
             {/* Science */}
             <Card className="hover:shadow-2xl transition-all duration-300 border-t-4 border-t-blue-500 group">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-4 rounded-full mb-4 group-hover:bg-blue-500 transition-colors">
                    <BeakerIcon className="h-8 w-8 text-blue-600 group-hover:text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-800">Science Stream</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  Biological & Physical Science, combined with state-of-the-art labs.
                </CardContent>
             </Card>

             {/* Commerce */}
             <Card className="hover:shadow-2xl transition-all duration-300 border-t-4 border-t-yellow-500 group">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="bg-yellow-100 p-4 rounded-full mb-4 group-hover:bg-yellow-500 transition-colors">
                    <BookOpenIcon className="h-8 w-8 text-yellow-700 group-hover:text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-800">Commerce Stream</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  Business Studies, Accounting, and Economics for future leaders.
                </CardContent>
             </Card>

             {/* Arts */}
             <Card className="hover:shadow-2xl transition-all duration-300 border-t-4 border-t-purple-500 group">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="bg-purple-100 p-4 rounded-full mb-4 group-hover:bg-purple-500 transition-colors">
                    <MusicalNoteIcon className="h-8 w-8 text-purple-600 group-hover:text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-800">Arts Stream</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  Languages, Humanities, and Aesthetic subjects fostering creativity.
                </CardContent>
             </Card>
          </div>

          {/* Student Resources / Downloads Section (NEW) */}
          <div className="mb-24">
            <h3 className="text-3xl font-bold text-center text-primary mb-12">Student Resources</h3>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Download Item 1 */}
                <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm">
                  <CalendarIcon className="h-10 w-10 text-primary mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">School Calendar 2025</h4>
                    <p className="text-sm text-gray-500 mb-4">Term dates, holidays, and major events.</p>
                    <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                      <ArrowDownTrayIcon className="h-4 w-4 mr-2" /> Download PDF
                    </Button>
                  </div>
                </div>

                {/* Download Item 2 */}
                <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm">
                  <BookOpenIcon className="h-10 w-10 text-primary mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">Book List 2025</h4>
                    <p className="text-sm text-gray-500 mb-4">Required textbooks for Grades 1-13.</p>
                    <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                      <ArrowDownTrayIcon className="h-4 w-4 mr-2" /> Download List
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Library Section */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-inner">
            <h3 className="text-3xl font-bold text-primary mb-10 text-center">Learning Facilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h4 className="text-2xl font-semibold text-gray-800">Modern Library Complex</h4>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our library is the heart of knowledge at St. Joseph's. Stocked with a vast collection of books, reference materials, and digital resources.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <BookOpenIcon className="h-5 w-5 text-primary mr-3" /> Extensive Book Collection
                  </li>
                  <li className="flex items-center text-gray-700">
                    <ComputerDesktopIcon className="h-5 w-5 text-primary mr-3" /> Digital Access Points
                  </li>
                  <li className="flex items-center text-gray-700">
                    <PencilSquareIcon className="h-5 w-5 text-primary mr-3" /> Dedicated Study Areas
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg transform translate-y-4">
                   <Image src="/images/IMG_6152.JPG" alt="Library Books" layout="fill" objectFit="cover" />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                   <Image src="/images/IMG_6155.JPG" alt="Library Interior" layout="fill" objectFit="cover" />
                </div>
                <div className="relative h-48 col-span-2 rounded-xl overflow-hidden shadow-lg">
                   <Image src="/images/IMG_6154.JPG" alt="Library Tables" layout="fill" objectFit="cover" />
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