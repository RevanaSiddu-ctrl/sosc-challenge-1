import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[oklch(77.034%_0.20078_152.412)] w-full py-12 mt-10">
      <div className="flex flex-row justify-between flex-wrap gap-10 px-10">
        
        {/* Left Section */}
        <div className="flex flex-col gap-2 max-w-md">
          <h2 className="text-white text-2xl font-bold">Sahyadri Open Source Community</h2>
          <h4 className="text-white">
            Sahyadri College of Engineering and Management, Adyar, Mangalore - 575007 IN
          </h4>
          <Link href="https://sosc.org.in" className="underline text-white">sosc.org.in</Link>
        </div>

        {/* Follow Us Section */}
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-white font-bold mb-2">Follow Us</h2>
          <Link href="https://github.com/so-sc" className="underline text-white">GitHub</Link>
          <Link href="https://www.instagram.com/sosc.sahyadri/" className="underline text-white">Instagram</Link>
          <Link href="https://www.linkedin.com/company/sosc-sahyadri/posts/?feedView=all" className="underline text-white">LinkedIn</Link>
          <Link href="https://x.com/sosc_sahyadri" className="underline text-white">X</Link>
          <Link href="https://www.youtube.com/channel/UCk8nlSMwUT-jhEtamMF-V-w" className="underline text-white">YouTube</Link>
        </div>

        {/* Others Section */}
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-white font-bold mb-2">Others</h2>
          <Link href="https://sosc.org.in/" className="underline text-white">Website</Link>
          <Link href="https://sosc.org.in/guidelines/" className="underline text-white">Community Guidelines</Link>
          <Link href="https://github.com/so-sc/code-of-conduct" className="underline text-white">Code of Conduct</Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-200 text-sm">
        © SOSC 2025. All rights reserved.
      </div>
    </footer>
  );
}