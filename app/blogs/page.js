import Image from "next/image";
import NavBar from "../compnents/NavBar";
import { eventsData } from "../data/blogdata";
import CardA from "../compnents/cardA";
import Footer from "../compnents/Footer";

export default function Blogs() {
  return (
    <>
      <NavBar />

      <div className="w-full h-[200px] relative mt-[0px] overflow-x-hidden">
        <Image
          src="https://sosc.org.in/_astro/blog.CMAhwL9B_Z2uelPt.webp"
          alt="img"
          width={100}
          height={100}
          unoptimized
          loading="eager"
          className="w-full h-full object-cover brightness-50"
        />

        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Blogs</h1>
          <h1 className="text-white text-2l font-light mt-4">
            Dive into articles, insights, and updates from our community.
          </h1>
        </div>
      </div>

<div className="flex justify-center items-center mt-[10px]">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 px-10 max-w-7xl">
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
