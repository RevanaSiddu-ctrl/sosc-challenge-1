import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="bg-[oklch(77.034%_0.20078_152.412)] flex w-full h-[310px] flex-col items-center mt-10">
        <div className="h-[90%] flex flex-row mt-10">
          <div className="flex flex-col justify-start gap-2 mt-5">
            <h2 className="text-white text-ml font-bold text-bold ">
              Sahyadri Open Source Community
            </h2>
            <h4 className="text-white/90 text-sm">
              Sahyadri College of Engineering and Management, Adyar, Mangalore -
              575007 IN
            </h4>
            <Link href="https://sosc.org.in" className="underline text-white/90 text-sm">
              sosc@sahyadri.edu.in
            </Link>
          </div>

          <div className="flex flex-col justify-start w-[140px] gap-5 ml-90 text-xs">
            <h2 className="text-white font-bold">FOLLOW US</h2>
            <Link href="https://github.com/so-sc" className="underline">
              GitHub
            </Link>
            <Link
              href="https://www.instagram.com/sosc.sahyadri/"
              className="underline"
            >
              Instagram
            </Link>
            <Link
              href="https://www.linkedin.com/company/sosc-sahyadri/posts/?feedView=all"
              className="underline"
            >
              LinkedIn
            </Link>
            <Link
              href="https://x.com/sosc_sahyadri?t=y9WZsgmE1Nh5mfq-i6Ne2A&s=08 "
              className="underline"
            >
              X
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCk8nlSMwUT-jhEtamMF-V-w"
              className="underline"
            >
              YouTube
            </Link>
          </div>

          <div className="flex flex-col justify-start w-[140px] gap-5 text-xs ml-0">
            <h2 className="text-white font-bold">OTHERS</h2>
            <Link href="https://sosc.org.in/" className="underline">
              Website
            </Link>
            <Link href="https://sosc.org.in/guidelines/" className="underline">
              Community Guidlines
            </Link>
            <Link
              href="https://github.com/so-sc/code-of-conduct"
              className="underline"
            >
              Code of Contact
            </Link>
          </div>
        </div>
        
        <h3 className="text-xs mb-10">SOSC © 2025 All Rights Reserved.</h3>

      </div>
    </>
  );
}
