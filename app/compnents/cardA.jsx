export default function CardA({ title, date, image, author }) {
  return (
    <>
      <div
        className="
          bg-white flex flex-col justify-center shadow-md shadow-black/40 rounded-md
          w-full max-w-[350px] md:w-[350px]
          h-auto md:h-[200px]
        "
      >
        <img
          src={image}
          alt="img"
          className="
            w-full object-cover rounded-t-md
            h-[150px] md:h-[45%]
          "
        />

        <div className="flex flex-col justify-center items-center p-2">
          <p className="text-sm md:text-md font-medium mt-1 text-black">
            {date}
          </p>
          <h1 className="text-md font-bold mt-1 text-center text-black">
            {title}
          </h1>
          <p className="text-sm font-extralight mt-2 text-black">
            {author}
          </p>
        </div>
      </div>
    </>
  );
}
