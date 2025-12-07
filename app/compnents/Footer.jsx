import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[oklch(77.034%_0.20078_152.412)] w-full py-10 mt-10">
      
      {/* Top Section */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
        
    
        <div className="flex flex-col gap-2">
          <h2 className="text-white text-2xl font-bold">
            Sahyadri Open Source Community
          </h2>
          <p className="text-white">
            Sahyadri College of Engineering and Management, Adyar, Mangalore - 575007 IN
          </p>
          <Link href="https://sosc.org.in" className="underline text-white">
            sosc.org.in
          </Link>
          <p className="text-white">+91 79941 34420</p>
        </div>


        <div className="flex flex-col gap-2 min-w-[150px] ml-200">
          <h2 className="text-white font-bold">FOLLOW US</h2>
          <Link href="https://github.com/so-sc" className="underline text-white">GitHub</Link>
          <Link href="https://www.instagram.com/sosc.sahyadri/" className="underline text-white">Instagram</Link>
          <Link href="https://www.linkedin.com/company/sosc-sahyadri/posts/?feedView=all" className="underline text-white">LinkedIn</Link>
          <Link href="https://x.com/sosc_sahyadri?t=y9WZsgmE1Nh5mfq-i6Ne2A&s=08" className="underline text-white">X</Link>
          <Link href="https://www.youtube.com/channel/UCk8nlSMwUT-jhEtamMF-V-w" className="underline text-white">YouTube</Link>
        </div>

        <div className="flex flex-col gap-2 min-w-[150px]">
          <h2 className="text-white font-bold">OTHERS</h2>
          <Link href="https://sosc.org.in/" className="underline text-white">Website</Link>
          <Link href="https://sosc.org.in/guidelines/" className="underline text-white">Community Guidelines</Link>
          <Link href="https://github.com/so-sc/code-of-conduct" className="underline text-white">Code of Conduct</Link>
        </div>
      </div>

     
      <p className="text-white text-center mt-10">
        SOSC © 2025 All Rights Reserved.
      </p>

    </footer>
  );
}
