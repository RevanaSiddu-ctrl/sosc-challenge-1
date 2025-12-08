"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function NavBar() {

  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Events", href: "/events" },
    { name: "Blogs", href: "/blogs" },
    { name: "Team", href: "/team" },
  ];

  return (
    <>
      <div className="h-[60px] bg-[oklch(77.034%_0.20078_152.412)] w-full 
                      flex items-center justify-between px-10 
                      sticky top-0 left-0 z-50">

        <Image
          src="https://sosc.org.in/_astro/sosc_logo_white.Bej07WYV_Z10hDC0.svg"
          alt="logo"
          width={40}
          height={40}
          className="w-10 h-10"
        />

        <div className="flex flex-row gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <button
                key={link.name}
                onClick={() => router.push(link.href)}
                className={`text-white text-lg cursor-pointer 
                hover:underline decoration-2 underline-offset-20
                ${isActive ? "underline underline-offset-4 decoration-2" : ""}`}
              >
                {link.name}
              </button>
            );
          })}
        </div>

      </div>
    </>
  );
}
