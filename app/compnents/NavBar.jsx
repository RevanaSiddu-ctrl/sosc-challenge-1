"use client"
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { label: "Home", path: "/home" },
    { label: "Events", path: "/events" },
    { label: "Blogs", path: "/blogs" },
    { label: "Team", path: "/team" },
  ];

  return (
    <>
      <div className="h-[90px] bg-[oklch(77.034%_0.20078_152.412)] w-full flex flex-row fixed items-center top-0 left-0 z-50">
        
        <Image 
          src="https://sosc.org.in/_astro/sosc_logo_white.Bej07WYV_Z10hDC0.svg" 
          alt="logo" 
          height={0} 
          width={0} 
          className="h-[70px] w-[70px] ml-[50px]" 
        />

        <div className="ml-auto mr-20 flex flex-row gap-10">
          {navItems.map((item) => (
            <button
              key={item.path}
              className={`text-white cursor-pointer px-1 
              hover:border-b-2 hover:border-white transition-all duration-200
              ${pathname === item.path ? "border-b-2 border-white" : "border-b-2 border-transparent"}`}
              onClick={() => router.push(item.path)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
