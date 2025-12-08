"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
    
  const router = useRouter();

  return(
        <>
            <div className="fixed h-[90px] bg-[oklch(77.034%_0.20078_152.412)] w-full flex flex-row  items-center top-0 left-0 z-50">
                  <Image src="https://sosc.org.in/_astro/sosc_logo_white.Bej07WYV_Z10hDC0.svg" alt="logo" width={70} height={70} className="h-[70px] w-[70px] ml-[50px]"/>
                  <div className="ml-auto pr-12 flex flex-row gap-10 items-center">
                    <Link href="/home" className="text-white text-2xl">Home</Link>
                    <Link href="/blogs" className="text-white text-2xl">Blogs</Link>
                    <Link href="/events" className="text-white text-2xl">Events</Link>
                    <Link href="/team" className="text-white text-2xl">Team</Link>
                  </div>
                </div>
        </>
    )
}
