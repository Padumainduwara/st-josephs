// app/contact/page.tsx
// PASTE THIS ENTIRE UPDATED CODE

"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

// 1. shadcn/ui components import karaganna
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {

  // Obage Formspree eka sadaha, form tag eka wenas karanna
  const FORMSPREE_ENDPOINT = "YOUR_FORMSPREE_ENDPOINT_URL_HERE";

  return (
    <main className="bg-white">
      <Navbar />

      {/* Page Content */}
      <div className="pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-12 text-center">
            Get In Touch
          </h1>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-16">
            We are here to answer any questions you may have. 
            Reach out to us and we'll respond as soon as we can.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* Column 1: Contact Details (No changes needed here) */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-blue-900 mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex">
                  <MapPinIcon className="h-7 w-7 text-blue-600 flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600 text-lg">
                      St. Joseph’s Girls’ School, Nugegoda, Sri Lanka.
                    </p>
                  </div>
                </div>
                {/* ... (anith contact details okkoma me widiyata thiyenawa) ... */}
                <div className="flex">
                  <PhoneIcon className="h-7 w-7 text-blue-600 flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600 text-lg">
                      011-2822238
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <EnvelopeIcon className="h-7 w-7 text-blue-600 flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600 text-lg">
                      info@stjosephsgirlsschool.sch.lk
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Contact Form (UPDATED with shadcn/ui) */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-blue-900 mb-8">
                Send Us a Message
              </h2>
              <form 
                action={FORMSPREE_ENDPOINT} 
                method="POST" 
                className="space-y-6"
              >
                {/* 2. Aluth shadcn Input ekak use karamu */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="e.g. John Doe" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="e.g. john@example.com" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    placeholder="Subject of your message" 
                    required 
                  />
                </div>
                
                {/* 3. Aluth shadcn Textarea ekak use karamu */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    placeholder="Type your message here..." 
                    required 
                  />
                </div>
                
                {/* 4. Aluth shadcn Button ekak use karamu */}
                <div>
                  <Button 
                    type="submit" 
                    className="w-full text-lg" // 'size="lg"' wage oneth nam danna
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}