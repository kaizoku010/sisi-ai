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
  
    </div>
  );
}

export default Framer;
