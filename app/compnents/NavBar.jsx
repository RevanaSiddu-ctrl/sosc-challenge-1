"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <div className="bg-[oklch(77.034%_0.20078_152.412)] w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="w-[90%] md:w-[85%] mx-auto h-[90px] flex items-center justify-between">
        
        <Image
          src="https://sosc.org.in/_astro/sosc_logo_white.Bej07WYV_Z10hDC0.svg"
          alt="logo"
          height={60}
          width={60}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />

        
        <div className="hidden md:flex flex-row gap-8 lg:gap-14">
          <NavButton label="Home" path="/" router={router} />
          <NavButton label="Events" path="/events" router={router} />
          <NavButton label="Blogs" path="/blogs" router={router} />
          <NavButton label="Team" path="/team" router={router} />
        </div>

        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

     
      {isOpen && (
        <div className="md:hidden bg-[oklch(77.034%_0.20078_152.412)] w-full pb-6 flex flex-col items-center space-y-4 shadow-lg border-t border-white/20">
          <MobileNavButton label="Home" path="/" router={router} close={() => setIsOpen(false)} />
          <MobileNavButton label="Events" path="/events" router={router} close={() => setIsOpen(false)} />
          <MobileNavButton label="Blogs" path="/blogs" router={router} close={() => setIsOpen(false)} />
          <MobileNavButton label="Team" path="/team" router={router} close={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  );
}

function NavButton({ label, path, router }) {
  return (
    <button
      className="text-white text-lg hover:underline underline-offset-8 transition-all"
      onClick={() => router.push(path)}
    >
      {label}
    </button>
  );
}

function MobileNavButton({ label, path, router, close }) {
  return (
    <button
      className="text-white text-xl font-medium hover:bg-white/10 w-full py-2"
      onClick={() => {
        router.push(path);
        close(); 
      }}
    >
      {label}
    </button>
  );
}