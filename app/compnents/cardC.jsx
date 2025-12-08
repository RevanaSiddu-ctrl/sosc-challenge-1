export default function CardC({ image, name, role }) {
 return (
 <div className="flex flex-col items-center justify-center h-auto w-full shadow-[0_0_8px_rgba(0,0,0,0.25)] py-8 rounded-lg bg-white">
 <img src={image}
 alt="member"
 height={100}
 width={100}
 className="rounded-[50%] h-[100px] w-[100px] object-cover" />
 <h1 className="text-black font-bold my-3 text-center px-4">{name}</h1>
 <h3 className="text-gray-600 text-sm text-center px-4">{role}</h3>
 </div>
 )
}