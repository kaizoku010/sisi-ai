import React from "react";
import "./ourteam.css";
import MJ from "../media/MJ.jpg"
import Ethan from "../media/TM1.jpg"
import CTO from "../media/cto.jpg"
import O from "../media/og.jpg"

const mjAbout = "MJ is a tech evangelist with 10 years of experience in the SAAS and AI start-up industry. MJ’s expertise spans across early start-up engagement, product development, go-to-market strategies, customer success, and driving enterprise-level AI adoption in complex, sensitive environments.Before founding Sisi AI, he was a key member of the Databricks public sector team, driving AI and big data initiatives for government and defense agencies. As one of the first members of Primer AI, MJ helped develop and deliver large language models for intelligence extraction and predictive analytics for decision makers in high-priority environments. MJ has extensive experience across multiple startups (Zest AI, Elastic Search, Viviota), where he contributed to delivering AI and machine learning solutions across diverse sectors including government, finance, healthcare, energy, and commercial applications. Realizing the need to research and develop sovereign AI solutions to address Africa's unique challenges, MJ moved to Uganda to launch Sisi AI."
const ctoAbout = "Dr. Stephen M. Akandwanaho is a distinguished computer scientist with a PhD in Computer Science specialising in Artificial Intelligence. He possesses over ten years of deep expertise in AI model development, machine learning, evolutionary algorithms, and hyper-heuristics. In 2023, he was recognised with a professorship from the University of North-West, South Africa, reflecting his outstanding contributions in AI, advanced algorithms, and academic leadership. Dr. Akandwanaho’s research spans neural networks, combinatorial optimisation, and cyber-defence mechanisms, with an advanced technical skillset in developing and deploying large-scale AI applications. His technical expertise includes proficiency in machine learning frameworks like TensorFlow, PyTorch, and Keras, alongside extensive experience in Python, R, and Java for AI model programming. Dr. Akandwanaho is adept in designing and training deep neural networks for complex predictive analytics, natural language processing, and autonomous systems. Dr. Akandwanaho has led initiatives in AI-driven decision-making and data intelligence solutions. His work in integrating AI within secure, scalable architectures demonstrates his expertise in aligning technology with robust data governance and ethical AI practices, making him well-suited to lead high-stakes AI projects that demand precision, security, and innovation."
const info="Ethan Kawamara Mugire is a Machine Learning Engineer with a BSc in Computer Science and a minor in Security Informatics from Indiana University. He is currently pursuing a Master’s in Artificial Intelligence in Engineering & Design (MSc) at the University of Bath. Before joining Sisi AI, Ethan worked as a Programme Analyst at London Politica, where he explored the intersection of technology and politics. On the Emergent Technologies team, he analyzed trends and provided insights to clients navigating the political landscape, with a focus on cybersecurity, AI, and public policy. Ethan has also contributed to the data science field through open-source projects and corporate work. As a Data Analyst at Housing Finance Bank, he developed a data-driven advertising strategy to support marketing and sales efforts. Additionally, Ethan has experience as an ethical hacker, with expertise in network protocols and the application of cybersecurity across both public and private sectors."
const oil = "John is a results-driven Chemical Engineer with over 5 years of experience in the oil & gas and water supply industries. Holding a Bachelor of Science in Chemical Engineering from Kyambogo University, he is passionate about deploying cutting-edge technologies, especially AI, to drive innovation in the energy and natural resource sectors. At Sisi AI, John focuses on integrating AI solutions to enhance pipeline integrity, operations, and maintenance in the oil and gas industry. He has extensive experience in designing and executing drilling and completion fluid programs, including his current work on the Tilenga Oil Field project. Previously, he helped establish a petroleum quality testing lab at Nile Energy Limited and designed water systems for the Lutheran World Federation in Palorinya,"
const teamMembers = [
  {
    id: 1,
    name: "MJ Ssendagirwa",
    position: "Co-Founder & CEO",
    bio: {mjAbout},
    image: {MJ},
  },
  {
    id: 2,
    name: "Dr Stephen Akandwanaho",
    position: "Co-Founder & CTO",
    bio: {ctoAbout},
    image: {CTO},
  },
  {
    id: 3,
    name: "Ethan Kawamara",
    position: "Director of Information Security",
    bio: {info},
    image: {Ethan},
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
