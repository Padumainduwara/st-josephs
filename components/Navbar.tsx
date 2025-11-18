// components/Navbar.tsx
// PASTE THIS ENTIRE UPDATED CODE

"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// shadcn/ui components
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

// Assets
import SchoolLogo from "@/public/Scl_logo.png";
import { MenuIcon } from "lucide-react"; 

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Academics", href: "/academics" },
  { title: "Clubs", href: "/clubs" },
  { title: "Gallery", href: "/gallery" },
  { title: "News", href: "/news" },
  { title: "Events", href: "/events" },
  { title: "Contact", href: "/contact" },
];

const Logo = ({ className }: { className?: string }) => (
  <Link href="/" className={cn("flex items-center space-x-2", className)}>
    <Image
      src={SchoolLogo}
      alt="St. Joseph's Logo"
      width={48}
      height={48}
      priority
      className="transition-all duration-300"
    />
    <span className="text-2xl font-bold">
      St. Joseph's
    </span>
  </Link>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = cn(
    "fixed top-0 left-0 w-full z-50 transition-all duration-300",
    isHomePage && !isScrolled
      ? "bg-transparent text-white"
      : "bg-white shadow-md text-gray-900" // Use bg-white for light mode
  );

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <Logo className={cn(
            isHomePage && !isScrolled ? "text-white" : "text-primary" // <-- MAROON COLOR
          )} />

          <div className="hidden lg:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.title}>
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink 
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent text-base",
                          isHomePage && !isScrolled 
                            ? "text-white hover:bg-white/10" 
                            : "text-gray-700 hover:bg-accent", // Use accent (light maroon)
                          pathname === link.href && "font-bold"
                        )}
                      >
                        {link.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            
            <Button asChild 
              size="lg"
              variant={isHomePage && !isScrolled ? "secondary" : "default"}
              className="text-base"
            >
              <Link href="/admission">Admissions</Link>
            </Button>
          </div>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="h-7 w-7" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <SheetHeader>
                  <SheetTitle>
                    <Logo className="text-primary" /> {/* <-- MAROON COLOR */}
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-2 pt-8">
                  {navLinks.map((link) => (
                    <Button
                      key={link.title}
                      asChild
                      variant={pathname === link.href ? "secondary" : "ghost"}
                      className="justify-start text-lg"
                    >
                      <Link href={link.href}>{link.title}</Link>
                    </Button>
                  ))}
                  <Button asChild size="lg" className="text-lg mt-4">
                    <Link href="/admission">Admissions</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}