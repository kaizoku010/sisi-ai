import React, { useEffect, useRef, useState } from 'react';
import { Collapse, Divider } from 'antd';

function Framer() {
  const [zVals, setZVals] = useState([]);
  const scrollMsgRef = useRef(null);
  const framesRef = useRef([]);
  const numFramesRef = useRef(0);
  const perspective = 300;
  const zSpacing = -1000;

  useEffect(() => {
    const frames = document.querySelectorAll('.frame');
    const numFrames = frames.length;
    numFramesRef.current = numFrames;
    framesRef.current = Array.from(frames);
    let zVals = [];
    for (let i = 0; i < numFrames; i++) {
      zVals.push((numFrames - i) * zSpacing);
    }
    setZVals(zVals);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY || document.documentElement.scrollTop;
      const delta = lastPos - top;
      const frames = framesRef.current;
      const numFrames = numFramesRef.current;
      let updatedZVals = [...zVals];
      for (let i = 0; i < numFrames; i++) {
        const newZVal = updatedZVals[i] + (delta * -1.5);
        const frame = frames[i];
        const transform = `translateZ(${newZVal}px)`;
        const opacity = newZVal < 200 ? 1 : 1 - parseInt((newZVal - 200) / (perspective - 200) * 10) / 10;
        const display = newZVal > perspective ? "none" : "block";
        frame.style.transform = transform;
        frame.style.opacity = opacity;
        frame.style.display = display;
      }
      const scrollMsg = scrollMsgRef.current;
      if (scrollMsg && updatedZVals[numFrames - 1] > 200) {
        scrollMsg.parentNode.removeChild(scrollMsg);
        scrollMsgRef.current = null;
      }
      setZVals(updatedZVals);
    };

    const lastPos = window.scrollY || document.documentElement.scrollTop;
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [zVals]);

  return (
    <div className='body'>
      <div id="content">
        <div id="instructions-overlay" ref={scrollMsgRef}>
          <h1>Initial Instructions Overlay</h1>
          <p>This will go away after you scroll</p>
          <p>Orig Source Code From <a href="http://eng.wealthfront.com/2012/03/22/scrolling-z-axis-with-css-3d-transforms/">Matt Baker</a></p>
        </div>
        <div className="frame box imageslide2" style={{ transform: `translateZ(${zVals[1]}px)`, MozTransform: `translateZ(${zVals[1]}px)` }}>
          <div className='view-two'>Frame 2 (Box)</div>
        </div>
        <div className="frame box imageslide" style={{ transform: `translateZ(${zVals[0]}px)`, MozTransform: `translateZ(${zVals[0]}px)` }}>
          <div className=''>Frame 1 (Box)</div>
        </div>
      </div>
    </div>
  );
}

export default Framer;
