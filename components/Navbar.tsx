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

const Logo = ({ className }: { className?: string }) => (
  <Link href="/" className={cn("flex items-center space-x-2 shrink-0", className)}>
    <Image
      src={SchoolLogo}
      alt="St. Joseph's Logo"
      width={48} 
      height={48}
      priority
      className="transition-all duration-300 w-10 h-10 md:w-12 md:h-12" 
    />
    <span className="text-xl md:text-2xl font-bold tracking-tight">
      St. Joseph's
    </span>
  </Link>
);

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
      ? "bg-transparent text-white py-4" 
      : "bg-white shadow-md text-gray-900 py-2"
  );

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <Logo className={cn(
            isHomePage && !isScrolled ? "text-white" : "text-primary"
          )} />

          {/* --- DESKTOP MENU --- */}
          <div className="hidden xl:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.title}>
                    {link.items ? (
                      <>
                        <NavigationMenuTrigger 
                          className={cn(
                            "bg-transparent text-base font-medium px-3 h-12", 
                            isHomePage && !isScrolled 
                              ? "text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white" 
                              : "text-gray-700 hover:bg-accent hover:text-primary",
                          )}
                        >
                          {link.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[300px] gap-2 p-4 md:w-[400px]">
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
                            "bg-transparent text-base font-medium px-3 h-12",
                            isHomePage && !isScrolled 
                              ? "text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white" 
                              : "text-gray-700 hover:bg-accent hover:text-primary",
                            pathname === link.href && "font-bold underline decoration-4 underline-offset-8 decoration-yellow-400"
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
              className="ml-4 font-bold shadow-lg"
            >
              <Link href="/admission">Admissions</Link>
            </Button>
          </div>

          {/* --- MOBILE MENU --- */}
          <div className="xl:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn("shrink-0", isHomePage && !isScrolled ? "text-white" : "text-primary")}>
                  <MenuIcon className="h-8 w-8 md:h-9 md:w-9" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] overflow-y-auto">
                <SheetHeader className="mb-6 text-left">
                  <SheetTitle>
                    <Logo className="text-primary" />
                  </SheetTitle>
                </SheetHeader>
                
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    link.items ? (
                      <Accordion type="single" collapsible key={link.title} className="w-full">
                        <AccordionItem value={link.title} className="border-b-0">
                          <AccordionTrigger className="text-lg font-medium py-3 hover:no-underline text-gray-800">
                            {link.title}
                          </AccordionTrigger>
                          <AccordionContent className="flex flex-col space-y-2 pl-4">
                            {link.items.map((subItem) => (
                              <Link 
                                key={subItem.title} 
                                href={subItem.href}
                                className="block py-2 text-base text-gray-600 hover:text-primary"
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
                          "block py-3 text-lg font-medium transition-colors",
                          pathname === link.href ? "text-primary font-bold" : "text-gray-800 hover:text-primary"
                        )}
                      >
                        {link.title}
                      </Link>
                    )
                  ))}
                  
                  <div className="pt-6">
                    <Button asChild size="lg" className="w-full text-lg bg-primary text-white">
                      <Link href="/admission">Admissions</Link>
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