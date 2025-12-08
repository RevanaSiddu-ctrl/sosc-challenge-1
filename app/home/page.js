import Image from "next/image";
import NavBar from "../compnents/NavBar";
import Footer from "../compnents/Footer";

export default function Home() {
 return (
 <>
 <NavBar />

 <div className="pt-[70px]">

 <div className="flex flex-col justify-center items-center w-full max-w-[700px] min-h-[500px] md:min-h-[600px] px-5 md:px-10 mx-auto text-center">
 <Image
 src="https://sosc.org.in/_astro/sosc_logo.DBzxZ_Go_Z10hDC0.svg"
 alt="logo"
 width={100}
 height={100}
 className="mb-4"
 />
 <h2 className="text-black text-2xl md:text-3xl font-bold mb-4">
 Sahyadri Open Source Community
 </h2>
 <p className="text-gray-700 text-base md:text-lg w-full max-w-[700px] leading-relaxed">
 A community driven by tech enthusiasts and open-source contributors, to help
 young students become part of the open-source ecosystem through training and skill
 development.
 </p>
 <button className="bg-[oklch(77.034%_0.20078_152.412)] w-[180px] h-[45px] rounded-full text-white text-sm font-bold mt-6 cursor-pointer hover:opacity-90 transition-opacity">
 Community Guidelines
 </button>
 </div>

 <div className="w-full flex justify-center px-5 py-16">
 <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-12">
 <img
 src="https://sosc.org.in/_astro/hero_github.CjpTNEJ9_lPP1X.webp"
 alt="img1"
 className="w-full md:w-1/2 h-auto object-contain"
 />
 <div className="flex flex-col items-start gap-4 w-full md:w-1/2">
 <h2 className="text-black font-bold text-2xl md:text-3xl">Get Trained by Experts</h2>
 <p className="text-base md:text-lg font-normal text-gray-700 leading-relaxed">
 SOSC is all about helping each other to learn and improve, we conduct workshops
 and trainings led by speakers from other technical communities, and student
 experts. Keeping up to date with latest technologies and learning new things is what
 most of love. Here is your chance to attend workshops, training and even host
 non-profit events to help others.
 </p>
 </div>
 </div>
 </div>

 <div className="w-full flex justify-center px-5 py-16 bg-gray-50">
 <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-12">
 <div className="flex flex-col items-start gap-4 w-full md:w-1/2 order-2 md:order-1">
 <h2 className="text-black font-bold text-2xl md:text-3xl">Explore clubs and Activities</h2>
 <p className="text-base md:text-lg font-normal text-gray-700 leading-relaxed">
 SOSC is a conglomeration of clubs and individuals who contribute to the
 community by helping us conduct events and activities. there are numerous clubs and
 experts who help shape the community to be pro-active. Mozilla Campus Clubs,
 Developer Students clubs, and the GitHub Campus Expert are to name a few.
 </p>
 </div>
 <img
 src="https://sosc.org.in/_astro/hero_clubs.DTTDV-jy_1p64vp.webp"
 alt="img2"
 className="w-full md:w-1/2 h-auto object-contain order-1 md:order-2"
 />
 </div>
 </div>

 <div className="w-full flex justify-center px-5 py-16">
 <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-12">
 <img
 src="https://sosc.org.in/_astro/hero_connect.CV53XNoK_Z2hOGEd.webp"
 alt="img3"
 className="w-full md:w-1/2 h-auto object-contain"
 />
 <div className="flex flex-col items-start gap-4 w-full md:w-1/2">
 <h2 className="text-black font-bold text-2xl md:text-3xl">Get Connected !</h2>
 <p className="text-base md:text-lg font-normal text-gray-700 leading-relaxed">
 Meet people with similar interest to work together on projects and host events
 to build a better collaborative environment. We are more than 100 members with
 interests on various fields of technology here to know each other and get
 connected. Meet our members to know more about us and build something cool!
 </p>
 <button className="bg-[oklch(77.034%_0.20078_152.412)] w-[160px] h-[45px] rounded-full text-white text-sm font-bold mt-2 cursor-pointer hover:opacity-90 transition-opacity">
 Learn More
 </button>
 </div>
 </div>
 </div>

 </div>

 <Footer />
 </>
 );
}
