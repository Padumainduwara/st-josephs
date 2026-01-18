"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Full Message Text
const fullMessage = `
Glory to god alone.

Education, beyond all other devices of human origin, is the great equalizer of the conditions of men - the balance-wheel of the social machinery.

Since the inception in 1942 as a Catholic school for girls, the past principals of St. Joseph's Girls' School, Nugegoda were tirelessly committed to harness and nurture rich ethical values enshrined in Catholic philosophy.

Our students are our strength and inspiration. Therefore it is truly important for us to give some of our attention to their creativity and their enthusiasm. Hence the organization of co-curricular activities play an indispensable role in paving the way to the development of the students' potentials.

Sports, aesthetic activities, language proficiency and many other skills are in the highest place. It is pleasurable to say the students play a leading role in performing at government examinations with the best results in the zone. A variety of facilities and opportunities are provided to our students to maximize their capabilities. The duty conscious, skillful academic staff is appreciated in this tremendous task.

I invite all well-wishers to join hands with the school and be our strength to carry our mission. The active participation of past pupils' association and the school development society are highly admired towards the progress of the school.
`;

export default function PrincipalMessage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* --- Image Section (FIXED SIZE) --- */}
          {/* Changed width to lg:w-1/3 and added max-w-sm to prevent it from getting too big */}
          <div className="w-full max-w-sm lg:w-1/3 relative group mx-auto lg:mx-0">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100 ring-1 ring-gray-200">
               {/* Image Container */}
              <Image
                src="/images/principal.jpg" 
                alt="Mrs. Rupa Rohini Silva - Principal"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Overlay Info */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#500000] via-[#500000]/80 to-transparent p-6 pt-20">
                <h3 className="text-white text-xl font-bold font-serif leading-tight">Mrs. Rupa Rohini Silva</h3>
                <p className="text-yellow-400 text-xs font-semibold uppercase tracking-widest mt-1">Principal</p>
              </div>
            </div>

            {/* Decorative box behind (Made smaller and subtle) */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#800000]/10 rounded-2xl -z-10 hidden md:block" />
          </div>

          {/* --- Text Preview Section --- */}
          {/* Increased width to lg:w-2/3 to give text more space */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <Quote className="w-10 h-10 text-yellow-500 mb-4 mx-auto lg:mx-0 opacity-80" />
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#800000] mb-6 font-serif leading-tight">
              Principal's Message
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic mb-6 font-serif">
              "Education, beyond all other devices of human origin, is the great equalizer of the conditions of men..."
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed line-clamp-3 md:line-clamp-4 text-base md:text-lg">
              Since the inception in 1942 as a Catholic school for girls, the past principals of St. Joseph's Girls' School, Nugegoda were tirelessly committed to harness and nurture rich ethical values...
            </p>

            <Button 
              onClick={() => setIsOpen(true)}
              className="bg-[#800000] hover:bg-[#600000] text-white px-8 py-6 rounded-full text-base font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Read Full Message
            </Button>
          </div>

        </div>
      </div>

      {/* --- POPUP / MODAL (No Changes needed here, it works fine) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 30 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              className="bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-[#800000] p-6 text-white flex justify-between items-center sticky top-0 z-10">
                <div>
                    <h3 className="text-2xl font-bold font-serif">Principal's Message</h3>
                    <p className="text-yellow-300 text-sm opacity-90">St. Joseph's Girls' School</p>
                </div>
                <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar leading-loose text-gray-800 text-lg">
                <div className="flex flex-col gap-6">
                    <p className="font-serif text-xl italic text-[#800000] font-medium border-l-4 border-yellow-500 pl-4 bg-yellow-50/50 py-2 rounded-r-lg">
                        "Education, beyond all other devices of human origin, is the great equalizer of the conditions of men - the balance-wheel of the social machinery."
                    </p>
                    
                    {fullMessage.split('\n\n').slice(2).map((para, idx) => (
                        <p key={idx} className="text-justify text-gray-700 leading-relaxed">{para}</p>
                    ))}

                    <div className="mt-8 pt-6 border-t border-gray-200 flex items-center gap-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#800000]">
                             <Image src="/images/principal.jpg" alt="Principal" fill className="object-cover" />
                        </div>
                        <div>
                             <p className="font-bold text-xl text-[#800000] font-serif">Mrs. Rupa Rohini Silva</p>
                             <p className="text-gray-600 text-sm uppercase tracking-wider font-semibold">Principal</p>
                        </div>
                    </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}