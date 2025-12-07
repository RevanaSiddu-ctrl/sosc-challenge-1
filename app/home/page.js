import Image from "next/image";
import NavBar from "../compnents/NavBar";
import Footer from "../compnents/Footer";

export default function Home(){
    return(
<>
    <NavBar/>

    <div className="flex flex-col justify-center items-center w-full px-5 pt-24 pb-10 
                    md:px-10 max-w-4xl lg:max-w-6xl lg:pt-32 mx-auto">
    
            <Image 
            src="https://sosc.org.in/_astro/sosc_logo.DBzxZ_Go_Z10hDC0.svg"
             alt="logo"
            width={100}
             height={100}
            className="mb-3"
            />
             <h2 className="text-black text-2xl font-bold mb-4 text-center">
                 Sahyadri Open Source Community
            </h2>
            <p className="text-gray-700 text-md max-w-full leading-relaxed text-center">
                 A community driven by tech enthusiasts and open-source contributors, 
                 helping students become part of the open-source ecosystem through 
                training and skill development.
            </p>
            <button className="bg-[oklch(77.034%_0.20078_152.412)] w-[160px] h-[40px] rounded-3xl text-white text-sm font-bold mt-3 cursor-pointer">Community Guidilnes</button>

    </div>
    <div className="w-full flex flex-col items-center lg:flex-row p-5 lg:pl-[15%] py-10 lg:py-20 ">
        <img src="https://sosc.org.in/_astro/hero_github.CjpTNEJ9_lPP1X.webp" alt="img1"className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto lg:w-1/2" />
        <div className="flex flex-col items-start gap-3 lg:w-1/2">
            <h2 className="text-black font-bold text-2xl">Get Trained by Experts</h2>
            <p className="text-md font-light text-black w-full">
                SOSC is all about helping each other to learn and improve, we conduct workshops and trainings led by speakers from other technical communities, and student experts. 
                Keeping up to date with latest technologies and learning new things is what most of love. 
                Here is your chance to attend workshops, training and even host non-profit events to help others.
            </p>
        </div>
    </div>  
    <div className="w-full flex flex-col items-center lg:flex-row-reverse p-5 lg:pr-[15%] py-10 lg:py-20">
        <div className="flex flex-col items-start gap-3 w-full lg:w-1/2">
            <h2 className="text-black font-bold text-xl md:text-2xl">Explore clubs and Activities</h2>
            <p className="text-sm md:text-md font-light text-black w-full">
                SOSC is a conglomeration of clubs and individuals who contribute to the community by helping us conduct events and activities. 
                there are numerous clubs and experts who help shape the community to be pro-active. 
                Mozilla Campus Clubs, Developer Students clubs, and the GitHub Campus Expert are to name a few
            </p>
        </div>
        <img src="	https://sosc.org.in/_astro/hero_clubs.DTTDV-jy_1p64vp.webp" alt="img2"className="w-full max-w-md lg:w-1/2 lg:max-w-lg h-auto"/>
    </div> 
    <div className="w-full flex flex-col items-center lg:flex-row p-5 lg:pl-[15%] py-10 lg:py-20">
        <img src="https://sosc.org.in/_astro/hero_connect.CV53XNoK_Z2hOGEd.webp" alt="img3" width={500} height={500} />
        <div className="flex flex-col items-start gap-3 w-full lg:w-1/2">
            <h2 className="text-black font-bold  text-xl md:text-2xl">Get Connected</h2>
            <p className="text-sm md:text-md font-light text-black w-full">
                Meet people with similar interest to work together on projects and host events to build a better collaborative environment.
                 We are more than 100 members with interests on various fields of technology here to know each other and get connected.
                  Meet our members to know more about us and build something cool!
            </p>
            <button className="bg-[oklch(77.034%_0.20078_152.412)] w-[160px] h-[40px] rounded-3xl text-white text-sm font-bold mt-3 cursor-pointer">Learn More</button>
        </div>
    </div> 

    <Footer/>


</>
    );
}