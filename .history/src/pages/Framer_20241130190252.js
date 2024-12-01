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
