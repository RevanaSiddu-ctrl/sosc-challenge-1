import Image from "next/image";
import NavBar from "../compnents/NavBar";
import Footer from "../compnents/Footer";
import CardC from "../compnents/cardC";
import { teamData } from "../data/members"; // ✅ make sure this path matches your project

export default function Team() {
  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <div className="w-full relative mt-[60px] overflow-hidden h-64 sm:h-80 lg:h-[400px]">
        <Image
          src="https://sosc.org.in/_astro/team.DFWwMBWD_Snw2F.webp"
          alt="Sahyadri Open Source Community Team"
          width={1600}
          height={400}
          unoptimized
          loading="eager"
          className="w-full h-full object-cover brightness-50"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
            Our Team
          </h1>
          <h2 className="text-white text-lg sm:text-xl lg:text-2xl font-extrabold mt-2 max-w-3xl">
            Meet the passionate individuals driving our community forward
          </h2>
        </div>
      </div>

      {/* Coordinator Section */}
      <div className="w-full flex flex-col items-center sm:items-start pt-8 sm:pt-10 px-4 sm:px-10">
        <h1 className="text-2xl sm:text-3xl text-black font-bold w-full sm:w-auto">
          Co-Ordinator
        </h1>

        <div className="flex flex-col items-center justify-center h-auto w-full sm:w-[400px] shadow-[0_0_8px_rgba(0,0,0,0.25)] my-6 sm:my-9 rounded-xl bg-white p-6">
          <Image
            src="https://sosc.org.in/team/mustafa_asthikodi.jpg"
            alt="Faculty Coordinator"
            height={100}
            width={100}
            className="rounded-full h-[100px] w-[100px] object-cover"
          />
          <h1 className="text-black font-bold my-2 text-center">
            Dr. Mustafa Basthikodi
          </h1>
          <h3 className="text-gray-700 text-center">Faculty Coordinator</h3>
        </div>
      </div>

      {/* Community Members Section */}
      <div className="w-full flex flex-col items-center sm:items-start pt-8 sm:pt-10 px-4 sm:px-10 mb-16">
        <h1 className="text-2xl sm:text-3xl text-black font-bold w-full sm:w-auto">
          Community Members
        </h1>

        <div className="flex justify-center items-center mt-8 w-full">
          <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {teamData.map((data) => (
              <CardC
                key={data.id}
                image={data.image}
                name={data.name}
                role={data.role}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
