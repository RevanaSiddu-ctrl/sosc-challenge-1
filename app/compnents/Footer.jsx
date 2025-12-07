import Link from "next/link";


export default function Footer(){
    return(
        <>
            <div className="  bg-[oklch(77.034%_0.20078_152.412)] w-[313%] md:w-full h-400 md:h-[400px] flex flex-row md:-mt-100 mt-10">
        
                <div className="h-[90%] flex flex-col md:flex-row">

                    <div className="flex flex-col justify-center mt-60 md:-mt-20 gap-2 ml-10 md:ml-60 w-[100%]">
                        <h2 className="text-white text-[60px] md:text-xl font-bold font-mono ">Sahyadri Open Source Community</h2>
                        <h4 className="text-white text-[50px] md:text-lg">Sahyadri College of Engineering and Management, Adyar, Mangalore - 575007 IN</h4>
                        <Link href="https://sosc.org.in" className="underline text-[40px] md:text-lg">sosc@sahyadri.edu.in</Link>
                        <h4 className="text-white md:text-lg text-[40px] md:mt-0 mt-5">+91 79941 34420</h4>
                    </div>

                    <div className="flex flex-col justify-center w-[150px] gap-2 mt-50 md:mt-10 ml-40">
                        <h2 className="text-white font-bold md:text-lg text-[60px] md:ml-0 -ml-10 w-90 md:w-50 ">Follow Us</h2>
                        <div className="md:ml-0 -ml-10 md:text-lg text-[45px] flex flex-col font-mono">
                        <Link href="https://github.com/so-sc" className="underline mt-5">GitHub</Link>
                        <Link href="https://www.instagram.com/sosc.sahyadri/" className="underline md:mt-5 mt-10">Instagram</Link>
                        <Link href="https://www.linkedin.com/company/sosc-sahyadri/posts/?feedView=all" className="underline md:mt-5 mt-10">LinkedIn</Link>
                        <Link href="https://x.com/sosc_sahyadri?t=y9WZsgmE1Nh5mfq-i6Ne2A&s=08 " className="underline md:mt-5 mt-10">X</Link>
                        <Link href="https://www.youtube.com/channel/UCk8nlSMwUT-jhEtamMF-V-w" className="underline md:mt-5 mt-10">YouTube</Link>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center  w-[300px] gap-2 ml-190 md:ml-20 -mt-155 md:-mt-10">
                        <h2 className="text-white font-bold md:text-lg text-[60px] md:ml-0 -ml-10 w-90 md:w-0 ">Others</h2>
                        <div className="md:ml-0 -ml-10 md:text-lg text-[45px] flex flex-col font-mono md:w-100 w-150">
                        <Link href="https://sosc.org.in/" className="underline ">Website</Link>
                        <Link href="https://sosc.org.in/guidelines/" className="underline mt-10">Community Guidlines</Link>
                        <Link href="https://github.com/so-sc/code-of-conduct" className="underline mt-10">Code of Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}