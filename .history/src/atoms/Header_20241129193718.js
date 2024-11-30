import React,{useState} from 'react'
import "./header.css"
import Logo from "../media/logo.png";
import MobileDrawer from 'nyx-drawer-menu';\

function Header() {

  
 const [isDrawerOpen, setIsDrawerOpen] = useState(false);

 const toggleDrawer = () => { setIsDrawerOpen(!isDrawerOpen); };
  return ( 
<div className='header'>
  <div className='header-inner-section'>
  <img src={Logo} className='logo'/>

<ul className='menu-links'>
    <li className='menu-link'>Home</li>
    <li className='menu-link'>Team</li>
    <li className='menu-link'>About</li>
</ul>
  </div>
<div className='mobile-header'>
<img src={Logo} className='logo'/>
<div>
<MobileDrawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
    <h2>Drawer Content</h2>
    
    <p>This is the content inside the mobile drawer.</p>
    <button onClick={toggleDrawer}>Close Drawer</button>
  </MobileDrawer>
</div>
</div>
</div>
  )
}

export default Header