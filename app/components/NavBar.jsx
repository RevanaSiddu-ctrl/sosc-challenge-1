"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();

  return (
    <div className="fixed top-0 left-0 z-50 h-[90px] bg-[oklch(77.034%_0.20078_152.412)] w-full flex flex-row items-center">
      <Image
        src="https://sosc.org.in/_astro/sosc_logo_white.Bej07WYV_Z10hDC0.svg"
        alt="logo"
        width={70}
        height={70}
        className="ml-[50px]"
      />
      <div className="ml-auto flex flex-row gap-10 mr-[50px]">
        <button className="text-white text-xl" onClick={() => router.push("/home")}>Home</button>
        <button className="text-white text-xl" onClick={() => router.push("/events")}>Events</button>
        <button className="text-white text-xl" onClick={() => router.push("/blogs")}>Blogs</button>
        <button className="text-white text-xl" onClick={() => router.push("/team")}>Team</button>
      </div>
    </div>
  );
}