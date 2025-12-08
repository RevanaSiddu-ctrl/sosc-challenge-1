export default function CardA({ title, date, image, author }) {
  return (
    <>
      <div className="h-auto min-h-[280px] w-full max-w-[350px] bg-white flex flex-col shadow-md shadow-black/40 rounded-md overflow-hidden hover:shadow-lg transition-shadow">
        <img
          src={image}
          alt="img"
          className="h-[180px] w-full object-cover"
        />

        <div className="flex flex-col justify-center items-center p-5">
          <p className="text-sm font-medium text-gray-600 mb-3">{date}</p>
          <h1 className="text-lg font-bold text-center text-black mb-3 leading-tight">{title}</h1>
          <p className="text-sm font-normal text-gray-600">{author}</p>
        </div>
      </div>
    </>
  );
}



