"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="h-[70px] md:h-[90px] bg-[oklch(77.034%_0.20078_152.412)] w-full flex items-center px-4 md:px-0">
        <Image
          src="https://sosc.org.in/_astro/sosc_logo_white.Bej07WYV_Z10hDC0.svg"
          alt="logo"
          height={70}
          width={70}
          className="h-[50px] w-[50px] md:h-[70px] md:w-[70px] ml-0 md:ml-[50px]"
        />

        {/* Links container */}
        <div className="
          ml-4 md:ml-[1000px]
          flex flex-wrap md:flex-nowrap
          gap-3 md:gap-10
        ">
          <button
            className="text-white text-sm md:text-2xl cursor-pointer"
            onClick={() => router.push("/home")}
          >
            Home
          </button>
          <button
            className="text-white text-sm md:text-2xl cursor-pointer"
            onClick={() => router.push("/events")}
          >
            Events
          </button>
          <button
            className="text-white text-sm md:text-2xl cursor-pointer"
            onClick={() => router.push("/blogs")}
          >
            Blogs
          </button>
          <button
            className="text-white text-sm md:text-2xl cursor-pointer"
            onClick={() => router.push("/team")}
          >
            Team
          </button>
        </div>
      </div>
    </nav>
  );
}
