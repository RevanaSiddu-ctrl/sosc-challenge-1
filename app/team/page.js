import Image from "next/image";
import { teamData } from "../data/members";
import NavBar from "../compnents/NavBar";
import Footer from "../compnents/Footer";
import CardC from "../compnents/cardC";

export default function Team() {
  return (
    <>
      <NavBar />

      {/* HERO SECTION */}
      <div className="w-full h-[250px] md:h-[400px] relative mt-[90px] overflow-x-hidden">
        <Image
          src="https://sosc.org.in/_astro/team.DFWwMBWD_Snw2F.webp"
          alt="img"
          width={100}
          height={100}
          unoptimized
          loading="eager"
          className="w-full h-full object-cover brightness-50"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            Our Team
          </h1>
          <h1 className="text-white text-md md:text-2xl font-extrabold text-center mt-2">
            Meet the passionate individuals driving our community forward
          </h1>
        </div>
      </div>

      {/* COORDINATOR SECTION */}
      <div className="w-full flex flex-col items-center md:items-start pt-10 px-4 md:px-0 md:pl-30">
        <h1 className="text-xl md:text-2xl text-black font-bold text-center md:text-left">
          Co-Ordinator
        </h1>

        <div className="flex flex-col items-center justify-center h-auto md:h-[300px] w-full max-w-[400px] shadow-[0_0_8px_rgba(0,0,0,0.25)] my-9 p-6 md:p-0">
          <img
            src="https://sosc.org.in/team/mustafa_asthikodi.jpg"
            alt="co-ordinator"
            height={100}
            width={100}
            className="rounded-full h-[80px] w-[80px] md:h-[100px] md:w-[100px]"
          />
          <h1 className="text-black font-bold my-2 text-center">
            Dr. Mustafa Basthikodi
          </h1>
          <h3 className="text-gray-950 text-center">Faculty Coordinator</h3>
        </div>
      </div>

      {/* COMMUNITY MEMBERS */}
      <div className="w-full flex flex-col items-center md:items-start pt-10 px-4 md:px-0 md:pl-30">
        <h1 className="text-xl md:text-2xl text-black font-bold text-center md:text-left">
          Community Members
        </h1>

        <div className="flex justify-center items-center mt-10">
          <div
            className="
              grid
              grid-cols-1 sm:grid-cols-2 md:grid-cols-3
              gap-10 md:gap-20
              mt-10
              px-4 md:px-10
              justify-center items-center
            "
          >
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
