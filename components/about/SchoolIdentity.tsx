"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area"; // ScrollArea import karanna

export default function SchoolIdentity() {
  return (
    <section className="py-12 md:py-20 max-w-7xl mx-auto px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">Our Identity</h2>
      
      <Tabs defaultValue="anthem" className="w-full">
        <div className="flex justify-center mb-8 md:mb-12">
          {/* Scrollable Tabs List for Mobile */}
          <TabsList className="grid w-full max-w-2xl grid-cols-3 h-auto p-1 bg-gray-100/80 rounded-full">
            <TabsTrigger value="anthem" className="text-sm md:text-lg py-2 md:py-3 rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm">Anthem</TabsTrigger>
            <TabsTrigger value="flag" className="text-sm md:text-lg py-2 md:py-3 rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm">Flag</TabsTrigger>
            <TabsTrigger value="uniform" className="text-sm md:text-lg py-2 md:py-3 rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm">Uniform</TabsTrigger>
          </TabsList>
        </div>

        {/* --- ANTHEM (UPDATED) --- */}
        <TabsContent value="anthem" className="mt-0">
          <Card className="border-none shadow-xl bg-white/80 backdrop-blur overflow-hidden">
            <CardHeader className="text-center pb-2">
                 <h3 className="text-3xl md:text-4xl font-serif text-brand-primary mb-2">School Anthem</h3>
                 <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Composed by: Alfreda De Silva</p>
            </CardHeader>
            <CardContent className="p-6 md:p-12">
              
              {/* Desktop: 2 Columns | Mobile: 1 Column */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-base md:text-lg leading-relaxed text-gray-700 font-medium italic">
                
                {/* Left Column */}
                <div className="space-y-8">
                   <div className="space-y-1">
                      <p>Our school is like a shelt' ring tree</p>
                      <p>From tender seeding grown</p>
                      <p>Where we have from our infancy</p>
                      <p>Both joy and wisdom known</p>
                   </div>

                   <div className="space-y-1">
                      <p>Her buildings filled with storied hours</p>
                      <p>Her playground lit with sun,</p>
                      <p>And drenched by gentle cooling showers</p>
                      <p>Our hours till day is done</p>
                   </div>

                   {/* Chorus Box - Highlighted */}
                   <div className="p-6 bg-brand-primary/5 rounded-xl border-l-4 border-brand-primary text-brand-primary relative">
                      <span className="absolute -top-3 left-4 bg-white px-2 text-xs font-bold uppercase tracking-widest text-brand-secondary border border-gray-100 rounded">Chorus</span>
                      <p className="font-bold mb-1">God bless our school always //</p>
                      <p>Let voices ring and glad hearts sing</p>
                      <p>God bless our school always</p>
                   </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                   <div className="space-y-1">
                      <p>For gifts of knowledge gathered here</p>
                      <p>Along her gracious ways</p>
                      <p>For benefits well known and dear</p>
                      <p>Our grateful thanks we raise</p>
                   </div>

                   <div className="space-y-1">
                      <p>For sturdy limbs and lusty voice</p>
                      <p>For nimble wit and noble aim</p>
                      <p>With one accord we now rejoice</p>
                      <p>And praise her kindly name</p>
                   </div>

                   <div className="text-center md:text-left py-2">
                       <p className="font-bold text-brand-secondary">( Repeat Chorus )</p>
                   </div>

                   <div className="space-y-1">
                      <p>To keep alive the burning flame</p>
                      <p>She kindled in our hearts</p>
                      <p>To bring distinction to her name</p>
                      <p>We go to play our part</p>
                   </div>

                   <div className="space-y-1">
                      <p>Her flag forever blowing free</p>
                      <p>Her long and cherished dream</p>
                      <p>We bear sweet girl-hood's purity</p>
                      <p>Her pattern and theme</p>
                   </div>

                   <div className="text-center md:text-left py-2">
                       <p className="font-bold text-brand-secondary">( Repeat Chorus )</p>
                   </div>
                </div>

              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* --- FLAG (UNCHANGED) --- */}
        <TabsContent value="flag" className="mt-0">
           <Card className="border-0 shadow-lg">
            <CardHeader className="text-center md:text-left">
              <CardTitle className="text-2xl md:text-3xl">The School Flag & Motto</CardTitle>
              <CardDescription className="text-base">Symbolism of our identity and faith.</CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                 <div className="relative h-[250px] md:h-[350px] w-full rounded-xl overflow-hidden border shadow-sm">
                     <Image 
                        src="/images/identity/school-flag.jpg" 
                        alt="School Flag" 
                        fill
                        className="object-contain md:object-cover"
                        onError={(e) => {}}
                     />
                 </div>
                 <div className="space-y-6 text-gray-700 text-base md:text-lg">
                    <p className="leading-relaxed">The top of our Vidhu flag is decorated with the symbol of the Lord appearing in Divine Grace.</p>
                    <ul className="grid gap-3 pl-2">
                        <li className="flex gap-3"><span className="w-3 h-3 mt-1.5 rounded-full bg-yellow-400 shrink-0"/><span><strong>Yellow Circle:</strong> Symbolizes the pulpit and gathering.</span></li>
                        <li className="flex gap-3"><span className="w-3 h-3 mt-1.5 rounded-full bg-red-600 shrink-0"/><span><strong>Red Shield:</strong> Represents trust, purity, and integrity.</span></li>
                        <li className="flex gap-3"><span className="w-3 h-3 mt-1.5 rounded-full bg-blue-600 shrink-0"/><span><strong>Three Swirling Leaves:</strong> Embody the Holy Family.</span></li>
                        <li className="flex gap-3"><span className="w-3 h-3 mt-1.5 rounded-full bg-green-600 shrink-0"/><span><strong>Olive Leaves:</strong> Success in life through education.</span></li>
                    </ul>
                    <div className="p-5 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                        <h4 className="font-bold text-xl text-yellow-800 mb-1">Motto: "Glory to God Alone"</h4>
                        <p className="text-sm md:text-base text-yellow-700 italic">Every action we do should be done so that God alone is glorified.</p>
                    </div>
                 </div>
              </div>
            </CardContent>
           </Card>
        </TabsContent>

        {/* --- UNIFORM (UNCHANGED) --- */}
        <TabsContent value="uniform" className="mt-0">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 md:p-10">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                    <div className="order-2 md:order-1">
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-brand-primary">Uniform Guidelines</h3>
                        <ul className="space-y-4 text-gray-700 text-base md:text-lg">
                            <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <span className="h-2 w-2 mt-2.5 rounded-full bg-brand-primary shrink-0" />
                                The hair should be divided in two so that it looks good in the middle of the head.
                            </li>
                            <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <span className="h-2 w-2 mt-2.5 rounded-full bg-brand-primary shrink-0" />
                                The school badge should be stitched to the right edge of the pocket.
                            </li>
                            <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <span className="h-2 w-2 mt-2.5 rounded-full bg-brand-primary shrink-0" />
                                The line of the elbow is the line of the waist of the frock.
                            </li>
                            <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <span className="h-2 w-2 mt-2.5 rounded-full bg-brand-primary shrink-0" />
                                The hem of the frock should be below the knee.
                            </li>
                            <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <span className="h-2 w-2 mt-2.5 rounded-full bg-brand-primary shrink-0" />
                                White socks and white shoes should be worn.
                            </li>
                        </ul>
                    </div>
                    <div className="relative h-[400px] md:h-[600px] w-full bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center order-1 md:order-2 shadow-inner border">
                         <Image 
                            src="/images/identity/school-uniform.jpg" 
                            alt="School Uniform" 
                            fill
                            className="object-cover"
                         />
                         <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur-sm text-white p-3 text-center text-sm font-medium">
                             Standard Student Uniform Code
                         </div>
                    </div>
                </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}