import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const Thumbnail = () =>{
  const [image, setImage] = useState(null)
  
  useEffect(()=>{
    const bgImage = new Image();
    bgImage.src = 
    bgImage.onload = () => setImage(bgImage)
  }, [])



return (
  <div>
    <h1>STARGAZER blog Thumbnail Maker!</h1>

    <div>
      <canvas>
        
      </canvas>
    </div>
  </div>
)
}

export default Thumbnail;
