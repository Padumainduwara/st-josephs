"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function SDSPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-32 pb-16 container mx-auto px-4">
        
        <h1 className="text-4xl font-extrabold text-primary text-center mb-6">School Development Society (SDS)</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
            <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Role</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    The SDS is a vital body comprising parents, teachers, and well-wishers dedicated to the upliftment of St. Joseph's Girls' School. We work hand-in-hand with the administration to improve infrastructure, support student welfare, and organize fundraising events.
                </p>
                <div className="bg-red-50 p-6 rounded-xl">
                    <h3 className="font-bold text-primary mb-3">Key Objectives</h3>
                    <ul className="space-y-2">
                        {["Infrastructure Development", "Student Welfare", "Fundraising", "Parent-Teacher Collaboration"].map(item => (
                            <li key={item} className="flex items-center gap-2 text-gray-700">
                                <CheckCircleIcon className="h-5 w-5 text-primary"/> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
            {/* Office Bearers */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-inner">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Executive Committee</h2>
                <div className="space-y-4">
                    <div className="flex justify-between border-b pb-2">
                        <span className="font-bold text-gray-700">President</span>
                        <span className="text-gray-600">Principal (Ex-Officio)</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                        <span className="font-bold text-gray-700">Secretary</span>
                        <span className="text-gray-600">Mrs. Secretary Name</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                        <span className="font-bold text-gray-700">Treasurer</span>
                        <span className="text-gray-600">Mr. Treasurer Name</span>
                    </div>
                    <div className="flex justify-between pt-2">
                        <span className="font-bold text-gray-700">VP (Parents)</span>
                        <span className="text-gray-600">Mr. Name Here</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}