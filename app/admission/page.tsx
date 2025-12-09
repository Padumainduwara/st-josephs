// app/admission/page.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link"; 
import SchoolImage from "@/public/school-hero-image.png";
import { CheckCircleIcon, DocumentTextIcon, UserGroupIcon } from "@heroicons/react/24/outline";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdmissionPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Page Content */}
      <div className="pt-20">
        
        {/* 1. Header Section (Maroon Gradient) */}
        <div className="relative h-[300px] md:h-[400px] w-full">
          <Image
            src={SchoolImage}
            alt="Admissions at St. Joseph's"
            layout="fill"
            objectFit="cover"
            className="opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-red-900 bg-opacity-70 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center hero-text-shadow">
              Admissions
            </h1>
          </div>
        </div>

        {/* 2. Main Content Area */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          
          {/* Introduction */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 border-b-4 border-yellow-400 inline-block pb-2">
              Join Our Family
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We welcome applications from students who are eager to learn, grow, and 
              contribute to our vibrant school community. Discover the process, 
              requirements, and important dates for joining St. Joseph's Girls' School.
            </p>
          </div>

          {/* Admission Process Steps (Maroon Icons) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            
            {/* Step 1: Application */}
            <Card className="bg-white text-center transition-all duration-300 hover:shadow-xl border-t-4 border-t-primary">
              <CardHeader className="items-center">
                <div className="p-4 bg-red-50 rounded-full mb-4">
                  <DocumentTextIcon className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary mb-2">
                  1. Application
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Submit the completed application form along with all required documents 
                  during the specified application period.
                </p>
              </CardContent>
            </Card>

            {/* Step 2: Interview */}
            <Card className="bg-white text-center transition-all duration-300 hover:shadow-xl border-t-4 border-t-yellow-400">
              <CardHeader className="items-center">
                <div className="p-4 bg-yellow-50 rounded-full mb-4">
                  <UserGroupIcon className="h-12 w-12 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary mb-2">
                  2. Interview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Shortlisted candidates will be invited for an interview with our 
                  admissions panel along with their parents.
                </p>
              </CardContent>
            </Card>

            {/* Step 3: Acceptance */}
            <Card className="bg-white text-center transition-all duration-300 hover:shadow-xl border-t-4 border-t-primary">
              <CardHeader className="items-center">
                <div className="p-4 bg-red-50 rounded-full mb-4">
                  <CheckCircleIcon className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary mb-2">
                  3. Acceptance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Successful applicants will receive an official offer of admission. 
                  Welcome to St. Joseph's!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key Dates & Downloads (Maroon Box) */}
          <div className="max-w-4xl mx-auto bg-primary text-white p-8 md:p-12 rounded-2xl shadow-2xl text-center">
             <h3 className="text-3xl font-bold mb-6 text-yellow-400">
              Important Information
            </h3>
            <p className="text-lg text-white/90 mb-4">
              Admissions for the 2026 academic year are now <strong>closed</strong>. 
            </p>
            <p className="text-lg text-white/90 mb-8">
              Information regarding the next intake will be posted here and in national newspapers. 
              Please check back later for updates.
            </p>
            
            <Button 
  asChild 
  size="lg" 
  disabled 
  className="text-lg bg-white text-primary hover:bg-gray-100 opacity-90 cursor-not-allowed shadow-md whitespace-normal h-auto py-4 text-center leading-tight"
>
  <Link href="#">
    Download Application Form
  </Link>
</Button>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}