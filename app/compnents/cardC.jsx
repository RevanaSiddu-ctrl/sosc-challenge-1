export default function CardC({ image, name, role }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[250px] w-[400px] shadow-[0_0_8px_rgba(0,0,0,0.25)]">
        <img
          src={image}
          alt="member"
          height={100}
          width={100}
          className="rounded-full size-20 "
        />
        <h1 className="text-black font-bold my-2">{name}</h1>
        <h3 className="text-gray-950">{role}</h3>
      </div>
    </>
  );
}
