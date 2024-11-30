import Hero from "../atoms/Hero"
import "../site.scss"
import "./home.css"
import CC from "../media/cc.png"
import { Button } from "antd"
import { useNavigate } from "react-router-dom"
import HeroExtras from "../atoms/HeroExtras"
import AnimatedTextArea from "../atoms/AnimatedTextArea"

const HomeMain = ()=>{
    const navigation = useNavigate()

    const teampage = ()=>{
        navigation("/our-team")
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
    <div className="hie-box gradient-overlay">
        
    </div>

</div>
        </section>


    </div>
}


export default HomeMain