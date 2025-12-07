import Image from "next/image";
import NavBar from "../compnents/NavBar";
import { blogData } from "../data/blogdata";
import CardA from "../compnents/cardA";
import Footer from "../compnents/Footer";

export default function Blogs() {
  return (
    <>

      <NavBar />
    <main className="pt-24">
      <div className="w-full h-[150px] md:h-[400px] relative mt-[20px] overflow-x-hidden">
        <Image
          src="https://sosc.org.in/_astro/blog.CMAhwL9B_Z2uelPt.webp"
          alt="img"
          width={400}
          height={400}
          unoptimized
          loading="eager"
          className="w-full h-full object-cover brightness-50"
        />

        
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-white  text-sm sm:text-base md:text-2xl font-semibold mt-3 max-w-3xl">Blogs</h1>
          <h1 className="text-white text-l font-extrabold">
            Dive into articles, insights, and updates from our community.
          </h1>
        </div>
      </div>

     <section className="mt-10 px-4 md:px-10 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 justify-center items-center">
        {blogData.map((blog) => (
          <CardA
            key={blog.id}
            title={blog.title}
            date={blog.date}
            image={blog.image}
            author={blog.author}
          />
        ))}
      </div>
      </section>
    </main>   
      <Footer/>
    </>
  );
}
