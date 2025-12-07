export default function CardA({ title, date, image, author }) {
  return (
    <>
      {/* Fixes:
         1. Changed w-[350px] to w-full max-w-[350px] (Responsive width)
         2. Added mx-auto (Centers the card if it's the only one in a column)
         3. Changed h-[200px] to h-auto (Allows card to grow if text is long)
      */}
      <div className="w-full max-w-[350px] bg-white flex flex-col shadow-md shadow-black/40 rounded-md overflow-hidden mx-auto">
        <img
          src={image}
          alt="img"
          // Set a fixed height for the image so it doesn't squash
          className="h-[120px] w-full object-cover"
        />

        <div className="flex flex-col justify-center items-center p-3">
          <p className="text-md font-medium mt-1 text-black">{date}</p>
          <h1 className="text-md font-bold mt-1 text-center text-black leading-tight">{title}</h1>
          <p className="text-sm font-extralight mt-2 text-black">{author}</p>
        </div>
      </div>
    </>
  );
}



