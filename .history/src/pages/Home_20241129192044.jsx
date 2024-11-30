import Hero from "../atoms/Hero"
import "../site.scss"
import "./home.css"

const Home = ()=>{
    return <div className="">
        <section className="section-two">
            <Hero/>
        </section>
        <section className="section-one">Our Team</section>
        <section className="section-two">About Us</section>
    </div>
}


export default Home