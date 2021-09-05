import React, { useState, useEffect, useRef } from 'react';
import { SketchPicker, BlockPicker } from 'react-color';

import './App.css';

const Thumbnail = () =>{
  const [textColor, setTextColor] = useState(null)
  const canvas = useRef(null)
  const [thumbText, setThumbText] = useState('')

  useEffect(() => {
      const ctx = canvas.current.getContext("2d")
      ctx.fillStyle="#327da8"
      ctx.fillRect(0, 0, 960, 540)

      ctx.font = "50px Comic Sans MS"
      ctx.fillStyle = { textColor }
      ctx.fillText(thumbText, (800/2), (500/2))
      ctx.textBaseline = "middle"
      ctx.textAlign = "center"

  }, [canvas, thumbText])


  const fikColor = (textColor) =>{
    setTextColor({ textColor : textColor.hex })

  }

return (
  <div>
    <h1>STARGAZER blog Thumbnail Maker</h1>

    <div>
      <canvas 
        ref={ canvas } 
        width="800px"
        height="500px"
      /> 
    
    </div>
   
    <div>
      썸네일 텍스트 : <input type="text" value={ thumbText } onChange = {e=> setThumbText(e.target.value)} />
      <div>
        <BlockPicker color={textColor} onChange={fikColor} />
      </div>
      
    </div>
  </div>
)
}

export default Thumbnail;
