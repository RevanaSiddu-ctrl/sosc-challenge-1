export default function CardA({ title, date, image, author }) {
  return (
    <>
    <div className="w-full sm:w-72 md:w-80 bg-white flex flex-col shadow-md shadow-black/40 rounded-md overflow-hidden">
        <img
          src={image}
          alt="img"
          className="w-full h-40 sm:h-48 md:h-52 object-cover"
        />

       <div className="flex flex-col justify-center items-center p-2">
          <p className="text-sm sm:text-md font-medium mt-1 text-black">{date}</p>
          <h1 className="text-md sm:text-lg font-bold mt-1 text-center text-black">{title}</h1>
          <p className="text-xs sm:text-sm font-extralight mt-2 text-black">{author}</p>
        </div>
      </div>
    </>
  );
}



