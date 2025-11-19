// app/about/page.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import SchoolImage from "@/public/school-hero-image.png"; 
import { EyeIcon, RocketLaunchIcon, MusicalNoteIcon, UserGroupIcon } from "@heroicons/react/24/outline";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Page Content */}
      <div className="pt-20">
        
        {/* 1. Header Section */}
        <div className="relative h-[300px] md:h-[400px] w-full">
          <Image
            src={SchoolImage}
            alt="St. Joseph's Girls' School"
            layout="fill"
            objectFit="cover"
            className="opacity-40" 
            priority
          />
          {/* Background eka Maroon gradient ekak kala */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-red-900 bg-opacity-70 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center hero-text-shadow drop-shadow-lg">
              About Our School
            </h1>
          </div>
        </div>

        {/* 2. Main Content Area */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          
          {/* History Section */}
          <div className="max-w-4xl mx-auto mb-20 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 border-b-4 border-yellow-400 inline-block pb-2">
              Our History
            </h2>
            <div className="prose prose-lg text-gray-700 mx-auto md:mx-0">
              <p className="leading-relaxed mb-6">
                St. Joseph’s Girls’ School, Nugegoda was established in 1930. 
                The school was inaugurated by the then Archbishop of Colombo, 
                His Grace Rev. Dr. Peter Marque. From humble beginnings, we have grown 
                into a prestigious institution known for academic brilliance and discipline.
              </p>
              <p className="leading-relaxed">
                Initially, the school was under the administration of the 
                Sisters of Apostolic Carmel. In 1935, the administration 
                was handed over to the Franciscan Missionaries of Mary, who shaped 
                the spiritual and educational foundation of the school.
              </p>
            </div>
          </div>

          {/* Vision & Mission Section (UPDATED TEXT) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            
            {/* Our Vision (Corrected) */}
            <Card className="shadow-xl border-t-4 border-t-primary hover:scale-105 transition-transform duration-300 h-full">
              <CardHeader className="flex-row items-center space-x-4 pb-2">
                <div className="p-3 bg-red-50 rounded-full">
                  <EyeIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl md:text-3xl text-primary font-bold">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "To gift to the nation, a generation of energetic and well disciplined women, 
                  who are capable of facing the new challenges of life."
                </p>
              </CardContent>
            </Card>

            {/* Our Mission (Corrected) */}
            <Card className="shadow-xl border-t-4 border-t-yellow-500 hover:scale-105 transition-transform duration-300 h-full">
              <CardHeader className="flex-row items-center space-x-4 pb-2">
                <div className="p-3 bg-yellow-50 rounded-full">
                  <RocketLaunchIcon className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl md:text-3xl text-primary font-bold">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "Through integrated academic, co-curricular and extracurricular activities, 
                  moulding a mentally and physically balanced generation of women; able to 
                  face the challenges of multi religious and racial society and serve the 
                  humanity fruitfully with a universal spirit of peace and harmony."
                </p>
              </CardContent>
            </Card>
          </div>

          {/* School Anthem Section */}
          <div className="mb-24 bg-primary rounded-3xl p-8 md:p-16 shadow-2xl text-center text-white relative overflow-hidden">
            <MusicalNoteIcon className="absolute top-4 right-4 h-40 w-40 text-white opacity-5 pointer-events-none" />
            
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-yellow-400 font-serif">
              School Anthem
            </h2>
            <div className="max-w-3xl mx-auto text-lg md:text-2xl leading-loose font-serif tracking-wide">
              <p>
                "Hail St. Joseph’s, Hail our Alma Mater<br/>
                Guide of our youth and light of our way,<br/>
                Leading us onwards, higher and higher,<br/>
                To knowledge and virtue, day by day."
              </p>
            </div>
          </div>

          {/* Administration / Staff Section */}
          <div className="text-center max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <UserGroupIcon className="h-10 w-10 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Our Administration
              </h2>
            </div>
            <p className="text-gray-600 text-lg mb-12">
              Guided by a dedicated team of professionals committed to excellence.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-gray-50 border-none shadow-sm hover:shadow-md transition-all">
                  <div className="h-48 bg-gray-200 w-full object-cover rounded-t-xl flex items-center justify-center text-gray-400">
                    <span>Photo Coming Soon</span>
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-xl text-gray-800">Administration Member</h3>
                    <p className="text-primary font-medium">Position Title</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}