export default function CardB({ image, title, location, date }) {
  return (
    <div className="flex flex-col sm:flex-row w-full bg-white rounded-xl shadow-md overflow-hidden cursor-pointer">

      {/* Image section */}
      <div className="w-full sm:w-2/5 h-48 sm:h-auto">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text section */}
      <div className="w-full sm:w-3/5 p-4 sm:p-5 flex flex-col justify-between">

        <div>
          <h1 className="text-lg sm:text-xl font-bold text-black hover:text-[oklch(77.034%_0.20078_152.412)]">{title}</h1>
          <p className="text-gray-600 text-xs sm:text-sm mt-2">{location}</p>
        </div>

        <p className="text-gray-500 text-xs sm:text-sm">{date}</p>
      </div>

    </div>
  );
}
