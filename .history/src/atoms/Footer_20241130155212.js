import React from 'react'
import "./footer.css"
import MailIc from "../media/mail.svg"
import X from "../media/x.svg"
import Linked from "../media/linked.svg"
import Logo from "../media/logo_white_rec.svg"

function Footer() {
  return (
    <section className='footer_section'>
<div className='footer-top'>
<div className='footer-top-left'>       
<p>Home</p>
<p>Our Team</p>
<p>About Us</p>
      </div>
<div className='footer-top-right'>
<p className='sisi-mail'>mail@sisiai.com</p>
</div>
</div>
<div className='lower-footer'>
<div className='lower-footer-top'>
    <img src={Logo} className='footer-logo'/>
    <li className='link-list'>
        <ul>Carbon Reduction Plan</ul>
        <ul>Privacy Policy</ul>
        <ul>Copyright 2024 Adarga Limited</ul>
    </li>
</div>
<p className='low'>'Adarga', 'Adarga Knowledge Platform' and 'Adarga Insight' are the registered trade marks of Adarga Limited.
Microsoft Azure, AWS and Google have been listed as a partners as Adarga's Knowledge Platform is deployable on their cloud platforms.
The words ENHANCING HUMAN INGENUITY are a trade mark of Adarga Limited.</p>
</div>

    </section>
  )
}

export default Footer