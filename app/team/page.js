import Image from "next/image";
import NavBar from "../compnents/NavBar";
import Footer from "../compnents/Footer";
import CardC from "../compnents/cardC";
import { teamData } from "../data/members";

export default function Team() {
  return (
    <>
      <NavBar />
      <div className="w-full  h-[300px] relative mt-[90px] overflow-x-hidden md:h-[400px]">
        <Image
          src="https://sosc.org.in/_astro/team.DFWwMBWD_Snw2F.webp"
          alt="img"
          width={100}
          height={100}
          unoptimized
          loading="eager"
          className="w-full h-full object-cover brightness-50"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">Our Team</h1>
          <h1 className="text-white text-lg md:text-2xl font-extrabold">
            Meet the passionate individuals driving our community forward
          </h1>
        </div>
      </div>

      <div className="w-full min-h-[350px] flex flex-col items-start pt-10 px-6 md:px-32">
        <h1 className="text-xl md:text-2xl text-black font-bold">Co-Ordinator</h1>

        <div className="flex flex-col items-center justify-center h-[280px] md:h-[300px]  w-[90%] md:w-[400px] shadow-[0_0_8px_rgba(0,0,0,0.25)] my-9">
          <img
            src="https://sosc.org.in/team/mustafa_asthikodi.jpg"
            alt="co-ordinator"
            height={100}
            width={100}
            className="rounded-[50%] h-[80px] w-[80px] md:h-[100px] md:w-[100px]"
          />
          <h1 className="text-black font-bold my-2 text-base md:text-lg">Dr. Mustafa Basthikodi</h1>
          <h3 className="text-gray-950 text-sm md:text-base">Faculty Coordinator</h3>
        </div>
      </div>

      <div className="w-full flex flex-col items-start pt-10 px-6 md:px-32">
        <h1 className="text-xl md:text-2xl text-black font-bold">Community Members</h1>
        <div className="flex justify-center items-centermt-6 w-full">
          <div className="grid grid-cols-1  md:grid-cols-3 gap-10 md:gap-20 mt-6 w-full">
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
