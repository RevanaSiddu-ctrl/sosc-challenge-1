import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[oklch(77.034%_0.20078_152.412)] text-white py-12 px-6 mt-16">
      
     
      <div className=" max-w-[1200px] mx-auto  grid  grid-cols-1  sm:grid-cols-2  md:grid-cols-3  gap-10 text-center md:text-left
      ">
        
       
        <div>
          <h2 className="text-xl font-bold mb-3">
            Sahyadri Open Source Community
          </h2>
          <p className="text-sm leading-relaxed">
            Sahyadri College of Engineering and Management, Adyar,
            Mangalore - 575007 IN
          </p>
          <a
            href="mailto:sosc@sahyadri.edu.in"
            className="underline text-sm block mt-2"
          >
            sosc@sahyadri.edu.in
          </a>
          <p className="text-sm mt-1">+91 79941 34420</p>
        </div>

       
        <div className="flex flex-col items-center md:items-start md:ml-[400px]">
          <h2 className="text-sm font-bold mb-3">FOLLOW US</h2>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="https://github.com/so-sc" className="underline">GitHub</Link>
            <Link href="https://www.instagram.com/sosc.sahyadri/" className="underline">Instagram</Link>
            <Link href="https://www.linkedin.com/company/sosc-sahyadri/" className="underline">LinkedIn</Link>
            <Link href="https://x.com/sosc_sahyadri" className="underline">X</Link>
            <Link href="https://www.youtube.com/channel/UCk8nlSMwUT-jhEtamMF-V-w" className="underline">YouTube</Link>
          </div>
        </div>

        
        <div className="flex flex-col items-center md:items-start md:ml-[200px]">
          <h2 className="text-sm font-bold mb-3">OTHERS</h2>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/" className="underline">Website</Link>
            <Link href="/guidelines" className="underline">Community Guidelines</Link>
            <Link href="https://github.com/so-sc/code-of-conduct" className="underline">Code of Conduct</Link>
          </div>
        </div>
      </div>

      <div className="text-center text-xs mt-10">
        SOSC © 2025 All Rights Reserved.
      </div>
    </footer>
  );
}
