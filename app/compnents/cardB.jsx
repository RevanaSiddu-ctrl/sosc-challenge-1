export default function CardB({ image, title, location, date }) {
  return (
     
    <div className="flex md:flex-row flex-col md:w-full w-[450px] md:h-[200px] bg-white shadow-md overflow-hidden cursor-pointer hover:">
  
    
      
      <div className="md:w-[80%] h-full md:pt-10 md:pb-10 md:pl-0 pl-10 md:pr-0 pr-10  flex items-center">
        <img
         
          src={image}
          alt={title}
          className="w-full h-full object-cover "
        />
      </div>

      <div className="w-[80%] md:p-8 p-5 flex flex-col justify-between">

        <div>
          <h1 className="text-xl font-bold text-black hover:text-[oklch(77.034%_0.20078_152.412)]">{title}</h1>
          <p className="text-gray-700 text-sm mt-2">{location}</p>
        </div>

        <p className="text-gray-500 text-sm">{date}</p>
      </div>
     
    </div>
    
  );
}
