import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-start w-full md:w-[700px] h-auto md:h-[700px] px-6 md:px-10 md:ml-120 py-10 md:py-0">
        <Image
          src="https://sosc.org.in/_astro/sosc_logo.DBzxZ_Go_Z10hDC0.svg"
          alt="logo"
          width={100}
          height={100}
          className="mb-3"
        />
        <h2 className="text-black text-xl md:text-2xl font-bold mb-4">
          Sahyadri Open Source Community
        </h2>
        <p className="text-gray-700 text-sm md:text-md max-w-full md:max-w-[700px] leading-relaxed">
          A community driven by tech enthusiasts and open-source contributors,
          helping students become part of the open-source ecosystem through
          training and skill development.
        </p>
        <button className="bg-[oklch(77.034%_0.20078_152.412)] w-[160px] h-[40px] rounded-3xl text-white text-sm font-bold mt-3 cursor-pointer hover:opacity-90 transition">
          Community Guidelines
        </button>
      </div>
      <Footer />
    </>
  );
}