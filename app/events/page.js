import NavBar from "../compnents/NavBar";
import { eventsData } from "../data/Events";
import CardB from "../compnents/cardB";
import Footer from "../compnents/Footer";

export default function Events() {
  return (
    <>
      <NavBar />

      <div className="w-full relative mt-[90px] overflow-x-hidden">
        <img
          src="https://sosc.org.in/_astro/event.DQU1qtO9_Z1ymQy6.webp"
          alt="bgimg"
          height={100}
          width={100}
          className="w-full h-[220px] sm:h-[300px] md:h-[500px] object-cover brightness-50"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
            Our Events
          </h1>

          <h1 className="text-white text-xs sm:text-sm md:text-xl font-extrabold mt-2">
            Explore upcoming and past events hosted by our community.
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10 px-6 sm:px-10 md:px-20">
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
