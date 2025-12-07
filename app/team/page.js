import Image from "next/image";
import NavBar from "../compnents/NavBar";
import Footer from "../compnents/Footer"; 
import CardC from "../compnents/cardC";  
import { teamData } from "../data/members";

export default function Team(){
    return(
        <>
        <NavBar/>

       
        <div className="w-full h-[400px] md:h-[600px] relative mt-[90px] overflow-x-hidden">
                <Image
                  src="https://sosc.org.in/_astro/team.DFWwMBWD_Snw2F.webp"
                  alt="img"
                  width={100}
                  height={100}
                  unoptimized
                  loading="eager"
                  className="w-full h-full object-cover brightness-50"
                />
        
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                  <h1 className="text-white text-3xl md:text-5xl font-bold mb-2">Our Team</h1>
                  <h1 className="text-white text-lg md:text-2xl font-extrabold max-w-3xl">
                    Meet the passionate individuals driving our community forward
                  </h1>
                </div>
              </div>

              <div className="w-full flex flex-col items-start py-10 px-6 md:px-20">
                <h1 className="text-2xl text-black font-bold mb-6">Co-Ordinator</h1>
                
                <div className="flex flex-col items-center justify-center p-6 w-full max-w-[400px] shadow-[0_0_8px_rgba(0,0,0,0.25)] rounded-lg mx-auto md:mx-0">
                    <img src="https://sosc.org.in/team/mustafa_asthikodi.jpg"
                    alt="co-ordinator" 
                    height={100} 
                    width={100} 
                    className="rounded-[50%] h-[100px] w-[100px] object-cover mb-4"/>
                    <h1 className="text-black font-bold text-xl text-center">Dr. Mustafa Basthikodi</h1>
                    <h3 className="text-gray-600 font-medium">Faculty Coordinator</h3>
                </div>
              </div>

              
              <div className="w-full flex flex-col items-start pb-20 px-6 md:px-20">
                <h1 className="text-2xl text-black font-bold">Community Members</h1>
                
                <div className="w-full flex justify-center mt-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
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