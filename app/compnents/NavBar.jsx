"use client"
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function NavBar() {

  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "Events", path: "/events" },
    { name: "Blogs", path: "/blogs" },
    { name: "Team", path: "/team" },
  ];

  return (
    <>
      <div className="h-[50px] bg-[oklch(77.034%_0.20078_152.412)] w-full flex flex-row items-center top-0 left-0 z-50">

        {/* LOGO */}
        <Image 
          src="https://sosc.org.in/_astro/sosc_logo_white.Bej07WYV_Z10hDC0.svg" 
          alt="logo" 
          height={0} 
          width={0} 
          className="h-[70px] w-[70px] ml-[50px]" 
        />

        {/* NAV LINKS */}
        <div className="ml-[1000px] flex flex-row gap-10 relative">

          {navItems.map((item) => (
            <div key={item.path} className="relative">
              <button
                className="text-white text-[2xl] cursor-pointer"
                onClick={() => router.push(item.path)}
              >
                {item.name}
              </button>

              {/* ACTIVE UNDERLINE */}
              {pathname === item.path && (
                <div className="absolute left-0 right-0 h-[3px] bg-white mt-1 rounded-full" />
              )}
            </div>
          ))}

        </div>

      </div>
    </>
  );
}
