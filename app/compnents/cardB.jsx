export default function CardB({ image, title, location, date }) {
  return (
    <div className="flex flex-col md:flex-row w-full bg-white shadow-md overflow-hidden cursor-pointer md:h-[190px] hover:text-[oklch(77.034%_0.20078_152.412)] text-black">
      <div className="w-full md:w-[40%] h-[200px] md:h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="w-full md:w-[60%] p-5 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold">
            {title}
          </h1>
          <p className="text-black/50 text-sm mt-2">{location}</p>
        </div>

        <p className="text-black/50 text-sm mt-3 md:mt-0">{date}</p>
      </div>
    </div>
  );
}