"use client";

import Image from "next/image";

// Make sure to rename your images exactly like this in public/images/principals/
const principals = [
  { name: "Mother Baptist", period: "1951 - 1954", image: "/images/principals/principal-baptist.jpg" },
  { name: "Mother Desilles", period: "1959 - 1969", image: "/images/principals/principal-diselss.jpg" },
  { name: "Mrs. Monika Ranasinghe", period: "1970 - 1981", image: "/images/principals/principal-monika.jpg" },
  { name: "Mrs. Malani Hettiarachchi", period: "1982 - 1985", image: "/images/principals/principal-malani.jpg" },
  { name: "Mrs. L.A.H. Ariyapperuma", period: "1985 - 1998", image: "/images/principals/principal-ashoka.jpg" },
  { name: "Mrs. E.A.C. Silva", period: "1999 - 2001", image: "/images/principals/principal-silva.jpg" },
  { name: "Mrs. N.S.S. Coory", period: "2001 - 2005", image: "/images/principals/principal-coory.jpg" },
  { name: "Mrs. P.R. Rajakaruna", period: "2006 - 2008", image: "/images/principals/principal-rajakaruna.jpg" },
  { name: "Miss. P.A.A.B.C. Perera", period: "2008 - 2018", image: "/images/principals/principal-chandani.jpg" },
];

export default function PrincipalList() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Principals Through the Years</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {principals.map((principal, index) => (
            <div key={index} className="group relative">
              {/* Image Frame */}
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-gray-100 shadow-md">
                 <Image
                  src={principal.image}
                  alt={principal.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  // Placeholder blur effect add karanna puluwan image load wenakan
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-xl font-bold leading-tight">{principal.name}</h3>
                  <p className="text-white/80 font-medium mt-1">{principal.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}