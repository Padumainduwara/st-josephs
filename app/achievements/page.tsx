"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrophyIcon, 
  StarIcon, 
  SparklesIcon, 
  VideoCameraIcon,
  MusicalNoteIcon,
  MicrophoneIcon,
  FaceSmileIcon,
  BookOpenIcon,
  Squares2X2Icon 
} from "@heroicons/react/24/solid";

// --- TYPE DEFINITIONS ---
type AchievementItem = {
  name: string;
  award: string;
  level: string;
  desc?: string;
  image?: string; 
  type?: "music" | "drama" | "dance" | "media" | "sport" | "general"; 
};

// --- DATA SOURCE ---
const achievements: Record<string, { title: string; items: AchievementItem[] }[]> = {
  sports: [
    {
      title: "Basketball Glory",
      items: [
        { 
          name: "Melani Perera", 
          desc: "Awarded 'Most Valuable Player' (MVP) of Western Province at the 49th National Sports Festival.",
          award: "MVP Award", 
          level: "National", 
          image: "/images/achievements/basket-melani.jpg",
          type: "sport"
        },
        { 
          name: "Sithuki Sihansa Kodagoda", 
          desc: "Selected to represent Sri Lanka at the 3x3 Basketball Championship - Asian Youth Games 2025 in Bahrain.",
          award: "National Rep", 
          level: "International", 
          image: "/images/achievements/basket-sithuki.jpg",
          type: "sport"
        },
        { 
          name: "Yeheni Balalle", 
          desc: "Selected for the Sri Lanka U16 National Basketball Team for the SABA Asian Qualifiers 2025 in Maldives.",
          award: "National Rep", 
          level: "International", 
          image: "/images/achievements/basket-yeheni.jpg",
          type: "sport"
        },
        { 
          name: "Under 20 Basketball Team", 
          desc: "Champions of the All Island Basketball Final 2025.",
          award: "Champions", 
          level: "All Island", 
          image: "/images/achievements/basket-u20.jpg",
          type: "sport"
        },
        { 
          name: "Under 17 Basketball Team", 
          desc: "Champions of the All Island National Level Championship.",
          award: "Champions", 
          level: "All Island", 
          image: "/images/achievements/basket-u17.jpg",
          type: "sport"
        },
      ]
    }
  ],
  aesthetic: [
    {
      title: "Dancing Achievements",
      items: [
        { name: "'Tea Dalu' Performance", award: "1st Place", level: "All Island", image: "/images/achievements/dance-tea.jpg", type: "dance" },
        { name: "'Paththini' Solo Dance", award: "1st Place", level: "All Island", image: "/images/achievements/dance-solo.jpg", type: "dance" },
        { name: "'Nathi Linchi' Style", award: "2nd Place", level: "All Island", image: "/images/achievements/dance-group.jpg", type: "dance" },
        { name: "'Kohu Industry' Dance", award: "1st Place", level: "Western Province", image: "/images/achievements/dance-kohu.jpg", type: "dance" },
        { name: "'Kathak Paran'", award: "2nd Place", level: "Western Province", image: "/images/achievements/dance-kathak.jpg", type: "dance" },
      ]
    },
    {
      title: "Music Achievements",
      items: [
        { 
          name: "Classical Music (Solo)", 
          award: "1st Place", 
          level: "Provincial", 
          desc: "Achieved 1st place in the Junior category at the Provincial Level.", 
          type: "music"
        },
        { 
          name: "Classical Music (Solo) - Junior", 
          award: "1st Place", 
          level: "Zonal Level", 
          desc: "Outstanding performance in the Junior classical music category.", 
          type: "music" 
        },
        { 
          name: "Classical Music (Solo) - Senior", 
          award: "1st Place", 
          level: "Zonal Level", 
          desc: "Top honors in the Senior classical music category.",
          type: "music" 
        },
        { 
          name: "Folk Music (Group) - Junior", 
          award: "1st Place", 
          level: "Zonal Level", 
          desc: "Group performance securing 1st place at the Zonal competition.",
          type: "music" 
        },
        { 
          name: "Folk Music (Group) - Junior", 
          award: "3rd Place", 
          level: "Provincial Level", 
          desc: "Secured 3rd place in the highly competitive Provincial meet.",
          type: "music" 
        },
      ]
    },
    {
      title: "Drama & Theatre",
      items: [
        { 
          name: "Miming (Solo) - Senior", 
          award: "2nd Place", 
          level: "All Island", 
          desc: "National level recognition for exceptional miming skills.",
          image: "/images/achievements/drama-miming.jpg", 
          type: "drama" 
        },
        { 
          name: "Miming (Solo) - Senior", 
          award: "1st Place", 
          level: "Provincial Level", 
          desc: "Winner of the Provincial level miming competition.",
          type: "drama" 
        },
        { 
          name: "Character Modeling (Solo)", 
          award: "2nd Place", 
          level: "Provincial Level", 
          desc: "Junior category achievement in character modeling.",
          type: "drama" 
        }
      ]
    }
  ],
  cocurricular: [
    {
      title: "English Drama Competitions",
      items: [
        { 
          name: "'Macbeth' (Senior)", 
          award: "1st Place", 
          level: "Zonal Level", 
          desc: "Outstanding performance by the Senior English Drama troupe.",
          image: "/images/achievements/drama-macbeth.jpg", 
          type: "drama"
        },
        { 
          name: "'Emno' (Junior)", 
          award: "1st Place", 
          level: "Zonal Level", 
          desc: "Junior team secured victory with their performance of 'Emno'.",
          type: "drama" 
        },
        { 
          name: "Primary Drama", 
          award: "1st Place", 
          level: "Divisional Level", 
          desc: "Primary students showing excellence in divisional drama.",
          type: "drama" 
        },
        { 
          name: "Primary Drama", 
          award: "3rd Place", 
          level: "Zonal Level", 
          desc: "Placed 3rd in the Zonal level primary competitions.",
          type: "drama" 
        },
      ]
    },
    {
      title: "Media Unit Excellence",
      items: [
        { 
          name: "Dhara '25 Competition", 
          award: "Multiple Wins", 
          level: "All Island", 
          desc: "Senina Weerasinghe (2nd Announcing), Asisya Perera (2nd Dubbing), Salma Asfar (3rd Editing). Organized by Christ Church Girls' College.", 
          image: "/images/achievements/media-dhara.jpg",
          type: "media"
        },
        { 
          name: "Abhinav '25 Competition", 
          award: "Multiple Wins", 
          level: "All Island", 
          desc: "Asisya Perera (1st Dubbing), Senina Weerasinghe (2nd Announcing). Organized by Negombo South International School.", 
          image: "/images/achievements/media-abhinav.jpg",
          type: "media"
        },
        { 
          name: "Radio Presenting (NIE)", 
          award: "A Grade", 
          level: "National", 
          desc: "P.M. Saheli (Sinhala), Manuthi Sethnara (English), Tenuli Wivantha (English). Teacher Mr. Tissa Wijesuriya (B Grade).", 
          image: "/images/achievements/media-radio.jpg",
          type: "media"
        },
      ]
    }
  ]
};

export default function AchievementsPage() {
  return (
    <main className="overflow-x-hidden bg-gray-50 min-h-screen flex flex-col pt-[80px]">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden flex items-center justify-center">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/images/IMG_6159.JPG"
            alt="Achievements Hero"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-[#500000]/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl">
              Hall of Fame
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg md:text-2xl text-yellow-300 font-serif italic max-w-3xl mx-auto drop-shadow-md">
              "Celebrating the brilliance, talent, and dedication of our Josephian stars."
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

      {/* --- CONTENT SECTION --- */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        <Tabs defaultValue="all" className="w-full">
          
          {/* Tabs Navigation (Responsive Layout) */}
          <div className="flex justify-center mb-12">
            <TabsList className="flex flex-wrap justify-center w-full max-w-4xl h-auto gap-2 p-2 bg-white rounded-2xl md:rounded-full shadow-md border border-gray-100">
              
              {/* "ALL" Button - Full width on Mobile, Auto on Desktop */}
              <TabsTrigger 
                value="all" 
                className="w-full md:w-auto md:flex-1 min-w-[100px] text-sm md:text-lg px-4 py-3 rounded-xl md:rounded-full data-[state=active]:bg-gray-800 data-[state=active]:text-white transition-all flex items-center justify-center gap-2"
              >
                <Squares2X2Icon className="w-5 h-5" /> All
              </TabsTrigger>

              {/* Other Buttons - Shared Row on Mobile */}
              <TabsTrigger 
                value="sports" 
                className="flex-1 min-w-[90px] md:min-w-[120px] text-sm md:text-lg px-3 md:px-4 py-3 rounded-xl md:rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all flex items-center justify-center gap-2"
              >
                <TrophyIcon className="w-5 h-5" /> Sports
              </TabsTrigger>
              <TabsTrigger 
                value="aesthetic" 
                className="flex-1 min-w-[90px] md:min-w-[120px] text-sm md:text-lg px-3 md:px-4 py-3 rounded-xl md:rounded-full data-[state=active]:bg-[#800000] data-[state=active]:text-white transition-all flex items-center justify-center gap-2"
              >
                <MusicalNoteIcon className="w-5 h-5" /> Aesthetic
              </TabsTrigger>
              <TabsTrigger 
                value="cocurricular" 
                className="flex-1 min-w-[90px] md:min-w-[120px] text-sm md:text-lg px-3 md:px-4 py-3 rounded-xl md:rounded-full data-[state=active]:bg-green-600 data-[state=active]:text-white transition-all flex items-center justify-center gap-2"
              >
                <MicrophoneIcon className="w-5 h-5" /> Co-Curricular
              </TabsTrigger>
            </TabsList>
          </div>

          {/* --- ALL CONTENT TAB --- */}
          <TabsContent value="all" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
             
             {/* Sports Section in All */}
             {achievements.sports.map((section, idx) => (
              <div key={`all-sport-${idx}`}>
                <div className="flex items-center gap-3 mb-8">
                   <div className="h-8 w-2 md:h-10 bg-blue-600 rounded-full"></div>
                   <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{section.title} <span className="text-sm font-normal text-gray-500 ml-2">(Sports)</span></h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {section.items.map((item, i) => (
                    <AchievementCard key={i} item={item} colorClass="bg-blue-600" />
                  ))}
                </div>
              </div>
            ))}

            {/* Aesthetic Section in All */}
            {achievements.aesthetic.map((section, idx) => (
              <div key={`all-aes-${idx}`}>
                 <div className="flex items-center gap-3 mb-8">
                   <div className="h-8 w-2 md:h-10 bg-[#800000] rounded-full"></div>
                   <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{section.title} <span className="text-sm font-normal text-gray-500 ml-2">(Aesthetic)</span></h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {section.items.map((item, i) => (
                    <AchievementCard key={i} item={item} colorClass="bg-[#800000]" />
                  ))}
                </div>
              </div>
            ))}

            {/* Co-Curricular Section in All */}
            {achievements.cocurricular.map((section, idx) => (
              <div key={`all-co-${idx}`}>
                <div className="flex items-center gap-3 mb-8">
                   <div className="h-8 w-2 md:h-10 bg-green-600 rounded-full"></div>
                   <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{section.title} <span className="text-sm font-normal text-gray-500 ml-2">(Co-Curricular)</span></h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {section.items.map((item, i) => (
                    <AchievementCard key={i} item={item} colorClass="bg-green-600" />
                  ))}
                </div>
              </div>
            ))}

          </TabsContent>


          {/* --- SPORTS TAB --- */}
          <TabsContent value="sports" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {achievements.sports.map((section, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-3 mb-8">
                   <div className="h-8 w-2 md:h-10 bg-blue-600 rounded-full"></div>
                   <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{section.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {section.items.map((item, i) => (
                    <AchievementCard key={i} item={item} colorClass="bg-blue-600" />
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          {/* --- AESTHETIC TAB --- */}
          <TabsContent value="aesthetic" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {achievements.aesthetic.map((section, idx) => (
              <div key={idx}>
                 <div className="flex items-center gap-3 mb-8">
                   <div className="h-8 w-2 md:h-10 bg-[#800000] rounded-full"></div>
                   <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{section.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {section.items.map((item, i) => (
                    <AchievementCard key={i} item={item} colorClass="bg-[#800000]" />
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          {/* --- CO-CURRICULAR TAB --- */}
          <TabsContent value="cocurricular" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {achievements.cocurricular.map((section, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-3 mb-8">
                   <div className="h-8 w-2 md:h-10 bg-green-600 rounded-full"></div>
                   <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{section.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {section.items.map((item, i) => (
                    <AchievementCard key={i} item={item} colorClass="bg-green-600" />
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

        </Tabs>
      </div>

      <Footer />
    </main>
  );
}

// --- INTELLIGENT CARD COMPONENT (Handles Missing Images) ---
function AchievementCard({ item, colorClass }: { item: AchievementItem, colorClass: string }) {
  
  // Helper to get Icon based on type
  const getIcon = (type?: string) => {
    switch(type) {
      case 'music': return <MusicalNoteIcon className="w-16 h-16 text-white opacity-80" />;
      case 'drama': return <FaceSmileIcon className="w-16 h-16 text-white opacity-80" />;
      case 'media': return <VideoCameraIcon className="w-16 h-16 text-white opacity-80" />;
      case 'dance': return <SparklesIcon className="w-16 h-16 text-white opacity-80" />;
      case 'sport': return <TrophyIcon className="w-16 h-16 text-white opacity-80" />;
      default: return <BookOpenIcon className="w-16 h-16 text-white opacity-80" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      className="h-full"
    >
      <Card className={`overflow-hidden h-full border-t-4 border-t-transparent shadow-lg hover:shadow-2xl transition-all duration-300 bg-white group flex flex-col`}>
        
        {/* IMAGE AREA - Handles both Image and Fallback Icon */}
        <div className="relative h-48 md:h-56 w-full bg-gray-100 overflow-hidden">
           
           {item.image ? (
             <>
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
             </>
           ) : (
             // --- FALLBACK FOR MISSING IMAGES ---
             <div className={`absolute inset-0 ${colorClass} bg-opacity-90 flex flex-col items-center justify-center p-4 text-center`}>
                <div className="bg-white/20 p-4 rounded-full mb-2 backdrop-blur-sm">
                   {getIcon(item.type)}
                </div>
             </div>
           )}
           
           {/* Level Badge */}
           <div className="absolute top-4 right-4">
             <Badge className={`${colorClass} text-white hover:bg-opacity-90 px-3 py-1 shadow-md text-xs font-semibold uppercase tracking-wider`}>
               {item.level}
             </Badge>
           </div>
        </div>
        
        <CardContent className="p-5 md:p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <StarIcon className="h-5 w-5 text-yellow-500 flex-shrink-0" />
            <span className="text-sm font-bold text-yellow-600 uppercase tracking-wide">
              {item.award}
            </span>
          </div>
          
          <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-primary transition-colors">
            {item.name}
          </h4>
          
          {item.desc && (
            <p className="text-gray-600 text-sm leading-relaxed mt-auto">
              {item.desc}
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}