import Image from "next/image";
import Link from "next/link";
import NavBar from "../compnents/NavBar";
import Footer from "../compnents/Footer";

export default function Home(){
    return(
<>
    <NavBar/>

    {/* Hero Section */}
    <div className="mt-[90px] min-h-[75vh] flex flex-col justify-center items-center px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl w-full flex flex-col items-center text-center gap-4">
            <Image 
                src="https://sosc.org.in/_astro/sosc_logo.DBzxZ_Go_Z10hDC0.svg"
                alt="SOSC Logo"
                width={90}
                height={90}
                className="mb-4"
            />

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Sahyadri Open Source Community
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-[650px]">
                A community driven by tech enthusiasts and open-source contributors, to help young students become part of the open-source ecosystem through training and skill development.
            </p>

            <Link 
                href="https://sosc.org.in/guidelines/" 
                className="bg-[oklch(77.034%_0.20078_152.412)] hover:bg-[oklch(70%_0.20078_152.412)] px-6 py-2.5 rounded-full text-white text-sm font-semibold transition-all shadow-md hover:shadow-lg"
            >
                Community Guidelines
            </Link>
        </div>
    </div>

    {/* Get Trained by Experts Section */}
    <div className="min-h-[500px] w-full flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-20 py-20 gap-12">
        <div className="flex-1 flex justify-center lg:justify-end order-2 lg:order-1">
            <Image 
                src="https://sosc.org.in/_astro/hero_github.CjpTNEJ9_lPP1X.webp"
                alt="Get Trained by Experts"
                width={500}
                height={500}
                className="w-full max-w-[480px] h-auto"
            />
        </div>

        <div className="flex-1 flex flex-col items-start gap-5 max-w-xl order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Get Trained by Experts
            </h2>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                SOSC is all about helping each other to learn and improve, we conduct workshops and trainings led by speakers from other technical communities, and student experts. Keeping up to date with latest technologies and learning new things is what most of us love. Here is your chance to attend workshops, training and even host non-profit events to help others.
            </p>
        </div>
    </div>

    {/* Explore clubs and Activities Section */}
    <div className="min-h-[500px] w-full flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-20 py-16 gap-10 lg:gap-16 bg-gray-50">
        <div className="flex-1 flex justify-center lg:justify-start order-2 lg:order-2">
            <Image 
                src="https://sosc.org.in/_astro/hero_clubs.DTTDV-jy_1p64vp.webp" 
                alt="Explore clubs and Activities" 
                width={500} 
                height={500}
                className="w-full max-w-[500px] h-auto"
            />
        </div>
        <div className="flex-1 flex flex-col items-start gap-5 max-w-2xl order-1 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Explore clubs and Activities</h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                SOSC is a conglomeration of clubs and individuals who contribute to the community by helping us conduct events and activities. there are numerous clubs and experts who help shape the community to be pro-active. Mozilla Campus Clubs, Developer Students clubs, and the GitHub Campus Expert are to name a few.
            </p>
        </div>
    </div> 

    {/* Get Connected Section */}
    <div className="min-h-[500px] w-full flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-20 py-16 gap-10 lg:gap-16">
        <div className="flex-1 flex justify-center lg:justify-end order-2 lg:order-1">
            <Image 
                src="https://sosc.org.in/_astro/hero_connect.CV53XNoK_Z2hOGEd.webp" 
                alt="Get Connected" 
                width={500} 
                height={500}
                className="w-full max-w-[500px] h-auto"
            />
        </div>
        <div className="flex-1 flex flex-col items-start gap-5 max-w-2xl order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Get Connected !</h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Meet people with similar interest to work together on projects and host events to build a better collaborative environment. We are more than 100 members with interests on various fields of technology here to know each other and get connected. Meet our members to know more about us and build something cool!
            </p>
            <Link 
                href="/team"
                className="inline-block bg-[oklch(77.034%_0.20078_152.412)] hover:bg-[oklch(70%_0.20078_152.412)] px-6 py-2.5 rounded-full text-white text-sm font-semibold mt-2 cursor-pointer transition-all shadow-md hover:shadow-lg"
            >
                Learn More
            </Link>
        </div>
    </div> 

    <Footer/>
</>
    );
}

