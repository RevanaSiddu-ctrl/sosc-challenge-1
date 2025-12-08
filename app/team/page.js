import Image from "next/image";
import NavBar from "../compnents/NavBar";
import Footer from "../compnents/Footer";
import CardC from "../compnents/cardC";
import { teamData } from "../data/members";

export default function Team() {
  return (
    <>
      <NavBar />

      <div className="w-full h-[250px] sm:h-[350px] lg:h-[400px] relative mt-[80px] sm:mt-[90px] overflow-hidden">
        <Image
          src="https://sosc.org.in/_astro/team.DFWwMBWD_Snw2F.webp"
          alt="Team Banner"
          width={1920}
          height={400}
          unoptimized
          loading="eager"
          className="w-full h-full object-cover brightness-50"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3">
          <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-bold">
            Our Team
          </h1>
          <h1 className="text-white text-xs sm:text-lg lg:text-2xl font-semibold mt-2 max-w-[850px]">
            Meet the passionate individuals driving our community forward
          </h1>
        </div>
      </div>

     
      <div className="w-full flex flex-col items-center sm:items-start pt-10 px-4 sm:px-10 lg:px-20">
        <h1 className="text-xl sm:text-2xl text-black font-bold">
          Co-Ordinator
        </h1>

        <div className="flex flex-col items-center justify-center w-[85%] sm:w-[350px] md:w-[400px] shadow-[0_0_8px_rgba(0,0,0,0.25)] mt-6 sm:mt-9 rounded-lg py-6">
          <img
            src="https://sosc.org.in/team/mustafa_asthikodi.jpg"
            alt="coordinator"
            className="rounded-full h-[90px] w-[90px]"
          />
          <h1 className="text-black font-bold mt-2 sm:mt-3 text-sm sm:text-base">
            Dr. Mustafa Basthikodi
          </h1>
          <h3 className="text-gray-700 text-xs sm:text-sm">
            Faculty Coordinator
          </h3>
        </div>
      </div>

      <div className="w-full pt-10 px-4 sm:px-10 lg:px-20">
        <h1 className="text-xl sm:text-2xl text-black font-bold">
          Community Members
        </h1>

        <div className="flex justify-center items-center">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-20 mt-10 justify-center items-center">
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
