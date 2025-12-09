import NavBar from "../components/NavBar";
import { eventsData } from "../data/Events";
import CardB from "../components/cardB";
import Footer from "../components/Footer";

export default function Events(){
    return(
        <>
        <NavBar/>

       <div className="relative w-full h-[350px] md:h-[500px] overflow-hidden">

  <img
    src="https://sosc.org.in/_astro/event.DQU1qtO9_Z1ymQy6.webp"
    alt="bg"
    className="w-full h-full object-cover brightness-50"
  />


  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-white text-3xl md:text-5xl font-bold mb-2">
      Our Events
    </h1>

    <p className="text-white text-sm md:text-lg font-medium max-w-[700px]">
      Explore upcoming and past events hosted by our community.
    </p>
  </div>

</div>


        <div className="grid grid-cols-2 gap-10 mt-10 px-20 w-[1350px] ml-25">
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







