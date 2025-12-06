import Image from "next/image";
import NavBar from "../compnents/NavBar";
import Footer from "../compnents/Footer";
import CardC from "../compnents/cardC";
const teamData = [
  {
    id: 1,
    name: "Amrithraj N",
    role: "Organizer",
    image: "https://github.com/ritham404.png",
  },
  {
    id: 2,
    name: "Himanshu Shetty",
    role: "Organizer",
    image: "https://github.com/himanshukt03.png",
  },
  {
    id: 3,
    name: "Pratheek G Shetty",
    role: "Organizer",
    image: "https://github.com/techshetty.png",
  },
  {
    id: 4,
    name: "Shreelakshmi Pai",
    role: "Organizer",
    image: "https://github.com/Shree-Pai.png",
  },
  {
    id: 5,
    name: "Ashika",
    role: "SOSWC Representative",
    image: "https://github.com/askashika.png",
  },
  {
    id: 6,
    name: "Aaron Fernandes",
    role: "Community Member",
    image: "https://github.com/aaronfernandes21.png",
  },
  {
    id: 7,
    name: "Advaith S Shetty",
    role: "Community Member",
    image: "https://github.com/advaithsshetty.png",
  },
  {
    id: 8,
    name: "Ananth Hegde",
    role: "Community Member",
    image: "https://github.com/Apeksha-L-Naik.png",
  },
  {
    id: 9,
    name: "Apeksha L Naik",
    role: "Community Member",
    image: "https://github.com/Apeksha-L-Naik.png",
  },
  {
    id: 10,
    name: "Evita Barboza",
    role: "Community Member",
    image: "https://github.com/evitabarboza.png",
  },
  {
    id: 11,
    name: "Neha Shetty",
    role: "Community Member",
    image: "https://github.com/neha-shetty-17.png",
  },
  {
    id: 12,
    name: "Nithesh Alva",
    role: "Community Member",
    image: "https://github.com/Nitheshalva.png",
  },
  {
    id: 13,
    name: "Puvith Kumar",
    role: "Community Member",
    image: "https://github.com/puvithk.png",
  },
  {
    id: 14,
    name: "Ranjana M Suvarna",
    role: "Community Member",
    image: "https://github.com/msranjana.png",
  },
  {
    id: 15,
    name: "Rithuparna K.S",
    role: "Community Member",
    image: "https://github.com/rithuparnaks.png",
  },
  {
    id: 16,
    name: "Shreya Shenoy",
    role: "Community Member",
    image: "https://github.com/shreya-shen.png",
  },
  {
    id: 17,
    name: "Manas S",
    role: "Community Member",
    image: "https://github.com/Manas-salian.png",
  },
  {
    id: 18,
    name: "Vighnesh Bhat",
    role: "Community Member",
    image: "https://github.com/Bhatvighnesh.png",
  },
  {
    id: 19,
    name: "Vivek Neeralagi",
    role: "Community Member",
    image: "https://github.com/VivekNeer.png",
  },
  {
    id: 20,
    name: "Yash Laxman",
    role: "Community Member",
    image: "https://github.com/JustModo.png",
  },
];

export default function Team() {
  return (
    <div>
      <NavBar />
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden text-white md:min-h-[80vh]">
        <div className="w-full h-[510px] relative overflow-x-hidden">
          <Image
            src="https://sosc.org.in/_astro/team.DFWwMBWD_Snw2F.webp"
            alt="img"
            width={100}
            height={100}
            unoptimized
            loading="eager"
            className="w-full h-full absolute object-cover brightness-50"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-white text-5xl font-bold">Our Team</h1>
            <h1 className="text-white text-2xl font-extrabold">
              Meet the passionate individuals driving our community forward
            </h1>
          </div>
        </div>
      </section>
      <div className="w-full h-[350px] flex flex-col items-start pt-10 pl-30">
        <h1 className="text-2xl text-black font-bold">Co-Ordinator</h1>

        <div className="flex flex-col items-center justify-center h-[300px] w-[400px] shadow-[0_0_8px_rgba(0,0,0,0.25)] my-9">
          <img
            src="https://sosc.org.in/team/mustafa_asthikodi.jpg"
            alt="co-ordinator"
            height={100}
            width={100}
            className="rounded-full h-[100px] w-[100px]"
          />
          <h1 className="text-black font-bold my-2">Dr. Mustafa Basthikodi</h1>
          <h3 className="text-gray-950">Faculty Coordinator</h3>
        </div>
      </div>
      <div className="w-full flex flex-col items-start pt-10 pl-30">
        <h1 className="text-2xl text-black font-bold">Community Members</h1>
        <div className="flex justify-center items-center mt-10">
          <div className="grid grid-cols-3 gap-20 mt-10  px-10  justify-center items-center">
            {teamData.map((data) => (
              <CardC
                key={data.id}
                image={data.image}
                name={data.name}
                role={data.role}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
