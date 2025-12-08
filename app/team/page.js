import Image from "next/image";
import NavBar from "../compnents/NavBar";
import Footer from "../compnents/Footer";
import { teamData } from "../data/members";
import CardC from "../compnents/cardC";

export default function Team() {
 return (
 <>
 <NavBar />

 <div className="w-full pt-[70px] h-[300px] md:h-[400px] relative overflow-x-hidden">
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
 <h1 className="text-white text-3xl md:text-5xl font-bold text-center">Our Team</h1>
 <h1 className="text-white text-lg md:text-2xl font-extrabold text-center mt-2">
 Meet the passionate individuals driving our community forward
 </h1>
 </div>
 </div>

 <div className="w-full flex flex-col items-center pt-10 px-5">
 <div className="w-full max-w-7xl">
 <h1 className="text-xl md:text-2xl text-black font-bold mb-6">Co-ordinator</h1>

 <div className="flex flex-col items-center justify-center h-auto w-full max-w-[350px] shadow-[0_0_8px_rgba(0,0,0,0.25)] py-8 rounded-lg bg-white">
 <img src="https://sosc.org.in/team/mustafa_asthikodi.jpg"
 alt="co-ordinator"
 height={100}
 width={100}
 className="rounded-[50%] h-[100px] w-[100px]" />
 <h1 className="text-black font-bold my-2 text-center">Dr. Mustafa Basthikodi</h1>
 <h3 className="text-gray-600 text-center">Faculty Co-ordinator</h3>
 </div>
 </div>
 </div>

 <div className="w-full flex flex-col items-center pt-10 px-5 pb-10">
 <div className="w-full max-w-7xl">
 <h1 className="text-xl md:text-2xl text-black font-bold mb-6">Community Member</h1>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
 {teamData?.map((data) => (
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