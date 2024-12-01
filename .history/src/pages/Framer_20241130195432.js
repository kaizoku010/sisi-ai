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
<div className='solution-grid'>
    <Divider orientation="left">SiSi Insight</Divider>
    <Collapse
      items={[{ key: '1', label: 'Sisi Insight transforms how organizations manage and utilize data. By securely integrating internal and web sources, it reorganizes and reclassifies data to uncover insights and connections that would otherwise go unnoticed. With powerful, preconfigured visualizations, users can easily track critical performance indicators and gain actionable insights. At the touch of a button, Sisi Insight enables the creation and dissemination of rich, informative briefs, turning complex data into decisions faster than ever',
         children: <div>
          <li className="about-list-2">
            <ul>
            - Choose between a pay-per-user model or an enterprise-wide deployment
            </ul>
            <ul>
            - SiSi Insight ingests internal data from sources such as PDFs, spreadsheets, PowerPoint
            presentations, Word files,CRMs and web-based content
            </ul>
            <ul>
            - Users can leverage out-of-the-box models and visualizations, or customize and extend
            functionality using SiSi Modify
            </ul>
          </li>
         </div> }]}
    />
    <Divider orientation="left">SiSi Sentry</Divider>
    <Collapse
      
      items={[{ key: '1', label: 'Sisi Sentry is a ready-to-costomize AI solution tailored to the defense and intelligence demands unique to Africa. Designed with critical security organizations at its core, Sisi Sentry empowers teams to stay ahead of evolving threats. It harnesses AI to analyze and extract mission-critical insights, deploys predictive models to give operators a decisive edge, and provides continuous, scalable monitoring of sensitive assets for threat detection and prevention', 
              children: <div>
        <li className="about-list-2">
          <ul>
          - Automated Asset monitoring and management
          </ul>
          <ul>
           Self updating Intelligent Knowledge Graphs for Intelligence workloads
          </ul>
          <ul>
          Gain real-time, unified visibility into operations with a single pane of glass, enabling
          seamless interaction and analysis of mission-critical data in one centralized platform
          </ul>
        </li>
       </div> }]}    />
    <Divider orientation="left">SiSi Modify</Divider>
    <Collapse
      items={[{ key: '1', label: 'SiSi Modify is a bespoke enterprise service for users that need highly customized and structured end to end solutions'}]}    />
  </div>

</div>
  </div>
  {/* <Footer/> */}
    </div>
  );
}

export default Framer;
