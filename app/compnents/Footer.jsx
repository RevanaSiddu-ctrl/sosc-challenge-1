import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-[oklch(77.034%_0.20078_152.412)] w-full py-12 mt-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
         
          <div className="flex flex-col items-center md:items-start gap-3">
            <h2 className="text-white text-2xl font-bold">
              Sahyadri Open Source Community
            </h2>
            <p className="text-white leading-relaxed">
              Sahyadri College of Engineering and Management,<br />
              Adyar, Mangalore - 575007 IN
            </p>
            <Link href="https://sosc.org.in" className="underline text-white hover:text-gray-200">
              sosc.org.in
            </Link>
          </div>

          <div className="flex flex-col gap-2 md:pl-10 lg:pl-20">
            <h2 className="text-white font-bold text-xl mb-2">Follow Us</h2>
            <div className="flex flex-col gap-2">
              <FooterLink href="https://github.com/so-sc">GitHub</FooterLink>
              <FooterLink href="https://www.instagram.com/sosc.sahyadri/">Instagram</FooterLink>
              <FooterLink href="https://www.linkedin.com/company/sosc-sahyadri/posts/?feedView=all">LinkedIn</FooterLink>
              <FooterLink href="https://x.com/sosc_sahyadri">X</FooterLink>
              <FooterLink href="https://www.youtube.com/channel/UCk8nlSMwUT-jhEtamMF-V-w">YouTube</FooterLink>
            </div>
          </div>

          
          <div className="flex flex-col gap-2 md:pl-0 lg:pl-10">
            <h2 className="text-white font-bold text-xl mb-2">Others</h2>
            <div className="flex flex-col gap-2">
              <FooterLink href="https://sosc.org.in">Website</FooterLink>
              <FooterLink href="https://sosc.org.in/guidelines/">Community Guidelines</FooterLink>
              <FooterLink href="https://github.com/so-sc/code-of-conduct">Code of Conduct</FooterLink>
            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-white/30 pt-6 text-center px-4">
          <p className="text-white/90 text-sm">
            © {new Date().getFullYear()} Sahyadri Open Source Community. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link href={href} className="underline text-white hover:text-gray-200 transition-colors">
      {children}
    </Link>
  );
}