import Image from "next/image";
import NavBar from "../compnents/NavBar";
import Footer from "../compnents/Footer"; 
import CardC from "../compnents/cardC";
import { teamData } from "../data/members";  

export default function Team(){
    return(
        <>
        <NavBar/><div className="w-full h-[400px] relative mt-[90px] overflow-x-hidden">
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
                  <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Our Team</h1>
                  <p className="text-white text-lg md:text-xl font-normal max-w-3xl">
                    Meet the passionate individuals driving our community forward
                  </p>
                </div>
              </div>

              <div className="w-full flex flex-col items-center pt-14 px-8 md:px-12 lg:px-20 mb-14">
                <h1 className="text-3xl md:text-4xl text-black font-bold mb-10">Co-Ordinator</h1>
                
                <div className="flex flex-col items-center justify-center h-[300px] w-full max-w-[400px] shadow-[0_0_8px_rgba(0,0,0,0.25)] rounded-lg p-6 bg-white">
                <img src="https://sosc.org.in/team/mustafa_asthikodi.jpg"
                alt="co-ordinator" 
                height={100} 
                width={100} 
                className="rounded-[50%] h-[100px] w-[100px] object-cover"/>
                <h1 className="text-black font-bold my-2 text-xl">Dr. Mustafa Basthikodi</h1>
                <h3 className="text-gray-700">Faculty Coordinator</h3>
                </div>
                </div>

                <div className="w-full flex flex-col items-center pt-14 px-8 md:px-12 lg:px-20 mb-14">
                <h1 className="text-3xl md:text-4xl text-black font-bold mb-10">Community Members</h1>
                <div className="flex justify-center items-center mt-10 w-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mt-10 max-w-7xl mx-auto">
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

              <Footer/>
        </>
    );
}