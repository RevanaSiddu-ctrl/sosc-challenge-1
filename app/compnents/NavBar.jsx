"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NavBar() {
    
  const router = useRouter();

  return(
        <>
            <div className="h-[90px] bg-[oklch(77.034%_0.20078_152.412)] w-full flex flex-row fixed  items-center top-0 left-0 z-50">
                  <Image src="https://sosc.org.in/_astro/sosc_logo_white.Bej07WYV_Z10hDC0.svg" alt="logo" height={0} width={0} className="h-[70px] w-[70px] ml-[50px]"/>
                  <div className="ml-[1000px] flex  flex-row gap-10">
                    <button className="text-white text-[2xl] cursor-pointer" onClick={()=>router.push("./home")}>Home</button>
                  <button className="text-white text-[2xl] cursor-pointer" onClick={()=>router.push("./events")}>Events</button>
                  <button className="text-white text-[2xl] cursor-pointer" onClick={() => router.push("/blogs")}>Blogs</button>
                  <button className="text-white text-[2xl] cursor-pointer" onClick={()=>router.push("./team")}>Team</button>
                  </div>
                </div>
        </>
    )
}
