import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Home, AlertCircle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 text-center bg-gray-50">
      
      {/* Main Container */}
      <div className="max-w-md w-full space-y-8">
        
        {/* Icon & Error Code */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <span className="text-9xl font-bold text-[#800000]">404</span>
          </div>
          <div className="relative z-10 flex justify-center">
            <div className="h-24 w-24 rounded-full bg-red-50 flex items-center justify-center animate-pulse">
              <AlertCircle className="h-12 w-12 text-[#800000]" />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="text-lg text-gray-600">
            Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button 
            asChild 
            className="bg-[#800000] hover:bg-[#660000] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          </Button>

          <Button 
            asChild 
            variant="outline" 
            className="border-[#800000] text-[#800000] hover:bg-red-50 px-8 py-6 text-lg rounded-full"
          >
            <Link href="/contact">
              Contact Us
            </Link>
          </Button>
        </div>

      </div>

      {/* Footer Note */}
      <p className="mt-16 text-sm text-gray-500">
        St. Joseph's Girls' School Nugegoda
      </p>
    </div>
  )
}