import Link from "next/link";


export default function Footer(){
    return(
        <>
            <div className="bg-[oklch(77.034%_0.20078_152.412)] w-full min-h-[400px] flex flex-col md:flex-row mt-10 py-8">
        
                <div className="flex flex-col md:flex-row w-full px-5 md:px-10 gap-8">

                    <div className="flex flex-col justify-center gap-2 md:w-[40%]">
                        <h2 className="text-white text-xl md:text-2xl font-bold">Sahyadri Open Source Community</h2>
                        <h4 className="text-white text-sm md:text-base">Sahyadri College of Engineering and Management, Adyar, Mangalore - 575007 IN</h4>
                        <Link href="https://sosc.org.in" className="underline text-white">sosc.org.in</Link>
                    </div>

                    <div className="flex flex-col justify-center items-start md:items-center gap-2 md:w-[30%]">
                        <h2 className="text-white font-bold">Follow Us</h2>
                        <Link href="https://github.com/so-sc" className="underline text-white">GitHub</Link>
                        <Link href="https://www.instagram.com/sosc.sahyadri/" className="underline text-white">Instagram</Link>
                        <Link href="https://www.linkedin.com/company/sosc-sahyadri/posts/?feedView=all" className="underline text-white">LinkedIn</Link>
                        <Link href="https://x.com/sosc_sahyadri?t=y9WZsgmE1Nh5mfq-i6Ne2A&s=08 " className="underline text-white">X</Link>
                        <Link href="https://www.youtube.com/channel/UCk8nlSMwUT-jhEtamMF-V-w" className="underline text-white">YouTube</Link>
                    </div>

                    <div className="flex flex-col justify-center items-start md:items-center gap-2 md:w-[30%]">
                        <h2 className="text-white font-bold">Others</h2>
                        <Link href="https://sosc.org.in/" className="underline text-white">Website</Link>
                        <Link href="https://sosc.org.in/guidelines/" className="underline text-white">Community Guidelines</Link>
                        <Link href="https://github.com/so-sc/code-of-conduct" className="underline text-white">Code of Conduct</Link>
                    </div>
                </div>
            </div>
        </>
    )
}