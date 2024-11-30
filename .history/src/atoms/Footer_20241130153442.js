import React from 'react'
import "./footer.css"
import MailIc from "../media/mail.svg"
import X from "../media/x.svg"
import Linked from "../media/linked.svg"

function Footer() {
  return (
    <div className='footer_section'>
      <div className='footer-top'>
        <p className='sub-text'>Subscribe for more</p>
        <img src={MailIc} className='mail-ic'/>
      </div>


    </div>
  )
}

export default Footer