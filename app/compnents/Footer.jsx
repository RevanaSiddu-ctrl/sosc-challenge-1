import Link from "next/link";


export default function Footer(){
    return(
        <>
            <footer className="bg-[oklch(77.034%_0.20078_152.412)] w-full mt-10 text-white">
                <div className="max-w-[1100px] mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-white text-2xl font-semibold">Sahyadri Open Source Community</h2>
                        <p className="text-white/90">Sahyadri College of Engineering and Management, Adyar, Mangalore - 575007 IN</p>
                        <Link href="https://sosc.org.in" className="underline">sosc.org.in</Link>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold">Follow Us</h3>
                        <Link href="https://github.com/so-sc" className="underline">GitHub</Link>
                        <Link href="https://www.instagram.com/sosc.sahyadri/" className="underline">Instagram</Link>
                        <Link href="https://www.linkedin.com/company/sosc-sahyadri/posts/?feedView=all" className="underline">LinkedIn</Link>
                        <Link href="https://x.com/sosc_sahyadri?t=y9WZsgmE1Nh5mfq-i6Ne2A&s=08 " className="underline">X</Link>
                        <Link href="https://www.youtube.com/channel/UCk8nlSMwUT-jhEtamMF-V-w" className="underline">YouTube</Link>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold">Others</h3>
                        <Link href="https://sosc.org.in/" className="underline">Website</Link>
                        <Link href="https://sosc.org.in/guidelines/" className="underline">Community Guidelines</Link>
                        <Link href="https://github.com/so-sc/code-of-conduct" className="underline">Code of Conduct</Link>
                    </div>
                </div>
            </footer>
        </>
    )
}