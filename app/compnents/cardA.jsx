export default function CardA({ title, date, image, author }) {
  return (
    <>
      <div className="h-auto min-h-[280px] w-full max-w-[350px] bg-white flex flex-col shadow-md shadow-black/40 rounded-md overflow-hidden hover:shadow-lg transition-shadow">
        <img
          src={image}
          alt="img"
          className="h-[180px] w-full object-cover"
        />

        <div className="flex flex-col justify-center items-center p-4">
          <p className="text-sm font-medium text-gray-600 mb-2">{date}</p>
          <h1 className="text-base md:text-lg font-semibold text-center text-black mb-2 leading-tight">{title}</h1>
          <p className="text-xs md:text-sm font-normal text-gray-600">{author}</p>
        </div>
      </div>
    </>
  );
}



