// app/admission/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link"; // Link import karanna
import SchoolImage from "@/public/school-hero-image.png";
import { CheckCircleIcon, DocumentTextIcon, UserGroupIcon } from "@heroicons/react/24/outline";

// Aluthen import kala
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
      <div className="pt-20"> {/* Navbar Offset */}
        
        {/* 1. Header Section (Wenasak nehe) */}
        <div className="relative h-[300px] md:h-[400px] w-full">
          {/* ... (Image code eka thiyenawa) ... */}
          <Image
            src={SchoolImage}
            alt="Admissions at St. Joseph's"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center hero-text-shadow">
              Admissions
            </h1>
          </div>
        </div>

        {/* 2. Main Content Area */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          
          {/* Introduction (Wenasak nehe) */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            {/* ... (Text eka thiyenawa) ... */}
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Join Our Family
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We welcome applications from students who are eager to learn, grow, and 
              contribute to our vibrant school community. Discover the process, 
              requirements, and important dates for joining St. Joseph's Girls' School.
            </p>
          </div>

          {/* Admission Process Steps (ALUTH CARD WALIN) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            
            {/* Step 1: Application */}
            <Card className="bg-gray-50 text-center transition-all duration-300 hover:shadow-xl">
              <CardHeader className="items-center">
                <DocumentTextIcon className="h-16 w-16 text-blue-600 mb-4" />
                <CardTitle className="text-2xl font-semibold text-blue-800 mb-2">
                  1. Application
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Submit the completed application form along with all required documents 
                  during the specified application period.
                </p>
              </CardContent>
            </Card>

            {/* Step 2: Interview */}
            <Card className="bg-gray-50 text-center transition-all duration-300 hover:shadow-xl">
              <CardHeader className="items-center">
                <UserGroupIcon className="h-16 w-16 text-blue-600 mb-4" />
                <CardTitle className="text-2xl font-semibold text-blue-800 mb-2">
                  2. Interview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Shortlisted candidates will be invited for an interview with our 
                  admissions panel along with their parents.
                </p>
              </CardContent>
            </Card>

            {/* Step 3: Acceptance */}
            <Card className="bg-gray-50 text-center transition-all duration-300 hover:shadow-xl">
              <CardHeader className="items-center">
                <CheckCircleIcon className="h-16 w-16 text-blue-600 mb-4" />
                <CardTitle className="text-2xl font-semibold text-blue-800 mb-2">
                  3. Acceptance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Successful applicants will receive an official offer of admission. 
                  Welcome to St. Joseph's!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key Dates & Downloads (ALUTH BUTTON EKEN) */}
          <div className="max-w-4xl mx-auto bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg shadow-lg">
             <h3 className="text-3xl font-bold text-blue-900 mb-6">
              Important Information
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Admissions for the 2026 academic year are now <strong>closed</strong>. 
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Information regarding the next intake will be posted here and in national newspapers. 
              Please check back later for updates.
            </p>
            
            {/* ALUTH SHADCN BUTTON EKA (DISABLED) */}
            <Button asChild size="lg" disabled className="text-lg opacity-50 cursor-not-allowed">
              <Link href="#">
                Download Application Form (Not Available)
              </Link>
            </Button>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}