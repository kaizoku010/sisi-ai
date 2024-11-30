import React from "react";
import "./ourteam.css";

const mj-about


const teamMembers = [
  {
    id: 1,
    name: "Alice Johnson",
    position: "Project Manager",
    bio: "Alice is a dedicated project manager with 10 years of experience leading successful projects.",
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
