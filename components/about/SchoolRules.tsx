"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Clock, 
  ShieldAlert, 
  UserCheck, 
  Shirt, 
  BookOpen, 
  Gavel,
} from "lucide-react";

export default function SchoolRules() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 md:w-64 md:h-64 bg-brand-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 md:w-64 md:h-64 bg-brand-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rules & Regulations</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Discipline is the bridge between goals and accomplishment. Our guidelines ensure a safe, productive, and harmonious environment for all.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-6">
          <Accordion type="single" collapsible className="w-full space-y-4">
            
            {/* 1. Punctuality & Attendance */}
            <AccordionItem value="item-1" className="bg-white border border-gray-100 rounded-xl shadow-sm px-1 md:px-2">
              <AccordionTrigger className="text-base md:text-lg font-semibold px-3 md:px-4 hover:text-brand-primary hover:no-underline py-4">
                <div className="flex items-center gap-3 md:gap-4 text-left">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                    <Clock className="w-5 h-5 md:w-6 md:h-6"/>
                  </div>
                  <span>Punctuality & Attendance</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-3 md:px-4 pb-4 text-gray-600 space-y-3 pl-12 md:pl-[4.5rem]">
                 <ul className="list-disc space-y-2 text-sm md:text-base">
                   <li>Students must be in class <strong>before 7.25 AM</strong> and immediately after the interval.</li>
                   <li><strong>80% Attendance</strong> is mandatory to sit for public exams and hold leadership positions.</li>
                   <li>Absence exceeding 3 days requires a <strong>medical certificate</strong> to be recorded in the SRB.</li>
                 </ul>
              </AccordionContent>
            </AccordionItem>

            {/* 2. Uniform & Appearance */}
            <AccordionItem value="item-2" className="bg-white border border-gray-100 rounded-xl shadow-sm px-1 md:px-2">
              <AccordionTrigger className="text-base md:text-lg font-semibold px-3 md:px-4 hover:text-brand-primary hover:no-underline py-4">
                <div className="flex items-center gap-3 md:gap-4 text-left">
                  <div className="p-2 bg-purple-50 text-purple-600 rounded-lg shrink-0">
                    <Shirt className="w-5 h-5 md:w-6 md:h-6"/>
                  </div>
                  <span>Uniform & Personal Appearance</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-3 md:px-4 pb-4 text-gray-600 space-y-3 pl-12 md:pl-[4.5rem]">
                 <ul className="list-disc space-y-2 text-sm md:text-base">
                   <li>Uniform must be neat, clean, and conform to school standards (hem below the knee).</li>
                   <li><strong>Hair:</strong> Must be divided into two plaits (if long) or combed neatly (if short). Hair should not cover ears.</li>
                   <li><strong>Accessories:</strong> Only small earrings allowed. Wristwatches allowed only for Prefects & A/L students.</li>
                   <li>White socks and white shoes are compulsory.</li>
                 </ul>
              </AccordionContent>
            </AccordionItem>

            {/* 3. General Conduct & Discipline */}
            <AccordionItem value="item-3" className="bg-white border border-gray-100 rounded-xl shadow-sm px-1 md:px-2">
              <AccordionTrigger className="text-base md:text-lg font-semibold px-3 md:px-4 hover:text-brand-primary hover:no-underline py-4">
                <div className="flex items-center gap-3 md:gap-4 text-left">
                   <div className="p-2 bg-red-50 text-red-600 rounded-lg shrink-0">
                    <UserCheck className="w-5 h-5 md:w-6 md:h-6"/>
                  </div>
                  <span>General Conduct & Discipline</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-3 md:px-4 pb-4 text-gray-600 space-y-3 pl-12 md:pl-[4.5rem]">
                 <ul className="list-disc space-y-2 text-sm md:text-base">
                   <li>Students must maintain high behavior standards in public to protect the school's reputation.</li>
                   <li><strong>Strict Polythene Ban:</strong> Lunch sheets and polythene are strictly prohibited inside the school. Meals should be in reusable boxes.</li>
                   <li>Misconduct is punishable and may lead to expulsion.</li>
                 </ul>
              </AccordionContent>
            </AccordionItem>

            {/* 4. Entry, Security & Visitors */}
            <AccordionItem value="item-4" className="bg-white border border-gray-100 rounded-xl shadow-sm px-1 md:px-2">
              <AccordionTrigger className="text-base md:text-lg font-semibold px-3 md:px-4 hover:text-brand-primary hover:no-underline py-4">
                <div className="flex items-center gap-3 md:gap-4 text-left">
                   <div className="p-2 bg-yellow-50 text-yellow-600 rounded-lg shrink-0">
                    <ShieldAlert className="w-5 h-5 md:w-6 md:h-6"/>
                  </div>
                  <span>Entry, Security & Visitors</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-3 md:px-4 pb-4 text-gray-600 space-y-3 pl-12 md:pl-[4.5rem]">
                 <ul className="list-disc space-y-2 text-sm md:text-base">
                   <li><strong>Student Record Book (SRB):</strong> Must be brought to school daily to enter premises.</li>
                   <li><strong>Visitors:</strong> Not allowed without permission. Must meet Deputy/Assistant Principal first.</li>
                   <li>School gates are closed to all vehicles unless a gate pass is issued.</li>
                 </ul>
              </AccordionContent>
            </AccordionItem>
            
            {/* 5. Academics & Activities */}
             <AccordionItem value="item-5" className="bg-white border border-gray-100 rounded-xl shadow-sm px-1 md:px-2">
              <AccordionTrigger className="text-base md:text-lg font-semibold px-3 md:px-4 hover:text-brand-primary hover:no-underline py-4">
                <div className="flex items-center gap-3 md:gap-4 text-left">
                   <div className="p-2 bg-green-50 text-green-600 rounded-lg shrink-0">
                    <BookOpen className="w-5 h-5 md:w-6 md:h-6"/>
                  </div>
                  <span>Academics & Extracurriculars</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-3 md:px-4 pb-4 text-gray-600 space-y-3 pl-12 md:pl-[4.5rem]">
                 <ul className="list-disc space-y-2 text-sm md:text-base">
                   <li>Homework must be completed and submitted on the stipulated date.</li>
                   <li><strong>Outside Activities:</strong> Joining outside clubs requires written permission from the Principal.</li>
                   <li>Certificates must be requested 7 days in advance (Mondays/Thursdays only).</li>
                 </ul>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>

        {/* Warning / Note Box */}
        <div className="mt-8 p-6 bg-red-50 border border-red-100 rounded-xl flex items-start gap-4 shadow-sm">
            <Gavel className="w-6 h-6 text-red-600 shrink-0 mt-1" />
            <div>
                <h4 className="font-bold text-red-800 text-lg">Important Note on Discipline</h4>
                <p className="text-red-700 mt-2 text-sm md:text-base">
                    Strict disciplinary action will be taken against any student whose behavior brings disrepute to the school. Parents are kindly requested to support the school in maintaining these standards.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}