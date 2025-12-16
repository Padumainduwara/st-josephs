"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export default function AchievementsPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-32 pb-16 container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-primary text-center mb-10">Hall of Fame</h1>

        {/* Note: If you don't have the Tabs component installed in shadcn, 
            you can use the same state-based method I used in StaffPage. 
            Assuming standard shadcn tabs here for structure. */}
        
        <div className="grid md:grid-cols-3 gap-8">
            {[
                { title: "Netball Champions", cat: "Sports", img: "/images/IMG_6162.JPG" },
                { title: "All Island Dancing", cat: "Aesthetic", img: "/images/IMG_6165.JPG" },
                { title: "Best O/L Results", cat: "Academic", img: "/images/IMG_6152.JPG" },
                { title: "Choir Victory", cat: "Aesthetic", img: "/images/IMG_6159.JPG" },
                { title: "Athletics Gold", cat: "Sports", img: "/images/IMG_6160.JPG" },
                { title: "Science Quiz", cat: "Academic", img: "/images/IMG_6154.JPG" },
            ].map((item, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all">
                    <div className="relative h-48 w-full">
                        <Image src={item.img} alt={item.title} fill className="object-cover" />
                        <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 text-xs font-bold rounded text-primary uppercase">
                            {item.cat}
                        </div>
                    </div>
                    <CardContent className="p-4">
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-500">Provincial Level - 2023/2024</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}