export default function CardC({ image, name, role }) {
  return (
    <>
      <div
        className="
          flex flex-col items-center justify-center
          w-full max-w-[400px] md:w-[400px]
          h-auto md:h-[250px]
          shadow-[0_0_8px_rgba(0,0,0,0.25)]
          my-9
          p-4 md:p-0
        "
      >
        <img
          src={image}
          alt="member"
          height={100}
          width={100}
          className="
            rounded-[50%]
            h-[70px] w-[70px]
            md:h-[80px] md:w-[80px]
          "
        />
        
        <h1 className="text-black font-bold my-2 text-center">{name}</h1>
        <h3 className="text-gray-950 text-center">{role}</h3>
      </div>
    </>
  );
}
