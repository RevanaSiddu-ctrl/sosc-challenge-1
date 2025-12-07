import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"; 
import CardC from "../components/cardC";
import { teamData } from "../data/members";

export default function Team(){
    return(
        <>
        <NavBar/>
        <div className="w-full h-[300px] md:h-[400px] relative mt-[90px] overflow-x-hidden">
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
                  <h1 className="text-white text-2xl md:text-5xl font-bold text-center">Our Team</h1>
                  <h1 className="text-white text-sm md:text-2xl font-extrabold text-center mt-2">
                    Meet the passionate individuals driving our community forward
                  </h1>
                </div>
              </div>

              <div className="w-full flex flex-col items-start pt-10 px-4 md:px-30">
                <h1 className="text-xl md:text-2xl text-black font-bold">Co-Ordinator</h1>
                
                <div className="flex flex-col items-center justify-center h-auto md:h-[350px] w-full md:w-[400px] shadow-[0_0_8px_rgba(0,0,0,0.25)] my-9 p-6">
                <img src="https://sosc.org.in/team/mustafa_asthikodi.jpg"
                alt="co-ordinator" 
                height={100} 
                width={100} 
                className="rounded-[50%] h-[100px] w-[100px]"/>
                <h1 className="text-black font-bold my-2 text-center">Dr. Mustafa Basthikodi</h1>
                <h3 className="text-gray-950 text-center">Faculty Coordinator</h3>
                </div>
                </div>

                <div className="w-full flex flex-col items-start pt-10 px-4 md:px-30">
                <h1 className="text-xl md:text-2xl text-black font-bold">Community Members</h1>
                <div className="flex justify-center items-center mt-10 w-full">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-20 mt-10 px-4 md:px-10 justify-center items-center w-full">
                        {teamData && teamData.length > 0 ? (
                          teamData.map((data) => (
                            <CardC
                              key={data.id}
                              image={data.image}
                              name={data.name}
                              role={data.role}
                            />
                          ))
                        ) : (
                          <p className="text-gray-600">No team members found</p>
                        )}
                      </div>
                      </div>

              </div>

              <Footer/>
        </>
    );
}