import Link from "next/link";


export default function Footer(){
    return(
        <>
            {/* Responsive Footer: No fixed height, column on mobile, row on large screens */}
            <div className="bg-[oklch(77.034%_0.20078_152.412)] w-full h-auto py-10 flex flex-col lg:flex-row justify-center mt-10">
        
                <div className="w-full max-w-6xl flex flex-col lg:flex-row lg:justify-between px-5 lg:px-0 mx-auto">

                    {/* 1. SOSC Contact/Address Section - Left Aligned */}
                    <div className="flex flex-col items-start justify-center gap-2 w-full lg:w-[350px] mb-8 lg:mb-0">
                        <h2 className="text-white text-xl md:text-2xl font-bold ">Sahyadri Open Source Community</h2>
                        <h4 className="text-white">Sahyadri College of Engineering and Management, Adyar, Mangalore - 575007 IN</h4>
                        <Link href="https://sosc.org.in" className="underline">sosc.org.in</Link>
                    </div>

                    {/* 2. Follow Us Section - Left Aligned on Mobile, Centered on Desktop for spacing */}
                    <div className="flex flex-col items-start lg:items-center w-full lg:w-[140px] gap-2 mb-8 lg:mb-0">
                        <h2 className="text-white font-bold">Follow Us</h2>
                        <Link href="https://github.com/so-sc" className="underline">GitHub</Link>
                        <Link href="https://www.instagram.com/sosc.sahyadri/" className="underline">Instagram</Link>
                        <Link href="https://www.linkedin.com/company/sosc-sahyadri/posts/?feedView=all" className="underline">LinkedIn</Link>
                        <Link href="https://x.com/sosc_sahyadri?t=y9WZsgmE1Nh5mfq-i6Ne2A&s=08 " className="underline">X</Link>
                        <Link href="https://www.youtube.com/channel/UCk8nlSMwUT-jhEtamMF-V-w" className="underline">YouTube</Link>
                    </div>

                    {/* 3. Others Section - Left Aligned on Mobile, Centered on Desktop for spacing */}
                    <div className="flex flex-col items-start lg:items-center w-full lg:w-[300px] gap-2">
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