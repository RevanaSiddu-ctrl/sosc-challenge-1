import Image from "next/image";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />

      {/* HERO SECTION 1 */}
      <div className="flex flex-col justify-center items-start w-full max-w-[800px] mx-auto h-[700px] px-10 mt-10">
        <Image
          src="https://sosc.org.in/_astro/sosc_logo.DBzxZ_Go_Z10hDC0.svg"
          alt="logo"
          width={100}
          height={100}
          className="mb-3"
        />

        <h2 className="text-black text-2xl font-bold mb-4">
          Sahyadri Open Source Community
        </h2>

        <p className="text-gray-700 text-md leading-relaxed">
          A community driven by tech enthusiasts and open-source contributors,
          helping students become part of the ecosystem through training and
          skill development.
        </p>

        <button className="bg-[oklch(77.034%_0.20078_152.412)] w-[180px] h-[40px] rounded-3xl text-white text-sm font-bold mt-3 cursor-pointer">
          Community Guidelines
        </button>
      </div>

      {/* HERO SECTION 2 */}
      <div className="h-auto lg:h-[500px] w-full flex flex-col lg:flex-row items-center gap-10 px-[15%] py-10">
        <img
          src="https://sosc.org.in/_astro/hero_github.CjpTNEJ9_lPP1X.webp"
          alt="img1"
          width={500}
          height={500}
        />

        <div className="flex flex-col items-start gap-3">
          <h2 className="text-black font-bold text-2xl">Get Trained by Experts</h2>
          <p className="text-md font-light text-black w-full lg:w-[600px]">
            SOSC helps students learn through workshops, tech talks, and expert-led
            sessions. Stay up-to-date with the latest technologies and improve your skills.
          </p>
        </div>
      </div>

      {/* HERO SECTION 3 */}
      <div className="h-auto lg:h-[500px] w-full flex flex-col lg:flex-row items-center gap-10 px-[15%] py-10">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-black font-bold text-2xl">Explore Clubs & Activities</h2>
          <p className="text-md font-light text-black w-full lg:w-[600px]">
            SOSC includes multiple technical clubs and contributors who collaborate on
            projects, events, and initiatives across various domains in technology.
          </p>
        </div>

        <img
          src="https://sosc.org.in/_astro/hero_clubs.DTTDV-jy_1p64vp.webp"
          alt="img2"
          width={500}
          height={500}
        />
      </div>

      {/* HERO SECTION 4 */}
      <div className="h-auto lg:h-[500px] w-full flex flex-col lg:flex-row items-center gap-10 px-[15%] py-10">
        <img
          src="https://sosc.org.in/_astro/hero_connect.CV53XNoK_Z2hOGEd.webp"
          alt="img3"
          width={500}
          height={500}
        />

        <div className="flex flex-col items-start gap-3">
          <h2 className="text-black font-bold text-2xl">Get Connected</h2>
          <p className="text-md font-light text-black w-full lg:w-[600px]">
            Meet fellow tech enthusiasts, collaborate on projects, attend events, and
            become part of a vibrant community that supports learning and innovation.
          </p>

          <button className="bg-[oklch(77.034%_0.20078_152.412)] w-[160px] h-[40px] rounded-3xl text-white text-sm font-bold mt-3 cursor-pointer">
            Learn More
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
