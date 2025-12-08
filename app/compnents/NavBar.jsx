"use client"
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function NavBar() {
    
  const router = useRouter();
  const pathname = usePathname();

  return(
        <>
            <nav className="h-[90px] bg-[oklch(77.034%_0.20078_152.412)] w-full flex flex-row items-center justify-between px-6 md:px-12 lg:px-20 fixed top-0 left-0 z-50">
                  <Image 
                    src="https://sosc.org.in/_astro/sosc_logo_white.Bej07WYV_Z10hDC0.svg" 
                    alt="SOSC Logo" 
                    height={70} 
                    width={70} 
                    className="h-[70px] w-[70px] cursor-pointer"
                    onClick={() => router.push("/home")}
                  />
                  <div className="flex flex-row gap-8 md:gap-10 lg:gap-12">
                    <button 
                      className={`text-white text-xl md:text-2xl cursor-pointer hover:opacity-80 transition-opacity ${
                        pathname === "/home" ? "font-semibold" : ""
                      }`} 
                      onClick={()=>router.push("/home")}
                    >
                      Home
                    </button>
                    <button 
                      className={`text-white text-xl md:text-2xl cursor-pointer hover:opacity-80 transition-opacity ${
                        pathname === "/events" ? "font-semibold" : ""
                      }`} 
                      onClick={()=>router.push("/events")}
                    >
                      Events
                    </button>
                    <button 
                      className={`text-white text-xl md:text-2xl cursor-pointer hover:opacity-80 transition-opacity ${
                        pathname === "/blogs" ? "font-semibold" : ""
                      }`} 
                      onClick={() => router.push("/blogs")}
                    >
                      Blogs
                    </button>
                    <button 
                      className={`text-white text-xl md:text-2xl cursor-pointer hover:opacity-80 transition-opacity ${
                        pathname === "/team" ? "font-semibold" : ""
                      }`} 
                      onClick={()=>router.push("/team")}
                    >
                      Team
                    </button>
                  </div>
                </nav>
        </>
    )
}
