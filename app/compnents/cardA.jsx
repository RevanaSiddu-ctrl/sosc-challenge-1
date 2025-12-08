export default function CardA({ title, date, image, author }) {
  return (
    <>
      <div
        className=" bg-white flex flex-col justify-start shadow-md shadow-black/40 rounded-md w-[90%] sm:w-[280px] md:w-[300px] lg:w-[350px] min-h-[240px] lg:min-h-[260px]"
      >
        <img
          src={image}
          alt="img"
          className="w-full h-[130px] object-cover rounded-t-md"
        />

        <div className="flex flex-col justify-center items-center p-3 text-center">
          <p className="text-xs sm:text-sm font-medium text-black">{date}</p>
          <h1 className="text-sm sm:text-base font-bold mt-1 text-black">{title}</h1>
          <p className="text-xs sm:text-sm font-light mt-2 text-black">{author}</p>
        </div>
      </div>
    </>
  );
}
