import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Section 1 */}
      <div className="flex flex-col items justify-center items-start w-[700px] h-[700px] px-10 ml-[120px]">
        <Image
          src="https://sosc.org.in/_astro/sosc_logo.DBzxZ_Go_Z10hDC0.svg"
          alt="logo"
          width={150}
          height={150}
          className="mb-3"
        />
        <h2 className="text-black text-2xl font-bold mb-4">
          Sahyadri Open Source Community
        </h2>
        <p className="text-gray-700 text-md max-w-[700px] leading-relaxed">
          A community driven by tech enthusiasts and open-source contributors, to help young students become part of the open-source ecosystem through training and skill development.
        </p>
        <button className="bg-[oklch(77.034%_0.20078_152.412)] w-[160px] h-[40px] rounded-3xl text-white text-sm font-bold mt-3 cursor-pointer">
          Community Guidelines
        </button>
      </div>

      {/* Section 2 */}
      <div className="h-[500px] w-full flex flex-row items-center pl-[15%]">
        <Image
          src="https://sosc.org.in/_astro/hero_github.CjpTNEJ9_lPP1X.webp"
          alt="img1"
          width={500}
          height={500}
        />
        <div className="flex flex-col items-start gap-3 ml-10">
          <h2 className="text-black font-bold text-2xl">Get Trained by Experts</h2>
          <p className="text-md font-light text-black w-[600px]">
            SOSC is all about helping each other to learn and improve...
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="h-[500px] w-full flex flex-row items-center pl-[15%]">
        <div className="flex flex-col items-start gap-3 mr-10">
          <h2 className="text-black font-bold text-2xl">Explore Clubs and Activities</h2>
          <p className="text-md font-light text-black w-[600px]">
            SOSC is a conglomeration of clubs and individuals...
          </p>
        </div>
        <Image
          src="https://sosc.org.in/_astro/hero_clubs.DTTDV-jy_1p64vp.webp"
          alt="img2"
          width={500}
          height={500}
        />
      </div>

      {/* Section 4 */}
      <div className="h-[500px] w-full flex flex-row items-center pl-[15%]">
        <Image
          src="https://sosc.org.in/_astro/hero_connect.CV53XNoK_Z2hOGEd.webp"
          alt="img3"
          width={500}
          height={500}
        />
        <div className="flex flex-col items-start gap-3 ml-10">
          <h2 className="text-black font-bold text-2xl">Get Connected</h2>
          <p className="text-md font-light text-black w-[600px]">
            Meet people with similar interests...
          </p>
          <button className="bg-[oklch(77.034%_0.20078_152.412)] w-[160px] h-[40px] rounded-3xl text-white text-sm font-bold mt-3 cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}