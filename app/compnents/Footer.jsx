export default function Footer() {
 return (
 <>
 <div className="bg-[oklch(77.034%_0.20078_152.412)] w-full py-10 px-6 mt-10">
 <div className="flex flex-col md:flex-row justify-between gap-10 max-w-6xl mx-auto">


 <div className="flex flex-col gap-2 text-white w-full md:w-1/3">
 <h2 className="text-2xl font-bold">Sahyadri Open Source Community</h2>
 <p>Sahyadri College of Engineering and Management, Adyar, Mangalore - 575007 IN</p>
 <a href="https://sosc.org.in" className="underline">sosc.org.in</a>
 </div>

 <div className="flex flex-col gap-2 text-white">
 <h2 className="font-bold">Follow Us</h2>
 <a href="https://github.com/so-sc" className="hover:underline">GitHub</a>
 <a href="https://www.instagram.com/sosc.sahyadri/" className="hover:underline">Instagram</a>
 <a href="https://www.linkedin.com/company/sosc-sahyadri/posts/?feedView=all" className="hover:underline">LinkedIn</a>
 <a href="https://x.com/sosc_sahyadri?t=y9WZsgmE1Nh5mfq-i6Ne2A&s=08" className="hover:underline">X</a>
 <a href="https://www.youtube.com/channel/UCk8nlSMwUT-jhEtamMF-V-w" className="hover:underline">YouTube</a>
 </div>

 <div className="flex flex-col gap-2 text-white">
 <h2 className="font-bold">Others</h2>
 <a href="https://sosc.org.in/" className="hover:underline">Website</a>
 <a href="https://sosc.org.in/guidelines/" className="hover:underline">Community Guidelines</a>
 <a href="https://github.com/so-sc/code-of-conduct" className="hover:underline">Code of Conduct</a>
 </div>
 </div>
 </div>
 </>
 )
}