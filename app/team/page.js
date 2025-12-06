import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CardC from "../components/cardC";
import members from "../data/members"; // Correct import

export default function Team() {
  return (
    <>
      <NavBar />

      {/* Banner */}
      <div className="w-full h-[400px] relative mt-[90px] overflow-hidden">
        <Image
          src="https://sosc.org.in/_astro/team.DFWwMBWD_Snw2F.webp"
          alt="Team Banner"
          width={1000}
          height={400}
          className="w-full h-full object-cover brightness-50"
          unoptimized
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-5xl font-bold">Our Team</h1>
          <p className="text-white text-xl font-semibold mt-2">
            Meet the passionate individuals who build our community.
          </p>
        </div>
      </div>

      {/* Coordinator Section */}
      <div className="w-full flex flex-col items-start pt-10 px-[10%]">
        <h1 className="text-2xl text-black font-bold">Co-Ordinator</h1>

        <div className="flex flex-col items-center justify-center h-[300px] w-[350px] shadow-md rounded-xl mt-6 p-5">
          <img
            src="https://sosc.org.in/team/mustafa_asthikodi.jpg"
            alt="co-ordinator"
            className="rounded-full h-[100px] w-[100px]"
          />
          <h1 className="text-black font-bold mt-3">
            Dr. Mustafa Basthikodi
          </h1>
          <h3 className="text-gray-700">Faculty Coordinator</h3>
        </div>
      </div>

      {/* Community Members */}
      <div className="w-full flex flex-col items-start pt-16 px-[10%]">
        <h1 className="text-2xl text-black font-bold">Community Members</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 w-full">
          {members.map((m) => (
            <CardC
              key={m.id}
              image={m.image}
              name={m.name}
              role={m.role}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
