import Image from "next/image";
import NavBar from "../compnents/NavBar";
import Footer from "../compnents/Footer";

export default function Home() {
  return (
    <>
      <NavBar />

      {/* HERO SECTION */}
      <header className="pt-[100px] pb-10">
        <div className="max-w-5xl mx-auto px-6 text-center">

          {/* Logo */}
          <Image
            src="https://sosc.org.in/_astro/sosc_logo.DBzxZ_Go_Z10hDC0.svg"
            alt="SOSC logo"
            width={110}
            height={110}
            className="mx-auto mb-6"
          />

          {/* Heading */}
          <h1 className="text-black text-3xl lg:text-4xl font-bold leading-snug mb-6">
            Sahyadri Open <br className="hidden lg:block" />
            Source Community
          </h1>

          {/* Subheading */}
          <p className="text-gray-700 text-base lg:text-lg max-w-[750px] mx-auto leading-relaxed mb-8">
            A community driven by tech enthusiasts and open-source contributors,
            helping students become part of the open-source ecosystem through
            training and skill development.
          </p>

          {/* Button */}
          <button className="bg-[oklch(77.034%_0.20078_152.412)] px-8 py-3 rounded-full text-white text-sm font-semibold">
            Community Guidelines
          </button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-20 space-y-28">

        {/* SECTION 1 - TRAINED BY EXPERTS */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="flex justify-center lg:justify-start">
            <Image
              src="https://sosc.org.in/_astro/hero_github.CjpTNEJ9_lPP1X.webp"
              alt="Get Trained"
              width={520}
              height={380}
              unoptimized
              className="w-[300px] md:w-[420px] lg:w-[520px] h-auto"
            />
          </div>

          <div className="lg:pl-10">
            <h2 className="text-black text-2xl lg:text-3xl font-bold mb-4">
              Get Trained by Experts
            </h2>
            <p className="text-gray-800 text-base lg:text-lg leading-relaxed">
              SOSC is all about helping each other learn and improve. We conduct workshops
              and trainings led by speakers from other technical communities and student experts.
              Stay updated with the latest technologies and host non-profit events to help others.
            </p>
          </div>
        </section>

        {/* SECTION 2 - CLUBS & ACTIVITIES */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="lg:pl-10 order-2 lg:order-1">
            <h2 className="text-black text-2xl lg:text-3xl font-bold mb-4">
              Explore Clubs and Activities
            </h2>
            <p className="text-gray-800 text-base lg:text-lg leading-relaxed">
              SOSC is a collaboration of clubs and individuals who shape the community
              by organizing events and activities. Mozilla Campus Clubs, Developer
              Student Clubs, and GitHub Campus Experts are just a few groups keeping
              the community active.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <Image
              src="https://sosc.org.in/_astro/hero_clubs.DTTDV-jy_1p64vp.webp"
              alt="Clubs illustration"
              width={520}
              height={380}
              unoptimized
              className="w-[300px] md:w-[420px] lg:w-[520px] h-auto"
            />
          </div>
        </section>

        {/* SECTION 3 - GET CONNECTED */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="flex justify-center lg:justify-start">
            <Image
              src="https://sosc.org.in/_astro/hero_connect.CV53XNoK_Z2hOGEd.webp"
              alt="Get connected illustration"
              width={520}
              height={380}
              unoptimized
              className="w-[300px] md:w-[420px] lg:w-[520px] h-auto"
            />
          </div>

          <div className="lg:pl-10">
            <h2 className="text-black text-2xl lg:text-3xl font-bold mb-4">
              Get Connected
            </h2>
            <p className="text-gray-800 text-base lg:text-lg leading-relaxed mb-6">
              Connect with people who share similar interests, collaborate on projects,
              and build a better community environment. Join 100+ members from various
              tech fields and build something cool!
            </p>
            <button className="bg-[oklch(77.034%_0.20078_152.412)] w-[150px] h-[42px] rounded-full text-white text-sm font-semibold">
              Learn More
            </button>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
