export default function CardA({ title, date, image, author }) {
  return (
    <>
      
      <div className="w-full bg-white flex flex-col shadow-md shadow-black/40 rounded-md overflow-hidden hover:shadow-xl transition-all duration-300">
        
       
        <img
          src={image}
          alt="img"
          className="h-48 w-full object-cover"
        />

        <div className="flex flex-col justify-center items-center p-4 gap-2">
          <p className="text-sm font-medium text-gray-500">{date}</p>
          <h1 className="text-lg font-bold text-center text-black leading-tight">
            {title}
          </h1>
          <p className="text-sm font-light text-gray-700 mt-1">
            By <span className="font-medium">{author}</span>
          </p>
        </div>
      </div>
    </>
  );
}