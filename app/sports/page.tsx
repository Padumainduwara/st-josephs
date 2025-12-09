import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { TrophyIcon, StarIcon } from "@heroicons/react/24/solid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Placeholder image for sports
import SportsHero from "@/public/school-hero-image.png"; 

export default function SportsPage() {
  
  const sports = [
    { name: "Basketball", description: "Champions at Zonal and Provincial levels. We have a state-of-the-art court.", achievements: ["Zonal Champions 2024", "Provincial Runners-up 2023"] },
    { name: "Netball", description: "A dominant force in schools netball history. Building teamwork and agility.", achievements: ["All Island Champions 2022", "Zonal Best Player Award"] },
    { name: "Athletics", description: "Track and field events that nurture speed, strength, and endurance.", achievements: ["Junior Championship 2024"] },
    { name: "Swimming", description: "Developing discipline and fitness in the water.", achievements: [] },
    { name: "Badminton", description: "A fast-paced game improving reflexes and focus.", achievements: [] },
    { name: "Chess", description: "Sharpening minds and strategic thinking.", achievements: ["District Champions"] },
  ];

  return (
    <main className="bg-gray-50">
      <Navbar />
      
      <div className="pt-20">
        {/* Sports Hero */}
        <div className="relative h-[400px] w-full">
          <Image
            src={SportsHero}
            alt="School Sports"
            layout="fill"
            objectFit="cover"
            className="opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-primary/80 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white hero-text-shadow uppercase tracking-wider">
              Sports
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4">Champions in the Making</h2>
            <p className="text-lg text-gray-700">
              At St. Joseph's, sports is more than just a game; it's a way of life. 
              We believe in character building through physical education, teamwork, and fair play.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sports.map((sport, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 group border-t-4 border-t-yellow-500">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary flex items-center justify-between">
                    {sport.name}
                    <TrophyIcon className="h-8 w-8 text-yellow-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 h-16">{sport.description}</p>
                  
                  {sport.achievements.length > 0 && (
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-700 text-sm mb-2 flex items-center">
                        <StarIcon className="h-4 w-4 mr-1" /> Recent Achievements
                      </h4>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {sport.achievements.map((ach, i) => (
                          <li key={i}>{ach}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}