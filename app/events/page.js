import NavBar from "../compnents/NavBar";
import { eventsData } from "../data/Events";
import CardB from "../compnents/cardB";
import Footer from "../compnents/Footer";

export default function Events() {
  return (
    <>
      <NavBar />

      {/* HERO BANNER */}
      <div className="relative w-full overflow-hidden pt-[70px]">
        <img
          src="https://sosc.org.in/_astro/event.DQU1qtO9_Z1ymQy6.webp"
          alt="events banner"
          className="w-full h-[500px] object-cover brightness-50"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl font-bold mb-2">Our Events</h1>
          <p className="text-white text-lg font-medium max-w-2xl">
            Explore upcoming and past events hosted by our community.
          </p>
        </div>
      </div>

      {/* EVENTS GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 px-6">
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
