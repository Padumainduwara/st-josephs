// components/Footer.tsx

import Link from "next/link";
import Image from "next/image"; 
import SchoolLogo from "@/public/Scl_logo.png"; 

export default function Footer() {
  return (
    // bg-blue-950 ain karala bg-primary (Maroon) damma
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Column 1: Logo & Motto */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src={SchoolLogo}
                alt="St. Joseph's Logo"
                width={50}
                height={50}
                className="h-12 w-12"
              />
              <span className="text-2xl font-bold text-white">
                St. Joseph's
              </span>
            </Link>
            <p className="text-yellow-100 text-lg font-serif italic">
              "Glory to God Alone"
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h5 className="text-lg font-bold text-yellow-400 mb-4 uppercase tracking-wider">
              Explore
            </h5>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-yellow-200 transition duration-150">Home</Link></li>
              <li><Link href="/about" className="hover:text-yellow-200 transition duration-150">About Us</Link></li>
              <li><Link href="/news" className="hover:text-yellow-200 transition duration-150">News</Link></li>
              <li><Link href="/events" className="hover:text-yellow-200 transition duration-150">Events</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-200 transition duration-150">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Student Life */}
          <div>
            <h5 className="text-lg font-bold text-yellow-400 mb-4 uppercase tracking-wider">
              Student Life
            </h5>
            <ul className="space-y-3">
              <li><Link href="/admission" className="hover:text-yellow-200 transition duration-150">Admissions</Link></li>
              <li><Link href="/academics" className="hover:text-yellow-200 transition duration-150">Academics</Link></li>
              <li><Link href="/clubs" className="hover:text-yellow-200 transition duration-150">Clubs & Societies</Link></li>
              <li><Link href="/gallery" className="hover:text-yellow-200 transition duration-150">Gallery</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h5 className="text-lg font-bold text-yellow-400 mb-4 uppercase tracking-wider">
              Contact Us
            </h5>
            <ul className="space-y-2">
              <li className="text-gray-100">St. Joseph’s Girls’ School,</li>
              <li className="text-gray-100">Nugegoda, Sri Lanka.</li>
              <li className="text-gray-100 mt-3">
                <a href="tel:011-2822238" className="hover:text-yellow-200 transition duration-150">
                  011-2822238
                </a>
              </li>
              <li>
                <a href="mailto:info@stjosephsgirlsschool.sch.lk" className="hover:text-yellow-200 transition duration-150">
                  info@stjosephsgirlsschool.sch.lk
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-900/50 mt-12 pt-8 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} St. Joseph's Girls' School. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}