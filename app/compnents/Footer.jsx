import Link from "next/link";

export default function Footer(){
    return(
        <>
            <div className="bg-[oklch(77.034%_0.20078_152.412)] w-full min-h-[400px] h-auto flex flex-col md:flex-row mt-10 py-10 px-5 gap-10">
        
                <div className="w-full flex flex-col md:flex-row justify-around gap-10">

                    <div className="flex flex-col justify-start gap-1 w-full md:w-[30%]">
                        <h2 className="text-white text-2xl font-bold">Sahyadri Open Source Community</h2>
                        <h4 className="text-white">Sahyadri College of Engineering and Management, Adyar, Mangalore - 575007 IN</h4>
                        <Link href="mailto:sosc@sahyadri.edu.in" className="text-white underline">sosc@sahyadri.edu.in</Link>
                        <h4 className="text-white">+91 79941 34420</h4>
                    </div>

                    <div className="flex flex-col justify-start w-full md:w-auto gap-2">
                        <h2 className="text-white font-bold text-xl">Follow Us</h2>
                        <Link href="https://github.com/so-sc" className="text-white underline">GitHub</Link>
                        <Link href="https://www.instagram.com/sosc.sahyadri/" className="text-white underline">Instagram</Link>
                        <Link href="https://www.linkedin.com/company/sosc-sahyadri/posts/?feedView=all" className="text-white underline">LinkedIn</Link>
                        <Link href="https://x.com/sosc_sahyadri?t=y9WZsgmE1Nh5mfq-i6Ne2A&s=08 " className="text-white underline">X</Link>
                        <Link href="https://www.youtube.com/channel/UCk8nlSMwUT-jhEtamMF-V-w" className="text-white underline">YouTube</Link>
                    </div>

                    <div className="flex flex-col justify-start w-full md:w-auto gap-2">
                        <h2 className="text-white font-bold text-xl">Others</h2>
                        <Link href="https://sosc.org.in/" className="text-white underline">Website</Link>
                        <Link href="https://sosc.org.in/guidelines/" className="text-white underline">Community Guidlines</Link>
                        <Link href="https://github.com/so-sc/code-of-conduct" className="text-white underline">Code of Contact</Link>
                    </div>
                </div>
            </div>   
        </>
    )
}