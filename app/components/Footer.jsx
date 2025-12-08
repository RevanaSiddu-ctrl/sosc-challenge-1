import Link from "next/link";


export default function Footer(){
    return(
        <>
           <>
  <div className="bg-[oklch(77.034%_0.20078_152.412)] w-full text-white sm:mt-40 pt-6 mt-70">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row py-12 px-6 gap-8 ">
    
      <div className="flex flex-col gap-2 md:w-1/3">
        <h2 className=" text-2xl font-bold text-[22pxx]">Sahyadri Open Source Community</h2>
        <h4 className="text-white  text-[18px]">
          Sahyadri College of Engineering and Management, Adyar, Mangalore - 575007 IN
        </h4>
        <Link href="https://sosc.org.in" className="underline text-[18px]">
          sosc.org.in
        </Link>
        <span className="text-[18px] ">+91 79941 34420</span>
        <span className="text-[18px] ">sosc@sahyadri.edu.in</span>
      </div>

      <div className="flex flex-col  ml-70 md:w-1/6 gap-4 ">
        <h2 className="text-white font-bold text-[18px]">FOLLOW US</h2>
        <Link href="https://github.com/so-sc" className="underline text-[18px]">GitHub</Link>
        <Link href="https://www.instagram.com/sosc.sahyadri/" className="underline text-[18px]">Instagram</Link>
        <Link href="https://www.linkedin.com/company/sosc-sahyadri/posts/?feedView=all" className="underline text-[18px]">LinkedIn</Link>
        <Link href="https://x.com/sosc_sahyadri?t=y9WZsgmE1Nh5mfq-i6Ne2A&s=08" className="underline text-[18px]">X</Link>
        <Link href="https://www.youtube.com/channel/UCk8nlSMwUT-jhEtamMF-V-w" className="underline text-[18px]">YouTube</Link>
      </div>

      <div className="flex flex-col gap-4 md:w-1/6">
        <h2 className="text-white font-bold text-[18px] md:text-lg">OTHERS</h2>
        <Link href="https://sosc.org.in/" className="underline text-sm md:text-base">Website</Link>
        <Link href="https://sosc.org.in/guidelines/" className="underline text-[18px]">Community Guidelines</Link>
        <Link href="https://github.com/so-sc/code-of-conduct" className="underline text-[18px]">Code of Conduct</Link>
      </div>
    </div>

    <div className="  mt-6 py-4 text-center text-[16px]">
      SOSC © 2025 All Rights Reserved.
    </div>
  </div>
</>

        </>
    )
}