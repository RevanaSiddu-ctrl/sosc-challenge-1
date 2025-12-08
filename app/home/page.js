import Image from "next/image";
import NavBar from "../components/NavBar";   // ✅ Import NavBar
import Footer from "../components/Footer";   // (optional if you want a footer)

export default function Home() {
  return (
    <>
      {/* ✅ Navigation Bar */}
      <NavBar />

      {/* Section 1 */}
      <section className="flex flex-col justify-center items-start max-w-2xl h-[700px] px-10 mx-auto mt-[100px]">
        <Image
          src="https://sosc.org.in/_astro/sosc_logo.DBzxZ_Go_Z10hDC0.svg"
          alt="Sahyadri Open Source Community logo"
          width={150}
          height={150}
          className="mb-3"
        />
        <h2 className="text-black text-2xl font-bold mb-4">
          Sahyadri Open Source Community
        </h2>
        <p className="text-gray-700 text-md leading-relaxed">
          A community driven by tech enthusiasts and open-source contributors...
        </p>
        <button className="bg-[oklch(77.034%_0.20078_152.412)] w-[160px] h-[40px] rounded-3xl text-white text-sm font-bold mt-3 cursor-pointer">
          Community Guidelines
        </button>
      </section>

      {/* Section 2 */}
      <section className="h-[500px] w-full flex flex-col md:flex-row items-center px-[15%] gap-10">
        <Image
          src="https://sosc.org.in/_astro/hero_github.CjpTNEJ9_lPP1X.webp"
          alt="Training session illustration"
          width={500}
          height={500}
        />
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-black font-bold text-2xl">Get Trained by Experts</h2>
          <p className="text-md font-light text-black max-w-xl">
            SOSC is all about helping each other to learn and improve...
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="h-[500px] w-full flex flex-col md:flex-row items-center px-[15%] gap-10">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-black font-bold text-2xl">Explore Clubs and Activities</h2>
          <p className="text-md font-light text-black max-w-xl">
            SOSC is a conglomeration of clubs and individuals...
          </p>
        </div>
        <Image
          src="https://sosc.org.in/_astro/hero_clubs.DTTDV-jy_1p64vp.webp"
          alt="Clubs and activities illustration"
          width={500}
          height={500}
        />
      </section>

      {/* Section 4 */}
      <section className="h-[500px] w-full flex flex-col md:flex-row items-center px-[15%] gap-10">
        <Image
          src="https://sosc.org.in/_astro/hero_connect.CV53XNoK_Z2hOGEd.webp"
          alt="Community connection illustration"
          width={500}
          height={500}
        />
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-black font-bold text-2xl">Get Connected</h2>
          <p className="text-md font-light text-black max-w-xl">
            Meet people with similar interests...
          </p>
          <button className="bg-[oklch(77.034%_0.20078_152.412)] w-[160px] h-[40px] rounded-3xl text-white text-sm font-bold mt-3 cursor-pointer">
            Learn More
          </button>
        </div>
      </section>

      {/* ✅ Footer (optional) */}
      <Footer />
    </>
  );
}