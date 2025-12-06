export default function CardC({ image, name, role, link }) {
  return (
    <div className="flex flex-col items-center justify-center h-[300px] w-[250px] shadow-md p-4 rounded-lg">
      
      <img src={image} alt={name} className="h-[100px] w-[100px] rounded-full" />

      <h1 className="text-black font-bold mt-3">{name}</h1>
      <h2 className="text-gray-700">{role}</h2>

      {link && (
        <a 
          href={link}
          target="_blank"
          className="text-blue-600 mt-2 underline"
        >
          View Profile
        </a>
      )}

    </div>
  );
}
