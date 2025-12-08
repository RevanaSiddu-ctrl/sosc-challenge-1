export default function CardB({ image, title, location, date }) {
  return (
    <div
      className="w-full  bg-white rounded-xl shadow-md overflow-hidden cursor-pointertransition-transform hover:scale-[1.02]flex flex-col sm:flex-row h-auto sm:h-[200px]
      "
    >
      <div className="w-full sm:w-[40%] h-[160px] sm:h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

   
      <div className="w-full sm:w-[60%] p-4 sm:p-5 flex flex-col justify-between text-center sm:text-left gap-2">
        <div>
          <h1 className="text-lg sm:text-xl font-bold text-black hover:text-green-600">
            {title}
          </h1>
          <p className="text-gray-700 text-xs sm:text-sm mt-1">
            {location}
          </p>
        </div>

        <p className="text-gray-500 text-xs sm:text-sm">
          {date}
        </p>
      </div>
    </div>
  );
}
