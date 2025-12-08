"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[oklch(77.034%_0.20078_152.412)] shadow-md">
      <div className="flex items-center justify-between px-6 md:px-12 h-[70px] max-w-[1400px] mx-auto">
        <Image
          src="https://sosc.org.in/_astro/sosc_logo_white.Bej07WYV_Z10hDC0.svg"
          alt="logo"
          width={50}
          height={50}
        />
        <div className="hidden md:flex gap-8 lg:gap-12 text-white font-medium">
          <button onClick={() => router.push("/home")} className="hover:opacity-80 transition-opacity">Home</button>
          <button onClick={() => router.push("/events")} className="hover:opacity-80 transition-opacity">Events</button>
          <button onClick={() => router.push("/blogs")} className="hover:opacity-80 transition-opacity">Blogs</button>
          <button onClick={() => router.push("/team")} className="hover:opacity-80 transition-opacity">Team</button>
        </div>
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden flex flex-col gap-4 bg-[oklch(77.034%_0.20078_152.412)] px-4 pb-4 text-white">
          <button onClick={() => { router.push("/home"); setOpen(false); }}>Home</button>
          <button onClick={() => { router.push("/events"); setOpen(false); }}>Events</button>
          <button onClick={() => { router.push("/blogs"); setOpen(false); }}>Blogs</button>
          <button onClick={() => { router.push("/team"); setOpen(false); }}>Team</button>
        </div>
      )}
    </nav>
  )
}