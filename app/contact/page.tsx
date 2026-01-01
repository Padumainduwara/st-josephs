"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  PaperAirplaneIcon
} from "@heroicons/react/24/solid";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {

  // Replace this with your actual Formspree ID or backend endpoint
  const FORMSPREE_ENDPOINT = "YOUR_FORMSPREE_ENDPOINT_URL_HERE";

  return (
    <main className="overflow-x-hidden bg-gray-50 min-h-screen flex flex-col pt-[80px]">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Using a school exterior image */}
          <Image
            src="/images/IMG_6165.JPG" 
            alt="Contact St. Joseph's"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Overlay - Deep Maroon */}
        <div className="absolute inset-0 bg-[#800000]/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        
        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl">
              Get In Touch
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg md:text-2xl text-yellow-300 font-serif italic max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              "We are here to answer any questions you may have."
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* --- LEFT COLUMN: CONTACT INFO --- */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-white p-8 rounded-2xl shadow-xl border-t-8 border-t-[#800000]">
                <CardContent className="p-0 space-y-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-[#800000] mb-4">Contact Information</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Reach out to us through any of the following channels. Our administration office is open on weekdays from 7:30 AM to 2:00 PM.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Address */}
                    <div className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-[#800000]/5 transition-colors group">
                      <div className="bg-white p-3 rounded-full shadow-sm mr-5 group-hover:scale-110 transition-transform">
                        <MapPinIcon className="h-6 w-6 text-[#800000]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Our Address</h3>
                        <p className="text-gray-600">
                          St. Joseph’s Girls’ School,<br/>
                          High Level Road, Nugegoda,<br/>
                          Sri Lanka.
                        </p>
                      </div>
                    </div>
                    
                    {/* Phone */}
                    <div className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-[#800000]/5 transition-colors group">
                      <div className="bg-white p-3 rounded-full shadow-sm mr-5 group-hover:scale-110 transition-transform">
                        <PhoneIcon className="h-6 w-6 text-[#800000]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Phone Number</h3>
                        <p className="text-gray-600 font-medium">
                          <a href="tel:0112822238" className="hover:text-[#800000] transition-colors">011-2822238</a>
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-[#800000]/5 transition-colors group">
                      <div className="bg-white p-3 rounded-full shadow-sm mr-5 group-hover:scale-110 transition-transform">
                        <EnvelopeIcon className="h-6 w-6 text-[#800000]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Email Address</h3>
                        <p className="text-gray-600 font-medium break-all">
                          <a href="mailto:info@stjosephsgirlsschool.sch.lk" className="hover:text-[#800000] transition-colors">
                            info@stjosephsgirlsschool.sch.lk
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* --- RIGHT COLUMN: CONTACT FORM --- */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border-t-8 border-t-yellow-500">
                <CardContent className="p-0">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    Send a Message <PaperAirplaneIcon className="h-6 w-6 text-yellow-500" />
                  </h2>
                  <form 
                    action={FORMSPREE_ENDPOINT} 
                    method="POST" 
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 font-medium">Full Name</Label>
                        <Input 
                          type="text" 
                          id="name" 
                          name="name" 
                          placeholder="John Doe" 
                          required 
                          className="focus:ring-[#800000] focus:border-[#800000] bg-gray-50 border-gray-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                        <Input 
                          type="email" 
                          id="email" 
                          name="email" 
                          placeholder="john@example.com" 
                          required 
                          className="focus:ring-[#800000] focus:border-[#800000] bg-gray-50 border-gray-200"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-700 font-medium">Subject</Label>
                      <Input 
                        type="text" 
                        id="subject" 
                        name="subject" 
                        placeholder="Inquiry regarding admissions..." 
                        required 
                        className="focus:ring-[#800000] focus:border-[#800000] bg-gray-50 border-gray-200"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        rows={5} 
                        placeholder="Type your message here..." 
                        required 
                        className="focus:ring-[#800000] focus:border-[#800000] bg-gray-50 border-gray-200 resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full text-lg py-6 bg-[#800000] hover:bg-[#600000] text-white shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

        </div>

        {/* --- MAP SECTION --- */}
        <div className="mt-20">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
          >
            {/* Google Maps Embed */}
            <iframe 
              src="https://www.google.com/maps?q=St.+Joseph's+Girls+School+Nugegoda&output=embed" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[400px] md:h-[500px]"
            ></iframe>
          </motion.div>
        </div>

      </div>

      <Footer />
    </main>
  );
}