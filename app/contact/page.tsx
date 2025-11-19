// app/contact/page.tsx

"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {

  const FORMSPREE_ENDPOINT = "YOUR_FORMSPREE_ENDPOINT_URL_HERE";

  return (
    <main className="bg-white">
      <Navbar />

      <div className="pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
            Get In Touch
          </h1>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-16">
            We are here to answer any questions you may have. 
            Reach out to us and we'll respond as soon as we can.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* Column 1: Contact Details */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-lg border-t-4 border-primary">
              <h2 className="text-3xl font-semibold text-primary mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex">
                  {/* Icons changed to Primary (Maroon) */}
                  <MapPinIcon className="h-7 w-7 text-primary flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600 text-lg">
                      St. Joseph’s Girls’ School, Nugegoda, Sri Lanka.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <PhoneIcon className="h-7 w-7 text-primary flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600 text-lg">
                      011-2822238
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <EnvelopeIcon className="h-7 w-7 text-primary flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600 text-lg">
                      info@stjosephsgirlsschool.sch.lk
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Contact Form */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-lg border-t-4 border-primary">
              <h2 className="text-3xl font-semibold text-primary mb-8">
                Send Us a Message
              </h2>
              <form 
                action={FORMSPREE_ENDPOINT} 
                method="POST" 
                className="space-y-6"
              >
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="e.g. John Doe" 
                    required 
                    className="focus-visible:ring-primary"
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
                    className="focus-visible:ring-primary"
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
                    className="focus-visible:ring-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    placeholder="Type your message here..." 
                    required 
                    className="focus-visible:ring-primary"
                  />
                </div>
                
                <div>
                  {/* Button defaults to Primary (Maroon) */}
                  <Button 
                    type="submit" 
                    className="w-full text-lg bg-primary hover:bg-red-900"
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