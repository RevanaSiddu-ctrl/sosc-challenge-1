"use client"
import { useRouter } from "next/navigation";



export default function CardC({key, image, name, role,username}){
    const router = useRouter();
    return(
        <>
            <div  key={key} className="md:flex flex-col items-center justify-center h-[250px] w-[400px] shadow-[0_0_8px_rgba(0,0,0,0.25)] my-9 ">
                <img src={`https://github.com/${username.replace("@", "")}.png`}
                alt="member" 
                height={100} 
                width={100} 
                className="rounded-[50%] h-30 w-30"/>
                <h1 className="text-black font-bold my-2">{name}</h1>
                <h3 className="text-gray-950">{role}</h3>
                <h2 className="text-blue-400 cursor-pointer" onClick={()=>router.push(`https://github.com/${username.replace("@", "")}`)} >{username}</h2>
                </div>
        </>
    )
}