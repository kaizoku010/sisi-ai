import React,{useState} from 'react'
import "./header.css"
import Logo from "../media/logo.png";
import Mobile from "../media/logo.svg";

import MobileDrawer from 'nyx-drawer-menu';
import Hum from "../media/hum.png";
import CC from "../media/cc.png";
import { useNavigate } from 'react-router-dom';
function Header() {

  const navigatiion = useNavigate()
  
 const [isDrawerOpen, setIsDrawerOpen] = useState(false);

 const toggleDrawer = () => { setIsDrawerOpen(!isDrawerOpen); };
  const homeback =()=>{
    navigatiion("/")
  }
  return ( 
<div className='header'>
  <div className='header-inner-section'>
  <img onClick={homeback} src={Logo} className='logo'/>

<ul className='menu-links'>
    <li className='menu-link'>Home</li>
    <li className='menu-link'>Team</li>
    <li className='menu-link'>About</li>
</ul>
  </div>
<div className='mobile-header'>
<img onClick={homeback} src={Mobile} className='logo2'/>

<img src={Hum} className='hum-ic' onClick={toggleDrawer}/>
<MobileDrawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
<div className='drawer-content'>
<h2>SISI AI</h2>
    
    <p>Platform is currently under development.</p>
</div>
  </MobileDrawer>
</div>
</div>
  )
}

export default Header