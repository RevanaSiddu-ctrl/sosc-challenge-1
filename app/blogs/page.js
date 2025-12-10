import Image from "next/image";
import NavBar from "../compnents/NavBar";
import { eventsData } from "../data/blogdata";
import CardA from "../compnents/cardA";
import Footer from "../compnents/Footer";

export default function Blogs() {
  return (
    <>
      <NavBar />

      <div className="w-full h-[400px] relative mt-[90px] overflow-x-hidden">
        <Image
          src="https://sosc.org.in/_astro/blog.CMAhwL9B_Z2uelPt.webp"
          alt="img"
          width={100}
          height={100}
          unoptimized
          loading="eager"
          className="w-full h-full object-cover brightness-50"
        />

        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Blogs</h1>
          <p className="text-white text-lg md:text-xl font-normal max-w-3xl">
            Dive into articles, insights, and updates from our community.
          </p>
        </div>
      </div>

     <div className="flex justify-center items-center mt-10 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mt-10 px-8 md:px-12 lg:px-20 max-w-7xl mx-auto">
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

      <Footer/>
    </>
  );
}
