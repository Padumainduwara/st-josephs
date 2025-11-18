// components/CoreValues.tsx
"use client";

import { motion, Variants } from "framer-motion"; 
import { AcademicCapIcon, SparklesIcon, TrophyIcon } from "@heroicons/react/24/solid";

// shadcn/ui Card components
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, 
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function CoreValues() {
  const values = [
    {
      icon: <AcademicCapIcon className="h-10 w-10 text-blue-600" />,
      title: "Academic Excellence",
      description:
        "Dedicated to providing a superior educational foundation for every student.",
    },
    {
      icon: <SparklesIcon className="h-10 w-10 text-blue-600" />,
      title: "Strong Values",
      description:
        "Nurturing discipline, respect, and integrity in a faith-based environment.",
    },
    {
      icon: <TrophyIcon className="h-10 w-10 text-blue-600" />,
      title: "Holistic Development",
      description:
        "Balancing academics with sports, arts, and extracurricular activities.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50"> {/* bg-blue-50 -> bg-gray-50 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Why St. Joseph's?
          </h2>
          <p className="text-lg text-gray-700 mt-2">
            A tradition of excellence in education and character.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            // ALUTH CARD COMPONENT EKA
            <motion.div
              key={value.title}
              variants={cardVariants}
              custom={index} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="h-full text-center flex flex-col items-center transition-all duration-300 hover:shadow-xl">
                <CardHeader className="items-center">
                  <div className="bg-blue-100 p-4 rounded-full mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-2xl text-blue-900">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-base">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}