// app/news/page.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import Link from "next/link"; 

import { Button } from "@/components/ui/button";

export default function NewsPage() {
  const newsItems = [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 } ];

  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
            Latest News
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {newsItems.map((item) => (
              <NewsCard key={item.id} />
            ))}
          </div>

          {/* Pagination with Maroon (Primary) Buttons */}
          <div className="flex justify-center mt-16">
            <nav className="flex space-x-2">
              <Button asChild variant="outline" className="hover:text-primary hover:border-primary">
                <Link href="#">Previous</Link>
              </Button>
              <Button asChild className="bg-primary hover:bg-red-900">
                <Link href="#">1</Link>
              </Button>
              <Button asChild variant="outline" className="hover:text-primary hover:border-primary">
                <Link href="#">2</Link>
              </Button>
              <Button asChild variant="outline" className="hover:text-primary hover:border-primary">
                <Link href="#">3</Link>
              </Button>
              <Button asChild variant="outline" className="hover:text-primary hover:border-primary">
                <Link href="#">Next</Link>
              </Button>
            </nav>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}