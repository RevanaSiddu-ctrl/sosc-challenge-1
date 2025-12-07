import Image from "next/image";
import NavBar from "../compnents/NavBar";
import Footer from "../compnents/Footer"; 
import CardC from "../compnents/cardC";  
import { teamData } from "../data/members";

export default function Team(){
    return(
        <>
        <NavBar/>
            {/* Banner Section */}
            <div className="w-full h-[250px] md:h-[400px] relative mt-[70px] overflow-hidden">
                <Image
                  src="https://sosc.org.in/_astro/team.DFWwMBWD_Snw2F.webp"
                  alt="img"
                  width={100}
                  height={100}
                  unoptimized
                  loading="eager"
                  className="w-full h-full object-cover brightness-50"
                />
        
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <h1 className="text-white text-3xl md:text-5xl font-bold">Our Team</h1>
                  <h1 className="text-white text-lg md:text-2xl font-extrabold mt-2">
                    Meet the passionate individuals driving our community forward
                  </h1>
                </div>
            </div>

            {/* Co-Ordinator Section */}
            <div className="w-full h-auto flex flex-col items-start pt-10 px-5 md:pl-30">
                <h1 className="text-2xl text-black font-bold">Co-Ordinator</h1>
                
                <div className="flex flex-col items-center justify-center h-[300px] w-full max-w-[400px] shadow-[0_0_8px_rgba(0,0,0,0.25)] my-9 rounded-lg">
                    <img src="https://sosc.org.in/team/mustafa_asthikodi.jpg"
                    alt="co-ordinator" 
                    height={100} 
                    width={100} 
                    className="rounded-[50%] h-[100px] w-[100px] object-cover"/>
                    <h1 className="text-black font-bold my-2 text-center">Dr. Mustafa Basthikodi</h1>
                    <h3 className="text-gray-950 text-center">Faculty Coordinator</h3>
                </div>
            </div>

            {/* Community Members Section */}
            <div className="w-full flex flex-col items-start pt-10 px-5 md:pl-30">
                <h1 className="text-2xl text-black font-bold">Community Members</h1>
                
                <div className="w-full flex justify-center items-center mt-5 mb-10">
                      {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
                        {teamData.map((data) => (
                          <CardC
                            key={data.id}
                            name={data.name}
                            role={data.role}
                            image={data.image}
                          />
                        ))}
                      </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}