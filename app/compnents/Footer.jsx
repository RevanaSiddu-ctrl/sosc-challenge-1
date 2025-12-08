import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div
        className="
          bg-[oklch(77.034%_0.20078_152.412)]
          w-full
          h-auto md:h-[400px]
          flex flex-col md:flex-row
          mt-10
          px-4 md:px-0
          py-8 md:py-0
        "
      >
        {/* INNER WRAPPER */}
        <div className="h-auto md:h-[90%] w-full flex flex-col md:flex-row">

          {/* LEFT SECTION */}
          <div
            className="
              flex flex-col justify-center gap-2
              ml-0 md:ml-10
              w-full md:w-[100%]
              text-center md:text-left
              mb-6 md:mb-0
            "
          >
            <h2 className="text-white text-xl md:text-2xl font-bold">
              Sahyadri Open Source Community
            </h2>
            <h4 className="text-white text-sm md:text-base">
              Sahyadri College of Engineering and Management, Adyar, Mangalore - 575007 IN
            </h4>
            <Link href="https://sosc.org.in" className="underline">
              sosc.org.in
            </Link>
          </div>

          {/* FOLLOW US */}
          <div
            className="
              flex flex-col justify-center items-center
              w-full md:w-[140px]
              gap-2
              mb-6 md:mb-0
            "
          >
            <h2 className="text-white font-bold text-lg md:text-base">Follow Us</h2>
            <Link href="https://github.com/so-sc" className="underline">GitHub</Link>
            <Link href="https://www.instagram.com/sosc.sahyadri/" className="underline">Instagram</Link>
            <Link href="https://www.linkedin.com/company/sosc-sahyadri/posts/?feedView=all" className="underline">LinkedIn</Link>
            <Link href="https://x.com/sosc_sahyadri?t=y9WZsgmE1Nh5mfq-i6Ne2A&s=08" className="underline">X</Link>
            <Link href="https://www.youtube.com/channel/UCk8nlSMwUT-jhEtamMF-V-w" className="underline">YouTube</Link>
          </div>

          {/* OTHERS SECTION */}
          <div
            className="
              flex flex-col justify-center items-center
              w-full md:w-[300px]
              gap-2
            "
          >
            <h2 className="text-white font-bold text-lg md:text-base">Others</h2>
            <Link href="https://sosc.org.in/" className="underline">Website</Link>
            <Link href="https://sosc.org.in/guidelines/" className="underline">Community Guidelines</Link>
            <Link href="https://github.com/so-sc/code-of-conduct" className="underline">Code of Conduct</Link>
          </div>

        </div>
      </div>
    </>
  );
}
