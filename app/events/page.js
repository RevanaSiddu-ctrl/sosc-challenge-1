import NavBar from "../compnents/NavBar";
import { eventsData } from "../data/Events";
import CardB from "../compnents/cardB";
import Footer from "../compnents/Footer";

export default function Events(){
    return(
        <>
        <NavBar/>

        <div className="w-full relative mt-[90px] overflow-x-hidden">
        <img 
        src="https://sosc.org.in/_astro/event.DQU1qtO9_Z1ymQy6.webp" 
        alt="bgimg"
        height={100}
        width={100}
         className="w-full h-[300px] md:h-[500px] brightness-50 object-cover"/>

         <div className="absolute inset-0 flex flex-col items-center justify-center px-5">
          <h1 className="text-white text-2xl md:text-3xl font-bold">Our Events</h1>
          <h1 className="text-white text-sm md:text-1xl font-extrabold text-center">
            Explore upcoming and past events hosted by our community.
          </h1>
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mt-10 px-5 md:px-20">
            {eventsData.map((event) => (
                <CardB
                key={event.id}
                title={event.title}
                date={event.date}
                image={event.image}
                location={event.location} />
            ))} 
        </div>
        <Footer/>
        </>
    )
}