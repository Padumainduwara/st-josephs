// app/about/page.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import SchoolImage from "@/public/school-hero-image.png"; 
import { EyeIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

// shadcn/ui Card components
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
      <div className="pt-20"> {/* Navbar Offset */}
        
        {/* 1. Header Section */}
        <div className="relative h-[300px] md:h-[400px] w-full">
          <Image
            src={SchoolImage}
            alt="St. Joseph's Girls' School"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center hero-text-shadow">
              About Our School
            </h1>
          </div>
        </div>

        {/* 2. Main Content Area */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          
          {/* History Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center">
              Our History
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              St. Joseph’s Girls’ School, Nugegoda was established in 1930. 
              The school was inaugurated by the then Archbishop of Colombo, 
              His Grace Rev. Dr. Peter Marque.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Initially, the school was under the administration of the 
              Sisters of Apostolic Carmel. In 1935, the administration 
              was handed over to the Franciscan Missionaries of Mary...
            </p>
          </div>

          {/* Vision & Mission Section (ALUTH CARD WALIN) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Our Vision */}
            <Card className="shadow-lg">
              <CardHeader className="flex-row items-center space-x-4">
                <EyeIcon className="h-10 w-10 text-blue-600" />
                <CardTitle className="text-3xl text-blue-800">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed">
                  "To create a home and a school where Christian values 
                  are fostered, and to empower our students to be 
                  intellectually competent, morally upright, 
                  and socially responsible citizens."
                </p>
              </CardContent>
            </Card>

            {/* Our Mission */}
            <Card className="shadow-lg">
              <CardHeader className="flex-row items-center space-x-4">
                <RocketLaunchIcon className="h-10 w-10 text-blue-600" />
                <CardTitle className="text-3xl text-blue-800">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed">
                  "To provide an integral education that is 
                  intellectually, spiritually, physically, and 
                  socially formative. We strive to create a nurturing 
                  environment where every student can discover and 
                  develop her unique talents."
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}