

export default function CardC({image, name, role}){
    return(
        <>
            <div className="flex flex-col items-center justify-center h-[200px] w-[350px] shadow-[0_0_8px_rgba(0,0,0,0.25)]">
                <img src={image}
                alt="member" 
                height={100} 
                width={100} 
                className="rounded-[50%] h-[80px] w-[80px]"/>
                <h1 className="text-black font-bold mt-4 mb-1">{name}</h1>
                <h3 className="text-black/50 text-xs">{role}</h3>
                </div>
        </>
    )
}