export default function CardA({ title, date, image, author, para, large }) {
  return (
    <div
      className={
        "font-[poppins] bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition " +
        (large ? "h-[670px]" : "h-80")
      }
    >
      <img
        src={image}
        alt="img"
        className={
          (large ? "h-[60%]" : "h-[40%]") +
          " w-full object-cover"
        }
      />

      <div className="p-5 flex flex-col gap-2">
        <p className="text-sm text-gray-500">{date}</p>

        <h1
          className={
            "font-semibold text-gray-900 leading-snug " +
            (large ? "text-2xl" : "text-lg")
          }
        >
          {title}
        </h1>

        {large && (
          <p className="text-sm text-gray-600 line-clamp-4">
            {para}
          </p>
        )}

        <p className="text-sm text-gray-500 mt-auto">{author}</p>
      </div>
    </div>
  );
}

