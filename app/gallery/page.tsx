// app/gallery/page.tsx
// PASTE THIS ENTIRE CODE

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

// IMPORTANT: 
// 1. Create a folder: /public/gallery/
// 2. Add your school photos inside it (e.g., photo1.jpg, photo2.jpg)
// 3. Update the 'galleryImages' list below with your image file names.

const galleryImages = [
  { src: "/gallery/photo1.jpg", alt: "School Event" },
  { src: "/gallery/photo2.jpg", alt: "Sports Meet" },
  { src: "/gallery/photo3.jpg", alt: "Prize Giving" },
  { src: "/gallery/photo4.jpg", alt: "Classroom Activity" },
  { src: "/gallery/photo5.jpg", alt: "School Building" },
  { src: "/gallery/photo6.jpg", alt: "Students" },
  { src: "/gallery/photo7.jpg", alt: "Art Exhibition" },
  { src: "/gallery/photo8.jpg", alt: "Science Lab" },
  // Add as many images as you like
];

export default function GalleryPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Page Content */}
      <div className="pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-12 text-center">
            Our Gallery
          </h1>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-16">
            Moments captured from our vibrant school life, events, and activities.
          </p>

          {/* Responsive Image Grid */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg break-inside-avoid">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Placeholder if no images are added yet */}
          {galleryImages.length === 0 && (
            <div className="text-center text-gray-500 text-xl py-20">
              <p>Gallery images are being updated. Please check back soon!</p>
              <p className="text-sm mt-2">(Remember to add images to /public/gallery/ and update the list in app/gallery/page.tsx)</p>
            </div>
          )}

        </div>
      </div>

      <Footer />
    </main>
  );
}