import Hero from "../atoms/Hero"
import "../site.scss"
import "./home.css"

import MobileDrawer from 'nyx-drawer-menu';



const Home = ()=>{
    return <div className="main-div">
        <section className="section-two">
            {/* <Hero/> */}
            <p className="coming-soon">Site under constraction</p>
            <button>View our team</button>

        </section>
   
        {/* <section className="section-one">Our Team</section>
        <section className="section-two">About Us</section>
    */}
    </div>
}


export default Home