"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NavBar() {
    
  const router = useRouter();

  return(
        <>
            <div className="h-[50px] bg-[oklch(77.034%_0.20078_152.412)] w-full relative top-0 left-0 z-50 flex items-center ">
              <div className="max-w-[1500px] w-full mx-auto px-6 flex items-center">
                <Image src="https://sosc.org.in/_astro/sosc_logo_white.Bej07WYV_Z10hDC0.svg" alt="logo" width={70} height={70} className="flex-shrink-0"/>
                <nav className="absolute right-6 top-1/2 transform -translate-y-1/2 flex items-center gap-8">
                  <button className="text-white text-sm cursor-pointer border-b-2 border-transparent hover:border-white transition-all duration-300" onClick={()=>router.push("/home")}>Home</button>
                  <button className="text-white text-sm cursor-pointer border-b-2 border-transparent hover:border-white transition-all duration-300" onClick={()=>router.push("/events")}>Events</button>
                  <button className="text-white text-sm cursor-pointer border-b-2 border-transparent hover:border-white transition-all duration-300" onClick={() => router.push("/blogs")}>Blogs</button>
                  <button className="text-white text-sm cursor-pointer border-b-2 border-transparent hover:border-white transition-all duration-300" onClick={()=>router.push("/team")}>Team</button>
                </nav>
                  </div>
                </div>
        </>
    )
}
