export default function CardB({ image, title, location, date }) {
  return (

    <div className="flex flex-col md:flex-row w-full h-auto md:h-[200px] bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
   
      <div className="w-full md:w-[40%] h-48 md:h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-[60%] p-5 flex flex-col justify-between">
        <div className="mb-4 md:mb-0">
          <h1 className="text-xl font-bold text-black hover:text-[oklch(77.034%_0.20078_152.412)] leading-tight">
            {title}
          </h1>
          <p className="text-gray-700 text-sm mt-2 flex items-center gap-1">
             {location}
          </p>
        </div>

        <p className="text-gray-500 text-xs md:text-sm font-medium">
            {date}
        </p>
      </div>
    </div>
  );
}