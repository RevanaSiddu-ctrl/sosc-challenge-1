import Image from "next/image";
import NavBar from "../compnents/NavBar";
import Footer from "../compnents/Footer";
import CardC from "../compnents/cardC";
import { teamData } from "../data/members";

export default function Team() {
  return (
    <>
      <NavBar />
      <div className="w-full h-[500px] relative">
        <Image
          src="https://sosc.org.in/_astro/team.DFWwMBWD_Snw2F.webp"
          alt="img"
          width={100}
          height={100}
          unoptimized
          loading="eager"
          className="w-full h-full object-cover brightness-50"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl font-bold mb-5">Our Team</h1>
          <h1 className="text-white text-ml">
            Meet the passionate individuals driving our community forward
          </h1>
        </div>
      </div>

      <div className="w-full h-fit px-30 flex flex-col items-center">
        <div className="w-[1090px] h-fit flex flex-col items-start space-y-5 mt-10 mb-10">
          <h1 className="text-2xl text-black font-bold">Co-Ordinator</h1>

          <div className="flex flex-col items-center justify-center h-[200px] w-[350px] shadow-[0_0_8px_rgba(0,0,0,0.25)]">
            <img
              src="https://sosc.org.in/team/mustafa_asthikodi.jpg"
              alt="co-ordinator"
              height={100}
              width={100}
              className="rounded-[50%] h-[100px] w-[100px]"
            />
            <h1 className="text-black font-bold my-2">
              Dr. Mustafa Basthikodi
            </h1>
            <h3 className="text-gray-950">Faculty Coordinator</h3>
          </div>
        </div>

        <div className="w-fit flex flex-col items-start space-y-5">
          <h1 className="text-2xl text-black font-bold">Community Members</h1>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-3 gap-5 justify-center items-center">
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
