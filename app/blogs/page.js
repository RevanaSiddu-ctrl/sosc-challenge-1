import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CardA from "../components/cardA";
import { blogData } from "../data/blogdata";

export default function Blogs() {
  return (
    <>
      <NavBar />

      <div className="w-full h-[400px] relative mt-[90px] overflow-hidden">
        <Image
          src="https://sosc.org.in/_astro/blog.CMAhwL9B_Z2uelPt.webp"
          alt="Blogs Banner"
          width={1000}
          height={400}
          className="w-full h-full object-cover brightness-50"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-5xl font-bold">Blogs</h1>
          <h2 className="text-white text-2xl font-extrabold">
            Explore insights and updates from our community.
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 mt-10">
        {blogData.map((blog) => (
          <CardA
            key={blog.id}
            title={blog.title}
            image={blog.image}
            date={blog.date}
            author={blog.author}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}
