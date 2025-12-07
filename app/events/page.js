import NavBar from "../compnents/NavBar";
import { eventsData } from "../data/Events";
import CardB from "../compnents/cardB";
import Footer from "../compnents/Footer";

export default function Events(){
    return(
        <>
        <NavBar/>
        <main className="pt-24">

        <div className="w-full relative h-[450px] md:h-[400px]  overflow-x-hidden">
        <img 
        src="https://sosc.org.in/_astro/event.DQU1qtO9_Z1ymQy6.webp" 
        alt="bgimg"
       
         className="w-full h-full object-cover brightness-50"/>

         <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">Our Events</h1>
          <h1 className="text-white text-xs sm:text-sm md:text-lg font-semibold mt-3 max-w-2xl">
            Explore upcoming and past events hosted by our community.
          </h1>
        </div>
        </div>
        <section className="mt-10 px-4 md:px-20 pb-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 mt-10 md:px-20 md:pl-0 md:gap-10">
            {eventsData.map((event) => (
                <CardB
                key={event.id}
                title={event.title}
                date={event.date}
                image={event.image}
                location={event.location} />
            ))} 
        </div>
        </section>
        </main>
        <Footer/>
        </>
    );
}