import NavBar from "../compnents/NavBar";
import { eventsData } from "../data/Events";
import CardB from "../compnents/cardB";
import Footer from "../compnents/Footer";

export default function Events() {
  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <div className="w-full h-[400px] relative mt-[60px] overflow-x-hidden">
        <img
          src="https://sosc.org.in/_astro/event.DQU1qtO9_Z1ymQy6.webp"
          alt="Events background"
          height={50}
          width={100}
          className="w-full h-[500px] object-cover brightness-50"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Our Events
          </h1>
          <h2 className="text-white text-lg md:text-xl font-extrabold mt-3 max-w-3xl">
            Explore upcoming and past events hosted by our community.
          </h2>
        </div>
      </div>

      {/* Events grid */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2">
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
      </main>

      <Footer />
    </>
  );
}
