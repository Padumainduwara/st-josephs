// app/alumni/page.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { UserGroupIcon, CalendarDaysIcon, HeartIcon } from "@heroicons/react/24/outline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AlumniPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="pt-20">
        {/* Header Section */}
        <div className="relative h-[350px] w-full">
          <div className="absolute inset-0 bg-primary">
             {/* Oya gawa Alumni photo ekak thiyenawanam methanata danna puluwan */}
             <div className="opacity-20 w-full h-full bg-[url('/school-hero-image.png')] bg-cover bg-center"></div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-center hero-text-shadow">
              Past Pupils' Association
            </h1>
            <p className="text-xl md:text-2xl mt-4 text-yellow-300 font-serif italic">
              "Once a Josephian, Always a Josephian"
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          
          {/* Welcome Message */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Welcome Home, Dear Sisters</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Past Pupils' Association (PPA) is the heartbeat that connects generations of Josephians. 
              Whether you left last year or decades ago, you are an integral part of our legacy. 
              Join us to give back to our Alma Mater and keep the Josephian spirit alive.
            </p>
          </div>

          {/* Events & News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="border-t-4 border-t-primary hover:shadow-xl transition-all">
              <CardHeader className="flex-row items-center space-x-4">
                <div className="bg-red-50 p-3 rounded-full"><CalendarDaysIcon className="h-8 w-8 text-primary"/></div>
                <CardTitle className="text-2xl text-primary">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="border-b pb-3">
                    <h4 className="font-bold text-gray-800">Annual General Meeting 2025</h4>
                    <p className="text-sm text-gray-500">March 15, 2025 | School Main Hall</p>
                  </li>
                  <li className="border-b pb-3">
                    <h4 className="font-bold text-gray-800">"Back to School" Fiesta</h4>
                    <p className="text-sm text-gray-500">May 20, 2025 | School Grounds</p>
                  </li>
                  <li>
                    <h4 className="font-bold text-gray-800">Christmas Charity Drive</h4>
                    <p className="text-sm text-gray-500">December 10, 2025</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-yellow-500 hover:shadow-xl transition-all">
              <CardHeader className="flex-row items-center space-x-4">
                <div className="bg-yellow-50 p-3 rounded-full"><HeartIcon className="h-8 w-8 text-yellow-600"/></div>
                <CardTitle className="text-2xl text-primary">Get Involved</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Your support helps us improve school facilities, support needy students, and organize memorable events.
                </p>
                <Button className="w-full bg-primary hover:bg-red-900 text-lg py-6">
                  Register as a Member
                </Button>
                <Button variant="outline" className="w-full text-lg py-6 border-primary text-primary hover:bg-red-50">
                  Update Your Details
                </Button>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}