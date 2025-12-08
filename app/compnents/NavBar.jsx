"use client"
import { useState } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navigate = (path) => {
    setOpen(false);
    router.push(path);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-[oklch(77.034%_0.20078_152.412)] h-[64px] navbar">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            <Image
              src="https://sosc.org.in/_astro/sosc_logo_white.Bej07WYV_Z10hDC0.svg"
              alt="logo"
              width={56}
              height={56}
              className="object-contain"
            />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => navigate("/home")}
              className={`text-white text-[15px] font-medium pb-3 ${pathname === "/home" ? "border-b-4 border-white" : ""}`}
            >
              Home
            </button>

            <button
              onClick={() => navigate("/events")}
              className={`text-white text-[15px] font-medium pb-3 ${pathname === "/events" ? "border-b-4 border-white" : ""}`}
            >
              Events
            </button>

            <button
              onClick={() => navigate("/blogs")}
              className={`text-white text-[15px] font-medium pb-3 ${pathname === "/blogs" ? "border-b-4 border-white" : ""}`}
            >
              Blogs
            </button>

            <button
              onClick={() => navigate("/team")}
              className={`text-white text-[15px] font-medium pb-3 ${pathname === "/team" ? "border-b-4 border-white" : ""}`}
            >
              Team
            </button>
          </nav>

          <button
            aria-label="Open menu"
            className="md:hidden text-white text-2xl px-2"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>

      <div className="pt-[64px]" />

      {/* Mobile Sidebar */}
      <div
        aria-hidden={!open}
        className={`fixed top-0 right-0 h-full w-[260px] bg-[oklch(77.034%_0.20078_152.412)] shadow-xl p-6 transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          aria-label="Close menu"
          className="text-white text-2xl absolute top-4 right-4"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <div className="mt-12 flex flex-col gap-6">
          <button onClick={() => navigate("/home")} className={`text-white text-lg text-left ${pathname === "/home" ? "font-semibold underline" : ""}`}>Home</button>
          <button onClick={() => navigate("/events")} className={`text-white text-lg text-left ${pathname === "/events" ? "font-semibold underline" : ""}`}>Events</button>
          <button onClick={() => navigate("/blogs")} className={`text-white text-lg text-left ${pathname === "/blogs" ? "font-semibold underline" : ""}`}>Blogs</button>
          <button onClick={() => navigate("/team")} className={`text-white text-lg text-left ${pathname === "/team" ? "font-semibold underline" : ""}`}>Team</button>
        </div>
      </div>
    </>
  );
}
