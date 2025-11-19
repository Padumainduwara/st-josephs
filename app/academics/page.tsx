// app/academics/page.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import SchoolImage from "@/public/school-hero-image.png"; 
import { BookOpenIcon, PencilSquareIcon, BeakerIcon, MusicalNoteIcon } from "@heroicons/react/24/solid";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AcademicsPage() {
  return (
    <main className="bg-white">
      <Navbar />

      <div className="pt-20">
        
        {/* Header Section */}
        <div className="relative h-[300px] md:h-[400px] w-full">
          <Image
            src={SchoolImage}
            alt="Academics at St. Joseph's"
            layout="fill"
            objectFit="cover"
            className="opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-red-900 bg-opacity-70 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center hero-text-shadow">
              Our Academics
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 border-b-4 border-yellow-400 inline-block pb-2">
              A Foundation for Life
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our curriculum is designed to challenge, inspire, and prepare students 
              for a future of success. We blend rigorous academics with moral education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            
            {/* Our Curriculum */}
            <Card className="shadow-lg h-full border-l-4 border-l-primary">
              <CardHeader className="flex-row items-center space-x-4">
                <BookOpenIcon className="h-10 w-10 text-primary flex-shrink-0" />
                <CardTitle className="text-3xl font-bold text-primary">
                  Our Curriculum
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  We follow the Sri Lankan National Curriculum in both Sinhala and English mediums.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg marker:text-primary">
                  <li>Primary School (Grade 1-5)</li>
                  <li>Middle School (Grade 6-9)</li>
                  <li>O/Level (Grade 10-11)</li>
                  <li>A/Level (Arts, Commerce, Science Streams)</li>
                </ul>
              </CardContent>
            </Card>

            {/* Examinations */}
            <Card className="shadow-lg h-full border-l-4 border-l-primary">
              <CardHeader className="flex-row items-center space-x-4">
                <PencilSquareIcon className="h-10 w-10 text-primary flex-shrink-0" />
                <CardTitle className="text-3xl font-bold text-primary">
                  Examinations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Students are prepared for key national examinations through a 
                  structured system of assessments.
                </p>
                 <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg marker:text-primary">
                  <li>Grade 5 Scholarship Examination</li>
                  <li>G.C.E. Ordinary Level (O/L)</li>
                  <li>G.C.E. Advanced Level (A/L)</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Subject Streams */}
          <div className="max-w-6xl mx-auto">
             <h3 className="text-3xl font-bold text-primary mb-8 text-center">
              A/Level Streams
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Science Stream */}
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-primary">
                <CardHeader className="flex-row items-center space-x-4">
                  <div className="bg-red-50 p-3 rounded-full">
                    <BeakerIcon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-semibold text-primary">
                    Science Stream
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800 mt-2 text-base">
                    Physics, Chemistry, Biology, and Combined Mathematics.
                  </p>
                </CardContent>
              </Card>

              {/* Commerce Stream */}
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-primary">
                <CardHeader className="flex-row items-center space-x-4">
                  <div className="bg-red-50 p-3 rounded-full">
                    <BookOpenIcon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-semibold text-primary">
                    Commerce Stream
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800 mt-2 text-base">
                    Accounting, Business Studies, and Economics.
                  </p>
                </CardContent>
              </Card>

              {/* Arts Stream */}
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-primary">
                <CardHeader className="flex-row items-center space-x-4">
                  <div className="bg-red-50 p-3 rounded-full">
                    <MusicalNoteIcon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-semibold text-primary">
                    Arts Stream
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800 mt-2 text-base">
                    Languages, Social Sciences, and Aesthetic subjects.
                  </p>
                </CardContent>
              </Card>
              
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}