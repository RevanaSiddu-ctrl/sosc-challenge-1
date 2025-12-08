

export default function CardC({image, name, role}){
    return(
        <>
            <div className="flex flex-col items-center justify-center min-h-[250px] w-full max-w-[400px] shadow-[0_0_8px_rgba(0,0,0,0.25)] rounded-lg p-7 bg-white hover:shadow-xl transition-shadow">
                <img src={image}
                alt="member" 
                height={100} 
                width={100} 
                className="rounded-[50%] h-[90px] w-[90px] object-cover mb-4"/>
                <h1 className="text-black font-semibold my-1 text-lg">{name}</h1>
                <h3 className="text-gray-700 text-sm md:text-base">{role}</h3>
                </div>
        </>
    )
}