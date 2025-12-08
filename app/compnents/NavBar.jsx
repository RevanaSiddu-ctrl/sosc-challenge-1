"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NavBar() {
    
  const router = useRouter();

  return(
        <>
            <div className="fixed top-0 left-0 w-full flex flex-col md:flex-row items-center bg-[oklch(77.034%_0.20078_152.412)] h-auto md:h-[90px] py-4 md:py-0 z-50 px-5 md:px-20">
                  <Image src="https://sosc.org.in/_astro/sosc_logo_white.Bej07WYV_Z10hDC0.svg" alt="logo" height={0} width={0} className="h-[50px] sm:h-[60px] md:h-[70px] w-[50px] sm:w-[60px] md:w-[70px]" />
                 <div className="flex flex-row flex-wrap gap-4 md:gap-10 mt-3 md:mt-0 justify-center md:justify-end w-full md:w-auto">
                   <button className="text-white text-lg sm:text-xl md:text-2xl cursor-pointer" onClick={()=>router.push("./home")}>Home</button>
                    <button className="text-white text-lg sm:text-xl md:text-2xl cursor-pointer" onClick={() => router.push("./events")}>Events</button>
                    <button className="text-white text-lg sm:text-xl md:text-2xl cursor-pointer" onClick={() => router.push("./blogs")}>Blogs</button>
                    <button className="text-white text-lg sm:text-xl md:text-2xl cursor-pointer" onClick={() => router.push("./team")}>Team</button>

                  </div>
                </div>
        </>
    )
}
