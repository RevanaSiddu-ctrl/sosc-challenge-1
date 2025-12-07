export default function CardC({ image, name, role }) {
  return (
    <>
      
      <div className="flex flex-col items-center justify-center w-full h-auto py-8 shadow-[0_0_8px_rgba(0,0,0,0.25)] rounded-xl bg-white hover:scale-105 transition-transform duration-300">
        <img
          src={image}
          alt="member"
          className="rounded-full h-[100px] w-[100px] object-cover border-4 border-gray-100"
        />
        <h1 className="text-black font-bold text-xl mt-4 text-center px-2">
          {name}
        </h1>
        <h3 className="text-gray-600 font-medium mt-1 text-center px-2">
          {role}
        </h3>
      </div>
    </>
  );
}