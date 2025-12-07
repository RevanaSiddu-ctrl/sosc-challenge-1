import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-[oklch(77.034%_0.20078_152.412)] w-full py-12 mt-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

         
          <div className="flex flex-col gap-3">
            <h2 className="text-white text-2xl font-bold">
              Sahyadri Open Source Community
            </h2>
            <p className="text-white leading-relaxed">
              Sahyadri College of Engineering and Management,<br />
              Adyar, Mangalore - 575007 IN
            </p>
            <Link href="https://sosc.org.in" className="underline text-white">
              sosc.org.in
            </Link>
          </div>

        
<div className="md:pl-32 lg:pl-52">
            <h2 className="text-white font-bold text-xl mb-2">Follow Us</h2>
            <div className="flex flex-col gap-2">
              <Link href="https://github.com/so-sc" className="underline text-white">GitHub</Link>
              <Link href="https://www.instagram.com/sosc.sahyadri/" className="underline text-white">Instagram</Link>
              <Link href="https://www.linkedin.com/company/sosc-sahyadri/posts/?feedView=all" className="underline text-white">LinkedIn</Link>
              <Link href="https://x.com/sosc_sahyadri" className="underline text-white">X</Link>
              <Link href="https://www.youtube.com/channel/UCk8nlSMwUT-jhEtamMF-V-w" className="underline text-white">YouTube</Link>
            </div>
          </div>

     
          <div className="md:pl-10 lg:pl-16">
            <h2 className="text-white font-bold text-xl mb-2">Others</h2>
            <div className="flex flex-col gap-2">
              <Link href="https://sosc.org.in" className="underline text-white">Website</Link>
              <Link href="https://sosc.org.in/guidelines/" className="underline text-white">Community Guidelines</Link>
              <Link href="https://github.com/so-sc/code-of-conduct" className="underline text-white">Code of Conduct</Link>
            </div>
          </div>

        </div>

     
        <div className="mt-10 border-t border-white/30 pt-4 text-center">
          <p className="text-white/90 text-sm">
            © {new Date().getFullYear()} Sahyadri Open Source Community. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
