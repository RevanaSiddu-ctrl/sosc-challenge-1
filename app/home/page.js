import Image from "next/image";
import NavBar from "../compnents/NavBar";
import Footer from "../compnents/Footer";

export default function Home() {
  return (
    <>
      <NavBar />

      {/* --- HERO SECTION --- */}
      {/* Centered on mobile, adjusted margins/padding for responsiveness */}
      <div className="flex flex-col justify-center items-start w-full max-w-4xl px-5 md:px-10 mx-auto mt-[100px] md:mt-[150px] mb-20">
        <Image 
          src="https://sosc.org.in/_astro/sosc_logo.DBzxZ_Go_Z10hDC0.svg"
          alt="logo"
          width={100}
          height={100}
          className="mb-3"
        />
        <h2 className="text-black text-2xl md:text-3xl font-baloo font-bold mb-4">
          Sahyadri Open Source Community
        </h2>
        <p className="text-gray-700 text-md md:text-lg max-w-2xl leading-relaxed font-baloo">
          A community driven by tech enthusiasts and open-source contributors, 
          helping students become part of the open-source ecosystem through 
          training and skill development.
        </p>
        <button className="bg-[oklch(77.034%_0.20078_152.412)] w-[180px] h-[45px] rounded-3xl text-white text-sm font-baloo font-bold mt-5 cursor-pointer hover:opacity-90 transition-opacity">
          Community Guidelines
        </button>
      </div>

      {/* --- SECTION 1: Get Trained --- */}
      <div className="w-full flex flex-col md:flex-row items-center gap-10 px-5 md:px-20 py-10">
        <div className="w-full md:w-1/2 flex justify-center">
             <img src="https://sosc.org.in/_astro/hero_github.CjpTNEJ9_lPP1X.webp" alt="img1" className="w-full max-w-[500px] h-auto" />
        </div>
        
        <div className="w-full md:w-1/2 flex flex-col items-start gap-3">
          <h2 className="text-black text-2xl md:text-3xl font-baloo font-bold">Get Trained by Experts</h2>
          <p className="text-gray-700 text-md leading-relaxed font-baloo">
            SOSC is all about helping each other to learn and improve, we conduct workshops and trainings led by speakers from other technical communities, and student experts. 
            Keeping up to date with latest technologies and learning new things is what most of love. 
            Here is your chance to attend workshops, training and even host non-profit events to help others.
          </p>
        </div>
      </div>

      {/* --- SECTION 2: Explore Clubs (Reverse order on desktop for visual variety) --- */}
      <div className="w-full flex flex-col-reverse md:flex-row items-center gap-10 px-5 md:px-20 py-10">
        <div className="w-full md:w-1/2 flex flex-col items-start gap-3">
          <h2 className="text-black text-2xl md:text-3xl font-baloo font-bold">Explore Clubs and Activities</h2>
          <p className="text-gray-700 text-md leading-relaxed font-baloo">
            SOSC is a conglomeration of clubs and individuals who contribute to the community by helping us conduct events and activities. 
            There are numerous clubs and experts who help shape the community to be pro-active. 
            Mozilla Campus Clubs, Developer Students clubs, and the GitHub Campus Expert are to name a few.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
            <img src="https://sosc.org.in/_astro/hero_clubs.DTTDV-jy_1p64vp.webp" alt="img2" className="w-full max-w-[600px] h-auto" />
        </div>
      </div>

      {/* --- SECTION 3: Get Connected --- */}
      <div className="w-full flex flex-col md:flex-row items-center gap-10 px-5 md:px-20 py-10 mb-10">
        <div className="w-full md:w-1/2 flex justify-center">
            <img src="https://sosc.org.in/_astro/hero_connect.CV53XNoK_Z2hOGEd.webp" alt="img3" className="w-full max-w-[600px] h-auto" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start gap-3">
          <h2 className="text-black text-2xl md:text-3xl font-baloo font-bold">Get Connected</h2>
          <p className="text-gray-700 text-md leading-relaxed font-baloo">
            Meet people with similar interest to work together on projects and host events to build a better collaborative environment.
            We are more than 100 members with interests on various fields of technology here to know each other and get connected.
            Meet our members to know more about us and build something cool!
          </p>
          <button className="bg-[oklch(77.034%_0.20078_152.412)] w-[160px] h-[40px] rounded-3xl text-white text-sm font-baloo font-bold mt-3 cursor-pointer hover:opacity-90">
            Learn More
          </button>
        </div>
      </div>

      <Footer/>
    </>
  );
}