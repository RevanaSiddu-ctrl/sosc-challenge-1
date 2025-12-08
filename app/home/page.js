import Image from "next/image";
import NavBar from "../compnents/NavBar";
import Footer from "../compnents/Footer";
import Link from "next/link";

export default function Home(){
    return(
<>
    <NavBar/>

    <div className="flex flex-col justify-center  items-start w-[700px] h-[700px] px-10 ml-120">
    
            <Image 
            src="https://sosc.org.in/_astro/sosc_logo.DBzxZ_Go_Z10hDC0.svg"
             alt="logo"
            width={100}
             height={100}
            className="mb-3"
            />
             <h2 className="text-black text-2xl font-bold mb-4">
                 Sahyadri Open Source Community
            </h2>
            <p className="text-gray-700 text-md max-w-[700px] leading-relaxed">
                 A community driven by tech enthusiasts and open-source contributors, 
                 helping students become part of the open-source ecosystem through 
                training and skill development.
            </p>
            <Link href="/guidlines">
            <button className="bg-[oklch(77.034%_0.20078_152.412)] w-[160px] h-[40px] rounded-3xl text-white text-sm font-bold mt-3 cursor-pointer">Community Guidilnes</button>
            </Link>
    </div>
    <div className="h-[500px] w-full flex flex-row items-center pl-[15%] ">
        <img src="https://sosc.org.in/_astro/hero_github.CjpTNEJ9_lPP1X.webp" alt="img1" width={500} height={500} />
        <div className="flex flex-col items-start gap-3">
            <h2 className="text-black font-bold text-2xl">Get Trained by Experts</h2>
            <p className="text-md font-light text-black w-[600px]">
                SOSC is all about helping each other to learn and improve, we conduct workshops and trainings led by speakers from other technical communities, and student experts. 
                Keeping up to date with latest technologies and learning new things is what most of love. 
                Here is your chance to attend workshops, training and even host non-profit events to help others.
            </p>
        </div>
    </div>  
    <div className="h-[500px] w-full flex flex-row items-center pl-[15%] ">
        <div className="flex flex-col items-start gap-3">
            <h2 className="text-black font-bold text-2xl">Explore clubs and Activities</h2>
            <p className="text-md font-light text-black w-[600px]">
                SOSC is a conglomeration of clubs and individuals who contribute to the community by helping us conduct events and activities. 
                there are numerous clubs and experts who help shape the community to be pro-active. 
                Mozilla Campus Clubs, Developer Students clubs, and the GitHub Campus Expert are to name a few
            </p>
        </div>
        <img src="	https://sosc.org.in/_astro/hero_clubs.DTTDV-jy_1p64vp.webp" alt="img2" width={500} height={500} />
    </div> 
    <div className="h-[500px] w-full flex flex-row items-center pl-[15%] ">
        <img src="https://sosc.org.in/_astro/hero_connect.CV53XNoK_Z2hOGEd.webp" alt="img3" width={500} height={500} />
        <div className="flex flex-col items-start gap-3">
            <h2 className="text-black font-bold text-2xl">Get Connected</h2>
            <p className="text-md font-light text-black w-[600px]">
                Meet people with similar interest to work together on projects and host events to build a better collaborative environment.
                 We are more than 100 members with interests on various fields of technology here to know each other and get connected.
                  Meet our members to know more about us and build something cool!
            </p>
            
<Link href="/team">
                <button className="bg-[oklch(77.034%_0.20078_152.412)] w-[160px] h-[40px] rounded-3xl text-white text-sm font-bold mt-3 cursor-pointer">
                    Learn More
                </button>
            </Link>
        </div>
    </div> 

    <Footer/>


</>
    );
}