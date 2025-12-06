
'use client';

import Image from "next/image";
import NavBar from "../compnents/NavBar";
import Footer from "../compnents/Footer"; 
import CardC from "../compnents/cardC";  
import { useState, useEffect } from "react";

// Here I mentioned all Team Members Data, with it every clickable profile will be redirect to github profile.


const teamData = [
  { id: 1, image: "https://avatars.githubusercontent.com/u/121810409?v=4", name: "Amrithraj N", role: "Organizer", github: "ritham404" },
  { id: 2, image: "https://avatars.githubusercontent.com/u/149948316?v=4", name: "Himanshu Shetty", role: "Organizer", github: "himanshukt03" },
  { id: 3, image: "https://github.com/techshetty.png", name: "Pratheek G Shetty", role: "Organizer", github: "techshetty" },
  { id: 4, image: "https://github.com/Shree-Pai.png", name: "Shreelakshmi Pai", role: "Organizer", github: "Shree-Pai" },
  { id: 5, image: "https://avatars.githubusercontent.com/u/123456789?v=4", name: "Ashika", role: "SOSWC Representative", github: "askashika" },
  { id: 6, image: "https://github.com/aaronfernandes21.png", name: "Aaron Fernandes", role: "Community Member", github: "aaronfernandes21" },
  { id: 7, image: "https://github.com/advaithsshetty.png", name: "Advaith S Shetty", role: "Community Member", github: "advaithsshetty" },
  { id: 8, image: "https://sosc.org.in/github_avatar.svg", name: "Ananth Hegde", role: "Community Member", github: "anth_hgde" },
  { id: 9, image: "https://github.com/Apeksha-L-Naik.png", name: "Apeksha L Naik", role: "Community Member", github: "Apeksha-L-Naik" },
  { id: 10, image: "https://github.com/evitabarboza.png", name: "Evita Barboza", role: "Community Member", github: "evitabarboza" },
  { id: 11, image: "https://github.com/neha-shetty-17.png", name: "Neha Shetty", role: "Community Member", github: "neha-shetty-17" },
  { id: 12, image: "https://github.com/Nitheshalva.png", name: "Nithesh Alva", role: "Community Member", github: "Nitheshalva" },
  { id: 13, image: "https://github.com/puvithk.png", name: "Puvith kumar", role: "Community Member", github: "puvithk" },
  { id: 14, image: "https://github.com/msranjana.png", name: "Ranjana M Suvarna", role: "Community Member", github: "msranjana" },
  { id: 15, image: "https://github.com/rithuparnaks.png", name: "Rithuparna K.S", role: "Community Member", github: "rithuparnaks" },
  { id: 16, image: "https://github.com/shreya-shen.png", name: "Shreya Shenoy", role: "Community Member", github: "shreya-shen" },
  { id: 17, image: "https://github.com/Manas-salian.png", name: "Manas S", role: "Community Member", github: "Manas-salian" },
  { id: 18, image: "https://avatars.githubusercontent.com/u/123456789?v=4", name: "Vighnesh bhat", role: "Community Member", github: "Bhatvighnesh" },
  { id: 19, image: "https://github.com/VivekNeer.png", name: "Vivek Neeralagi", role: "Community Member", github: "VivekNeer" },
  { id: 20, image: "https://github.com/JustModo.png", name: "Yash Laxman", role: "Community Member", github: "JustModo" },
];

export default function Team(){
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredTeamData = teamData.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return(
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}>
      <NavBar/>
      <div className="w-full h-[400px] relative mt-[90px] overflow-x-hidden">
        <Image
          src="https://sosc.org.in/_astro/team.DFWwMBWD_Snw2F.webp"
          alt="img"
          width={100}
          height={100}
          unoptimized
          loading="eager"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Our Team</h1>
          <h1 className="text-white text-2xl font-extrabold">
            Meet the passionate individuals driving our community forward
          </h1>
        </div>
      </div>

      <div className="w-full h-[350px] flex flex-col items-start pt-10 pl-30">
        <h1 className="text-2xl text-black font-bold">Co-Ordinator</h1>
        <div className="flex flex-col items-center justify-center h-[300px] w-[400px] shadow-[0_0_8px_rgba(0,0,0,0.25)] my-9">
          <img src="https://sosc.org.in/team/mustafa_asthikodi.jpg"
            alt="co-ordinator" 
            height={100} 
            width={100} 
            className="rounded-[50%] h-[100px] w-[100px]"/>
          <h1 className="text-black font-bold my-2">Dr. Mustafa Basthikodi</h1>
          <h3 className="text-gray-950">Faculty Coordinator</h3>
        </div>
      </div>

      <div className="w-full flex flex-col items-start pt-10 pl-30">
        <h1 className="text-2xl text-black font-bold">Community Members</h1>
        <div className="flex justify-center mt-6">
          <input
            type="text"
            placeholder="Search team members..."
            className="border border-gray-300 rounded px-4 py-2 w-full max-w-md"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex justify-center items-center mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 px-4 justify-center items-center">
            {filteredTeamData.map((data) => (
              <a href={`https://github.com/${data.github}`} target="_blank" rel="noopener noreferrer" key={data.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardC
                  image={data.image}
                  name={data.name}
                  role={data.role}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 right-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-blue-500 text-white rounded-full p-3 shadow-lg"
        >
          ↑
        </button>
      </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 bg-gray-800 text-white rounded-full p-2"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      <Footer/>
    </div>
  );
}

