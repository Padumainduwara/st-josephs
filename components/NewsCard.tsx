// components/NewsCard.tsx
// PASTE THIS ENTIRE UPDATED CODE

import Link from "next/link";
import Image from "next/image";

// 1. shadcn/ui Card components import karaganna
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Button ekath gannawa

export default function NewsCard() {
  // Me data tika obata props walin ganna puluwan.
  // Danata, eka component ekak hadamu.
  const title = "Annual Sports Meet 2025 Highlights";
  const date = "Oct 28, 2025";
  const excerpt = "A day of triumph, teamwork, and unforgettable moments...";
  const imageUrl = "/school-hero-image.png"; // Obage public folder eke image ekak
  const slug = "/news/annual-sports-meet"; // Adala news post eke path eka

  return (
    // 2. Parana div, <Card> eken replace karanna
    <Card className="w-full max-w-sm overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-xl">
      
      {/* 3. Image eka CardHeader eke danna puluwan, nethnam CardContent kalin */}
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <CardHeader>
        <p className="text-sm text-blue-600 font-medium">{date}</p>
        <CardTitle className="text-2xl font-semibold text-blue-900 leading-snug">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <CardDescription className="text-base text-gray-700">
          {excerpt}
        </CardDescription>
      </CardContent>
      
      <CardFooter>
        {/* 4. Link eka "Button" ekak widiyata pennamu */}
        <Button asChild variant="link" className="p-0 text-lg">
          <Link href={slug}>
            Read More &rarr;
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}