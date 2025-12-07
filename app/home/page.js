import NavBar from "../compnents/NavBar"
import Footer from "../compnents/Footer";

export default function HomePage(){
    return(
        <div  className="flex flex-col gap-20">
<NavBar/>

<div className="mx-auto flex flex-col gap-3 ml-100 mr-100 mt-60   ">
    <img  className="h-12 w-fit flex" src="https://sosc.org.in/_astro/sosc_logo.DBzxZ_Go_Z10hDC0.svg"></img>
    <h1 className="font-semibold text-4xl flex">Sahyadri Open Source Community</h1>
    <p className="font-extralight text-2xl flex text-gray-700">
        A community driven by tech enthusiasts and open-source contributors, to help young students become part of the open-source ecosystem through training and skill development.
    </p>
    <button className=" bg-[oklch(77.034%_0.20078_152.412)] rounded-3xl text-white px-6 py-2 w-fit"> Community Guidelines</button>
</div>

<div className="flex flex-col md:flex-row w-full gap-10  mx-auto mt-40 px-6">
  <img
    className="w-200"
    src="https://sosc.org.in/_astro/hero_github.CjpTNEJ9_lPP1X.webp"/>

  <div className="flex flex-col gap-3 max-w-full mt-20">
    <h1 className="font-semibold text-4xl">
      Get Trained by Experts
    </h1>

    <p className="font-extralight text-2xl text-gray-700">
      SOSC is all about helping each other to learn and improve.
      We conduct workshops and trainings led by speakers from other
      technical communities and student experts. Keeping up to date
      with the latest technologies and learning new things is what
      most of love. Here is your chance to attend workshops, training
      and even host non-profit events to help others.
    </p>
  </div>
</div>

<div className="flex flex-col md:flex-row w-full gap-10  mx-auto mt-40 px-6">
    <div className="flex flex-col gap-3 max-w-full mt-20">
        <h1 className="font-semibold text-4xl">
      Explore clubs and Activities
    </h1>

    <p className="font-extralight text-2xl text-gray-700">
      SOSC is a conglomeration of clubs and individuals who contribute to the community by helping us conduct events and activities. there are numerous clubs and experts who help shape the community to be pro-active. Mozilla Campus Clubs, Developer Students clubs, and the GitHub Campus Expert are to name a few.
    </p>

    </div>
    <img
    className="w-200"
    src="https://sosc.org.in/_astro/hero_clubs.DTTDV-jy_1p64vp.webp"/>
</div>


<div className="flex flex-col md:flex-row w-full gap-10  mx-auto mt-40 px-6">
  <img
    className="w-200"
    src="https://sosc.org.in/_astro/hero_connect.CV53XNoK_Z2hOGEd.webp"/>

  <div className="flex flex-col gap-3 max-w-full mt-70">
    <h1 className="font-semibold text-4xl">
     Get Connected !
    </h1>

    <p className="font-extralight text-2xl text-gray-700 ">
      Meet people with similar interest to work together on projects and host events to build a better collaborative environment. We are more than 100 members with interests on various fields of technology here to know each other and get connected. Meet our members to know more about us and build something cool!
    </p>
    <button className=" bg-[oklch(77.034%_0.20078_152.412)] rounded-3xl text-white px-6 py-2 w-fit">Learn More</button>
  </div>
</div>
<Footer/>
        </div>

    )
}