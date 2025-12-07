"use client"
import { useState } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  
  // State to manage whether the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "Events", path: "/events" },
    { name: "Blogs", path: "/blogs" },
    { name: "Team", path: "/team" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 z-50 h-[70px] bg-[oklch(77.034%_0.20078_152.412)] w-full flex flex-row items-center justify-between px-4 md:px-12 shadow-md">

        {/* LOGO */}
        <Image 
          src="https://sosc.org.in/_astro/sosc_logo_white.Bej07WYV_Z10hDC0.svg" 
          alt="logo" 
          height={0} 
          width={0} 
          className="h-[50px] w-[50px] md:h-[70px] md:w-[70px] cursor-pointer" 
          onClick={() => router.push("/")}
        />

        {/* DESKTOP NAV LINKS (Hidden on mobile) */}
        <div className="hidden md:flex flex-row gap-10 relative">
          {navItems.map((item) => (
            <div key={item.path} className="relative">
              <button
                className="text-white text-lg md:text-xl cursor-pointer hover:text-gray-200 transition-colors"
                onClick={() => router.push(item.path)}
              >
                {item.name}
              </button>
              {/* Active Underline */}
              {pathname === item.path && (
                <div className="absolute left-0 right-0 h-[3px] bg-white mt-1 rounded-full" />
              )}
            </div>
          ))}
        </div>
        
        {/* MOBILE MENU BUTTON (Visible only on mobile) */}
        <div className="md:hidden">
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-white font-bold text-xl focus:outline-none"
            >
                {/* Shows 'X' if open, 'Menu' if closed */}
                {isOpen ? "✕ Close" : "☰ Menu"}
            </button>
        </div>

        {/* MOBILE DROPDOWN MENU (Only shows when isOpen is true) */}
        {isOpen && (
            <div className="absolute top-[70px] left-0 w-full bg-[oklch(77.034%_0.20078_152.412)] flex flex-col items-center py-5 shadow-lg md:hidden border-t border-white/20">
                {navItems.map((item) => (
                    <button
                        key={item.path}
                        className={`text-white text-lg font-medium py-3 w-full hover:bg-white/10 ${pathname === item.path ? "bg-white/20" : ""}`}
                        onClick={() => {
                            router.push(item.path);
                            setIsOpen(false); // Close menu after clicking
                        }}
                    >
                        {item.name}
                    </button>
                ))}
            </div>
        )}

      </div>
    </>
  );
}