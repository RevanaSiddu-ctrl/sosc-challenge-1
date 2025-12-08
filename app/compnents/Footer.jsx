import Link from "next/link";


export default function Footer(){
    return(
        <>
            <div className="bg-[oklch(77.034%_0.20078_152.412)] w-full h-[400px] flex flex-row mt-10">
        
                <div className="h-[90%] flex flex-row">

                    <div className="flex flex-col justify-center  gap-2 ml-10 w-[100%]">
                        <h2 className="text-white text-2xl text-bold ">Sahyadri Open Source Community</h2>
                        <h4 className="text-white">Sahyadri College of Engineering and Management, Adyar, Mangalore - 575007 IN</h4>
                        <Link href="https://sosc.org.in" className="underline">sosc.org.in</Link>
                    </div>

                    <div className="flex flex-col justify-center items-center w-[140px] gap-2 ml-40">
                        <h2 className="text-white font-bold">Follow Us</h2>
                        <Link href="https://github.com/so-sc" className="underline">GitHub</Link>
                        <Link href="https://www.instagram.com/sosc.sahyadri/" className="underline">Instagram</Link>
                        <Link href="https://www.linkedin.com/company/sosc-sahyadri/posts/?feedView=all" className="underline">LinkedIn</Link>
                        <Link href="https://x.com/sosc_sahyadri?t=y9WZsgmE1Nh5mfq-i6Ne2A&s=08 " className="underline">X</Link>
                        <Link href="https://www.youtube.com/channel/UCk8nlSMwUT-jhEtamMF-V-w" className="underline">YouTube</Link>
                    </div>

                    <div className="flex flex-col justify-center items-center w-[300px] gap-2 ml-20">
                        <h2 className="text-white font-bold">Others</h2>
                        <Link href="https://sosc.org.in/" className="underline">Website</Link>
                        <Link href="https://sosc.org.in/guidelines/" className="underline">Community Guidelines</Link>
                        <Link href="https://github.com/so-sc/code-of-conduct" className="underline">Code of Conduct</Link>
                    </div>
                </div>
            </div>
        </>
    )
}