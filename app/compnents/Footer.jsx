import Link from "next/link";


export default function Footer(){
    return(
        <>
            <footer className="bg-[oklch(77.034%_0.20078_152.412)] w-full py-12 mt-20">
                <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {/* Contact Information */}
                        <div className="flex flex-col gap-3">
                            <h3 className="text-white text-2xl font-bold mb-2">Sahyadri Open Source Community</h3>
                            <p className="text-white text-sm leading-relaxed">
                                Sahyadri College of Engineering and Management, Adyar, Mangalore - 575007 IN
                            </p>
                            <Link href="mailto:sosc@sahyadri.edu.in" className="text-white hover:underline text-sm">
                                sosc@sahyadri.edu.in
                            </Link>
                            <Link href="tel:+917994134420" className="text-white hover:underline text-sm">
                                +91 79941 34420
                            </Link>
                        </div>

                        {/* Follow Us */}
                        <div className="flex flex-col gap-3">
                            <h2 className="text-white font-bold text-xl mb-2">Follow us</h2>
                            <Link href="https://github.com/so-sc" className="text-white hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                                GitHub
                            </Link>
                            <Link href="https://www.instagram.com/sosc.sahyadri/" className="text-white hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                                Instagram
                            </Link>
                            <Link href="https://www.linkedin.com/company/sosc-sahyadri/posts/?feedView=all" className="text-white hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </Link>
                            <Link href="https://x.com/sosc_sahyadri?t=y9WZsgmE1Nh5mfq-i6Ne2A&s=08" className="text-white hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                                X
                            </Link>
                            <Link href="https://www.youtube.com/channel/UCk8nlSMwUT-jhEtamMF-V-w" className="text-white hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                                YouTube
                            </Link>
                        </div>

                        {/* Others */}
                        <div className="flex flex-col gap-3">
                            <h2 className="text-white font-bold text-xl mb-2">Others</h2>
                            <Link href="https://sosc.org.in/" className="text-white hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                                Website
                            </Link>
                            <Link href="https://sosc.org.in/guidelines/" className="text-white hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                                Community Guidelines
                            </Link>
                            <Link href="https://github.com/so-sc/code-of-conduct" className="text-white hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                                Code of Conduct
                            </Link>
                        </div>
                    </div>
                    
                    {/* Copyright */}
                    <div className="mt-8 pt-8 border-t border-white/20">
                        <p className="text-white text-sm text-center">
                            SOSC © 2025 All Rights Reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}