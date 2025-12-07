import NavBar from "../compnents/NavBar";
import { eventsData } from "../data/Events";
import CardB from "../compnents/cardB";
import Footer from "../compnents/Footer";

export default function Events() {
  return (
    <>
      <NavBar />

     
      <div className="w-full h-[400px] md:h-[500px] relative mt-[90px] overflow-x-hidden">
        <img
          src="https://sosc.org.in/_astro/event.DQU1qtO9_Z1ymQy6.webp"
          alt="bgimg"
          className="w-full h-full object-cover brightness-50"
        />

       
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-2">
            Our Events
          </h1>
          <h1 className="text-white text-lg md:text-2xl font-extrabold max-w-2xl">
            Explore upcoming and past events hosted by our community.
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-10 px-6 md:px-20 max-w-7xl mx-auto mb-20">
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