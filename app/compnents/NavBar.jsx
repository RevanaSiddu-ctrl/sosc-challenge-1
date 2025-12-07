"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();

  return (
    <>
      <div className="h-[90px] bg-[oklch(77.034%_0.20078_152.412)] w-[375px] flex items-center fixed top-0 left-0 z-50 shadow px-4 md:px-10 md:w-full">
        <Image
          src="https://sosc.org.in/_astro/sosc_logo_white.Bej07WYV_Z10hDC0.svg"
          alt="logo"
          height={0}
          width={0}
          className="h-[60px] w-[60px]"
        />

        <div className="ml-auto flex flex-row gap-4 md:gap-10 flex-wrap">
          <button
            className="text-white text-lg md:text-2xl cursor-pointer"
            onClick={() => router.push("./")}
          >
            Home
          </button>

          <button
            className="text-white text-lg md:text-2xl cursor-pointer"
            onClick={() => router.push("./events")}
          >
            Events
          </button>

          <button
            className="text-white text-lg md:text-2xl cursor-pointer"
            onClick={() => router.push("/blogs")}
          >
            Blogs
          </button>

          <button
            className="text-white text-lg md:text-2xl cursor-pointer"
            onClick={() => router.push("./team")}
          >
            Team
          </button>
        </div>
      </div>
    </>
  );
}
