import Link from "next/link";

export default function Footer(){
    return(
        <>
            <div className="bg-[oklch(77.034%_0.20078_152.412)] w-full h-auto flex flex-col md:flex-row mt-10 p-10 gap-10">
        
                <div className="flex-1 flex flex-col justify-center gap-2">
                    <h2 className="text-white text-2xl font-bold">Sahyadri Open Source Community</h2>
                    <h4 className="text-white">Sahyadri College of Engineering and Management, Adyar, Mangalore - 575007 IN</h4>
                    <Link href="https://sosc.org.in" target="_blank" className="text-white underline hover:opacity-80">sosc.org.in</Link>
                </div>

                <div className="flex-1 flex flex-col justify-center gap-2">
                    <h2 className="text-white font-bold text-lg">Follow Us</h2>
                    <Link href="https://github.com/so-sc" target="_blank" className="text-white underline hover:opacity-80">GitHub</Link>
                    <Link href="https://www.instagram.com/sosc.sahyadri/" target="_blank" className="text-white underline hover:opacity-80">Instagram</Link>
                    <Link href="https://www.linkedin.com/company/sosc-sahyadri/posts/?feedView=all" target="_blank" className="text-white underline hover:opacity-80">LinkedIn</Link>
                    <Link href="https://x.com/sosc_sahyadri?t=y9WZsgmE1Nh5mfq-i6Ne2A&s=08" target="_blank" className="text-white underline hover:opacity-80">X</Link>
                    <Link href="https://www.youtube.com/channel/UCk8nlSMwUT-jhEtamMF-V-w" target="_blank" className="text-white underline hover:opacity-80">YouTube</Link>
                </div>

                <div className="flex-1 flex flex-col justify-center gap-2">
                    <h2 className="text-white font-bold text-lg">Others</h2>
                    <Link href="https://sosc.org.in/" target="_blank" className="text-white underline hover:opacity-80">Website</Link>
                    <Link href="https://sosc.org.in/guidelines/" target="_blank" className="text-white underline hover:opacity-80">Community Guidelines</Link>
                    <Link href="https://github.com/so-sc/code-of-conduct" target="_blank" className="text-white underline hover:opacity-80">Code of Conduct</Link>
                </div>
            </div>
        </>
    )
}