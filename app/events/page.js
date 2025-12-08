import NavBar from "../components/NavBar";
import { eventsData } from "../data/Events";
import CardB from "../components/cardB";
import Footer from "../components/Footer";

export default function Events(){
    return(
        <>
        <NavBar/>

        <div className="w-full  relative  flex  justify-center items-center">
        <img 
        src="https://sosc.org.in/_astro/event.DQU1qtO9_Z1ymQy6.webp" 
        alt="bgimg"
        height={100}
        width={100}
         className="w-full sm:h-[500px]  object-cover brightness-60"/>

         <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white sm:text-[56px] text-[40px] font-bold">Our Events</h1>
          <h1 className="text-white sm:text-2xl text-[15px] font-medium">
            Explore upcoming and past events hosted by our community.
          </h1>
        </div>
        </div>

        <div className="grid sm:grid-cols-2 sm:gap-10  mt-10 sm:px-20 px-10">
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