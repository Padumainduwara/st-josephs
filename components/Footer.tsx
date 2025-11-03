// components/Footer.tsx

import Link from "next/link";
// Social Media Icons ඕන නම්:
// import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
// (Install කරන්න ඕන: npm install react-icons)

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-100 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Logo & Motto */}
          <div className="md:col-span-1">
            <Link href="/" className="text-3xl font-bold text-white mb-4 block">
              St. Joseph's
            </Link>
            <p className="text-blue-200">
              Nurturing Minds, Shaping Futures.
            </p>
            {/* Social Icons (Optional) */}
            {/* <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-white"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-white"><FaYoutube size={24} /></a>
              <a href="#" className="hover:text-white"><FaInstagram size={24} /></a>
            </div> */}
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h5>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition duration-150">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition duration-150">About Us</Link></li>
              <li><Link href="/news" className="hover:text-white transition duration-150">News</Link></li>
              <li><Link href="/events" className="hover:text-white transition duration-150">Events</Link></li>
              <li><Link href="/contact" className="hover:text-white transition duration-150">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Academics */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">
              Academics
            </h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition duration-150">Admissions</a></li>
              <li><a href="#" className="hover:text-white transition duration-150">Curriculum</a></li>
              <li><a href="#" className="hover:text-white transition duration-150">Examinations</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">
              Contact Us
            </h5>
            <ul className="space-y-2">
              <li className="text-blue-200">St. Joseph's Girls' School,</li>
              <li className="text-blue-200">Nugegoda, Sri Lanka.</li>
              <li className="text-blue-200 mt-2">
                <a href="tel:+94112852852" className="hover:text-white transition duration-150">
                  (011) 285 2852
                </a>
              </li>
              <li>
                <a href="mailto:info@sjgs.lk" className="hover:text-white transition duration-150">
                  info@sjgs.lk
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-300">
          <p>
            &copy; {new Date().getFullYear()} St. Joseph's Girls' School. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}