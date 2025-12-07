"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[oklch(77.034%_0.20078_152.412)] shadow-sm">
      <nav className="mx-auto flex h-14 max-w-6xl items-center px-4 sm:h-16 sm:px-6">
        {/* Logo */}
        <button
          onClick={() => router.push("/home")}
          className="flex items-center gap-2"
        >
          <Image
            src="https://sosc.org.in/_astro/sosc_logo_white.Bej07WYV_Z10hDC0.svg"
            alt="logo"
            height={40}
            width={40}
            className="h-15 w-8 sm:h-9 sm:w-9"
          />
          <span className="hidden text-sm font-semibold text-white sm:inline">
            SOSC
          </span>
        </button>

        {/* Links */}
        <div className="ml-auto flex items-center gap-10 sm:gap-8">
          <button
            className="text-xs sm:text-sm text-white font-medium hover:opacity-100"
            onClick={() => router.push("/home")}
          >
            Home
          </button>
          <button
            className="text-xs sm:text-sm text-white font-medium hover:opacity-80"
            onClick={() => router.push("/events")}
          >
            Events
          </button>
          <button
            className="text-xs sm:text-sm text-white font-medium hover:opacity-80"
            onClick={() => router.push("/blogs")}
          >
            Blogs
          </button>
          <button
            className="text-xs sm:text-sm text-white font-medium hover:opacity-80"
            onClick={() => router.push("/team")}
          >
            Team
          </button>
        </div>
      </nav>
    </header>
  );
}
