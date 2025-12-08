import Image from "next/image";
import NavBar from "../compnents/NavBar";
import Footer from "../compnents/Footer";
import CardC from "../compnents/cardC";
import { teamData } from "../data/members";

export default function Team() {
  return (
    <>
      <NavBar />
      <div className="w-full h-[420px] relative mt-[64px] overflow-hidden">
        <Image
          src="https://sosc.org.in/_astro/team.DFWwMBWD_Snw2F.webp"
          alt="team background"
          width={1600}
          height={420}
          unoptimized
          loading="eager"
          className="w-full h-full object-cover brightness-50"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-5xl font-extrabold leading-tight">Our Team</h1>
          <p className="text-white text-lg mt-3 max-w-2xl">
            Meet the passionate individuals driving our community forward
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-8">Co-ordinator</h2>

          <div className="max-w-[760px] bg-white shadow-md rounded-md p-6 flex items-center gap-6">
            <img
              src="https://sosc.org.in/team/mustafa_asthikodi.jpg"
              alt="co-ordinator"
              className="rounded-full h-[100px] w-[100px] object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-black">Dr. Mustafa Basthikodi</h3>
              <p className="text-gray-700 mt-1">Faculty Coordinator</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-black mb-8">Community Members</h2>

          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {Array.isArray(teamData) &&
                teamData.map((member) => (
                  <CardC
                    key={member.id}
                    image={member.image}
                    name={member.name}
                    role={member.role}
                  />
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
