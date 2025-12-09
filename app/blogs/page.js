import Image from "next/image";
import NavBar from "../components/NavBar";
import { eventsData } from "../data/blogdata";
import CardA from "../components/cardA";
import Footer from "../components/Footer";

export default function Blogs() {
  return (
    <>
      <NavBar />

      <div className="lg:w-full lg:h-[450px] relative overflow-x-hidden font-[poppins] sm:w-full sm:h-[350px] ">
        <Image
          src="https://sosc.org.in/_astro/blog.CMAhwL9B_Z2uelPt.webp"
          alt="img"
          width={100}
          height={100}
          unoptimized
          loading="eager"
          className="w-full h-full object-cover brightness-50"
        />

        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-gray-200 text-5xl font-semibold">Blogs</h1><br/>
          <h1 className="text-gray-300 text-md mt-2">
            Dive into articles, insights, and updates from our community.
          </h1>
        </div>
      </div>
<div className="max-w-7xl mx-auto mt-16 px-6">
  <div className="grid grid-cols-12 gap-10">

    <div className="col-span-12 lg:col-span-6">
      <CardA
        large
        title={eventsData[0].title}
        date={eventsData[0].date}
        image={eventsData[0].image}
        author={eventsData[0].author}
        para={eventsData[0].para}
      />
    </div>

    <div className="col-span-12 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
      {eventsData.slice(1, 5).map((event) => (
        <CardA
          key={event.id}
          title={event.title}
          date={event.date}
          image={event.image}
          author={event.author}
        />
      ))}
    </div>

    <div className="col-span-12 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {eventsData.slice(5).map((event) => (
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
</div>



      <Footer/>
    </>
  );
}



