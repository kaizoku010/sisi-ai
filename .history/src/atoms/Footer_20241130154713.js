import React from 'react'
import "./footer.css"
import MailIc from "../media/mail.svg"
import X from "../media/x.svg"
import Linked from "../media/linked.svg"

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
<div></div>
</div>

    </section>
  )
}

export default Footer