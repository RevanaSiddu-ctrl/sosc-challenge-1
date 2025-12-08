export default function CardC({ image, name, role }) {
  return (
    <>
      <div
        className=" flex flex-col items-center justify-center h-[230px] sm:h-[250px] w-[90%] sm:w-[300px] md:w-[350px] lg:w-[400px] shadow-[0_0_8px_rgba(0,0,0,0.25)] my-6 sm:my-9 mx-auto rounded-lg
        "
      >
        <img
          src={image}
          alt="member"
          height={100}
          width={100}
          className="rounded-[50%] h-[70px] w-[70px] sm:h-[80px] sm:w-[80px]"
        />
        <h1 className="text-black font-bold my-2 text-sm sm:text-base text-center">{name}</h1>
        <h3 className="text-gray-950 text-xs sm:text-sm text-center">{role}</h3>
      </div>
    </>
  );
}
