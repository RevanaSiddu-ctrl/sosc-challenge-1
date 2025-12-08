import NavBar from "../compnents/NavBar";
import { eventsData } from "../data/Events";
import CardB from "../compnents/cardB";
import Footer from "../compnents/Footer";

export default function Events(){
    return(
        <>
        <NavBar/>

        <div className="w-full  relative h-[400px] overflow-x-hidden">
        <img 
        src="https://sosc.org.in/_astro/event.DQU1qtO9_Z1ymQy6.webp" 
        alt="bgimg"
        height={100}
        width={100}
         className="w-full h-full object-cover brightness-50"/>

         <div className="absolute inset-0 flex flex-col items-center gap-3 justify-center">
          <h1 className="text-white text-3xl font-bold">Our Events</h1>
          <h1 className="text-white text-1xl font-extrabold">
            Explore upcoming and past events hosted by our community.
          </h1>
        </div>
        </div>

        <div className="grid  grid-cols-1  gap-10 mt-10 md:px-20 m-15 md:pl-0 md:grid-cols-2 ">
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