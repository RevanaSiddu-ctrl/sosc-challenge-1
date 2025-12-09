

export default function CardC({image, name, role,email}){
    return(
        <>
            <div className="flex flex-col items-center justify-center h-[220px] w-[400px] shadow-[0_0_8px_rgba(0,0,0,0.25)] my-9 space-y-4">
                <img src={image}
                alt="member" 
                height={100} 
                width={100} 
                className="rounded-[50%] h-[80px] w-[80px]"/>
                <h1 className="text-black font-semibold my-2">{name}</h1>
                <h3 className="text-gray-600 text-[12px]">{role}</h3>
                <h3 className="text-[12px] text-blue-600">{email}</h3>
                </div>
        </>
    )
}