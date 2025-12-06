import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CardB from "../components/cardB";
import { eventsData } from "../data/Events";

export default function Events() {
  return (
    <>
      <NavBar />

      {/* Banner */}
      <div className="w-full relative mt-[90px] overflow-hidden">
        <img
          src="https://sosc.org.in/_astro/event.DQU1qtO9_Z1ymQy6.webp"
          alt="Events Banner"
          className="w-full h-[500px] object-cover brightness-50"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3">
          <h1 className="text-white text-4xl font-bold">Our Events</h1>
          <h2 className="text-white text-xl font-semibold">
            Explore our upcoming and past events
          </h2>
        </div>
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 mt-10 mb-10">
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
