import Image from "next/image";
import Link from "next/link";
import NavBar from "../compnents/NavBar";
import Footer from "../compnents/Footer";

export default function Home(){
    return(
<>
    <NavBar/>

    {/* Hero Section */}
    <div className="mt-[90px] min-h-[80vh] flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 py-20">
        <div className="max-w-4xl w-full">
            <Image 
                src="https://sosc.org.in/_astro/sosc_logo.DBzxZ_Go_Z10hDC0.svg"
                alt="SOSC Logo"
                width={100}
                height={100}
                className="mb-6"
            />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Sahyadri Open Source Community
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed mb-8">
                A community driven by tech enthusiasts and open-source contributors, to help young students become part of the open-source ecosystem through training and skill development.
            </p>
            <Link 
                href="https://sosc.org.in/guidelines/" 
                className="inline-block bg-[oklch(77.034%_0.20078_152.412)] hover:bg-[oklch(70%_0.20078_152.412)] px-8 py-3 rounded-full text-white text-base font-bold cursor-pointer transition-all shadow-md hover:shadow-lg"
            >
                Community Guidelines
            </Link>
        </div>
    </div>

    {/* Get Trained by Experts Section */}
    <div className="min-h-[500px] w-full flex flex-col lg:flex-row items-center justify-center px-8 md:px-16 lg:px-24 py-20 gap-12 lg:gap-20">
        <div className="flex-1 flex justify-center lg:justify-end order-2 lg:order-1">
            <Image 
                src="https://sosc.org.in/_astro/hero_github.CjpTNEJ9_lPP1X.webp" 
                alt="Get Trained by Experts" 
                width={500} 
                height={500}
                className="w-full max-w-[500px] h-auto"
            />
        </div>
        <div className="flex-1 flex flex-col items-start gap-6 max-w-2xl order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Get Trained by Experts</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                SOSC is all about helping each other to learn and improve, we conduct workshops and trainings led by speakers from other technical communities, and student experts. Keeping up to date with latest technologies and learning new things is what most of us love. Here is your chance to attend workshops, training and even host non-profit events to help others.
            </p>
        </div>
    </div>  

    {/* Explore clubs and Activities Section */}
    <div className="min-h-[500px] w-full flex flex-col lg:flex-row items-center justify-center px-8 md:px-16 lg:px-24 py-20 gap-12 lg:gap-20 bg-gray-50">
        <div className="flex-1 flex justify-center lg:justify-start order-2 lg:order-2">
            <Image 
                src="https://sosc.org.in/_astro/hero_clubs.DTTDV-jy_1p64vp.webp" 
                alt="Explore clubs and Activities" 
                width={500} 
                height={500}
                className="w-full max-w-[500px] h-auto"
            />
        </div>
        <div className="flex-1 flex flex-col items-start gap-6 max-w-2xl order-1 lg:order-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Explore clubs and Activities</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                SOSC is a conglomeration of clubs and individuals who contribute to the community by helping us conduct events and activities. there are numerous clubs and experts who help shape the community to be pro-active. Mozilla Campus Clubs, Developer Students clubs, and the GitHub Campus Expert are to name a few.
            </p>
        </div>
    </div> 

    {/* Get Connected Section */}
    <div className="min-h-[500px] w-full flex flex-col lg:flex-row items-center justify-center px-8 md:px-16 lg:px-24 py-20 gap-12 lg:gap-20">
        <div className="flex-1 flex justify-center lg:justify-end order-2 lg:order-1">
            <Image 
                src="https://sosc.org.in/_astro/hero_connect.CV53XNoK_Z2hOGEd.webp" 
                alt="Get Connected" 
                width={500} 
                height={500}
                className="w-full max-w-[500px] h-auto"
            />
        </div>
        <div className="flex-1 flex flex-col items-start gap-6 max-w-2xl order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Get Connected !</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Meet people with similar interest to work together on projects and host events to build a better collaborative environment. We are more than 100 members with interests on various fields of technology here to know each other and get connected. Meet our members to know more about us and build something cool!
            </p>
            <Link 
                href="/team"
                className="inline-block bg-[oklch(77.034%_0.20078_152.412)] hover:bg-[oklch(70%_0.20078_152.412)] px-8 py-3 rounded-full text-white text-base font-bold mt-4 cursor-pointer transition-all shadow-md hover:shadow-lg"
            >
                Learn More
            </Link>
        </div>
    </div> 

    <Footer/>
</>
    );
}