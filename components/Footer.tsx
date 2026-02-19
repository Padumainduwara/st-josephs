import Link from "next/link";
import Image from "next/image"; 
import SchoolLogo from "@/public/Scl_logo.png"; 

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Column 1: Logo & Motto */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src={SchoolLogo}
                alt="St. Joseph's Logo"
                width={50}
                height={50}
                className="transition-all duration-300 h-10 w-auto md:h-12"
              />
              <span className="text-2xl font-bold text-white">
                St. Joseph's
              </span>
            </Link>
            <p className="text-yellow-100 text-lg font-serif italic">
              "Glory to God Alone"
            </p>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h5 className="text-lg font-bold text-yellow-400 mb-4 uppercase tracking-wider">
              Explore
            </h5>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-yellow-200 transition duration-150">Home</Link></li>
              <li><Link href="/about" className="hover:text-yellow-200 transition duration-150">History & Vision</Link></li>
              <li><Link href="/sds" className="hover:text-yellow-200 transition duration-150">SDS</Link></li>
              <li><Link href="/alumni" className="hover:text-yellow-200 transition duration-150">OGA</Link></li>
              <li><Link href="/resources" className="hover:text-yellow-200 transition duration-150">Downloads</Link></li>
            </ul>
          </div>

          {/* Column 3: Government Resources */}
          <div>
            <h5 className="text-lg font-bold text-yellow-400 mb-4 uppercase tracking-wider">
              Important Links
            </h5>
            <ul className="space-y-3">
              <li><a href="https://www.moe.gov.lk/" target="_blank" className="hover:text-yellow-200 transition duration-150">Ministry of Education</a></li>
              <li><a href="https://www.doenets.lk/" target="_blank" className="hover:text-yellow-200 transition duration-150">Dept. of Examinations</a></li>
              <li><a href="https://www.e-thaksalawa.moe.gov.lk/" target="_blank" className="hover:text-yellow-200 transition duration-150">e-Thaksalawa</a></li>
              <li><a href="https://nie.lk/" target="_blank" className="hover:text-yellow-200 transition duration-150">National Institute of Education</a></li>
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
                <a href="tel:011-2822238" className="hover:text-yellow-200 transition duration-150">011-2822238</a>
              </li>
              <li>
                <a href="mailto:info@stjosephsgirlsschool.sch.lk" className="hover:text-yellow-200 transition duration-150">info@stjosephsgirlsschool.sch.lk</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Developer Credits */}
        <div className="border-t border-red-900/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm gap-4">
          
          {/* School Copyright */}
          <div className="text-center md:text-left order-2 md:order-1">
            <p>&copy; {new Date().getFullYear()} St. Joseph's Girls' School. All Rights Reserved.</p>
          </div>

          {/* Developer Credits (Standard Format) */}
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 text-center md:text-right order-1 md:order-2">
            <p>
              Designed by <a href="https://padumainduwara.me" target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-yellow-400 transition-colors">Paduma Induwara</a>
            </p>            
            <span className="hidden sm:inline text-gray-500">|</span>
            <p>
              Developed by <a href="https://axioralabs.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-yellow-400 transition-colors">Axiora Labs</a>
            </p>           
          </div>

        </div>
      </div>
    </footer>
  );
}