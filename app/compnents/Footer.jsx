import Link from "next/link";


export default function Footer(){
    return(
        <>
            <div className="bg-[oklch(77.034%_0.20078_152.412)] w-full h-[400px] flex flex-row mt-10">
        
                <div className="h-[75%] flex felx-row">

                    <div className="flex flex-col justify-center  gap-1 ml-40 w-[100%]">
                        <h2 className="text-white text-2xl text-bold ">Sahyadri Open Source Community</h2>
                        <h4 className="text-white">Sahyadri College of Engineering and Management, Adyar, Mangalore - 575007 IN</h4>
                        <Link href="https://mail.google.com/mail/sosc@sahyadri.edu.in" className="text-white underline">sosc@sahyadri.edu.in</Link>
                        <h4 className="text-white">+91 79941 34420</h4>
                        
                    </div>

                    <div className="flex flex-col justify-center items-left w-[140px] gap-2 ml-40">
                        <h2 className="text-white font-bold">Follow Us</h2>
                        <Link href="https://github.com/so-sc" className="text-white underline">GitHub</Link>
                        <Link href="https://www.instagram.com/sosc.sahyadri/" className="text-white underline">Instagram</Link>
                        <Link href="https://www.linkedin.com/company/sosc-sahyadri/posts/?feedView=all" className="text-white underline">LinkedIn</Link>
                        <Link href="https://x.com/sosc_sahyadri?t=y9WZsgmE1Nh5mfq-i6Ne2A&s=08 " className="text-white underline">X</Link>
                        <Link href="https://www.youtube.com/channel/UCk8nlSMwUT-jhEtamMF-V-w" className="text-white underline">YouTube</Link>
                    </div>

                    <div className="flex flex-col justify-center items-left w-[140px] gap-2 ml-20">
                        <h2 className="text-white font-bold">Others</h2>
                        <Link href="https://sosc.org.in/" className="text-white underline">Website</Link>
                        <Link href="https://sosc.org.in/guidelines/" className="text-white underline">Community Guidlines</Link>
                        <Link href="https://github.com/so-sc/code-of-conduct" className="text-white underline">Code of Contact</Link>
                    </div>
                </div>
            </div>

            
            
        </>
    )
}