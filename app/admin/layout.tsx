// app/admin/layout.tsx
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Calendar, Newspaper, LogOut, Menu, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (pathname === "/admin") {
      router.replace("/admin/events");
    }
  }, [pathname, router]);

  const menuItems = [
    { title: "Manage Events", href: "/admin/events", icon: Calendar },
    { title: "Manage News", href: "/admin/news", icon: Newspaper },
  ];

  const SidebarContent = ({ isMobile = false }) => (
    <div className="flex flex-col h-full text-white bg-[#800000]">
      {/* Header Area */}
      <div className="p-6 border-b border-red-900 flex items-center gap-3">
         <div className="bg-white/10 p-2 rounded-lg">
            <ShieldCheck className="w-6 h-6 text-yellow-400" />
         </div>
         <div>
            <h1 className="font-bold text-xl tracking-wide">Admin Portal</h1>
            <p className="text-xs text-red-200">St. Joseph's College</p>
         </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => isMobile && setOpen(false)} // Mobile එකේදී click කළාම menu එක වැහෙනවා
              className={cn(
                "flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 group",
                isActive 
                  ? "bg-white text-[#800000] font-bold shadow-lg translate-x-1" 
                  : "hover:bg-red-900/50 text-red-100 hover:text-white hover:translate-x-1"
              )}
            >
              <item.icon className={cn("w-5 h-5", isActive ? "text-[#800000]" : "text-red-300 group-hover:text-white")} />
              <span className="text-sm tracking-wide">{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer / Logout Button */}
      <div className="p-4 border-t border-red-900 bg-[#600000]/30">
        <button className="flex items-center gap-3 px-4 py-3 text-red-200 hover:text-white w-full transition-all hover:bg-red-900/50 rounded-xl group">
          <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-sm">Sign Out</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex bg-gray-50">
      
      <aside className="w-72 hidden md:flex flex-col fixed h-full z-50 shadow-2xl border-r border-gray-200">
        <SidebarContent />
      </aside>

      <div className="md:hidden fixed top-0 left-0 right-0 bg-[#800000] text-white z-50 px-4 h-16 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-yellow-400" />
            <span className="font-bold text-lg">Admin Panel</span>
        </div>
        
        {/* Mobile Sidebar Trigger (Hamburger Menu) */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 -mr-2">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          
        
          <SheetContent side="left" className="p-0 w-72 border-r-0 bg-[#800000]">
             <SheetHeader className="sr-only">
                <SheetTitle>Navigation Menu</SheetTitle>
             </SheetHeader>
             <SidebarContent isMobile={true} />
          </SheetContent>
        </Sheet>
      </div>

    
      <main className="flex-1 md:ml-72 transition-all duration-300">
        <div className="pt-16 md:pt-0 min-h-screen">
          {children}
        </div>
      </main>

    </div>
  );
}