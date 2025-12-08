import Image from "next/image";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";


export default function Home() {
  return (
    <>
      {/* Navbar fixed at top */}
      <NavBar />

      {/* Push content down so navbar doesn’t overlap */}
      <div className="pt-28">

        {/* SECTION 1 — HERO */}
        <div className="flex flex-col justify-center items-start w-[700px] px-10 mx-auto mb-24">
          <Image 
            src="https://sosc.org.in/_astro/sosc_logo.DBzxZ_Go_Z10hDC0.svg"
            alt="logo"
            width={120}
            height={120}
            className="mb-6"
          />

          <h2 className="text-black text-3xl font-bold mb-3">
            Sahyadri Open Source Community
          </h2>

          <p className="text-gray-700 text-lg max-w-[700px] leading-relaxed mb-4">
            A community driven by tech enthusiasts and open-source contributors,
            helping students become part of the open-source ecosystem through 
            training and skill development.
          </p>

          <button className="bg-green-500 px-6 py-2 rounded-full text-white font-semibold">
            Community Guidelines
          </button>
        </div>


        {/* SECTION 2 */}
        <div className="h-[500px] w-full flex items-center gap-10 px-[10%] mb-28">
          <img src="https://sosc.org.in/_astro/hero_github.CjpTNEJ9_lPP1X.webp" width={450}/>
          <div className="w-[600px]">
            <h2 className="text-black font-bold text-2xl mb-3">Get Trained by Experts</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              SOSC is all about helping each other to learn and improve...
            </p>
          </div>
        </div>


        {/* SECTION 3 */}
        <div className="h-[500px] w-full flex items-center gap-10 px-[10%] mb-28">
          <div className="w-[600px]">
            <h2 className="text-black font-bold text-2xl mb-3">Explore Clubs & Activities</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              SOSC is a conglomeration of clubs and individuals who contribute...
            </p>
          </div>
          <img src="https://sosc.org.in/_astro/hero_clubs.DTTDV-jy_1p64vp.webp" width={450}/>
        </div>


        {/* SECTION 4 */}
        <div className="h-[500px] w-full flex items-center gap-10 px-[10%] mb-28">
          <img src="https://sosc.org.in/_astro/hero_connect.CV53XNoK_Z2hOGEd.webp" width={450}/>
          <div className="w-[600px]">
            <h2 className="text-black font-bold text-2xl mb-3">Get Connected</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Meet people with similar interests to work together on projects...
            </p>
            <button className="bg-green-500 px-6 py-2 rounded-full text-white font-semibold mt-3">
              Learn More
            </button>
          </div>
        </div>

      </div>

      {/* Footer LAST always */}
      <Footer />

    </>
  );
}
