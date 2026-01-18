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
  StarIcon,
  SparklesIcon
} from "@heroicons/react/24/solid";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// --- DATA LISTS ---

const deputyPrincipals = [
  { name: "Mrs. Subhashini Perera", role: "Deputy Principal" },
  { name: "Mrs. Anuradha Rathnayaka", role: "Deputy Principal" },
  { name: "Mrs. Waruni Wickramasinghe", role: "Deputy Principal" },
  { name: "Mrs. Rasanjali Jayathilaka", role: "Deputy Principal" },
];

const assistantPrincipals = [
  { name: "Ms. Mari Fernando", role: "Assistant Principal" },
  { name: "Mrs. Laseema Rajapaksha", role: "Assistant Principal" },
  { name: "Mrs. Thivantha Jayawardane", role: "Assistant Principal" },
  { name: "Ms. Anne Nishanthi Rathnasekara", role: "Assistant Principal" },
];

const academicStaff = [
  { name: "Mrs. W.A.D. Fernando", subject: "Academic Staff" },
  { name: "Mrs. K.K.C.K.M. Kulathilaka", subject: "Academic Staff" },
  { name: "Mrs. S.H.N. Sepalika", subject: "Academic Staff" },
  { name: "Mrs. C.S. Liyanage", subject: "Academic Staff" },
  { name: "Mrs. W.A. Nishanthi", subject: "Academic Staff" },
  { name: "Mrs. W.A.C.N. Weerakoon", subject: "Academic Staff" },
  { name: "Mrs. S.R. Madawala", subject: "Academic Staff" },
  { name: "Mrs. G.U. Vithanathanthri", subject: "Academic Staff" },
  { name: "Mrs. O.V.D.S.S. Weerasena", subject: "Academic Staff" },
  { name: "Mrs. D.J. Liyanage", subject: "Academic Staff" },
  { name: "Mrs. T.M.D. Siriwardhana", subject: "Academic Staff" },
  { name: "Miss K.C. Morawaka", subject: "Academic Staff" },
  { name: "Miss M.D.L.P. Gunarathne (Attached)", subject: "Academic Staff" },
  { name: "Mrs. P.S. Priyangani", subject: "Academic Staff" },
  { name: "Mrs. K.A.D.C. Ruwanthi", subject: "Academic Staff" },
  { name: "Mrs. H.W. Bambarandage", subject: "Academic Staff" },
  { name: "Mrs. K.G.M.C. Gunadasa", subject: "Academic Staff" },
  { name: "Mrs. E.B.D.A. Priyadarshani", subject: "Academic Staff" },
  { name: "Mrs. E.S. Jayasundara", subject: "Academic Staff" },
  { name: "Mrs. D.N.S. Wijesinghe", subject: "Academic Staff" },
  { name: "Mrs. I.M. Madusha Lakmali", subject: "Academic Staff" },
  { name: "Mrs. P.A. Randika Harshani Dharmasiri", subject: "Academic Staff" },
  { name: "Mrs. I.M. Nadeesha Charunika", subject: "Academic Staff" },
  { name: "Mrs. W.M.S.C. Wijekoon", subject: "Academic Staff" },
  { name: "Mrs. M. Thushari Damayanthi", subject: "Academic Staff" },
  { name: "Mrs. W.T.M. Fernando", subject: "Academic Staff" },
  { name: "Mrs. H.L.G.M.N. Kumari", subject: "Academic Staff" },
  { name: "Mrs. N.I.D. Nilani Abeywardena", subject: "Academic Staff" },
  { name: "Mrs. H.I. Wickramasinghe", subject: "Academic Staff" },
  { name: "Mrs. N. Manoshi Liyanage", subject: "Academic Staff" },
  { name: "Mrs. S.K. Hettiarachchi", subject: "Academic Staff" },
  { name: "Mrs. M.K.H.K. Munasinghe", subject: "Academic Staff" },
  { name: "Mrs. M.N. Perera", subject: "Academic Staff" },
  { name: "Mrs. W.T.C. Darshani", subject: "Academic Staff" },
  { name: "Mrs. U.D. Harshika Samanthi", subject: "Academic Staff" },
  { name: "Mr. N.W.A. Thissa Wasanthakumara", subject: "Academic Staff" },
  { name: "Mrs. M.V.P. Rajini Arambawela", subject: "Academic Staff" },
  { name: "Mrs. E.G.I.S. Premarathne", subject: "Academic Staff" },
  { name: "Mrs. V.G. Wijewickrama", subject: "Academic Staff" },
  { name: "Mrs. M.G.C.P. Kumari", subject: "Academic Staff" },
  { name: "Mrs. B.K.L. Imalka", subject: "Academic Staff" },
  { name: "Mr. Y.I.U. Premachandra", subject: "Academic Staff" },
  { name: "Mrs. V.G.D.N. Wickramasinghe", subject: "Academic Staff" },
  { name: "Mrs. Y.P.D.A. Silva (Attached)", subject: "Academic Staff" },
  { name: "Mrs. K.M.N.T.K. Bandara", subject: "Academic Staff" },
  { name: "Mrs. P.G.J.A. Keerthirathne", subject: "Academic Staff" },
  { name: "Mrs. W.D. Yamuna Priyanthi", subject: "Academic Staff" },
  { name: "Mrs. L.C.S. Rodrigo", subject: "Academic Staff" },
  { name: "Mrs. B.A.N.G. Peiris", subject: "Academic Staff" },
  { name: "Mrs. A.M.R.P. Amarakoon", subject: "Academic Staff" },
  { name: "Mrs. Rasika Peramunage", subject: "Academic Staff" },
  { name: "Mrs. G.A. Waruni Chinthaki", subject: "Academic Staff" },
  { name: "Mrs. H.A.D. Lakkika Lakmini", subject: "Academic Staff" },
  { name: "Mrs. H.A.N. Maduwanthi Karunasekara", subject: "Academic Staff" },
  { name: "Mrs. M.R. Sandamali", subject: "Academic Staff" },
  { name: "Mrs. Chamila Ekanayake", subject: "Academic Staff" },
  { name: "Mrs. K.R. Priyadarshani", subject: "Academic Staff" },
  { name: "Mrs. R.M.D.N. Rathnayake", subject: "Academic Staff" },
  { name: "Mrs. I.L.N.K. Somarathne", subject: "Academic Staff" },
  { name: "Mrs. K.A.M.M. Gunathilaka", subject: "Academic Staff" },
  { name: "Mrs. P.G.K.I. Perera (Attached)", subject: "Academic Staff" },
  { name: "Mrs. N.N. Mendis", subject: "Academic Staff" },
  { name: "Mrs. N.A.N. Sammani Bandara", subject: "Academic Staff" },
  { name: "Mrs. L.S. Abeynayake", subject: "Academic Staff" },
  { name: "Mrs. C.J. Jayathilaka", subject: "Academic Staff" },
  { name: "Mrs. H.M.U.S.N. Hettiarachchi", subject: "Academic Staff" },
  { name: "Mrs. D.S.N. Aluthge", subject: "Academic Staff" },
  { name: "Mrs. W.K.A.P. Madushani", subject: "Academic Staff" },
  { name: "Mr. A.G.T. Ranjana", subject: "Academic Staff" },
  { name: "Miss A.J. Premawansha", subject: "Academic Staff" },
  { name: "Mrs. K.M.C.A. Konara", subject: "Academic Staff" },
  { name: "Mrs. D.P.P.T. Weerasinghe", subject: "Academic Staff" },
  { name: "Mrs. U.M.C.S. Jayathilaka", subject: "Academic Staff" },
  { name: "Mrs. R.M.V.A. Rathnayake", subject: "Academic Staff" },
  { name: "Mrs. G.I.P. Perera (Attached)", subject: "Academic Staff" },
  { name: "Mrs. P.K. Paranawithana", subject: "Academic Staff" },
  { name: "Mrs. K.M.R.T. Perera", subject: "Academic Staff" },
  { name: "Mrs. U.A.D.P.D. Uduwaka Arachchi", subject: "Academic Staff" },
  { name: "Mrs. K.W.G. Thushari", subject: "Academic Staff" },
  { name: "Mr. S.T. Jayathunga", subject: "Academic Staff" },
  { name: "Mrs. K.A.N. Suraweera", subject: "Academic Staff" },
  { name: "Mrs. P.P. Kaluarachchi", subject: "Academic Staff" },
  { name: "Mrs. B.I.R. Perera", subject: "Academic Staff" },
  { name: "Mrs. W.M.R.S. Wickramanayake", subject: "Academic Staff" },
  { name: "Mrs. W.T.T. Yasharathne", subject: "Academic Staff" },
  { name: "Mrs. R.M.N.D. Rathnayake", subject: "Academic Staff" },
  { name: "Mrs. B.H. Marasinghe", subject: "Academic Staff" },
  { name: "Mrs. H.K.G.C. Chathurani Samarakoon", subject: "Academic Staff" },
  { name: "Mr. D.S. Amarasinghe", subject: "Academic Staff" },
  { name: "Mrs. D.H. Dayananda", subject: "Academic Staff" },
  { name: "Mrs. T.N. Chandani Suwaris", subject: "Academic Staff" },
  { name: "Mrs. C.D. Jayarathne", subject: "Academic Staff" },
  { name: "Mrs. P.L. Dinusha Chandani", subject: "Academic Staff" },
  { name: "Mrs. W. Indra Kanthi", subject: "Academic Staff" },
  { name: "Mrs. R.A.N.S. Gunathilaka", subject: "Academic Staff" },
  { name: "Mrs. T.N. Godallage (Attached)", subject: "Academic Staff" },
  { name: "Miss H.S.H. Perera", subject: "Academic Staff" },
  { name: "Mrs. W.M.T.K. Samarasinghe", subject: "Academic Staff" },
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
  // Stats Data Calculation
  const stats = [
    { 
      label: "Deputy Principals", 
      count: deputyPrincipals.length, 
      icon: StarIcon, 
      color: "text-yellow-600", 
      bg: "bg-yellow-50", 
      border: "border-yellow-200" 
    },
    { 
      label: "Assistant Principals", 
      count: assistantPrincipals.length, 
      icon: AcademicCapIcon, 
      color: "text-purple-600", 
      bg: "bg-purple-50", 
      border: "border-purple-200" 
    },
{ 
      label: "Academic Staff", 
      count: academicStaff.length, 
      icon: UserGroupIcon, 
      color: "text-[#800000]", 
      bg: "bg-[#800000]/10", 
      border: "border-[#800000]/20" 
    },
    { 
      label: "Non-Academic", 
      count: nonAcademicStaff.length, 
      icon: BriefcaseIcon, 
      color: "text-blue-600", 
      bg: "bg-blue-50", 
      border: "border-blue-200" 
    },
  ];

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
        <div className="absolute inset-0 bg-[#500000]/90 z-10" />
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

      {/* --- STATS SECTION (Modern Row) --- */}
      <div className="container mx-auto px-4 relative z-30 -mt-16 mb-16">
      {/* Responsive Grid:
         grid-cols-2 = Mobile වල කාඩ් දෙකක් පේළියට
         lg:grid-cols-4 = ලොකු screen වල කාඩ් 4ක් පේළියට
      */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} // Scroll කරනකොට animate වෙන්න
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            {/* Card Container */}
            <div 
              className={`
                bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                transition-all duration-300 transform hover:-translate-y-2
                border-2 ${stat.border} 
                flex flex-col items-center justify-center
                p-4 md:p-6 h-full
              `}
            >
              {/* Icon Circle */}
              <div className={`p-3 md:p-4 rounded-full mb-3 md:mb-4 ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />
              </div>

              {/* Number Count */}
              <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-1 md:mb-2">
                {stat.count}
              </h3>

              {/* Label Text */}
              <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-gray-500 text-center leading-tight">
                {stat.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 relative z-10">

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
            {deputyPrincipals.map((deputy, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full bg-white border-t-4 border-t-yellow-500 shadow-xl hover:shadow-2xl transition-all p-6 hover:-translate-y-2 duration-300">
                  <CardContent className="pt-4">
                    <div className="w-20 h-20 mx-auto bg-yellow-50 rounded-full flex items-center justify-center mb-4 border-2 border-yellow-200">
                      <StarIcon className="h-10 w-10 text-yellow-600" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{deputy.name}</h3>
                    <p className="text-yellow-700 font-semibold bg-yellow-50 inline-block px-3 py-1 rounded-full text-xs md:text-sm">
                      {deputy.role}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- ASSISTANT PRINCIPALS SECTION (New Section - Purple/Blue Theme) --- */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 uppercase tracking-wide">
            Assistant Principals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
            {assistantPrincipals.map((assistant, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full bg-white border-t-4 border-t-purple-600 shadow-xl hover:shadow-2xl transition-all p-6 hover:-translate-y-2 duration-300">
                  <CardContent className="pt-4">
                    <div className="w-20 h-20 mx-auto bg-purple-50 rounded-full flex items-center justify-center mb-4 border-2 border-purple-200">
                      <SparklesIcon className="h-10 w-10 text-purple-600" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{assistant.name}</h3>
                    <p className="text-purple-700 font-semibold bg-purple-50 inline-block px-3 py-1 rounded-full text-xs md:text-sm">
                      {assistant.role}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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