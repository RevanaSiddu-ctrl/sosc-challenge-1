export default function CardA({ title, date, image, author }) {
  return (
    <>
      <div className="md:h-[280px] md:w-[260px] w-full bg-white flex flex-col shadow-md shadow-black/20 rounded-md overflow-hidden">

        <img
          src={image}
          alt="img"
          className="h-[50%] w-full object-cover"
        />

        <div className="flex flex-col justify-center items-center px-4 py-3">

          <p className="text-sm font-medium text-black/50">{date}</p>

          <h1 className="text-base font-semibold text-center text-black mt-1">
            {title}
          </h1>

          <p className="text-xs font-light text-black/60 mt-1">{author}</p>

        </div>
      </div>
    </>
  );
}
