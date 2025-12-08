export default function CardA({ title, date, image, author }) {
  return (
    <>
      <div className="w-full max-w-xs sm:max-w-sm bg-white flex flex-col overflow-hidden rounded-lg shadow-md shadow-black/20 transition-shadow hover:shadow-lg">
      <img
          src={image}
          alt="img"
          className="h-[45%] w-full object-cover rounded-t-md"
        />

        <div className="flex flex-col justify-center items-center p-1">
          <p className="text-md font-medium mt-1 text-black">{date}</p>
          <h1 className="text-md font-bold mt-1 text-center text-black">{title}</h1>
          <p className="text-sm font-extralight mt-2 text-black">{author}</p>
        </div>
      </div>
    </>
  );
}



