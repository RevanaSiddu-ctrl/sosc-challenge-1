import Image from "next/image";
import NavBar from "../compnents/NavBar";
import Footer from "../compnents/Footer";

export default function Guidelines() {
  return (
    <>
      <NavBar />

      <div className="w-full flex flex-col items-center mt-[100px] px-6 md:px-20">

        {/* Header Logo */}
        <Image
          src="https://sosc.org.in/_astro/sosc_logo.DBzxZ_Go_Z10hDC0.svg"
          alt="SOSC Logo"
          width={120}
          height={120}
          className="mb-6"
        />

        {/* Title */}
        <h1 className="text-4xl font-bold text-black mb-5">
          Community Guidelines
        </h1>

        {/* Content Box */}
        <div className="max-w-4xl text-gray-800 text-lg leading-relaxed space-y-6">

          <p>
            Welcome to Sahyadri Open-Source Community. We are a community of tech
            enthusiasts working hard to spread knowledge and strengthen the collaborative
            culture among young minds. SOSC was born through the convergence of Technical
            clubs at Sahyadri — Mozilla Campus Club, Developer Students Club, and
            aspiring individuals keen to share knowledge for the community.
          </p>

          <p>
            SOSC is a community. When you talk, post, or reply, there are people reading
            what you say. These people have dreams, perspectives, feelings, and
            experiences just like you. You might meet many through events like Hackathons
            or conferences. Treat everyone like a potential friend.
          </p>

          <p>
            This document makes SOSC a welcoming place. The rules apply to all core
            members, volunteers, and participants. This isn't an exhaustive list but a
            spirit — a guide to be excellent to each other.
          </p>

          
          <h2 className="text-2xl font-semibold mt-6">Be Considerate</h2>
          <p>
            SOSC is a collaboration of clubs and individuals helping conduct events.
            Mozilla Campus Clubs, Developer Students Clubs, and GitHub Campus Experts
            are part of this ecosystem.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Be Respectful</h2>
          <p>
            Disagreements happen, but poor behavior isn't allowed. A productive community
            is a safe one. Respect fellow members and outsiders alike.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Be Collaborative</h2>
          <p>
            Collaboration helps us grow beyond individual goals. We celebrate good
            teamwork and work transparently with others like <a href="https://www.sahyadri.edu.in/"className="text-blue-600 underline hover:text-blue-800"
> Sahyadri College of Engineering </a> and other open-source communities.
          </p>
          {/* <a 
  href="https://www.sahyadri.edu.in/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-blue-600 underline hover:text-blue-800"
>
  Sahyadri College of Engineering
</a> */}

          <h2 className="text-2xl font-semibold mt-6">
            Be Nice and Do Not Harass Others
          </h2>
          <p>Everyone should feel welcome. Any harassment will result in removal.</p>

          <p>Harassment includes:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Offensive comments about identity, appearance, or beliefs</li>
            <li>Unwelcome sexual attention or contact</li>
            <li>Threats, intimidation, or stalking</li>
            <li>Deliberate disruption or targeted harassment</li>
          </ul>

          <p>
            If harassment occurs, comply when asked to stop. Report incidents to
            organizers. They may involve security or take action to protect members.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Communicate Effectively</h2>
          <p>
            We all communicate differently. Clear, respectful communication avoids
            misunderstandings. Avoid trolling, flame wars, or personal attacks.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Unaffiliated Promotions</h2>
          <p>
            Don't promote unrelated content without permission. Persistent promotion may
            result in removal.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Violating the Code of Conduct</h2>
          <p>
            Violations may lead to a 6-month suspension or permanent removal, based on
            severity, as decided by the community leads.
          </p>

          <p className="italic text-sm text-gray-600 mt-4">
            The Sahyadri Open-Source Community Code of Conduct is licensed under the
            Creative Commons Attribution-Share Alike 3.0 license. Inspired by zatech,
            Ubuntu, and Elastic communities.
          </p>
          
        </div>
      </div>

      <Footer />
    </>
  );
}
