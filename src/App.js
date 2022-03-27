import React, { useState, useEffect, useRef } from 'react';
import { SketchPicker, BlockPicker } from 'react-color';
import { fab, faGithub, faInstagram, faFacebook, faTwitter, faGooglePlay, faGit } from "@fortawesome/free-brands-svg-icons";


import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Thumbnail = () =>{
  const [color, setColor] = useState('#dae5e8')
  const [showButton, setShowButton] = useState(false)
  const canvas = useRef(null)
  const [thumbText, setThumbText] = useState('')
  const [image, setImage] = useState(null)

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
    <div id="divHeader">
        <h1>STARGAZER blog Thumbnail Maker</h1>

        <div id="divGithubLink">
            <a href="https://github.com/HarenKei/Thumbnail_Maker"><FontAwesomeIcon icon={faGithub} color="black" size="2x"/></a>
        </div>
    </div>
    <div id="divCanvas">
      <canvas 
        ref={ canvas } 
        width="800px"
        height="500px"
      /> 
    
    </div>

    <div id="divCanvasAdjustment">

      <div id="divColorpicker">
        <button onClick={()=>setShowButton(showButton=>!showButton)}>
          {showButton ? '배경 색상 선택창 닫기' : '배경 색상 선택하기'}
        </button>
        {showButton && (<BlockPicker
                          color={color}
                          onChangeComplete={(color) => setColor(color.hex)}/>
                        )
        }
      </div>

      <div id="divImageSelect">
        <input type={image}/>
        <button>이미지 삽입</button>
      </div>
   
     <div id="divTextInput">
        <input type="text" placeholder="썸네일 텍스트" 
          value={ thumbText } 
          onChange = {e=> setThumbText(e.target.value)} 
        />

      
      
      </div>
    </div>
  </div>
)
}

export default Thumbnail;