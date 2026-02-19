// app/achievements/page.tsx
"use client";

import { useEffect, useState } from "react";
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
import { supabase } from "@/lib/supabase";

// --- TYPE DEFINITIONS ---
type AchievementItem = {
  id: string;
  name: string;
  award: string;
  level: string;
  desc?: string;
  image?: string; 
  type?: string; 
};

type GroupedAchievement = {
  title: string;
  items: AchievementItem[];
};

export default function AchievementsPage() {
  // Use keys matching the Tabs: sports, aesthetic, cocurricular
  const [achievementsData, setAchievementsData] = useState<Record<string, GroupedAchievement[]>>({
    sports: [],
    aesthetic: [],
    cocurricular: [] 
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('achievements')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (data) {
        // Initialize grouped structure
        const grouped: Record<string, GroupedAchievement[]> = { 
            sports: [], 
            aesthetic: [], 
            cocurricular: [] 
        };
        
        data.forEach((item) => {
          // Map DB 'academic' category to UI 'cocurricular' tab
          let catKey = item.category;
          if (catKey === 'academic') catKey = 'cocurricular';

          // Ensure the category key exists in our structure
          if (grouped[catKey]) {
            let group = grouped[catKey].find(g => g.title === item.sub_category);
            if (!group) {
              group = { title: item.sub_category, items: [] };
              grouped[catKey].push(group);
            }
            group.items.push({
              id: item.id,
              name: item.name,
              award: item.award,
              level: item.level,
              desc: item.description,
              image: item.image_url,
              type: item.type
            });
          }
        });
        setAchievementsData(grouped);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const containerVariants = { 
    hidden: { opacity: 0 }, 
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } } 
  };
  
  const itemVariants = { 
    hidden: { y: 20, opacity: 0 }, 
    visible: { y: 0, opacity: 1 } 
  };

  return (
    <main className="overflow-x-hidden bg-gray-50 min-h-screen flex flex-col pt-[80px]">
      <Navbar />

      {/* --- HERO SECTION (Matches Original) --- */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden flex items-center justify-center">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Using a placeholder or the original image if available */}
          <div className="absolute inset-0 bg-gray-900" /> 
          <Image
            src="/images/IMG_6159.JPG" // Ensure this image exists in public/images
            alt="Achievements Hero"
            fill
            className="object-cover opacity-60"
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
              &quot;Celebrating the brilliance, talent, and dedication of our Josephian stars.&quot;
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
              
              <TabsTrigger 
                value="all" 
                className="w-full md:w-auto md:flex-1 min-w-[100px] text-sm md:text-lg px-4 py-3 rounded-xl md:rounded-full data-[state=active]:bg-gray-800 data-[state=active]:text-white transition-all flex items-center justify-center gap-2"
              >
                <Squares2X2Icon className="w-5 h-5" /> All
              </TabsTrigger>

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
             {loading ? (
                <div className="text-center py-20 text-gray-400">Loading achievements...</div>
             ) : (
                <>
                    {/* Sports Section in All */}
                    {achievementsData.sports.map((section, idx) => (
                    <div key={`all-sport-${idx}`}>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-8 w-2 md:h-10 bg-blue-600 rounded-full"></div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                {section.title} <span className="text-sm font-normal text-gray-500 ml-2">(Sports)</span>
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {section.items.map((item, i) => (
                            <AchievementCard key={item.id} item={item} colorClass="bg-blue-600" variants={itemVariants} />
                        ))}
                        </div>
                    </div>
                    ))}

                    {/* Aesthetic Section in All */}
                    {achievementsData.aesthetic.map((section, idx) => (
                    <div key={`all-aes-${idx}`}>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-8 w-2 md:h-10 bg-[#800000] rounded-full"></div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                {section.title} <span className="text-sm font-normal text-gray-500 ml-2">(Aesthetic)</span>
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {section.items.map((item, i) => (
                            <AchievementCard key={item.id} item={item} colorClass="bg-[#800000]" variants={itemVariants} />
                        ))}
                        </div>
                    </div>
                    ))}

                    {/* Co-Curricular Section in All */}
                    {achievementsData.cocurricular.map((section, idx) => (
                    <div key={`all-co-${idx}`}>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-8 w-2 md:h-10 bg-green-600 rounded-full"></div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                {section.title} <span className="text-sm font-normal text-gray-500 ml-2">(Co-Curricular)</span>
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {section.items.map((item, i) => (
                            <AchievementCard key={item.id} item={item} colorClass="bg-green-600" variants={itemVariants} />
                        ))}
                        </div>
                    </div>
                    ))}
                </>
             )}
          </TabsContent>


          {/* --- SPORTS TAB --- */}
          <TabsContent value="sports" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {achievementsData.sports.map((section, idx) => (
              <motion.div key={idx} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="flex items-center gap-3 mb-8">
                    <div className="h-8 w-2 md:h-10 bg-blue-600 rounded-full"></div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{section.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {section.items.map((item) => (
                    <AchievementCard key={item.id} item={item} colorClass="bg-blue-600" variants={itemVariants} />
                  ))}
                </div>
              </motion.div>
            ))}
          </TabsContent>

          {/* --- AESTHETIC TAB --- */}
          <TabsContent value="aesthetic" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {achievementsData.aesthetic.map((section, idx) => (
              <motion.div key={idx} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-8 w-2 md:h-10 bg-[#800000] rounded-full"></div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{section.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {section.items.map((item) => (
                    <AchievementCard key={item.id} item={item} colorClass="bg-[#800000]" variants={itemVariants} />
                  ))}
                </div>
              </motion.div>
            ))}
          </TabsContent>

          {/* --- CO-CURRICULAR TAB --- */}
          <TabsContent value="cocurricular" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {achievementsData.cocurricular.map((section, idx) => (
              <motion.div key={idx} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="flex items-center gap-3 mb-8">
                    <div className="h-8 w-2 md:h-10 bg-green-600 rounded-full"></div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{section.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {section.items.map((item) => (
                    <AchievementCard key={item.id} item={item} colorClass="bg-green-600" variants={itemVariants} />
                  ))}
                </div>
              </motion.div>
            ))}
          </TabsContent>

        </Tabs>
      </div>

      <Footer />
    </main>
  );
}

// --- INTELLIGENT CARD COMPONENT ---
function AchievementCard({ item, colorClass, variants }: { item: AchievementItem, colorClass: string, variants?: any }) {
  
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
      variants={variants}
      className="h-full"
    >
      <Card className={`overflow-hidden h-full border-t-4 border-t-transparent shadow-lg hover:shadow-2xl transition-all duration-300 bg-white group flex flex-col`}>
        <div className="relative h-64 w-full bg-gray-50 overflow-hidden flex items-center justify-center border-b border-gray-100">
           
           {item.image ? (
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  fill 
                  className="object-contain p-2 transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized
                />
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