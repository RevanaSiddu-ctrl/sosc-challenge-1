"use client"
import { useRouter } from "next/navigation";

export default function CardB({ image, title, location, date, id, link }) {
  const router = useRouter();

  const handleClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      // You can navigate to an event detail page if you create one
      // router.push(`/events/${id}`);
    }
  };

  return (
    <div 
      className="flex w-full h-[200px] bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02]"
      onClick={handleClick}
    >
      <div className="w-[40%] h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-[60%] p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-lg md:text-xl font-semibold text-black hover:text-[oklch(77.034%_0.20078_152.412)] transition-colors mb-2 leading-snug">{title}</h1>
          <p className="text-gray-700 text-sm md:text-base mt-1">{location}</p>
        </div>

        <p className="text-gray-600 text-sm md:text-base font-medium">{date}</p>
      </div>
    </div>
  );
}
