// components/CoreValues.tsx
"use client";

import { motion, Variants } from "framer-motion"; 
import {
  AcademicCapIcon,
  SparklesIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";


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
      icon: <AcademicCapIcon className="h-12 w-12 text-white" />,
      title: "Academic Excellence",
      description:
        "Dedicated to providing a superior educational foundation for every student.",
    },
    {
      icon: <SparklesIcon className="h-12 w-12 text-white" />,
      title: "Strong Values",
      description:
        "Nurturing discipline, respect, and integrity in a faith-based environment.",
    },
    {
      icon: <TrophyIcon className="h-12 w-12 text-white" />,
      title: "Holistic Development",
      description:
        "Balancing academics with sports, arts, and extracurricular activities.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-blue-50">
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
            <motion.div
              key={value.title}
              className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center"
              variants={cardVariants}
              custom={index} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="bg-blue-600 p-4 rounded-full mb-6">
                {value.icon}
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}