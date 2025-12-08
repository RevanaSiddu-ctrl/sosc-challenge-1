import Image from "next/image";
import NavBar from "../compnents/NavBar";
import Footer from "../compnents/Footer";

export default function Home() {
  return (
    <>
      <NavBar />

      {/* HERO SECTION */}
      <header className="pt-[80px]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT CONTENT */}
            <div className="lg:pl-20">
              <div className="mb-6">
                <Image
                  src="https://sosc.org.in/_astro/sosc_logo.DBzxZ_Go_Z10hDC0.svg"
                  alt="SOSC logo"
                  width={120}
                  height={120}
                  className="block"
                />
              </div>

              <h1 className="text-black text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Sahyadri Open Source Community
              </h1>

              <p className="text-gray-700 text-base lg:text-lg max-w-[720px] leading-relaxed mb-8">
                A community driven by tech enthusiasts and open-source contributors,
                helping students become part of the open-source ecosystem through
                training and skill development.
              </p>

              <button className="bg-[oklch(77.034%_0.20078_152.412)] px-6 py-3 rounded-full text-white text-sm font-semibold">
                Community Guidelines
              </button>
            </div>

            {/* HERO ILLUSTRATION */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-[360px] md:w-[480px] lg:w-[560px]">
                
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-20 space-y-28">

        {/* SECTION 1 - TRAINED BY EXPERTS */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex justify-center lg:justify-start">
            <div className="w-[360px] md:w-[480px] lg:w-[560px]">
              <Image
                src="https://sosc.org.in/_astro/hero_github.CjpTNEJ9_lPP1X.webp"
                alt="Get Trained"
                width={560}
                height={420}
                unoptimized
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="lg:pl-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black">
  Get Trained by Experts
</h2>
            <p className="text-gray-800 text-base lg:text-lg leading-relaxed">
              SOSC is all about helping each other to learn and improve. We conduct workshops and trainings led by speakers from other
              technical communities and student experts. Keeping up to date with the latest technologies and learning new things is what we love — attend workshops, trainings and host non-profit events to help others.
            </p>
          </div>
        </section>

        {/* SECTION 2 - CLUBS & ACTIVITIES */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="lg:pl-12 order-2 lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black">Explore clubs and Activities</h2>
            <p className="text-gray-800 text-base lg:text-lg leading-relaxed">
              SOSC is a collaboration of clubs and individuals who shape the community by running events and activities. Mozilla Campus Clubs,
              Developer Student Clubs, and GitHub Campus Experts are just a few groups that help us stay active and engaged.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="w-[360px] md:w-[480px] lg:w-[560px]">
              <Image
                src="https://sosc.org.in/_astro/hero_clubs.DTTDV-jy_1p64vp.webp"
                alt="Clubs illustration"
                width={560}
                height={420}
                unoptimized
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </section>

        {/* SECTION 3 - GET CONNECTED */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex justify-center lg:justify-start">
            <div className="w-[360px] md:w-[480px] lg:w-[560px]">
              <Image
                src="https://sosc.org.in/_astro/hero_connect.CV53XNoK_Z2hOGEd.webp"
                alt="Get connected illustration"
                width={560}
                height={420}
                unoptimized
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="lg:pl-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black">Get Connected</h2>
            <p className="text-gray-800 text-base lg:text-lg leading-relaxed mb-6">
              Meet people with similar interests to work together on projects and host events to build a better collaborative environment.
              We have many members across technology fields — connect with them and build something cool.
            </p>
            <button className="bg-[oklch(77.034%_0.20078_152.412)] w-[160px] h-[44px] rounded-full text-white text-sm font-semibold">
              Learn More
            </button>
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
