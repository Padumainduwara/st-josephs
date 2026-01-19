// components/NewsCard.tsx

import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NewsCard() {
  const title = "Annual Sports Meet 2025 Highlights";
  const date = "Oct 28, 2025";
  const excerpt = "A day of triumph, teamwork, and unforgettable moments...";
  const imageUrl = "/images/school-hero-image.png"; 
  const slug = "/news/annual-sports-meet"; 

  return (
    <Card className="w-full max-w-sm overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:border-primary/50">
      
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <CardHeader>
        {/* Date color changed to Maroon/Primary */}
        <p className="text-sm text-primary font-bold">{date}</p>
        <CardTitle className="text-2xl font-semibold text-foreground leading-snug">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <CardDescription className="text-base text-gray-600">
          {excerpt}
        </CardDescription>
      </CardContent>
      
      <CardFooter>
        <Button asChild variant="link" className="p-0 text-lg text-primary hover:text-red-900">
          <Link href={slug}>
            Read More &rarr;
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}