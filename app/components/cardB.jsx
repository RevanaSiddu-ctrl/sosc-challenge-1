import { eventsData } from "../data/Events";
export default function CardB({ image, title, location, date }) {
  return (
    <div className="flex w-full h-[200px] bg-white shadow-md hover:shadow-[0_4px_6px_rgba(0,0,0,0.2)] overflow-hidden cursor-pointer group transition-colors duration-300">

      
      <div className="w-[40%] h-full items-center flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-[80%] object-cover"
        />
      </div>

      <div className="w-[60%] p-5 flex flex-col justify-between">

        <div>
          <h1 className="text-2xl font-bold text-black group-hover:text-[oklch(77.034%_0.20078_152.412)]">{title}</h1>
          <p className="text-gray-700 text-[16px] mt-2">{location}</p>
        </div>

        <p className="text-gray-700 text-sm">{date}</p>
      </div>

    </div>
  );
}
