"use client";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Guidelines() {
  return (
    <>
      <NavBar />

      <div className="pt-[120px] max-w-5xl mx-auto px-6 py-16 text-black font-sans">
        <div className="flex justify-center mb-6">
          <img
            src="https://sosc.org.in/_astro/sosc_logo.DBzxZ_Go_Z10hDC0.svg"
            alt="SOSC Logo"
            className="h-24 w-auto"
          />
        </div>

        <h1 className="text-4xl font-bold mb-6">Community Guidelines</h1>

        <p className="mb-4">
        Welcome to Sahyadri Open-Source Community. We are a community of tech enthusiasts working hard to spread knowledge and strengthen the collaborative culture among young minds. SOSC was born through the convergence of Technical clubs at Sahyadri — Mozilla Campus Club, Developer Students Club, and some aspiring individuals who are keen to share knowledge for the community.


 </p>
 <p className="mb-4">
    SOSC is a community. When you talk, post, or reply, there are people reading what you say. These people have dreams, perspectives, feelings, and experiences just like you. You might meet many through events like Hackathons or conferences. Treat everyone like a potential friend.

 </p>

        <p className="mb-4">
          This document makes SOSC a welcoming place. The rules apply to all core members, volunteers, and participants. This isn't an exhaustive list but a spirit — a guide to be excellent to each other.
       
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-2">Be Considerate</h2>
        <p className="mb-4">SOSC is a collaboration of clubs and individuals helping conduct events. Mozilla Campus Clubs, Developer Students Clubs, and GitHub Campus Experts are part of this ecosystem.</p>

        <h2 className="text-2xl font-bold mt-8 mb-2">Be Respectful</h2>
        <p className="mb-4">Disagreements happen, but poor behavior isn't allowed. A productive community is a safe one. Respect fellow members and outsiders alike.</p>

        <h2 className="text-2xl font-bold mt-8 mb-2">Be Collaborative</h2>
        <p className="mb-4">Collaboration helps us grow beyond individual goals. We celebrate good teamwork and work transparently with others like Sahyadri College of Engineering and other open-source communities.</p>

        <h2 className="text-2xl font-bold mt-8 mb-2">Be Nice and Do Not Harass Others</h2>
        <p className="mb-4">Everyone should feel welcome. Any harassment will result in removal. Harassment includes:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>Offensive comments</li>
          <li>Unwelcome sexual attention</li>
          <li>Threats, intimidation, stalking</li>
          <li>Targeted harassment</li>

        </ul>
        <p className="mb-4">
            If harassment occurs, comply when asked to stop. Report incidents to organizers. They may involve security or take other actions to protect members
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-2">Communicate Effectively</h2>
        <p className="mb-4">We all communicate differently. Clear, respectful communication avoids misunderstandings. Ask for clarification when needed. Avoid trolling, flame wars, or personal attacks.</p>

        <h2 className="text-2xl font-bold mt-8 mb-2">Unaffiliated Promotions</h2>
        <p className="mb-4">Don’t promote unrelated content without permission. Persistent promotion may result in removal. Contact the listed organizers for approval before promoting anything.</p>

        <h2 className="text-2xl font-bold mt-8 mb-2">Violating the Code of Conduct</h2>
        <p className="mb-4">Violations may lead to a 6-month suspension or permanent removal, based on severity, as decided by the community leads. </p>

        <p className="mt-10 text-sm text-gray-600 italic">
  The Sahyadri Open-Source Community Code of Conduct is licensed under the 
  <span className="text-green-600 font-semibold">Creative Commons Attribution-Share Alike 3.0</span> 
  license. Inspired by 
  <span className="text-green-600 font-semibold">zatech</span>, 
  <span className="text-green-600 font-semibold">Ubuntu</span>, 
  and 
  <span className="text-green-600 font-semibold">Elastic</span> 
  communities.
</p>

      </div>

      <Footer />
    </>
  );
}
