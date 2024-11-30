import React from 'react'
import "./footer.css"
import MailIc from "../media/mail.svg"
import X from "../media/x.svg"
import Linked from "../media/linked.svg"

function Footer() {
  return (
    <section className='footer_section'>
<div>
<div className='footer-top-left'>       
        <p className='subscribe-text'>Subscribe for more</p>
        <img src={MailIc} className='mail-ic'/>
      </div>
<div className='footer-top-right'>

</div>
</div>

    </section>
  )
}

export default Footer