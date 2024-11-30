import React from "react";
import "./ourteam.css";
import MJ from "../media/MJ.jpg"
import Ethan from "../media/TM1.jpg"
import CTO from "../media/cto.jpg"

const mjAbout = "MJ is a tech evangelist with 10 years of experience in the SAAS and AI start-up industry. MJ’s expertise spans across early start-up engagement, product development, go-to-market strategies, customer success, and driving enterprise-level AI adoption in complex, sensitive environments.Before founding Sisi AI, he was a key member of the Databricks public sector team, driving AI and big data initiatives for government and defense agencies. As one of the first members of Primer AI, MJ helped develop and deliver large language models for intelligence extraction and predictive analytics for decision makers in high-priority environments. MJ has extensive experience across multiple startups (Zest AI, Elastic Search, Viviota), where he contributed to delivering AI and machine learning solutions across diverse sectors including government, finance, healthcare, energy, and commercial applications. Realizing the need to research and develop sovereign AI solutions to address Africa's unique challenges, MJ moved to Uganda to launch Sisi AI."


const teamMembers = [
  {
    id: 1,
    name: "Alice Johnson",
    position: "Project Manager",
    bio: {mjAbout},
    image: "path-to-alice-image.jpg",
  },
  {
    id: 2,
    name: "Bob Smith",
    position: "Lead Developer",
    bio: "Bob specializes in full-stack development and has a passion for crafting clean, scalable code.",
    image: "path-to-bob-image.jpg",
  },
  {
    id: 3,
    name: "Charlie Lee",
    position: "UI/UX Designer",
    bio: "Charlie creates intuitive user experiences and stunning visual designs for our clients.",
    image: "path-to-charlie-image.jpg",
  },
];

function OurTeam() {
  return (
    <div className="our-team">
      <h1 className="team-heading">Meet Our Team</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className={`team-member ${
              index % 2 === 0 ? "text-left" : "text-right"
            }`}
          >
            {/* Team Member Text */}
            <div className="member-content">
              <h2 className="member-name">{member.name}</h2>
              <h3 className="member-position">{member.position}</h3>
              <p className="member-bio">{member.bio}</p>
            </div>

            {/* Team Member Image */}
            <div className="member-image">
              <img src={member.image} alt={member.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
