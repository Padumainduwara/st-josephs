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