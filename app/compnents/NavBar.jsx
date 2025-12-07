"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Events from "../events/page";
import Blogs from "../blogs/page";
import Team from "../team/page";

import { useMediaQuery } from "react-responsive";

export default function NavBar() {
  const router = useRouter();
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isBigScreen = useMediaQuery({ minWidth: 1824 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isPortrait = useMediaQuery({ orientation: "portrait" });
  const isRetina = useMediaQuery({ minResolution: "2dppx" });

  return (
    <>
      <div className="h-[50px] bg-[oklch(77.034%_0.20078_152.412)] w-full fixed flex flex-row items-center top-0 left-0 z-50">
        <Image
          src="https://sosc.org.in/_astro/sosc_logo_white.Bej07WYV_Z10hDC0.svg"
          alt="logo"
          height={0}
          width={0}
          className="h-[50px] w-[50px] ml-[100px]"
        />
        <div className="ml-[1000px] flex flex-row items-center justify-center space-x-8">
          <button
            className="text-white text-[2xl] cursor-pointer"
            onClick={() => router.push("/")}
          >
            Home
          </button>
          <button
            className="text-white text-[2xl] cursor-pointer"
            onClick={() => router.push("/events", <Events />)}
          >
            Events
          </button>
          <button
            className="text-white text-[2xl] cursor-pointer"
            onClick={() => router.push("/blogs", <Blogs />)}
          >
            Blogs
          </button>
          <button
            className="text-white text-[2xl] cursor-pointer"
            onClick={() => router.push("/team", <Team />)}
          >
            Team
          </button>
        </div>
      </div>
    </>
  );
}
