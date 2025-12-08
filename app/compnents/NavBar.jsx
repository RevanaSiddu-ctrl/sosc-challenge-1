"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <div className="fixed h-[90px] bg-[oklch(77.034%_0.20078_152.412)] w-full 
                      flex items-center justify-between px-8 
                      top-0 left-0 z-50">

        {/* LOGO */}
        <Image
          src="https://sosc.org.in/_astro/sosc_logo_white.Bej07WYV_Z10hDC0.svg"
          alt="logo"
          height={70}
          width={70}
          className="h-[70px] w-[70px]"
        />

        {/* DESKTOP MENU */}
        <div className="hidden md:flex flex-row gap-10">
          <button className="text-white text-xl" onClick={() => router.push("/home")}>Home</button>
          <button className="text-white text-xl" onClick={() => router.push("/events")}>Events</button>
          <button className="text-white text-xl" onClick={() => router.push("/blogs")}>Blogs</button>
          <button className="text-white text-xl" onClick={() => router.push("/team")}>Team</button>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button 
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div className="md:hidden fixed top-[90px] left-0 w-full 
                        bg-[oklch(77.034%_0.20078_152.412)] 
                        flex flex-col items-center gap-6 py-6 z-40">
          
          <button className="text-white text-xl" onClick={() => { setOpen(false); router.push("/home"); }}>Home</button>
          <button className="text-white text-xl" onClick={() => { setOpen(false); router.push("/events"); }}>Events</button>
          <button className="text-white text-xl" onClick={() => { setOpen(false); router.push("/blogs"); }}>Blogs</button>
          <button className="text-white text-xl" onClick={() => { setOpen(false); router.push("/team"); }}>Team</button>
        
        </div>
      )}
    </>
  );
}
