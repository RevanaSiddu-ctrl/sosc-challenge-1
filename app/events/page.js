import NavBar from "../compnents/NavBar";
import { eventsData } from "../data/Events";
import CardB from "../compnents/cardB";
import Footer from "../compnents/Footer";

export default function Events(){
    return(
        <>
        <NavBar/>

        <div className="w-full  relative mt-[90px] overflow-x-hidden">
        <img 
        src="https://sosc.org.in/_astro/event.DQU1qtO9_Z1ymQy6.webp" 
        alt="bgimg"
        height={100}
        width={100}
         className="w-full h-[500px] brightness-50"/>

         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-6">Our Events</h1>
          <p className="text-white text-xl md:text-2xl font-normal">
            Explore upcoming and past events hosted by our community.
          </p>
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-10 mb-16 px-8 md:px-12 lg:px-20 max-w-7xl mx-auto">
            {eventsData.map((event) => (
                <CardB
                key={event.id}
                id={event.id}
                title={event.title}
                date={event.date}
                image={event.image}
                location={event.location}
                link={event.link} />
            ))} 
        </div>
        <Footer/>
        </>
    )
}