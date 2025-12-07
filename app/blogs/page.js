import Image from "next/image";
import NavBar from "../compnents/NavBar";
import { eventsData } from "../data/blogdata";
import CardA from "../compnents/cardA";
import Footer from "../compnents/Footer";

export default function Blogs() {
  return (
    <>
      <NavBar />

      <div className="w-full relative">
        <img
          src="https://sosc.org.in/_astro/blog.CMAhwL9B_Z2uelPt.webp"
          alt="bgimg"
          className="w-full h-[500px] brightness-50 bg-center bg-cover object-cover object-center"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-10">
          <h1 className="text-white text-5xl font-bold mb-5">Blogs</h1>
          <h1 className="text-white text-1xl">
            Dive into articles, insights, and updates from our community.
          </h1>
        </div>
      </div>

      <div className="flex justify-center items-center mt-10 px-5">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 w-fit gap-5 max-w-[1400px]">
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
