export default function CardA({ title, date, image, author }) {
  return (
    <>
      <div className="h-[200px] w-full max-w-[350px] bg-white flex flex-col justify-center shadow-md shadow-black/40 rounded-md">
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



