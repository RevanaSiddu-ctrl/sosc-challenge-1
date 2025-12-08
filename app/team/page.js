import Image from "next/image";
import NavBar from "../compnents/NavBar";
import Footer from "../compnents/Footer";
import CardC from "../compnents/cardC";
import { teamData } from "../data/members";

export default function Team() {
  return (
    <>
      <NavBar />
      <div className="w-full relative">
        <img
          src="https://sosc.org.in/_astro/team.DFWwMBWD_Snw2F.webp"
          alt="bgimg"
          className="w-full h-[500px] brightness-50 bg-center bg-cover object-cover object-center"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-10">
          <h1 className="text-white text-5xl font-bold mb-5">Our Team</h1>
          <h1 className="text-white text-1xl">
            Meet the passionate individuals driving our community forward.
          </h1>
        </div>
      </div>

      <div className="w-full h-fit md:px-30 flex flex-col items-center">
        <div className="w-full h-fit flex flex-col items-start space-y-5 mt-10 mb-10 md:w-[1090px]">
          <h1 className="text-2xl text-black font-bold">Co-Ordinator</h1>

          <div className="flex flex-col items-center justify-center h-[200px] w-[350px] shadow-[0_0_8px_rgba(0,0,0,0.25)] ml-3 md:ml-0">
            <img
              src="https://sosc.org.in/team/mustafa_asthikodi.jpg"
              alt="co-ordinator"
              height={100}
              width={100}
              className="rounded-[50%] h-[100px] w-[100px]"
            />
            <h1 className="text-black font-bold mt-4 mb-1">
              Dr. Mustafa Basthikodi
            </h1>
            <h3 className="text-black/50 text-xs">Faculty Coordinator</h3>
          </div>
        </div>

        <div className="w-full md:w-fit flex flex-col items-start space-y-5">
          <h1 className="text-2xl text-black font-bold">Community Members</h1>

          <div className="flex justify-center items-center w-full">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center items-center"
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
      </div>

      <Footer />
    </>
  );
}