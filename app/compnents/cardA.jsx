export default function CardA({ title, date, image, author }) {
  return (
    <>
      <div className="md:h-[300px] md:w-[250px] w-full h-fit md:px-0 bg-white flex flex-col justify-center shadow-md shadow-black/10">
        <img
          src={image}
          alt="img"
          className="h-[45%] w-full object-fill"
        />

        <div className="flex flex-col justify-center items-start px-5 space-y-1">
          <p className="text-sm font-medium text-black/50 mt-5">{date}</p>
          <h1 className="text-sm font-bold text-black">{title}</h1>
          <p className="text-xs font-extralight mt-1 text-black/40 mb-5">{author}</p>
        </div>
      </div>
    </>
  );
}



