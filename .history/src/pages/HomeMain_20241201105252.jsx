import Hero from "../atoms/Hero"
import "../site.scss"
import "./home.css"
import CC from "../media/cc.png"
import { Button } from "antd"
import { useNavigate } from "react-router-dom"
import HeroExtras from "../atoms/HeroExtras"
import AnimatedTextArea from "../atoms/AnimatedTextArea"
import Vis from "../media/nets.jpg"
import Footer from "../atoms/Footer"

const HomeMain = ()=>{
    const navigation = useNavigate()

    const teampage = ()=>{
        navigation("/our-team")
    }

    const solutionsPage = ()=>{
        navigation("/about")
    }



    return <div className="main-div">
        <section className="section-two">
            <Hero/>
            {/* <img src={CC} className="cc-soon" />
            <h1 className="coming-soo">Site under constraction</h1>
            <Button onClick={teampage} type="primary" className="view-teams-btn">View our team</Button> */}

        </section>
   
        <section className="section-one">
            <HeroExtras/>
        </section>
        <section className="section-two">
            <AnimatedTextArea/>
        </section>
        <section className="section-two">
<div className="home-inner-element">
    <div className="hie-box">
        <div className="overlay-bg">
<div className="left-ol2">
    <div className="line"></div>
    <p className="catch-phrase">SiSi AI develops proprietary machine learning models from scratch</p>
<button onClick={solutionsPage} className="line-btn">Learn More</button>
</div>
        </div>
        
    </div>

</div>
        </section>

        <section className="section-two">
<div className="home-team-section">
<div className="overlay-hts ">
    <div className="right-box">

    </div>
    <div className="left-box">
        <p className="box-career-text">Extras</p>
        <p className="box-heading">More about us</p>
        <p className="box-desc">Innovation is at the heart of our business. We’re using the latest advances in data science and engineering and putting them to work in the real world. Reach out if you have any questions.</p>

        <button onClick={solutionsPage}  className="reachout-btn">Reach Out</button>
        </div>te
</div>
</div>
        </section>

        <section className="section-two">
<div className="reach_out_section">
    <div className="call-to-action">
<p className="findout">Find out how SISI AI can provide your organisation with a transformational competitive edge</p>
<button className="cta-button">CONTACT US</button>

    </div>
    <div className="call-to-action-text">
<p className="socials-cta">Download the SISI AI brochure</p>
<p className="socials-cta-2">Find out more about SISI AI</p>
<button className="cta-button">WRITE TO US</button>
    </div>

</div>
        </section>

<Footer/>

    </div>
}


export default HomeMain