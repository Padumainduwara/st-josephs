"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        
        {/* Vision Card */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-full"
        >
          <Card className="h-full bg-gradient-to-br from-red-50 to-white border-l-4 border-l-red-800 shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <CardContent className="p-6 md:p-10 flex flex-col items-center text-center">
              <div className="p-4 bg-red-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 md:w-10 md:h-10 text-brand-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                "To gift to the nation, a generation of energetic and well disciplined women, who are capable of facing the new challenges of life."
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Mission Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-full"
        >
          <Card className="h-full bg-gradient-to-br from-blue-50 to-white border-l-4 border-l-blue-800 shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <CardContent className="p-6 md:p-10 flex flex-col items-center text-center">
              <div className="p-4 bg-blue-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-8 h-8 md:w-10 md:h-10 text-blue-800" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                "Through integrated academic, co-curricular and extracurricular activities, moulding a mentally and physically balanced generation of women; able to face the challenges of multi religious and racial society and serve the humanity fruitfully with a universal spirit of peace and harmony."
              </p>
            </CardContent>
          </Card>
        </motion.div>
        
      </div>
    </section>
  );
}