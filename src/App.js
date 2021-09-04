import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const Thumbnail = () =>{
  const [image, setImage] = useState(null)
  const canvas = useRef(null)
  
  useEffect(()=>{
    const bgImage = new Image();
    bgImage.src = 
    bgImage.onload = () => setImage(bgImage)
  }, [])



return (
  <div>
    <h1>STARGAZER blog Thumbnail Maker!</h1>

    <div>
      <canvas ref={ canvas } width="800px" height="500px">

      </canvas>
    </div>
  </div>
)
}

export default Thumbnail;
