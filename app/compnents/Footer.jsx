import Link from "next/link";


export default function Footer(){
    return(
        <>
            <div className="bg-[oklch(77.034%_0.20078_152.412)] w-full min-h-[400px] flex flex-col md:flex-row mt-10 py-10">
        
                <div className="w-full flex flex-col md:flex-row px-5 md:px-0 gap-10 md:gap-0">

                    <div className="flex flex-col justify-center gap-2 md:ml-10 w-full md:w-[100%]">
                        <h2 className="text-white text-xl md:text-2xl text-bold">Sahyadri Open Source Community</h2>
                        <h4 className="text-white text-sm md:text-base">Sahyadri College of Engineering and Management, Adyar, Mangalore - 575007 IN</h4>
                        <Link href="https://sosc.org.in" className="underline">sosc.org.in</Link>
                    </div>

                    <div className="flex flex-col justify-center items-start md:items-center w-full md:w-[140px] gap-2 md:ml-40">
                        <h2 className="text-white font-bold">Follow Us</h2>
                        <Link href="https://github.com/so-sc" className="underline">GitHub</Link>
                        <Link href="https://www.instagram.com/sosc.sahyadri/" className="underline">Instagram</Link>
                        <Link href="https://www.linkedin.com/company/sosc-sahyadri/posts/?feedView=all" className="underline">LinkedIn</Link>
                        <Link href="https://x.com/sosc_sahyadri?t=y9WZsgmE1Nh5mfq-i6Ne2A&s=08 " className="underline">X</Link>
                        <Link href="https://www.youtube.com/channel/UCk8nlSMwUT-jhEtamMF-V-w" className="underline">YouTube</Link>
                    </div>

                    <div className="flex flex-col justify-center items-start md:items-center w-full md:w-[300px] gap-2 md:ml-20">
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