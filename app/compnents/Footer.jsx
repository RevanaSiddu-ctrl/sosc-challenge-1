import Link from "next/link";


export default function Footer(){
    return(
        <>
            <div className="bg-[oklch(77.034%_0.20078_152.412)] w-full md:h-[400px] h-full mt-10">
        
                <div className="h-[90%] flex md:flex-row flex-col">

                    <div className="flex flex-col justify-center md:mt-0 mt-10 gap-2 ml-10 md:w-[100%] ">
                        <h2 className="text-white text-2xl text-bold ">Sahyadri Open Source Community</h2>
                        <h4 className="text-white">Sahyadri College of Engineering and Management, Adyar, Mangalore - 575007 IN</h4>
                        <Link href="mailto:https://sosc.org.in" className="underline">sosc.org.in</Link>
                    </div>

                    <div className="flex flex-row md:mt-0 mt-10 ">
                     <div className="flex flex-col justify-center ml-10  w-[140px] gap-3 ">
                        <h2 className="text-white ">Fallow Us</h2>
                        <Link href="https://github.com/so-sc" className="underline">GitHub</Link>
                        <Link href="https://www.instagram.com/sosc.sahyadri/" className="underline">Instagram</Link>
                        <Link href="https://www.linkedin.com/company/sosc-sahyadri/posts/?feedView=all" className="underline">LinkedIn</Link>
                        <Link href="https://x.com/sosc_sahyadri?t=y9WZsgmE1Nh5mfq-i6Ne2A&s=08 " className="underline">X</Link>
                        <Link href="https://www.youtube.com/channel/UCk8nlSMwUT-jhEtamMF-V-w" className="underline">YouTube</Link>
                    </div>

                    <div className="flex flex-col justify-center w-[300px] gap-3 ml-10 mb-20">
                        <h2 className="text-white ">Others</h2>
                        <Link href="https://sosc.org.in/" className="underline">Website</Link>
                        <Link href="https://sosc.org.in/guidelines/" className="underline">Community Guidlines</Link>
                        <Link href="https://github.com/so-sc/code-of-conduct" className="underline">Code of Contact</Link>
                    </div>
                </div>
            </div>
               <p className="flex items-center justify-center mb-20"> SOSC © 2025 All rights Reserved.</p>
            </div>
        </>
    )
}