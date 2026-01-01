"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { 
  UserIcon, 
  AcademicCapIcon, 
  BriefcaseIcon, 
  UserGroupIcon,
  StarIcon
} from "@heroicons/react/24/solid";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// --- DATA LISTS ---

const academicStaff = [
  // 1-20
  { name: "Mrs. W. Shirani Kadithuwakku", subject: "Academic Staff" },
  { name: "Mrs. H. D. Kumudumall Hapuarachchi", subject: "Academic Staff" },
  { name: "Mrs. P. Amara Shinyani Guruge", subject: "Academic Staff" },
  { name: "Mrs. D. C. P. Narangoda", subject: "Academic Staff" },
  { name: "Mrs. M. P. Wasanthi Galagama", subject: "Academic Staff" },
  { name: "Mrs. H. Madhawi Ekanayake", subject: "Academic Staff" },
  { name: "Mrs. D. Morin Calsta Ramanayake", subject: "Academic Staff" },
  { name: "Mrs. K. K. C. K. Menaka Kulathilaka", subject: "Academic Staff" },
  { name: "Mrs. S. H. Nelani Seppalika", subject: "Academic Staff" },
  { name: "Mrs. Chanika Shivanthi Liyanage", subject: "Academic Staff" },
  { name: "Mrs. W. A. Nishanthi", subject: "Academic Staff" },
  { name: "Mrs. J. Anuruddika Karunaratne", subject: "Academic Staff" },
  { name: "Mrs. K. A. D. Krishani Dilrukshi", subject: "Academic Staff" },
  { name: "Mrs. W. A. Chamila Nayanamali Weerakoon", subject: "Academic Staff" },
  { name: "Ms. Anne Nishanthi Rathnasinghe", subject: "Academic Staff" },
  { name: "Mrs. T. M. Dipika Siriwardane", subject: "Academic Staff" },
  { name: "Mrs. Kalani Chathurnika Morawaka", subject: "Academic Staff" },
  { name: "Mrs. Lasanthi Priyawadani Gunaratne", subject: "Academic Staff" },
  { name: "Mrs. P. Stella Priyangani", subject: "Academic Staff" },
  { name: "Mrs. C. P. A. P. Adhikari", subject: "Academic Staff" },
  
  // 31-36
  { name: "Mrs. M. Thushari Damayanthi", subject: "Academic Staff" },
  { name: "Mrs. W. Thilini Maheshya Fernando", subject: "Academic Staff" },
  { name: "Mrs. H. L. G. Manoja Nilmani Kumari", subject: "Academic Staff" },
  { name: "Mrs. N. L. Darshika Nilani Abewardane", subject: "Academic Staff" },
  { name: "Mrs. W. T. C. Darshani", subject: "Academic Staff" },
  { name: "Mrs. U. G. A. S. K. K. Gamage", subject: "Academic Staff" },

  // 43-61
  { name: "Mrs. K. L. Imalka", subject: "English" },
  { name: "Mr. Y. L. U. Premachandra", subject: "Mathematics" },
  { name: "Mrs. L. Subhashini Rodngo", subject: "Dancing / Drama" },
  { name: "Mrs. B. A. Nadeeshani Githanjali", subject: "Mathematics" },
  { name: "Mrs. A. M. Ruwani Prasadi Amarakoon", subject: "Sinhala Lit / Media" },
  { name: "Mrs. Ranika Peramunage", subject: "Geography / History" },
  { name: "Mrs. G. A. Waruni Chinthaki", subject: "Primary Ed / Geography" },
  { name: "Mrs. H. A. D. Lakshana Lakmini", subject: "Western Music" },
  { name: "Mrs. Nethini Maduwanthi Karunasekara", subject: "Geo / Buddhism / Hist" },
  { name: "Mrs. M. R. Sandamali", subject: "Primary Education" },
  { name: "Mrs. K. A. Mayuri Mihirani", subject: "Health" },
  { name: "Mrs. P. G. K. Tosha Perera", subject: "Primary Education" },
  { name: "Mrs. N. Nishani Mendis", subject: "Academic Staff" },
  { name: "Mrs. N. A. Nilukshi Sammani Bandara", subject: "Academic Staff" },
  { name: "Mrs. Lilani Sadaruwani Abenayake", subject: "Academic Staff" },
  { name: "Mrs. Jayamali Jayathilake", subject: "Academic Staff" },
  { name: "Mrs. H. M. U Sandani Nirodha Hettiarachchi", subject: "Academic Staff" },
  { name: "Mrs. H. H. R. Pathirana", subject: "Academic Staff" },
  { name: "Mrs. K. M. C. A. Konara", subject: "Academic Staff" },
  { name: "Mrs. V. G. Wijewikrama", subject: "English" },
  { name: "Mrs. M. G. C. P. Kumari", subject: "Christianity" },
];

const nonAcademicStaff = [
  { name: "Mrs. H. M. V. C. Manathunga", role: "Development Officer" },
  { name: "Mrs. R. L. N. Perera", role: "Development Officer" },
  { name: "Mrs. P. A. G. Sewwandi", role: "Laboratory Assistant" },
  { name: "Mrs. L. N. Damayanthi", role: "Laboratory Staff" },
  { name: "Mrs. M. P. C. Priyangani", role: "Library Assistant" },
  { name: "Mrs. K. V. Dilrukshi", role: "Sanitary Worker" },
  { name: "Mr. I. M. Kolambage", role: "Office Staff Assistant" },
  { name: "Mrs. G. D. C. Perera", role: "Computer Data Assistant" },
  { name: "Ms. W. A. Kusumawathi Perera", role: "School Worker" },
];

export default function StaffPage() {
  return (
    <main className="overflow-x-hidden bg-gray-50 min-h-screen flex flex-col pt-[80px]">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/images/IMG_6105.JPG" 
            alt="Our Staff"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Overlay - Deep Maroon to match brand */}
        <div className="absolute inset-0 bg-[#800000]/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        
        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl">
              Our Dedicated Staff
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg md:text-2xl text-yellow-300 font-serif italic max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              "The pillars of strength behind St. Joseph's Girls' School excellence."
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 w-24 md:w-32 h-1.5 bg-yellow-400 rounded-full shadow-lg" 
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">

        {/* --- PRINCIPAL SECTION (Maroon Theme) --- */}
        <div className="mb-20 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#800000] mb-12 uppercase tracking-wide">
            Principal
          </h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md w-full"
          >
            {/* Using Specific Maroon Color #800000 */}
            <Card className="text-center bg-white border-t-8 border-t-[#800000] shadow-2xl hover:shadow-3xl transition-all p-8 transform hover:-translate-y-2 duration-300 relative overflow-hidden">
               {/* Decorative Background Fade */}
               <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#800000]/5 to-transparent pointer-events-none" />
               
              <CardContent className="pt-6 relative z-10">
                <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center mb-6 border-4 border-[#800000] shadow-lg">
                   <UserIcon className="h-16 w-16 text-[#800000]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Mrs. Rupa Rohini Silva</h3>
                <Badge className="bg-[#800000] hover:bg-[#600000] text-white text-base px-8 py-2 rounded-full shadow-md">
                  Principal
                </Badge>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* --- DEPUTY PRINCIPALS SECTION (Gold/Yellow Theme) --- */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 uppercase tracking-wide">
            Deputy Principals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Deputy 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="text-center bg-white border-t-4 border-t-yellow-500 shadow-xl hover:shadow-2xl transition-all p-8 hover:-translate-y-2 duration-300">
                <CardContent className="pt-4">
                  <div className="w-24 h-24 mx-auto bg-yellow-50 rounded-full flex items-center justify-center mb-4 border-2 border-yellow-200">
                     <StarIcon className="h-12 w-12 text-yellow-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Mrs. Subhashini Perera</h3>
                  <p className="text-yellow-700 font-semibold bg-yellow-50 inline-block px-4 py-1 rounded-full text-sm">Deputy Principal</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Deputy 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="text-center bg-white border-t-4 border-t-yellow-500 shadow-xl hover:shadow-2xl transition-all p-8 hover:-translate-y-2 duration-300">
                <CardContent className="pt-4">
                  <div className="w-24 h-24 mx-auto bg-yellow-50 rounded-full flex items-center justify-center mb-4 border-2 border-yellow-200">
                     <StarIcon className="h-12 w-12 text-yellow-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Mrs. Subhashini Perera</h3>
                  <p className="text-yellow-700 font-semibold bg-yellow-50 inline-block px-4 py-1 rounded-full text-sm">Deputy Principal</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* --- ACADEMIC STAFF SECTION (Maroon & Gray Theme) --- */}
        <div className="mb-24">
          <div className="flex flex-col items-center justify-center gap-4 mb-12">
             <div className="p-3 bg-[#800000]/10 rounded-full">
                <UserGroupIcon className="h-8 w-8 text-[#800000]" />
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 uppercase tracking-wide">
                Academic Staff
             </h2>
             <p className="text-gray-500 max-w-2xl text-center">Our dedicated team of teachers committed to nurturing every student.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
             {academicStaff.map((staff, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.05 }} 
               >
                 {/* Hover effect: Silver to Maroon Border */}
                 <Card className="h-full bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 hover:border-[#800000]/30">
                   <CardContent className="p-6 flex flex-col items-center text-center">
                     <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#800000]/10 transition-colors border border-gray-100">
                       <UserIcon className="h-8 w-8 text-gray-400 group-hover:text-[#800000]" />
                     </div>
                     <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 line-clamp-2">{staff.name}</h3>
                     <Badge variant="outline" className="text-gray-600 border-gray-200 bg-gray-50 group-hover:border-[#800000]/20 font-normal">
                       {staff.subject}
                     </Badge>
                   </CardContent>
                 </Card>
               </motion.div>
             ))}
          </div>
        </div>

        {/* --- NON-ACADEMIC STAFF SECTION (Silver/Professional Theme) --- */}
        <div>
          <div className="flex flex-col items-center justify-center gap-4 mb-12">
             <div className="p-3 bg-gray-200 rounded-full">
                <BriefcaseIcon className="h-8 w-8 text-gray-700" />
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 uppercase tracking-wide">
                Non-Academic Staff
             </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
             {nonAcademicStaff.map((staff, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.05 }}
               >
                 <Card className="h-full bg-white border-l-4 border-l-gray-500 shadow-md hover:shadow-xl transition-all duration-300">
                   <CardContent className="p-6 flex items-center gap-4">
                     <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center shrink-0 border border-gray-200">
                       <UserIcon className="h-7 w-7 text-gray-600" />
                     </div>
                     <div className="text-left">
                       <h3 className="text-lg font-bold text-gray-900">{staff.name}</h3>
                       <p className="text-sm font-medium text-gray-600 mt-1">{staff.role}</p>
                     </div>
                   </CardContent>
                 </Card>
               </motion.div>
             ))}
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}