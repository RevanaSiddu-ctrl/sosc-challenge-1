export default function CardC({ image, name, role }) {
  return (
    <div className="flex flex-col items-center justify-center w-full sm:w-72 md:w-80 shadow-[0_0_8px_rgba(0,0,0,0.25)] my-6 p-4">
      <img
        src={image}
        alt="member"
        className="rounded-full h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 object-cover"
      />
      <h1 className="text-black font-bold my-2 text-sm sm:text-md md:text-lg text-center">{name}</h1>
      <h3 className="text-gray-800 text-xs sm:text-sm md:text-md text-center">{role}</h3>
    </div>
  );
}
