// app/events/page.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPinIcon } from "@heroicons/react/24/outline";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function EventCard({ date, title, description, location }: {
  date: { day: string, month: string },
  title: string,
  description: string,
  location: string
}) {
  return (
    <Card className="overflow-hidden flex flex-col md:flex-row transition-all duration-300 hover:shadow-2xl border-none shadow-md">
      {/* Date Section: Changed bg-blue-600 to bg-primary */}
      <div className="flex-shrink-0 w-full md:w-32 bg-primary text-white flex md:flex-col items-center justify-center p-6">
        <span className="text-5xl font-bold">{date.day}</span>
        <span className="text-2xl font-medium md:mt-1 md:ml-0 ml-3 text-yellow-400">{date.month}</span>
      </div>
      
      <div className="flex flex-col justify-center w-full p-2">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-primary">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600 text-base mb-4">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter>
          <div className="flex items-center text-gray-500">
            <MapPinIcon className="h-5 w-5 mr-2 text-primary" />
            <span>{location}</span>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}


export default function EventsPage() {
  const events = [
    {
      date: { day: "15", month: "DEC" },
      title: "Annual Prize Giving 2025",
      description: "Celebrating the academic and extracurricular achievements of our students.",
      location: "School Main Hall"
    },
    {
      date: { day: "22", month: "DEC" },
      title: "Christmas Carols",
      description: "Join us for an evening of festive music and celebration.",
      location: "School Chapel"
    },
    {
      date: { day: "10", month: "JAN" },
      title: "Science Day Exhibition 2026",
      description: "Discover the innovative projects by our talented students.",
      location: "Science Laboratory"
    },
    {
      date: { day: "25", month: "JAN" },
      title: "Inter-House Sports Meet",
      description: "A day of thrilling athletic competition and house spirit.",
      location: "School Grounds"
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
            Upcoming Events
          </h1>

          <div className="space-y-8 max-w-4xl mx-auto">
            {events.map((event) => (
              <EventCard 
                key={event.title}
                date={event.date}
                title={event.title}
                description={event.description}
                location={event.location}
              />
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}