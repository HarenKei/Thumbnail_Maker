import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const Thumbnail = () =>{
  const [image, setImage] = useState(null)
  const canvas = useRef(null)
  const [thumbText, setThumbText] = useState('')
  
  useEffect(()=>{
    const bgImage = new Image();
    bgImage.src = "image/background.jpeg"
    bgImage.onload = () => setImage(bgImage)
  }, [])

  useEffect(()=>{
    if(image && canvas){
      const ctx = canvas.current.getContext("2d")
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, 960, 540)
      ctx.fillText(thumbText,(400 / 2), 25)
    }

  },[canvas,thumbText,image ])



  const onChange = (e) => {

  }
  

return (
  <div>
    <h1>STARGAZER blog Thumbnail Maker!</h1>

    <div>
      <canvas 
        ref={ canvas } 
        width="800px" 
        height="500px" 
      /> {/*썸네일의 배경이 될 이미지를 표시하며, 텍스트 작성을 보여준다.*/}
    </div>
    <div>
      썸네일 텍스트 : <input type="text" value={ thumbText } onChange = {e=> setThumbText(e.target.value)} />
      
    </div>
  </div>
)
}

export default Thumbnail;
