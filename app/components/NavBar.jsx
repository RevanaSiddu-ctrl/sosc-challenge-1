"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NavBar() {
    
  const router = useRouter();

  return(
        <>
            {/* <div className="h-[90px] bg-[oklch(77.034%_0.20078_152.412)] flex flex-row items-center fixed top-0 left-0 z-50 w-full"> */}
             <div className="h-[90px] bg-[oklch(77.034%_0.20078_152.412)] flex items-center justify-between fixed top-0 left-0 z-50 w-full px-10">
 
                  <Image src="https://sosc.org.in/_astro/sosc_logo_white.Bej07WYV_Z10hDC0.svg" alt="logo" height={0} width={0} className="h-[70px] w-[70px] ml-[50px]"/>
                  <div className="ml-[1000px] flex  flex-row gap-10">
                    <button className="text-white text-[2xl] cursor-pointer relative group" onClick={()=>router.push("/")}>
                      <span className="group-hover:after:w-full after:w-0 after:h-[2px] after:bg-white after:absolute after:left-0 after:-bottom-1 after:transition-all after:duration-300">
  Home
</span>

                    </button>
                  <button className="text-white text-[2xl] cursor-pointer relative group" onClick={()=>router.push("/blogs")}>
                    <span className="group-hover:after:w-full after:w-0 after:h-[2px] after:bg-white after:absolute after:left-0 after:-bottom-1 after:transition-all after:duration-300">
  Blogs
</span>

                  </button>
                  <button className="text-white text-[2xl] cursor-pointer relative group" onClick={() => router.push("/events")}>
                    <span className="group-hover:after:w-full after:w-0 after:h-[2px] after:bg-white after:absolute after:left-0 after:-bottom-1 after:transition-all after:duration-300">
  Events
</span>

                  </button>
                  <button className="text-white text-[2xl] cursor-pointer relative group" onClick={()=>router.push("/team")}>
                    <span className="group-hover:after:w-full after:w-0 after:h-[2px] after:bg-white after:absolute after:left-0 after:-bottom-1 after:transition-all after:duration-300">
    Team
</span>

                  </button>
                  </div>
                </div>
        </>
    )
}
