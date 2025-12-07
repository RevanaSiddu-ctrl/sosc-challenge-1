import Image from "next/image";
import NavBar from "../components/NavBar";
import { eventsData } from "../data/blogdata";
import CardA from "../components/cardA";
import Footer from "../components/Footer";

export default function Blogs() {
  return (
    <>
      <NavBar />

      <div className="w-full h-[300px] md:h-[400px] relative mt-[90px] overflow-x-hidden">
        <Image
          src="https://sosc.org.in/_astro/blog.CMAhwL9B_Z2uelPt.webp"
          alt="img"
          width={100}
          height={100}
          unoptimized
          loading="eager"
          className="w-full h-full object-cover brightness-50"
        />

        
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h1 className="text-white text-2xl md:text-5xl font-bold text-center">Blogs</h1>
          <h1 className="text-white text-sm md:text-2xl font-extrabold text-center mt-2">
            Dive into articles, insights, and updates from our community.
          </h1>
        </div>
      </div>

     <div className="flex justify-center items-center mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-20 mt-10 px-4 md:px-10 justify-center items-center">
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