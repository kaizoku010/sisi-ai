import React from 'react'
import "./header.css"
import Logo from "../media/logo.png";

function Header() {
  return (
<div className='header'>
<img src={Logo} className='logo'/>

<ul className='menu-links'>
    <li className='menu-link'>Home</li>
    <li className='menu-link'>Team</li>
    <li className='menu-link'>About</li>
    
</ul>

</div>
  )
}

export default Header