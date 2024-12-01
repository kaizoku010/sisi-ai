import React, { useEffect, useRef, useState } from 'react';
import { Collapse, Divider } from 'antd';
import Header from '../atoms/Header';
import Footer from "../atoms/Footer"
import "./about.css"


function Framer() {


  return (
    <div className='body-about'>
  <Header/>
  <div className="about-page">
<div className="about-image">
<div className="left-about"></div>
<div className="right-about">
  <p className=right-about-title>Why we are different</p>
</div>
</div>

  </div>
  {/* <Footer/> */}
    </div>
  );
}

export default Framer;
