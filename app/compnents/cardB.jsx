export default function CardB({ image, title, location, date }) {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-[200px] bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg">

      
      <div className="w-full md:w-[40%] h-[150px] md:h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-[60%] p-5 flex flex-col justify-between">

        <div>
          <h1 className="text-lg md:text-xl font-bold text-black hover:text-[oklch(77.034%_0.20078_152.412)]">{title}</h1>
          <p className="text-gray-700 text-sm mt-2">{location}</p>
        </div>

        <p className="text-gray-500 text-sm">{date}</p>
      </div>

    </div>
  );
}
