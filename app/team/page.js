import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"; 
import CardC from "../components/cardC";  
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
        
                
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h1 className="text-white text-5xl font-bold">Our Team</h1>
                  <h1 className="text-white text-2xl font-extrabold">
                    Meet the passionate individuals driving our community forward
                  </h1>
                </div>
              </div>

              <div className="w-full h-[350px] flex flex-col items-start pt-10 pl-30">
                <h1 className="text-2xl text-black font-bold">Co-Ordinator</h1>
                
                <div className="flex flex-col items-center justify-center h-[300px] w-[400px] shadow-[0_0_8px_rgba(0,0,0,0.25)] my-9">
                <img src="https://sosc.org.in/team/mustafa_asthikodi.jpg"
                alt="co-ordinator" 
                height={100} 
                width={100} 
                className="rounded-[50%] h-[100px] w-[100px]"/>
                <h1 className="text-black font-bold my-2">Dr. Mustafa Basthikodi</h1>
                <h3 className="text-gray-950">Faculty Coordinator</h3>
                </div>
                </div>

                <div className="w-full flex flex-col items-start pt-10 pl-30">
                <h1 className="text-2xl text-black font-bold">Community Members</h1>
                <div className="flex justify-center items-center mt-10">
                      <div className="grid grid-cols-3 gap-20 mt-10  px-10  justify-center items-center">
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