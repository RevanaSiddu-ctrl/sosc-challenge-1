"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();

  return (
    <div className="h-[90px] bg-[oklch(77.034%_0.20078_152.412)] w-full flex items-center px-10 z-50">
      <Image
        src="https://sosc.org.in/_astro/sosc_logo_white.Bej07WYV_Z10hDC0.svg"
        alt="logo"
        width={70}
        height={70}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />

      <div className="hidden md:flex gap-10 ml-auto">
        <button className="text-white text-lg" onClick={() => router.push("/")}>
          Home
        </button>
        <button className="text-white text-lg" onClick={() => router.push("/events")}>
          Events
        </button>
        <button className="text-white text-lg" onClick={() => router.push("/blogs")}>
          Blogs
        </button>
        <button className="text-white text-lg" onClick={() => router.push("/team")}>
          Team
        </button>
      </div>

      <div className="md:hidden ml-auto text-white text-xl">
        ☰
      </div>
    </div>
  );
}
