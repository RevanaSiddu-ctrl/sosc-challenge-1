export default function CardB({ image, title, location, date }) {
  return (
    <div className="flex w-full h-[200px] shadow-md overflow-hidden cursor-pointer font-[poppins]">

      <div className="w-[300px] h-[170px] p-5">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-[60%] p-5 flex flex-col justify-between">

        <div>
          <h1 className="text-xl font-semibold text-black hover:text-[oklch(77.034%_0.20078_152.412)]">
            {title}
          </h1>

          <p className="text-gray-500 text-sm mt-2 font-normal">
            {location}
          </p>
        </div>
        
        <br/>
        <p className="text-gray-500 text-sm font-normal">
          {date}
        </p>

      </div>

    </div>
  );
}
