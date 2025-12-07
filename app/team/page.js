import Image from "next/image";
import NavBar from "../compnents/NavBar";
import Footer from "../compnents/Footer"; 
import CardC from "../compnents/cardC";  
const teamData =
  [
  {
    "key": 1,
    "name": "Amrithraj N",
    "role": "Organizer",
    "username": "@ritham404",
    
  },
  {
    "key": 2,
    "name": "Himanshu Shetty",
    "role": "Organizer",
    "username": "@himanshukt03"
  },
  {
    "key": 3,
    "name": "Pratheek G Shetty",
    "role": "Organizer",
    "username": "@techshetty"
  },
  {
    "key": 4,
    "name": "Shreelakshmi Pai",
    "role": "Organizer",
    "username": "@Shree-Pai"
  },
  {
    "key": 5,
    "name": "Ashika",
    "role": "SOSWC Representative",
    "username": "@askashika"
  },
  {
    "key": 6,
    "name": "Aaron Fernandes",
    "role": "Community Member",
    "username": "@aaronfernandes21"
  },
  {
    "key": 7,
    "name": "Advaith S Shetty",
    "role": "Community Member",
    "username": "@advaithsshetty"
  },
  {
    "key": 8,
    "name": "Ananth Hegde",
    "role": "Community Member",
    "username": "@anth_hgde"
  },
  {
    "key": 9,
    "name": "Apeksha L Naik",
    "role": "Community Member",
    "username": "@Apeksha-L-Naik"
  },
  {
    "key": 10,
    "name": "Evita Barboza",
    "role": "Community Member",
    "username": "@evitabarboza"
  },
  {
    "key": 11,
    "name": "Neha Shetty",
    "role": "Community Member",
    "username": "@neha-shetty-17"
  },
  {
    "key": 12,
    "name": "Nithesh Alva",
    "role": "Community Member",
    "username": "@Nitheshalva"
  },
  {
    "key": 13,
    "name": "Puvith kumar",
    "role": "Community Member",
    "username": "@puvithk"
  },
  {
    "key": 14,
    "name": "Ranjana M Suvarna",
    "role": "Community Member",
    "username": "@msranjana"
  },
  {
    "key": 15,
    "name": "Rithuparna K.S",
    "role": "Community Member",
    "username": "@rithuparnaks"
  },
  {
    "key": 16,
    "name": "Shreya Shenoy",
    "role": "Community Member",
    "username": "@shreya-shen"
  },
  {
    "key": 17,
    "name": "Manas S",
    "role": "Community Member",
    "username": "@Manas-salian"
  },
  {
    "key": 18,
    "name": "Vighnesh bhat",
    "role": "Community Member",
    "username": "@Bhatvighnesh"
  },
  {
    "key": 19,
    "name": "Vivek Neeralagi",
    "role": "Community Member",
    "username": "@VivekNeer"
  },
  {
    "key": 20,
    "name": "Yash Laxman",
    "role": "Community Member",
    "username": "@JustModo"
  }
]

 const alumniData = [
  { "key": 1, "name": "Abhishek P", "role": "Alumni", "username": "@AbhiiGatty" },
  { "key": 2, "name": "Achal", "role": "Alumni", "username": "@Achal" },
  { "key": 3, "name": "Achal Venkatesh K", "role": "Alumni", "username": "@AchalVenkatesh" },
  { "key": 4, "name": "Adib G Ahamed", "role": "Alumni", "username": "@kalopsiaa" },
  { "key": 5, "name": "Aditya SN", "role": "Alumni", "username": "@printAdityasn" },
  { "key": 6, "name": "Afroz Hussain", "role": "Alumni", "username": "@coderhawk999" },
  { "key": 7, "name": "Akashdeep Bhagat", "role": "Alumni", "username": "@akashdeepb" },
  { "key": 8, "name": "Akkil M G", "role": "Alumni", "username": "@AkkilMG" },
  { "key": 9, "name": "Akshay Ram Bhat", "role": "Alumni", "username": "@akshayrb22" },
  { "key": 10, "name": "Hiba Fathima", "role": "Alumni", "username": "@ambx" },
  { "key": 11, "name": "Ananya P K", "role": "Alumni", "username": "@Ananyapk25" },
  { "key": 12, "name": "Ankush Ananth Bhat", "role": "Alumni", "username": "@BhatAnkush" },
  { "key": 13, "name": "Anmol Soni", "role": "Alumni", "username": "@anmolsoni1" },
  { "key": 14, "name": "Arjun Suvarna", "role": "Alumni", "username": "@arjunsuvarna1" },
  { "key": 15, "name": "Ashwin KP", "role": "Alumni", "username": "@aswykp" },
  { "key": 16, "name": "Basavarajeshwari Ambi", "role": "Alumni", "username": "@Basavarajeshwari-Ambi" },
  { "key": 17, "name": "Bhavish A", "role": "Alumni", "username": "@bhavishassai" },
  { "key": 18, "name": "Bhavish S Shetty", "role": "Alumni", "username": "@Bhavishhh" },
  { "key": 19, "name": "Bhumi Khokhani", "role": "Alumni", "username": "@bhumikhokhani" },
  { "key": 20, "name": "Vishnu N V", "role": "Alumni", "username": "@carbonxx" },
  { "key": 21, "name": "Chaman K", "role": "Alumni", "username": "@chaman-k" },
  { "key": 22, "name": "Charmi Sanjay Meswani", "role": "Alumni", "username": "@charmy11" },
  { "key": 23, "name": "Chirag", "role": "Alumni", "username": "@chiragak" },
  { "key": 24, "name": "Deveesh Shetty", "role": "President", "username": "@dev-shetty" },
  { "key": 25, "name": "Dhanush Bangera", "role": "Alumni", "username": "@Dhanushp" },
  { "key": 26, "name": "Adithya M Suvarna", "role": "Alumni", "username": "@ekokratos" },
  { "key": 27, "name": "Faiq Chilmi", "role": "Alumni", "username": "@faiqc" },
  { "key": 28, "name": "Fawaz Abid Hussain", "role": "Alumni", "username": "@fauwara" },
  { "key": 29, "name": "Gaurav Rao J", "role": "Alumni", "username": "@gauravraoj" },
  { "key": 30, "name": "Gowtham P B", "role": "Alumni", "username": "@GowthamPB" },
  { "key": 31, "name": "Mohammed Haroon", "role": "Alumni", "username": "@MHAROON18" },
  { "key": 32, "name": "Harsha S Rao", "role": "Alumni", "username": "@happyhuman13" },
  { "key": 33, "name": "Musthaq Ahamad", "role": "Alumni", "username": "@haxzie" },
  { "key": 34, "name": "Heba Bashir Ibrahim", "role": "Alumni", "username": "@hebbaaaa" },
  { "key": 35, "name": "Hussain Muhammad Bilal", "role": "Alumni", "username": "@muhammad-wego" },
  { "key": 36, "name": "Jehad Mohamed", "role": "Alumni", "username": "@imhighoncoffee" },
  { "key": 37, "name": "Krishnanand Bhat", "role": "Alumni", "username": "@Krxshna" },
  { "key": 38, "name": "Kshiteesh Desai", "role": "Alumni", "username": "@kshiteeshdesai" },
  { "key": 39, "name": "Livya Pereira", "role": "Alumni", "username": "@Livyapereira08" },
  { "key": 40, "name": "Maithri Vishnu Hebbar", "role": "Alumni", "username": "@maithrivh" },
  { "key": 41, "name": "Manjunath Bhat K", "role": "Alumni", "username": "@thatcodechap" },
  { "key": 42, "name": "Melwin Lobo", "role": "Alumni", "username": "@melwinlobo18" },
  { "key": 43, "name": "Michel Rego", "role": "Alumni", "username": "@michelrego" },
  { "key": 44, "name": "Monish Shetty", "role": "Alumni", "username": "@alpha-oss" },
  { "key": 45, "name": "Monisha Tarkar", "role": "Alumni", "username": "@monisha16" },
  { "key": 46, "name": "Nathaniel Ryan Mathew", "role": "Alumni", "username": "@nathanielmathew" },
  { "key": 47, "name": "Navneeth Krishna", "role": "Alumni", "username": "@mnavneethkrishna" },
  { "key": 48, "name": "Navya Bhat", "role": "Alumni", "username": "@navyabhat98" },
  { "key": 49, "name": "Nihara", "role": "Alumni", "username": "@NiharaPadil" },
  { "key": 50, "name": "Prakyath", "role": "Alumni", "username": "@Prakyath98" }
]


export default function Team(){
    return(
        <>
        <NavBar/>
        
        {/* Hero Section */}
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
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-white text-4xl sm:text-5xl font-bold">Our Team</h1>
              <h2 className="text-white text-lg sm:text-2xl font-extrabold mt-2">
                Meet the passionate individuals driving our community forward
              </h2>
            </div>
        </div>

        {/* Co-Ordinator */}
        <div className="w-full flex flex-col items-center pt-10 px-4 sm:px-30">
            <h1 className="text-2xl text-black font-bold mb-6">Co-Ordinator</h1>
            <div className="flex flex-col items-center justify-center w-full sm:w-[400px] shadow-[0_0_8px_rgba(0,0,0,0.25)] my-6 p-4">
                <img 
                    src="https://sosc.org.in/team/mustafa_asthikodi.jpg"
                    alt="co-ordinator" 
                    className="rounded-full h-[100px] w-[100px]"
                />
                <h1 className="text-black font-bold my-2 text-center">Dr. Mustafa Basthikodi</h1>
                <h3 className="text-gray-950 text-center">Faculty Coordinator</h3>
            </div>
        </div>

        {/* Community Members */}
        <div className="w-full flex flex-col items-center pt-10 px-4 sm:px-10">
            <h1 className="text-3xl text-black font-bold mb-6 text-center">Community Members</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
                {teamData.map((data) => (
                    <CardC
                        key={data.key}
                        name={data.name}
                        role={data.role}
                        username={data.username}
                    />
                ))}
            </div>
        </div>

        {/* Alumni */}
        <div className="w-full flex flex-col items-center pt-10 px-4 sm:px-10">
            <h1 className="text-3xl text-black font-bold mb-6 text-center">Alumni</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
                {alumniData.map((data) => (
                    <CardC
                        key={data.key}
                        name={data.name}
                        role={data.role}
                        username={data.username}
                    />
                ))}
            </div>
        </div>

        <Footer/>
        </>
    );
}