export default function CardB({ image, title, location, date }) {
  return (
    <div className="flex flex-col sm:flex-row w-full bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all h-auto sm:h-[200px]">

      {/* Image: Full width on mobile, 40% on desktop */}
      <div className="w-full sm:w-[40%] h-[200px] sm:h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="w-full sm:w-[60%] p-5 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold text-black hover:text-[oklch(77.034%_0.20078_152.412)]">{title}</h1>
          <p className="text-gray-700 text-sm mt-2">{location}</p>
        </div>

        <p className="text-gray-500 text-sm mt-4 sm:mt-0">{date}</p>
      </div>

    </div>
  );
}
