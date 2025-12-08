import Image from "next/image";
import NavBar from "../components/NavBar";
import { eventsData } from "../data/blogdata";
import CardA from "../components/cardA";
import Footer from "../components/Footer";

export default function Blogs() {
  return (
    <>
      <NavBar />

      <div className="w-full sm:h-[500px] relative  overflow-x-hidden">
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
          <h1 className="text-white sm:text-5xl text-[40px] font-bold">Blogs</h1>
          <h1 className="text-white  sm:text-[20px] text-[15px] mt-3 font-medium">
            Dive into articles, insights, and updates from our community.
          </h1>
        </div>
      </div>

   <div className="flex justify-center mt-10 mb-20 px-10 w-[90%] mx-auto">
  <div className="grid sm:grid-cols-4 gap-x-10 gap-y-10">
    {eventsData.map((event, index) => (
      <CardA
        key={event.id}
        title={event.title}
        date={event.date}
        image={event.image}
        author={event.author}
        isLarge={index === 0} 
      />
    ))}
  </div>
</div>

      <Footer/>
    </>
  );
}
