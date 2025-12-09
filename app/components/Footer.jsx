import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[oklch(77.034%_0.20078_152.412)] w-full py-20 mt-10 font-[Poppins] h-[350px]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-sm">

        <div className="space-y-3 space-x-2">
          <h2 className="text-lg font-semibold">
            Sahyadri Open Source Community
          </h2>

          <p className="leading-snug text-[13px] w-[1000px]">
            Sahyadri College of Engineering and Management, Adyar, Mangalore - 575007 IN
          </p>

          <Link
            href="mailto:sosc@sahyadri.edu.in"
            className="underline block text-[13px]"
          >
            sosc@sahyadri.edu.in
          </Link>

          <p className="text-[13px]">+91 79941 34420</p>
        </div>

        <div className="ml-100 space-y-4 space-x-2">
          <h2 className="text-[13px] font-semibold tracking-wide w-[100px]">
            FOLLOW US
          </h2>

          <ul className="flex flex-col space-y-2 text-[13px] space-x-2">
            <Link href="https://github.com/so-sc" className="underline">GitHub</Link>
            <Link href="https://www.instagram.com/sosc.sahyadri/" className="underline">Instagram</Link>
            <Link href="https://www.linkedin.com/company/sosc-sahyadri/posts/?feedView=all" className="underline">LinkedIn</Link>
            <Link href="https://x.com/sosc_sahyadri" className="underline">X</Link>
            <Link href="https://www.youtube.com/channel/UCk8nlSMwUT-jhEtamMF-V-w" className="underline">YouTube</Link>
          </ul>
        </div>

        <div className="ml-50 space-y-4 space-x-1">
          <h2 className="font-semibold text-[13px] tracking-wide">
            OTHERS
          </h2>

          <ul className="flex flex-col space-y-2 text-[13px] space-x-2">
            <Link href="https://sosc.org.in/" className="underline">Website</Link>
            <Link href="https://sosc.org.in/guidelines/" className="underline">Community Guidelines</Link>
            <Link href="https://github.com/so-sc/code-of-conduct" className="underline">Code of Conduct</Link>
          </ul>
        </div>

      </div>

      <div className="mt-10 text-center text-white text-[13px] space-x-2">
        SOSC © 2025 All Rights Reserved.
      </div>
    </footer>
  );
}

