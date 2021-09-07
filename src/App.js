import React, { useState, useEffect, useRef } from 'react';
import { SketchPicker, BlockPicker } from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFill } from '@fortawesome/free-solid-svg-icons';

import './App.css';

const Thumbnail = () =>{
  const [color, setColor] = useState('#fff')
  const [showButton, setShowButton] = useState(false)
  const canvas = useRef(null)
  const [thumbText, setThumbText] = useState('')

  useEffect(() => {
      const ctx = canvas.current.getContext("2d")
      ctx.fillStyle= color
      ctx.fillRect(0, 0, 960, 540)

      ctx.font = "60px Noto Sans CJK KR"
      ctx.fillStyle = "white"
      ctx.fillText(thumbText, (800/2), (500/2))
      ctx.textBaseline = "middle"
      ctx.textAlign = "center"

  }, [canvas, thumbText, color])


  
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
      <button onClick={()=>setShowButton(showButton=>!showButton)}>
        <FontAwesomeIcon icon={faFill} color={color} size="lg"/>
        {/*{showButton ? '배경 색상 선택창 닫기' : '배경 색상 선택하기'}*/}
      </button>
      {showButton && (<BlockPicker
                        color={color}
                        onChangeComplete={(color) => setColor(color.hex)}/>
                      )
      }

    </div>
   
    <div>
      <input type="text" 
        value={ thumbText } 
        onChange = {e=> setThumbText(e.target.value)} 
      />
      <br/>
      썸네일 텍스트
      
      
    </div>
  </div>
)
}

export default Thumbnail;
