"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import NavBar from "../compnents/NavBar";
import Footer from "../compnents/Footer";

export default function Home() {
  const router = useRouter();

  const handleGuidelinesClick = () => {
    window.location.href = "https://sosc.org.in/guidelines/";
  };

  const handleLearnMoreClick = () => {
    window.location.href = "/team";
  };

  return (
    <>
      <NavBar />

      <div className="mt-[90px]">
        <div className="w-full h-screen flex flex-col items-center justify-center text-center px-5">
          <Image 
            src="https://sosc.org.in/_astro/sosc_logo.DBzxZ_Go_Z10hDC0.svg"
            alt="logo"
            width={120}
            height={120}
            className="mb-5"
          />

          <h2 className="text-black text-4xl font-bold mb-4">
            Sahyadri Open Source Community
          </h2>

          <p className="text-gray-700 text-lg max-w-[600px] leading-relaxed mb-6">
           A community driven by tech enthusiasts and open-source contributors, to help young students become part of the open-source ecosystem through training and skill development..
          </p>

          <button 
            onClick={handleGuidelinesClick}
            className="bg-[oklch(77.034%_0.20078_152.412)] w-[200px] h-[45px] rounded-3xl text-white text-md font-semibold cursor-pointer hover:opacity-90"
          >
            Community Guidelines
          </button>
        </div>

        <div className="h-[500px] w-full flex flex-row items-center justify-center gap-10 px-10 py-10">
          <Image
            src="https://sosc.org.in/_astro/hero_github.CjpTNEJ9_lPP1X.webp"
            alt="GitHub illustration"
            width={500}
            height={500}
            className="max-w-[40%]"
          />

          <div className="flex flex-col items-start gap-3 max-w-[600px]">
            <h2 className="text-black font-bold text-2xl">Get Trained by Experts</h2>

            <p className="text-md font-light text-black">
              SOSC is all about helping each other to learn and improve, we conduct workshops and trainings led by speakers from other technical communities, and student experts. Keeping up to date with latest technologies and learning new things is what most of love. Here is your chance to attend workshops, training and even host non-profit events to help others.
            </p>
          </div>
        </div>

        <div className="h-[500px] w-full flex flex-row items-center justify-center gap-10 px-10 py-10">
          <div className="flex flex-col items-start gap-3 max-w-[600px]">
            <h2 className="text-black font-bold text-2xl">Explore Clubs and Activities</h2>

            <p className="text-md font-light text-black">
             SOSC is a conglomeration of clubs and individuals who contribute to the community by helping us conduct events and activities. there are numerous clubs and experts who help shape the community to be pro-active. Mozilla Campus Clubs, Developer Students clubs, and the GitHub Campus Expert are to name a few.
            </p>
          </div>

          <Image
            src="https://sosc.org.in/_astro/hero_clubs.DTTDV-jy_1p64vp.webp"
            alt="Clubs illustration"
            width={500}
            height={500}
            className="max-w-[40%]"
          />
        </div>

        <div className="h-[500px] w-full flex flex-row items-center justify-center gap-10 px-10 py-10">
          <Image
            src="https://sosc.org.in/_astro/hero_connect.CV53XNoK_Z2hOGEd.webp"
            alt="Connect illustration"
            width={500}
            height={500}
            className="max-w-[40%]"
          />

          <div className="flex flex-col items-start gap-3 max-w-[600px]">
            <h2 className="text-black font-bold text-2xl">Get Connected</h2>

            <p className="text-md font-light text-black">
             Meet people with similar interest to work together on projects and host events to build a better collaborative environment. We are more than 100 members with interests on various fields of technology here to know each other and get connected. Meet our members to know more about us and build something cool!
            </p>

            <button
              onClick={handleLearnMoreClick}
              className="bg-[oklch(77.034%_0.20078_152.412)] w-[160px] h-[40px] rounded-3xl text-white text-sm font-bold mt-3 cursor-pointer hover:opacity-90"
            >
              Learn More
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}