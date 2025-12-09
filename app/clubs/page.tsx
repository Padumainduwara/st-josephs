import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import SchoolImage from "@/public/school-hero-image.png"; 
import { 
  AcademicCapIcon, PaintBrushIcon, MusicalNoteIcon, 
  MegaphoneIcon, HeartIcon, GlobeAltIcon, SparklesIcon, CubeIcon, StarIcon 
} from "@heroicons/react/24/outline";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ClubCard = ({ icon, title, description }: {
  icon: React.ReactNode,
  title: string,
  description: string
}) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-105 border-t-4 border-t-transparent hover:border-t-primary">
      <CardHeader className="flex-row items-center space-x-4">
        <div className="flex-shrink-0 bg-red-50 text-primary p-3 rounded-full">
          {icon}
        </div>
        <CardTitle className="text-xl font-semibold text-primary">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mt-1">{description}</p>
      </CardContent>
    </Card>
  );
};

export default function ClubsPage() {
  
  const clubs = [
    { title: "Girl Guides Association", description: "Building character and outdoor skills.", icon: <SparklesIcon className="h-6 w-6" /> },
    { title: "Red Cross Society", description: "Promoting humanitarian principles and community service.", icon: <HeartIcon className="h-6 w-6" /> },
    { title: "Interact Club", description: "Service and social club for young leaders.", icon: <GlobeAltIcon className="h-6 w-6" /> },
    { title: "Debaters' Council (S/E)", description: "Fostering critical thinking and public speaking.", icon: <MegaphoneIcon className="h-6 w-6" /> },
    { title: "Media Unit", description: "Covering school events and creative media production.", icon: <CubeIcon className="h-6 w-6" /> },
    { title: "Eastern Music & Dancing", description: "Celebrating traditional arts and culture.", icon: <MusicalNoteIcon className="h-6 w-6" /> },
    { title: "Western Music & Choir", description: "Developing musical talents and performance skills.", icon: <MusicalNoteIcon className="h-6 w-6" /> },
    { title: "Art Club", description: "Exploring creativity and visual expression.", icon: <PaintBrushIcon className="h-6 w-6" /> },
    { title: "Science Society", description: "Promoting innovation and scientific inquiry.", icon: <AcademicCapIcon className="h-6 w-6" /> },
    { title: "Commerce Society", description: "Exploring the world of business and finance.", icon: <AcademicCapIcon className="h-6 w-6" /> },
    { title: "IT Club", description: "Developing digital literacy and tech skills.", icon: <CubeIcon className="h-6 w-6" /> },
    { title: "Buddhist Society", description: "Fostering spiritual growth and cultural values.", icon: <SparklesIcon className="h-6 w-6" /> },
  ];

  return (
    <main className="bg-white">
      <Navbar />

      <div className="pt-20">
        
        {/* Header Section */}
        <div className="relative h-[300px] md:h-[400px] w-full">
          <Image
            src={SchoolImage}
            alt="Clubs at St. Joseph's"
            layout="fill"
            objectFit="cover"
            className="opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-red-900 bg-opacity-70 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center hero-text-shadow">
              Student Life
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          
          {/* Prefects' Guild Section (NEW) */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 border-b-4 border-yellow-400 inline-block pb-2">
                Student Leadership
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                The Prefects' Guild stands as the pinnacle of student leadership, maintaining discipline 
                and upholding the traditions of St. Joseph's.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
               {/* Head Prefect Image Placeholder */}
               <div className="w-full md:w-1/3 flex justify-center">
                  <div className="relative w-64 h-80 bg-gray-200 rounded-xl overflow-hidden shadow-md flex items-center justify-center">
                    <span className="text-gray-400 text-center px-4">Head Prefect Photo<br/>(Coming Soon)</span>
                    {/* <Image src="/path-to-head-prefect.jpg" layout="fill" objectFit="cover" alt="Head Prefect" /> */}
                  </div>
               </div>
               
               <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">Head Prefect (2025)</h3>
                    <p className="text-xl text-gray-600 font-medium">Miss. [Name Here]</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    "Leadership is not about being in charge. It is about taking care of those in your charge. 
                    We pledge to serve our Alma Mater with loyalty and dedication."
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                      <h4 className="font-bold text-gray-800">Deputy Head Prefect 1</h4>
                      <p className="text-sm text-gray-500">Miss. [Name Here]</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                      <h4 className="font-bold text-gray-800">Deputy Head Prefect 2</h4>
                      <p className="text-sm text-gray-500">Miss. [Name Here]</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Clubs Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Clubs & Societies
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe in holistic development. Our clubs and societies offer 
              a vibrant space for students to explore their passions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs.map((club) => (
              <ClubCard 
                key={club.title}
                icon={club.icon}
                title={club.title}
                description={club.description}
              />
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}