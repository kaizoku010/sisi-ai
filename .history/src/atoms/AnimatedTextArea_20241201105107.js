import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./animatedtextarea.css";
import Cut from "../media/cut.gif"
import CC from "../media/cc.png"
import { useNavigate } from "react-router-dom";

function AnimatedTextArea() {
  const [currentHighlight, setCurrentHighlight] = useState(0);
const text="Our team of AI experts partners with organizations to deliver off the shelf & custom solutions that unlock insights, enhance efficiency, and drive impact. From data structuring to predictiveanalytics, we empower growth, resilience, and security across the continent"

const solutionsPage =()=>{
  const navigate  useNavigate()
}
  return (
    <div>
 <div className="ata-section">
      <div className="ata-section-left">
        <p className="ot_subtitle">Meet Our Team</p>
        <p className="ot_subs">{text}</p>
      </div>
      <div className="ata-section-right">
        <div
          style={{
            color: "#ffffff",
            padding: "20px",
          }}
        >
<img className="cut" src={Cut}/>
        </div>
      </div>
      
    </div>

    <div className="upsaler">
<div className="upsaler-left">
<p className="upsaler-title-one">WHY WE ARE DIFFERENT</p>
<h2 className="cross-cutting-text">Cutting-edge AI Software</h2>
<p className="cct-subText">
SiSi AI was founded by a Pan-African team committed to advancing AI technologies that strengthen Africa’s next-generation capabilities. We focus on nurturing local talent and capabilities while safeguarding sensitive, proprietary data on the continent.</p>

<button className="read_more">Read More</button>

</div>
<div className="upsaler-right">
  <img className="bars" src={CC}/>
</div>

    </div>
    </div>
   
  );
}

export default AnimatedTextArea;
