import React, { useEffect, useRef, useState } from 'react';
import { Collapse, Divider } from 'antd';
import Header from '../atoms/Header';
import Footer from "../atoms/Footer"
import "./about.css"


function Framer() {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  return (
    <div className='body-about'>
  <Header/>
  <div className="about-page">
<div className="about-image">
<div className="left-about"></div>
<div className="right-about">
  <p className="right-about-title">Why we are different</p>
  <li className="about-list">
    <ul>SiSi AI was founded by a Pan-African team committed to advancing AI technologies that
strengthen Africa’s next-generation capabilities. We focus on nurturing local talent and
capabilities while safeguarding sensitive, proprietary data on the continent</ul>
<ul>Our team has over 20 years of experience in the data and AI industry across multiple
practices and industries.</ul>
<ul>
SiSi AI develops proprietary machine learning models from scratch, allowing us to
customize and deploy in a dynamic, versatile and agile manner, whether we are in the
cloud or on premis
</ul>
  </li>
</div>
</div>
<div className="solutions">
<div className=''>
    <Divider orientation="left">Default Size</Divider>
    <Collapse
      items={[{ key: '1', label: 'This is default size panel header', children: <p>{text}</p> }]}
    />
    <Divider orientation="left">Small Size</Divider>
    <Collapse
      size="small"
      
      items={[{ key: '1', label: 'This is small size panel header', children: <p>{text}</p> }]}
    />
    <Divider orientation="left">Large Size</Divider>
    <Collapse
      size="large"
      items={[{ key: '1', label: 'This is large size panel header', children: <p>{text}</p> }]}
    />
  </div>

</div>
  </div>
  {/* <Footer/> */}
    </div>
  );
}

export default Framer;
