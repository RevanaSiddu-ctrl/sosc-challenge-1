

export default function CardC({image, name, role}){
    return(
        <>
            <div className="flex flex-col items-center justify-center min-h-[200px] w-full sm:w-[300px] max-w-[400px] shadow-[0_0_8px_rgba(0,0,0,0.25)] my-6 p-4 ">
                <img src={image}
                alt="member" 
                height={100} 
                width={100} 
                className="rounded-full h-[80px] w-[80px] object-cover"/>
                <h1 className="text-black font-bold my-2">{name}</h1>
                <h3 className="text-gray-950">{role}</h3>
                </div>
        </>
    )
}