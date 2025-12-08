import Link from "next/link";


export default function Footer(){
    return(
        <>
           <div className="bg-[oklch(77.034%_0.20078_152.412)] w-full flex flex-col md:flex-row py-8 px-5 md:px-20">

        
               < div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center">

                    <div className="flex flex-col justify-center gap-2 mb-6 md:mb-0 w-full md:w-1/3">
                        <h2 className="text-white text-2xl text-bold ">Sahyadri Open Source Community</h2>
                        <h4 className="text-white">Sahyadri College of Engineering and Management, Adyar, Mangalore - 575007 IN</h4>
                        <Link href="https://sosc.org.in" className="underline">sosc.org.in</Link>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2 mb-6 md:mb-0 w-full md:w-1/5">
                        <h2 className="text-white font-bold">Fallow Us</h2>
                        <Link href="https://github.com/so-sc" className="underline">GitHub</Link>
                        <Link href="https://www.instagram.com/sosc.sahyadri/" className="underline">Instagram</Link>
                        <Link href="https://www.linkedin.com/company/sosc-sahyadri/posts/?feedView=all" className="underline">LinkedIn</Link>
                        <Link href="https://x.com/sosc_sahyadri?t=y9WZsgmE1Nh5mfq-i6Ne2A&s=08 " className="underline">X</Link>
                        <Link href="https://www.youtube.com/channel/UCk8nlSMwUT-jhEtamMF-V-w" className="underline">YouTube</Link>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2 w-full md:w-1/4">
                        <h2 className="text-white font-bold">Others</h2>
                        <Link href="https://sosc.org.in/" className="underline">Website</Link>
                        <Link href="https://sosc.org.in/guidelines/" className="underline">Community Guidlines</Link>
                        <Link href="https://github.com/so-sc/code-of-conduct" className="underline">Code of Contact</Link>
                    </div>
                </div>
            </div>
        </>
    )
}