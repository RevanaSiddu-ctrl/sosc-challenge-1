import Image from "next/image";
import NavBar from "../components/NavBar";
import { eventsData } from "../data/Events";
import CardB from "../components/cardB";
import Footer from "../components/Footer";

export default function Events() {
  return (
    <>
      <NavBar />

      <div className="w-full relative mt-[90px] overflow-x-hidden">
        <Image
          src="https://sosc.org.in/_astro/event.DQU1qtO9_Z1ymQy6.webp"
          alt="Community events banner"
          fill
          priority
          className="object-cover brightness-50 h-[500px]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-3xl font-bold">Our Events</h1>
          <h1 className="text-white text-xl font-extrabold">
            Explore upcoming and past events hosted by our community.
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10 px-6 md:px-20">
        {eventsData.map((event) => (
          <CardB
            key={event.id}
            title={event.title}
            date={event.date}
            image={event.image}
            location={event.location}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}