import Hero from "../atoms/Hero"
import "../site.scss"
import "./home.css"
import CC from "../media/cc.png"
import { Button } from "antd"


import MobileDrawer from 'nyx-drawer-menu';



const Home = ()=>{
    return <div className="main-div">
        {/* <section className="section-two"> */}
            {/* <Hero/> */}
            <img src={CC} className="cc-soon" />
            <p className="coming-soon">Site under constraction</p>
            <Button className="view-teams-btn">View our team</button>

        {/* </section> */}
   
        {/* <section className="section-one">Our Team</section>
        <section className="section-two">About Us</section>
    */}
    </div>
}


export default Home