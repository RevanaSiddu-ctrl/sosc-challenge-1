"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";


export default function NavBar() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-[55px] bg-[oklch(77.034%_0.20078_152.412)] w-full flex flex-row items-center top-0 left-0 z-50 font-[poppins] px-6 justify-between">
      <Image src="https://sosc.org.in/_astro/sosc_logo_white.Bej07WYV_Z10hDC0.svg" height={0} width={0} className="h-6 w-[70px] ml-[130px] " alt="logo"/>

      {!isMobile && (
        <div className="flex flex-row gap-10 mr-[150px]">
          <button className="text-white text-sm" onClick={() => router.push("/home")}>
            Home
          </button>
          <button className="text-white text-sm" onClick={() => router.push("/events")}>
            Events
          </button>
          <button className="text-white text-sm" onClick={() => router.push("/blogs")}>
            Blogs
          </button>
          <button className="text-white text-sm" onClick={() => router.push("/team")}>
            Team
          </button>
        </div>
      )}

      {isMobile && (
        <div className="relative">
          <button
            className="text-white text-xl select-none"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          {open && (
            <div className="absolute right-0 mt-2 bg-[oklch(77.034%_0.20078_152.412)] text-white rounded-xl shadow-lg flex flex-col p-4 gap-3 w-40">
              <button onClick={() => router.push("/home")}>Home</button>
              <button onClick={() => router.push("/blogs")}>Events</button>
              <button onClick={() => router.push("/events")}>Blogs</button>
              <button onClick={() => router.push("/team")}>Team</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}