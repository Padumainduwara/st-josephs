// app/about/page.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { 
  EyeIcon, 
  RocketLaunchIcon, 
  MusicalNoteIcon, 
  FlagIcon, 
  AcademicCapIcon,
  BookOpenIcon
} from "@heroicons/react/24/outline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  
  // Past Principals Data (Timeline Data)
  const principals = [
    { period: "1942 - 1962", name: "Irish Nuns (Mothers Raphael, Baptist, De Sales)" },
    { period: "1962 - 1970", name: "Ms. Monica Ranasinghe (First Lay Principal)" },
    { period: "1970 - 1982", name: "Mrs. Ushetti" },
    { period: "1982 - 1985", name: "Mrs. Malani Hettiarachchi" },
    { period: "1985 - 2000", name: "Mrs. Pushpa Kalubowila" },
    { period: "2000 - 2010", name: "Mrs. Dhammika Jayanetti" }, 
    { period: "2010 - 2020", name: "Miss. P.A.A.B. Chandani Perera" },
    { period: "Present", name: "Rev. Sr. Sujeewani Perera" },
  ];

  return (
    <main className="bg-white">
      <Navbar />

      <div className="pt-20">
        
        {/* 1. HERO SECTION */}
        <div className="relative h-[450px] w-full overflow-hidden">
          <Image
            src="/images/IMG_6159.JPG" // Using the Bell Tower image for a historic feel
            alt="St. Joseph's History"
            layout="fill"
            objectFit="cover"
            className="opacity-30 scale-105 animate-pulse-slow" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-red-900/80 flex flex-col items-center justify-center text-center px-4">
             <h1 className="text-5xl md:text-7xl font-extrabold text-white hero-text-shadow mb-4">
              Our Legacy
            </h1>
            <p className="text-xl md:text-2xl text-yellow-300 font-serif italic max-w-2xl">
              "Sursum Corda" — Lift Up Your Hearts
            </p>
            <div className="mt-6 w-24 h-1 bg-white rounded-full mx-auto"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          
          {/* 2. SCHOOL IDENTITY (Motto & Flag) */}
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 uppercase tracking-wide">
              School Identity
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
              
              {/* Motto */}
              <div className="flex flex-col items-center p-8 bg-gray-50 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <BookOpenIcon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">School Motto</h3>
                <p className="text-4xl font-serif italic text-primary font-bold">"Sursum Corda"</p>
                <p className="text-gray-600 mt-2 text-lg font-medium">(Lift Up Your Hearts)</p>
              </div>

              {/* Flag */}
              <div className="flex flex-col items-center p-8 bg-gray-50 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <FlagIcon className="h-12 w-12 text-blue-800" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">School Flag</h3>
                {/* CSS Flag Representation */}
                <div className="flex w-48 h-28 shadow-md border border-gray-300 rounded-md overflow-hidden">
                   <div className="w-1/2 h-full bg-blue-900"></div>
                   <div className="w-1/2 h-full bg-white"></div>
                </div>
                <p className="text-gray-600 mt-4 text-sm font-medium">Blue & White symbolizing Purity & Depth</p>
              </div>

            </div>
          </div>

          {/* 3. HISTORY SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 border-l-8 border-yellow-400 pl-4">
                Our History
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-6 text-justify">
                <p>
                  St. Joseph’s Girls’ School, Nugegoda stands as a proud monument of education, established in <strong>1930</strong>. Inaugurated by His Grace Rev. Dr. Peter Marque, the Archbishop of Colombo, it began with a mission to empower young girls through faith and knowledge.
                </p>
                <p>
                  Initially administered by the <strong>Sisters of Apostolic Carmel</strong>, the school's stewardship was passed to the <strong>Franciscan Missionaries of Mary</strong> in 1935. This transition marked the beginning of a new era, instilling deep spiritual values alongside academic rigor.
                </p>
                <p>
                  In 1962, the school was vested in the government, marking a new chapter with <strong>Ms. Monica Ranasinghe</strong> becoming the first lay principal. Since then, St. Joseph's has grown from strength to strength, producing outstanding citizens for the nation.
                </p>
              </div>
            </div>
            
            {/* Image Side - Bell Tower Close up */}
            <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500">
               <Image 
                 src="/images/IMG_6162.JPG" 
                 alt="Historic Bell" 
                 layout="fill" 
                 objectFit="cover" 
                 className="hover:scale-110 transition-transform duration-700"
               />
               <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
                 <p className="text-white text-lg font-medium">The Historic Bell Tower</p>
               </div>
            </div>
          </div>

          {/* 4. VISION & MISSION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <Card className="bg-gradient-to-br from-red-50 to-white border-t-8 border-t-primary hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                  <EyeIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl text-primary font-bold">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-gray-700 italic font-medium leading-relaxed">
                  "To gift to the nation, a generation of energetic and well disciplined women, who are capable of facing the new challenges of life."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-white border-t-8 border-t-yellow-500 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                  <RocketLaunchIcon className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-3xl text-yellow-700 font-bold">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-gray-700 italic font-medium leading-relaxed">
                  "Through integrated academic, co-curricular and extracurricular activities, moulding a mentally and physically balanced generation of women..."
                </p>
              </CardContent>
            </Card>
          </div>

          {/* 5. SCHOOL HOUSES */}
          <div className="mb-24 bg-gray-50 py-16 px-4 md:px-12 rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center uppercase tracking-wide">
              School Houses
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <Card className="border-none shadow-lg hover:-translate-y-2 transition-transform duration-300 overflow-hidden group">
                <div className="h-3 bg-red-600 w-full"></div>
                <CardHeader className="bg-white group-hover:bg-red-50 transition-colors">
                  <CardTitle className="text-red-700 text-center text-2xl font-bold">Anne Marie</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-4 pb-8">
                  <div className="w-16 h-16 bg-red-100 rounded-full mx-auto flex items-center justify-center text-red-600 font-bold text-xl mb-2">A</div>
                  <p className="text-gray-500 font-medium">Color: Red</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:-translate-y-2 transition-transform duration-300 overflow-hidden group">
                <div className="h-3 bg-green-600 w-full"></div>
                <CardHeader className="bg-white group-hover:bg-green-50 transition-colors">
                  <CardTitle className="text-green-700 text-center text-2xl font-bold">Gonzaga</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-4 pb-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center text-green-600 font-bold text-xl mb-2">G</div>
                  <p className="text-gray-500 font-medium">Color: Green</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:-translate-y-2 transition-transform duration-300 overflow-hidden group">
                <div className="h-3 bg-blue-600 w-full"></div>
                <CardHeader className="bg-white group-hover:bg-blue-50 transition-colors">
                  <CardTitle className="text-blue-700 text-center text-2xl font-bold">Leonide</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-4 pb-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center text-blue-600 font-bold text-xl mb-2">L</div>
                  <p className="text-gray-500 font-medium">Color: Blue</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:-translate-y-2 transition-transform duration-300 overflow-hidden group">
                <div className="h-3 bg-yellow-500 w-full"></div>
                <CardHeader className="bg-white group-hover:bg-yellow-50 transition-colors">
                  <CardTitle className="text-yellow-600 text-center text-2xl font-bold">Sebastian</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-4 pb-8">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto flex items-center justify-center text-yellow-600 font-bold text-xl mb-2">S</div>
                  <p className="text-gray-500 font-medium">Color: Yellow</p>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* 6. SCHOOL ANTHEM */}
          <div className="grid grid-cols-1 justify-center mb-24">
            <div className="bg-primary text-white rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden max-w-4xl mx-auto w-full">
               <MusicalNoteIcon className="absolute -top-10 -right-10 h-64 w-64 text-white opacity-10 rotate-12 pointer-events-none" />
               
               <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center text-yellow-400 font-serif border-b border-white/20 pb-6">
                 School Anthem
               </h2>
               
               <div className="text-center space-y-4 text-lg md:text-2xl leading-relaxed font-serif tracking-wide text-white/90">
                 <p>Let us praise St. Joseph's name,</p>
                 <p>With joy and love and loud acclaim,</p>
                 <p>Our Alma Mater dear to all,</p>
                 <p>Within whose sheltering walls we call.</p>
                 
                 <div className="py-6">
                   <p className="font-bold text-yellow-300 text-2xl md:text-3xl">Chorus:</p>
                   <p className="font-bold italic mt-2">Sursum Corda be our cry,</p>
                   <p className="font-bold italic">Lift up your hearts to God on high,</p>
                 </div>

                 <p>In virtue, knowledge, truth and grace,</p>
                 <p>May we run well our earthly race.</p>
               </div>
               
               <p className="text-sm text-yellow-200/60 mt-8 text-center uppercase tracking-widest">
                 Composed by Mrs. Alfreda de Silva
               </p>
            </div>
          </div>

          {/* 7. PAST PRINCIPALS TIMELINE */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Principals Through the Years</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="relative border-l-4 border-primary/20 ml-6 md:ml-0 md:pl-0 space-y-12">
              {principals.map((principal, index) => (
                <div key={index} className="relative flex flex-col md:flex-row items-center group">
                  
                  {/* Dot on Timeline */}
                  <div className="absolute -left-[1.35rem] md:left-1/2 md:-ml-3.5 w-7 h-7 rounded-full bg-white border-4 border-primary shadow-md z-10 group-hover:scale-125 transition-transform duration-300"></div>
                  
                  {/* Content Box */}
                  <div className={`ml-10 md:ml-0 md:w-1/2 w-full ${index % 2 === 0 ? 'md:pr-16 md:text-right md:mr-auto' : 'md:pl-16 md:text-left md:ml-auto md:order-last'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-l-4 hover:border-l-primary relative">
                      <div className={`absolute top-1/2 w-4 h-1 bg-primary/20 hidden md:block ${index % 2 === 0 ? '-right-4' : '-left-4'}`}></div>
                      <span className="inline-block px-3 py-1 bg-red-50 text-primary text-sm font-bold rounded-full mb-2">
                        {principal.period}
                      </span>
                      <h4 className="text-xl font-bold text-gray-800">{principal.name}</h4>
                      <p className="text-gray-500 text-sm mt-1">St. Joseph's Girls' School</p>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}