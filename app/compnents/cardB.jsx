export default function CardB({ image, title, location, date }) {
  return (
    <div
      className="
        flex 
        w-full 
        bg-white 
        rounded-xl 
        shadow-md 
        overflow-hidden 
        cursor-pointer 
        hover:shadow-xl 
        transition 
        duration-300
      "
    >
      {/* IMAGE */}
      <div className="w-[35%] sm:w-[40%] h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="w-[65%] sm:w-[60%] p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-lg md:text-xl font-bold text-black leading-tight">
            {title}
          </h1>

          <p className="text-gray-700 text-sm mt-1">{location}</p>
        </div>

        <p className="text-gray-500 text-sm mt-2">{date}</p>
      </div>
    </div>
  );
}
