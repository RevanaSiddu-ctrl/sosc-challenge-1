"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();

  return (
    <>
      <div
        className=" h-[70px] sm:h-[90px] bg-[oklch(77.034%_0.20078_152.412)] w-full flex items-center justify-between px-4 sm:px-10 fixed top-0 left-0 z-50">
       
        <Image
          src="https://sosc.org.in/_astro/sosc_logo_white.Bej07WYV_Z10hDC0.svg"
          alt="logo"
          width={70}
          height={70}
          className="w-[45px] h-[45px] sm:w-[70px] sm:h-[70px]"
        />

      
        <div
          className="
            flex gap-4 sm:gap-10 text-xs sm:text-lg md:text-xl"
        >
          <button
            className="text-white cursor-pointer"
            onClick={() => router.push("/home")}>
            Home
          </button>
          <button
            className="text-white cursor-pointer"
            onClick={() => router.push("/events")}
          >
            Events
          </button>
          <button
            className="text-white cursor-pointer"
            onClick={() => router.push("/blogs")}
          >
            Blogs
          </button>
          <button
            className="text-white cursor-pointer"
            onClick={() => router.push("/team")}
          >
            Team
          </button>
        </div>
      </div>
    </>
  );
}
