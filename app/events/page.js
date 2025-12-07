import NavBar from "../compnents/NavBar";
import { eventsData } from "../data/Events";
import CardB from "../compnents/cardB";
import Footer from "../compnents/Footer";

export default function Events(){
    return(
        <>
        <NavBar/>

        <div className="w-full relative mt-[70px] overflow-x-hidden">
            {/* Banner Section */}
            <div className="relative w-full h-[300px] md:h-[500px]">
                <img 
                src="https://sosc.org.in/_astro/event.DQU1qtO9_Z1ymQy6.webp" 
                alt="bgimg"
                className="w-full h-full object-cover brightness-50"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-white text-3xl md:text-5xl font-bold">Our Events</h1>
                    <h1 className="text-white text-lg md:text-2xl font-extrabold mt-2 max-w-2xl">
                        Explore upcoming and past events hosted by our community.
                    </h1>
                </div>
            </div>
        </div>

        {/* Events Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-10 px-4 md:px-20 mb-20">
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