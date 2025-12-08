import Image from "next/image";
import NavBar from "../compnents/NavBar";
import { eventsData } from "../data/blogdata";
import CardA from "../compnents/cardA";
import Footer from "../compnents/Footer";

export default function Blogs() {
  return (
    <>
      <NavBar />

      <div className="w-full h-[250px] sm:h-[350px] lg:h-[400px] relative mt-[80px] overflow-hidden">
        <Image
          src="https://sosc.org.in/_astro/blog.CMAhwL9B_Z2uelPt.webp"
          alt="img"
          width={1920}
          height={400}
          unoptimized
          loading="eager"
          className="w-full h-full object-cover brightness-50"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
            Blogs
          </h1>
          <h1 className="text-white text-sm sm:text-xl lg:text-2xl font-extrabold mt-2 max-w-[900px]">
            Dive into articles, insights, and updates from our community.
          </h1>
        </div>
      </div>

      <div className="flex justify-center items-center mt-10 px-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-20 mt-10 justify-center items-center">
          {eventsData.map((event) => (
            <CardA
              key={event.id}
              title={event.title}
              date={event.date}
              image={event.image}
              author={event.author}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
