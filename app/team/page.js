import Image from "next/image";
import NavBar from "../compnents/NavBar";
import Footer from "../compnents/Footer"; 
import CardC from "../compnents/cardC"; 
import { teamData } from "../data/members";

export default function Team(){
    return(
        <>
        <NavBar/>
        <div className="w-full md:h-[400px] relative mt-[90px] md:overflow-x-hidden">
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
                  <h1 className="text-white text-3xl  md:text-5xl font-bold">Our Team</h1>
                  <h1 className="text-white md:text-2xl  md:ml-0 ml-4 md:font-extrabold">
                    {/*font bold change to font no bold */}
                    Meet the passionate individuals driving our community forward
                  </h1>
                </div>
              </div>

              <div className="w-full md:h-[350px] flex flex-col items-start pt-10 md:pl-30">
                <h1 className="text-2xl text-black font-bold">Co-Ordinator</h1>
                
                <div className="flex flex-col items-center justify-center h-[300px] w-[400px] shadow-[0_0_8px_rgba(0,0,0,0.25)] md:my-9">
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
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-10  mt-20  md:px-10  justify-center items-center">
                        {/*reduce gap 20 to gap-10 also px-10 to 5  */}
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