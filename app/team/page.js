import Image from "next/image";
import NavBar from "../compnents/NavBar";
import Footer from "../compnents/Footer"; 
import CardC from "../compnents/cardC";  
import { teamData } from "../data/members";

export default function Team(){
    return(
        <>
        <NavBar/>

        <div className="w-full h-[300px] sm:h-[400px] relative mt-[90px] overflow-x-hidden">
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
              <h1 className="text-white text-3xl sm:text-5xl font-bold">Our Team</h1>
              <h1 className="text-white text-lg sm:text-2xl font-extrabold">
                Meet the passionate individuals driving our community forward
              </h1>
            </div>
        </div>

        <div className="w-full flex flex-col items-start pt-10 px-6 sm:pl-30">
            <h1 className="text-xl sm:text-2xl text-black font-bold">Co-Ordinator</h1>
            
            <div className="flex flex-col items-center justify-center h-auto sm:h-[300px] w-full sm:w-[400px] shadow-[0_0_8px_rgba(0,0,0,0.25)] my-9 py-6">
                <img 
                    src="https://sosc.org.in/team/mustafa_asthikodi.jpg"
                    alt="co-ordinator" 
                    height={100} 
                    width={100} 
                    className="rounded-[50%] h-[100px] w-[100px]"
                />
                <h1 className="text-black font-bold my-2 text-center">Dr. Mustafa Basthikodi</h1>
                <h3 className="text-gray-950 text-center">Faculty Coordinator</h3>
            </div>
        </div>

        <div className="w-full flex flex-col items-start pt-10 px-6 sm:pl-30">
            <h1 className="text-xl sm:text-2xl text-black font-bold">Community Members</h1>

            <div className="flex justify-center items-center mt-10 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-20 mt-10 px-4 sm:px-10 justify-center items-center w-full">
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
