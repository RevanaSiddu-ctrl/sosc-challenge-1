import Link from "next/link";


export default function Footer(){
   
  return (
    <footer className="bg-[oklch(77.034%_0.20078_152.412)] w-full py-12 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Left Section */}
        <div className="space-y-3">
          <h2 className="text-white text-2xl font-bold">
            Sahyadri Open Source Community
          </h2>

          <p className="text-white">
            Sahyadri College of Engineering and Management, Adyar, Mangalore - 575007 IN
          </p>

          <Link href="mailto:sosc@sahyadri.edu.in" className="underline text-white">
            sosc@sahyadri.edu.in
          </Link>

          <p className="text-white">+91 79941 34420</p>
        </div>

        {/* Follow Us */}
        <div className="space-y-3">
          <h2 className="text-white font-bold text-lg">FOLLOW US</h2>

          <div className="flex flex-col space-y-2 text-white">
            <Link href="https://github.com/so-sc" className="underline">GitHub</Link>
            <Link href="https://www.instagram.com/sosc.sahyadri/" className="underline">Instagram</Link>
            <Link href="https://www.linkedin.com/company/sosc-sahyadri/" className="underline">LinkedIn</Link>
            <Link href="https://x.com/sosc_sahyadri" className="underline">X</Link>
            <Link href="https://www.youtube.com/channel/UCk8nlSMwUT-jhEtamMF-V-w" className="underline">YouTube</Link>
          </div>
        </div>

        {/* Others */}
        <div className="space-y-3">
          <h2 className="text-white font-bold text-lg">OTHERS</h2>

          <div className="flex flex-col space-y-2 text-white">
            <Link href="https://sosc.org.in/" className="underline">Website</Link>
            <Link href="https://sosc.org.in/guidelines/" className="underline">Community Guidelines</Link>
            <Link href="https://github.com/so-sc/code-of-conduct" className="underline">
              Code of Conduct
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <p className="text-center text-white mt-10">
        SOSC © 2025 All Rights Reserved.
      </p>
    </footer>
  );
}

