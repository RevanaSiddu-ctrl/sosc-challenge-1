export default function CardA({ title, date, image, author }) {
  return (
    <>
      <div
        className="
          w-full 
          bg-white 
          shadow-md 
          shadow-black/20 
          rounded-lg 
          overflow-hidden 
          hover:shadow-xl 
          transition 
          duration-300
          p-4
        "
      >
        {/* IMAGE */}
        <img
          src={image}
          alt="img"
          className="w-full h-40 md:h-48 object-cover rounded-md"
        />

        {/* CONTENT */}
        <div className="mt-3">
          <p className="text-sm font-medium text-gray-600">{date}</p>

          <h1 className="text-lg font-bold mt-1 text-black leading-tight">
            {title}
          </h1>

          <p className="text-sm font-light mt-2 text-gray-700">{author}</p>
        </div>
      </div>
    </>
  );
}
