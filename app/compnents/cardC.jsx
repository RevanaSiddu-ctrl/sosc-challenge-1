

export default function CardC({image, name, role}){
    return(
        <>
            <div className="flex flex-col items-center justify-center min-h-[250px] w-full max-w-[400px] shadow-[0_0_8px_rgba(0,0,0,0.25)] rounded-lg p-8 bg-white hover:shadow-xl transition-shadow">
                <img src={image}
                alt="member" 
                height={100} 
                width={100} 
                className="rounded-[50%] h-[100px] w-[100px] object-cover mb-4"/>
                <h1 className="text-black font-bold my-2 text-xl">{name}</h1>
                <h3 className="text-gray-700 text-base">{role}</h3>
                </div>
        </>
    )
}