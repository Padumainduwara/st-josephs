// components/NewsCard.tsx

"use client"; // <-- මේක අලුතෙන් add කලේ
import Link from "next/link";
import { motion } from "framer-motion"; // <-- මේක තමයි error එකට හේතුව, දැන් add කලා

export default function NewsCard() {
  // පස්සෙ Supabase වලින් එන data මෙතනට props විදියට ගන්න
  // const { title, imageUrl, excerpt, slug } = props;

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]"
      // Hover animation එක
      whileHover={{ y: -5 }} // Hover කරද්දි පොඩ්ඩක් උඩට යන්න
    >
      {/* 1. Image */}
      {/* <Image src={imageUrl} alt={title} width={400} height={250} className="w-full h-48 object-cover" /> */}
      {/* Placeholder Image */}
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-400">
        News Image
      </div>

      {/* 2. Content */}
      <div className="p-6 flex-grow flex flex-col">
        <span className="text-sm text-blue-600 font-medium">Oct 28, 2025</span>
        <h3 className="text-xl font-semibold text-blue-900 mt-2 mb-3">
          {/* {title} */}
          Annual Sports Meet 2025 Highlights
        </h3>
        <p className="text-gray-600 flex-grow">
          {/* {excerpt} */}
          A day of triumph, teamwork, and unforgettable moments...
        </p>
        <Link
          href={`/news/annual-sports-meet`} // {slug}
          className="mt-4 text-blue-600 font-semibold hover:text-blue-800 transition duration-150 self-start"
        >
          Read More &rarr;
        </Link>
      </div>
    </motion.div>
  );
}