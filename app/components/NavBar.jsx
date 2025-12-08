"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NavBar() {
    
  const router = useRouter();

  return(
        <>
            <div className="h-[63px] bg-[oklch(77.034%_0.20078_152.412)] w-full flex flex-row  items-center top-0 left-0 z-50 ">
                  <Image src="https://sosc.org.in/_astro/sosc_logo_white.Bej07WYV_Z10hDC0.svg" alt="logo" height={0} width={0} className="h-[60px] w-[60px] sm:ml-[150px] ml-[50px]
               "/>
                  <div className="sm:ml-[1000px] flex  flex-row sm:gap-10 gap-5 ml-10">
                    <button className="text-white text-[18px] cursor-pointer border-b-3 border-transparent hover:border-white transition-all duration-300" onClick={()=>router.push("./home")}>Home</button>
                  <button className="text-white text-[18px]  cursor-pointer border-b-3 border-transparent hover:border-white transition-all duration-300" onClick={()=>router.push("./events")}>Events</button>
                  <button className="text-white text-[18px]  cursor-pointer border-b-3 border-transparent hover:border-white transition-all duration-300" onClick={() => router.push("/blogs")}>Blogs</button>
                  <button className="text-white text-[18px]  cursor-pointer border-b-3 border-transparent hover:border-white transition-all duration-300" onClick={()=>router.push("./team")}>Team</button>
                  </div>
                </div>
        </>
    )
}
