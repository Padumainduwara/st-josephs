// app/gallery/page.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const galleryImages = [
  { src: "/gallery/photo1.jpg", alt: "School Event" },
  { src: "/gallery/photo2.jpg", alt: "Sports Meet" },
  { src: "/gallery/photo3.jpg", alt: "Prize Giving" },
  { src: "/gallery/photo4.jpg", alt: "Classroom Activity" },
  { src: "/gallery/photo5.jpg", alt: "School Building" },
  { src: "/gallery/photo6.jpg", alt: "Students" },
  { src: "/gallery/photo7.jpg", alt: "Art Exhibition" },
  { src: "/gallery/photo8.jpg", alt: "Science Lab" },
];

export default function GalleryPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <div className="pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
            Our Gallery
          </h1>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-16">
            Moments captured from our vibrant school life, events, and activities.
          </p>

          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg break-inside-avoid hover:shadow-2xl transition-shadow duration-300 border-2 border-transparent hover:border-primary/20">
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

          {galleryImages.length === 0 && (
            <div className="text-center text-gray-500 text-xl py-20">
              <p>Gallery images are being updated. Please check back soon!</p>
              <p className="text-sm mt-2">(Remember to add images to /public/gallery/ and update the list)</p>
            </div>
          )}

        </div>
      </div>

      <Footer />
    </main>
  );
}