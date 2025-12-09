import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { UserIcon } from "@heroicons/react/24/solid";
import { Card, CardContent } from "@/components/ui/card";

// Use a placeholder avatar for staff
const StaffCard = ({ name, role, section }: { name: string, role: string, section?: string }) => (
  <Card className="text-center hover:shadow-lg transition-all border-none shadow-md bg-white">
    <CardContent className="pt-6">
      <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4 border-2 border-primary/20">
        <UserIcon className="h-12 w-12 text-gray-400" />
      </div>
      <h3 className="text-xl font-bold text-primary">{name}</h3>
      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mt-1">{role}</p>
      {section && <p className="text-xs text-gray-500 mt-1">{section}</p>}
    </CardContent>
  </Card>
);

export default function StaffPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-16 container mx-auto px-4">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary text-center mb-16">
          Our Dedicated Staff
        </h1>

        {/* Administration */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8 border-b pb-4">Administration</h2>
          <div className="flex flex-col items-center justify-center gap-8 max-w-3xl mx-auto">
            {/* Principal */}
            <div className="w-full md:w-1/2 transform hover:scale-105 transition-transform duration-300">
               <Card className="text-center shadow-2xl border-t-8 border-t-primary">
                 <CardContent className="pt-8 pb-8">
                   {/* Replace with actual photo */}
                   <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <UserIcon className="h-16 w-16 text-primary" />
                   </div>
                   <h3 className="text-2xl font-bold text-primary">Rev. Sr. Sujeewani Perera</h3>
                   <p className="text-lg font-medium text-gray-600">Principal</p>
                 </CardContent>
               </Card>
            </div>

            {/* Deputy Principals Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
               <StaffCard name="Mrs. Deputy One" role="Deputy Principal" section="Administration" />
               <StaffCard name="Mrs. Deputy Two" role="Deputy Principal" section="Academics" />
            </div>
          </div>
        </div>

        {/* Sectional Heads */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8 border-b pb-4">Sectional Heads</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
             <StaffCard name="Mrs. Head Primary" role="Sectional Head" section="Primary Section" />
             <StaffCard name="Mrs. Head Middle" role="Sectional Head" section="Grade 6-9" />
             <StaffCard name="Mrs. Head Upper" role="Sectional Head" section="Grade 10-11" />
             <StaffCard name="Mrs. Head AL" role="Sectional Head" section="Advanced Level" />
          </div>
        </div>

        {/* Academic Staff */}
        <div>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8 border-b pb-4">Academic Staff</h2>
          <p className="text-center text-gray-600 mb-8">
            Our team of over 75 qualified and experienced teachers dedicated to your child's education.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 opacity-75">
             {/* Creating a list of placeholder teachers */}
             {Array.from({ length: 10 }).map((_, i) => (
                <StaffCard key={i} name={`Teacher ${i+1}`} role="Assistant Teacher" />
             ))}
          </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}