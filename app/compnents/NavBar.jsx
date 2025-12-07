"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NavBar() {
    
  const router = useRouter();

  return(
        <>
            <div className="h-50 md:h-[60px] bg-[oklch(77.034%_0.20078_152.412)] w-[315%] md:w-full flex flex-row  items-center top-0 left-0 z-50">
                  <Image src="https://sosc.org.in/_astro/sosc_logo_white.Bej07WYV_Z10hDC0.svg" alt="logo" height={0} width={0} className="h-40 w-40 md:h-[50px] md:w-[50px] ml-10 md:ml-[400px]"/>
                  <div className="ml-80 md:ml-[900px] flex flex-row gap-15 md:gap-10 text-base md:text-[20px] text-[50px] font-mono">
                    <button className="text-white cursor-pointer hover:border-b-2 border-white h-15" onClick={()=>router.push("./home")}>Home</button>
                  <button className="text-white cursor-pointer hover:border-b-2 border-white h-15" onClick={()=>router.push("./events")}>Events</button>
                  <button className="text-white cursor-pointer hover:border-b-2 border-white h-15" onClick={() => router.push("/blogs")}>Blogs</button>
                  <button className="text-white cursor-pointer hover:border-b-2 border-white h-15" onClick={()=>router.push("./team")}>Team</button>
                  </div>
                </div>
        </>
    )
}
