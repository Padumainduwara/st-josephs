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
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

// Assets
import SchoolLogo from "@/public/Scl_logo.png";
import { MenuIcon } from "lucide-react";

// --- NAVIGATION DATA ---
const navLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  {
    title: "Academics",
    items: [
      { title: "Academic Streams", href: "/academics", description: "Curriculum and learning paths." },
      { title: "Our Staff", href: "/staff", description: "Teachers & Administration." },
      { title: "Resources & Downloads", href: "/resources", description: "Past papers, syllabuses & results." },
    ],
  },
  {
    title: "Student Life",
    items: [
      { title: "Prefects' Guild", href: "/prefects", description: "Student leadership body." },
      { title: "Clubs & Societies", href: "/clubs", description: "Extracurricular activities." },
      { title: "Achievements", href: "/achievements", description: "Hall of fame & victories." },
      { title: "Events", href: "/events", description: "School events & calendar." },
    ],
  },
  {
    title: "Community",
    items: [
      { title: "Past Pupils (OGA)", href: "/alumni", description: "Old Girls' Association." },
      { title: "SDS", href: "/sds", description: "School Development Society." },
    ],
  },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact", href: "/contact" },
];

// --- UPDATED LOGO COMPONENT ---
const Logo = ({ className, isMobile = false }: { className?: string, isMobile?: boolean }) => (
  <Link href="/" className={cn("flex items-center space-x-2 shrink-0 z-50", className)}>
    <Image
      src={SchoolLogo}
      alt="St. Joseph's Logo"
      width={isMobile ? 40 : 56}
      height={isMobile ? 40 : 56}
      priority
      className="transition-all duration-300 w-10 h-10 md:w-12 md:h-12"
    />
    <div className="flex flex-col leading-tight">
      {/* UPDATE: Font size reduced (text-lg -> text-base, text-2xl -> text-xl) */}
      <span className="hidden md:block text-base md:text-lg lg:text-xl font-bold tracking-tight whitespace-nowrap">
        St. Joseph's Girls' School Nugegoda
      </span>
      
      {/* Mobile View: Two Lines */}
      <span className="md:hidden text-[1rem] font-bold tracking-tight">
        St. Joseph's Girls' School
      </span>
      <span className="md:hidden text-xs font-semibold tracking-wide uppercase opacity-90">
        Nugegoda
      </span>
    </div>
  </Link>
);

// --- LIST ITEM COMPONENT ---
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-primary">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

// --- MAIN NAVBAR ---
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
      ? "bg-gradient-to-b from-black/50 to-transparent text-white py-3"
      : "bg-white shadow-md text-gray-900 py-2"
  );

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <Logo className={cn("transition-colors", isHomePage && !isScrolled ? "text-white" : "text-gray-900")} />

          {/* --- DESKTOP MENU (Hidden on Tablets/Mobile, Visible on XL screens) --- */}
          <div className="hidden xl:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.title}>
                    {link.items ? (
                      <>
                        <NavigationMenuTrigger 
                          className={cn(
                            "bg-transparent text-[15px] font-medium px-4 h-10 data-[state=open]:bg-opacity-10", 
                            isHomePage && !isScrolled ? "text-white hover:bg-white/20" : "text-gray-700 hover:bg-gray-100",
                          )}
                        >
                          {link.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="left-0 top-0">
                          <ul className="grid w-[300px] gap-2 p-4 md:w-[400px] bg-white rounded-lg shadow-xl border border-gray-100">
                            {link.items.map((subItem) => (
                              <ListItem 
                                key={subItem.title} 
                                href={subItem.href} 
                                title={subItem.title}
                              >
                                {subItem.description}
                              </ListItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={link.href!} legacyBehavior passHref>
                        <NavigationMenuLink 
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "bg-transparent text-[15px] font-medium px-4 h-10",
                            isHomePage && !isScrolled ? "text-white hover:bg-white/20" : "text-gray-700 hover:bg-gray-100",
                            pathname === link.href && "font-bold underline decoration-2 underline-offset-8 decoration-yellow-400"
                          )}
                        >
                          {link.title}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            
            <Button asChild 
              size="default" 
              variant={isHomePage && !isScrolled ? "secondary" : "default"}
              className="ml-4 font-bold shadow-md hover:scale-105 transition-transform"
            >
              <Link href="/admission">Admissions</Link>
            </Button>
          </div>

          {/* --- MOBILE & TABLET MENU (Visible up to LG screens) --- */}
          <div className="xl:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn("shrink-0 hover:bg-transparent", isHomePage && !isScrolled ? "text-white" : "text-primary")}>
                  <MenuIcon className="h-8 w-8" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] overflow-y-auto bg-white p-6 pt-12">
                {/* UPDATE: Removed SheetHeader with Logo entirely */}
                
                <div className="flex flex-col space-y-1">
                  {navLinks.map((link) => (
                    link.items ? (
                      <Accordion type="single" collapsible key={link.title} className="w-full">
                        <AccordionItem value={link.title} className="border-b-0">
                          <AccordionTrigger className="text-lg font-semibold py-3 hover:no-underline text-gray-800 hover:text-primary">
                            {link.title}
                          </AccordionTrigger>
                          <AccordionContent className="flex flex-col space-y-1 pl-4 bg-gray-50/50 rounded-lg">
                            {link.items.map((subItem) => (
                              <Link 
                                key={subItem.title} 
                                href={subItem.href}
                                className="block py-2.5 px-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-white rounded-md transition-colors"
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <Link 
                        key={link.title} 
                        href={link.href!}
                        className={cn(
                          "block py-3 text-lg font-semibold transition-colors border-b border-gray-100 last:border-0",
                          pathname === link.href ? "text-primary font-bold" : "text-gray-800 hover:text-primary"
                        )}
                      >
                        {link.title}
                      </Link>
                    )
                  ))}
                  
                  <div className="pt-6 mt-4">
                    <Button asChild size="lg" className="w-full text-lg font-bold bg-primary text-white shadow-lg hover:bg-primary/90">
                      <Link href="/admission">Admissions Open</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}