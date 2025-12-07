"use client"
import Image from "next/image";
import NavBar from "../compnents/NavBar";
import Footer from "../compnents/Footer";
import { useRouter } from "next/navigation";


export default function Home(){
    const router = useRouter();
    return(
<>
    <NavBar/>

    <div className="flex flex-col justify-center  items-start w-screen md:w-[700px] h-[700px] px-10 ml-5 md:ml-150 pt-70">
    
            <Image 
            src="https://sosc.org.in/_astro/sosc_logo.DBzxZ_Go_Z10hDC0.svg"
             alt="logo"
            width={100}
             height={100}
            className="mb-3 md:h-30 md:w-30 h-80 w-80 md:mt-10 mt-400"
            />
             <h2 className="text-black text-[110px] md:text-[35px] md:w-150 w-310 font-bold mb-4 md:-mt-10">
                 Sahyadri Open Source Community
            </h2>
            <p className="text-gray-700 text-md w-310 md:max-w-[600px] leading-relaxed md:text-lg text-[50px]">
                 A community driven by tech enthusiasts and open-source contributors, 
                 helping students become part of the open-source ecosystem through 
                training and skill development.
            </p>
            <button className="bg-[oklch(77.034%_0.20078_152.412)] md:w-[160px] md:h-[40px] md:pt-0 md:pb-0 pb-5 pt-5 w-140 rounded-3xl text-white text-[40px] md:text-sm font-bold mt-6 md:mt-3 cursor-pointer rounded-full"><a href="https://sosc.org.in/guidelines/" >Community Guidilnes</a></button>

    </div>
    <div className="h-[1000px] w-[1000px] flex flex-col md:flex-row items-center md:-mt-35 mt-500 pl-[15%] pt-110 md:ml-0 ml-40">
        <img src="https://sosc.org.in/_astro/hero_github.CjpTNEJ9_lPP1X.webp" alt="img1"  className="h-700 w-500 md:h-70 md:w-100 md:mt-0 mt-200"/>
        <div className="flex flex-col items-start gap-3">
            <h2 className="text-black font-bold md:mt-0 -mt-350 text-[110px] w-300 md:w-200 md:text-4xl">Get Trained by Experts</h2>
            <p className="text-[50px] md:text-xl mt-10  font-light text-black md:w-[600px]">
                SOSC is all about helping each other to learn and improve, we conduct workshops and trainings led by speakers from other technical communities, and student experts. 
                Keeping up to date with latest technologies and learning new things is what most of love. 
                Here is your chance to attend workshops, training and even host non-profit events to help others.
            </p>
        </div>
    </div>  
    <div className="h-[1000px] w-[1000px] flex flex-col md:flex-row items-center md:-mt-10 mt-500 pl-[15%] pt-110 md:ml-0 ml-40 ">
        <div className="flex flex-col items-start gap-3">
            <h2 className="text-black font-bold md:-mt-150 -mt-350 text-[110px] w-300 md:w-200 md:text-4xl">Explore clubs and Activities</h2>
            <p className="mt-10 text-[50px] md:text-xl font-light text-black md:w-[600px]">
                SOSC is a conglomeration of clubs and individuals who contribute to the community by helping us conduct events and activities. 
                there are numerous clubs and experts who help shape the community to be pro-active. 
                Mozilla Campus Clubs, Developer Students clubs, and the GitHub Campus Expert are to name a few
            </p>
        </div>
        <img src="	https://sosc.org.in/_astro/hero_clubs.DTTDV-jy_1p64vp.webp" alt="img2" className="h-800 w-500 md:h-70 md:w-100 md:-mt-250 -mt-90"  />
    </div> 
    <div className="  h-[1000px] w-[1000px] flex flex-col md:flex-row items-center md:mt-35 mt-500 pl-[15%] pt-110 md:ml-0 ml-40 ">
        <img src="https://sosc.org.in/_astro/hero_connect.CV53XNoK_Z2hOGEd.webp" alt="img3" className="h-300 w-500 md:h-150 md:w-150 md:-mt-430 -mt-300" />
        <div className="flex flex-col items-start gap-3">
            <h2 className="text-black font-bold md:-mt-250 -mt-500 text-[110px] w-300 md:w-200 md:text-2xl">Get Connected</h2>
            <p className="text-[50px] md:text-lg font-light text-black md:w-[600px]">
                Meet people with similar interest to work together on projects and host events to build a better collaborative environment.
                 We are more than 100 members with interests on various fields of technology here to know each other and get connected.
                  Meet our members to know more about us and build something cool!
            </p>
            <button onClick={()=>router.push("./team")} className="bg-[oklch(77.034%_0.20078_152.412)] md:w-[160px] w-[300px] h-[100px] md:h-[40px] rounded-3xl text-white text-[45px] md:text-sm font-bold mt-3 cursor-pointer rounded-full">Learn More</button>
        </div>
    </div> 
        
    <Footer/>


</>
    );
}